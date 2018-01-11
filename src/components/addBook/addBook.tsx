import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import SearchBook from '../searchBook/searchBook';
import axios from 'axios';
import { enhanceWithRedirect } from '../../enhancers/index';

import BooksList from '../booksList/booksList';
import './addBook.css';

const addBook = ({book, userId, setRedirect})=> async () => {
    const result = await axios.post('../../users/addBook', {
        bookId: book.id,
        userId: 1
    });
    console.log(result);
    setRedirect(`../../my-books`);
};

const withBookData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get(`../../books/${this.props.match.params.id}`);
        this.props.setBook(booksData.data);
    }
});


const enhance = compose(
    withState('searchResults', 'setSearchResults', []),
    withState('book', 'setBook', ''),
    withBookData,
    withHandlers({
        addBook
    })
);

const addBookPure = ({ book, addBook }: any) => {
    console.log(book);
    return (
        <div className='add-book'>
            <h1>Add Book View</h1>
            <div>{book.title}</div>
            <button onClick={addBook}>Add it!</button>
        </div>
    );
};

export default enhanceWithRedirect()(enhance(addBookPure));
