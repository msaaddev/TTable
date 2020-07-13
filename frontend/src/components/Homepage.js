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
            <div className='hp_sub_container_2'>
                <div className='hp_sign_up'>
                    <h2>{data.create_account}</h2>
                    <div className='hp_sign_up_inputs'>
                        <div className='hp_align_name'>
                            <label htmlFor='Name'>Name</label>
                            <input type='text' />
                        </div>
                        <div className='hp_align_email'>
                            <label htmlFor='Email'>Email</label>
                            <input type='text' />
                        </div>
                        <div className='hp_align_password'>
                            <label htmlFor='Password'>Password</label>
                            <input type='password' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
