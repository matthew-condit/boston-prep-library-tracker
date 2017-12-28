import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import UserItem from './userItem/userItem';

const withUserData = lifecycle({
    componentWillMount: async function () {
        const userData = await axios.get('users');
        // need to fix this on backend
        this.props.setUserList(userData.data.data);
    }
});

const enhance = compose(
    withState('userList', 'setUserList', []),
    withUserData
);

const userListPure = ({ userList }: any) => {
    return (
        <div><h1>userList</h1>
            {
                userList.map(user => (<UserItem key={user.id} user={user} />))
            }
        </div>
    );
}

export default enhance(userListPure);