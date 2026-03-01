import React, { useState, useEffect } from 'react';
import './ProjectsGrid.css';

const projects = [
    {
        id: 1,
        title: "Cairo West Power Station",
        location: "6th of October City, Egypt",
        category: "Industrial",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPHmW6_t-Pisd0P3paSmPqru50aIXTYzgrXXaADZewE34mhBDiwpwNAadwcJcldz9Jt2R1hf_dCKHHUi32PxFp6fLHUiU3qzJJI7DqQ9xvjIDShB6eBR7t-6z9AKFDwhgtCAQ_KRUZAyrYQ40n4xxmN61Kw1ZBJOuhbNEstjxlnTpoD8PgkatWyyVC2l6EQ1nb1DBFHQrXfYX1IXd4VnuQZP8yUABfQeP2ZDgai_K_v5fHcZBX_ld9_zo49K8y3XN5K4LyCypWVlY",
        description: "Comprehensive electrical installation and automation system integration for the new turbine expansion project, ensuring 99.9% uptime reliability.",
        fullDescription: "The Cairo West Power Station project involved a massive overhaul of the existing electrical infrastructure. Our team designed and implemented a custom automation layer that integrates seamlessly with the new generation turbines. Key achievements include a 15% improvement in fuel efficiency and the implementation of a redundant safety system that exceeds international standards. This project serves as a benchmark for industrial automation in the region."
    },
    {
        id: 2,
        title: "Al-Massa Hotel Complex",
        location: "New Capital, Egypt",
        category: "Commercial",
        categoryClass: "commercial",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa9ErI9voqAxE7bPxbO0qPmnAqc7e-ih4a3xmlF70nADlxjTC2eDJrEVT0vGD3HTceMG-WSbaeymQNewax5ri2aeYi_cgnAZaXsREQjuIcA_ax9su5I7ObeNh61142rJTEBXUTlrumROWSVto7mABGgO22OMazT4KDKmgySKSHeC_W3RqMCEjrfxnhVjI9WBdlGEq40UnEojyVzJNIoo-kbdYkNjcsNBGsveQFmVir1bO9alnAgAQU7sTE-tjY-pX3HC5j-ZcwaNk",
        description: "Design and implementation of smart building management systems and emergency power backup solutions for a 500-room luxury hotel.",
        fullDescription: "For the Al-Massa Hotel Complex, Focus TC provided an end-to-end Smart Building solution. We integrated lighting control, climate management, and security systems into a unified dashboard for the facility managers. Additionally, we installed a state-of-the-art uninterruptible power supply (UPS) system capable of supporting critical hotel operations for up to 12 hours during external grid failures."
    },
    {
        id: 3,
        title: "Benban Solar Park Grid",
        location: "Aswan, Egypt",
        category: "Utilities",
        categoryClass: "utilities",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzov0Br4DwyUHbAuZYDUwGDLqL-KjVPH5BJN8JaRXdcACHI9e9kjUQtQFXP81MkWwnLz8tiYIVm5N3xnZEdM1rlJXtin9_Yz2xjJUbc40G_j8Eft83oWp9Az51rl5Fj46UcNwaK4DfSGlmyQF6VNTyTEZbQLDXpOR_WokIyWAgAK65UBt-hhWzKOpw2JocNUWMOeu0mkZ8mj7127bCP-Fxvp7qgn5L8xshZgAyAu0_HJUVjLOlUpfElidwRyybDT0FrvtocoOqnqI",
        description: "High-voltage substation connectivity and distribution network installation for one of the world's largest solar parks.",
        fullDescription: "Our contribution to the Benban Solar Park focused on the complex task of grid synchronization. We managed the installation of five high-voltage substations and nearly 40km of specialized cabling. The grid interface now handles over 1.6 GW of peak renewable energy, funneling clean power into the national Egyptian grid with minimal transmission loss."
    },
    {
        id: 4,
        title: "Smart Factory Upgrade",
        location: "Alexandria, Egypt",
        category: "Industrial",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwYINHQ3hHGA66zIFZH8tX5YlK1bTXU350pCuFSUX4TceKCHWuM8gNUvrV38-Wo8jLtDLzjw4VqVvQhiaWQplXC4CvmLfxMzpmhtcp1j77Ye69qz8Ey_CdJbQldlxUGQk8VgsZyeyFGu1yfPXXGHUNYAigTzer_Ho_t7PvyjNKTtEXvdCXmBhtoHFSsScXxY9-iOSHYMGXG7m2n6kEjKefXntmURAWEuZ7I0xw8n0YJoJpfnXt2ifigw7bN9kZ5-rcN5vgZHAeUCw",
        description: "Retrofitting legacy manufacturing lines with IoT sensors and real-time monitoring dashboards for predictive maintenance.",
        fullDescription: "This digital transformation project brought a 30-year-old manufacturing plant into the Industry 4.0 era. By installing over 1,200 IoT sensors, we enabled predictive maintenance that reduced unplanned downtime by 40%. The factory now operates with a 'digital twin' that allows engineers to simulate changes before they are implemented on the physical line."
    },
    {
        id: 5,
        title: "Business Bay Tower",
        location: "Dubai, UAE",
        category: "Commercial",
        categoryClass: "commercial",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVWniBaFY6YQpiU_RRo82EwkC0WKixKASbRlFT-e8RBHtNV_qAkrUOxV9Ekr4xPEQuJFTrvY4ZKqDOYmrHz6ZUAtOmQsZjUr4tQWzX1QCgL42-XtIjZOj_-SPB0y0NAIVpEBIHA2iMME0LqWbVXxhCoDusrURZ3MgyjpMfLYvdlBzKIZ69MJRKiirsvkDfTrxYo2gidw_FfUZ6lCR61qsruAEOPOkdYh_OaohC-eWmLCkz5pol0EQAk33YSKwcHMjrwA8Sz0l3KjI",
        description: "Full electromechanical contracting for a 45-story commercial tower, including HVAC, fire fighting, and low current systems.",
        fullDescription: "The Business Bay Tower project in Dubai showcased our ability to manage large-scale multi-disciplinary contracts. Focus TC was responsible for all MEP works, including the installation of energy-efficient HVAC systems, advanced fire suppression tech, and the complete low-current infrastructure. The project was completed ahead of schedule and achieved a LEED Gold certification."
    },
    {
        id: 6,
        title: "Water Treatment SCADA",
        location: "Cairo, Egypt",
        category: "Utilities",
        categoryClass: "utilities",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OaFaSMp9NmrcovZJOe6YGUveIPf8BoCCFfFEWyG9V1KP-OwWVsjkDML-sLi96SPxEWmo1ea01Lh7Kmp9rfx2Tzq9GVb-WNDzVDxwHlcVlEAHlmsukXyMDjZmM6Vxj8UMczS2pV1p6FxVYsFoF5CpEqbUN15cS4quLs47XJwCLxfYe0PGKnydxqAG2E2WC2m9t7eORu_5oC6m4MhDu4I8fAKSMI03NiB8oabWdFhtvtocoOqnqI",
        description: "Developing a centralized SCADA system for a municipal water treatment facility to optimize chemical dosing and pump operations.",
        fullDescription: "Our SCADA solution for this water treatment facility provides real-time visualization of the entire purification process. By implementing automated chemical dosing based on sensor feedback, we helped the municipality reduce chemical waste by 25% and optimize electricity usage for high-capacity pumps during off-peak hours."
    }
];

const Categories = ["All", "Industrial", "Commercial", "Utilities"];

const ProjectsGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const handleFilterChange = (category) => {
        if (category === selectedCategory) return;
        setIsAnimating(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setIsAnimating(false);
        }, 300);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    return (
        <section className="projects-grid-section">
            <div className="container">
                <div className="filter-tabs">
                    {Categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => handleFilterChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={`projects-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <div
                                    className="project-image"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                                <div className={`project-category ${project.categoryClass || ''}`}>
                                    {project.category}
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <div className="project-location">
                                    <span className="material-symbols-outlined">location_on</span>
                                    <span>{project.location}</span>
                                </div>
                                <p>{project.description}</p>
                                <button
                                    className="case-study-link"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View Case Study
                                    <span className="material-symbols-outlined">arrow_right_alt</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="load-more">
                    <button className="btn-load-more">Load More Projects</button>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div className="modal-header">
                            <div className="modal-image" style={{ backgroundImage: `url(${selectedProject.image})` }}>
                                <div className={`modal-category ${selectedProject.categoryClass || ''}`}>
                                    {selectedProject.category}
                                </div>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="modal-meta">
                                <div className="modal-location">
                                    <span className="material-symbols-outlined">location_on</span>
                                    {selectedProject.location}
                                </div>
                            </div>
                            <h2>{selectedProject.title}</h2>
                            <div className="modal-divider"></div>
                            <p className="modal-description">
                                {selectedProject.fullDescription}
                            </p>

                            <div className="modal-footer">
                                <button className="btn-enquire" onClick={() => setSelectedProject(null)}>
                                    Enquire About Similar Project
                                </button>
                                <button className="btn-close-text" onClick={() => setSelectedProject(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsGrid;
