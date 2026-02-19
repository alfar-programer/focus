import React from 'react';
import ServicesHero from './section1/ServicesHero';
import ServicesOverview from './section2/ServicesOverview';
import WhyFocus from './section3/WhyFocus';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <ServicesHero />
            <ServicesOverview />
            <WhyFocus />
        </div>
    );
};

export default ServicesPage;
