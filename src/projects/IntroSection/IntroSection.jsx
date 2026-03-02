import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
    return (
        <section className="projects-intro">
            <div className="projects-intro-container">
                <div className="projects-intro-grid">
                    <div className="projects-intro-content">
                        <h2 className="projects-intro-title">Building Future of Industry</h2>
                        <div className="projects-intro-divider" />
                        <p className="projects-intro-description">
                            From 6th of October City to the wider GCC, Focus TC has a proven track record of delivering high-performance technical solutions for industrial, commercial, and utility sectors. We pride ourselves on precision, safety, and innovation.
                        </p>
                        <a href="/about">
                            <div className="projects-intro-link">
                            <span>Read about our methodology</span>
                            <span className="projects-intro-arrow">→</span>
                        </div>
                        </a>
                    </div>
                    
                    <div className="projects-intro-stats">
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">bolt</span>
                            <div className="projects-stat-number">500+</div>
                            <div className="projects-stat-label">Megawatts Delivered</div>
                        </div>
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">check_circle</span>
                            <div className="projects-stat-number">120+</div>
                            <div className="projects-stat-label">Successful Installs</div>
                        </div>
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">factory</span>
                            <div className="projects-stat-number">15</div>
                            <div className="projects-stat-label">Industries Served</div>
                        </div>
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">public</span>
                            <div className="projects-stat-number">4</div>
                            <div className="projects-stat-label">Countries Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
