import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="projects-hero">
            <div className="projects-hero-background" />
         
            
            <div className="projects-hero-content">
                <div className="projects-hero-badge">
                    <span className="projects-hero-badge-icon">⚙️</span>
                    Excellence in Engineering
                </div>
                
                <h1 className="projects-hero-title">
                    Our Projects
                </h1>
                
                <p className="projects-hero-subtitle">
                    Delivering excellence in power, automation, and electromechanical solutions across Egypt and the region. From concept to commissioning.
                </p>
                
                <div className="projects-hero-buttons">
                    <button className="projects-hero-btn-primary">
                        View Portfolio
                        <span className="projects-hero-btn-arrow">↓</span>
                    </button>
                    <button className="projects-hero-btn-secondary">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
