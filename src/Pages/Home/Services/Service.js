import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { _id, description, price, service, image_url } = props.service;

    return (
        
            <div className="col-md-4 my-5 p-0">
<<<<<<< HEAD
                <div className="card text-center mx-2" style={{height :"30rem"}}>
=======
<<<<<<< HEAD
                <div className="card text-center mx-2" style={{height :"30rem"}}>
=======
                <div className="card text-center CardStyle" style={{width: "22rem" ,height :"30rem"}}>
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
                    <img src={image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service}</h5>
                        <p className="card-text">{description}</p>
                        <h6> {price} TK</h6>
                    </div>
                    <div className="card-footer bg-white">
                    <Link to={`/order/${_id}`} className="btn btn btn-outline-danger">Get This Service</Link>
                    </div>

                </div>
            </div>


    );
};

export default Service;