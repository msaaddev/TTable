import React from 'react';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/settings.css';

const Settings = ({ openPopupboxForSettings, userInfo }) => {
    return (
        <div className='st_containers'>
            <Nav
                appName={data.app_name}
                userName={userInfo.username}
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
                            <input type='email' id='st_email' />
                        </div>
                        <div className='st_align_password'>
                            <label htmlFor='password'>Old Password</label>
                            <input type='password' id='st_password' />
                        </div>
                        <div className='st_align_password'>
                            <label htmlFor='password'>New Password</label>
                            <input type='password' id='st_password' />
                        </div>
                    </div>
                    <div className='st_btn'>
                        <button id='st_save_settings'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
