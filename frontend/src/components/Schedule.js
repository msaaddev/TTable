import React, { useState } from 'react';
import Nav from './common/Nav';
import DisplayTimeTable from './common/DisplayTimeTable';
import data from '../data/data.json';
import '../styles/schedule.css';

const Schedule = () => {
    const [schedule, setSchedule] = useState([
        {
            monday: [0, 151, 101, 0, 131],
            tuesday: [131, 101, 121, 141, 151],
            wednesday: [101, 0, 0, 141, 131],
            thursday: [121, 0, 0, 0, 0],
            friday: [151, 0, 0, 0, 0],
        },
    ]);
    return (
        <div className='sh_container'>
            <Nav appName={data.app_name} userName='John Doe' />
            <div className='sh_subcontainer'>
                <div className='sh_subcontainer_timetable'>
                    <div className='sh_enclosing_container'>
                        <div className='sh_class'>
                            <h2>Section A | Session 18</h2>
                        </div>
                        <div className='sh_schedule'>
                            <DisplayTimeTable info={schedule[0]} />
                        </div>
                        <div className='sh_btn'>
                            <button id='sh_previous_schedule'>← back</button>
                            <button id='sh_next_schedule'>Next →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
