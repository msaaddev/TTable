import React from 'react';
import '../../styles/displaytimetable.css';
import DisplayCourse from './DisplayCourse';

const DisplayTimeTable = ({ info }) => {
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const keys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const head = ['Days', '8 – 9 AM', '9 – 10 AM', '10 – 11 AM', '11 – 12 PM', '1 – 2 PM'];
    const helpArr = [0, 1, 2, 3, 4];

    return (
        <>
            <div className='dtt_container'>
                <ul>
                    {head.map((index) => (
                        <li key={index} className='ddt_head_of_table'>
                            {index}
                        </li>
                    ))}
                </ul>
                {helpArr.map((index) => (
                    <DisplayCourse key={keys[index]} day={day[index]} info={info[keys[index]]} />
                ))}
            </div>
        </>
    );
};

export default DisplayTimeTable;
