import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Nav from './common/Nav';
import DisplayTimeTable from './common/DisplayTimeTable';
import data from '../data/data.json';
import '../styles/schedule.css';

const Schedule = ({ openPopupboxForSettings }) => {
    const [schedule, setSchedule] = useState([
        {
            monday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
            tuesday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
            wednesday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
            thursday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
            friday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
        },
    ]);
    const [sectionSchedule, setSectionSchedule] = useState({
        monday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
        tuesday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
        wednesday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
        thursday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
        friday: ['N/A', 'N/A', 'N/A', 'N/A', 'N/A'],
    });
    const [sectionNum, setSectionNum] = useState(0);
    const [sect, setSect] = useState('A');

    // fetching data from the database
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const gettingData = async () => {
                try {
                    const res = await axios.get('/getschedule', {
                        params: {
                            email: localStorage.getItem('email'),
                            flag: false,
                        },
                    });
                    setSchedule(res.data);
                    setSectionSchedule(res.data[0]);
                } catch (error) {}
            };

            gettingData();
        }
    }, []);

    /**
     *
     * @param {value} - setting schedule for different sections
     */
    const changeSectionSchedule = (value) => {
        let temp;
        if (value === 'back') {
            temp = sectionNum;
            temp--;

            if (temp > -1) {
                setSectionSchedule({});
                setSectionSchedule(schedule[temp]);
                setSectionNum(temp);
            }
        } else if (value === 'next') {
            temp = sectionNum;
            temp++;

            if (temp < 3) {
                setSectionSchedule({});
                setSectionSchedule(schedule[temp]);
                setSectionNum(temp);
            }
        }
        if (temp < 3) {
            if (temp === 0) setSect('A');
            else if (temp === 1) setSect('B');
            else if (temp === 2) setSect('C');
            else if (temp === 3) setSect('D');
        }
    };
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
                                <h2>Section {sect} | Session 18</h2>
                            </div>
                            <div className='sh_schedule'>
                                <DisplayTimeTable info={sectionSchedule} />
                            </div>
                            <div className='sh_btn'>
                                <button
                                    id='sh_previous_schedule'
                                    onClick={() => changeSectionSchedule('back')}
                                >
                                    ← back
                                </button>
                                <button
                                    id='sh_next_schedule'
                                    onClick={() => changeSectionSchedule('next')}
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    else return <Redirect to='/login' />;
};

export default Schedule;
