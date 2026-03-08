import React from 'react';
import './HeroSection.css';
import { useI18n } from '../../i18n/I18nProvider';

const HeroSection = () => {
    const { t } = useI18n();
    return (
        <section className="projects-hero">
            <div className="projects-hero-background" />
         
            
            <div className="projects-hero-content">
                <div className="projects-hero-badge">
                    <span className="projects-hero-badge-icon">⚙️</span>
                    {t('projects.hero.badge')}
                </div>
                
                <h1 className="projects-hero-title">
                    {t('projects.hero.title')}
                </h1>
                
                <p className="projects-hero-subtitle">
                    {t('projects.hero.subtitle')}
                </p>
                
                <div className="projects-hero-buttons">
                    <button 
                        className="projects-hero-btn-primary" 
                        onClick={() => {
                            const projectsGrid = document.querySelector('.projects-grid-section');
                            if (projectsGrid) {
                                const y = projectsGrid.getBoundingClientRect().top + window.scrollY - 80;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }}
                    >
                        {t('projects.hero.primaryButton')}
                        <span className="projects-hero-btn-arrow">↓</span>
                    </button>
                    <button className="projects-hero-btn-secondary" onClick={() => window.location.href = '/contact'}>
                        {t('projects.hero.secondaryButton')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
