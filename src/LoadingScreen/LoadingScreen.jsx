import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({ progress, isLoading }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const ring1Ref = useRef(null);
    const ring2Ref = useRef(null);
    const ring3Ref = useRef(null);
    const progressBarRef = useRef(null);
    const tlRef = useRef(null);

    /* ── Entry animation ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            tlRef.current = gsap.timeline();

            // Rings scale in with stagger
            tlRef.current
                .from([ring3Ref.current, ring2Ref.current, ring1Ref.current], {
                    scale: 0,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'elastic.out(1, 0.6)',
                    transformOrigin: 'center center',
                })
                // Logo pops in
                .from(logoRef.current, {
                    scale: 0.3,
                    opacity: 0,
                    filter: 'blur(20px)',
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                }, '-=0.4')
                // Logo glows
                .to(logoRef.current, {
                    filter: 'drop-shadow(0 0 24px #06B6D4) drop-shadow(0 0 60px rgba(6,182,212,0.3))',
                    duration: 0.6,
                    ease: 'power2.out',
                });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    /* ── Progress bar ── */
    useEffect(() => {
        if (progressBarRef.current) {
            gsap.to(progressBarRef.current, {
                width: `${progress}%`,
                duration: 0.4,
                ease: 'power1.out',
            });
        }
    }, [progress]);

    /* ── Exit animation ── */
    useEffect(() => {
        if (!isLoading && containerRef.current) {
            gsap.to(containerRef.current, {
                opacity: 0,
                scale: 1.04,
                duration: 0.7,
                ease: 'power2.inOut',
                onComplete: () => {
                    if (containerRef.current) {
                        containerRef.current.style.display = 'none';
                    }
                },
            });
        }
    }, [isLoading]);

    return (
        <div ref={containerRef} className="ls-container">

            {/* Ambient background blobs */}
            <div className="ls-blob ls-blob--tl" />
            <div className="ls-blob ls-blob--br" />

            {/* Grid overlay */}
            <div className="ls-grid" />

            {/* ── Center stage ── */}
            <div className="ls-stage">

                {/* Outermost slow-rotating dashed ring */}
                <div ref={ring3Ref} className="ls-ring ls-ring--3">
                    <div className="ls-ring-dot" style={{ '--angle': '30deg' }} />
                    <div className="ls-ring-dot" style={{ '--angle': '150deg' }} />
                    <div className="ls-ring-dot" style={{ '--angle': '270deg' }} />
                </div>

                {/* Middle pulsing ring */}
                <div ref={ring2Ref} className="ls-ring ls-ring--2" />

                {/* Inner glow ring */}
                <div ref={ring1Ref} className="ls-ring ls-ring--1" />

                {/* Company Hexagonal Logo */}
                <img
                    ref={logoRef}
                    src="/logonobackgroundWhite.svg"
                    alt="Focus"
                    className="ls-logo"
                />
            </div>

            {/* ── Company name ── */}
            <div className="ls-brand">
                <span className="ls-brand-name">FOCUS</span>
                <span className="ls-brand-sub">Trading &amp; Contracting</span>
            </div>

            {/* ── Progress bar ── */}
            <div className="ls-progress">
                <div className="ls-progress-track">
                    <div ref={progressBarRef} className="ls-progress-fill" />
                </div>
                <div className="ls-progress-labels">
                    <span className="ls-progress-label">Initializing</span>
                    <span className="ls-progress-pct">{Math.floor(progress)}%</span>
                </div>
            </div>

            {/* ── Corner decorations ── */}
            <div className="ls-corner ls-corner--tl" />
            <div className="ls-corner ls-corner--tr" />
            <div className="ls-corner ls-corner--bl" />
            <div className="ls-corner ls-corner--br" />
        </div>
    );
};

export default LoadingScreen;
