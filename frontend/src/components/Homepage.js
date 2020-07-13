import React from 'react';
import home from '../images/homepage.png';
import data from '../data/data.json';
import '../styles/homepage.css';

const Homepage = () => {
    return (
        <div className='hp_container'>
            <div className='hp_sub_container_1'>
                <img src={home} alt={data.homepage_img_alt} id='hp_homepage_img' />
                <h1 id='tagline'>{data.tag_line}</h1>
            </div>
            </div>
            <div className='TT_sub_container'></div>
        </div>
    );
};

export default Homepage;
