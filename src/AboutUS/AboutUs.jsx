import React from 'react';
import { Navigate } from 'react-router-dom';

const AboutUs = () => {
    // Redirect the base /about route to the first subpage
    return <Navigate to="/about/who-we-are" replace />;
};

export default AboutUs;
