import * as React from 'react';
import './landing.css';


const Landing = (props) => {
    console.error('hello world')
    return (
        <div>
            <h1 className='landing-title'>
                Hello Boston Prep, welcome
            </h1>
            <img className='landing-image' src="http://static1.squarespace.com/static/54b63a1ae4b06ac27438e933/t/55c41e9ee4b0abe10a7fcf53/1513965854374/?format=1500w"/>
        </div>


    )
};


export default Landing;