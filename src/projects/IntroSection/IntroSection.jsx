import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
    return (
        <section className="projects-intro">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-text">
                        <h2>Building the Future of Industry</h2>
                        <div className="divider"></div>
                        <p>
                            From 6th of October City to the wider GCC, Focus TC has a proven track record of delivering high-performance technical solutions for industrial, commercial, and utility sectors. We pride ourselves on precision, safety, and innovation.
                        </p>
                        <div className="read-more">
                            <span>Read about our methodology</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="material-symbols-outlined bolt">bolt</span>
                            <div className="stat-value">500+</div>
                            <div className="stat-label">Megawatts Delivered</div>
                        </div>
                        <div className="stat-card">
                            <span className="material-symbols-outlined check">check_circle</span>
                            <div className="stat-value">120+</div>
                            <div className="stat-label">Successful Installs</div>
                        </div>
                        <div className="stat-card">
                            <span className="material-symbols-outlined factory">factory</span>
                            <div className="stat-value">15</div>
                            <div className="stat-label">Industries Served</div>
                        </div>
                        <div className="stat-card">
                            <span className="material-symbols-outlined public">public</span>
                            <div className="stat-value">4</div>
                            <div className="stat-label">Countries Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
