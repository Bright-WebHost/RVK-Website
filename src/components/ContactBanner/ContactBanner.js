import React from 'react'
import { Link } from 'react-router-dom'

const ContactBanner = (props) => {
    return (
        <section className="wpo-page-title-contact">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ol className="wpo-breadcumb-wrap">
                                {/* <li><Link to="/">Home</Link></li> */}
                                {/* <li>{props.pagesub}</li> */}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner;






