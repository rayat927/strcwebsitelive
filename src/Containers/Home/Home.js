import React from 'react';
import Associates from '../../Components/Associates';
import Header from '../../Components/Header';
import ShortAbout from '../../Components/ShortAbout';
import './Home.css'

export default function Home() {
    return (
        <div className='Home'>
            <Header />
            <ShortAbout />
            {/* <Associates /> */}
        </div>
    );
}
