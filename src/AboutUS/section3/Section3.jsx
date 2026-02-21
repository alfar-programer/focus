import React, { useRef, useState, useEffect } from 'react';
import './Section3.css';

const Section3 = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const values = [
        {
            id: '01',
            title: 'Engineering Precision',
            desc: 'Focusing on detail-oriented infrastructure and technical mastery. We believe that every millimeter counts in the pursuit of perfection.',
            icon: 'precision_manufacturing',
            tag: 'Explore Depth',
            class: 'precision-slide'
        },
        {
            id: '02',
            title: 'Industrial Innovation',
            desc: 'Showcasing cutting-edge technology in industrial contracting. Leveraging BIM and AI-driven site management.',
            icon: 'memory',
            tag: 'View Tech Stack',
            class: 'innovation-slide'
        },
        {
            id: '03',
            title: 'Unwavering Integrity',
            desc: 'Emphasizing trust and safety in large-scale engineering projects. Our reputation is built on the solid foundation of our word.',
            icon: 'verified_user',
            tag: 'Verified Status',
            class: 'integrity-slide'
        },
        {
            id: '04',
            title: 'Sustainable Infrastructure',
            desc: '"Building today with tomorrow\'s environment in mind. We integrate green energy and recycled materials into every workflow."',
            icon: 'eco',
            tag: 'Sustainability',
            class: 'sustainable-slide'
        },
        {
            id: '05',
            title: 'Collaborative Excellence',
            desc: 'Our partnership-driven approach ensures that stakeholders, engineers, and clients move together as one cohesive unit.',
            icon: 'groups',
            tag: 'Team Success',
            class: 'excellence-slide'
        }
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const itemWidth = slider.scrollWidth / values.length;
            const index = Math.round(scrollLeft / itemWidth);
            if (index !== activeIndex && index >= 0 && index < values.length) {
                setActiveIndex(index);
            }
        };

        slider.addEventListener('scroll', handleScroll);
        return () => slider.removeEventListener('scroll', handleScroll);
    }, [activeIndex, values.length]);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const itemWidth = sliderRef.current.scrollWidth / values.length;
            sliderRef.current.scrollBy({
                left: direction === 'right' ? itemWidth : -itemWidth,
                behavior: 'smooth'
            });
        }
    };

    const progressPercentage = ((activeIndex + 1) / values.length) * 100;

    return (
        <section className="values-section">
            <div className="grid-overlay"></div>

            <div className="values-header">
                <span className="section-label">Section 04</span>
                <h2 className="values-title">
                    OUR CORE <br /><span className="highlight">VALUES.</span>
                </h2>
                <div className="accent-line"></div>
            </div>

            <div className="slider-wrapper">
                <div className="slider-container no-scrollbar" ref={sliderRef}>
                    {values.map((val) => (
                        <div key={val.id} className={`value-slide snap-center ${val.class}`}>
                            <div className="slide-inner">
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
                        <button className="nav-btn" onClick={() => scroll('left')}>
                            <span className="material-symbols-outlined">west</span>
                        </button>
                        <button className="nav-btn" onClick={() => scroll('right')}>
                            <span className="material-symbols-outlined">east</span>
                        </button>
                    </div>
                    <div className="nav-info">
                        <span className="nav-label">Navigate</span>
                        <span className="nav-helper">Slide {activeIndex + 1} of {values.length}</span>
                    </div>
                </div>

                <div className="progress-container">
                    <div className="progress-labels">
                        <span>Initiation</span>
                        <span className="current-step">0{activeIndex + 1} / 0{values.length}</span>
                        <span>Completion</span>
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
