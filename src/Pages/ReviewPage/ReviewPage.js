import React from 'react';
import HomeNavbar from '../../Components/HomeNavbar/HomeNavbar';
import Footer from '../Home/Footer/Footer';
import Reviews from '../Home/Reviews/Reviews';

const ReviewPage = () => {
    return (
        <div>
            <HomeNavbar />
            <Reviews />
            <Footer />
        </div>
    );
};

export default ReviewPage;