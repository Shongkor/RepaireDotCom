import React from 'react';
import rocket from './images/rocket.jpg'
import like from './images/Like.jpg'
import certified from './images/Certified.jpg'
import './WhyChoseUs.css'


const WhyChoseUs = () => {
    return (
        <section class="section section-lg text-center component-Bg my-5 py-5">
            <div class="container">
                <h2 class="text-divider"><span class="text-divider-item"></span>Why Choose Us</h2>
                <p className='my-2'><span class="d-inline-block">There are dozens of reasons why our clients choose Fixoria as their computer service provider of choice.</span></p>
                <div class="row row-30 justify-content-center text-lg-left">
                    <div class="col-sm-6 col-md-4  my-5">

                        <article class="blurb blurb-boxed">
                            <div class="icon blurb-icon"><img src={rocket} alt="" style={{ width: "150px",position:"cover",height:"100px" }} /></div>
                            <div class="blurb-title h4">Reliable Services</div>
                            <div class="blurb-text">Every service our computer technicians provide is guaranteed to be prompt &amp; reliable.</div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-md-4">

                        <article class="blurb blurb-boxed my-5">
                            <div class="icon blurb-icon"><img src={like} alt="" style={{ width: "150px",position:"cover",height:"100px" }} />
                            </div>
                            <div class="blurb-title h4">Skilled Personal</div>
                            <div class="blurb-text">All the experts at Fixoria have the skills &amp; experience to get the job done right.</div>
                        </article>
                    </div>
                    <div class="col-sm-6 col-md-4">

                        <article class="blurb blurb-boxed my-5">
                            <div class="icon blurb-icon"><img src={certified} alt="" style={{ width: "150px",position:"cover",height:"100px" }} /></div>
                            <div class="blurb-title h4">Licensed &amp; Certified</div>
                            <div class="blurb-text">For your safety and peace of mind, we're fully licensed, certified, and insured!</div>
                        </article>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default WhyChoseUs;