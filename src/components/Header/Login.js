import React from 'react';
// import { ICKey, ICUser } from '../../assets';
import './Login.scss'

const Login = () => {
    return (
        <div className='block-login'>
            <form className='form-login'>
                <div className='input-container'>
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" placeholder="Username" />

                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="text" placeholder="Password" />
                </div>
                <a href='/'><i className="fa fa-chevron-right icon"></i></a>
            </form>
        </div>
    )
}

export default Login
