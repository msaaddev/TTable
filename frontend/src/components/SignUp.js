import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const SignUp = () => {
    const [username, setUserName] = useState('');
    const [userAccount, setUserAccount] = useState('');
    const [password, setPassword] = useState('');

    /**
     *
     * @param value - name
     */
    const handleName = (value) => {
        setUserName(value);
    };

    /**
     *
     * @param value - email
     */
    const handleEmail = (value) => {
        setUserAccount(value);
    };

    /**
     *
     * @param value - name
     */
    const handlePassword = (value) => {
        setPassword(value);
    };

    /**
     *
     * @param token - JWT token to save
     * @param username - username to save
     * @param email - email to save
     */
    const saveInLocalStorage = (token, username, email) => {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
    };

    const signUp = async () => {
        if (username !== '' && userAccount !== '' && password !== '') {
            const obj = {
                userAccount,
                password,
                username,
            };

            try {
                const res = await axios.post('/', obj);
                if (!res.data) {
                    toast(
                        'Already a user exists with this email. Try again with a different email'
                    );
                } else {
                    toast('Sign Up Successful! Click on Sign In now to see the dashboard');
                    const token = jwt.sign({ obj }, 'secret');
                    saveInLocalStorage(token, username, userAccount);
                }
            } catch (error) {}
        } else toast('Enter data in all fields to sign up.');
    };

    return (
        <div className='hp_sign_up'>
            <p>
                <span role='img'>👨🏻‍💻</span> Create An Account
            </p>
            <div className='hp_sign_up_inputs'>
                <div className='hp_align_name'>
                    <label htmlFor='Name'>Name</label>
                    <input
                        type='text'
                        id='hp_signup_name'
                        onChange={(e) => handleName(e.target.value)}
                    />
                </div>
                <div className='hp_align_email'>
                    <label htmlFor='Email'>Email</label>
                    <input
                        type='email'
                        id='hp_signup_email'
                        onChange={(e) => handleEmail(e.target.value)}
                    />
                </div>
                <div className='hp_align_password'>
                    <label htmlFor='Password'>Password</label>
                    <input
                        type='password'
                        id='hp_signup_password'
                        onChange={(e) => handlePassword(e.target.value)}
                    />
                </div>
            </div>

            <div className='hp_signup_btn'>
                <button onClick={signUp}>Sign Up!</button>
            </div>
            <div className='hp_signin'>
                <h5>
                    Already have an account? <Link to='/login'> Sign In</Link>
                </h5>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                type='info'
            />
        </div>
    );
};

export default SignUp;
