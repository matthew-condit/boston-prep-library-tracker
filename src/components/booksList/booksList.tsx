import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import BookItem from '../bookItem/bookItem';

import './booksList.css';

const booksListPure = ({ booksList }: any) => {
    return (
        <div className='BooksList'>
            <h1>Books List</h1>
            <div className='BooksList__list-wrapper'>
            {
                booksList.map(book => (<BookItem key={book.id} book={book} />))
            }
            </div>
        </div>
    );
};

export default booksListPure;