import * as React from 'react';
import './labeledInput.css';

const LabeledInput = ({ label, ...rest }) => (
    <div className='labeled-input'>
        <label className='labeled-input__label'>{label}</label>
        <input className='labeled-input__input' {...rest}  />
    </div>
);

export default LabeledInput;