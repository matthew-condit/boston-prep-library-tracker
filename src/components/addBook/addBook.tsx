import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import SearchBook from './searchBook/searchBook';
import axios from 'axios';
import BooksList from '../booksList/booksList';
import './addBook.css';

const enhance = compose(
    withState('searchResults', 'setSearchResults', []),
);

const addBookPure = ({ searchResults, setSearchResults }: any) => {
    const searchProps = {
        setSearchResults
    };

    const bookListProps = {
        booksList: searchResults
    };
    console.log(searchResults)
    return (
        <div className='add-book'>
            <h1>Add Book View</h1>
            <SearchBook {...searchProps} />
            <BooksList booksList={searchResults} />
        </div>
    );
};

export default enhance(addBookPure);