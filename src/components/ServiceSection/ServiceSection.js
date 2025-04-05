import React from "react";
import Services from "../../api/Services";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";
import ShapeOn from "../../images/service/service-shape.svg";

const ServiceSection = (props) => {
    return (
        <section className="wpo-service-section section-padding">
            <div className="shape-1">
                <img src={ShapeOn} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-12">
                        <SectionTitle title='Our Services For Humanity' subtitle='Our Products' />
                    </div>
                </div>
                <div className="wpo-service-wrap d-flex justify-content-center">
    <div className="wpo-service-slider">
        <div className="row justify-content-center">
            {Services.slice(0, 6).map((item, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <ServiceCard title={item.title} img={item.sImg} slug={item.slug} />
                </div>
            ))}
        </div>
    </div>
</div>

            </div>
        </section>
    );
}

export default ServiceSection;