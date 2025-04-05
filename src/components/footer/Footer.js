import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Services from '../../api/Services'
import footerBg from '../../images/allimg/footer.jpg'
import Shape1 from '../../images/sappot-shape.svg'
import News1 from '../../images/news/img-01.jpg'
import News2 from '../../images/news/img-01.jpg'
import Footerlinks from '../../api/Footerlinks'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {

    const [phoneNumber, setPhoneNumber] = useState('+91 8197 2561 35');

    return (
        <footer className="wpo-site-footer">
            <div className="footer-bg">
                <img src={footerBg} alt="footer-bg" />
            </div>
            <div className="wpo-support-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <div className="wpo-support-title">
                                <h2>Ready to
                                    indutrial support.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="wpo-support-icon">
                                {/* <a href={`tel:${phoneNumber}`} className="support"> */}
                                <a href="tel:+918197256135" className="support">
                                    <div className="shape">
                                        <i className="fi flaticon-phone-call-1"></i>
                                    </div>
                                </a>
                                <div className="shape-1">
                                    <img src={Shape1} alt="Shape1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="wpo-support-munber">
                                <span>Call Us Today:</span>
                                <p> +91 8197 2561 35</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>All Services:</h3>
                                </div>
                                <ul>
                                    {Footerlinks.slice(0, 6).map((nav, sitem) => (
                                        <li key={sitem}>
                                            <Link onClick={ClickHandler} to={`/${nav.slug}`}>
                                                <i className="ti-angle-right"></i>{nav.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>All Services:</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 6).map((service, sitem) => (
                                        <li key={sitem}>
                                            <Link onClick={ClickHandler} to={`/${service.slug}`}>
                                                <i className="ti-angle-right"></i>{service.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact Us:</h3>
                                </div>
                                <ul>
    <li>
        <a href="tel:+918197256135">
            <i className="fi flaticon-phone-call-1"></i> +91 8197 2561 35
        </a>
    </li>
    <li>
        <a href="tel:+918197256135">
            <i className="fi flaticon-phone-call-1"></i> +91 8722 0651 11
        </a>
    </li>
    <li>
    <a href="mailto:rvksteelalloys@gmail.com">
    <i className="fi flaticon-email"></i> rvksteelalloys@gmail.com
</a>

    </li>
</ul>

                            </div>
                        </div>
                        {/* <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                                <div className="widget-title">
                                    <h3>Contact Us:</h3>
                                </div>
                                <ul>
                                    <li>Call: +91 8197 2561 354</li>
                                    <li>E-mail: bunso@gmail.com</li>
                                    <li>Website: www.bunso.com</li>
                                </ul>
                               
                            </div>
                        </div> */}
                        {/* <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget blog-widget">
                                <div className="widget-title">
                                    <h3>Blog Post:</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div className="image">
                                            <img src={News1} alt="" />
                                        </div>
                                        <div className="text">
                                            <p><Link to="/blog-single/1">Standard and text since the make specimen.</Link></p>
                                            <span>12 August, 2024</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img src={News2} alt="" />
                                        </div>
                                        <div className="text">
                                            <p><Link to="/blog-single/2">Standard and text since the make specimen.</Link></p>
                                            <span>12 August, 2024</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-12">
                            <p > Copyright &copy; 2025 RVK |  Powered By <a href="https://brightmedia.tech/" target='_blank' style={{color:'#FF5E14'}}> Bright Media</a></p>
                        </div> 
                        <div className="col col-lg-6 col-12">
                            <div className="social-widget">
                                <ul>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;

