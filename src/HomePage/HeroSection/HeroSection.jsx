import { useEffect, useRef, useState, useCallback } from "react";
import "./HeroSection.css";
import { useI18n } from "../../i18n/I18nProvider";

const HERO_IMAGES = [
  "/heroimg1.png",
  "/heroimg2.png",
  "/heroimg3.png",
  "/heroimg4.png",
  "/heroimg5.png",
  "/heroimg6.png",
];

const ROTATING_WORDS = [
  "Power",
  "Control",
  "Automation",
  "Delivery",
  "Excellence",
];
const DRAG_THRESHOLD = 60;

const HeroSection = () => {
  const { t } = useI18n();

  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("left");
  const sliderTimer = useRef(null);

  // Drag state — use plain state for render-visible values
  const [isDragging, setIsDragging] = useState(false); // true after 5px movement
  const [isGrabbing, setIsGrabbing] = useState(false); // true on mousedown
  const [dragOffset, setDragOffset] = useState(0);
  // internal ref tracks raw values (no re-render needed)
  const drag = useRef({ startX: 0, startY: 0, delta: 0 });

  // Rotating word
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  // Stats
  const [counted, setCounted] = useState(false);
  const statsRef = useRef(null);

  // ── go to slide ──
  const goTo = useCallback(
    (target, dir = "left") => {
      if (isTransitioning || target === currentIndex) return;
      setDirection(dir);
      setNextIndex(target);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(target);
        setIsTransitioning(false);
      }, 700);
    },
    [isTransitioning, currentIndex],
  );

  const goNext = useCallback(
    () => goTo((currentIndex + 1) % HERO_IMAGES.length, "left"),
    [currentIndex, goTo],
  );
  const goPrev = useCallback(
    () =>
      goTo(
        (currentIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
        "right",
      ),
    [currentIndex, goTo],
  );

  const resetAutoplay = useCallback(() => {
    clearInterval(sliderTimer.current);
    sliderTimer.current = setInterval(goNext, 4500);
  }, [goNext]);

  // Auto-advance
  useEffect(() => {
    sliderTimer.current = setInterval(goNext, 4500);
    return () => clearInterval(sliderTimer.current);
  }, [goNext]);

  // Rotating words
  useEffect(() => {
    const id = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setWordVisible(true);
      }, 380);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  // Stats counter
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !counted) setCounted(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  // ── Drag handlers ──
  const onPointerDown = (e) => {
    if (isTransitioning) return;
    if (e.type === "mousedown") e.preventDefault();
    drag.current = {
      startX: e.clientX ?? e.touches[0].clientX,
      startY: e.clientY ?? e.touches[0].clientY,
      delta: 0,
    };
    setIsGrabbing(true);
    clearInterval(sliderTimer.current);
  };

  const onPointerMove = (e) => {
    if (!isGrabbing) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    if (clientX == null) return;
    const delta = clientX - drag.current.startX;
    drag.current.delta = delta;
    if (Math.abs(delta) > 5) setIsDragging(true);
    setDragOffset(Math.max(-130, Math.min(130, delta)));
  };

  const onPointerUp = () => {
    if (!isGrabbing) return;
    const { delta } = drag.current;
    setIsGrabbing(false);
    setIsDragging(false);
    setDragOffset(0);
    if (delta < -DRAG_THRESHOLD) goNext();
    else if (delta > DRAG_THRESHOLD) goPrev();
    resetAutoplay();
  };

  // touch‑move: prevent vertical scroll when swiping horizontally
  const onTouchMove = (e) => {
    if (!isGrabbing) return;
    const dx = Math.abs(e.touches[0].clientX - drag.current.startX);
    const dy = Math.abs(e.touches[0].clientY - drag.current.startY);
    if (dx > dy) e.preventDefault();
    onPointerMove(e);
  };

  const outClass = direction === "left" ? "slide-out-left" : "slide-out-right";
  const inClass = direction === "left" ? "slide-in-right" : "slide-in-left";

  // adjacent image shown as peek while dragging
  const peekIndex =
    dragOffset < 0
      ? (currentIndex + 1) % HERO_IMAGES.length
      : (currentIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;

  const peekTranslate =
    dragOffset < 0
      ? `calc(100% + ${dragOffset}px)`
      : `calc(-100% + ${dragOffset}px)`;

  return (
    <section className="hero-v2">
      {/* ── Full-screen Image Slider ── */}
      <div
        className={`hero-v2__slider${isDragging ? " is-dragging" : ""}`}
        style={{ cursor: isGrabbing ? "grabbing" : "grab" }}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onTouchMove}
        onTouchEnd={onPointerUp}
      >
        {/* Current slide */}
        <div
          className={`hero-v2__slide hero-v2__slide--current${isTransitioning ? ` ${outClass}` : ""}`}
          style={
            !isTransitioning && isGrabbing
              ? { transform: `translateX(${dragOffset}px)`, transition: "none" }
              : {}
          }
        >
          <img
            src={HERO_IMAGES[currentIndex]}
            alt="Focus project"
            draggable={false}
          />
          <div className="hero-v2__slide-overlay" />
        </div>

        {/* Incoming slide (transition) */}
        {isTransitioning && (
          <div className={`hero-v2__slide hero-v2__slide--next ${inClass}`}>
            <img
              src={HERO_IMAGES[nextIndex]}
              alt="Focus project"
              draggable={false}
            />
            <div className="hero-v2__slide-overlay" />
          </div>
        )}

        {/* Peek at adjacent image while dragging */}
        {!isTransitioning && isGrabbing && dragOffset !== 0 && (
          <div
            className="hero-v2__slide hero-v2__slide--peek"
            style={{
              transform: `translateX(${peekTranslate})`,
              transition: "none",
            }}
          >
            <img
              src={HERO_IMAGES[peekIndex]}
              alt="Focus project"
              draggable={false}
            />
            <div className="hero-v2__slide-overlay" />
          </div>
        )}

        {/* Drag hint — fades while grabbing */}
        <div className={`hero-v2__drag-hint${isGrabbing ? " hidden" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Drag to explore
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Arrow buttons */}
        <button
          className="hero-v2__arrow hero-v2__arrow--prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
            resetAutoplay();
          }}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="hero-v2__arrow hero-v2__arrow--next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
            resetAutoplay();
          }}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="hero-v2__dots">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`hero-v2__dot${i === currentIndex ? " active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i, i > currentIndex ? "left" : "right");
                resetAutoplay();
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="hero-v2__counter">
          <span className="hero-v2__counter-current">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="hero-v2__counter-sep"> / </span>
          <span className="hero-v2__counter-total">
            {String(HERO_IMAGES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Progress bar */}
        <div className="hero-v2__progress-track">
          <div
            className="hero-v2__progress-fill"
            style={{
              width: `${((currentIndex + 1) / HERO_IMAGES.length) * 100}%`,
              transition: "width 0.7s ease",
            }}
          />
        </div>
      </div>

      {/* ── Content overlay ── */}
      <div className="hero-v2__content">
        <div className="hero-v2__eyebrow">
          <span className="hero-v2__eyebrow-dot" />
          Engineering Solutions
        </div>

        <h1 className="hero-v2__title">
          <span className="hero-v2__title-line">Industrial</span>
          <span className="hero-v2__title-line accent">
            <span
              className={`hero-v2__rotating-word${wordVisible ? " visible" : ""}`}
              key={wordIndex}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </span>
          <span className="hero-v2__title-line">Delivered.</span>
        </h1>

        <p className="hero-v2__description">{t("home.hero.trustedBy")}</p>

        <div className="hero-v2__actions">
          <a href="/contact" className="hero-v2__btn hero-v2__btn--primary">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="/projects" className="hero-v2__btn hero-v2__btn--ghost">
            View Projects
          </a>
        </div>

        <div className="hero-v2__stats" ref={statsRef}>
          <StatItem
            value={50}
            suffix="+"
            label="Projects Delivered"
            counted={counted}
          />
          <div className="hero-v2__stats-divider" />
          <StatItem
            value={6}
            suffix="+"
            label="Years of Excellence"
            counted={counted}
          />
          <div className="hero-v2__stats-divider" />
          <StatItem
            value={1.2}
            suffix=" GW"
            label="Power Delivered"
            counted={counted}
            decimal
          />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, suffix, label, counted, decimal }) => {
  const [display, setDisplay] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!counted) return;
    const dur = 1800,
      start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay(
        decimal ? Math.round(e * value * 10) / 10 : Math.floor(e * value),
      );
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [counted, value, decimal]);
  return (
    <div className="hero-v2__stat">
      <span className="hero-v2__stat-value">
        {decimal ? display.toFixed(1) : display}
        {suffix}
      </span>
      <span className="hero-v2__stat-label">{label}</span>
    </div>
  );
};

export default HeroSection;
