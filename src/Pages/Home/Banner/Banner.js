import React from 'react';
import './Banner.css'
import banner from '../../../Images/topBanner.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section id='showcase' className="bg-dark">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: `url(${banner})`, height: '480px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className="container">
                            <div className="carousel-caption mb-5 pb-5">
                                <h2 className="display-4">Professional Computer Repair Services</h2>
                                <p className='lead'>Welcome to Fixoria, your one-stop place for all kinds of Computer repairs and diagnostics</p>
                                <Link className="btn btn-danger" to='/services'>View all services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${banner})`, height: '480px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className="container">
                            <div className="carousel-caption mb-5 pb-5 text-right">
                                <h2 className="display-4">Professional Computer Repair Services</h2>
                                <p className='lead'>Welcome to Fixoria, your one-stop place for all kinds of Computer repairs and diagnostics</p>
                                <Link className="btn btn-danger" to='/services'>View all services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${banner})`, height: '480px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className="container">
                            <div className="carousel-caption mb-5 pb-5 text-left">
                                <h2 className="display-4">Professional Computer Repair Services</h2>
                                <p className='lead'>Welcome to Fixoria, your one-stop place for all kinds of Computer repairs and diagnostics</p>
                                <Link className="btn btn-danger" to='/services'>View all services</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </section>
    );
};

export default Banner;