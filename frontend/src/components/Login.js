import React from 'react';
import Nav from '../components/common/Nav';
import data from '../data/data.json';
import '../styles/login.css';
import login from '../images/login.png';

const Login = () => {
    return (
        <div className='lgn_container'>
            <Nav userName='' appName={data.app_name} />
            <div className='lgn_subcontainer_2'>
                <div className='lgn_login_form'>
                    <div className='lgn_input_fields'>
                        <div className='lgn_align_email'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='lgn_signin_email' />
                        </div>
                        <div className='lgn_align_password'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='lgn_signin_password' />
                        </div>
                    </div>
                    <div className='lgn_btn'>
                        <button>Login</button>
                    </div>
                </div>
                <div className='lgn_img'>
                    <img src={login} alt='login_image' />
                </div>
            </div>
        </div>
    );
};

export default Login;