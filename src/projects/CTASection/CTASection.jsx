import React from 'react';
import './CTASection.css';

const CTASection = () => {
    return (
        <section className="projects-cta">
            <div className="projects-cta-background" />
            <div className="projects-cta-grid" />
            
            <div className="projects-cta-container">
                <div className="projects-cta-content">
                    <div className="projects-cta-badge">
                        <span className="projects-cta-badge-icon material-symbols-outlined">handshake</span>
                        Partner With Us
                    </div>
                    
                    <h2 className="projects-cta-title">
                        Ready to Power Your
                        <span className="projects-cta-highlight"> Next Project?</span>
                    </h2>
                    
                    <p className="projects-cta-description">
                        From initial consultation to final commissioning, Focus TC delivers 
                        turnkey electromechanical solutions tailored to your specifications.
                    </p>
                    
                    <div className="projects-cta-features">
                        <div className="projects-cta-feature">
                            <span className="material-symbols-outlined">schedule</span>
                            24h Response Time
                        </div>
                        <div className="projects-cta-feature">
                            <span className="material-symbols-outlined">support_agent</span>
                            Expert Consultation
                        </div>
                        <div className="projects-cta-feature">
                            <span className="material-symbols-outlined">verified</span>
                            Guaranteed Quality
                        </div>
                    </div>
                    
                    <div className="projects-cta-buttons">
                        <button className="projects-cta-btn-primary" onClick={() => window.location.href = '/contactus'}>
                            <span className="material-symbols-outlined">calendar_month</span>
                            Schedule Consultation
                        </button>
                        <button className="projects-cta-btn-secondary" onClick={() => window.location.href = '/about'}>
                            <span className="material-symbols-outlined">download</span>
                            Company Profile
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
