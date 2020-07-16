import React from 'react';
import '../../styles/nav.css';

const Nav = ({ appName, userName }) => {
    return (
        <div className='nav_subcontainer_1'>
            <h2>🗓 {appName}</h2>
            <h4>{userName}</h4>
        </div>
    );
};

export default Nav;