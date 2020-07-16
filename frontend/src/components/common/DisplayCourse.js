import React from 'react';

const DisplayCourse = ({ day, info }) => {
    return (
        <ul>
            <li>{day}</li>
            {info.map((course) => (
                <li key={(() => Math.floor(Math.random() * 1000))()}>{course}</li>
            ))}
        </ul>
    );
};

export default DisplayCourse;
