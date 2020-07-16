import React from 'react';

const Nav = ({ appName, userName }) => {
    return (
        <div className='lgn_subcontainer_1'>
            <h2>🗓 {appName}</h2>
            <h4>{userName}</h4>
        </div>
    );
};

export default Nav;
