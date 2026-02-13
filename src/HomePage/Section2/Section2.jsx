import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from 'lenis'; // Disable local Lenis to avoid conflict
import './Section2.css';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const containerRef = useRef(null);

    React.useLayoutEffect(() => {
        // --------------------------
        // Smooth scrolling (Lenis)
        // --------------------------
        // Disabled to avoid conflict with Section 3's Lenis instance
        // const lenis = new Lenis();
        // lenis.on("scroll", ScrollTrigger.update);

        // const ticker = (time) => lenis.raf(time * 1000);
        // gsap.ticker.add(ticker);
        // gsap.ticker.lagSmoothing(0);

        // --------------------------
        // GSAP Context & Animations
        // --------------------------
        const ctx = gsap.context(() => {
            /* --------------------------
               DOM refs & state via selectors
               -------------------------- */
            // Scoped selectors
            const scopedCardContainer = containerRef.current.querySelector(".section2-card-container");
            const scopedStickyHeader = containerRef.current.querySelector(".section2-sticky-header h1");
            const scopedCards = containerRef.current.querySelectorAll(".section2-card");

            let isGapAnimationCompleted = false;
            let isFlipAnimationCompleted = false;

            /* --------------------------
               Animation timelines
               -------------------------- */
            // gap timeline
            const gapTl = gsap.timeline({ paused: true });
            gapTl
                .to(scopedCardContainer, { gap: 30, duration: 1, ease: "power3.out" }, 0)
                .to("#section2-card-1", { x: -30, duration: 1, ease: "power3.out" }, 0)
                .to("#section2-card-3", { x: 30, duration: 1, ease: "power3.out" }, 0)
                .to(scopedCards, { borderRadius: "20px", duration: 1, ease: "power3.out" }, 0);

            // flip timeline
            const flipTl = gsap.timeline({ paused: true });
            flipTl
                .to(
                    ".section2-card", // scoped by context
                    {
                        rotationY: 180,
                        duration: 1,
                        ease: "power3.inOut",
                        stagger: 0.1,
                        transformOrigin: "center center"
                    },
                    0
                )
                .to(
                    ["#section2-card-1", "#section2-card-3"],
                    {
                        y: 30,
                        rotationZ: (i) => (i === 0 ? -15 : 15),
                        duration: 1,
                        ease: "power3.inOut"
                    },
                    0
                );

            /* --------------------------
               Helper - Functions
               -------------------------- */
            function setDefaults() {
                if (!containerRef.current) return;
                const elements = containerRef.current.querySelectorAll(".section2-card, .section2-card-container, .section2-sticky-header h1");
                elements.forEach((el) => {
                    if (el && el.style) el.style.cssText = "";
                });

                gapTl.pause(0);
                flipTl.pause(0);
                isGapAnimationCompleted = false;
                isFlipAnimationCompleted = false;
            }

            function updateHeader(progress) {
                if (progress >= 0.1 && progress <= 0.35) {
                    const headerProgress = gsap.utils.mapRange(0.1, 0.35, 0, 1, progress);
                    const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
                    const opacityValue = gsap.utils.mapRange(0, 1, 0, 1, headerProgress);
                    gsap.set(scopedStickyHeader, { y: yValue, opacity: opacityValue });
                } else if (progress < 0.1) {
                    gsap.set(scopedStickyHeader, { y: 40, opacity: 0 });
                } else {
                    gsap.set(scopedStickyHeader, { y: 0, opacity: 1 });
                }
            }

            function updateCardWidth(progress) {
                if (progress <= 0.35) {
                    const widthPercentage = gsap.utils.mapRange(0, 0.35, 75, 60, progress);
                    gsap.set(scopedCardContainer, { width: `${widthPercentage}%` });
                } else {
                    gsap.set(scopedCardContainer, { width: "60%" });
                }
            }

            function handleGapAnimation(progress) {
                if (progress >= 0.45 && !isGapAnimationCompleted) {
                    gapTl.play();
                    isGapAnimationCompleted = true;
                } else if (progress < 0.45 && isGapAnimationCompleted) {
                    gapTl.reverse();
                    isGapAnimationCompleted = false;
                }
            }

            function handleFlipAnimation(progress) {
                if (progress >= 0.7 && !isFlipAnimationCompleted) {
                    flipTl.play();
                    isFlipAnimationCompleted = true;
                } else if (progress < 0.7 && isFlipAnimationCompleted) {
                    flipTl.reverse();
                    isFlipAnimationCompleted = false;
                }
            }

            /* --------------------------
               Main - Init
               -------------------------- */

            setDefaults();

            const mm = gsap.matchMedia();

            // Mobile
            mm.add("(max-width: 999px)", () => {
                setDefaults();
                return () => { };
            });

            // Desktop
            mm.add("(min-width: 1000px)", () => {
                ScrollTrigger.create({
                    trigger: ".section2-sticky",
                    start: "top top",
                    end: `+=${window.innerHeight * 4}px`, // 400vh scroll distance for animation
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    // markers: true, // debug enabled to check start/end
                    onUpdate(self) {
                        const progress = self.progress;
                        updateHeader(progress);
                        updateCardWidth(progress);
                        handleGapAnimation(progress);
                        handleFlipAnimation(progress);
                    }
                });
            });

        }, containerRef); // Scope to container

        // Force refresh to ensure pin spacing is calculated correctly
        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
            // lenis.destroy();
            // gsap.ticker.remove(ticker);
        };
    }, []);

    return (
        <div className="section2-container" ref={containerRef}>
            {/* Removed intro section per request */}

            <div className="section2-sticky">
                <div className="section2-sticky-header">
                    <h1>Three pillars with one purpose</h1>
                </div>

                <div className="section2-card-container">
                    <div className="section2-card" id="section2-card-1">
                        <div className="section2-card-front">
                            <img src="https://i.ibb.co/4wShfg0B/image-part-001.jpg" alt="image part 001" border="0" />
                        </div>
                        <div className="section2-card-back">
                            <span>01</span>
                            <p>Interactive Web Experiences</p>
                        </div>
                    </div>

                    <div className="section2-card" id="section2-card-2">
                        <div className="section2-card-front">
                            <img src="https://i.ibb.co/Y4MSmLXB/image-part-002.jpg" alt="image part 002" border="0" />
                        </div>
                        <div className="section2-card-back">
                            <span>02</span>
                            <p>Thoughtful Design Language</p>
                        </div>
                    </div>

                    <div className="section2-card" id="section2-card-3">
                        <div className="section2-card-front">
                            <img src="https://i.ibb.co/NkrBdsq/image-part-003.jpg" alt="image part 003" border="0" />
                        </div>
                        <div className="section2-card-back">
                            <span>03</span>
                            <p>Visual Design Systems</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Removed outro section per request */}
        </div>
    );
};

export default Section2;
