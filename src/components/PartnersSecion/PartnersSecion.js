
// images
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import patn1 from '../../images/logos/1.webp'
import patn2 from '../../images/logos/2.webp'
import patn3 from '../../images/logos/3.webp'
import patn4 from '../../images/logos/4.webp'
import patn5 from '../../images/logos/5.webp'

const PartnersSecion = () => {


    const partnerData = [
        {
            id: 1,
            img: patn1,
        },
        {
            id: 2,
            img: patn2,
        },
        {
            id: 3,
            img: patn3,
        },
        {
            id: 4,
            img: patn4,
        },
        {
            id: 5,
            img: patn5,
        },
        {
            id: 6,
            img: patn3,
        },
    ]

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className="wpo-partners-section" style={{margin:'40px'}}>
           
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                    <h1 style={{textAlign:'center'}}>Our Clients</h1>
                        <div className="partner-grids partners-slider" style={{backgroundColor:'#FF5E14',border:'2px red'}}>
                        
                            <Slider {...settings}>
                                {partnerData.map((partner, partnekye) => (
                                    <div className="grid" key={partnekye}>
                                        <img src={partner.img} alt='' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PartnersSecion;