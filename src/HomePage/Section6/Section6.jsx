import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Section6.css';
import { useI18n } from '../../i18n/I18nProvider';

const Section6 = () => {
    const { get, t } = useI18n();
    const slidesData = get('home.section6.slides', []);
    const stories = get('home.section6.stories', []);
    const sectionRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(2);
    const [progress, setProgress] = useState(0);
    const progressIntervalRef = useRef(null);
    const SLIDE_DURATION = 8000;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section6-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = sectionRef.current.querySelectorAll('[data-animation]');
        elements.forEach(el => {
            el.classList.add('section6-hidden');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const startProgress = useCallback(() => {
        if (!slidesData.length) return;
        setProgress(0);
        const startTime = Date.now();
        
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }

        progressIntervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                setActiveSlide((prev) => (prev + 1) % (slidesData.length || 1));
            }
        }, 50);
    }, [slidesData.length]);

    useEffect(() => {
        if (!slidesData.length) return undefined;
        startProgress();
        return () => {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, [activeSlide, startProgress, slidesData.length]);

    const handleSlideClick = (index) => {
        setActiveSlide(index);
    };

    const currentSlide = slidesData[activeSlide] || slidesData[0];
    if (!currentSlide) return null;

    return (
        <section className="section6-container" ref={sectionRef}>
            <div className="section6-wrapper">
                {/* Our Approach Section with Slider */}
                <div className="section6-approach" data-animation>
                    <h2 className="section6-approach-title">{t('home.section6.approachTitle')}</h2>
                    
                    <div className="section6-slider-container">
                        {/* Single Progress Bar */}
                        <div className="section6-progress-wrapper">
                            <div className="section6-progress-bg">
                                <div 
                                    className="section6-progress-single-fill" 
                                    style={{ width: `${((activeSlide + progress / 100) / (slidesData.length || 1)) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Approach Items */}
                        <div className="section6-approach-items">
                            {slidesData.map((slide, index) => (
                                <div 
                                    key={slide.id}
                                    className={`section6-approach-item ${index === activeSlide ? 'active' : ''}`}
                                    onClick={() => handleSlideClick(index)}
                                >
                                    <span className="section6-number">{slide.number}</span>
                                    <p dangerouslySetInnerHTML={{ __html: slide.title.replace(' ', '<br/>') }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hero Slider Section - Content changes based on active slide */}
                <div className="section6-hero" data-animation>
                    <div className="section6-hero-image">
                        <div className="section6-image-wrapper">
                            {slidesData.map((slide, index) => (
                                <img 
                                    key={slide.id}
                                    src={slide.image}
                                    alt={slide.title}
                                    className={index === activeSlide ? 'active' : ''}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="section6-hero-content">
                        <h3 dangerouslySetInnerHTML={{ __html: currentSlide.headline }} />
                        <p>{currentSlide.description}</p>
                        <Link to="/about/our-story" className="section6-btn">
                            {t('home.section6.readMore')}
                            <span className="section6-btn-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Decorative Separator */}
                <div className="section6-separator">
                    <div className="section6-line"></div>
                    <div className="section6-decorative">
                        <svg viewBox="0 0 200 200" fill="none">
                            <circle cx="100" cy="100" r="80" stroke="#9EF3EE" strokeWidth="1" opacity="0.3"/>
                            <circle cx="100" cy="100" r="60" stroke="#9EF3EE" strokeWidth="1" opacity="0.2"/>
                            <circle cx="100" cy="100" r="40" stroke="#9EF3EE" strokeWidth="1" opacity="0.1"/>
                        </svg>
                    </div>
                </div>

                {/* Featured Stories Section */}
                <div className="section6-stories">
                    <div className="section6-stories-header" data-animation>
                        <h2 dangerouslySetInnerHTML={{ __html: t('home.section6.featuredStoriesTitle') }} />
                        <Link to="/about/who-we-are" className="section6-btn">
                            {t('home.section6.readMoreNews')}
                            <span className="section6-btn-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* News Card 1 */}
                    <div className="section6-news-card" data-animation>
                        <div className="section6-news-meta">
                            <p>{stories[0]?.date}</p>
                            <p>{stories[0]?.type}</p>
                        </div>
                        <h3>
                            <a href="#">{stories[0]?.title}</a>
                        </h3>
                        <div className="section6-news-image">
                            <img 
                                src={stories[0]?.image}
                                alt={stories[0]?.imageAlt || ''}
                            />
                            <div className="section6-news-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* News Card 2 */}
                    <div className="section6-news-card" data-animation>
                        <div className="section6-news-meta">
                            <p>{stories[1]?.date}</p>
                            <p>{stories[1]?.type}</p>
                        </div>
                        <h3>
                            <a href="#">{stories[1]?.title}</a>
                        </h3>
                        <div className="section6-news-image">
                            <img 
                                src={stories[1]?.image}
                                alt={stories[1]?.imageAlt || ''}
                            />
                            <div className="section6-news-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
