import React from 'react';
import HomeNavbar from '../../Components/HomeNavbar/HomeNavbar';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import WhyChoseUs from './WhyChoseUs/WhyChoseUs';


const Home = () => {
    return (
        <div>
            <HomeNavbar></HomeNavbar>
            <Banner></Banner>
            <Services></Services>
            <WhyChoseUs></WhyChoseUs>
            <Reviews></Reviews>
            
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;