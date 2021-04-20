import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className="nav flex-column align-items-center my-5 ml-auto">
            {
                <>
                    <Link to='/admin/orderList' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Order List</Link>
                    <Link to='/addService' className="mb-4 text-dark"><i class="fas fa-plus"></i> Add Service</Link>
                    <Link to='/addAdmin' className="mb-4 text-dark"><i class="fas fa-user-plus"></i> Make Admin</Link>
                    <Link to='/manageService' className="mb-4 text-dark"><i class="fas fa-user-plus"></i> Manage Service</Link>
                    <Link to='/' className="text-dark"><i class="fas fa-arrow-left"></i> Home</Link>
                </>
            }
        </nav>
    );
};

export default AdminNavbar;