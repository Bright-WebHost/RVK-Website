import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/allimg/logo/RVKlogo.png'
import ContactBanner from '../../components/ContactBanner/ContactBanner';

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar  hclass={'wpo-header-style-3'} Logo={Logo}/>
            <ContactBanner pageTitle={'CONTACT US'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

