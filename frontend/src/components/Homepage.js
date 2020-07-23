import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import data from '../data/data.json';
import home from '../images/homepage.png';
import '../styles/homepage.css';

const Homepage = () => {
    if (localStorage.getItem('token')) return <Redirect to='/dashboard' />;
    return (
        <div className='hp_container'>
            <div className='hp_sub_container_1'>
                <img src={home} alt={data.homepage_img_alt} id='hp_homepage_img' />
                <h1 id='tagline'>{data.tag_line}</h1>
            </div>
            <div className='hp_sub_container_2'>
                <SignUp />
            </div>
        </div>
    );
};

export default Homepage;
