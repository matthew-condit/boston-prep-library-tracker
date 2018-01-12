import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import {connect} from 'react-redux';
import actions from '../../redux/actions/auth';

import { enhanceWithRedirect } from '../../enhancers/index';

// const withUserData = lifecycle({
//     componentWillMount: async function () {
//         const booksData = await axios.get(`../books/${this.props.match.params.id}`);
//         // this.props.setBook(booksData.data);
//     }
// });

// const onAddBookClicked = ({book, setRedirect}) => async (e) => {
//     setRedirect(`../book/add/${book.id}`);
// };

const enhance = compose(
    // withState('book', 'setBook', {}),
    // withBookData,
    // withHandlers({
    //     onAddBookClicked
    // })
);




const ProfilePure = ({ user, onAddBookClicked}: any) => {
    if (user) {
        console.log(user, 'fdsafd');
        return (
            <div className='BookItem'>
                <div>{user.firstname} {user.lastname}</div>
            </div>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        user: state.user.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // login: () => {
        //     dispatch(actions.login({}))
        // },
        // logout: () => {
        //     dispatch(actions.logout())
        // }
    }
};

const ProfileWithStore = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(ProfilePure);

export default enhanceWithRedirect()(ProfileWithStore);