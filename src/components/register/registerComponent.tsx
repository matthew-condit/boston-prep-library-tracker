import * as React from 'react';
import {compose, withState, withHandlers, lifecycle} from 'recompose';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import LabeledInput from '../common/labeledInput/labeledInput';
import actions from '../../redux/actions/auth';
import {connect} from 'react-redux';

import './register.css';


const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => {
            dispatch(actions.login({}));
        }
    };
};


const withClassroomOptions = lifecycle({
    componentWillMount: async function () {
        const classData = await axios.get(`../classrooms`);
        this.props.setClassrooms(classData.data);
    }
});


const onRegisterSubmit = ({firstName, lastName, email, classroom, password, setRegisterSuccessful, login}) => async () => {

    try {
        await axios.post('/users/register', {
            firstName,
            lastName,
            email,
            classroomId: classroom.id,
            password
        });
        setRegisterSuccessful(true);
        login();
    } catch (e) {
        console.error(e);
    }
};

const enhance = compose(
    withState('firstName', 'setFirstName', ''),
    withState('lastName', 'setLastName', ''),
    withState('email', 'setEmail', ''),
    withState('classroom', 'setClassroom', ''),
    withState('classrooms', 'setClassrooms', []),
    withState('password', 'setPassword', ''),
    withState('confirmPassword', 'setConfirmPassword', ''),
    withState('registerSuccessful', 'setRegisterSuccessful', false),
    withClassroomOptions,
    withHandlers({
        onFirstNameChange: props => event => props.setFirstName(event.target.value),
        onLastNameChange: props => event => props.setLastName(event.target.value),
        onEmailChange: props => event => props.setEmail(event.target.value),
        onClassroomChange: props => event => props.setClassroom(event.target.value),
        onPasswordChange: props => event => props.setPassword(event.target.value),
        onCOnfirmPasswordChange: props => event => props.setConfirmPassword(event.target.value),
        onRegisterSubmit
    })
);
const RegisterPure = ({
                          firstName, onFirstNameChange,
                          lastName, onLastNameChange,
                          email, onEmailChange,
                          classroom, onClassroomChange,
                          classrooms,
                          password, onPasswordChange,
                          confirmPassword, onCOnfirmPasswordChange,
                          onRegisterSubmit, registerSuccessful
                      }: any) => {
    if (registerSuccessful) {
        return (
            <Redirect to="users"/>
        );
    }
    return (
        <div className='register'>
            <h1>Register For Boston Prep Lib</h1>
            <div>
                <LabeledInput label='First Name' value={firstName} onChange={onFirstNameChange}/>
                <LabeledInput label='Last Name' value={lastName} onChange={onLastNameChange}/>
                <LabeledInput label='Email' value={email} onChange={onEmailChange}/>
                <select value={classroom} onChange={onClassroomChange}>
                    {classrooms && classrooms.map((classroom, index) => {
                        return <option value={classroom.id} key={index}>{classroom.classname}</option>;
                    })};
                </select>
                <LabeledInput label='Password' value={password} onChange={onPasswordChange}/>
                <LabeledInput label='Confirm Password' value={confirmPassword} onChange={onCOnfirmPasswordChange}/>
                <button onClick={onRegisterSubmit}>Register Now</button>
            </div>
        </div>
    );
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(enhance(RegisterPure));