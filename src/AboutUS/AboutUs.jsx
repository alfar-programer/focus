import React, { useEffect } from 'react';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import './AboutUs.css'; // Create if needed, or use existing styles

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us-page">
            <Section1 />
            <Section2 />
            <Section3 />
            {/* Add more sections here later if needed */}
        </div>
    );
};

export default AboutUs;
