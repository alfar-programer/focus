import React, { useState } from 'react';
import './WhyFocus.css';

const whyFocusData = [
    {
        id: 1,
        number: '01',
        title: 'Rapid Response Capability',
        description: 'Our agile operational framework ensures immediate deployment of resources and specialized engineering teams to critical infrastructure sites within 24 hours of project initiation. We utilize pre-staged logistics hubs to minimize lead times.',
        features: [
            { icon: 'check_circle', text: '24/7 Command Center Activation' },
            { icon: 'check_circle', text: 'Pre-approved Vendor Network' }
        ],
        metric: { value: '24', unit: 'hr', label: 'Deploy Time' }
    },
    {
        id: 2,
        number: '02',
        title: 'Collaborative Engineering',
        description: 'Our multidisciplinary approach breaks down traditional silos through advanced BIM-led synchronization. By integrating structural, mechanical, and electrical teams into a unified digital environment, we eliminate clashes before they manifest on site.',
        features: [
            { icon: 'hub', text: 'Cross-Disciplinary Coordination' },
            { icon: 'sync', text: 'Real-time Digital Twin Updates' }
        ],
        metric: { value: '100%', unit: '', label: 'Team Synergy' }
    },
    {
        id: 3,
        number: '03',
        title: 'Integrated Supply Chain',
        description: 'We leverage a robust global network of pre-vetted manufacturers and logistics partners to ensure material availability regardless of market volatility. Our vertical integration strategy secures critical path items months in advance.',
        features: [
            { icon: 'verified_user', text: 'Pre-vetted Vendor Reliability' },
            { icon: 'local_shipping', text: 'Automated Logistics Tracking' }
        ],
        metric: { value: '45+', unit: '', label: 'Global Hubs' }
    },
    {
        id: 4,
        number: '04',
        title: 'Safety & Quality Standards',
        description: 'Our Zero-Harm philosophy is embedded in every operational layer. We rigorously adhere to ISO 45001 and ISO 9001 standards, employing predictive safety analytics to neutralize risks before they arise.',
        features: [
            { icon: 'shield_with_heart', text: 'Mission-Critical Safety Protocols' },
            { icon: 'workspace_premium', text: 'ISO 9001 & 45001 Compliant' }
        ],
        metric: { value: 'Zero', unit: '', label: 'Harm Certified' }
    }
];

const WhyFocus = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="why-focus">
            <div className="why-focus__grid-bg"></div>
            
            <div className="why-focus__container">
                {/* Left Column - Sticky Identity */}
                <div className="why-focus__left">
                    <div className="why-focus__badge">
                        <span className="why-focus__badge-dot"></span>
                        <span>Strategic Advantage</span>
                    </div>
                    
                    <h1 className="why-focus__title">
                        WHY<br />
                        <span className="why-focus__title-accent">FOCUS</span>
                    </h1>
                    
                    <div className="why-focus__intro">
                        <p className="why-focus__lead">
                            Engineering precision meets rapid execution.
                        </p>
                        <p className="why-focus__description">
                            We deliver complex contracting solutions where failure is not an option. From critical infrastructure to sustainable frameworks, our approach is defined by rigorous standards and technical superiority.
                        </p>
                        
                        <div className="why-focus__stats">
                            <div className="why-focus__stat">
                                <span className="why-focus__stat-value">24h</span>
                                <span className="why-focus__stat-label">Mobilization</span>
                            </div>
                            <div className="why-focus__stat-divider"></div>
                            <div className="why-focus__stat">
                                <span className="why-focus__stat-value">100%</span>
                                <span className="why-focus__stat-label">Compliance</span>
                            </div>
                            <div className="why-focus__stat-divider"></div>
                            <div className="why-focus__stat">
                                <span className="why-focus__stat-value">ISO</span>
                                <span className="why-focus__stat-label">Certified</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Interactive Pillars */}
                <div className="why-focus__right">
                    <div className="why-focus__section-label">
                        <span className="why-focus__label-line"></span>
                        <span>Engineering Excellence</span>
                    </div>
                    
                    <p className="why-focus__section-intro">
                        Our operational framework is built on precision, speed, and integrated supply chains. We don't just build infrastructure; we engineer certainty in an uncertain world.
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
                        <span>Focus System v2.0</span>
                        <span className="why-focus__status">
                            <span className="why-focus__status-dot"></span>
                            System Active
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFocus;
