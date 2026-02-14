// Section8 - Contact / CTA Section
import React from 'react';
import './Section8.css';

const Section8 = () => {
    return (
        <section className="section8-container">
            <div className="section8-wrapper">
                <div className="section8-content">
                    <span className="section8-subtitle">Get In Touch</span>
                    <h2 className="section8-title">Ready to Start Your Project?</h2>
                    <p className="section8-description">
                        Let&apos;s collaborate to bring your vision to life. Our team is ready to help you create something extraordinary.
                    </p>
                    <div className="section8-actions">
                        <button className="section8-btn-primary">Start a Project</button>
                        <button className="section8-btn-secondary">View Our Work</button>
                    </div>
                </div>
                <div className="section8-contact-info">
                    <div className="section8-contact-item">
                        <span className="section8-contact-label">Email</span>
                        <span className="section8-contact-value">hello@focus.studio</span>
                    </div>
                    <div className="section8-contact-item">
                        <span className="section8-contact-label">Phone</span>
                        <span className="section8-contact-value">+1 (555) 123-4567</span>
                    </div>
                    <div className="section8-contact-item">
                        <span className="section8-contact-label">Location</span>
                        <span className="section8-contact-value">San Francisco, CA</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;
