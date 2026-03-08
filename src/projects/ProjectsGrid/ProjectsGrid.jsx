import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsGrid.css';
import { useI18n } from '../../i18n/I18nProvider';

const ProjectsGrid = () => {
    const { get, t } = useI18n();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = get('projects.grid.projects', []);
    const categoryLabels = get('projects.grid.categories', {});
    const categories = Object.keys(categoryLabels);

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {
        if (!selectedProject) return;
        const updated = projects.find((project) => project.id === selectedProject.id);
        if (updated) {
            setTimeout(() => {
                setSelectedProject(updated);
            }, 0);
        }
    }, [projects, selectedProject]);

    const getCategoryColor = (category) => {
        const isDark = document.querySelector('.app-container')?.getAttribute('data-theme') === 'dark';
        switch (category) {
            case 'industrial': return isDark ? 'var(--color-primary)' : '#0F172A';
            case 'commercial': return 'var(--color-accent)';
            case 'utilities': return '#10B981';
            default: return 'var(--color-primary)';
        }
    };

    return (
        <section className="projects-grid-section">
            <div className="projects-grid-container">
                <div className="projects-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`projects-filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {categoryLabels[category]}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="projects-page-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="projects-page-card-image">
                                <div
                                    className="projects-page-image-bg"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="projects-page-category">
                                    <span
                                        className="projects-page-category-badge"
                                        style={{
                                            background: `${getCategoryColor(project.category)}ee`,
                                            color: 'var(--text-inverse)'
                                        }}
                                    >
                                        {categoryLabels[project.category]}
                                    </span>
                                </div>
                            </div>
                            <div className="projects-page-card-content">
                                <h3 className="projects-page-title">{project.title}</h3>
                                <div className="projects-page-location">
                                    <span className="projects-page-location-icon material-symbols-outlined">location_on</span>
                                    <span>{project.location}</span>
                                </div>
                                <p className="projects-page-description">{project.description}</p>
                                <button className="projects-page-link">
                                    {t('projects.grid.viewDetails')}
                                    <span className="projects-page-link-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div
                        className="project-modal-overlay"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="project-modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="project-modal-close"
                                onClick={() => setSelectedProject(null)}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="project-modal-content">
                                <div className="project-modal-image-section">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="project-modal-image"
                                    />
                                    <span
                                        className="project-modal-category"
                                        style={{
                                            background: `${getCategoryColor(selectedProject.category)}`,
                                            color: 'var(--text-inverse)'
                                        }}
                                    >
                                        {categoryLabels[selectedProject.category]}
                                    </span>
                                </div>

                                <div className="project-modal-details">
                                    <h2 className="project-modal-title">{selectedProject.title}</h2>

                                    <div className="project-modal-meta">
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">apartment</span>
                                            <div>
                                                <label>{t('projects.grid.modal.client')}</label>
                                                <span>{selectedProject.client}</span>
                                            </div>
                                        </div>
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">schedule</span>
                                            <div>
                                                <label>{t('projects.grid.modal.duration')}</label>
                                                <span>{selectedProject.duration}</span>
                                            </div>
                                        </div>
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">payments</span>
                                            <div>
                                                <label>{t('projects.grid.modal.value')}</label>
                                                <span>{selectedProject.value}</span>
                                            </div>
                                        </div>
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">calendar_today</span>
                                            <div>
                                                <label>{t('projects.grid.modal.year')}</label>
                                                <span>{selectedProject.year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-modal-location">
                                        <span className="material-symbols-outlined">location_on</span>
                                        <span>{selectedProject.location}</span>
                                    </div>

                                    <p className="project-modal-description">
                                        {selectedProject.description}
                                    </p>

                                    <div className="project-modal-services">
                                        <h4>{t('projects.grid.modal.servicesProvided')}</h4>
                                        <div className="project-services-tags">
                                            {selectedProject.services.map((service, index) => (
                                                <span key={index} className="project-service-tag">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="project-modal-cta" onClick={() => { setSelectedProject(null); navigate('/contact'); }}>
                                        <span>{t('projects.grid.modal.requestSimilar')}</span>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="projects-load-more">
                    <button className="load-more-btn">
                        {t('projects.grid.loadMore')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
