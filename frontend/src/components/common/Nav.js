import React from 'react';
import '../../styles/nav.css';

const Nav = ({ appName, userName, openPopupboxForSettings }) => {
    return (
        <div className='nav_subcontainer_1'>
            <h2>🗓 {appName}</h2>
            <h4 onClick={openPopupboxForSettings}>{userName}</h4>
        </div>
    );
};

export default Nav;