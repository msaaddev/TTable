import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/dashboard.css';

const Dashboard = ({ openPopupboxForSettings }) => {
    return (
        <div className='db_container'>
            <Nav
                userName='John Doe'
                appName={data.app_name}
                openPopupboxForSettings={openPopupboxForSettings}
            />
            <div className='db_subcontainer'>
                <div className='db_subcontainer_tables'>
                    <div className='db_timetable'>
                        <p>{data.section_a}</p>
                        <button id='db_section_a'>View</button>
                    </div>
                    <div className='db_timetable'>
                        <p>{data.section_b}</p>
                        <button id='db_section_b'>View</button>
                    </div>
                    <div className='db_timetable'>
                        <p>{data.section_c}</p>
                        <button id='db_section_c'>View</button>
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
};

export default Dashboard;