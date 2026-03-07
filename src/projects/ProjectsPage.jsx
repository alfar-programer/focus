import React, { useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection';
import IntroSection from './IntroSection/IntroSection';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import CTASection from './CTASection/CTASection';
import { useI18n } from '../i18n/I18nProvider';

const ProjectsPage = () => {
    const { t } = useI18n();
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
        document.title = t('app.titles.projectsPage');
    }, [t]);

    return (
        <main className="projects-page">
            <HeroSection />
            <IntroSection />
            <ProjectsGrid />
            <CTASection />
        </main>
    );
};

export default ProjectsPage;
