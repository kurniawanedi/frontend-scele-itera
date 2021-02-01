import React from 'react';
import Logo from './Logo';
import Login from './Login';
import './Header.scss';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <hr />
            <div className='header-component'>
                <Logo />
                <Login />
            </div>
        </div>
    )
}

export default Header
