import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';

import {Redirect} from 'react-router-dom';
import { enhanceWithRedirect } from '../../../enhancers/index';

const withBookData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get(`../classes/students/${this.props.match.params.id}`);
        this.props.setBook(booksData.data);
    }
});

const onAddBookClicked = ({book, setRedirect}) => async (e) => {
    setRedirect(`../book/add/${book.id}`);
};

const enhance = compose(
    withState('book', 'setBook', {}),
    withBookData,
    withHandlers({
        onAddBookClicked
    })
);




const StudentListPure = ({ students}: any) => {
    if (students) {
        return (
            <div className='StudentList'>
                {students.map((student, index) => {
                    return <div>{student.firstname}</div>
                })}
            </div>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
};

export default enhanceWithRedirect()(enhance((StudentListPure)));