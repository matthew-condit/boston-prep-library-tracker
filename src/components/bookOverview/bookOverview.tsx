import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';

import './bookOverview.css';

const withBookData = lifecycle({
    componentWillMount: async function () {
        const id = 1;
        console.log(this);
        const booksData = await axios.get(`../books/${this.props.match.params.id}`);
        this.props.setBook(booksData.data);
    }
});

const enhance = compose(
    withState('book', 'setBook', ''),
    withBookData
);




const BookOverviewPure = ({book}: any) => {
    if (book) {
        return (
            <div className='BookItem'>
                <div>{book.title}</div>
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

export default enhance(BookOverviewPure);