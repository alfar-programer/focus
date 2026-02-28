import React from 'react';
import './CTASection.css';

const CTASection = () => {
    return (
        <section className="projects-cta">
            <div className="cta-background-decor">
                <div className="decor-1"></div>
                <div className="decor-2"></div>
            </div>

            <div className="cta-content">
                <div className="cta-icon">
                    <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h2>Ready to Start Your Next Project?</h2>
                <p>
                    Partner with Focus TC for reliable, world-class technical solutions. Our team of experts is ready to assess your needs and provide a tailored proposal.
                </p>
                <div className="cta-actions">
                    <button className="btn-cta-primary">
                        Get a Free Consultation
                    </button>
                    <button className="btn-cta-outline">
                        Download Company Profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
