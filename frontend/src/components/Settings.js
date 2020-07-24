import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/settings.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/reacttoastify.css';

const Settings = ({ openPopupboxForSettings }) => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    /**
     *
     * @param {mail} - email to update in state
     */
    const handleEmail = (mail) => {
        setEmail(mail);
    };

    /**
     *
     * @param {password} - email to update in state
     */
    const handleOldPassword = (password) => {
        setOldPassword(password);
    };

    /**
     *
     * @param {password} - email to update in state
     */
    const handleNewPassword = (password) => {
        setNewPassword(password);
    };

    /**
     *
     * update user data in the database
     */
    const updateUserData = async () => {
        if (email !== '' && oldPassword !== '' && newPassword !== '') {
            const obj = {
                email,
                oldPassword,
                newPassword,
            };
            const token = jwt.sign({ obj }, 'secret');
            const payload = {
                token,
            };
            try {
                const res = await axios.post('/login', payload);
                console.log(res.data);
                if (res.data === false) toast('Invalid email or password!');
                else toast('Password has been successfully updated.');
            } catch (error) {}
        } else toast('Enter all the required data to update your password');
    };

    if (localStorage.getItem('token'))
        return (
            <div className='st_containers'>
                <Nav
                    appName={data.app_name}
                    userName={localStorage.getItem('username')}
                    openPopupboxForSettings={openPopupboxForSettings}
                />
                <div className='st_subcontainer_2'>
                    <div className='st_form'>
                        <div className='st_settings_text'>
                            <h2>Settings</h2>
                        </div>
                        <div className='st_input_fields'>
                            <div className='st_align_email'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='st_email'
                                    autoFocus={true}
                                    onChange={(e) => handleEmail(e.target.value)}
                                />
                            </div>
                            <div className='st_align_password'>
                                <label htmlFor='password'>Old Password</label>
                                <input
                                    type='password'
                                    id='st_password'
                                    onChange={(e) => handleOldPassword(e.target.value)}
                                />
                            </div>
                            <div className='st_align_password'>
                                <label htmlFor='password'>New Password</label>
                                <input
                                    type='password'
                                    id='st_password'
                                    onChange={(e) => handleNewPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='st_btn'>
                            <button id='st_save_settings' onClick={updateUserData}>
                                Save
                            </button>
                        </div>
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
    else return <Redirect to='/login' />;
};

export default Settings;
