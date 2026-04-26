import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.css';
import { useI18n } from '../../i18n/I18nProvider';

const ServicesOverview = () => {
    const { get, t } = useI18n();
    const servicesData = get('services.overview.services', []);
    const diagramTexts = get('services.overview.diagramTexts', {});
    const [activeService, setActiveService] = useState(servicesData[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (!servicesData.length) return;
        setActiveService((previous) => (
            servicesData.find((service) => service.id === previous?.id) || servicesData[0]
        ));
    }, [servicesData]);

    const handleServiceClick = (service) => {
        if (service.id === activeService.id) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveService(service);
            setIsTransitioning(false);
        }, 200);
    };

    const renderDiagram = (type) => {
        switch (type) {
            case 'diesel':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="350" y="200" width="100" height="100" rx="4" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                        <text x="400" y="255" fill="#eab308" fontFamily="monospace" fontSize="12" textAnchor="middle">{diagramTexts.diesel?.generator}</text>
                        <circle cx="200" cy="250" r="50" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="200" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.diesel?.fuel}</text>
                        <rect x="550" y="210" width="100" height="80" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="600" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.diesel?.output}</text>
                        <path d="M250 250 H350" stroke="#19a1e6" strokeWidth="2" />
                        <path d="M450 250 H550" stroke="#14b8a6" strokeWidth="2" />
                        <path d="M400 200 V100" stroke="#eab308" strokeDasharray="4 2" strokeWidth="1.5" />
                    </svg>
                );
            case 'sync':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="350" y="150" width="100" height="200" rx="4" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="12" textAnchor="middle">{diagramTexts.sync?.panel}</text>
                        <circle cx="200" cy="180" r="50" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                        <text x="200" y="185" fill="#eab308" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.sync?.gen1}</text>
                        <circle cx="200" cy="320" r="50" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                        <text x="200" y="325" fill="#eab308" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.sync?.gen2}</text>
                        <rect x="550" y="210" width="100" height="80" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="600" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.sync?.load}</text>
                        <path d="M250 180 H350" stroke="#eab308" strokeWidth="2" />
                        <path d="M250 320 H350" stroke="#eab308" strokeWidth="2" />
                        <path d="M450 250 H550" stroke="#14b8a6" strokeWidth="2" />
                    </svg>
                );
            case 'testing':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="350" y="200" width="100" height="100" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                        <text x="400" y="255" fill="#3b82f6" fontFamily="monospace" fontSize="12" textAnchor="middle">{diagramTexts.testing?.station}</text>
                        <circle cx="200" cy="250" r="50" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                        <text x="200" y="255" fill="#ef4444" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.testing?.loadBank}</text>
                        <circle cx="600" cy="250" r="50" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                        <text x="600" y="255" fill="#10b981" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.testing?.metrics}</text>
                        <path d="M250 250 H350" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                        <path d="M450 250 H550" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                );
            case 'commissioning':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="150" y="210" width="120" height="80" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                        <text x="210" y="255" fill="#f59e0b" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.commissioning?.site}</text>
                        <rect x="340" y="210" width="120" height="80" rx="4" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
                        <text x="400" y="255" fill="#6366f1" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.commissioning?.verify}</text>
                        <rect x="530" y="210" width="120" height="80" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
                        <text x="590" y="255" fill="#22c55e" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.commissioning?.ready}</text>
                        <path d="M270 250 H340" stroke="#6366f1" strokeWidth="2" />
                        <path d="M460 250 H530" stroke="#22c55e" strokeWidth="2" />
                    </svg>
                );
            case 'training':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <circle cx="400" cy="250" r="60" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
                        <text x="400" y="255" fill="#a855f7" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.training?.knowledge}</text>
                        <rect x="150" y="210" width="100" height="80" rx="4" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
                        <text x="200" y="255" fill="#ec4899" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.training?.docs}</text>
                        <rect x="550" y="210" width="100" height="80" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                        <text x="600" y="255" fill="#3b82f6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.training?.operator}</text>
                        <path d="M250 250 H340" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 2" />
                        <path d="M460 250 H550" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                );
            case 'support':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <circle cx="400" cy="250" r="50" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="400" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.support?.service}</text>
                        <circle cx="250" cy="150" r="50" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                        <text x="250" y="155" fill="#f59e0b" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.support?.maintenance}</text>
                        <circle cx="550" cy="350" r="50" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                        <text x="550" y="355" fill="#3b82f6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.support?.parts}</text>
                        <path d="M285 185 L365 215" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                        <path d="M435 285 L515 315" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                );
            default:
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <circle cx="400" cy="250" r="60" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="14" textAnchor="middle">{diagramTexts.fallback?.system}</text>
                    </svg>
                );
        }
    };

    if (!activeService) return null;

    return (
        <section className="section2-services" id="services">
            <div className="section2-wrapper">
                {/* Left Sidebar Navigation */}
                <aside className="section2-sidebar">
                    <div className="section2-sidebar-header">
                        <h3 className="section2-sidebar-title">{t('services.overview.sidebarTitle')}</h3>
                        <p className="section2-sidebar-subtitle">{t('services.overview.sidebarSubtitle')}</p>
                    </div>
                    
                    <div className="section2-services-list">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                className={`section2-service-btn ${activeService.id === service.id ? 'active' : ''}`}
                                onClick={() => handleServiceClick(service)}
                            >
                                <span className="section2-service-icon material-symbols-outlined">
                                    {service.icon}
                                </span>
                                <div className="section2-service-info">
                                    <span className="section2-service-title">{service.title}</span>
                                    <span className="section2-service-subtitle">{service.subtitle}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    
                    <div className="section2-sidebar-footer">
                        <div className="section2-support">
                            <div className="section2-support-avatar">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsOYg92VAeyQSQacGWh4r_Yf9PxgofhLUvhb4F4rRYp1zDgcQyjS1bRMYWPaMfWBIeiFkeVU58oahldWGt7SisInaeDTeL-oZOPyECE6ku_B4AR0LPBajbX5RjG1OzA3QEC3b9Aed7e9g1a7kFILIfXD2nRnRsik-41vN3lW3_JiXPuhkU7Cf0NbvtVfSo4adPyK5K0upkzDuWRapK7mqiXhSjO_JCEqEC7u8SVNzOlJ1lT3qpKtqfUIN2JT4YAPlQWF8pABdmlwQ" alt="" />
                            </div>
                            <div className="section2-support-info">
                                <span className="section2-support-text">{t('services.overview.supportTitle')}</span>
                                <Link to="/contact" className="section2-support-link">{t('services.overview.supportLink')}</Link>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Content Area */}
                <div className={`section2-content ${isTransitioning ? 'transitioning' : ''}`}>
                    {/* Grid Background */}
                    <div className="section2-grid-bg" />
                    
                    <div className="section2-content-inner">
                        {/* Header */}
                        <div className="section2-content-header">
                            <div className="section2-content-header-text">
                                <span className="section2-service-badge">{activeService.serviceId}</span>
                                <h2 className="section2-content-heading">{activeService.heading}</h2>
                                <p className="section2-content-description">{activeService.description}</p>
                            </div>
                            <button className="section2-download-btn">
                                <span className="material-symbols-outlined">download</span>
                                <span>{t('services.overview.downloadButton')}</span>
                            </button>
                        </div>

                        {/* Stats and Diagram Grid */}
                        <div className="section2-content-grid">
                            {/* Stats Column */}
                            <div className="section2-stats-column">
                                {activeService.stats.map((stat, index) => (
                                    <div key={index} className="section2-stat-card">
                                        <div className="section2-stat-icon">
                                            <span className="material-symbols-outlined">{stat.icon}</span>
                                        </div>
                                        <p className="section2-stat-label">{stat.label}</p>
                                        <div className="section2-stat-value">
                                            <span className="section2-stat-number">{stat.value}</span>
                                            <span className="section2-stat-unit">{stat.unit}</span>
                                        </div>
                                        {stat.progress && (
                                            <div className="section2-stat-progress">
                                                <div 
                                                    className="section2-stat-progress-bar" 
                                                    style={{ width: `${stat.progress}%` }}
                                                />
                                            </div>
                                        )}
                                        {stat.subtext && (
                                            <p className="section2-stat-subtext">{stat.subtext}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Diagram Column */}
                            <div className="section2-diagram-column">
                                <div className="section2-diagram-container">
                                    <div className="section2-diagram-labels">
                                        <span className="section2-diagram-label">{activeService.diagramLabels[0]}</span>
                                        <span className="section2-diagram-label section2-diagram-label-pulse">{activeService.diagramLabels[1]}</span>
                                    </div>
                                    <div className="section2-diagram-content">
                                        {renderDiagram(activeService.diagramType)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
