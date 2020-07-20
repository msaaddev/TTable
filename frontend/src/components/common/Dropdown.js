import React from 'react';

const Dropdown = ({ onChange, info, context, type }) => {
    return (
        <select type={type} htmlFor={context} onChange={(e) => onChange(e.target.value)}>
            {info.map((index) => (
                <option key={index} value={index}>
                    {index}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
