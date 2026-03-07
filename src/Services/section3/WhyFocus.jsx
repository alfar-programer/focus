import React, { useState } from 'react';
import './WhyFocus.css';
import { useI18n } from '../../i18n/I18nProvider';

const WhyFocus = () => {
    const { get, t } = useI18n();
    const whyFocusData = get('services.whyFocus.items', []);
    const statValues = get('services.whyFocus.statValues', []);
    const statLabels = get('services.whyFocus.statLabels', []);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="why-focus">
            <div className="why-focus__grid-bg"></div>
            
            {/* Company Logo Watermark */}
            <div className="why-focus__logo-watermark">
                <img src="/imgslide1-removebg-preview.png" alt="" aria-hidden="true" />
            </div>
            
            <div className="why-focus__container">
                {/* Left Column - Sticky Identity */}
                <div className="why-focus__left">
                    <div className="why-focus__badge">
                        <span className="why-focus__badge-dot"></span>
                        <span>{t('services.whyFocus.badge')}</span>
                    </div>
                    
                    <h1 className="why-focus__title">
                        {t('services.whyFocus.title')}<br />
                        <span className="why-focus__title-accent">{t('services.whyFocus.titleAccent')}</span>
                    </h1>
                    
                    <div className="why-focus__intro">
                        <p className="why-focus__lead">
                            {t('services.whyFocus.lead')}
                        </p>
                        <p className="why-focus__description">
                            {t('services.whyFocus.description')}
                        </p>
                        
                        <div className="why-focus__stats">
                            <div className="why-focus__stat">
                                <span className="why-focus__stat-value">{statValues[0]}</span>
                                <span className="why-focus__stat-label">{statLabels[0]}</span>
                            </div>
                            <div className="why-focus__stat-divider"></div>
                            <div className="why-focus__stat">
                                <span className="why-focus__stat-value">{statValues[1]}</span>
                                <span className="why-focus__stat-label">{statLabels[1]}</span>
                            </div>
                            <div className="why-focus__stat-divider"></div>
                            <div className="why-focus__stat">
                                <span className="why-focus__stat-value">{statValues[2]}</span>
                                <span className="why-focus__stat-label">{statLabels[2]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Interactive Pillars */}
                <div className="why-focus__right">
                    <div className="why-focus__section-label">
                        <span className="why-focus__label-line"></span>
                        <span>{t('services.whyFocus.sectionLabel')}</span>
                    </div>
                    
                    <p className="why-focus__section-intro">
                        {t('services.whyFocus.sectionIntro')}
                    </p>

                    <div className="why-focus__accordion">
                        {whyFocusData.map((item, index) => (
                            <div 
                                key={item.id}
                                className={`why-focus__item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <button 
                                    className="why-focus__item-header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="why-focus__item-main">
                                        <span className="why-focus__item-number">{item.number}</span>
                                        <div className="why-focus__item-title-wrap">
                                            <h3 className="why-focus__item-title">{item.title}</h3>
                                            <div className="why-focus__item-line"></div>
                                        </div>
                                    </div>
                                    <span className="why-focus__item-toggle">
                                        <svg 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="none"
                                            className={activeIndex === index ? 'rotated' : ''}
                                        >
                                            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </button>
                                
                                <div className={`why-focus__item-content ${activeIndex === index ? 'open' : ''}`}>
                                    <div className="why-focus__item-body">
                                        <div className="why-focus__item-text">
                                            <p>{item.description}</p>
                                            <ul className="why-focus__item-features">
                                                {item.features.map((feature, i) => (
                                                    <li key={i}>
                                                        <span className="why-focus__feature-icon">{feature.icon}</span>
                                                        <span>{feature.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="why-focus__item-metric">
                                            <span className="why-focus__metric-value">{item.metric.value}</span>
                                            <span className="why-focus__metric-unit">{item.metric.unit}</span>
                                            <span className="why-focus__metric-label">{item.metric.label}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="why-focus__item-indicator"></div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="why-focus__footer">
                        <span>{t('services.whyFocus.footerVersion')}</span>
                        <span className="why-focus__status">
                            <span className="why-focus__status-dot"></span>
                            {t('services.whyFocus.footerStatus')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFocus;
