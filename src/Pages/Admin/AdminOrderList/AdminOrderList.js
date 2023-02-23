import React from 'react';
import { useState, useEffect } from 'react';


const AdminOrderList = () => {
    const [placedOrder, setPlacedOrder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5055/orders")
            .then(res => res.json())
            .then(data => {

                console.log(data)
                // const newSelectedProduct = [...selectedProduct, singleProduct]
                setPlacedOrder(data);
            })
    }, [])





    return (
        <div>

            <div className="container mb-3 pt-3">
                <h3 className='text-center my-5'>Placed-Order List</h3>
                <table className="table">
                    <thead id='thead' className="bg-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">PayWith</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            placedOrder.map(order =>
                                <tr key={order._id}>
                                    <td className='text'>{order.name}</td>
                                    <td className='text'>{order.email}</td>
                                    <td className='text'>{order.service}</td>
                                    <td className='text'>Credit Card</td>
                                    <td className='text'>Pending</td>


                                </tr>
                            )
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default AdminOrderList;