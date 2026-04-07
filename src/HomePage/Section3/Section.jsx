import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './section.css';
import { useI18n } from '../../i18n/I18nProvider';

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
        const span = document.createElement('span');
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
    const { get, t } = useI18n();
    const containerRef = useRef(null);
    const marqueeItems = get('home.section3.marquee', []);
    const cardsContent = get('home.section3.cards', []);

    useLayoutEffect(() => {
        // Scope GSAP to this component
        const ctx = gsap.context(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // 1. Marquee Animation
            const marqueeItems = gsap.utils.toArray(".marquee h1");
            if (!prefersReducedMotion && marqueeItems.length > 0) {
                horizontalLoop(marqueeItems, {
                    repeat: -1,
                    paddingRight: 30,
                    speed: 0.5,
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
            const allDescriptions = gsap.utils.toArray(".card-description");
            gsap.set(allDescriptions, { x: 28, autoAlpha: 0 });

            // Initial execution setups
            gsap.set(cardImgWrapper, { scale: 0.7, borderRadius: "140px" });
            gsap.set(cardImg, { scale: 1.25, yPercent: 5 });

            if (prefersReducedMotion) {
                gsap.set(".card-title h1 .char span", { x: "0%" });
                gsap.set(allDescriptions, { x: 0, autoAlpha: 1 });
                gsap.set(".card-img", { scale: 1, borderRadius: "28px" });
                gsap.set(".card-img img", { scale: 1.03, yPercent: 0 });
                gsap.set(".card-marquee .marquee", { autoAlpha: 0 });
                return;
            }

            // Helper functions for content reveal
            function animateContentIn(titleChars, description) {
                gsap.to(titleChars, { x: "0%", duration: 0.7, ease: "power3.out", overwrite: true });
                gsap.to(description, {
                    x: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    delay: 0.08,
                    ease: "power3.out",
                    overwrite: true
                });
            }

            function animateContentOut(titleChars, description) {
                gsap.to(titleChars, {
                    x: "100%",
                    duration: 0.45,
                    ease: "power3.out",
                    overwrite: true
                });
                gsap.to(description, {
                    x: 30,
                    autoAlpha: 0,
                    duration: 0.45,
                    ease: "power3.out",
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
                    const imgScale = 0.7 + progress * 0.3;
                    const borderRadius = 140 - progress * 108;
                    const innerImgScale = 1.18 - progress * 0.15;
                    const innerY = 5 - progress * 5;

                    gsap.set(cardImgWrapper, {
                        scale: imgScale,
                        borderRadius: borderRadius + "px",
                    });
                    gsap.set(cardImg, { scale: innerImgScale, yPercent: innerY });

                    // Marquee fade logic
                    if (progress <= 0.65) {
                        const fadeProgress = gsap.utils.mapRange(0.2, 0.65, 1, 0, progress);
                        gsap.set(marquee, { autoAlpha: gsap.utils.clamp(0, 1, fadeProgress) });
                    } else {
                        gsap.set(marquee, { autoAlpha: 0 });
                    }

                    // Content reveal
                    if (progress >= 0.88 && !introCard.contentRevealed) {
                        introCard.contentRevealed = true;
                        animateContentIn(titleChars, description);
                    }
                    if (progress < 0.88 && introCard.contentRevealed) {
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
                    end: isLastCard ? "+=80vh" : "top top", // Optimized: 80vh instead of 100vh
                    endTrigger: isLastCard ? null : cards[cards.length - 1],
                    pin: true,
                    pinSpacing: isLastCard,
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
                                    scale: 1 - progress * 0.08,
                                    yPercent: -progress * 4,
                                    opacity: 1 - progress * 0.35,
                                });
                            }

                            // 2. Text Content Hide (Title & Description)
                            const textProgress = Math.min(progress * 1.6, 1);

                            // Select title chars (created by splitTextToSpans) and description
                            const titleChars = card.querySelectorAll(".card-title h1 .char span");
                            const description = card.querySelector(".card-description");

                            if (titleChars.length) {
                                gsap.set(titleChars, {
                                    opacity: Math.max(0.2, 1 - textProgress),
                                    x: textProgress * 24,
                                });
                            }
                            if (description) {
                                gsap.set(description, {
                                    autoAlpha: Math.max(0.2, 1 - textProgress),
                                    x: textProgress * 28,
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
                            gsap.set(innerImg, {
                                scale: 1.25 - progress * 0.1,
                                yPercent: 4 - progress * 4,
                            });
                            gsap.set(innerContainer, {
                                scale: 0.7 + progress * 0.3,
                                borderRadius: (110 - progress * 82) + "px"
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

            // 8. Outro Animation
            const outro = containerRef.current.querySelector(".outro");
            if (outro) {
                const outroContent = outro.querySelectorAll(".outro-eyebrow, .outro-title, .outro-subtext, .section3-contact-cta");
                const outroBgText = outro.querySelector(".outro-bg-text");

                gsap.fromTo(outroContent,
                    { y: 40, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        duration: 1.2,
                        stagger: 0.12,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: outro,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                gsap.fromTo(outroBgText,
                    { y: "20%" },
                    {
                        y: "-20%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: outro,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }

            // Refresh ST
            ScrollTrigger.refresh();

        }, containerRef); // scope

        return () => {
            ctx.revert();
        };
    }, [cardsContent, marqueeItems]); // Re-run when language content changes

    return (
        <div className="section3-container" ref={containerRef}>

            <section className="cards">
                {/* Card 1 (Intro Card with Marquee) */}
                <div className="card">
                    <div className="card-marquee">
                        <div className="marquee">
                            <h1>{marqueeItems[0]}</h1>
                            <h1>{marqueeItems[1]}</h1>
                            <h1>{marqueeItems[2]}</h1>
                            <h1>{marqueeItems[3]}</h1>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>{cardsContent[0]?.title}</h1>
                            </div>
                            <div className="card-description">
                                <p>{cardsContent[0]?.description}</p>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src="/img1.jpeg" alt={cardsContent[0]?.imageAlt || ''} onError={(e) => e.target.src = '/logo.jpeg'} />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div className="card-wrapper">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>{cardsContent[1]?.title}</h1>
                            </div>
                            <div className="card-description">
                                <p>{cardsContent[1]?.description}</p>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src="/img2.jpeg" alt={cardsContent[1]?.imageAlt || ''} onError={(e) => e.target.src = '/logo.jpeg'} />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <div className="card-wrapper">
                        <div className="card-content">
                            <div className="card-title">
                                <h1>{cardsContent[2]?.title}</h1>
                            </div>
                            <div className="card-description">
                                <p>{cardsContent[2]?.description}</p>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src="/img3.jpeg" alt={cardsContent[2]?.imageAlt || ''} onError={(e) => e.target.src = '/logo.jpeg'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="outro">
                <div className="outro-bg-text">{t('home.section3.outroBgText')}</div>
                <div className="outro-content">
                    <p className="outro-eyebrow">{t('home.section3.outroEyebrow')}</p>
                    <h2 className="outro-title" dangerouslySetInnerHTML={{ __html: t('home.section3.outroTitle') }} />
                    <p className="outro-subtext">
                        {t('home.section3.outro')}
                    </p>
                    <Link to="/contact" className="section3-contact-cta">
                        {t('home.section3.outroCta')}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Section;
