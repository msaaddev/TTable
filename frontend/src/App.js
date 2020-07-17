import React from 'react';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Room from './components/Room';
import CourseInfo from './components/CourseInfo';
import Schedule from './components/Schedule';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './App.css';

// popup Box Body
const openPopupboxForSettings = () => {
    const content = (
        <div className='popup'>
            <ul id='styling'>
                <li>Settings</li>
                <li>Generated TimeTable</li>
                <li>Logout</li>
            </ul>
        </div>
    );
    PopupboxManager.open({ content });
};

// popup box configs
const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 400,
    overlayOpacity: 0.5,
};

function App() {
    return (
        <>
            <CourseInfo openPopupboxForSettings={openPopupboxForSettings} />
            <PopupboxContainer {...popupboxConfig} />
        </>
    );
}

export default App;