import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="projects-hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="material-symbols-outlined">engineering</span>
                    Excellence in Engineering
                </div>
                <h1>Our Projects</h1>
                <p>
                    Delivering excellence in power, automation, and electromechanical solutions across Egypt and the region. From concept to commissioning.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary">
                        View Portfolio
                        <span className="material-symbols-outlined">arrow_downward</span>
                    </button>
                    <button className="btn-secondary">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
