import React, { useState } from 'react';
import './Section2.css';
import { useI18n } from '../../i18n/I18nProvider';

const Section2 = () => {
    const { get, t } = useI18n();
    const [activeTab, setActiveTab] = useState('power');
    const tabs = get('about.section2.tabs', []);
    const content = get('about.section2.content', {});

    const activeContent = content[activeTab] || content[tabs[0]?.id];
    if (!activeContent) return null;

    return (
        <section className="expertise-section">
            <div className="expertise-container">
                <div className="expertise-header">
                    <span className="domain-label">{t('about.section2.domainLabel')}</span>
                    <h1 className="expertise-title">
                        {t('about.section2.titleStart')}<span className="highlight">{t('about.section2.titleHighlight')}</span>
                    </h1>
                    <p className="expertise-intro">
                        {t('about.section2.intro')}
                    </p>
                </div>

                <div className="switcher-wrapper">
                    <div className="tabs-nav">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="material-symbols-outlined">{tab.icon}</span>
                                <span className="tab-label">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="content-panel glass-ui">
                        <div className="panel-bg-pattern">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.5"></circle>
                                <path d="M10 50 L90 50 M50 10 L50 90" stroke="currentColor" strokeWidth="0.5"></path>
                            </svg>
                        </div>

                        <div className="panel-grid">
                            <div className="description-col">
                                <div className="content-header">
                                    <h3 className="content-title">
                                        {activeContent.title}
                                        <span className="content-badge">{activeContent.badge}</span>
                                    </h3>
                                    <p className="content-desc">{activeContent.description}</p>
                                </div>

                                <div className="features-grid">
                                    {activeContent.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item">
                                            <div className="feature-icon-box">
                                                <span className="material-symbols-outlined">{feature.icon}</span>
                                            </div>
                                            <div className="feature-text">
                                                <h4 className="feature-title">{feature.title}</h4>
                                                <p className="feature-desc">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="action-zone">
                                    <button className="specs-btn">
                                        {t('about.section2.downloadSpecs')}
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="metrics-col">
                                <h4 className="metrics-heading">{t('about.section2.metricsHeading')}</h4>
                                {activeContent.metrics.map((metric, idx) => (
                                    <div key={idx} className="metric-card">
                                        <div className="metric-top">
                                            <span className="metric-value">{metric.value}</span>
                                            <span className="material-symbols-outlined metric-icon">{metric.icon}</span>
                                        </div>
                                        <p className="metric-label">{metric.label}</p>
                                        <p className="metric-subtext">{metric.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default Section2;
