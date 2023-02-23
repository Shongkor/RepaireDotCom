import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';


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

        <div>
            <h6 className='text-center my-5'>{loggedInUser.name} Orders History</h6>
            <div className="container my-5">
                <div className="row">
                    {
                        orderLists.map(order => (
                            <div className="col-md-4 text-center">
                                <div className="card">
                                    <img src={order.image_url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{order.service}</h5>
                                        <p className="card-text">{order.description}</p>
                                        <p>{order.price} TK</p>
                                    </div>
                                    <div className='card-footer'>
                                        <p>Booking Date : {order.orderTime}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default OrdersList;