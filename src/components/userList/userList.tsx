import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import UserItem from './userItem/userItem';

const withUserData = lifecycle({
    componentWillMount: async function () {
        const userData = await axios.get('users');
        console.warn(userData);
        // need to fix this on backend
        this.props.setUserList(userData.data.data);
    }
});

const enhance = compose(
    withState('userList', 'setUserList', []),
    withUserData
);

const userListPure = ({ userList }: any) => {
    console.error(userList);
    return (
        <div><h1>userList</h1>
            {
                userList.map(user => (<UserItem user={user} />))
            }
        </div>
    );
}

export default enhance(userListPure);