import React from 'react'
import { Profil } from '../../assets'
import './Anouncement.scss'

const Anouncement = (props) => {
    return (
        <div>
            <div className='anouncement-content'>
                <div className='image-profil'>
                    <img alt='oke' src={Profil} className='image'>
                    </img>
                </div>

                <div className='content'>
                    <p><b>{props.title}</b>
                        <br />
                        by <a href='/'>{props.by}</a> - {props.day}, {props.date}, {props.time}
                    </p>

                    <p>{props.main}</p>
                    <p>{props.closing}</p>
                    <p>{props.by}</p>

                    <div className='permalink'>

                        <a href='/'>
                            Permalink
                        </a>
                    </div>
                    <div className='discuss-link'>
                        <a href='/'>
                            View the discusion
                        </a> (0 replies so far)
                    </div>
                </div>
            </div>
        </div>
    )
}

Anouncement.defaultProps = {
    by: 'Informatika Itera',
    closing: 'Salam',
}

export default Anouncement
