import React from 'react';
import Banner from './Banner';
import Foods from './DisplayFood/Foods';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <AboutUs />
            <Footer/>
        </div>
    );
};

export default Home;