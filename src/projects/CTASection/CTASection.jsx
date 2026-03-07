import React from 'react';
import './CTASection.css';
import { useI18n } from '../../i18n/I18nProvider';

const CTASection = () => {
    const { get, t } = useI18n();
    const features = get('projects.cta.features', []);
    return (
        <section className="projects-cta">
            <div className="projects-cta-background" />
            <div className="projects-cta-grid" />
            
            <div className="projects-cta-container">
                <div className="projects-cta-content">
                    <div className="projects-cta-badge">
                        <span className="projects-cta-badge-icon material-symbols-outlined">handshake</span>
                        {t('projects.cta.badge')}
                    </div>
                    
                    <h2 className="projects-cta-title">
                        {t('projects.cta.titleLine')}
                        <span className="projects-cta-highlight">{t('projects.cta.titleHighlight')}</span>
                    </h2>
                    
                    <p className="projects-cta-description">
                        {t('projects.cta.description')}
                    </p>
                    
                    <div className="projects-cta-features">
                        <div className="projects-cta-feature">
                            <span className="material-symbols-outlined">schedule</span>
                            {features[0]}
                        </div>
                        <div className="projects-cta-feature">
                            <span className="material-symbols-outlined">support_agent</span>
                            {features[1]}
                        </div>
                        <div className="projects-cta-feature">
                            <span className="material-symbols-outlined">verified</span>
                            {features[2]}
                        </div>
                    </div>
                    
                    <div className="projects-cta-buttons">
                        <button className="projects-cta-btn-primary" onClick={() => window.location.href = '/contact'}>
                            <span className="material-symbols-outlined">calendar_month</span>
                            {t('projects.cta.primaryButton')}
                        </button>
                        <button className="projects-cta-btn-secondary" onClick={() => window.location.href = '/about'}>
                            <span className="material-symbols-outlined">download</span>
                            {t('projects.cta.secondaryButton')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
