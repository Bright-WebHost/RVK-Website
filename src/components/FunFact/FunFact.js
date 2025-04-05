import React from 'react'
import CountUp from 'react-countup';

const FunFact = (props) => {
    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={2} enableScrollSpy /></span>+ </h3>
                                    <p>Years of Experience </p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={10} enableScrollSpy /></span>+</h3>
                                    <p>No.of Employees</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={50} enableScrollSpy /></span>+</h3>
                                    <p>Clients Served </p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={100} enableScrollSpy /></span>%</h3>
                                    <p>Satisfaction </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;




