import React from 'react';
import ServicesHero from './section1/ServicesHero';
import ServicesOverview from './section2/ServicesOverview';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <ServicesHero />
            <ServicesOverview />
        </div>
    );
};

export default ServicesPage;
