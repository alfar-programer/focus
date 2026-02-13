import React from 'react';
import './Section5.css';

const Section5 = () => {
    return (
        <section className="section5-container">
            {/* Intro Section */}
            <div className="section5-intro">
                <p className="section5-label">Core Capabilities</p>
                <h1 className="section5-title">
                    Engineering <span>excellence</span> through precision and innovation.
                </h1>
            </div>

            {/* Service Rows */}
            <div className="section5-services">
                {/* Service 1: MEP Systems */}
                <article className="section5-service-row">
                    <div 
                        className="section5-service-bg"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBm2qr7ETNTMxc8E6JWroVZEfsoV3U_0sv-Kvr3PioI2CBBZDkjrKW7WnC2UNEmEjLci3kVzVhadF7DyQw6E8PPOL-s8QvHpNhj4_tzj98coXauSBNPlGN1PpX7BDN1JOkMZdyZHVzLTO5pkSMdvrcKXWSL0Bn0W3GJer2bu_8uwbeWZze5kWzcZ1Xh_Td1jH06vPIg7JY8wbqmLtokkZHTultEN7Y3eGdUTaPtSkVfAXAHBa0elwpsbNfj3QEsxT8kvV6APqkt6ns')`
                        }}
                    />
                    <div className="section5-service-content">
                        <div className="section5-service-main">
                            <div className="section5-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div className="section5-service-title-wrap">
                                <div className="section5-service-number">
                                    <span>01</span>
                                    <svg className="section5-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                                <h2>MEP Systems</h2>
                            </div>
                        </div>
                        <div className="section5-service-desc">
                            <p>Comprehensive mechanical, electrical, and plumbing solutions designed for complex, high-performance structures.</p>
                            <span className="section5-explore">
                                Explore MEP 
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </article>

                {/* Service 2: Infrastructure */}
                <article className="section5-service-row">
                    <div 
                        className="section5-service-bg"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDj3lr-Cyz3K8u-4YhHplK42ELPQBa9nzylO2h7Pd2UInNtk8cD10nPTWlZK-fPM4fY9gQiu3uKOj6eT8PmQHcfaeBssZxzkHrCSjgJE-yz_lBTzHR_hgzezeVen-zwsi7Ug6JBhuNbQdJcHkSzX1znbmFjGhZgPCvQNvtCBW8HVnsVhRb0OcJwNMfiqFjIY2zjv4EXpUjYt-qpEWzipoBW_G9ipNzsGbUJr1ZQYxqmKLrJPR043Fvgj83HtFKeXoBT0X5ErmcK2nk')`
                        }}
                    />
                    <div className="section5-service-content">
                        <div className="section5-service-main">
                            <div className="section5-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                </svg>
                            </div>
                            <div className="section5-service-title-wrap">
                                <div className="section5-service-number">
                                    <span>02</span>
                                    <svg className="section5-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                                <h2>Infrastructure</h2>
                            </div>
                        </div>
                        <div className="section5-service-desc">
                            <p>Urban planning and large-scale civil frameworks connecting modern cities through sustainable engineering.</p>
                            <span className="section5-explore">
                                Explore Infrastructure
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </article>

                {/* Service 3: Engineering */}
                <article className="section5-service-row">
                    <div 
                        className="section5-service-bg"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEAzKk4PC78vDP-xLU2Bg41XlwRe-J1YyQdzpJ_dNnlNqSZ06M1YCIItyzAJOqkzJwDCyzogmQwhoD-BqNaQfaKA307EwEFvNRKVWbYATexrMgeEMm3FA7BuoGwE1o7BezgDUJHJ9eA6X2HjNPxI_VEc0H3ix_OMSFmx1mdmqfJTrqoY4l4U2MXTQy3Rj5Nd2MVqt4VSKLWDCmiehxpF6SHzmTAhX2xmLQ1mG4k9el5LOZMeKBvdQDySOC10td_S7Dmghneb7YKmw')`
                        }}
                    />
                    <div className="section5-service-content">
                        <div className="section5-service-main">
                            <div className="section5-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                </svg>
                            </div>
                            <div className="section5-service-title-wrap">
                                <div className="section5-service-number">
                                    <span>03</span>
                                    <svg className="section5-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                                <h2>Engineering</h2>
                            </div>
                        </div>
                        <div className="section5-service-desc">
                            <p>Advanced structural analysis and turnkey design-build execution for industrial and commercial sectors.</p>
                            <span className="section5-explore">
                                Explore Engineering
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </article>

                {/* Service 4: Consulting */}
                <article className="section5-service-row">
                    <div 
                        className="section5-service-bg"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWCbv1JrM7kOpKGQ1h1vcfeMhoo2SvIeTNOXMpXb46_4BZb_8nHkodFuoBHgHUBDrJk9zTWd9cyYeyNFg7mRkKeqgh7SEls5woSJnzxcqeT1ilnMlDSmvPCsyLa1cFxRDEnie06ofeCEuhl362bQV0UR9EZvpFPBOjDQ2_IICWY5G3tJi-3a9M7Eo9mQAQXmrUTOcRqtEV8Qju5Vfj3lD_ldkx9hRsZ-1_7WHZuVFj66MvZiFEeP6mfCY7Dv4r4czc2gQ4VuDhHQs')`
                        }}
                    />
                    <div className="section5-service-content">
                        <div className="section5-service-main">
                            <div className="section5-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-9a2 2 0 0 1 4 0v9"/>
                                </svg>
                            </div>
                            <div className="section5-service-title-wrap">
                                <div className="section5-service-number">
                                    <span>04</span>
                                    <svg className="section5-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </div>
                                <h2>Consulting</h2>
                            </div>
                        </div>
                        <div className="section5-service-desc">
                            <p>Strategic oversight and technical consultancy to ensure projects are delivered on time and to specification.</p>
                            <span className="section5-explore">
                                Explore Consulting
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Section5;
