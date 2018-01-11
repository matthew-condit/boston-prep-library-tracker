import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import LabeledInput from '../common/labeledInput/labeledInput';
import FuzzySearch from './fuzzySearch/fuzzySearch';
import AdvancedSearch from './advancedSearch/advancedSearch';
import BooksList from '../booksList/booksList';
import axios from 'axios';
import './searchBook.css';

const onSearchSubmit =  ({setSearchResults}) => async (searchResults) => {
    setSearchResults(searchResults);
};


const enhance = compose(
    // withState('booksList', 'setBooksList', []),
    withState('searchResults', 'setSearchResults', []),
    withHandlers({
        onSearchSubmit
    })
);

const searchBookPure = ({ onSearchSubmit, searchResults }: any) => {
    const fuzzySearchProps ={ onSearchSubmit };
    return (
        // add fuzzy vs. advanced
        <div className='searchBook'>
            <FuzzySearch {...fuzzySearchProps}/>
            <BooksList booksList={searchResults} />
        </div>
    );
}

export default enhance(searchBookPure);