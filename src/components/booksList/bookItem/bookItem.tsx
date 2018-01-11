import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import {Redirect} from 'react-router-dom';

import './bookItem.css';

const enhance = compose(
    withState('clicked', 'setClicked', false)

);



const bookItemPure = ({book, clicked, setClicked}: any) => {
    if (clicked) {
        const link = `/book-overview/${book.id}`;
        return (
            <Redirect to={link}/>
        )
    } else {
        return (
            <div className='BookItem'
                 onClick={() => setClicked(true)}>
                <div className='BookItem__title'>{book.title}</div>
                <div className='BookItem__author'>{book.author}</div>
            </div>
        );
    }
}

export default enhance(bookItemPure);