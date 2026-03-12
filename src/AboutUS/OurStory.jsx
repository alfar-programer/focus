import React, { useEffect } from 'react';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import Section5 from './section5/Section5';
import ISOSection from './ISOSection/ISOSection';
import './AboutUs.css';

const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us-page" style={{ paddingTop: '80px' }}>
            <Section5 />
            <Section2 />
            <Section3 />
            <ISOSection />
        </div>
    );
};

export default OurStory;
