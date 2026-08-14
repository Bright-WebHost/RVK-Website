import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import PartnersSecion from '../../components/PartnersSecion/PartnersSecion';
import Logo from '../../images/allimg/logo/RVKlogo.png'
import Cta from '../../components/Cta/Cta';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <AboutBanner pageTitle={'ABOUT US'} pagesub={'About'} />
            <About />
            {/* <PricingSection/> */}
            <Cta />
            {/* <TeamSection /> */}
            <PartnersSecion />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
