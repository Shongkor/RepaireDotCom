import React from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import AdminOrderList from './AdminOrderList/AdminOrderList';

const Admin = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-3">
                    <AdminNavbar></AdminNavbar>
                </div>
                <div className="col-md-9">
                    <AdminOrderList></AdminOrderList>
                </div>
            </div>
        </div>
    );
};

export default Admin;