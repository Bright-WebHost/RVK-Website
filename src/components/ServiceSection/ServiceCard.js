import React from "react";
import { Link } from 'react-router-dom'

const ServiceCard = ({ img, title, sdescription, slug }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="grid">
            <div className="wpo-service-item">
                <div className="wpo-service-image">
                    <img src={img} alt="" />
                </div>
                <div className="wpo-service-content">
                    <div className="service-content-single">
                      <Link to={`/${slug}`}>    <h2>{title}</h2></Link>
                    
                        <span>{sdescription}</span>
                    </div>
                    <Link to={`/${slug}`} className="theme-btn-s2">
  Details <i className="ti-arrow-right"></i>
</Link>
                </div>
            </div>
        </div>
    )
}


export default ServiceCard;