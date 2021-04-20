import React from 'react';
import DashboardNavbar from '../../../Components/DashboardNavbar/DashboardNavbar';

import Services from '../../Home/Services/Services';

const Book = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <DashboardNavbar></DashboardNavbar>
            </div>
            <div className="col-md-9">
                <Services></Services>
            </div>
        </div>
    );
};

export default Book;