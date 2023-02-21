import React, { useState } from 'react';
import { useEffect } from 'react';
import './Review.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5055/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="reviewBg mb-3 p-3">
            <div className="container">
            <h2 className="text-center mt-5 mb-3" id="review">Latest Reviews</h2>
            <div className="row">
                {
                    reviews.map(re => (
                        <div className="col-md-4 my-5">
<<<<<<< HEAD
                            <div className="card align-items-center" style={{height: "25rem" }}>
                                <div>
                                <img src={re.image_url} style={{ height: "15rem" }} className="card-img-top" alt="..." />
=======
                            <div className="card align-items-center" style={{ width: '18rem', height: "25rem" }}>
                                <div>
                                <img src={re.image_url} style={{ width: '18rem', height: "15rem" }} className="card-img-top" alt="..." />
>>>>>>> fcfd1f23770bbe33ebf092fce8e0c8814a5d7896
                                </div>
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