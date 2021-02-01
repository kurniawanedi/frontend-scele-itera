import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div className='main-app-wrapper'>
            <Header />
            <Navbar />
            <div className='content-wrapper'>
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default Home
