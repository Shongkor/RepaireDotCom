import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App'
import DashboardNavbar from '../../../Components/DashboardNavbar/DashboardNavbar';
import Payment from './Payment/Payment';


const Order = () => {
    const { id } = useParams()
    const [selectedService, setSelectedService] = useState({});

    useEffect(() => {
        fetch("http://localhost:5055/services")
            .then(res => res.json())
            .then(data => {
                const singleService = data.find(data => data._id === id);
                console.log(singleService)
                // const newSelectedProduct = [...selectedProduct, singleProduct]
                delete singleService._id
                setSelectedService(singleService);
            })
    }, [])


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser)
   
    // console.log(info)

    const handleCheckOut = paymentId => {
        const info = { 
            ...loggedInUser,
            ...selectedService,
            paymentId,
            orderTime : new Date(),
         }
        fetch("http://localhost:5055/pay", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("your payment placed successfully")
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <DashboardNavbar></DashboardNavbar>
            </div>
            <div className="col-md-9">
                <div>

                    <div className="container mt-5 pt-3">
                        <h3>Order</h3>
                        <table className="table table-striped">
                            <thead id='thead' className="bg-light text-center">
                                <tr>
                                    <th scope="col">ServiceName</th>
                                    <th scope="col">Service Type Details</th>
                                    <th scope="col">Price</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr className="table-info">
                                    <td>{selectedService.service}</td>
                                    <td>{selectedService.description}</td>
                                    <td>{selectedService.price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Payment handleCheckOut={handleCheckOut}></Payment>

                        {/* <button className='btn btn-success'>CheckOut</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;