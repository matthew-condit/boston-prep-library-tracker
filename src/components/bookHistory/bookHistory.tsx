import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import BookList from '../booksList/booksList';

const withBooksData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get('books');
        this.props.setBooksList(booksData.data.splice(0, 20));
    }
});

const enhance = compose(
    withState('booksList', 'setBooksList', []),
    withBooksData
);

const browseBooksPure = ({ booksList }: any) => {
    return (
        <BookList booksList={booksList} />
    );
};

export default enhance(browseBooksPure);