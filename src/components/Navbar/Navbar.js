import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <ul>
                <li className='scele'><a href="#home">SCELE</a></li>
                <li className='dropdown'><a href="javascript:void(0)">Academic Links <i className='fa fa-caret-down icon'></i></a>
                    <div className="dropdown-content">
                        <a href="/">Faculty Homepage</a>
                        {/* <hr /> */}
                        <a href="/">Website ITERA</a>
                        <a href="/">SIAKAD ITERA</a>
                        <a href="/">Perpustakaan Itera</a>
                    </div>
                </li>
                <li className='dropdown'><a href="javascript:void(0)">Panduan Mahasiswa <i className='fa fa-caret-down icon'></i></a>
                    <div className="dropdown-content">
                        <a href="/">Faculty Homepage</a>
                        {/* <hr /> */}
                        <a href="/">Website ITERA</a>
                        <a href="/">SIAKAD ITERA</a>
                        <a href="/">Perpustakaan Itera</a>
                    </div>
                </li>
                <li className='dropdown'><a href="javascript:void(0)">Dukungan Kuliah <i className='fa fa-caret-down icon'></i></a>
                    <div className="dropdown-content">
                        <a href="/">Faculty Homepage</a>
                        {/* <hr /> */}
                        <a href="/">Website ITERA</a>
                        <a href="/">SIAKAD ITERA</a>
                        <a href="/">Perpustakaan Itera</a>
                    </div>
                </li>
                <li className='dropdown'><a href="javascript:void(0)">Bantuan SCeLE <i className='fa fa-caret-down icon'></i></a>
                    <div className="dropdown-content">
                        <a href="/">Faculty Homepage</a>
                        {/* <hr /> */}
                        <a href="/">Website ITERA</a>
                        <a href="/">SIAKAD ITERA</a>
                        <a href="/">Perpustakaan Itera</a>
                    </div></li>
                <li className='search-component'>
                    <input className="input-field-search" type="text" placeholder="Search Course" />
                    <i className="fa fa-search fa-lg icon"></i>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
