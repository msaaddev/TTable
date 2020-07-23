import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './common/Nav';
import DisplayTimeTable from './common/DisplayTimeTable';
import data from '../data/data.json';
import '../styles/schedule.css';

const Schedule = ({ openPopupboxForSettings }) => {
    const [schedule, setSchedule] = useState([
        {
            monday: [1, 2, 3, 4, 5],
            tuesday: [1, 2, 3, 4, 5],
            wednesday: [1, 2, 3, 4, 5],
            thursday: [1, 2, 3, 4, 5],
            friday: [1, 2, 3, 4, 5],
        },
    ]);

    useEffect(() => {
        const gettingData = async () => {
            try {
                const res = await axios.get('/schedule', {
                    params: {
                        email: 'mrsaadirfan@gmail.com',
                    },
                });
                console.log(res.data);
                setSchedule(res.data);
            } catch (error) {}
        };

        gettingData();
    }, []);
    return (
        <div className='sh_container'>
            <Nav
                appName={data.app_name}
                userName='John Doe'
                openPopupboxForSettings={openPopupboxForSettings}
            />
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
