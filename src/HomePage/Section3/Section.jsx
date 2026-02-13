import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './section.css';

gsap.registerPlugin(ScrollTrigger);

// --- Custom Helper: Split text into spans ---
const splitTextToSpans = (element) => {
    if (!element) return;
    const text = element.textContent;
    const chars = text.split('').map((char) => {
        // preserve spaces
        return char === ' ' ? '&nbsp;' : char;
    });

    element.innerHTML = '';
    chars.forEach((char) => {
        const span = document.createElement('div');
        span.classList.add('char');
        span.innerHTML = `<span>${char}</span>`;
        element.appendChild(span);
    });

    return element.querySelectorAll('.char span');
};

// --- Custom Helper: Horizontal Loop ---
function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });
    let length = items.length;
    let startX = items[0].offsetLeft;
    let times = [];
    let widths = [];
    let xPercents = [];
    let curIndex = 0;
    let pixelsPerSecond = (config.speed || 1) * 100;
    let snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);
    let totalWidth;
    let curX;
    let distanceToStart;
    let distanceToLoop;
    let item;
    let i;

    gsap.set(items, { // convert "x" to "xPercent" to make valid consistent widths.
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
            .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}


const Section = () => {
    const containerRef = useRef(null);
    const lenisRef = useRef(null);

    useLayoutEffect(() => {
        // Scope GSAP to this component
        const ctx = gsap.context(() => {

            // 1. Marquee Animation
            const marqueeItems = gsap.utils.toArray(".marquee h1");
            if (marqueeItems.length > 0) {
                horizontalLoop(marqueeItems, {
                    repeat: -1,
                    paddingRight: 30,
                });
            }

            // 2. Prepare Split Text for titles
            // Since we don't have SplitText plugin, we use our helper
            const titles = gsap.utils.toArray(".card-title h1");
            titles.forEach((title) => {
                splitTextToSpans(title);
            });

            // 3. Intro Card Animations
            const cards = gsap.utils.toArray(".card");
            const introCard = cards[0];
            if (!introCard) return;

            const cardImgWrapper = introCard.querySelector(".card-img");
            const cardImg = introCard.querySelector(".card-img img");
            // Initial execution setups
            gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "400px" });
            gsap.set(cardImg, { scale: 1.5 });

            // Helper functions for content reveal
            function animateContentIn(titleChars, description) {
                gsap.to(titleChars, { x: "0%", duration: 0.75, ease: "power4.out", overwrite: true });
                gsap.to(description, {
                    x: 0,
                    opacity: 1,
                    duration: 0.75,
                    delay: 0.1,
                    ease: "power4.out",
                    overwrite: true
                });
            }

            function animateContentOut(titleChars, description) {
                gsap.to(titleChars, {
                    x: "100%",
                    duration: 0.5,
                    ease: "power4.out",
                    overwrite: true
                });
                gsap.to(description, {
                    x: "40px",
                    opacity: 0,
                    duration: 0.5,
                    ease: "power4.out",
                    overwrite: true
                });
            }

            const marquee = introCard.querySelector(".card-marquee .marquee");
            // We need to re-select these AFTER splitTextToSpans ran
            const titleChars = introCard.querySelectorAll(".char span");
            const description = introCard.querySelector(".card-description");

            // Intro ScrollTrigger
            ScrollTrigger.create({
                trigger: introCard,
                start: "top top",
                end: "+=300vh", // Updated to match original logic 
                scrub: true, // IMPORTANT for continuous sync with scroll
                onUpdate: (self) => {
                    const progress = self.progress;
                    const imgScale = 0.5 + progress * 0.5;
                    const borderRadius = 400 - progress * 375;
                    const innerImgScale = 1.5 - progress * 0.5;

                    gsap.set(cardImgWrapper, {
                        scale: imgScale,
                        borderRadius: borderRadius + "px",
                    });
                    gsap.set(cardImg, { scale: innerImgScale });

                    // Marquee fade logic
                    // 0.5 -> 0.75 progress range corresponds to opacity 1 -> 0?
                    // Wait, original logic was based on imgScale logic
                    // imgScale goes from 0.5 to 1.0 as progress 0 to 1
                    // logic: if (imgScale >= 0.5 && imgScale <= 0.75) 

                    if (imgScale >= 0.5 && imgScale <= 0.75) {
                        // map 0.5->0.75 to 0->1 fadeProgress
                        const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5);
                        gsap.set(marquee, { opacity: 1 - fadeProgress });
                    } else if (imgScale < 0.5) {
                        gsap.set(marquee, { opacity: 1 });
                    } else if (imgScale > 0.75) {
                        gsap.set(marquee, { opacity: 0 });
                    }

                    // Content reveal
                    // Original used a flag contentRevealed. 
                    // We can check progress directly.
                    if (progress >= 0.95 && !introCard.contentRevealed) {
                        introCard.contentRevealed = true;
                        animateContentIn(titleChars, description);
                    }
                    if (progress < 0.95 && introCard.contentRevealed) {
                        introCard.contentRevealed = false;
                        animateContentOut(titleChars, description);
                    }
                },
            });

            // 4. Pin Choreography for all cards
            cards.forEach((card, index) => {
                const isLastCard = index === cards.length - 1;
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    end: isLastCard ? "+=100vh" : "top top",
                    // endTrigger logic:
                    endTrigger: isLastCard ? null : cards[cards.length - 1],
                    pin: true,
                    pinSpacing: false, // Original had pinSpacing: isLastCard, but standard stacking cards often use false for overlap or true if following flow. 
                    // The original code had: pinSpacing: isLastCard. Let's stick to it.
                    // Wait, if pinSpacing is false for earlier cards, they might overlap weirdly if not careful.
                    // Re-reading original: pinSpacing: isLastCard
                });
            });

            // 5. Card Stacking/Scale Effect (Entry of next card)
            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    // Logic: As the NEXT card comes in (trigger: cards[index+1]),
                    // we scale DOWN the current card's image wrapper.

                    // Original: trigger: cards[index+1], start: "top bottom", end: "top top"
                    ScrollTrigger.create({
                        trigger: cards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            // We are animating the CURRENT card (index)

                            // 1. Image Wrapper Scale/Fade
                            const currentCardWrapper = card.querySelector(".card-img"); // Wrapper of current card
                            if (currentCardWrapper) {
                                gsap.set(currentCardWrapper, {
                                    scale: 1 - progress * 0.25,
                                    opacity: 1 - progress, // fade out
                                });
                            }

                            // 2. Text Content Hide (Title & Description)
                            // Fade out quickly as the next card starts appearing (e.g., within first 40% of travel)
                            const textProgress = Math.min(progress * 2.5, 1);

                            // Select title chars (created by splitTextToSpans) and description
                            const titleChars = card.querySelectorAll(".card-title h1 .char span");
                            const description = card.querySelector(".card-description");

                            if (titleChars.length) {
                                gsap.set(titleChars, {
                                    opacity: 1 - textProgress,
                                    x: textProgress * 50, // slide out slightly to right
                                });
                            }
                            if (description) {
                                gsap.set(description, {
                                    opacity: 1 - textProgress,
                                    x: 40 + textProgress * 50, // slide out further (starts at 0 or 40?, assume 0 reveals to 0)
                                });
                            }
                        }
                    });
                }
            });

            // 6. Card Expansion Effect (Entry of current card)
            // Original: cards.forEach((card, index) => { if(index > 0) ... })
            cards.forEach((card, index) => {
                if (index > 0) {
                    const innerImg = card.querySelector(".card-img img");
                    const innerContainer = card.querySelector(".card-img");

                    ScrollTrigger.create({
                        trigger: card,
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            gsap.set(innerImg, { scale: 2 - progress }); // 2 -> 1
                            gsap.set(innerContainer, {
                                borderRadius: (150 - progress * 125) + "px" // 150 -> 25
                            });
                        }
                    });
                }
            });

            // 7. Text Reveal for specific cards (index > 0)
            cards.forEach((card, index) => {
                if (index === 0) return;
                const desc = card.querySelector(".card-description");
                // Re-select chars after split
                const chars = card.querySelectorAll(".char span");

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    // The original had onEnter and onLeaveBack. 
                    // Since we are pinning, 'start: top top' happens when it locks.
                    onEnter: () => animateContentIn(chars, desc),
                    onLeaveBack: () => animateContentOut(chars, desc),
                });
            });

            // Refresh ST
            ScrollTrigger.refresh();

        }, containerRef); // scope

        // Lenis Setup
        const lenis = new Lenis();
        lenisRef.current = lenis;
        lenis.on('scroll', ScrollTrigger.update);

        const ticker = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        return () => {
            ctx.revert();
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };
    }, []); // Run once on mount

    return (
        <div className="section3-container" ref={containerRef}>
            <section className="intro">
                <h1>we design space that dont just exist.</h1>
            </section>

            <section className="cards">
                {/* Card 1 (Intro Card with Marquee) */}
                <div className="card">
                    <div className="card-marquee">
                        <div className="marquee">
                            <h1>Design beyond boundaries</h1>
                            <h1>Built for tomorrow</h1>
                            <h1>Real impact</h1>
                            <h1>Digital visions</h1>
                            {/* Duplicate for seamless loop if needed, but horizontalLoop handles it usually if enough items. 
                         The original html had 4 h1s. horizontalLoop will duplicate/loop them. 
                     */}
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Curved Horizon</h1>
                            </div>
                            <div className="card-description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, id!</p>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src="/img1.jpeg" alt="Curved Horizon" onError={(e) => e.target.src = '/logo.jpeg'} />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div className="card-wrapper">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Modern Vision</h1>
                            </div>
                            <div className="card-description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, id!</p>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src="/img2.jpeg" alt="Modern Vision" onError={(e) => e.target.src = '/logo.jpeg'} />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <div className="card-wrapper">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Abstract Space</h1>
                            </div>
                            <div className="card-description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, id!</p>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src="/img3.jpeg" alt="Abstract Space" onError={(e) => e.target.src = '/logo.jpeg'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="outro">
                <h1>Architecture for the virtual age.</h1>
            </section>
        </div>
    );
};

export default Section;
