import React, { useState } from 'react';
import './Section2.css';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState('power');

    const tabs = [
        { id: 'power', label: 'Power Systems', icon: 'bolt' },
        { id: 'electro', label: 'Electromechanical', icon: 'settings_input_component' },
        { id: 'auto', label: 'Automation', icon: 'precision_manufacturing' },
        { id: 'infra', label: 'Infrastructure', icon: 'foundation' }
    ];

    const content = {
        power: {
            title: 'Advanced Power Infrastructure',
            badge: 'Core Specialty',
            description: 'We design and deploy high-performance electrical infrastructure with a focus on Tier IV data center certification and sustainable energy management. Our HV/LV solutions ensure maximum reliability for industrial complexes.',
            features: [
                { title: 'Substation Design', desc: 'Full lifecycle engineering for high-voltage distribution networks.', icon: 'subtitles' },
                { title: 'Sustainable Grid', desc: 'Integration of renewable assets and smart metering systems.', icon: 'energy_savings_leaf' },
                { title: 'Tier IV Compliance', desc: 'Rigorous certification standards for mission-critical facilities.', icon: 'verified_user' },
                { title: 'HV/LV Maintenance', desc: '24/7 technical support and preventative monitoring services.', icon: 'engineering' }
            ],
            metrics: [
                { value: '99.99%', label: 'System Reliability', desc: 'Average uptime maintained across 45+ enterprise-level deployments globally.', icon: 'radar' },
                { value: '500MW+', label: 'Managed Capacity', desc: 'Total power distribution infrastructure engineered and currently under management.', icon: 'power' },
                { value: '12', label: 'Global Tier IV Sites', desc: 'Successfully certified high-availability data centers across EMEA and APAC.', icon: 'public' }
            ]
        },
        // Placeholders for other tabs as detailed content wasn't in the snippet
        electro: {
            title: 'Electromechanical Solutions',
            badge: 'Industrial Grade',
            description: 'Integrated mechanical and electrical systems for large-scale industrial applications, ensuring seamless operational flow and energy efficiency.',
            features: [
                { title: 'HVAC Systems', desc: 'Precision climate control for industrial and data center environments.', icon: 'ac_unit' },
                { title: 'Pumping Stations', desc: 'High-capacity fluid management and distribution systems.', icon: 'water_drop' }
            ],
            metrics: [
                { value: '150+', label: 'Units Installed', desc: 'High-performance electromechanical units deployed and maintained.', icon: 'settings' }
            ]
        },
        auto: {
            title: 'Industrial Automation',
            badge: 'Smart Tech',
            description: 'Next-generation automation and control systems that optimize production lines and enhance operational safety through intelligent monitoring.',
            features: [
                { title: 'SCADA Systems', desc: 'Real-time data acquisition and supervisory control solutions.', icon: 'monitoring' },
                { title: 'Robotic Integration', desc: 'Automated workflow optimization using advanced robotics.', icon: 'smart_toy' }
            ],
            metrics: [
                { value: '40%', label: 'Efficiency Gain', desc: 'Average operational efficiency increase after automation implementation.', icon: 'trending_up' }
            ]
        },
        infra: {
            title: 'Civil Infrastructure',
            badge: 'Built for Scale',
            description: 'Foundational engineering and structural solutions for complex infrastructure projects, from subterranean works to high-rise frameworks.',
            features: [
                { title: 'Site Preparation', desc: 'Comprehensive land grading and foundation engineering.', icon: 'agriculture' },
                { title: 'Structural Integrity', desc: 'Advanced material testing and seismic-resistant design.', icon: 'architecture' }
            ],
            metrics: [
                { value: '2M+', label: 'Sq Ft Constructed', desc: 'Total foundational and structural footprint delivered.', icon: 'square_foot' }
            ]
        }
    };

    const activeContent = content[activeTab];

    return (
        <section className="expertise-section">
            <div className="expertise-container">
                <div className="expertise-header">
                    <span className="domain-label">Technical Domains</span>
                    <h1 className="expertise-title">
                        Expertise & <span className="highlight">Capabilities</span>
                    </h1>
                    <p className="expertise-intro">
                        Pioneering premium infrastructure through data-driven engineering. Our specialized divisions deliver mission-critical solutions for global enterprises.
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
                                        Download Technical Specifications
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            <div className="metrics-col">
                                <h4 className="metrics-heading">Technical Metrics</h4>
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

                <div className="expertise-footer">
                    <div className="footer-stats">
                        <div className="stat-item">
                            <p className="stat-num">15+</p>
                            <p className="stat-txt">Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-num">200+</p>
                            <p className="stat-txt">Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-num">0</p>
                            <p className="stat-txt">Safety Incidents</p>
                        </div>
                    </div>
                    <div className="footer-badges">
                        <div className="cert-box">
                            <img src="/assets/about/iso_cert.png" alt="ISO 9001 Certification" />
                        </div>
                        <div className="cert-box text-badge">
                            <span>TIER IV CERTIFIED</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
