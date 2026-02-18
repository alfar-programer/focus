import React, { useState } from 'react';
import './ServicesOverview.css';

const servicesData = [
    {
        id: 'power-generators',
        icon: 'bolt',
        title: 'Power Generators',
        subtitle: 'INDUSTRIAL & BACKUP',
        serviceId: '#PWR-GEN-04',
        heading: 'Industrial Power Infrastructure',
        description: 'Reliable, high-efficiency power generation solutions designed for critical infrastructure. We deliver robust backup systems and continuous power supply units tailored to industrial demands.',
        stats: [
            { icon: 'offline_bolt', label: 'Power Capacity', value: '800', unit: 'kVA', progress: 80 },
            { icon: 'speed', label: 'Generator Efficiency', value: '98.5', unit: '%', progress: 98.5 },
            { icon: 'rocket_launch', label: 'Deployment Speed', value: '48', unit: 'hrs', subtext: 'Rapid On-site Setup' }
        ],
        diagramLabels: ['FIG 3.0 - POWER FLOW', 'GRID SYNCHRONIZED'],
        diagramType: 'power'
    },
    {
        id: 'mep-systems',
        icon: 'hvac',
        title: 'MEP Systems',
        subtitle: 'INTEGRATION & CONTROL',
        serviceId: '#MEP-01',
        heading: 'MEP Systems Integration',
        description: 'Precision-engineered mechanical, electrical, and plumbing solutions optimized for large-scale commercial infrastructure. We ensure seamless interoperability between core building systems.',
        stats: [
            { icon: 'bolt', label: 'System Capacity', value: '50', unit: 'MW', progress: 85 },
            { icon: 'timer', label: 'Guaranteed Uptime', value: '99.9', unit: '%', progress: 99 },
            { icon: 'groups', label: 'Engineering Team', value: '45', unit: '+', subtext: 'Certified Specialists' }
        ],
        diagramLabels: ['FIG 3.0 - MEP FLOW', 'SYSTEM ACTIVE'],
        diagramType: 'mep'
    },
    {
        id: 'electromechanical',
        icon: 'electrical_services',
        title: 'Electromechanical Contracting',
        subtitle: 'SYSTEMS & POWER',
        serviceId: '#EM-01',
        heading: 'Integrated Building Systems',
        description: 'End-to-end electromechanical solutions designed for high-performance infrastructure. We unify electrical, HVAC, and plumbing networks into a single, cohesive operational framework for maximum efficiency.',
        stats: [
            { icon: 'hub', label: 'Integration Coverage', value: '100', unit: '%', progress: 100 },
            { icon: 'precision_manufacturing', label: 'Installation Accuracy', value: '99.8', unit: '%', progress: 99.8 },
            { icon: 'rocket_launch', label: 'Delivery Efficiency', value: 'High', unit: '', subtext: 'Optimized Workflow' }
        ],
        diagramLabels: ['FIG 3.0 - SYSTEM MAP', 'LIVE SYNC'],
        diagramType: 'electromechanical'
    },
    {
        id: 'automation',
        icon: 'precision_manufacturing',
        title: 'Automation & Instrumentation',
        subtitle: 'SCADA & PLC SYSTEMS',
        serviceId: '#AUTO-01',
        heading: 'Industrial Control Intelligence',
        description: 'Advanced PLC, SCADA, and DCS architectures designed for mission-critical industrial environments. We deliver real-time data acquisition and precise automated control systems.',
        stats: [
            { icon: 'speed', label: 'Control Response', value: '10', unit: 'ms', progress: 95 },
            { icon: 'verified_user', label: 'System Uptime', value: '99.99', unit: '%', progress: 99.99 },
            { icon: 'my_location', label: 'Sensor Accuracy', value: '+/- 0.01', unit: '%', subtext: 'Calibrated Precision' }
        ],
        diagramLabels: ['FIG 3.0 - SCADA LOOP', 'ACTIVE FEED'],
        diagramType: 'automation'
    }
];

const ServicesOverview = () => {
    const [activeService, setActiveService] = useState(servicesData[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

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
                        <text x="160" y="330" fill="#19a1e6" fontFamily="monospace" fontSize="10" textAnchor="middle">GENERATOR UNIT</text>
                        <rect x="580" y="190" width="120" height="120" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="640" y="330" fill="#94a3b8" fontFamily="monospace" fontSize="10" textAnchor="middle">CRITICAL LOAD</text>
                        <circle cx="400" cy="250" r="40" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="400" y="253" fill="#94a3b8" fontFamily="monospace" fontSize="8" textAnchor="middle">ATS NODE</text>
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
                        <text x="400" y="85" fill="#eab308" fontFamily="monospace" fontSize="10" textAnchor="middle">ELECTRICAL</text>
                        <rect x="50" y="220" width="100" height="60" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="100" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">HVAC SYS</text>
                        <rect x="650" y="220" width="100" height="60" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                        <text x="700" y="255" fill="#3b82f6" fontFamily="monospace" fontSize="10" textAnchor="middle">PLUMBING</text>
                        <circle cx="400" cy="250" r="50" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="12" textAnchor="middle">MEP HUB</text>
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
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="10" textAnchor="middle">CORE HUB</text>
                        <rect x="350" y="50" width="100" height="60" rx="4" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
                        <text x="400" y="85" fill="#eab308" fontFamily="monospace" fontSize="10" textAnchor="middle">ELECTRICAL</text>
                        <path d="M400 110 V 210" stroke="#eab308" strokeDasharray="4 2" strokeWidth="1.5" />
                        <rect x="50" y="220" width="100" height="60" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
                        <text x="100" y="255" fill="#14b8a6" fontFamily="monospace" fontSize="10" textAnchor="middle">HVAC SYS</text>
                        <path d="M150 250 H 360" stroke="#14b8a6" strokeWidth="1.5" />
                    </svg>
                );
            case 'automation':
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <rect x="100" y="190" width="160" height="120" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="180" y="240" fill="#cbd5e1" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">PLC CONTROLLER</text>
                        <text x="180" y="260" fill="#64748b" fontFamily="monospace" fontSize="10" textAnchor="middle">ID: PLC-X9</text>
                        <path d="M260 250H540" fill="none" stroke="#19a1e6" strokeWidth="3" />
                        <circle cx="300" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="350" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="400" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="450" cy="250" r="3" fill="#19a1e6" />
                        <circle cx="500" cy="250" r="3" fill="#19a1e6" />
                        <rect x="540" y="190" width="160" height="120" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                        <text x="620" y="240" fill="#cbd5e1" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">SCADA HMI</text>
                        <text x="620" y="260" fill="#64748b" fontFamily="monospace" fontSize="10" textAnchor="middle">ID: SCADA-01</text>
                    </svg>
                );
            default:
                return (
                    <svg className="section2-diagram-svg" viewBox="0 0 800 500" fill="none">
                        <path d="M0 100H800M0 200H800M0 300H800M0 400H800" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <path d="M100 0V500M200 0V500M300 0V500M400 0V500M500 0V500M600 0V500M700 0V500" stroke="#2a3b45" strokeDasharray="4 4" strokeWidth="0.5" />
                        <circle cx="400" cy="250" r="60" fill="#1e293b" stroke="#19a1e6" strokeWidth="2" />
                        <text x="400" y="255" fill="#19a1e6" fontFamily="monospace" fontSize="14" textAnchor="middle">SYSTEM</text>
                    </svg>
                );
        }
    };

    return (
        <section className="section2-services" id="services">
            <div className="section2-wrapper">
                {/* Left Sidebar Navigation */}
                <aside className="section2-sidebar">
                    <div className="section2-sidebar-header">
                        <h3 className="section2-sidebar-title">Services Overview</h3>
                        <p className="section2-sidebar-subtitle">Select a domain to view details</p>
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
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsOYg92VAeyQSQacGWh4r_Yf9PxgofhLUvhb4F4rRYp1zDgcQyjS1bRMYWPaMfWBIeiFkeVU58oahldWGt7SisInaeDTeL-oZOPyECE6ku_B4AR0LPBajbX5RjG1OzA3QEC3b9Aed7e9g1a7kFILIfXD2nRnRsik-41vN3lW3_JiXPuhkU7Cf0NbvtVfSo4adPyK5K0upkzDuWRapK7mqiXhSjO_JCEqEC7u8SVNzOlJ1lT3qpKtqfUIN2JT4YAPlQWF8pABdmlwQ" alt="Support" />
                            </div>
                            <div className="section2-support-info">
                                <span className="section2-support-text">Need Assistance?</span>
                                <span className="section2-support-link">Contact Support</span>
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
                                <span>Tech Spec PDF</span>
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
