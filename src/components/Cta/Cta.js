import React from "react";
import { Link } from "react-router-dom";
import Shape1 from '../../images/cta-shape.svg'

const Cta = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return(
        <section className="wpo-cta-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-12 col-12">
                        <div className="wpo-cta-text">
                            <h2 style={{fontSize:'30px'}}> Committed to innovation
                                <span className="cta-text-bg"> quality,  and excellence      in every product </span>
                           
                                <span className="cta-text-bg">
                                    </span>  we Manufacture.</h2>
                        </div> 
                    </div>
                    <div className="col-lg-2 col-md-12 col-12">
                        <div className="wpo-cta-btn">
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get Started<i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <img src={Shape1} alt="" />
            </div>
        </section>
    )
}

export default Cta;