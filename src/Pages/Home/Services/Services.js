import React, { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';
import './Service.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5055/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
<<<<<<< HEAD
        <div className="serviceBG py-1">
            <div className="container">
            <h2 className="text-center mt-4">Our Services</h2>
=======
<<<<<<< HEAD
        <div className="serviceBG py-1">
            <div className="container">
            <h2 className="text-center mt-4">Our Services</h2>
=======
        <div className="serviceBG py-5">
            <div className="container">
            <h1 className="text-center my-5">Our Services</h1>
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
>>>>>>> 21dc79c804d487aa6a7a9fb6bfaa9f9958ca894e
            <div className="row flex-wrap justify-content-between">
                {
                    services.map(sr => <Service service={sr}></Service>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;