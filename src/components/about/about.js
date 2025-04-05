import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../SectionTitle/SectionTitle'
import abImg1 from '../../images/allimg/about1.jpg'
import abImg2 from '../../images/allimg/about2.jpg'
import abImg3 from '../../images/new/7.png'
import Signeture from '../../images/signeture.png'
import Shape1 from '../../images/about/about-shape-1.png'
import Shape2 from '../../images/about/about-shape-2.png'



const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                        <div className="wpo-about-left">
                            <div className="wpo-about-img-1">
                                <img src={abImg1} alt="" />
                            </div>
                            <div className="wpo-about-img-2">
                                <img src={abImg2} alt="" />
                            </div>
                            <div className="wpo-about-img-3">
                                <img src={abImg3} alt="" />
                            </div>
                            {/* <div className="wpo-about-left-text">
                                <span>“RVK Steels & Alloy”</span>
                                <div className="text-item" >
                                    <img src={Signeture} alt="" />
                                    <i className="fi flaticon-quotation" ></i>
                                </div>
                            </div> */}
                            <div className="shape-1">
                                <img src={Shape1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                        <div className="wpo-about-right">
                            <SectionTitle subtitle='About RVK Steels & Alloy' title='Forging Excellence in Metal Fabrication.' paragarap='RVK Steel & Alloys is a leading manufacturer of fabricated metal products, specializing in HVAC ducts, POP partitions, cable trays, AC stands, powder coating, and kitchen equipment. Based in Bondel, Mangaluru, we are the exclusive manufacturers of Elemetz AC Stand and a trusted name in HVAC duct production.'/>
                            <div className="text">
                                <span className="text-1">Quality Craftsmanship, Lasting Durability</span>
                                <span className="text-1">Innovative Manufacturing, Trusted Excellence</span>
                            </div>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us<i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <img src={Shape2} alt="" />
            </div>
        </section>
    )
}

export default About;



