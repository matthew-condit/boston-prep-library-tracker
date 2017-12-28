import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import actions from '../../redux/actions/auth';
import './routeStyles.css';

const WrappedNavLink = (props) => {
    return (
        <NavLink className='nav-link' activeClassName='nav-link--active' {...props} />
    );
};

const NavHeaderPure = ({ authenticated, login, logout }) => {

    if (!authenticated) {
        return (
            <div className='nav-header'>
                <WrappedNavLink to='/login'>Login</WrappedNavLink>
                <WrappedNavLink to='/register'>Register</WrappedNavLink>
                <div className='nav-link' onClick={login}>Fake Login</div>
            </div>
        )
    } else {
        return (
            <div className='nav-header'>
                <div className='nav-link' onClick={logout}>Logout</div>
                <WrappedNavLink exact to='/'>Home</WrappedNavLink>
                <WrappedNavLink to='/users'>UsersList</WrappedNavLink>
            </div>
        )
    }

};

// can you spread an object into another object?!?!
// plz research
const Routes = ({ Landing, Login, Register, UsersList }: any) => {
    return (
        <div className='route-wrapper'>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path='/users' component={UsersList} />
            <Route path='/login' component={Login} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
                authenticated : state.authReducer.authenticated
    }
}

const mapDispatchToProps = dispatch => {
  return {
                login: () => {
                dispatch(actions.login())
            },
    logout: () => {
                dispatch(actions.logout())
            }
            }
}

const NavHeader =  connect(
  mapStateToProps,
  mapDispatchToProps
)(NavHeaderPure);


export {
                NavHeader,
            Routes
};