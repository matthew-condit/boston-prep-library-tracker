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

const userItemPure = ({user}: any) => {
    return (
        <div style={itemStyle}>
            <div>Id: {user.id}</div>
            <div>Name: {user.firstname} {user.lastname}</div>
            <div>Email: {user.email}</div>
        </div>
    );
}

export default enhance(userItemPure);