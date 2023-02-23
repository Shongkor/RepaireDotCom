import React from 'react';
import OrdersList from '../Dashboard/OrdersList/OrdersList'
import Footer from '../Home/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <OrdersList></OrdersList>
            <Footer />
        </div>
    );
};

export default Dashboard;