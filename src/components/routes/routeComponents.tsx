import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router';
import {connect} from 'react-redux';
import actions from '../../redux/actions/auth';
import './routeStyles.css';

const WrappedNavLink = (props) => {
    return (
        <NavLink className='nav-link' activeClassName='nav-link--active' {...props} />
    );
};

const NavHeaderPure = ({authenticated, isAdmin,  login, logout}) => {
    if (!authenticated) {
        return (
            <div className='nav-header'>
                <WrappedNavLink to='/login'>Login</WrappedNavLink>
                <WrappedNavLink to='/register'>Register</WrappedNavLink>
            </div>
        )
    } else {
        if (isAdmin) {
            return (
                <div className='nav-header'>
                    <div className='nav-link' onClick={logout}>Logout</div>
                    <WrappedNavLink exact to='/'>Home</WrappedNavLink>
                    <WrappedNavLink to='/users'>UsersList</WrappedNavLink>
                    <WrappedNavLink to='/books'>Books List</WrappedNavLink>
                    <WrappedNavLink to='/search-books'>Add Book</WrappedNavLink>
                    <WrappedNavLink to='/my-books'>My Books</WrappedNavLink>
                    <WrappedNavLink to='/profile'>My profile</WrappedNavLink>
                </div>
            )
        } else {
            return (
                <div className='nav-header'>
                    <div className='nav-link' onClick={logout}>Logout</div>
                    <WrappedNavLink exact to='/'>Home</WrappedNavLink>
                    <WrappedNavLink to='/users'>UsersList</WrappedNavLink>
                    <WrappedNavLink to='/books'>Books List</WrappedNavLink>
                    <WrappedNavLink to='/search-books'>Add Book</WrappedNavLink>
                    <WrappedNavLink to='/my-books'>My Books</WrappedNavLink>
                    <WrappedNavLink to='/profile'>My profile</WrappedNavLink>
                </div>
            )
        }
    }

};

// can you spread an object into another object?!?!
// plz research
const Routes = ({
                    Landing,
                    Login,
                    Register,
                    UsersList,
                    BrowseBooks,
                    BookOverview,
                    BookHistory,
                    AddBook,
                    SearchBook,
                    Profile,
                    Admin
                }: any) => {
    return (
        <div className='route-wrapper'>
            <Route exact path="/" component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path='/users' component={UsersList}/>
            <Route path='/login' component={Login}/>
            <Route path='/books' component={BrowseBooks}/>
            <Route path='/book-overview/:id' component={BookOverview}/>
            <Route path='/book/add/:id' component={AddBook}/>
            <Route path="/search-books" component={SearchBook}/>
            <Route path="/my-books" component={BookHistory}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/profile" component={Admin}/>
            {/*<Route path="*" component={Login} />*/}
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        authenticated: state.auth.authenticated,
        isAdmin: state.user.user.role === 'admin'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => {
            dispatch(actions.login({}))
        },
        logout: () => {
            dispatch(actions.logout())
        }
    }
}

const NavHeader = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(NavHeaderPure);


export {
    NavHeader,
    Routes
};