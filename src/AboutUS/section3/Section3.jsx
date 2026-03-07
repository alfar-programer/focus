import React, { useRef, useState, useEffect } from 'react';
import './Section3.css';
import { useI18n } from '../../i18n/I18nProvider';

const Section3 = () => {
    const { get, t, isRTL } = useI18n();
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const values = get('about.section3.values', []);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || !values.length) return;

        const updateActiveIndex = () => {
            const slides = slider.querySelectorAll('.value-slide');
            if (!slides.length) return;

            const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
            let closestIndex = 0;
            let minDistance = Number.POSITIVE_INFINITY;

            slides.forEach((slide, index) => {
                const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
                const distance = Math.abs(slideCenter - sliderCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex((currentIndex) => (
                currentIndex === closestIndex ? currentIndex : closestIndex
            ));
        };

        updateActiveIndex();
        slider.addEventListener('scroll', updateActiveIndex, { passive: true });
        window.addEventListener('resize', updateActiveIndex);

        return () => {
            slider.removeEventListener('scroll', updateActiveIndex);
            window.removeEventListener('resize', updateActiveIndex);
        };
    }, [values.length]);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
        sliderRef.current.style.cursor = 'grabbing';
        sliderRef.current.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (sliderRef.current) {
            sliderRef.current.style.cursor = 'grab';
            sliderRef.current.style.userSelect = '';
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (sliderRef.current) {
            sliderRef.current.style.cursor = 'grab';
            sliderRef.current.style.userSelect = '';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollToIndex = (targetIndex) => {
        const slider = sliderRef.current;
        if (!slider || !values.length) return;

        const slides = slider.querySelectorAll('.value-slide');
        if (!slides.length) return;

        const nextIndex = Math.max(0, Math.min(targetIndex, slides.length - 1));
        slider.scrollTo({
            left: slides[nextIndex].offsetLeft,
            behavior: 'smooth'
        });
        setActiveIndex(nextIndex);
    };

    const handlePrev = () => scrollToIndex(activeIndex - 1);
    const handleNext = () => scrollToIndex(activeIndex + 1);

    const progressPercentage = values.length ? ((activeIndex + 1) / values.length) * 100 : 0;
    const prevIcon = isRTL ? 'east' : 'west';
    const nextIcon = isRTL ? 'west' : 'east';
    if (!values.length) return null;

    return (
        <section className={`values-section${isRTL ? ' values-section--rtl' : ''}`}>
            <div className="grid-overlay"></div>

            <div className="values-header">
                <span className="section-label">{t('about.section3.sectionLabel')}</span>
                <h2 className="values-title">
                    {t('about.section3.titleStart')} <br /><span className="highlight">{t('about.section3.titleHighlight')}</span>
                </h2>
                <div className="accent-line"></div>
            </div>

            <div className="slider-wrapper">
                <div 
                    className="slider-container no-scrollbar" 
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: 'grab', direction: 'ltr' }}
                    dir="ltr"
                >
                    {values.map((val) => (
                        <div key={val.id} className={`value-slide snap-center ${val.class}`}>
                            <div className="slide-inner" dir={isRTL ? 'rtl' : 'ltr'}>
                                <div className="bg-number">{val.id}</div>

                                <div className="slide-content-top">
                                    <span className="material-symbols-outlined slide-icon">{val.icon}</span>
                                    <h3 className="slide-title">{val.title}</h3>
                                </div>

                                <div className="slide-content-bottom">
                                    <p className="slide-desc">{val.desc}</p>
                                    <div className="slide-action">
                                        <span className="action-text">{val.tag}</span>
                                        <span className="material-symbols-outlined action-arrow">trending_flat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="slider-nav-area">
                <div className="nav-controls">
                    <div className="nav-buttons">
                        <button className="nav-btn" onClick={handlePrev} disabled={activeIndex === 0}>
                            <span className="material-symbols-outlined">{prevIcon}</span>
                        </button>
                        <button className="nav-btn" onClick={handleNext} disabled={activeIndex === values.length - 1}>
                            <span className="material-symbols-outlined">{nextIcon}</span>
                        </button>
                    </div>
                    <div className="nav-info">
                        <span className="nav-label">{t('about.section3.navLabel')}</span>
                        <span className="nav-helper">{t('about.section3.slideLabel')} {activeIndex + 1} / {values.length}</span>
                    </div>
                </div>

                <div className="progress-container">
                    <div className="progress-labels">
                        <span>{t('about.section3.progressStart')}</span>
                        <span className="current-step">0{activeIndex + 1} / 0{values.length}</span>
                        <span>{t('about.section3.progressEnd')}</span>
                    </div>
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                        <div className="progress-glow" style={{ left: `${progressPercentage}%` }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
