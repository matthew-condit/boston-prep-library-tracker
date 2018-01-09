import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import BookItem from './bookItem/bookItem';

const withBooksData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get('books');
        // need to fix this on backend
        console.log(this.props)
        this.props.setBooksList(booksData.data.splice(0, 20));
    }
});

const enhance = compose(
    withState('booksList', 'setBooksList', []),
    withBooksData,

);

const booksListPure = ({ booksList }: any) => {
    return (
        <div><h1>Books List</h1>
            {
                booksList.map(book => (<BookItem key={book.id} book={book} />))
            }
        </div>
    );
}

export default enhance(booksListPure);