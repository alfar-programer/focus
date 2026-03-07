import React from 'react';
import './IntroSection.css';
import { useI18n } from '../../i18n/I18nProvider';

const IntroSection = () => {
    const { get, t } = useI18n();
    const stats = get('projects.intro.stats', []);
    return (
        <section className="projects-intro">
            <div className="projects-intro-container">
                <div className="projects-intro-grid">
                    <div className="projects-intro-content">
                        <h2 className="projects-intro-title">{t('projects.intro.title')}</h2>
                        <div className="projects-intro-divider" />
                        <p className="projects-intro-description">
                            {t('projects.intro.description')}
                        </p>
                        <a href="/about">
                            <div className="projects-intro-link">
                            <span>{t('projects.intro.readMethodology')}</span>
                            <span className="projects-intro-arrow">→</span>
                        </div>
                        </a>
                    </div>
                    
                    <div className="projects-intro-stats">
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">{stats[0]?.icon}</span>
                            <div className="projects-stat-number">{stats[0]?.value}</div>
                            <div className="projects-stat-label">{stats[0]?.label}</div>
                        </div>
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">{stats[1]?.icon}</span>
                            <div className="projects-stat-number">{stats[1]?.value}</div>
                            <div className="projects-stat-label">{stats[1]?.label}</div>
                        </div>
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">{stats[2]?.icon}</span>
                            <div className="projects-stat-number">{stats[2]?.value}</div>
                            <div className="projects-stat-label">{stats[2]?.label}</div>
                        </div>
                        <div className="projects-stat-card">
                            <span className="projects-stat-icon material-symbols-outlined">{stats[3]?.icon}</span>
                            <div className="projects-stat-number">{stats[3]?.value}</div>
                            <div className="projects-stat-label">{stats[3]?.label}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
