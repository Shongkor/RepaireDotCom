import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import WhyChoseUs from './WhyChoseUs/WhyChoseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChoseUs></WhyChoseUs>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;