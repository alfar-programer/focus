import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const location = useLocation();
    const navRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const themeToggleRef = useRef(null);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        const appContainer = document.querySelector('.app-container');

        if (appContainer) {
            appContainer.setAttribute('data-theme', newTheme);
        }

        setIsDarkMode(!isDarkMode);

        // Animate the toggle button
        if (themeToggleRef.current) {
            gsap.fromTo(themeToggleRef.current,
                { rotation: isDarkMode ? 0 : 180, scale: 0.8 },
                { rotation: isDarkMode ? 180 : 360, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
            );
        }
    };

    // Initialize theme on mount
    useEffect(() => {
        const appContainer = document.querySelector('.app-container');
        const currentTheme = appContainer?.getAttribute('data-theme') || 'light';
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    useEffect(() => {
        // Initial animation when page loads
        const nav = navRef.current;
        gsap.set(nav, { y: -100, opacity: 0 });

        gsap.to(nav, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3
        });

        // Set initial visibility based on route
        if (location.pathname !== '/') {
            setIsVisible(true);
        } else {
            setIsVisible(window.scrollY > 300);
        }

        // Show/hide on scroll
        let lastScrollY = window.scrollY;

        const trigger = ScrollTrigger.create({
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
                const scrollY = self.scroll();
                const velocity = scrollY - lastScrollY;

                if (location.pathname !== '/') {
                    setIsVisible(true);
                } else {
                    // Show navbar after scrolling past hero or when scrolling up
                    if (scrollY > 300 || velocity < -5) {
                        setIsVisible(true);
                    } else if (scrollY < 100) {
                        setIsVisible(false);
                    }
                }

                lastScrollY = scrollY;
            }
        });

        return () => {
            trigger.kill();
        };
    }, [location.pathname]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        gsap.to(nav, {
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    }, [isVisible]);

    return (
        <nav ref={navRef} className="navbar-container">
            {/* Architectural Grid Background */}
            <div className="navbar-grid" />

            {/* CAD Line Border */}
            <div className="navbar-cad-line" />

            <div className="navbar-content">
                {/* Left: Logotype */}
                <div className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <img src="/logonobackgroundWhite.png" alt="Focus Trading & Contracting" className="navbar-logo-img" />
                    </div>

                </div>

                {/* Center: Nav Links */}
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                        Home
                        <span className="navbar-link-underline" />
                    </Link>
                    <Link to="/services" className="navbar-link">
                        Services
                        <span className="navbar-link-underline" />
                    </Link>
                    <Link to="/about" className="navbar-link">
                        About
                        <span className="navbar-link-underline" />
                    </Link>
                    <a href="#" className="navbar-link">
                        Projects
                        <span className="navbar-link-underline" />
                    </a>
                    <a href="#" className="navbar-link">
                        Contact Us
                        <span className="navbar-link-underline" />
                    </a>
                </div>

                {/* Right: Social Media Icons + Theme Toggle */}
                <div className="navbar-social">
                    {/* Theme Toggle Button */}
                    <button
                        ref={themeToggleRef}
                        onClick={toggleTheme}
                        className="navbar-theme-toggle"
                        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                        <div className="theme-toggle-track">
                            <div className="theme-toggle-thumb">
                                {isDarkMode ? (
                                    <svg className="theme-icon moon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="theme-icon sun" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.591a.75.75 0 101.06 1.06l1.591-1.591zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.591-1.591a.75.75 0 10-1.06 1.06l1.591 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.591a.75.75 0 001.06 1.06l1.591-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06L6.166 5.106a.75.75 0 00-1.06 1.06l1.591 1.591z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </button>

                    <a href="https://www.linkedin.com/company/focus-for-trading-contracting" target="_blank" rel="noopener noreferrer" className="navbar-social-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 256 256" fill="currentColor">
                            <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/FOCUS.T.C.group/" className="navbar-social-link" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a href="#" className="navbar-social-link" aria-label="Twitter">
                        <svg viewBox="0 0 256 209" fill="currentColor">
                            <path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
