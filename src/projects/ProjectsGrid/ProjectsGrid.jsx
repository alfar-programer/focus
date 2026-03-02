import React, { useState } from 'react';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    
    const projects = [
        {
            id: 1,
            title: 'Cairo West Power Station',
            location: '6th of October City, Egypt',
            category: 'Industrial',
            description: 'Comprehensive electrical installation and automation system integration for the new turbine expansion project, ensuring 99.9% uptime reliability.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPHmW6_t-Pisd0P3paSmPqru50aIXTYzgrXXaADZewE34mhBDiwpwNAadwcJcldz9Jt2R1hf_dCKHHUi32PxFp6fLHUiU3qzJJI7DqQ9xvjIDShB6eBR7t-6z9AKFDwhgtCAQ_KRUZAyrYQ40n4xxmN61Kw1ZBJOuhbNEstjxlnTpoD8PgkatWyyVC2l6EQ1nb1DBFHQrXfYX1IXd4VnuQZP8yUABfQeP2ZDgai_K_v5fHcZBX_ld9_zo49K8y3XN5K4LyCypWVlY',
            client: 'Cairo West Power Plant',
            duration: '18 months',
            value: '$12.5M',
            services: ['Electrical Installation', 'Automation Systems', 'HV Switchgear', 'Power Distribution'],
            year: '2023'
        },
        {
            id: 2,
            title: 'Al-Massa Hotel Complex',
            location: 'New Capital, Egypt',
            category: 'Commercial',
            description: 'Design and implementation of smart building management systems and emergency power backup solutions for a 500-room luxury hotel.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9ErI9voqAxE7bPxbO0qPmnAqc7e-ih4a3xmlF70nADlxjTC2eDJrEVT0vGD3HTceMG-WSbaeymQNewax5ri2aeYi_cgnAZaXsREQjuIcA_ax9su5I7ObeNh61142rJTEBXUTlrumROWSVto7mABGgO22OMazT4KDKmgySKSHeC_W3RqMCEjrfxnhVjI9WBdlGEq40UnEojyVzJNIoo-kbdYkNjcsNBGsveQFmVir1bO9alnAgAQU7sTE-tjY-pX3HC5j-ZcwaNk',
            client: 'Al-Massa Hospitality Group',
            duration: '14 months',
            value: '$8.2M',
            services: ['BMS Integration', 'Emergency Power', 'HVAC Controls', 'Low Current Systems'],
            year: '2024'
        },
        {
            id: 3,
            title: 'Benban Solar Park Grid',
            location: 'Aswan, Egypt',
            category: 'Utilities',
            description: 'High-voltage substation connectivity and distribution network installation for one of the world\'s largest solar parks.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzov0Br4DwyUHbAuZYDUwGDLqL-KjVPH5BJN8JaRXdcACHI9e9kjUQtQFXP81MkWwnLz8tiYIVm5N3xnZEdM1rlJXtin9_Yz2xjJUbc40G_j8Eft83oWp9Az51rl5Fj46UcNwaK4DfSGlmyQF6VNTyTEZbQLDXpOR_WokIyWAgAK65UBt-hhWzKOpw2JocNUWMOeu0mkZ8mj7127bCP-Fxvp7qgn5L8xshZgAyAu0_HJUVjLOlUpfElidwRyybDT0FrvtocoOqnqI',
            client: 'Infinity Power / Masdar',
            duration: '24 months',
            value: '$22M',
            services: ['HV Substations', 'Grid Connection', 'Power Distribution', 'SCADA Systems'],
            year: '2022'
        },
        {
            id: 4,
            title: 'Smart Factory Upgrade',
            location: 'Alexandria, Egypt',
            category: 'Industrial',
            description: 'Retrofitting legacy manufacturing lines with IoT sensors and real-time monitoring dashboards for predictive maintenance.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwYINHQ3hHGA66zIFZH8tX5YlK1bTXU350pCuFSUX4TceKCHWuM8gNUvrV38-Wo8jLtDLzjw4VqVvQhiaWQplXC4CvmLfxMzpmhtcp1j77Ye69qz8Ey_CdJbQldlxUGQk8VgsZyeyFGu1yfPXXGHUNYAigTzer_Ho_t7PvyjNKTtEXvdCXmBhtoHFSsScXxY9-iOSHYMGXG7m2n6kEjKefXntmURAWEuZ7I0xw8n0YJoJpfnXt2ifigw7bN9kZ5-rcN5vgZHAeUCw',
            client: 'Alexandria Manufacturing Co.',
            duration: '8 months',
            value: '$3.8M',
            services: ['IoT Integration', 'Automation', 'Predictive Maintenance', 'Dashboard Systems'],
            year: '2024'
        },
        {
            id: 5,
            title: 'Business Bay Tower',
            location: 'Dubai, UAE',
            category: 'Commercial',
            description: 'Full electromechanical contracting for a 45-story commercial tower, including HVAC, fire fighting, and low current systems.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVWniBaFY6YQpiU_RRo82EwkC0WKixKASbRlFT-e8RBHtNV_qAkrUOxV9Ekr4xPEQuJFTrvY4ZKqDOYmrHz6ZUAtOmQsZjUr4tQWzX1QCgL42-XtIjZOj_-SPB0y0NAIVpEBIHA2iMME0LqWbVXxhCoDusrURZ3MgyjpMfLYvdlBzKIZ69MJRKiirsvkDfTrxYo2gidw_FfUZ6lCR61qsruAEOPOkdYh_OaohC-eWmLCkz5pol0EQAk33YSKwcHMjrwA8Sz0l3KjI',
            client: 'Dubai Holdings',
            duration: '32 months',
            value: '$45M',
            services: ['MEP Design', 'HVAC Systems', 'Fire Fighting', 'Low Current', 'Elevators'],
            year: '2021'
        },
        {
            id: 6,
            title: 'Water Treatment SCADA',
            location: 'Cairo, Egypt',
            category: 'Utilities',
            description: 'Developing a centralized SCADA system for a municipal water treatment facility to optimize chemical dosing and pump operations.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5OaFaSMp9NmrcovZJOe6YGUveIPf8BoCCFfFEWyG9V1KP-OwWVsjkDML-sLi96SPxEWmo1ea01Lh7Kmp9rfx2Tzq9GVb-WNDzVDxwHlcVlEAHlmsukXyMDjZmM6Vxj8UMczS2pV1p6FxVYsFoF5CpEqbUN15cS4quLs47XJwCLxfYe0PGKnydxqAG2E2WC2m9t7eORu_5oC6m4MhDu4I8fAKSMI03NiB8oabWdFhtVtC4wXVaO9IDTghuvoyvD-jhfDJQPhMjoHE',
            client: 'Cairo Water Authority',
            duration: '12 months',
            value: '$5.5M',
            services: ['SCADA Design', 'PLC Programming', 'Process Control', 'Remote Monitoring'],
            year: '2023'
        }
    ];
    
    const categories = ['All', 'Industrial', 'Commercial', 'Utilities'];
    
    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);
    
    const getCategoryColor = (category) => {
        switch(category) {
            case 'Industrial': return '#1392ec';
            case 'Commercial': return '#f59e0b';
            case 'Utilities': return '#16a34a';
            default: return '#1392ec';
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
                            {category}
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
                                            color: project.category === 'Commercial' ? '#1e293b' : 'white'
                                        }}
                                    >
                                        {project.category}
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
                                    View Project Details
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
                                            color: selectedProject.category === 'Commercial' ? '#1e293b' : 'white'
                                        }}
                                    >
                                        {selectedProject.category}
                                    </span>
                                </div>
                                
                                <div className="project-modal-details">
                                    <h2 className="project-modal-title">{selectedProject.title}</h2>
                                    
                                    <div className="project-modal-meta">
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">apartment</span>
                                            <div>
                                                <label>Client</label>
                                                <span>{selectedProject.client}</span>
                                            </div>
                                        </div>
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">schedule</span>
                                            <div>
                                                <label>Duration</label>
                                                <span>{selectedProject.duration}</span>
                                            </div>
                                        </div>
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">payments</span>
                                            <div>
                                                <label>Project Value</label>
                                                <span>{selectedProject.value}</span>
                                            </div>
                                        </div>
                                        <div className="project-meta-item">
                                            <span className="material-symbols-outlined">calendar_today</span>
                                            <div>
                                                <label>Year</label>
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
                                        <h4>Services Provided</h4>
                                        <div className="project-services-tags">
                                            {selectedProject.services.map((service, index) => (
                                                <span key={index} className="project-service-tag">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <button className="project-modal-cta" onClick={() => window.location.href = '/contactus'}>
                                        <span>Request Similar Project</span>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="projects-load-more">
                    <button className="load-more-btn">
                        Load More Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
