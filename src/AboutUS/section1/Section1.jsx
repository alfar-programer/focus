import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Section1.css';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
    useEffect(() => {
        // Reveal animations for timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach((item, index) => {
            const isEven = index % 2 === 0;

            gsap.fromTo(item,
                {
                    opacity: 0,
                    x: isEven ? -50 : 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Animate stats
        const stats = document.querySelectorAll('.stat-card');
        gsap.fromTo(stats,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.stats-grid',
                    start: 'top 85%'
                }
            }
        );
    }, []);

    const milestones = [
        {
            year: '2005',
            title: 'System Genesis',
            description: 'Initial infrastructure framework and foundation of Focus Trading & Contracting. Establishing the core mechanical protocols for large-scale operations.',
            icon: 'foundation',
            protocols: ['Protocol 01-A', 'Core Infrastructure'],
            reverse: false
        },
        {
            year: '2012',
            title: 'System Expansion',
            description: 'Integration of advanced MEP (Mechanical, Electrical, Plumbing) systems across regional hubs. Horizontal expansion of technical capacity and resource allocation.',
            icon: 'hub',
            protocols: ['MEP Integration', 'Regional Grid'],
            reverse: true
        },
        {
            year: '2018',
            title: 'Smart Innovation',
            description: 'Pivot to smart-city technology and automated system engineering implementation. Digital twin modeling and real-time infrastructure monitoring.',
            icon: 'smart_assistant',
            protocols: ['Automation', 'Smart Grid'],
            reverse: false
        },
        {
            year: '2024',
            title: 'Future State',
            description: 'Current status as a premium technology firm; Sustainable infrastructure scaling and Tier 4 Grid architecture. Leading the frontier of mechanical engineering.',
            icon: 'rocket_launch',
            protocols: ['Tier 4 Status', 'Sustainable Eng.'],
            reverse: true,
            highlight: true
        }
    ];

    return (
        <div className="evolution-section blueprint-bg">
            <main className="evolution-main">
                {/* Hero Header Section */}
                <div className="hero-wrapper">
                    <div className="status-badge">
                        <span className="status-indicator">
                            <span className="ping-animate"></span>
                            <span className="status-dot"></span>
                        </span>
                        <span className="status-text">System Status: Operational</span>
                    </div>
                    <h2 className="hero-title">
                        Evolutionary <span className="text-primary-color">Roadmap</span>
                    </h2>
                    <p className="hero-description">
                        A chronological schematic of our engineering milestones and technical infrastructure growth since inception. Mapping the trajectory of precision.
                    </p>

                    {/* Technical Stats Grid */}
                    <div className="stats-grid">
                        {[
                            { label: 'Milestones', value: '42+' },
                            { label: 'Active Nodes', value: '128' },
                            { label: 'Precision Rate', value: '99.9%' }
                        ].map((stat, i) => (
                            <div key={i} className="stat-card">
                                <p className="stat-label">{stat.label}</p>
                                <p className="stat-value">{stat.value}</p>
                                <div className="stat-bar"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vertical Timeline Section */}
                <div className="timeline-container">
                    {/* The System Spine */}
                    <div className="timeline-spine"></div>

                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${milestone.reverse ? 'reverse' : ''}`}
                        >
                            {/* Desktop Year */}
                            <div className="timeline-year">
                                <span className="text-outline">{milestone.year}</span>
                            </div>

                            {/* Center Node */}
                            <div className="timeline-node">
                                <div className="node-outer">
                                    <div className="node-inner"></div>
                                </div>
                                <div className="node-glow"></div>
                            </div>

                            {/* Content Card */}
                            <div className="timeline-content-wrapper">
                                <div className="mobile-year">
                                    <span className="text-outline">{milestone.year}</span>
                                </div>
                                <div className={`content-card ${milestone.highlight ? 'highlight' : ''}`}>
                                    <div className="card-icon">
                                        <span className="material-symbols-outlined">{milestone.icon}</span>
                                    </div>
                                    <h3 className="card-title">
                                        {!milestone.reverse && <span className="title-dot"></span>}
                                        {milestone.title}
                                        {milestone.reverse && <span className="title-dot"></span>}
                                    </h3>
                                    <p className="card-description">
                                        {milestone.description}
                                    </p>
                                    <div className="protocols-list">
                                        {milestone.protocols.map((protocol, i) => (
                                            <span
                                                key={i}
                                                className={`protocol-tag ${milestone.highlight && i === 0 ? 'solid' : ''}`}
                                            >
                                                {protocol}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blueprint Decoration */}
                <div className="blueprint-decoration">
                    <div className="deco-box">
                        <div className="deco-top"></div>
                        <div className="deco-left"></div>
                        <div className="deco-info">
                            <span>Ref: FTC-SYSTEM-001</span>
                            <span>Coord: 25.2769° N, 55.2962° E</span>
                            <span>Scale: 1:1,000,000</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Section1;
