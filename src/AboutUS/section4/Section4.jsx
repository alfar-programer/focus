import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section4.css';

gsap.registerPlugin(ScrollTrigger);

const offices = [
    {
        id: 'ksa',
        country: 'Saudi Arabia',
        flag: '🇸🇦',
        tag: 'KSA HQ',
        name: 'Raya Business Center',
        address: '6177 67 St, Dammam 34327',
        region: 'Eastern Province',
        coordinates: '26.4207° N, 50.0888° E',
        status: 'ACTIVE',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.7!2d50.0888!3d26.4207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5b7!2sRaya+Business+Center%2C+Dammam!5e0!3m2!1sen!2ssa!4v1'
    },
    {
        id: 'eg',
        country: 'Egypt',
        flag: '🇪🇬',
        tag: 'EG HQ',
        name: 'City Stars Towers',
        address: 'Tower No. 7, First 6th of October\n6th of October City, Giza 3225014',
        region: 'Giza Governorate',
        coordinates: '29.9697° N, 30.9247° E',
        status: 'ACTIVE',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d30.9247!3d29.9697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585!2sCity+Stars+Towers%2C+6th+October!5e0!3m2!1sen!2seg!4v1'
    }
];

const Section4 = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.locations-header',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.locations-header',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.8,
                        delay: i * 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="locations-section" ref={sectionRef}>
            <div className="locations-grid-overlay" />

            <div className="locations-inner">
                {/* Header */}
                <div className="locations-header">
                    <span className="locations-label">Section 05</span>
                    <h2 className="locations-title">
                        OUR <span className="loc-highlight">OFFICES.</span>
                    </h2>
                    <p className="locations-subtitle">
                        Dual-region presence — engineered for local expertise and global reach.
                    </p>
                    <div className="locations-accent-line" />
                </div>

                {/* Office Cards */}
                <div className="offices-grid">
                    {offices.map((office, i) => (
                        <div
                            key={office.id}
                            className="office-card"
                            ref={el => cardsRef.current[i] = el}
                        >
                            {/* Card Header */}
                            <div className="card-top">
                                <div className="card-tag-row">
                                    <span className="office-flag">{office.flag}</span>
                                    <span className="office-tag">{office.tag}</span>
                                    <span className="office-status">
                                        <span className="status-pulse" />
                                        {office.status}
                                    </span>
                                </div>
                                <h3 className="office-name">{office.name}</h3>
                                <p className="office-country">{office.country} · {office.region}</p>
                            </div>

                            {/* Map Embed */}
                            <div className="map-wrapper">
                                <iframe
                                    title={`${office.name} Map`}
                                    className="office-map"
                                    src={office.mapSrc}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="map-overlay-corner map-corner-tl" />
                                <div className="map-overlay-corner map-corner-tr" />
                                <div className="map-overlay-corner map-corner-bl" />
                                <div className="map-overlay-corner map-corner-br" />
                            </div>

                            {/* Address Info */}
                            <div className="card-bottom">
                                <div className="address-row">
                                    <span className="material-symbols-outlined addr-icon">location_on</span>
                                    <p className="office-address">{office.address}</p>
                                </div>
                                <div className="coord-row">
                                    <span className="coord-label">COORD</span>
                                    <span className="coord-value">{office.coordinates}</span>
                                </div>
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(office.name + ', ' + office.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="directions-btn"
                                >
                                    <span>Get Directions</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section4;
