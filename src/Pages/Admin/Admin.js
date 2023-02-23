import React from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import AdminOrderList from './AdminOrderList/AdminOrderList';

const Admin = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-2 position-fixed sidebar">
                    <AdminNavbar></AdminNavbar>
                </div>
                <div className="col-md-10 ml-auto">
                    <AdminOrderList></AdminOrderList>
                </div>
            </div>
        </div>
    );
};

export default Admin;