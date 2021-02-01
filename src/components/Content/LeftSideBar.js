import React from 'react'
import './LeftSideBar.scss'

const LeftSideBar = () => {
    return (
        <div>
            <div className='clock-calendar'>
                <h3><i className="fas fa-clock icon"></i> Clock</h3>
                <hr />

            </div>

            <div className='clock-calendar'>
                <h3><i className="fas fa-calendar-alt icon"></i> Calendar</h3>
                <hr />

            </div>
        </div>

    )
}

export default LeftSideBar
