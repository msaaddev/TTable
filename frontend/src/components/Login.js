import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/login.css';
import login from '../images/login.png';

const Login = ({ openPopupboxForSettings }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {}, [rerender]);

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
     * @param token - JWT token to save
     * @param username - username to save
     * @param email - email to save
     */
    const saveInLocalStorage = (token, username, email) => {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
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

        try {
            const res = await axios.get('/login', {
                params: {
                    token,
                },
            });
            if (res.data === false) {
                toast('Invalid credentials!');
            } else {
                saveInLocalStorage(token, res.data.username, res.data.email);
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (localStorage.getItem('token')) return <Redirect to='/dashboard' />;
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
                                autoFocus={true}
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

export default Login;
