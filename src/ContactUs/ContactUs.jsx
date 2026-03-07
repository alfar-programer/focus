import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ContactUs.css';
import { useI18n } from '../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

// Custom pulsing div icon for each office marker
const makePulseIcon = (flag, name, city) => L.divIcon({
    className: '',
    iconAnchor: [16, 16],
    popupAnchor: [0, -24],
    html: `
        <div class="lf-pin">
            <div class="lf-ping"></div>
            <div class="lf-pulse"></div>
            <div class="lf-dot"></div>
        </div>
        <div class="lf-label">
            <span class="lf-flag">${flag}</span>
            <div>
                <p class="lf-name">${name}</p>
                <p class="lf-city">${city}</p>
            </div>
        </div>
    `
});

const ContactUs = () => {
    const { get, t } = useI18n();
    const OFFICES = get('contact.offices', []);
    const serviceOptions = get('contact.form.serviceOptions', []);
    const channels = get('contact.channelsSection.channels', []);

    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const channelCardsRef = useRef([]);
    const formPanelRef = useRef(null);
    const ctaContentRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        service: serviceOptions[0] || '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState('');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero content entrance
            if (heroContentRef.current) {
                gsap.to(heroContentRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.2,
                });
            }

            // Channel cards stagger-in on scroll
            if (channelCardsRef.current.length) {
                gsap.to(channelCardsRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: channelCardsRef.current[0],
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                });
            }

            // Form panel slide-in on scroll
            if (formPanelRef.current) {
                gsap.to(formPanelRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: formPanelRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                });
            }

            // CTA content reveal on scroll
            if (ctaContentRef.current) {
                gsap.to(ctaContentRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaContentRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                });
            }
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.message) {
            setFormError(t('contact.form.errors.required'));
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError(t('contact.form.errors.invalidEmail'));
            return;
        }

        setIsSubmitting(true);
        setFormError('');

        try {
            const templateParams = {
                name: formData.fullName,
                company: formData.company,
                email: formData.email,
                service: formData.service,
                message: formData.message
            };

            const response = await emailjs.send(
                'service_9q9dkdp',
                'template_tbsokyk',
                templateParams,
                'IjmsFPnXOGAMsZjQh'
            );

            if (response.status === 200) {
                setSubmitted(true);
            } else {
                setFormError(t('contact.form.errors.generic'));
            }
        } catch {
            setFormError(t('contact.form.errors.connection'));
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (!serviceOptions.length) return;
        setFormData((previous) => ({
            ...previous,
            service: serviceOptions.includes(previous.service) ? previous.service : serviceOptions[0]
        }));
    }, [serviceOptions]);

    return (
        <div ref={pageRef} className="contact-page">

            {/* ── HERO ── */}
            <section className="contact-hero">
                <div className="contact-hero-grid" />
                <div className="contact-hero-glow" />

                <div ref={heroContentRef} className="contact-hero-content">
                    <div className="contact-hero-badge">
                        <span className="contact-hero-badge-dot" />
                        {t('contact.hero.badge')}
                    </div>

                    <h1 className="contact-hero-title">
                        {t('contact.hero.titleLine')}&nbsp;<br />
                        <span className="contact-hero-title-gradient">{t('contact.hero.titleHighlight')}</span>
                    </h1>

                    <p className="contact-hero-subtitle">
                        {t('contact.hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* ── SPLIT: CHANNELS + FORM ── */}
            <section className="contact-split">

                {/* Left: Direct Access */}
                <div className="contact-channels">
                    <div className="contact-channels-header">
                        <h2 className="contact-channels-title" dangerouslySetInnerHTML={{ __html: t('contact.channelsSection.title') }} />
                        <p className="contact-channels-subtitle">
                            {t('contact.channelsSection.subtitle')}
                        </p>
                    </div>

                    <div className="contact-channel-cards">
                        {channels.map((ch, i) => (
                            <div
                                key={i}
                                className="contact-channel-card"
                                ref={(el) => { if (el) channelCardsRef.current[i] = el; }}
                            >
                                <div className="contact-channel-icon">{ch.icon}</div>
                                <div className="contact-channel-info">
                                    <span className="contact-channel-label">{ch.label}</span>
                                    <h3 className="contact-channel-value">{ch.value}</h3>
                                    <p className="contact-channel-note">{ch.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Form */}
                <div ref={formPanelRef} className="contact-form-panel">
                    <div className="contact-form-glow" />

                    <div className="contact-form-inner">
                        <div className="contact-form-header">
                            <h3>{t('contact.form.title')}</h3>
                            <p>{t('contact.form.subtitle')}</p>
                        </div>

                        {submitted ? (
                            <div className="contact-form-success">
                                <div className="contact-success-icon">✓</div>
                                <h4 className="contact-success-title">{t('contact.form.successTitle')}</h4>
                                <p className="contact-success-text">
                                    {t('contact.form.successText')}
                                </p>
                                <button
                                    className="contact-cta-btn-secondary"
                                    style={{ marginTop: '1rem' }}
                                    onClick={() => { setSubmitted(false); setFormData({ fullName: '', company: '', email: '', service: serviceOptions[0] || '', message: '' }); }}
                                >
                                    {t('contact.form.sendAnother')}
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {formError && (
                                    <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                                        {formError}
                                    </div>
                                )}
                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">{t('contact.form.labels.fullName')}</label>
                                        <input
                                            className="contact-form-input"
                                            type="text"
                                            name="fullName"
                                            placeholder={t('contact.form.placeholders.fullName')}
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">{t('contact.form.labels.company')}</label>
                                        <input
                                            className="contact-form-input"
                                            type="text"
                                            name="company"
                                            placeholder={t('contact.form.placeholders.company')}
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">{t('contact.form.labels.email')}</label>
                                        <input
                                            className="contact-form-input"
                                            type="email"
                                            name="email"
                                            placeholder={t('contact.form.placeholders.email')}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">{t('contact.form.labels.service')}</label>
                                        <div className="contact-select-wrapper">
                                            <select
                                                className="contact-form-select"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                {serviceOptions.map((option, index) => (
                                                    <option key={index}>{option}</option>
                                                ))}
                                            </select>
                                            <span className="contact-select-arrow">⌄</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label className="contact-form-label">{t('contact.form.labels.message')}</label>
                                    <textarea
                                        className="contact-form-textarea"
                                        name="message"
                                        placeholder={t('contact.form.placeholders.message')}
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="contact-form-submit" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                                    <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
                                    {!isSubmitting && <span className="contact-submit-arrow">→</span>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ── MAP ── */}
            <section className="contact-map">
                <MapContainer
                    className="contact-leaflet-map"
                    center={[28.2, 40.5]}
                    zoom={5}
                    scrollWheelZoom={false}
                    zoomControl={true}
                    attributionControl={false}
                >
                    {/* Dark OpenStreetMap tile layer */}
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://carto.com">CARTO</a>'
                    />

                    {/* Geo-locked markers — they move WITH the map */}
                    {OFFICES.map(office => (
                        <Marker
                            key={office.id}
                            position={office.position}
                            icon={makePulseIcon(office.flag, office.name, office.city)}
                        >
                            <Popup className="lf-popup">
                                <div className="lf-popup-inner">
                                    <p className="lf-popup-title">{office.flag} {office.name}</p>
                                    <p className="lf-popup-addr">{office.address}</p>
                                    <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" className="lf-popup-link">
                                        {t('contact.map.directions')}
                                    </a>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
                <div className="contact-map-gradient" style={{ pointerEvents: 'none' }} />
            </section>

            {/* ── CTA ── */}
            <section className="contact-cta">
                <div className="contact-cta-grid" />

                <div ref={ctaContentRef} className="contact-cta-content">
                    <h2 className="contact-cta-title">
                        {t('contact.cta.titleLine')}&nbsp;<br />
                        <span>{t('contact.cta.titleHighlight')}</span>
                    </h2>
                    <p className="contact-cta-text">
                        {t('contact.cta.description')}
                    </p>

                    <div className="contact-cta-buttons">
                        <button
                            className="contact-cta-btn-primary"
                            onClick={() => document.querySelector('.contact-form-input')?.focus()}
                        >
                            {t('contact.cta.primaryButton')}
                        </button>
                        <Link to="/services" className="contact-cta-btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {t('contact.cta.secondaryButton')}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;
