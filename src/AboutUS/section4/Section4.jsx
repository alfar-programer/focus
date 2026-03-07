import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section4.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
    const { get, t } = useI18n();
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const offices = get('about.section4.offices', []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.locations-header',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.locations-header',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.8,
                        delay: i * 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="locations-section" ref={sectionRef}>
            <div className="locations-grid-overlay" />

            <div className="locations-inner">
                {/* Header */}
                <div className="locations-header">
                    <span className="locations-label">{t('about.section4.sectionLabel')}</span>
                    <h2 className="locations-title">
                        {t('about.section4.titleStart')} {t('about.section4.titleHighlight') ? <span className="loc-highlight">{t('about.section4.titleHighlight')}</span> : null}
                    </h2>
                    <p className="locations-subtitle">
                        {t('about.section4.subtitle')}
                    </p>
                    <div className="locations-accent-line" />
                </div>

                {/* Office Cards */}
                <div className="offices-grid">
                    {offices.map((office, i) => (
                        <div
                            key={office.id}
                            className="office-card"
                            ref={el => cardsRef.current[i] = el}
                        >
                            {/* Card Header */}
                            <div className="card-top">
                                <div className="card-tag-row">
                                    <span className="office-flag">{office.flag}</span>
                                    <span className="office-tag">{office.tag}</span>
                                    <span className="office-status">
                                        <span className="status-pulse" />
                                        {office.status}
                                    </span>
                                </div>
                                <h3 className="office-name">{office.name}</h3>
                                <p className="office-country">{office.country} · {office.region}</p>
                            </div>

                            {/* Map Embed */}
                            <div className="map-wrapper">
                                <iframe
                                    title={`${office.name} Map`}
                                    className="office-map"
                                    src={office.mapSrc}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="map-overlay-corner map-corner-tl" />
                                <div className="map-overlay-corner map-corner-tr" />
                                <div className="map-overlay-corner map-corner-bl" />
                                <div className="map-overlay-corner map-corner-br" />
                            </div>

                            {/* Address Info */}
                            <div className="card-bottom">
                                <div className="address-row">
                                    <span className="material-symbols-outlined addr-icon">location_on</span>
                                    <p className="office-address">{office.address}</p>
                                </div>
                                <div className="coord-row">
                                    <span className="coord-label">{t('about.section4.coordLabel')}</span>
                                    <span className="coord-value">{office.coordinates}</span>
                                </div>
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(office.name + ', ' + office.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="directions-btn"
                                >
                                    <span>{t('about.section4.directions')}</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section4;
