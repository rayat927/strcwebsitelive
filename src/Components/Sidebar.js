import React, { useState } from 'react';
import "../App.css"
import SidebarData from './SidebarData'
import logo from '../logo.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={`arrow ${showSidebar ? 'left' : ''}`}>
               <ArrowForwardIosIcon /> 
            </div>
            <div className={`Sidebar ${showSidebar ? 'show' : 'notShow'}`}>
                <div  className='logo-container'>
                    <img onClick={() => window.location.pathname = '/'} className='logo' src={logo} alt='logo' />
                </div>
                
                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        if (val.dropdownList) return (
                            <li id={window.location.pathname == val.link ? "active" : ""} className='row' key={key}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                                <div id='dropdown'>
                                    <a href='/upcoming-courses'>Upcoming Courses</a>
                                    <a href='/ongoing-courses'>Ongoing Courses</a>
                                </div>
                            </li>
                        )
                        return (
                            <li id={window.location.pathname == val.link ? "active" : ""} className='row' key={key} onClick={() => { window.location.pathname = val.link }}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
    );
}
