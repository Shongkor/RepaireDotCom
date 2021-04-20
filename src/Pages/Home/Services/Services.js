import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import './Service.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://mysterious-woodland-64195.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="serviceBG">
            <div className="container">
            <h1 className="text-center my-5">Our Services</h1>
            <div className="row">
                {
                    services.map(sr => <Service service={sr}></Service>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;