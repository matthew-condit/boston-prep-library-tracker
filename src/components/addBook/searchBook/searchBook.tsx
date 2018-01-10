import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import LabeledInput from '../../common/labeledInput/labeledInput';
import FuzzySearch from './fuzzySearch/fuzzySearch';
import AdvancedSearch from './advancedSearch/advancedSearch';
import axios from 'axios';

const withBooksData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get('books');
        // need to fix this on backend
    }
});

const onSearchSubmit =  ({setSearchResults}) => async (searchResults) => {
    console.log(searchResults);
    setSearchResults(searchResults);
};


const enhance = compose(
    // withState('booksList', 'setBooksList', []),
    withBooksData,
    withHandlers({
        onSearchSubmit
    })
);

const searchBookPure = ({ onSearchSubmit }: any) => {
    const fuzzySearchProps ={ onSearchSubmit };
    return (
        // add fuzzy vs. advanced
        <div>
            <FuzzySearch {...fuzzySearchProps}/>
        </div>
    );
}

export default enhance(searchBookPure);