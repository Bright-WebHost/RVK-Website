import React from "react";
import { Link } from 'react-router-dom'


const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-title">
                                        <h2>RVK STEEL & ALLOYS</h2>
                                        <h4 style={{color:'white'}}> Engineered for Performance, Built to Last</h4>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/about">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero3;



