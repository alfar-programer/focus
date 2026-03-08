import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WorkflowSection.css';
import { useI18n } from '../../i18n/I18nProvider';

const WorkflowSection = () => {
    const { get, t, isRTL } = useI18n();
    const workflowSteps = get('services.workflow.steps', []);
    const metrics = get('services.workflow.metrics', []);
    const coordinates = get('services.workflow.coordinates', []);
    const scale = get('services.workflow.scale', []);
    const [activeStep, setActiveStep] = useState(2);
    const [isSectionInView, setIsSectionInView] = useState(false);
    const sectionRef = useRef(null);

    const handleStepClick = (stepId) => setActiveStep(stepId);
    const handleNextStep = () => { if (activeStep < workflowSteps.length) setActiveStep(activeStep + 1); };
    const handlePrevStep = () => { if (activeStep > 1) setActiveStep(activeStep - 1); };

    const progressPercentage = ((activeStep - 1) / Math.max(workflowSteps.length - 1, 1)) * 100;
    const activeStepData = workflowSteps.find(s => s.id === activeStep) || workflowSteps[0];

    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => setIsSectionInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (currentSection) observer.observe(currentSection);
        return () => { if (currentSection) observer.unobserve(currentSection); };
    }, []);

    if (!workflowSteps.length) return null;

    return (
        <>
            {/* ── Engineered Flow Section ── */}
            <section ref={sectionRef} className="engineered-flow-section">
                <div className="engineered-grid-bg" />

                {/* Decorative coordinates — xl only */}
                <div className="tech-coordinates">
                    {coordinates[0]}<br />{coordinates[1]}<br />{coordinates[2]}
                </div>
                <div className="tech-scale">
                    {scale[0]}<br />{scale[1]}<br />{scale[2]}
                </div>

                <div className="engineered-container">

                    {/* Header */}
                    <div className="engineered-header">
                        <div>
                            <div className="engineered-badge">{t('services.workflow.badge')}</div>
                            <h2 className="engineered-title">{t('services.workflow.title')}</h2>
                        </div>
                        <p className="engineered-description">
                            {t('services.workflow.description')}
                        </p>
                    </div>

                    {/* ══ DESKTOP: horizontal node diagram ══ */}
                    <div className="process-diagram desktop-diagram" dir="ltr">
                        <div className="connecting-line" />
                        <div className="active-line" style={{ width: `${progressPercentage}%` }} />

                        <div className="process-nodes">
                            {workflowSteps.map((step) => {
                                const isActive = step.id === activeStep;
                                return (
                                    <div key={step.id} className={`process-node ${isActive ? 'active' : ''}`}>
                                        <div className="node-circle" onClick={() => handleStepClick(step.id)}>
                                            <span className="material-symbols-outlined node-icon">{step.icon}</span>
                                        </div>
                                        <div className="node-content" dir={isRTL ? 'rtl' : 'ltr'}>
                                            <span className="node-number">
                                                {String(step.id).padStart(2, '0')}
                                                {isActive && t('services.workflow.activeSuffix')}
                                            </span>
                                            <h3 className="node-title">{step.title}</h3>
                                            <p className="node-subtitle">{step.subtitle}</p>
                                        </div>

                                        {/* Info card — absolute below node on desktop */}
                                        {isActive && (
                                            <div className="active-info-card">
                                                <div className="card-connector" />
                                                <div className="glass-panel" dir={isRTL ? 'rtl' : 'ltr'}>
                                                    <div className="card-decoration">
                                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                            <defs>
                                                                <pattern id="grid-small" width="4" height="4" patternUnits="userSpaceOnUse">
                                                                    <path d="M4 0L0 0L0 4" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                                                </pattern>
                                                            </defs>
                                                            <path d="M0 0H40V40H0V0Z" fill="url(#grid-small)" />
                                                        </svg>
                                                    </div>
                                                    <div className="card-header">
                                                        <span className="card-phase">{t('services.workflow.phaseActive')}</span>
                                                        <span className="material-symbols-outlined pulse-icon">radio_button_checked</span>
                                                    </div>
                                                    <h4 className="card-title">{step.subtitle}</h4>
                                                    <p className="card-description">{step.description}</p>
                                                    <div className="card-stats">
                                                        <div className="stat">
                                                            <div className="stat-label">{t('services.workflow.durationLabel')}</div>
                                                            <div className="stat-value">{step.duration}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-label">{t('services.workflow.techStackLabel')}</div>
                                                            <div className="stat-value">{step.techStack}</div>
                                                        </div>
                                                    </div>
                                                    <button className="card-action">
                                                        {t('services.workflow.viewDetails')}
                                                        <span className="material-symbols-outlined">arrow_forward</span>
                                                    </button>
                                                    <div className="corner-accent top-left" />
                                                    <div className="corner-accent bottom-right" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ══ MOBILE: vertical stepper ══ */}
                    <div className="mobile-stepper">
                        {/* Active card at top */}
                        <div className="mobile-active-card">
                            <div className="mac-phase-row">
                                <span className="mac-phase-label">{t('services.workflow.phaseLabel')} {String(activeStep).padStart(2, '0')} / {String(workflowSteps.length).padStart(2, '0')}</span>
                                <span className="material-symbols-outlined mac-live-dot">radio_button_checked</span>
                            </div>
                            <h4 className="mac-title">{activeStepData?.title}</h4>
                            <p className="mac-subtitle">{activeStepData?.subtitle}</p>
                            <p className="mac-description">{activeStepData?.description}</p>
                            <div className="mac-stats">
                                <div className="mac-stat">
                                    <span className="mac-stat-label">{t('services.workflow.durationLabel')}</span>
                                    <span className="mac-stat-value">{activeStepData?.duration}</span>
                                </div>
                                <div className="mac-stat-divider" />
                                <div className="mac-stat">
                                    <span className="mac-stat-label">{t('services.workflow.techStackLabel')}</span>
                                    <span className="mac-stat-value">{activeStepData?.techStack}</span>
                                </div>
                            </div>
                        </div>

                        {/* Step pills */}
                        <div className="mobile-step-pills">
                            {workflowSteps.map((step) => {
                                const isActive = step.id === activeStep;
                                const isPast = step.id < activeStep;
                                return (
                                    <button
                                        key={step.id}
                                        className={`msp-step ${isActive ? 'msp-step--active' : ''} ${isPast ? 'msp-step--past' : ''}`}
                                        onClick={() => handleStepClick(step.id)}
                                    >
                                        {/* Left: number + line */}
                                        <div className="msp-track">
                                            <div className="msp-circle">
                                                {isPast
                                                    ? <span className="material-symbols-outlined msp-check">check</span>
                                                    : <span className="msp-num">{String(step.id).padStart(2, '0')}</span>
                                                }
                                            </div>
                                            {step.id < workflowSteps.length && <div className="msp-line" />}
                                        </div>
                                        {/* Right: text */}
                                        <div className="msp-text">
                                            <span className="msp-title">{step.title}</span>
                                            <span className="msp-sub">{step.subtitle}</span>
                                        </div>
                                        {/* Icon */}
                                        <span className="material-symbols-outlined msp-icon">{step.icon}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Prev / Next navigation */}
                        <div className="mobile-nav-bar">
                            <button
                                className="mnb-btn mnb-btn--prev"
                                onClick={handlePrevStep}
                                disabled={activeStep === 1}
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                                {t('services.workflow.prev')}
                            </button>
                            <div className="mnb-progress">
                                <div className="mnb-progress-fill" style={{ width: `${progressPercentage}%` }} />
                            </div>
                            <button
                                className="mnb-btn mnb-btn--next"
                                onClick={handleNextStep}
                                disabled={activeStep === workflowSteps.length}
                            >
                                {t('services.workflow.next')}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="metrics-panel">
                        {metrics.map((metric) => (
                            <div key={metric.id} className="metric-card">
                                <div className="metric-header">
                                    <span className="metric-id">METRIC_{metric.id}</span>
                                    <span className="material-symbols-outlined metric-icon">{metric.icon}</span>
                                </div>
                                <div className="metric-value">{metric.value}</div>
                                <div className="metric-label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fixed nav dots — desktop only */}
                <div className={`workflow-nav ${isSectionInView ? 'fixed' : 'absolute'}`} dir="ltr">
                    <button className="nav-button-fixed" onClick={handlePrevStep} disabled={activeStep === 1}>
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div className="nav-dots">
                        {workflowSteps.map((step) => (
                            <div
                                key={step.id}
                                className={`nav-dot ${step.id === activeStep ? 'active' : ''}`}
                                onClick={() => handleStepClick(step.id)}
                            />
                        ))}
                    </div>
                    <button className="nav-button-fixed" onClick={handleNextStep} disabled={activeStep === workflowSteps.length}>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="workflow-cta">
                <div className="cta-bg-gradient" />
                <div className="cta-container">
                    <div className="cta-icon">
                        <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <h2 className="cta-title">
                        {t('services.workflow.cta.titleLine')} <br />
                        <span className="cta-title-gradient">{t('services.workflow.cta.titleHighlight')}</span>
                    </h2>
                    <p className="cta-description">
                        {t('services.workflow.cta.description')}
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-button-primary">
                            <span>{t('services.workflow.cta.primary')}</span>
                            <span className="material-symbols-outlined button-arrow">arrow_forward</span>
                        </Link>
                        <Link to="/projects" className="cta-button-secondary">
                            <span>{t('services.workflow.cta.secondary')}</span>
                        </Link>
                    </div>
                </div>
                <div className="cta-bottom-gradient" />
            </section>
        </>
    );
};

export default WorkflowSection;
