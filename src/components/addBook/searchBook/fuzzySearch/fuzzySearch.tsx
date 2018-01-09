import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import LabeledInput from '../../../common/labeledInput/labeledInput';
import axios from 'axios';

const withBooksData = lifecycle({
    componentWillMount: async function () {
        const booksData = await axios.get('books');
        // need to fix this on backend
        this.props.setBooksList(booksData.data.splice(0, 20));
    }
});

const onSearchSubmit =  ({setSearchResults}) => async () => {

};


const enhance = compose(
    // withState('booksList', 'setBooksList', []),
    withBooksData,
    withHandlers({
        onSearchSubmit
    })
);

const fuzzySearchPure = ({ onSearchSubmit }: any) => {
    return (
        // add fuzzy vs. advanced
        <div>
            <form>

            </form>
        </div>
    );
}

export default enhance(fuzzySearchPure);