import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import actions from '../../redux/actions/auth';
import LabeledInput from '../common/labeledInput/labeledInput';

import './login.css';

const mapStateToProps = state => {
    return {
        authenticated: state.authReducer.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => {
            dispatch(actions.login())
        }
    }
}

const onLoginButtonClicked = ({ email, password, setErrors, login }) => async () => {
    if (!email || !password) {
        setErrors({
            email: !email,
            password: !password
        });
        return;
    }
    try {
        const res = await axios.post('/users/login', {
            email,
            password
        });
        if (res.status === 200) {
            login()
        } else {
            console.log(res.data.message)
        }
    } catch (e) {

    }


}

const enhance = compose(
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
    withState('errors', 'setErrors', {}),
    withHandlers({
        onEmailChange: props => event => props.setEmail(event.target.value),
        onPasswordChange: props => event => props.setPassword(event.target.value),
        onLoginButtonClicked
    })
);

const loginPure = ({ email, onEmailChange,
    password, onPasswordChange,
    onLoginButtonClicked,
    errors,
    authenticated}: any) => {
    if (authenticated) {
        return (
            <Redirect to='/users'/>
        )
    }
    return (
        <div>
            <div>
                {errors.email &&
                    <div className='login-error-message'>Please provide your email</div>
                }
                {errors.password &&
                    <div className='login-error-message'>Please provide your password</div>
                }
            </div>
            <LabeledInput label='Email' value={email} onChange={onEmailChange} />
            <LabeledInput label='Password' value={password} onChange={onPasswordChange} />
            <button onClick={onLoginButtonClicked} className='login-page__submit-button'>Log In</button>
        </div>
    );
}

export default enhance(loginPure);