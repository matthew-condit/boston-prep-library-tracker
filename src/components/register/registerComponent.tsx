import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import axios from 'axios';

const LabeledInput = ({ label, ...rest }) => (
    <div>
        <label>{label}</label>
        <input {...rest} />
    </div>
);

const onRegisterSubmit = ({ firstName, lastName, email, password }) => async () => {
    console.error(firstName, lastName);
    try {
        await axios.post('/users/register', {
            firstName,
            lastName,
            email,
            password
        });
    } catch (e) {
        console.error(e);
    }
}



const enhance = compose(
    withState('firstName', 'setFirstName', ''),
    withState('lastName', 'setLastName', ''),
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
    withState('confirmPassword', 'setConfirmPassword', ''),
    withHandlers({
        onFirstNameChange: props => event => props.setFirstName(event.target.value),
        onLastNameChange: props => event => props.setLastName(event.target.value),
        onEmailChange: props => event => props.setEmail(event.target.value),
        onPasswordChange: props => event => props.setPassword(event.target.value),
        onCOnfirmPasswordChange: props => event => props.setConfirmPassword(event.target.value),
        onRegisterSubmit
    })
);
const RegisterPure = ({ firstName, onFirstNameChange,
    lastName, onLastNameChange,
    email, onEmailChange,
    password, onPasswordChange,
    confirmPassword, onCOnfirmPasswordChange,
    onRegisterSubmit }: any) => {
    return (
        <div>
            <h1>Register For Boston Prep Lib</h1>
            <div>
                <LabeledInput label='First Name' value={firstName} onChange={onFirstNameChange} />
                <LabeledInput label='Last Name' value={lastName} onChange={onLastNameChange} />
                <LabeledInput label='Email' value={email} onChange={onEmailChange} />
                <LabeledInput label='Password' value={password} onChange={onPasswordChange} />
                <LabeledInput label='Confirm Password' value={confirmPassword} onChange={onCOnfirmPasswordChange} />
                <button onClick={onRegisterSubmit}>Register Now</button>
            </div>
        </div>
    )
};


export default enhance(RegisterPure);