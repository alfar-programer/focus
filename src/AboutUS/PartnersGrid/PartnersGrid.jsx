import React, { useState } from 'react';
import './PartnersGrid.css';

const egyptPartners = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBLLpp_yfCUnV3j-1br2buSyHrUwjVh-fPcNqNt0XTD9KcPtHHUmwHbKuYyymN88GA11KPAa6bqE2kLYakdOfiuZaTszQWnX5pOBZp6GmTctYJ5VINLQkbh6xcdiDONFLZPA8MZzC0zKZILQPZHVMRnIo2WCLQh7kRxkVQEqbggaVApUZ4mqM1cKkTMroa8RGHS2Rid0LJRxgEQ4U4zk6k8eYVZmzsJgurpTb3Yl8DVfG1Io9NF6Uxb8od1R0AX-5YhassikMVjvVbN',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuArFEHw_FIN-qmRGdzCq8QKizaSCCY5FLhJjzggzn2ujzpBQx54Q__fJ0jGaMQh5LuDcgk8gKrfEY9i4bjDFsYPJ0gJG9RJtBIo5-_2mvX_yAzFK3LBpUkr40KHs8s3R8sqiiZM1Xx8LB_Et37Z4lZza9LWP66aJ5uekzFIVnoo8r5NqpyF0HhqqTdwXJZbhTAlBAgWMbvobtvrz-rKYv4h_urZMm-NZJfANLDNc77soF2by1RX4WzVOlFpkKuEcLpTrDYNyrXkFyJj',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAJZE-KevAR1zhch9RRhDWKADrpBuXpmeRuiMiwYNPfQ6WACnYuCNm9T17nQSPGX5GBDMbowTPlsels8cLGt5F_t1-rzo0RdTnaPUK2ctxoYLxM5xZPRn0EfMtM6F-ZZpf8BLWedHyHjigXQiaPn-CgsSQk_EwAB1JMRRPsdnstTZ6s63C9INmDu2i4KIBaVpA67Gr_YsB9ZZ9PhepGZAIw0l596SS3Iq1sRBFfyPnMtu_oA9kO7_pl4MH348H2Xt8O3e7cehxgz94K',
    ];

const ksaPartners = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDtUTxRD17SGG_66OROKM5gWnW964KmcZxCmhKUQfqdH310_Fk2W_5lwS2gxj9jeIwk0lAQFqJDNktcobubChRtWke6Cqmf-mccYV_omW-inLKjuRaFuKdRb35w92jyo50VewU1yAioOEulc-D34KoNFA_p0uEdA1X3ZDBOH7lRCIDp0-_J9z5xARGkQlSBBEZ1wrU91obm4kQHTIY3QaVO1cRlURTkP0ifpM9F77A6BNlHWr5oFEHhZabZJH4_RlgxT5MDU7Sf7_-z',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDDB1KEcaQt2sMISlvJeNRbD6VJxZhF_pHSFwjyF06wjjKfmdCckXquyw1iDa42mkcoQvt4uMlZuAW3xu8rqCJDNzvQAzkesKmm13NRtLorKa1qq5NnfzsJUDuJkV8Qd8CsG7Y9rg7x3yBiQccG0LG9Co5qCoQ4db1WsPqN1089YwhOwH9hy2O5dWcjoGWK4KR9g0BlEpLjhrNXI_A_jgZyzBimVlDuIj8WB83V3NkEtqRbeuS1O_DuFz7nucjTnmiQXZ5sYp5g6BU1',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBLLpp_yfCUnV3j-1br2buSyHrUwjVh-fPcNqNt0XTD9KcPtHHUmwHbKuYyymN88GA11KPAa6bqE2kLYakdOfiuZaTszQWnX5pOBZp6GmTctYJ5VINLQkbh6xcdiDONFLZPA8MZzC0zKZILQPZHVMRnIo2WCLQh7kRxkVQEqbggaVApUZ4mqM1cKkTMroa8RGHS2Rid0LJRxgEQ4U4zk6k8eYVZmzsJgurpTb3Yl8DVfG1Io9NF6Uxb8od1R0AX-5YhassikMVjvVbN',
   ];

const features = [
    {
        icon: 'hub',
        title: 'Regional Hubs',
        description: 'Strategically located offices in Cairo and Alexandria to serve the Egyptian industrial sector with 24/7 support.',
    },
    {
        icon: 'verified',
        title: 'Certified Experts',
        description: 'Our partners are vetted through rigorous quality assurance programs ensuring top-tier engineering standards.',
    },
    {
        icon: 'rocket_launch',
        title: 'Growth Impact',
        description: 'Facilitating over 50+ major infrastructure projects across the North African region annually.',
    },
];

const PartnersGrid = () => {
    const [activeRegion, setActiveRegion] = useState('egypt');

    const currentPartners = activeRegion === 'egypt' ? egyptPartners : ksaPartners;

    return (
        <section className="partners-grid-section">
            <div className="partners-grid-background" />
            
            <div className="partners-grid-container">
                {/* Header */}
                <div className="partners-grid-header">
                    <h1 className="partners-grid-title">
                        Strategic <span className="partners-highlight">Partnerships</span>
                    </h1>
                    <p className="partners-grid-subtitle">
                        Driving industrial excellence through global collaboration and localized expertise in the MENA region.
                    </p>
                    
                    {/* Region Tabs */}
                    <div className="partners-region-tabs">
                        <button 
                            className={`partners-tab ${activeRegion === 'ksa' ? 'partners-tab-active' : ''}`}
                            onClick={() => setActiveRegion('ksa')}
                        >
                            KSA
                        </button>
                        <button 
                            className={`partners-tab ${activeRegion === 'egypt' ? 'partners-tab-active' : ''}`}
                            onClick={() => setActiveRegion('egypt')}
                        >
                            Egypt
                        </button>
                    </div>
                </div>
                
                {/* Marquee Logos */}
                <div className="partners-marquee-wrapper" key={activeRegion}>
                    <div className="partners-marquee">
                        <div className="partners-marquee-track">
                            {[...currentPartners, ...currentPartners].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Partner ${(index % 8) + 1}`}
                                    className="partner-logo"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Features Grid */}
                <div className="partners-features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="partners-feature-card">
                            <div className="partners-feature-header">
                                <span className="partners-feature-icon material-symbols-outlined">
                                    {feature.icon}
                                </span>
                                <h3 className="partners-feature-title">{feature.title}</h3>
                            </div>
                            <p className="partners-feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
                
                {/* Footer */}
                <div className="partners-grid-footer">
                    <div className="partners-footer-line" />
                    <p className="partners-footer-text">
                        Powered by trusted partnerships across the region
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PartnersGrid;
