import React from 'react';
import home from '../images/homepage.png';
import data from '../data/data.json';
import '../styles/homepage.css';

const Homepage = () => {
    return (
        <div className='TT_container'>
            <div className='sub_container'>
                <img src={home} alt={data.homepage_img_alt} id='TT_homepage_img' />
            </div>
            <div className='TT_sub_container'></div>
        </div>
    );
};

export default Homepage;
