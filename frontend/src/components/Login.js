import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/login.css';
import login from '../images/login.png';

const Login = ({ openPopupboxForSettings, userInfo, setUserInfo }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    /**
     *
     * @param {value} - email to store in the state
     */
    const handleEmail = (value) => {
        setEmail(value);
    };

    /**
     *
     * @param {value} - password to store in the state
     */
    const handlePassword = (value) => {
        setPassword(value);
    };

    /**
     *
     * sending JWT to verify
     */
    const verifyLogin = async () => {
        const userData = {
            email,
            password,
        };
        const token = jwt.sign({ userData }, 'secret');

        const payload = {
            token,
        };

        try {
            await axios.post('/login', payload);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='lgn_container'>
            <Nav
                userName=''
                appName={data.app_name}
                openPopupboxForSettings={openPopupboxForSettings}
            />
            <div className='lgn_subcontainer_2'>
                <div className='lgn_login_form'>
                    <div className='lgn_input_fields'>
                        <div className='lgn_align_email'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='lgn_signin_email'
                                onChange={(e) => handleEmail(e.target.value)}
                            />
                        </div>
                        <div className='lgn_align_password'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='lgn_signin_password'
                                onChange={(e) => handlePassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Link to='/dashboard'>
                        <div className='lgn_btn' onClick={verifyLogin}>
                            <button>Login</button>
                        </div>
                    </Link>
                </div>

                <div className='lgn_img'>
                    <img src={login} alt='login_image' />
                </div>
            </div>
        </div>
    );
};

export default Login;
