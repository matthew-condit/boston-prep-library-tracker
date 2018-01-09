import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import SearchBook from './searchBook/searchBook';
import axios from 'axios';

const enhance = compose(
    withState('searchResults', 'setSearchResults', []),
);

const addBookPure = ({ searchResults, setSearchResults }: any) => {
    const searchProps = {
        setSearchResults
    };

    const bookListProps = {
        searchResults
    };
    return (
        <div>
            <h1>Add Book View</h1>
            <SearchBook {...searchProps} />
            <booksList {...bookListProps} />
        </div>
    );
};

export default enhance(addBookPure);