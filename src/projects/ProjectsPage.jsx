import React, { useEffect } from 'react';
import HeroSection from './HeroSection/HeroSection';
import IntroSection from './IntroSection/IntroSection';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import CTASection from './CTASection/CTASection';

const ProjectsPage = () => {
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
        document.title = "Focus TC - Projects Showcase";
    }, []);

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
