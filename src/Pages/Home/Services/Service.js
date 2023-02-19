import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { _id, description, price, service, image_url } = props.service;

    return (
        
            <div className="col-md-4 my-5 p-0">
                <div className="card text-center CardStyle" style={{width: "22rem" ,height :"30rem"}}>
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