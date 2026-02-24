import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
    const pageRef = useRef(null);
    const heroContentRef = useRef(null);
    const channelCardsRef = useRef([]);
    const formPanelRef = useRef(null);
    const ctaContentRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        service: 'Robotics Engineering',
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
            setFormError('Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError('Please enter a valid email address.');
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
                setFormError('Something went wrong. Please try again later.');
            }
        } catch (err) {
            setFormError('Failed to send message. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const channels = [
        {
            icon: '📞',
            label: 'Voice Transmission',
            value: '+1 (888) 555-0199',
            note: 'Priority Line: Secured',
        },
        {
            icon: '✉️',
            label: 'Digital Correspondence',
            value: 'hello@focuse-tc.com',
            note: 'Response time: < 24h',
        },
        {
            icon: '🕐',
            label: 'Operational Hours',
            value: 'Mon–Fri / 0800–1800 EST',
            note: 'Weekend Support: Standby',
        },
    ];

    return (
        <div ref={pageRef} className="contact-page">

            {/* ── HERO ── */}
            <section className="contact-hero">
                <div className="contact-hero-grid" />
                <div className="contact-hero-glow" />

                <div ref={heroContentRef} className="contact-hero-content">
                    <div className="contact-hero-badge">
                        <span className="contact-hero-badge-dot" />
                        System Online
                    </div>

                    <h1 className="contact-hero-title">
                        Let's Build&nbsp;<br />
                        <span className="contact-hero-title-gradient">Something Intelligent</span>
                    </h1>

                    <p className="contact-hero-subtitle">
                        Engineering solutions for the next century. Establish a secure
                        connection with our tactical division below.
                    </p>
                </div>
            </section>

            {/* ── SPLIT: CHANNELS + FORM ── */}
            <section className="contact-split">

                {/* Left: Direct Access */}
                <div className="contact-channels">
                    <div className="contact-channels-header">
                        <h2 className="contact-channels-title">
                            Direct Access<br />
                            <span>Channels</span>
                        </h2>
                        <p className="contact-channels-subtitle">
                            Select your preferred communication protocol for immediate assistance.
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
                            <h3>Initiate Request</h3>
                            <p>Securely submit your mission parameters for analysis.</p>
                        </div>

                        {submitted ? (
                            <div className="contact-form-success">
                                <div className="contact-success-icon">✓</div>
                                <h4 className="contact-success-title">Transmission Received</h4>
                                <p className="contact-success-text">
                                    Your message has been securely transmitted. Our team will
                                    respond within 24 hours.
                                </p>
                                <button
                                    className="contact-cta-btn-secondary"
                                    style={{ marginTop: '1rem' }}
                                    onClick={() => { setSubmitted(false); setFormData({ fullName: '', company: '', email: '', service: 'Robotics Engineering', message: '' }); }}
                                >
                                    Send Another
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
                                        <label className="contact-form-label">Full Name</label>
                                        <input
                                            className="contact-form-input"
                                            type="text"
                                            name="fullName"
                                            placeholder="ex. John Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">Company</label>
                                        <input
                                            className="contact-form-input"
                                            type="text"
                                            name="company"
                                            placeholder="ex. Wayne Enterprises"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">Email Address</label>
                                        <input
                                            className="contact-form-input"
                                            type="email"
                                            name="email"
                                            placeholder="name@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <label className="contact-form-label">Service Interest</label>
                                        <div className="contact-select-wrapper">
                                            <select
                                                className="contact-form-select"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option>Robotics Engineering</option>
                                                <option>AI Integration</option>
                                                <option>Civil Infrastructure</option>
                                                <option>Data Security</option>
                                                <option>Trading & Contracting</option>
                                                <option>Other</option>
                                            </select>
                                            <span className="contact-select-arrow">⌄</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label className="contact-form-label">Mission Brief</label>
                                    <textarea
                                        className="contact-form-textarea"
                                        name="message"
                                        placeholder="Describe your project requirements..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="contact-form-submit" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                                    <span>{isSubmitting ? 'Transmitting...' : 'Transmit Data'}</span>
                                    {!isSubmitting && <span className="contact-submit-arrow">→</span>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ── MAP ── */}
            <section className="contact-map">
                <iframe
                    title="Google Maps Location"
                    className="contact-map-iframe"
                    src="https://maps.google.com/maps?q=8XQ6%2B9P3%D8%8C%20%D8%B3%D9%85%D8%A7%D8%AF%D9%88%D9%86%D8%8C%20%D9%85%D8%B1%D9%83%D8%B2%20%D8%A3%D8%B4%D9%85%D9%88%D9%86%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9%206037103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="contact-map-gradient" style={{ pointerEvents: 'none' }} />
                <div className="contact-map-tint" style={{ pointerEvents: 'none' }} />

                <div className="contact-map-overlay">
                    <div className="contact-map-content">
                        {/* Pulsing pin */}
                        <div className="contact-map-pin">
                            <div className="contact-map-ping" />
                            <div className="contact-map-pulse" />
                            <div className="contact-map-dot" />
                        </div>

                        <div className="contact-map-label">
                            <h3>Strategically Positioned</h3>
                            <p>8XQ6+9P3, سمادون، مركز أشمون، المنوفية</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="contact-cta">
                <div className="contact-cta-grid" />

                <div ref={ctaContentRef} className="contact-cta-content">
                    <h2 className="contact-cta-title">
                        Ready to Engineer&nbsp;<br />
                        <span>The Future?</span>
                    </h2>
                    <p className="contact-cta-text">
                        Our specialists are standing by to deploy resources for your
                        next major undertaking.
                    </p>

                    <div className="contact-cta-buttons">
                        <button
                            className="contact-cta-btn-primary"
                            onClick={() => document.querySelector('.contact-form-input')?.focus()}
                        >
                            Schedule Consultation
                        </button>
                        <Link to="/services" className="contact-cta-btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;
