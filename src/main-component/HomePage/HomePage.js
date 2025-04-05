import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import PartnersSecion from '../../components/PartnersSecion/PartnersSecion';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import About from '../../components/about/about';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/allimg/logo/RVKlogo.png'
import Hero3 from '../../components/hero3/hero3';
import FunFact from '../../components/FunFact/FunFact';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo}/>
           <Hero3 />
           <About />
            
            <FunFact/>
            <ServiceSection />
            {/* <CtaSection /> */}
            {/* <About /> */}
            {/* <TeamSection /> */}
            {/* < ProjectSection /> */}
            {/* <TestimonialSection /> */}
            {/* <BlogSection /> */}
            
            <PartnersSecion />
            <ProjectSection2/>
             <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;