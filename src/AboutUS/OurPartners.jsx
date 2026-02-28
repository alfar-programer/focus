import React, { useEffect } from 'react';
import Section4 from './section4/Section4';
import './AboutUs.css';

const OurPartners = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us-page" style={{ paddingTop: '40px' }}>
            <Section4 />
        </div>
    );
};

export default OurPartners;
