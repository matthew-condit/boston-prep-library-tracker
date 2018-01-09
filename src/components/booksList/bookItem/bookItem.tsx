import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const enhance = compose(
    // withState('userList', 'setUserList', []),
);

const itemStyle = {
    border: '1px solid #e5e5e5',
    padding: '10px',
    background: '#f6f6f6',
    margin: '5px'
}

const bookItemPure = ({book}: any) => {
    console.error(book);
    return (
        <div style={itemStyle}>
            <div>Id: {book.id}</div>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
        </div>
    );
}

export default enhance(bookItemPure);