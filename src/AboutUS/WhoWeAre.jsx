import React, { useEffect } from 'react';
import Section1 from './section1/Section1';
import './AboutUs.css';

const WhoWeAre = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us-page">
            <Section1 />
        </div>
    );
};

export default WhoWeAre;
