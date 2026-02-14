import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section7.css';

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const [counts, setCounts] = useState({
        projects: 0,
        years: 0,
        hours: 0,
        partners: 0
    });

    const stats = [
        { key: 'projects', value: 500, suffix: '+', label: 'Projects Completed' },
        { key: 'years', value: 15, suffix: '+', label: 'Years Experience' },
        { key: 'hours', value: 1000000, suffix: '+', label: 'Safe Man Hours', format: true },
        { key: 'partners', value: 50, suffix: '+', label: 'Global Partners' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section reveal animation
            const sectionElements = sectionRef.current.querySelectorAll('.section7-reveal');
            
            gsap.fromTo(sectionElements,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Count-up animation
            ScrollTrigger.create({
                trigger: statsRef.current,
                start: 'top 75%',
                onEnter: () => {
                    stats.forEach((stat) => {
                        const obj = { val: 0 };
                        gsap.to(obj, {
                            val: stat.value,
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: () => {
                                setCounts((prev) => ({
                                    ...prev,
                                    [stat.key]: Math.floor(obj.val)
                                }));
                            }
                        });
                    });
                },
                once: true
            });

            // Project cards stagger animation
            const cards = sectionRef.current.querySelectorAll('.project-card');
            gsap.fromTo(cards,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cards[0],
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const formatNumber = (num, shouldFormat) => {
        if (shouldFormat && num >= 1000000) {
            return '1M';
        }
        return num.toLocaleString();
    };

    return (
        <section ref={sectionRef} className="section7-container">
            <div className="section7-wrapper">
                {/* Typography Header */}
                <div className="section7-header section7-reveal">
                    <span className="section7-subtitle">Our Milestones & Projects</span>
                    <h2 className="section7-title">Driving Global Impact</h2>
                </div>

                {/* Stats Dashboard: Glassmorphic Bar */}
                <div ref={statsRef} className="section7-stats section7-reveal">
                    {stats.map((stat) => (
                        <div key={stat.key} className="section7-stat-item">
                            <span className="section7-stat-label">{stat.label}</span>
                            <div className="section7-stat-value">
                                {formatNumber(counts[stat.key], stat.format)}{stat.suffix}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Showcase Grid */}
                <div className="section7-projects">
                    {/* Card 1 */}
                    <div className="project-card">
                        <div 
                            className="project-card-bg" 
                            style={{
                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRfspmuOD97SfvGzcmJ-X9lrLdI7Z2ZHq-5cP1vLghBJ3Huu4QkuTjFunHisxNG8VDsnu365fTVz1fInSWewJhLjwu1_vCCUTfgsqh4HyxRboasDY-TMoKcmH8YYIjTLFH4kaoNvfsLysP2ixw8aRercAR6n58huwwxHUlbPRJTIDHc_XpUCpk8xv5TVMDSkH_9apbGanWg-jWj-Dltd8h7SoK39yYE3UIENXYhNHAIkMdxmwv0Klj7px3rUTZW-XvX1l2eBgsmL39')`
                            }}
                        />
                        <div className="project-card-overlay" />
                        <div className="project-card-border" />
                        <div className="project-card-content">
                            <div className="project-card-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="project-card-title">Signature Infrastructure</h3>
                                <p className="project-card-desc">Developing world-class transport networks and monumental structural engineering solutions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="project-card">
                        <div 
                            className="project-card-bg" 
                            style={{
                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_v1XVh3NkjasvDZQKhsg0BHcBxkWAFh888YE2Zaj9YbdGEuPMhxhgwqhJGoedamBUpA7F9RHV3FwEOWHTMpC3AM37RPJZl9zlzocYBFJvI7rbz02rluQJZrFCl1hpgviCa9Y7GyF8FqafTujlF4cwv1WL5fAniPKrTQJcDQJw0reN8OM1I3P7x0XUe1TDEhpfOQtw0E-EMf_o2BgeUxr2p0Db6vaO50Qw9Mm--wvgFTJVnGiO4i0wQyAwK61IfWRwKvmsPXg10lVN')`
                            }}
                        />
                        <div className="project-card-overlay" />
                        <div className="project-card-border" />
                        <div className="project-card-content">
                            <div className="project-card-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="project-card-title">Industrial Excellence</h3>
                                <p className="project-card-desc">Pioneering smart manufacturing hubs and high-efficiency industrial facilities globally.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="project-card">
                        <div 
                            className="project-card-bg" 
                            style={{
                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1TBag1OXu8AHIs-YaaAW8I3uz4QWFIl6gH_aw-etVo5Q6NKhAhGTWTtYC6so5xUoF15LzWyz1NMF9jo3RXO8yk80zzlqArnBhAt_7dLMgRqGVfWC_ar7ozkbhpo8loOh5hIihNSYufbOm5x-0FRYfmsL_E_AES3aoLmtaTNjd0iWPsMJ048PHt7GqSiOHOei6FiC3Zr8aC-TyoJVng7w7ux799o7RAWohsDVfUyGd9qBXsjw4qJVKOFyh4Jelit1Wg98sPmU-D-Pd')`
                            }}
                        />
                        <div className="project-card-overlay" />
                        <div className="project-card-border" />
                        <div className="project-card-content">
                            <div className="project-card-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="project-card-title">Safety First</h3>
                                <p className="project-card-desc">Unwavering commitment to zero-incident environments through rigorous safety protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="section7-cta section7-reveal">
                    <button className="section7-cta-button">
                        <span>View Full Portfolio</span>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </button>
                </div>

                {/* Footer Visual Element */}
                <footer className="section7-footer">
                    <div className="section7-footer-line" />
                    <div className="section7-footer-dot" />
                    <div className="section7-footer-line" />
                </footer>
            </div>
        </section>
    );
};

export default Section7;
