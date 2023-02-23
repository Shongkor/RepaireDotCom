import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className=''>
            <nav className="nav flex-column  ml-5">
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
        </div>
    );
};

export default AdminNavbar;