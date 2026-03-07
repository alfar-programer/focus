import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section5.css';
import { useI18n } from '../../i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
    const { get, t } = useI18n();
    const statsRef = useRef(null);
    const FEATURES = get('about.section5.features', []);
    const STATS = get('about.section5.stats', []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const statEls = statsRef.current?.querySelectorAll('.s5__stat-value');
            if (!statEls) return;

            statEls.forEach((el, i) => {
                const stat = STATS[i];

                // Skip the infinity symbol — just fade it in
                if (stat.end === null) {
                    gsap.from(el, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.6,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    });
                    return;
                }

                // Numeric counter animation
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: stat.end,
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    onUpdate: () => {
                        const formatted = stat.decimals
                            ? obj.val.toFixed(stat.decimals)
                            : Math.round(obj.val);
                        el.textContent = `${formatted}${stat.suffix}`;
                    },
                });

                // Subtle fade-up on the whole card
                gsap.from(el.closest('.s5__stat'), {
                    y: 30,
                    opacity: 0,
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        }, statsRef);

        return () => ctx.revert();
    }, [STATS]);

    return (
        <section className="s5">
            {/* Site-consistent grid overlay */}
            <div className="s5__grid-overlay" />
            {/* Accent spotlight behind center hub */}
            <div className="s5__spotlight" />

            <div className="s5__inner">
                {/* Header */}
                <div className="s5__header">
                    <span className="s5__badge">{t('about.section5.badge')}</span>
                    <h1 className="s5__headline">
                        {t('about.section5.headlineStart')} <br />
                        <span className="s5__headline-accent">{t('about.section5.headlineAccent')}</span>
                    </h1>
                </div>

                {/* 3-Column Grid */}
                <div className="s5__grid">
                    {/* Left */}
                    <div className="s5__col--left">
                        <div className="s5__divider" />
                        <p className="s5__body-text">
                            {t('about.section5.body')}
                        </p>
                        <div className="s5__analytics">
                            <span className="material-symbols-outlined s5__analytics-icon">analytics</span>
                            <span className="s5__analytics-label">{t('about.section5.analytics')}</span>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="s5__col--center">
                        <div className="s5__hub-float">
                            <div className="s5__hub-circle">
                                <img
                                    src="/logonobackgroundWhite.svg"
                                    alt="Focus Trading & Contracting"
                                    className="s5__hub-logo"
                                />
                                <div className="s5__hub-ring">
                                    <div className="s5__hub-dot" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="s5__col--right">
                        <div className="s5__divider" />
                        <ul className="s5__feature-list">
                            {FEATURES.map((f, i) => (
                                <li key={i} className="s5__feature-item">
                                    <h4 className="s5__feature-label">{f.label}</h4>
                                    <p className="s5__feature-value">{f.value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats — animated by GSAP on scroll */}
                <div className="s5__stats" ref={statsRef}>
                    {STATS.map((s, i) => (
                        <div key={i} className="s5__stat">
                            <div className="s5__stat-value">
                                {s.end === null ? s.suffix : `0${s.suffix}`}
                            </div>
                            <div className="s5__stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section5;
