const about = {
    section1: {
        status: 'System Status: Operational',
        titlePrefix: 'OUR ',
        titleHighlight: 'Journey',
        description: 'A clear timeline of how Focus has grown, expanded capabilities, and delivered stronger engineering outcomes year after year.',
        stats: [
            { label: 'Milestones', value: '42+' },
            { label: 'Active Nodes', value: '128' },
            { label: 'Precision Rate', value: '99.9%' }
        ],
        milestones: [
            {
                year: '2020',
                title: 'Foundation in Egypt',
                description: 'Focus for Trading & Contracting was established in Egypt, setting the foundation for our engineering work.',
                icon: 'foundation',
                protocols: [ 'FTC-01: Establishment', 'Egypt Market Entry' ],
                reverse: false
            },
            {
                year: '2021',
                title: 'Consolidation of Operations',
                description: 'We strengthened internal systems and delivery workflows to support a growing project pipeline.',
                icon: 'architecture',
                protocols: [ 'Operational Efficiency', 'Process Optimization' ],
                reverse: true
            },
            {
                year: '2022',
                title: 'After-Sales Service Established',
                description: 'A dedicated after-sales department was launched to provide long-term maintenance and technical support.',
                icon: 'engineering',
                protocols: [ 'Client Success', 'Technical Support' ],
                reverse: false
            },
            {
                year: '2023',
                title: 'Leading Energy Provider',
                description: 'Focus became one of the leading energy solution providers in Egypt, reaching key market benchmarks.',
                icon: 'bolt',
                protocols: [ 'Market Leadership', 'Energy Standards' ],
                reverse: true
            },
            {
                year: '2024',
                title: 'Expansion into Saudi Arabia',
                description: 'We expanded into Saudi Arabia and established our regional headquarters in Dammam.',
                icon: 'public',
                protocols: [ 'Regional Expansion', 'KSA Operations' ],
                reverse: false

            },
            {
                year: '2025',
                title: 'AL Faddaghi Partnership',
                description: 'We formed a strategic partnership with AL Faddaghi Industries to support larger-scale industrial delivery.',
                icon: 'handshake',
                protocols: [ 'Strategic Alliance', 'Industrial Scale' ],
                reverse: true,
                highlight: true
            }
        ],
        blueprint: [
            'Ref: FTC-SYSTEM-001',
            'Coord: 25.2769° N, 55.2962° E',
            'Scale: 1:1,000,000'
        ]
    },
    section2: {
        domainLabel: 'Technical Domains',
        titleStart: 'Expertise and ',
        titleHighlight: 'Capabilities',
        intro: 'Our specialized divisions deliver practical engineering solutions for power, automation, and industrial infrastructure projects.',
        downloadSpecs: 'Download Technical Specifications',
        metricsHeading: 'Technical Metrics',
        tabs: [
            { id: 'power', label: 'Power Systems', icon: 'bolt' },
            { id: 'electro', label: 'Electromechanical', icon: 'settings_input_component' },
            { id: 'auto', label: 'Automation', icon: 'precision_manufacturing' },
            { id: 'infra', label: 'Infrastructure', icon: 'foundation' }
        ],
        content: {
            power: {
                title: 'Advanced Power Infrastructure',
                badge: 'Core Specialty',
                description: 'We design and deploy electrical infrastructure with strong reliability targets, including Tier IV readiness and sustainable energy management.',
                features: [
                    { title: 'Substation Design', desc: 'End-to-end engineering for high-voltage distribution networks.', icon: 'subtitles' },
                    { title: 'Sustainable Grid', desc: 'Integration of renewable sources and smart metering systems.', icon: 'energy_savings_leaf' },
                    { title: 'Tier IV Compliance', desc: 'Structured compliance for mission-critical facilities.', icon: 'verified_user' },
                    { title: 'HV/LV Maintenance', desc: 'Continuous support and preventive monitoring services.', icon: 'engineering' }
                ],
                metrics: [
                    { value: '99.99%', label: 'System Reliability', desc: 'Average uptime maintained across 45+ enterprise deployments.', icon: 'radar' },
                    { value: '500MW+', label: 'Managed Capacity', desc: 'Total power distribution capacity engineered and under management.', icon: 'power' },
                    { value: '12', label: 'Global Tier IV Sites', desc: 'High-availability data center sites certified across EMEA and APAC.', icon: 'public' }
                ]
            },
            electro: {
                title: 'Electromechanical Solutions',
                badge: 'Industrial Grade',
                description: 'Integrated mechanical and electrical systems for large-scale projects, designed for smooth operation and better efficiency.',
                features: [
                    { title: 'HVAC Systems', desc: 'Precision climate control for industrial and data center environments.', icon: 'ac_unit' },
                    { title: 'Pumping Stations', desc: 'High-capacity fluid management and distribution solutions.', icon: 'water_drop' }
                ],
                metrics: [
                    { value: '150+', label: 'Units Installed', desc: 'High-performance electromechanical units deployed and maintained.', icon: 'settings' }
                ]
            },
            auto: {
                title: 'Industrial Automation',
                badge: 'Smart Tech',
                description: 'Automation and control systems that improve production performance and strengthen operational safety through intelligent monitoring.',
                features: [
                    { title: 'SCADA Systems', desc: 'Real-time data acquisition and supervisory control solutions.', icon: 'monitoring' },
                    { title: 'Robotic Integration', desc: 'Workflow optimization through advanced robotic integration.', icon: 'smart_toy' }
                ],
                metrics: [
                    { value: '40%', label: 'Efficiency Gain', desc: 'Average efficiency increase measured after automation implementation.', icon: 'trending_up' }
                ]
            },
            infra: {
                title: 'Civil Infrastructure',
                badge: 'Built for Scale',
                description: 'Foundational and structural engineering for complex infrastructure projects, from underground works to high-rise frameworks.',
                features: [
                    { title: 'Site Preparation', desc: 'Comprehensive grading and foundation engineering.', icon: 'agriculture' },
                    { title: 'Structural Integrity', desc: 'Advanced material testing and seismic-resilient design.', icon: 'architecture' }
                ],
                metrics: [
                    { value: '2M+', label: 'Sq Ft Constructed', desc: 'Total foundational and structural footprint delivered.', icon: 'square_foot' }
                ]
            }
        }
    },
    section3: {
        sectionLabel: 'Section 04',
        titleStart: 'OUR CORE ',
        titleHighlight: 'VALUES.',
        navLabel: 'Navigate',
        slideLabel: 'Slide',
        progressStart: 'Initiation',
        progressEnd: 'Completion',
        values: [
            {
                id: '01',
                title: 'Engineering Precision',
                desc: 'We approach every scope with technical discipline, because small details create major performance differences.',
                icon: 'precision_manufacturing',
                tag: 'Explore Depth',
                class: 'precision-slide'
            },
            {
                id: '02',
                title: 'Industrial Innovation',
                desc: 'We apply modern tools like BIM and intelligent planning systems to deliver projects more efficiently.',
                icon: 'memory',
                tag: 'View Tech Stack',
                class: 'innovation-slide'
            },
            {
                id: '03',
                title: 'Unwavering Integrity',
                desc: 'Trust and safety guide every engagement, from first discussions through final handover.',
                icon: 'verified_user',
                tag: 'Verified Status',
                class: 'integrity-slide'
            },
            {
                id: '04',
                title: 'Sustainable Infrastructure',
                desc: 'We plan with long-term environmental impact in mind and integrate sustainable practices where they add value.',
                icon: 'eco',
                tag: 'Sustainability',
                class: 'sustainable-slide'
            },
            {
                id: '05',
                title: 'Collaborative Excellence',
                desc: 'We work as one team with clients, consultants, and field stakeholders to keep delivery aligned.',
                icon: 'groups',
                tag: 'Team Success',
                class: 'excellence-slide'
            }
        ]
    },
    section4: {
        sectionLabel: 'Section 05',
        titleStart: 'OUR ',
        titleHighlight: 'OFFICES.',
        subtitle: 'Our two-region presence combines local responsiveness with broader regional coverage.',
        coordLabel: 'COORD',
        directions: 'Get Directions',
        offices: [
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
        ]
    },
    section5: {
        badge: 'About Focus',
        headlineStart: 'Engineering Identity',
        headlineAccent: 'Through Precision',
        body: 'We build practical engineering solutions with clear standards, disciplined execution, and a long-term performance mindset.',
        analytics: 'System Analytics',
        features: [
            { label: 'Methodology', value: 'Strategic Design' },
            { label: 'Execution', value: 'Technical Excellence' },
            { label: 'Infrastructure', value: 'Future-Oriented Systems' },
            { label: 'Foundation', value: 'Structured Innovation' }
        ],
        stats: [
            { end: 24, suffix: 'k+', label: 'Deployments' },
            { end: 99.9, suffix: '%', label: 'Precision', decimals: 1 },
            { end: 12, suffix: '+', label: 'Global Hubs' },
            { end: null, suffix: '∞', label: 'Innovation' }
        ]
    },
    partners: {
        titleStart: 'Strategic ',
        titleHighlight: 'Partnerships',
        subtitle: 'We deliver stronger outcomes through trusted regional partnerships and aligned technical teams.',
        regions: {
            ksa: 'KSA',
            egypt: 'Egypt'
        },
        tabs: {
            partners: 'Partners',
            customers: 'Key Customers'
        },
        features: [
            {
                icon: 'hub',
                title: 'Regional Hubs',
                description: 'Offices in Cairo and Dammam positioned to support high-availability industrial operations.'
            },
            {
                icon: 'verified',
                title: 'Certified Experts',
                description: 'Our partners are vetted through strict quality assurance processes and engineering standards.'
            },
            {
                icon: 'rocket_launch',
                title: 'Growth Impact',
                description: 'Supporting more than 50 major infrastructure projects across North Africa and the Gulf each year.'
            }
        ],
        footer: 'Powered by trusted partnerships across the region'
    },
    section_iso: {
        title: 'ISO Certificates',
        subtitle: 'We are ISO certified',
        description: 'Our commitment to quality, environmental responsibility, and occupational health and safety is backed by internationally recognized certifications.',
        certificates: [
            {
                id: 'iso9001',
                title: 'ISO 9001',
                standard: 'Quality Management System',
                description: 'Requirement for a quality management system.'
            },
            {
                id: 'iso14001',
                title: 'ISO 14001',
                standard: 'Environmental Management System',
                description: 'Environmental management standards to help organizations minimize their impact.'
            },
            {
                id: 'iso45001',
                title: 'ISO 45001',
                standard: 'Occupational Health & Safety Management',
                description: 'Guidance to improve employee safety, reduce workplace risks.'
            }
        ]
    }
};

export default about;

