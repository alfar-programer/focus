import React from 'react';
import ServicesHero from './section1/ServicesHero';
import ServicesOverview from './section2/ServicesOverview';
import WhyFocus from './section3/WhyFocus';
import WorkflowSection from './section4/WorkflowSection';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <ServicesHero />
            <ServicesOverview />
            <WhyFocus />
            <WorkflowSection />
        </div>
    );
};

export default ServicesPage;
