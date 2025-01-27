import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo2.png'
import About2 from '../../components/about2/about2';
import Newslatter from '../../components/Newslatter/Newslatter';
import Destination from '../../components/Destination';
import FunFact from '../../components/FunFact';
import Rooms from '../../components/Rooms/Rooms';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import PricingSection from '../../components/PricingSection';
import Testimonial from '../../components/Testimonial';

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About2/>
            <Destination/> 
            <FunFact fClass={'section-padding'}/> 
            <Rooms/> 
            <ServiceSection2/> 
            <PricingSection/> 
            <Testimonial/> 
            <Newslatter nClass={'section-bg'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default AboutPage;
