import React from 'react';
import Nav from './Nav';
import data from '../data/data.json';
import '../styles/login.css';
import '../styles/dashboard.css';

const Dashboard = () => {
    return (
        <div className='db_container'>
            <Nav userName='John Doe' appName={data.app_name} />
        </div>
    );
};

export default Dashboard;
