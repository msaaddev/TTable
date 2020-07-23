import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav from './common/Nav';
import DisplayTimeTable from './common/DisplayTimeTable';
import data from '../data/data.json';
import '../styles/schedule.css';

const SectionSchedule = ({ openPopupboxForSettings, section }) => {
    const [sectionSchedule, setSectionSchedule] = useState({
        monday: [1, 2, 3, 4, 5],
        tuesday: [1, 2, 3, 4, 5],
        wednesday: [1, 2, 3, 4, 5],
        thursday: [1, 2, 3, 4, 5],
        friday: [1, 2, 3, 4, 5],
    });

    // fetching data from the database
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const gettingData = async () => {
                try {
                    const res = await axios.get('/schedule', {
                        params: {
                            email: localStorage.getItem('email'),
                        },
                    });
                    setSectionSchedule(res.data[section]);
                } catch (error) {}
            };

            gettingData();
        }
    }, []);

    if (localStorage.getItem('token'))
        return (
            <div className='sh_container'>
                <Nav
                    appName={data.app_name}
                    userName={localStorage.getItem('username')}
                    openPopupboxForSettings={openPopupboxForSettings}
                />
                <div className='sh_subcontainer'>
                    <div className='sh_subcontainer_timetable'>
                        <div className='sh_enclosing_container'>
                            <div className='sh_class'>
                                <h2>Section | Session 18</h2>
                            </div>
                            <div className='sh_schedule'>
                                <DisplayTimeTable info={sectionSchedule} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    else return <Redirect to='/login' />;
};

export default SectionSchedule;
