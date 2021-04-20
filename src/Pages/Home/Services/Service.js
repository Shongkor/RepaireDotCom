import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { _id, description, price, service, image_url } = props.service;

    return (
        <Link to={`/order/${_id}`}>
            <div className="col-md-4 my-5">
                <div className="card" style={{ width: '20rem'}}>
                    <img src={image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service}</h5>
                        <p className="card-text">{description}</p>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Service;