import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section1.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
    const { get, t } = useI18n();
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

    const milestones = get('about.section1.milestones', []);
    const stats = get('about.section1.stats', []);
    const blueprint = get('about.section1.blueprint', []);

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
                        <span className="status-text">{t('about.section1.status')}</span>
                    </div>
                    <h2 className="hero-title">
                        {t('about.section1.titlePrefix')}
                        {t('about.section1.titleHighlight') ? <span className="text-primary-color">{t('about.section1.titleHighlight')}</span> : null}
                    </h2>
                    <p className="hero-description">
                        {t('about.section1.description')}
                    </p>

                    {/* Technical Stats Grid */}
                    <div className="stats-grid">
                        {stats.map((stat, i) => (
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
                            <span>{blueprint[0]}</span>
                            <span>{blueprint[1]}</span>
                            <span>{blueprint[2]}</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Section1;
