import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
    return (
        <nav className="nav flex-column align-items-center my-5 ml-auto">
            {
                <>
                    <Link to='/orderList' className="my-4 text-dark"><i class="fas fa-suitcase"></i>Your Order List</Link>
                    <Link to='/serviceList' className="mb-4 text-dark"><i class="fas fa-plus"></i>Order</Link>
                    <Link to='/review' className="mb-4 text-dark"><i class="fas fa-user-plus"></i>Review</Link>
                    <Link to='/home' className="text-dark"><i class="fas fa-arrow-left"></i> Home</Link>
                </>
            }
        </nav>
    );
};

export default DashboardNavbar;