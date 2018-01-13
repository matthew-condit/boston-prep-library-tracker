import * as React from 'react';
import {compose, withState, withHandlers, lifecycle} from 'recompose';
import axios from 'axios';

import {Redirect} from 'react-router-dom';
import {enhanceWithRedirect} from '../../enhancers/index';

const withClassroomData = lifecycle({
    componentWillMount: async function () {
        const classroomsData = await axios.get(`../classrooms`);
        this.props.setClassrooms(classroomsData.data);
    }
});

const enhance = compose(
    withState('classrooms', 'setClassrooms', []),
    withClassroomData
);


const ClassesPure = ({classrooms}: any) => {
    if (classrooms) {
        return (
            <div className='BookItem'>
                {classrooms.map((classroom, index) => {
                    return (
                        <div key={index}>
                            <div>{classroom.classname}</div>
                            <div>Grade: {classroom.grade}</div>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};

export default enhanceWithRedirect()(enhance((ClassesPure)));