import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <hr />
            <div className='footer-fluid'>

            </div>
            <div className='footer-links'>
                <div className='link'>
                    <i className='far fa-bookmark'></i><a href='/'> http://www.if.itera.ac.id/</a>
                    <i className='far fa-envelope'></i><a href='/'> informatika@itera.ac.id</a>
                </div>
                <div className='sosial-media'>
                    <a href='/'><i className='fab fa-facebook-square fa-2x icons'></i></a>
                    <a href='/'><i className='fab fa-twitter-square fa-2x icons'></i></a>
                    <a href='/'><i className='fab fa-youtube-square fa-2x icons'></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
