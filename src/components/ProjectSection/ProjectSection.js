import { useState } from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
// import Projects from "../../api/projects";
import pimg2 from '../../images/project/2.jpg'
import pimg3 from '../../images/project/3.jpg'
import pimg1 from '../../images/project/1.jpg'

const ProjectSection = () => {

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
            title: 'Gas & Oil Engeneering',
            subtitle: 'FACTORY / INDUSTRY',
            slug: '1',
            pimg1: pimg1,
            date: 'Feb 2019',
            location: 'Austria',
            type: 'Civil Engineer',
            service: 'Industrial, Mechanical',
            duration: '12 Years',
            add: 'Millington, Ave, TN 38053',
            architect: 'Don Johnson',
            share: 'Industrial, Business',
            fax: ' 568 746 987'
        },
        {
            id: '2',
            title: 'Gas & Oil Engeneering',
            subtitle: 'FACTORY / INDUSTRY',
            slug: '2',
            pimg1: pimg2,
            date: 'Feb 2019',
            location: 'Austria',
            type: 'Civil Engineer',
            service: 'Industrial, Mechanical',
            duration: '12 Years',
            add: 'Millington, Ave, TN 38053',
            architect: 'Don Johnson',
            share: 'Industrial, Business',
            fax: ' 568 746 987'
        },
        {
            id: '4',
            title: 'Gas & Oil Engeneering',
            subtitle: 'FACTORY / INDUSTRY',
            slug: '3',
            pimg1: pimg3,
            date: 'Feb 2019',
            location: 'Austria',
            type: 'Civil Engineer',
            service: 'Industrial, Mechanical',
            duration: '12 Years',
            add: 'Millington, Ave, TN 38053',
            architect: 'Don Johnson',
            share: 'Industrial, Business',
            fax: ' 568 746 987'
        },
        {
            id: '3',
            title: 'Gas & Oil Engeneering',
            subtitle: 'FACTORY / INDUSTRY',
            slug: '3',
            pimg1: pimg3,
            date: 'Feb 2019',
            location: 'Austria',
            type: 'Civil Engineer',
            service: 'Industrial, Mechanical',
            duration: '12 Years',
            add: 'Millington, Ave, TN 38053',
            architect: 'Don Johnson',
            share: 'Industrial, Business',
            fax: ' 568 746 987'
        },


        
    
    
    ]
    return (
        <section className="wpo-project-section section-padding">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col col-lg-6 col-12">
                        < SectionTitle subtitle="WHAT WE DO" title="Complete Projects" />
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
                                            <span>{project.subtitle}</span>
                                            <h2>{project.title}</h2>
                                            <Link onClick={ClickHandlar} to={`/project-single/${project.slug}`} className="theme-btn"><i
                                                className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    }
                    {openTab == "engeneering" &&
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Data.slice(3, 7).map((project, pkey) => (
                                    <div className="grid" key={pkey}>
                                        <div className="images">
                                            <img src={project.pimg1} alt="img" />
                                        </div>
                                        <div className="text">
                                            <span>{project.subtitle}</span>
                                            <h2>{project.title}</h2>
                                            <Link onClick={ClickHandlar} to={`/project-single/${project.slug}`} className="theme-btn"><i
                                                className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    }
                    {openTab == "industry" &&
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Data.slice(5, 9).map((project, pkey) => (
                                    <div className="grid" key={pkey}>
                                        <div className="images">
                                            <img src={project.pimg1} alt="img" />
                                        </div>
                                        <div className="text">
                                            <span>{project.subtitle}</span>
                                            <h2>{project.title}</h2>
                                            <Link onClick={ClickHandlar} to={`/project-single/${project.slug}`} className="theme-btn"><i
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

export default ProjectSection;








