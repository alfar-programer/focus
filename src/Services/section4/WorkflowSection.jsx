import React, { useState, useRef, useEffect } from 'react';
import './WorkflowSection.css';

const WorkflowSection = () => {
    const [activeStep, setActiveStep] = useState(2);
    const [isSectionInView, setIsSectionInView] = useState(false);
    const sectionRef = useRef(null);

    const workflowSteps = [
        {
            id: 1,
            icon: 'chat_bubble_outline',
            title: 'Consultation',
            subtitle: 'Initial Scoping',
            description: 'We begin with comprehensive stakeholder interviews and requirement gathering. This phase establishes project scope, constraints, and success metrics through detailed analysis.',
            duration: '1-2 Weeks',
            techStack: 'Jira / Miro',
        },
        {
            id: 2,
            icon: 'settings',
            title: 'Engineering',
            subtitle: 'Precision Engineering',
            description: 'We transform conceptual constraints into operational reality through rigorous CAD modeling and stress testing. Every component is simulated for peak load performance.',
            duration: '4-6 Weeks',
            techStack: 'AutoCAD / PySim',
        },
        {
            id: 3,
            icon: 'construction',
            title: 'Implementation',
            subtitle: 'Assembly',
            description: 'Professional installation and integration with existing systems. Our certified technicians ensure seamless deployment with minimal operational disruption.',
            duration: '3-4 Weeks',
            techStack: 'Fusion 360 / PLC',
        },
        {
            id: 4,
            icon: 'published_with_changes',
            title: 'Commissioning',
            subtitle: 'Testing',
            description: 'Rigorous testing protocols and performance validation. We verify all systems meet or exceed specifications before handover.',
            duration: '2-3 Weeks',
            techStack: 'LabVIEW / TestStand',
        },
        {
            id: 5,
            icon: 'support_agent',
            title: 'Support',
            subtitle: 'Maintenance',
            description: '24/7 monitoring and proactive maintenance. Our support team ensures optimal performance and rapid response to any issues.',
            duration: 'Ongoing',
            techStack: 'Azure IoT / Teams',
        }
    ];

    const metrics = [
        { id: 'A1', icon: 'description', value: '142', label: 'Technical Drawings' },
        { id: 'B2', icon: 'memory', value: '850+', label: 'Simulations Run' },
        { id: 'C3', icon: 'verified_user', value: '100%', label: 'Safety Compliance' },
    ];

    const handleStepClick = (stepId) => setActiveStep(stepId);
    const handleNextStep = () => { if (activeStep < workflowSteps.length) setActiveStep(activeStep + 1); };
    const handlePrevStep = () => { if (activeStep > 1) setActiveStep(activeStep - 1); };

    const progressPercentage = ((activeStep - 1) / (workflowSteps.length - 1)) * 100;
    const activeStepData = workflowSteps.find(s => s.id === activeStep);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsSectionInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <>
            {/* ── Engineered Flow Section ── */}
            <section ref={sectionRef} className="engineered-flow-section">
                <div className="engineered-grid-bg" />

                {/* Decorative coordinates — xl only */}
                <div className="tech-coordinates">
                    COORD: 45.922, 12.001<br />SYS: ONLINE<br />GRID: ACTIVE
                </div>
                <div className="tech-scale">
                    SCALE: 1:100<br />REF: ENG-FLOW-V5<br />STATUS: MONITORING
                </div>

                <div className="engineered-container">

                    {/* Header */}
                    <div className="engineered-header">
                        <div>
                            <div className="engineered-badge">System Architecture</div>
                            <h2 className="engineered-title">05 // ENGINEERED FLOW</h2>
                        </div>
                        <p className="engineered-description">
                            A visual breakdown of our rigorous engineering methodology. From concept to
                            commissioning, every phase is data-driven.
                        </p>
                    </div>

                    {/* ══ DESKTOP: horizontal node diagram ══ */}
                    <div className="process-diagram desktop-diagram">
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
                                        <div className="node-content">
                                            <span className="node-number">
                                                {String(step.id).padStart(2, '0')}
                                                {isActive && ' // ACTIVE'}
                                            </span>
                                            <h3 className="node-title">{step.title}</h3>
                                            <p className="node-subtitle">{step.subtitle}</p>
                                        </div>

                                        {/* Info card — absolute below node on desktop */}
                                        {isActive && (
                                            <div className="active-info-card">
                                                <div className="card-connector" />
                                                <div className="glass-panel">
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
                                                        <span className="card-phase">PHASE: ACTIVE</span>
                                                        <span className="material-symbols-outlined pulse-icon">radio_button_checked</span>
                                                    </div>
                                                    <h4 className="card-title">{step.subtitle}</h4>
                                                    <p className="card-description">{step.description}</p>
                                                    <div className="card-stats">
                                                        <div className="stat">
                                                            <div className="stat-label">Duration</div>
                                                            <div className="stat-value">{step.duration}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-label">Tech Stack</div>
                                                            <div className="stat-value">{step.techStack}</div>
                                                        </div>
                                                    </div>
                                                    <button className="card-action">
                                                        View Details
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
                                <span className="mac-phase-label">PHASE {String(activeStep).padStart(2, '0')} / {String(workflowSteps.length).padStart(2, '0')}</span>
                                <span className="material-symbols-outlined mac-live-dot">radio_button_checked</span>
                            </div>
                            <h4 className="mac-title">{activeStepData.title}</h4>
                            <p className="mac-subtitle">{activeStepData.subtitle}</p>
                            <p className="mac-description">{activeStepData.description}</p>
                            <div className="mac-stats">
                                <div className="mac-stat">
                                    <span className="mac-stat-label">Duration</span>
                                    <span className="mac-stat-value">{activeStepData.duration}</span>
                                </div>
                                <div className="mac-stat-divider" />
                                <div className="mac-stat">
                                    <span className="mac-stat-label">Tech Stack</span>
                                    <span className="mac-stat-value">{activeStepData.techStack}</span>
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
                                Prev
                            </button>
                            <div className="mnb-progress">
                                <div className="mnb-progress-fill" style={{ width: `${progressPercentage}%` }} />
                            </div>
                            <button
                                className="mnb-btn mnb-btn--next"
                                onClick={handleNextStep}
                                disabled={activeStep === workflowSteps.length}
                            >
                                Next
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
                <div className={`workflow-nav ${isSectionInView ? 'fixed' : 'absolute'}`}>
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
                        Ready to Power Your <br />
                        <span className="cta-title-gradient">Next Project?</span>
                    </h2>
                    <p className="cta-description">
                        Partner with Focus-TC for industry-leading automation solutions that drive efficiency and growth.
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-button-primary">
                            <span>Request a Consultation</span>
                            <span className="material-symbols-outlined button-arrow">arrow_forward</span>
                        </button>
                        <button className="cta-button-secondary">
                            <span>View Projects</span>
                        </button>
                    </div>
                </div>
                <div className="cta-bottom-gradient" />
            </section>
        </>
    );
};

export default WorkflowSection;
