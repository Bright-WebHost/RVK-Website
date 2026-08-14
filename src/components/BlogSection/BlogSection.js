import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import blogs from '../../api/blogs'
import SectionTitle from "../SectionTitle/SectionTitle";

import Shape from "../../images/blog/shape.png";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
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



    return (


        <section className="wpo-blog-section section-padding">
            <div className="shape">
                <img src={Shape} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col col-lg-8 col-12">
                        <SectionTitle subtitle='WHAT WE DO' title='Latest News & Blogs' />
                    </div>
                </div>
                <div className="wpo-blog-wrap">
                    <div className="wpo-blog-slider">
                        <Slider {...settings}>
                            {blogs.map((blog, bl) => (
                                <div className="m-x" key={bl}>
                                    <div className="grid" >
                                        <div className="images">
                                            <img src={blog.screens} alt="img" />
                                        </div>
                                        <div className="text">
                                            <span>{blog.create_at}</span>
                                            <h2>{blog.title}</h2>
                                            <p>{blog.description}</p>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="theme-btn-s2">Read More<i
                                                className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>
        </section>



    );
}

export default BlogSection;







