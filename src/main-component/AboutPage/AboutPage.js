import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnersSecion from '../../components/PartnersSecion/PartnersSecion';
import Logo from '../../images/allimg/logo/RVKlogo.png'
import Cta from '../../components/Cta/Cta';
import PricingSection from '../../components/PricingSection/PricingSection';
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
