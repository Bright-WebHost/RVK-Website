import { useState } from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
// import Projects from "../../api/projects";
import pimg1 from '../../images/new/5.png'
import pimg2 from '../../images/new/1.png'
import pimg4 from '../../images/new/2.png'
import pimg3 from '../../images/new/4.png'
import pimg5 from '../../images/allimg//mainservice/5.jpg'
const HybridSections = () => {

    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    const [openTab, setOpenTab] = useState("construction")
    const handleTabClick = (id) => {
        setOpenTab(id)
    }



    
    const Data = [
        {
            id: '1',
            title: 'HVAC DUCTS',
            subtitle: 'HVAC DUCTS',
            slug: 'Ducts',
            pimg1: pimg1,
           
        },
        {
            id: '2',
            title: 'ELEMENTZ WALL MOUNT BRACKET',
            subtitle: 'ELEMENTZ WALL MOUNT BRACKET',
            slug: 'Elementz',
            pimg1: pimg2,
           
        },
        {
            id: '3',
            title: 'POP GRIPFRAMES',
            subtitle: 'HVAC DUCTS',
            slug: 'GripFrames',
            pimg1: pimg3,
           
        },
        {
            id: '4',
            title: 'CABLE TRAY',
            subtitle: 'FACTORY / INDUSTRY',
            slug: 'CableTray',
            pimg1: pimg4,
            
        },
        // {
        //     id: '5',
        //     title: 'HYBRID POWDER COATING',
        //     subtitle: 'FACTORY / INDUSTRY',
        //     slug: 'HybridPowderCoating',
        //     pimg1: pimg5,
           
        // },


        
    
    
    ]
    return (
        <section className="wpo-project-section section-padding">
            <div className="container">
                <div className="row justify-content-center" style={{marginTop:'-150px'}}>
                    <div className="col col-lg-6 col-12" >
                        < SectionTitle title="Related Products" />
                    </div>
                </div>
                {/* <div className="wpo-project-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-project-item">
                                <ul className="nav">
                                    <li className="nav-item" >
                                        <button onClick={() => handleTabClick("construction")} className={`nav-links ${openTab == "construction" ? "active" : ""}`}>Construction</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={() => handleTabClick("engeneering")} className={`nav-links ${openTab == "engeneering" ? "active" : ""}`}>Engeneering</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={() => handleTabClick("industry")} className={`nav-links ${openTab == "industry" ? "active" : ""}`}>Industry</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="wpo-project-content">
                <div className="container-fluid">
                    {openTab == "construction" &&
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Data.slice(0, 4).map((project, pkey) => (
                                    <div className="grid" key={pkey}>
                                        <div className="images">
                                            <img src={project.pimg1} alt="img" />
                                        </div>
                                        <div className="text">
                                            {/* <span>{project.subtitle}</span> */}
                                            <h2>{project.title}</h2>
                                            <Link  to={`/${project.slug}`} className="theme-btn"><i
                                                className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    }
                   
                </div>
            </div>
        </section>
    )
}

export default HybridSections;








