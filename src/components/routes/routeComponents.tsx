import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router';



const WrappedNavLink = (props) => {
    return (
        <NavLink className='nav-link' activeClassName='nav-link--active' {...props}/>
    );
};

const NavHeader = () => {

    const authenticated = false;
    const onLogout = () => console.log('onLogout');

    if (!authenticated) {
        return (
            <div className='navHeader'>
                <WrappedNavLink to='/auth/login'>Login</WrappedNavLink>
                <WrappedNavLink to='/register'>Register</WrappedNavLink>
                <WrappedNavLink to='/users'>UsersList</WrappedNavLink>
            </div>
        )
    } else {
        return (
            <div className='navHeader'>
                <div className='nav-link' onClick={onLogout}>Logout</div>
                <WrappedNavLink exact to='/'>Home</WrappedNavLink>
                
            </div>
        )
    }

};
// can you spread an object into another object?!?!
// plz research
const Routes = ({Landing, Register, UsersList}: any) => {
    return (
        <div className='route-wrapper'>
             <Route exact path="/" component={Landing}/> 
             <Route path="/register" component={Register}/>
             <Route path='/users' component={UsersList}/> 
        </div>
    )
};


export {
    NavHeader,
    Routes
};