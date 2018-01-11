import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';

import {Redirect} from 'react-router-dom';
import { enhanceWithRedirect } from '../../enhancers/index';
import './bookOverview.css';

const withBookData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get(`../books/${this.props.match.params.id}`);
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




const BookOverviewPure = ({ book, onAddBookClicked}: any) => {
    if (book) {
        return (
            <div className='BookItem'>
                <div>{book.title}</div>
                <div>{book.description}</div>
                <div className='BookItem__add-button' onClick={onAddBookClicked}>
                    Add Book
                </div>
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

export default enhanceWithRedirect()(enhance((BookOverviewPure)));