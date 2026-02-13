import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Section6.css';

const slidesData = [
    {
        id: 0,
        number: '01',
        title: 'Supporting people',
        headline: 'Supporting<br/>people',
        description: 'We invest in our people, fostering a culture of growth, collaboration, and excellence. Our team is our greatest asset in delivering exceptional results.',
        image: 'https://media.innovogroup.com/assets/img/sustainable.jpg'
    },
    {
        id: 1,
        number: '02',
        title: 'Embracing technology',
        headline: 'Embracing<br/>technology',
        description: 'Leveraging cutting-edge technology to streamline processes, enhance precision, and deliver projects that exceed expectations in the digital age.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    },
    {
        id: 2,
        number: '03',
        title: 'Fostering sustainability',
        headline: 'Fostering<br/>sustainability',
        description: 'Innovo works across the value chain to meet new demand and ensure it leaves a lasting, positive impact with every project it takes on.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    }
];

const Section6 = () => {
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
                setActiveSlide((prev) => (prev + 1) % slidesData.length);
            }
        }, 50);
    }, []);

    useEffect(() => {
        startProgress();
        return () => {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, [activeSlide, startProgress]);

    const handleSlideClick = (index) => {
        setActiveSlide(index);
    };

    const currentSlide = slidesData[activeSlide];

    return (
        <section className="section6-container" ref={sectionRef}>
            <div className="section6-wrapper">
                {/* Our Approach Section with Slider */}
                <div className="section6-approach" data-animation>
                    <h2 className="section6-approach-title">Our Approach</h2>
                    
                    <div className="section6-slider-container">
                        {/* Single Progress Bar */}
                        <div className="section6-progress-wrapper">
                            <div className="section6-progress-bg">
                                <div 
                                    className="section6-progress-single-fill" 
                                    style={{ width: `${((activeSlide + progress / 100) / slidesData.length) * 100}%` }}
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
                        <a href="#" className="section6-btn">
                            Read more
                            <span className="section6-btn-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>
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
                        <h2>Featured<br/>Stories</h2>
                        <a href="#" className="section6-btn">
                            Read more news
                            <span className="section6-btn-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>
                    </div>

                    {/* News Card 1 */}
                    <div className="section6-news-card" data-animation>
                        <div className="section6-news-meta">
                            <p>30-12-2025</p>
                            <p>Events</p>
                        </div>
                        <h3>
                            <a href="#">Innovo teams end the year with sports and team spirit</a>
                        </h3>
                        <div className="section6-news-image">
                            <img 
                                src="https://media.innovogroup.com/source/uploads/2025/12/teams-thumb_20251231_5ff01.jpg" 
                                alt="Innovo teams"
                            />
                            <div className="section6-news-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                        <a href="#" className="section6-news-link"></a>
                    </div>

                    {/* News Card 2 */}
                    <div className="section6-news-card" data-animation>
                        <div className="section6-news-meta">
                            <p>15-12-2025</p>
                            <p>Project</p>
                        </div>
                        <h3>
                            <a href="#">Innovo Build Egypt awarded Mivida Gardens Villas project</a>
                        </h3>
                        <div className="section6-news-image">
                            <img 
                                src="https://media.innovogroup.com/source/uploads/2025/12/ftr-nw_20251219_b0e58.jpg" 
                                alt="Project award"
                            />
                            <div className="section6-news-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                        <a href="#" className="section6-news-link"></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
