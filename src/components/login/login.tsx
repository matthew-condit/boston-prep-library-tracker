import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import axios from 'axios';
import classnames from 'classnames';
import LabeledInput from '../common/labeledInput/labeledInput';
import './login.css';


const hasErrors = () => {

}

const onLoginButtonClicked = props => async () => {
    

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

const loginPure = ({email, onEmailChange,
                    password, onPasswordChange,
                    onLoginButtonClicked
                    }: any) => {
    return (
        <div>
            <LabeledInput label='Email' value={email} onChange={onEmailChange} />
            <LabeledInput label='Password' value={password} onChange={onPasswordChange} />
            <button onClick={onLoginButtonClicked} className='login-page__submit-button'>Log In</button>
        </div>
    );
}

export default enhance(loginPure);