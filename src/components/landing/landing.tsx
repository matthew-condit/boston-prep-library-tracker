import * as React from 'react';
import './landing.css';


const Landing = (props) => {
    console.error('hello world')
    return (
        <div>
            <h1 className='landing-title'>
                Hello Boston Prep, welcome
            </h1>
            <img className='landing-image'
                 src="assets/images/bprep-logo.png"/>
        </div>


    )
};


export default Landing;