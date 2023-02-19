import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../../../Components/DashboardNavbar/DashboardNavbar';


const OrdersList = () => {
    const [orderLists, setOrderLists] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:5055/orders")
            .then(res => res.json())
            .then(data => {
                const myData = data.filter(d => d.email === loggedInUser.email)
                // console.log('mydata:', myData)
                setOrderLists(myData)
            })
    }, [loggedInUser.email])
    return (
        <div className="row">
            <div className="col-md-3">
                <DashboardNavbar></DashboardNavbar>
            </div>
            <div className="col-md-9">
                <div>
                    <h4>Dear <span className='Name'>{loggedInUser.name}</span>,</h4>
                    <h4>It's your Orders History</h4>
                    <div className="container">
                        <div className="row">
                            {
                                orderLists.map(order => (
                                    <div className="col-md-4">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={order.image_url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{order.service}</h5>
                                                <p className="card-text">{order.description}</p>
                                                <p>{order.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersList;