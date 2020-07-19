import React from 'react';
import Dropdown from './Dropdown';
import '../../styles/inputdata.css';

const InputData = ({ context, dropdownInfo, onChange }) => {
    return (
        <div className='id_align'>
            <label htmlFor={context}>{context}</label>
            <Dropdown context={context} onChange={onChange} info={dropdownInfo} />
        </div>
    );
};

export default InputData;
