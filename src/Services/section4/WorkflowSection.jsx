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
                        
                    </div>
                </div>
                <div className="cta-bottom-gradient" />
            </section>
        </>
    );
};

export default WorkflowSection;
