import * as React from 'react';
import {compose, withState, withHandlers} from 'recompose';
import {Link} from 'react-router-dom';

import './bookItem.css';

const enhance = compose(
    withState('clicked', 'setClicked', false)
);


const bookItemPure = ({book}: any) => {
    const link = `/book-overview/${book.id}`;
    return (
        <Link to={link} className='BookItem'>
            <div className='BookItem__title'>{book.title}</div>
            <div className='BookItem__author'>{book.author}</div>
        </Link>
    );
};

export default enhance(bookItemPure);