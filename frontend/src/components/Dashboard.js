import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/dashboard.css';

const Dashboard = ({ openPopupboxForSettings, setSectionForSchedule }) => {
    const handleSection = (value) => {
        setSectionForSchedule(value);
    };

    if (localStorage.getItem('token'))
        return (
            <div className='db_container'>
                <Nav
                    userName={localStorage.getItem('username')}
                    appName={data.app_name}
                    openPopupboxForSettings={openPopupboxForSettings}
                />
                <div className='db_subcontainer'>
                    <div className='db_subcontainer_tables'>
                        <div className='db_timetable'>
                            <p>{data.section_a}</p>
                            <Link to='/section_schedule'>
                                <button id='db_section_a' onClick={() => handleSection('0')}>
                                    View
                                </button>
                            </Link>
                        </div>
                        <div className='db_timetable'>
                            <p>{data.section_b}</p>
                            <Link to='/section_schedule'>
                                <button id='db_section_b' onClick={() => handleSection('1')}>
                                    View
                                </button>
                            </Link>
                        </div>
                        <div className='db_timetable'>
                            <p>{data.section_c}</p>
                            <Link to='/section_schedule'>
                                <button id='db_section_c' onClick={() => handleSection('2')}>
                                    View
                                </button>
                            </Link>
                        </div>
                        <div className='db_timetable_btn'>
                            <Link to='/room'>
                                <button id='db_create_table'>Create Timetable!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    else return <Redirect to='/login' />;
};

export default Dashboard;
