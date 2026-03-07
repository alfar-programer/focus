import React from 'react';
import './ServicesHero.css';
import { useI18n } from '../../i18n/I18nProvider';

const ServicesHero = () => {
    const { get, t } = useI18n();
    const breadcrumbs = get('services.hero.breadcrumbs', []);
    const chips = get('services.hero.chips', []);
    const stats = get('services.hero.stats', []);
    const dataRows = get('services.hero.dataRows', []);

    return (
        <section className="services-hero">
            {/* Background Grid Decoration */}
            <div className="section2-grid-bg"></div>
            
            {/* Company Logo Watermark */}
            <div className="services-hero__logo-watermark">
                <img src="/imgslide1-removebg-preview.png" alt="" aria-hidden="true" />
            </div>
            
            <div className="services-hero__container">
                {/* Left Column: Content */}
                <div className="services-hero__content">
                    {/* Breadcrumbs / ID */}
                    <div className="services-hero__breadcrumbs">
                        <span className="services-hero__breadcrumb">{breadcrumbs[0]}</span>
                        <span className="services-hero__breadcrumb-separator">/</span>
                        <span className="services-hero__breadcrumb">{breadcrumbs[1]}</span>
                        <span className="services-hero__breadcrumb-separator">/</span>
                        <span className="services-hero__breadcrumb services-hero__breadcrumb--active">{breadcrumbs[2]}</span>
                        <div className="services-hero__service-id">
                            {t('services.hero.serviceId')}
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="services-hero__title">
                        {t('services.hero.titleLine')} <br />
                        <span className="services-hero__title-accent">{t('services.hero.titleAccent')}</span>
                    </h1>

                    {/* Description */}
                    <p className="services-hero__description">
                        {t('services.hero.description')}
                    </p>

                    {/* Spec Chips */}
                    <div className="services-hero__chips">
                        <div className="services-hero__chip">
                            <span className="services-hero__chip-icon">bolt</span>
                            <span className="services-hero__chip-text">{chips[0]}</span>
                        </div>
                        <div className="services-hero__chip">
                            <span className="services-hero__chip-icon">verified_user</span>
                            <span className="services-hero__chip-text">{chips[1]}</span>
                        </div>
                        <div className="services-hero__chip">
                            <span className="services-hero__chip-icon">eco</span>
                            <span className="services-hero__chip-text">{chips[2]}</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="services-hero__cta">
                        <button className="services-hero__btn services-hero__btn--primary">
                            <span>{t('services.hero.ctaPrimary')}</span>
                            <span className="services-hero__btn-icon">→</span>
                        </button>
                        <button className="services-hero__btn services-hero__btn--secondary">
                            {t('services.hero.ctaSecondary')}
                        </button>
                    </div>

                    {/* Mini Stats */}
                    <div className="services-hero__stats">
                        <div className="services-hero__stat">
                            <div className="services-hero__stat-value">{stats[0]?.value}</div>
                            <div className="services-hero__stat-label">{stats[0]?.label}</div>
                        </div>
                        <div className="services-hero__stat">
                            <div className="services-hero__stat-value">{stats[1]?.value}</div>
                            <div className="services-hero__stat-label">{stats[1]?.label}</div>
                        </div>
                        <div className="services-hero__stat">
                            <div className="services-hero__stat-value">{stats[2]?.value}</div>
                            <div className="services-hero__stat-label">{stats[2]?.label}</div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual Blueprint */}
                <div className="services-hero__visual">
                    {/* Decorative Gradient */}
                    <div className="services-hero__visual-gradient"></div>
                    
                    {/* Technical SVG Visualization */}
                    <div className="services-hero__svg-container">
                        <svg className="services-hero__svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1"></stop>
                                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0"></stop>
                                </linearGradient>
                                <filter id="heroGlow">
                                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"></feMergeNode>
                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                </filter>
                            </defs>
                            
                            {/* Background Grid */}
                            <path d="M50 50 H450 V450 H50 Z" fill="none" stroke="var(--border-color)" strokeDasharray="4 4" strokeWidth="0.5"></path>
                            <path d="M250 50 V450 M50 250 H450" fill="none" stroke="var(--border-color)" strokeDasharray="4 4" strokeWidth="0.5"></path>
                            
                            {/* Main Generator Housing */}
                            <path d="M150 150 L350 150 L370 170 L370 330 L350 350 L150 350 L130 330 L130 170 Z" fill="url(#heroGrad)" stroke="var(--color-accent)" strokeOpacity="0.5" strokeWidth="2"></path>
                            
                            {/* Inner Components */}
                            <circle cx="250" cy="250" fill="none" r="60" stroke="var(--color-accent)" strokeOpacity="0.5" strokeWidth="2"></circle>
                            <circle cx="250" cy="250" fill="none" r="40" stroke="var(--color-accent)" strokeWidth="1.5" filter="url(#heroGlow)" className="services-hero__pulse-ring"></circle>
                            
                            {/* Connecting Nodes */}
                            <rect fill="var(--bg-surface)" x="110" y="230" width="20" height="40" stroke="var(--color-accent)" strokeWidth="1"></rect>
                            <rect fill="var(--bg-surface)" x="370" y="230" width="20" height="40" stroke="var(--color-accent)" strokeWidth="1"></rect>
                            
                            {/* Data Lines */}
                            <path d="M250 150 V100 H400" fill="none" stroke="var(--border-color)" strokeWidth="1"></path>
                            <circle cx="400" cy="100" r="3" fill="var(--color-accent)" fillOpacity="0.5"></circle>
                            <path d="M250 350 V400 H100" fill="none" stroke="var(--border-color)" strokeWidth="1"></path>
                            <circle cx="100" cy="400" r="3" fill="var(--color-accent)" fillOpacity="0.5"></circle>
                            
                            {/* Animated Flow Lines */}
                            <path d="M130 250 H370" fill="none" stroke="var(--color-accent)" strokeLinecap="round" strokeWidth="2" filter="url(#heroGlow)" opacity="0.8" className="services-hero__flow-line"></path>
                            <path d="M250 190 V310" fill="none" stroke="var(--color-accent)" strokeLinecap="round" strokeWidth="2" filter="url(#heroGlow)" opacity="0.8" className="services-hero__flow-line"></path>
                            
                            {/* Tech Labels */}
                            <text x="250" y="255" fill="var(--color-accent)" fontSize="10" letterSpacing="2" textAnchor="middle">{t('services.hero.diagram.core')}</text>
                            <text x="390" y="220" fill="var(--text-secondary)" fontSize="8">{t('services.hero.diagram.output')}</text>
                            <text x="110" y="220" fill="var(--text-secondary)" fontSize="8" textAnchor="end">{t('services.hero.diagram.input')}</text>
                        </svg>

                        {/* Floating Data Card */}
                        <div className="services-hero__data-card">
                            <div className="services-hero__data-card-header">
                                <div className="services-hero__data-card-dot"></div>
                                <span className="services-hero__data-card-label">{t('services.hero.cardLabel')}</span>
                            </div>
                            <div className="services-hero__data-card-content">
                                <div className="services-hero__data-row">
                                    <span className="services-hero__data-key">{dataRows[0]?.key}</span>
                                    <span className="services-hero__data-value">{dataRows[0]?.value}</span>
                                </div>
                                <div className="services-hero__data-row">
                                    <span className="services-hero__data-key">{dataRows[1]?.key}</span>
                                    <span className="services-hero__data-value">{dataRows[1]?.value}</span>
                                </div>
                                <div className="services-hero__data-row">
                                    <span className="services-hero__data-key">{dataRows[2]?.key}</span>
                                    <span className="services-hero__data-value">{dataRows[2]?.value}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
