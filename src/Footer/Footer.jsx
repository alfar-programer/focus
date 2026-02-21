import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Check if footer is already visible on mount
            const checkInitialVisibility = () => {
                const footerRect = footerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                // If footer is visible or page is too short, show content immediately
                if (footerRect.top < windowHeight * 0.9 || documentHeight <= windowHeight * 1.5) {
                    const cadGrid = footerRef.current.querySelector('.cad-grid');
                    const metadataItems = footerRef.current.querySelectorAll('.footer-metadata-item');
                    const navGroups = footerRef.current.querySelectorAll('.footer-nav-group');
                    const blueprintStamp = footerRef.current.querySelector('.footer-stamp');
                    const techLines = footerRef.current.querySelectorAll('.footer-tech-line');

                    gsap.set(cadGrid, { opacity: 0.4 });
                    gsap.set(metadataItems, { y: 0, opacity: 1 });
                    gsap.set(navGroups, { y: 0, opacity: 1 });
                    gsap.set(blueprintStamp, { scale: 1, opacity: 1 });
                    gsap.set(techLines, { scaleX: 1, scaleY: 1 });

                    return true; // Content is visible
                }
                return false; // Content should be hidden initially
            };

            const isInitiallyVisible = checkInitialVisibility();

            // Footer reveal animation
            const cadGrid = footerRef.current.querySelector('.cad-grid');
            const metadataItems = footerRef.current.querySelectorAll('.footer-metadata-item');
            const navGroups = footerRef.current.querySelectorAll('.footer-nav-group');
            const blueprintStamp = footerRef.current.querySelector('.footer-stamp');

            // Initial states - only set if not already visible
            if (!isInitiallyVisible) {
                gsap.set(cadGrid, { opacity: 0 });
                gsap.set(metadataItems, { y: 40, opacity: 0 });
                gsap.set(navGroups, { y: 50, opacity: 0 });
                gsap.set(blueprintStamp, { scale: 0.8, opacity: 0 });
            }

            // Main reveal timeline - only if not initially visible
            if (!isInitiallyVisible) {
                const revealTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 90%',
                        end: 'top 20%',
                        toggleActions: 'play none none reverse',
                        scrub: 1
                    }
                });

                revealTl
                    .to(cadGrid, { opacity: 0.4, duration: 1 }, 0)
                    .to(metadataItems, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.3)
                    .to(navGroups, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.5)
                    .to(blueprintStamp, { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.7);

                // Cinematic lines animation
                const techLines = footerRef.current.querySelectorAll('.footer-tech-line');
                gsap.fromTo(techLines,
                    { scaleX: 0, scaleY: 0 },
                    {
                        scaleX: 1,
                        scaleY: 1,
                        duration: 1.5,
                        stagger: 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }

        }, footerRef);

        return () => ctx.revert();
    }, [location]);

    return (
        <footer ref={footerRef} className="footer-container">
            {/* CAD Background Overlay */}
            <div className="cad-grid" />

            {/* Crosshair Elements */}
            <div className="footer-crosshair footer-crosshair-tl" />
            <div className="footer-crosshair footer-crosshair-tr" />
            <div className="footer-crosshair footer-crosshair-bl" />
            <div className="footer-crosshair footer-crosshair-br" />

            {/* Technical Metadata Row */}
            <div className="footer-metadata">
                <div className="footer-metadata-item">
                    <span className="footer-metadata-label">Coordinates</span>
                    <span className="footer-metadata-value">25.2854° N, 51.5310° E</span>
                </div>
                <div className="footer-metadata-item footer-metadata-border">
                    <span className="footer-metadata-label">Local Time</span>
                    <span className="footer-metadata-value">UTC+3 · DOHA, QA</span>
                </div>
                <div className="footer-metadata-item">
                    <span className="footer-metadata-label">Status</span>
                    <span className="footer-metadata-value">EGYPT // KSA</span>
                </div>
            </div>

            {/* Navigation Grid (Monograph Style) */}
            <div className="footer-nav-section">
                <div className="footer-nav-grid">
                    {/* Directory */}
                    <div className="footer-nav-group">
                        <h4 className="footer-nav-title">Directory</h4>
                        <nav className="footer-nav-links">
                            <Link to="/" className="footer-nav-link">Home</Link>
                            <Link to="/services" className="footer-nav-link">Services</Link>
                            <Link to="/about" className="footer-nav-link">About</Link>
                            <a href="#" className="footer-nav-link">Projects</a>
                            <a href="#" className="footer-nav-link">Contact Us</a>
                        </nav>
                    </div>
                    {/* Connection */}
                    <div className="footer-nav-group">
                        <h4 className="footer-nav-title">Connection</h4>
                        <nav className="footer-nav-links">
                            <a href="https://www.linkedin.com/company/focus-for-trading-contracting" target="_blank" rel="noopener noreferrer" className="footer-nav-link">LinkedIn</a>
                            <a href="https://www.facebook.com/FOCUS.T.C.group/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Facebook</a>
                            <a href="https://www.instagram.com/focus.trading.contracting/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Instagram</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Twitter</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Email</a>
                        </nav>
                    </div>
                    {/* Compliance */}
                    
                </div>

                {/* Blueprint Stamp */}
                <div className="footer-stamp">
                    <div className="footer-stamp-box">
                        <p className="footer-stamp-text">
                            ISSUED FOR DIGITAL REVIEW<br />
                            REF NO: FT-2024-AC<br />
                            <span className="footer-stamp-highlight">FOCUS TRADING & CONTRACTING</span>
                        </p>
                    </div>
                    <p className="footer-copyright">© 2024 Focus Trading & Contracting. All Rights Reserved.</p>
                </div>
            </div>

            {/* Massive Background Branding (Cinematic Canvas) */}
            <div className="footer-bg-branding">
                <h1 className="footer-bg-text">FOCUS</h1>
            </div>

            {/* Decorative Technical Lines */}
            <div className="footer-tech-line footer-tech-line-h" />
            <div className="footer-tech-line footer-tech-line-left" />
            <div className="footer-tech-line footer-tech-line-right" />
        </footer>
    );
};

export default Footer;
