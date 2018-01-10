import * as React from 'react';
import {compose, withState, withHandlers, lifecycle} from 'recompose';
import LabeledInput from '../../../common/labeledInput/labeledInput';
import axios from 'axios';

const withBooksData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get('books');
    }
});

const onSearchSubmit = ({searchString, setSearchString, onSearchSubmit}) => async (e) => {
    e.preventDefault();
    console.log(searchString);
    const response = await axios.post('/books/search/general', {
        searchString
    });
    console.log(response);
    onSearchSubmit(response.data);
    setSearchString('');
};


const enhance = compose(
    withState('searchString', 'setSearchString', ''),
    withHandlers({
        onSearchStringChange: props => e => props.setSearchString(e.target.value),
        onSearchSubmit
    })
);

const fuzzySearchPure = ({searchString, onSearchStringChange,
                             onSearchSubmit}: any) => {
    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <LabeledInput label='Search All Books' value={searchString} onChange={onSearchStringChange}/>
            </form>
        </div>
    );
};

export default enhance(fuzzySearchPure);