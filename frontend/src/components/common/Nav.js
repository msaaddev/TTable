import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';

const Nav = ({ appName, userName, openPopupboxForSettings }) => {
    return (
        <div className='nav_subcontainer_1'>
            <Link to='/'>
                <h2>🗓 {appName}</h2>
            </Link>
            <h4 onClick={openPopupboxForSettings}>{userName}</h4>
        </div>
    );
};

export default Nav;