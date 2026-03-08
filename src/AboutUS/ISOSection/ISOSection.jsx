import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ISOSection.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const ISOSection = () => {
    const { get, t, isRTL } = useI18n();
    const sectionRef = useRef(null);
    const certificates = get('about.section_iso.certificates', []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.iso-content-left',
                { opacity: 0, x: isRTL ? 50 : -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.iso-section',
                        start: 'top 75%',
                    },
                }
            );

            gsap.fromTo(
                '.iso-image-right',
                { opacity: 0, scale: 0.9, rotate: 5 },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.2,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: '.iso-section',
                        start: 'top 70%',
                    },
                }
            );

            gsap.fromTo(
                '.iso-list-item',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.iso-list',
                        start: 'top 85%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [isRTL]);

    return (
        <section className="iso-section" ref={sectionRef}>
            <div className="iso-container">
                <div className="iso-layout">
                    {/* Left Side: Content */}
                    <div className="iso-content-left">
                        <h1 className="iso-main-title">{t('about.section_iso.title')}</h1>
                        <h2 className="iso-subtitle">{t('about.section_iso.subtitle')}</h2>
                        <p className="iso-description">
                            {t('about.section_iso.description')}
                        </p>

                        <div className="iso-list">
                            {certificates.map((cert) => (
                                <div key={cert.id} className="iso-list-item">
                                    <div className="iso-check-icon">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <div className="iso-item-text">
                                        <h3>{cert.title}</h3>
                                        <p>{cert.standard}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image/Graphics */}
                    <div className="iso-image-right">
                        <div className="iso-image-container">
                            {/* We will use the generated image path here */}
                            <img 
                                src="/assets/images/iso_certificates_mockup.png" 
                                alt="ISO Certificates" 
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=2070&auto=format&fit=crop';
                                }}
                            />
                            <div className="iso-image-badge">
                                <span className="material-symbols-outlined">verified</span>
                                <span>Certified Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="iso-bg-element iso-bg-1"></div>
            <div className="iso-bg-element iso-bg-2"></div>
        </section>
    );
};

export default ISOSection;
