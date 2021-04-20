import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Review.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://mysterious-woodland-64195.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="reviewBg mb-5 pt-3">
            <div className="container">
            <h1 className="text-center my-5">Latest Reviews</h1>
            <div className="row">
                {
                    reviews.map(re => (
                        <div className="col-md-4 my-5">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={re.image_url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{re.name}</h5>
                                    <p className="card-text">{re.description}</p>
                                    
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

export default Reviews;