import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/allimg/logo/RVKlogo.png'
const Products = () => {
    return (
        <Fragment>
            <Navbar  hclass={'wpo-header-style-3'} Logo={Logo}/>
            <PageTitle pageTitle={'PRODUCTS '} pagesub={'Products'} />
            <ServiceSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Products;
