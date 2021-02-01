import React from 'react'
import './Logo.scss'
import { LogoItera } from '../../assets/'

const Logo = () => {
    return (
        <div className='logo-app'>
            <img alt='logo' src={LogoItera}></img>
            <p>Student Centered E-Learning Environment <br />Teknik Informatika ITERA</p>

        </div >
    )
}

export default Logo
