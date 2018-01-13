import * as React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';
import {connect} from 'react-redux';
import actions from '../../redux/actions/auth';

import { enhanceWithRedirect } from '../../enhancers/index';

const withUserData = lifecycle({
    componentWillMount: async function () {
        const userData = await axios.get(`../users/details/${this.props.user.id}`);
        this.props.setUserDetails(userData.data);
    }
});

// const onAddBookClicked = ({book, setRedirect}) => async (e) => {
//     setRedirect(`../book/add/${book.id}`);
// };

const enhance = compose(
    withState('userDetails', 'setUserDetails', null),
    withUserData,
    // withHandlers({
    //     onAddBookClicked
    // })
);




const ProfilePure = ({ userDetails, user, onAddBookClicked}: any) => {
    if (userDetails) {
        console.log(userDetails, 'fdsafd');
        return (
            <div className='BookItem'>
                <div>{userDetails.firstname} {userDetails.lastname}</div>
                <div>Class {userDetails.classroom.classname}</div>
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

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
);

export default connector(enhanceWithRedirect()(enhance(ProfilePure)));