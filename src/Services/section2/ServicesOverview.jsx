import React, { useEffect, useState } from 'react';
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
            case 'power':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="100" y="190" width="120" height="120" rx="4" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <path d="M160 230 L160 270 M140 250 L180 250" stroke="#19a1e6" strokeWidth="2" />
                        <text x="160" y="330" fill="#19a1e6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.power?.generator}</text>
                        <rect x="580" y="190" width="120" height="120" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="640" y="330" fill="#94a3b8" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.power?.load}</text>
                        <circle cx="400" cy="250" r="40" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="400" y="253" fill="#94a3b8" fontFamily="monospace" fontSize="8" textAnchor="middle">{diagramTexts.power?.ats}</text>
                        <path d="M220 250 H360" stroke="#19a1e6" strokeWidth="2" />
                        <path d="M440 250 H580" stroke="#19a1e6" strokeWidth="2" />
                    </svg>
                );
            case 'mep':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="350" y="50" width="100" height="60" rx="4" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                        <text x="400" y="85" fill="#eab308" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.mep?.electrical}</text>
                        <rect x="50" y="220" width="100" height="60" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="100" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.mep?.hvac}</text>
                        <rect x="650" y="220" width="100" height="60" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                        <text x="700" y="255" fill="#3b82f6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.mep?.plumbing}</text>
                        <circle cx="400" cy="250" r="50" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="12" textAnchor="middle">{diagramTexts.mep?.hub}</text>
                        <path d="M150 250 H350" stroke="#14b8a6" strokeWidth="1.5" />
                        <path d="M450 250 H650" stroke="#3b82f6" strokeWidth="1.5" />
                        <path d="M400 110 V200" stroke="#eab308" strokeDasharray="4 2" strokeWidth="1.5" />
                    </svg>
                );
            case 'electromechanical':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <circle cx="400" cy="250" r="40" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.electro?.core}</text>
                        <rect x="350" y="50" width="100" height="60" rx="4" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                        <text x="400" y="85" fill="#eab308" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.electro?.electrical}</text>
                        <path d="M400 110 V 210" stroke="#eab308" strokeDasharray="4 2" strokeWidth="1.5" />
                        <rect x="50" y="220" width="100" height="60" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="100" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.electro?.hvac}</text>
                        <path d="M150 250 H 360" stroke="#14b8a6" strokeWidth="1.5" />
                    </svg>
                );
            case 'automation':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="100" y="190" width="160" height="120" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="180" y="240" fill="#cbd5e1" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">{diagramTexts.automation?.plc}</text>
                        <text x="180" y="260" fill="#64748b" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.automation?.plcId}</text>
                        <path d="M260 250H540" fill="none" stroke="#19a1e6" strokeWidth="3" />
                        <circle cx="300" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="350" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="400" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="450" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="500" cy="250" r="3" fill="#19a1e6" />
                        <rect x="540" y="190" width="160" height="120" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="620" y="240" fill="#cbd5e1" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">{diagramTexts.automation?.scada}</text>
                        <text x="620" y="260" fill="#64748b" fontFamily="monospace" fontSize="10" textAnchor="middle">{diagramTexts.automation?.scadaId}</text>
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
                                <span className="section2-support-link">{t('services.overview.supportLink')}</span>
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
