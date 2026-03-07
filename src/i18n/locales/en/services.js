const services = {
    hero: {
        breadcrumbs: [ 'Home', 'Solutions', 'Power' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'Mission-Critical',
        titleAccent: 'Power Infrastructure',
        description: 'High-precision engineering for absolute uptime. We deliver industrial-grade power generation solutions for data centers, manufacturing complexes, and national grid support.',
        chips: [ '800kVA+ Capacity', 'ISO 8528 Certified', 'Hybrid Ready' ],
        ctaPrimary: 'Request Schematics',
        ctaSecondary: 'View Case Studies',
        stats: [
            { value: '99.99%', label: 'Uptime Guarantee' },
            { value: '50+', label: 'Global Projects' },
            { value: '1.2GW', label: 'Power Generated' }
        ],
        cardLabel: 'LIVE MONITORING',
        dataRows: [
            { key: 'Load', value: '84%' },
            { key: 'Temp', value: '62°C' },
            { key: 'Freq', value: '50.0Hz' }
        ],
        diagram: {
            core: 'CORE',
            output: 'OUTPUT: 800V',
            input: 'INPUT: HYBRID'
        }
    },
    overview: {
        sidebarTitle: 'Services Overview',
        sidebarSubtitle: 'Select a domain to view details',
        supportTitle: 'Need Assistance?',
        supportLink: 'Contact Support',
        downloadButton: 'Tech Spec PDF',
        diagramTexts: {
            power: {
                generator: 'GENERATOR UNIT',
                load: 'CRITICAL LOAD',
                ats: 'ATS NODE'
            },
            mep: {
                electrical: 'ELECTRICAL',
                hvac: 'HVAC SYS',
                plumbing: 'PLUMBING',
                hub: 'MEP HUB'
            },
            electro: {
                core: 'CORE HUB',
                electrical: 'ELECTRICAL',
                hvac: 'HVAC SYS'
            },
            automation: {
                plc: 'PLC CONTROLLER',
                plcId: 'ID: PLC-X9',
                scada: 'SCADA HMI',
                scadaId: 'ID: SCADA-01'
            },
            fallback: {
                system: 'SYSTEM'
            }
        },
        services: [
            {
                id: 'power-generators',
                icon: 'bolt',
                title: 'Power Generators',
                subtitle: 'INDUSTRIAL & BACKUP',
                serviceId: '#PWR-GEN-04',
                heading: 'Industrial Power Infrastructure',
                description: 'Reliable, high-efficiency power generation solutions designed for critical infrastructure. We deliver robust backup systems and continuous power supply units tailored to industrial demands.',
                stats: [
                    { icon: 'offline_bolt', label: 'Power Capacity', value: '800', unit: 'kVA', progress: 80 },
                    { icon: 'speed', label: 'Generator Efficiency', value: '98.5', unit: '%', progress: 98.5 },
                    { icon: 'rocket_launch', label: 'Deployment Speed', value: '48', unit: 'hrs', subtext: 'Rapid On-site Setup' }
                ],
                diagramLabels: [ 'FIG 3.0 - POWER FLOW', 'GRID SYNCHRONIZED' ],
                diagramType: 'power'
            },
            {
                id: 'mep-systems',
                icon: 'hvac',
                title: 'MEP Systems',
                subtitle: 'INTEGRATION & CONTROL',
                serviceId: '#MEP-01',
                heading: 'MEP Systems Integration',
                description: 'Precision-engineered mechanical, electrical, and plumbing solutions optimized for large-scale commercial infrastructure. We ensure seamless interoperability between core building systems.',
                stats: [
                    { icon: 'bolt', label: 'System Capacity', value: '50', unit: 'MW', progress: 85 },
                    { icon: 'timer', label: 'Guaranteed Uptime', value: '99.9', unit: '%', progress: 99 },
                    { icon: 'groups', label: 'Engineering Team', value: '45', unit: '+', subtext: 'Certified Specialists' }
                ],
                diagramLabels: [ 'FIG 3.0 - MEP FLOW', 'SYSTEM ACTIVE' ],
                diagramType: 'mep'
            },
            {
                id: 'electromechanical',
                icon: 'electrical_services',
                title: 'Electromechanical Contracting',
                subtitle: 'SYSTEMS & POWER',
                serviceId: '#EM-01',
                heading: 'Integrated Building Systems',
                description: 'End-to-end electromechanical solutions designed for high-performance infrastructure. We unify electrical, HVAC, and plumbing networks into a single, cohesive operational framework for maximum efficiency.',
                stats: [
                    { icon: 'hub', label: 'Integration Coverage', value: '100', unit: '%', progress: 100 },
                    { icon: 'precision_manufacturing', label: 'Installation Accuracy', value: '99.8', unit: '%', progress: 99.8 },
                    { icon: 'rocket_launch', label: 'Delivery Efficiency', value: 'High', unit: '', subtext: 'Optimized Workflow' }
                ],
                diagramLabels: [ 'FIG 3.0 - SYSTEM MAP', 'LIVE SYNC' ],
                diagramType: 'electromechanical'
            },
            {
                id: 'automation',
                icon: 'precision_manufacturing',
                title: 'Automation & Instrumentation',
                subtitle: 'SCADA & PLC SYSTEMS',
                serviceId: '#AUTO-01',
                heading: 'Industrial Control Intelligence',
                description: 'Advanced PLC, SCADA, and DCS architectures designed for mission-critical industrial environments. We deliver real-time data acquisition and precise automated control systems.',
                stats: [
                    { icon: 'speed', label: 'Control Response', value: '10', unit: 'ms', progress: 95 },
                    { icon: 'verified_user', label: 'System Uptime', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'my_location', label: 'Sensor Accuracy', value: '+/- 0.01', unit: '%', subtext: 'Calibrated Precision' }
                ],
                diagramLabels: [ 'FIG 3.0 - SCADA LOOP', 'ACTIVE FEED' ],
                diagramType: 'automation'
            }
        ]
    },
    whyFocus: {
        badge: 'Strategic Advantage',
        title: 'WHY',
        titleAccent: 'FOCUS',
        lead: 'Engineering precision meets rapid execution.',
        description: 'We deliver complex contracting solutions where failure is not an option. From critical infrastructure to sustainable frameworks, our approach is defined by rigorous standards and technical superiority.',
        statValues: [ '24h', '100%', 'ISO' ],
        statLabels: [ 'Mobilization', 'Compliance', 'Certified' ],
        sectionLabel: 'Engineering Excellence',
        sectionIntro: 'Our operational framework is built on precision, speed, and integrated supply chains. We do not just build infrastructure; we engineer certainty in an uncertain world.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'Rapid Response Capability',
                description: 'Our agile operational framework ensures immediate deployment of resources and specialized engineering teams to critical infrastructure sites within 24 hours of project initiation. We utilize pre-staged logistics hubs to minimize lead times.',
                features: [
                    { icon: 'check_circle', text: '24/7 Command Center Activation' },
                    { icon: 'check_circle', text: 'Pre-approved Vendor Network' }
                ],
                metric: { value: '24', unit: 'hr', label: 'Deploy Time' }
            },
            {
                id: 2,
                number: '02',
                title: 'Collaborative Engineering',
                description: 'Our multidisciplinary approach breaks down traditional silos through advanced BIM-led synchronization. By integrating structural, mechanical, and electrical teams into a unified digital environment, we eliminate clashes before they manifest on site.',
                features: [
                    { icon: 'hub', text: 'Cross-Disciplinary Coordination' },
                    { icon: 'sync', text: 'Real-time Digital Twin Updates' }
                ],
                metric: { value: '100%', unit: '', label: 'Team Synergy' }
            },
            {
                id: 3,
                number: '03',
                title: 'Integrated Supply Chain',
                description: 'We leverage a robust global network of pre-vetted manufacturers and logistics partners to ensure material availability regardless of market volatility. Our vertical integration strategy secures critical path items months in advance.',
                features: [
                    { icon: 'verified_user', text: 'Pre-vetted Vendor Reliability' },
                    { icon: 'local_shipping', text: 'Automated Logistics Tracking' }
                ],
                metric: { value: '45+', unit: '', label: 'Global Hubs' }
            },
            {
                id: 4,
                number: '04',
                title: 'Safety and Quality Standards',
                description: 'Our Zero-Harm philosophy is embedded in every operational layer. We rigorously adhere to ISO 45001 and ISO 9001 standards, employing predictive safety analytics to neutralize risks before they arise.',
                features: [
                    { icon: 'shield_with_heart', text: 'Mission-Critical Safety Protocols' },
                    { icon: 'workspace_premium', text: 'ISO 9001 and 45001 Compliant' }
                ],
                metric: { value: 'Zero', unit: '', label: 'Harm Certified' }
            }
        ],
        footerVersion: 'Focus System v2.0',
        footerStatus: 'System Active'
    },
    workflow: {
        coordinates: [ 'COORD: 45.922, 12.001', 'SYS: ONLINE', 'GRID: ACTIVE' ],
        scale: [ 'SCALE: 1:100', 'REF: ENG-FLOW-V5', 'STATUS: MONITORING' ],
        badge: 'System Architecture',
        title: '05 // ENGINEERED FLOW',
        description: 'A visual breakdown of our rigorous engineering methodology. From concept to commissioning, every phase is data-driven.',
        activeSuffix: ' // ACTIVE',
        phaseActive: 'PHASE: ACTIVE',
        phaseLabel: 'PHASE',
        durationLabel: 'Duration',
        techStackLabel: 'Tech Stack',
        viewDetails: 'View Details',
        prev: 'Prev',
        next: 'Next',
        steps: [
            {
                id: 1,
                icon: 'chat_bubble_outline',
                title: 'Consultation',
                subtitle: 'Initial Scoping',
                description: 'We begin with comprehensive stakeholder interviews and requirement gathering. This phase establishes project scope, constraints, and success metrics through detailed analysis.',
                duration: '1-2 Weeks',
                techStack: 'Jira / Miro'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'Engineering',
                subtitle: 'Precision Engineering',
                description: 'We transform conceptual constraints into operational reality through rigorous CAD modeling and stress testing. Every component is simulated for peak load performance.',
                duration: '4-6 Weeks',
                techStack: 'AutoCAD / PySim'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'Implementation',
                subtitle: 'Assembly',
                description: 'Professional installation and integration with existing systems. Our certified technicians ensure seamless deployment with minimal operational disruption.',
                duration: '3-4 Weeks',
                techStack: 'Fusion 360 / PLC'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'Commissioning',
                subtitle: 'Testing',
                description: 'Rigorous testing protocols and performance validation. We verify all systems meet or exceed specifications before handover.',
                duration: '2-3 Weeks',
                techStack: 'LabVIEW / TestStand'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'Support',
                subtitle: 'Maintenance',
                description: '24/7 monitoring and proactive maintenance. Our support team ensures optimal performance and rapid response to any issues.',
                duration: 'Ongoing',
                techStack: 'Azure IoT / Teams'
            }
        ],
        metrics: [
            { id: 'A1', icon: 'description', value: '142', label: 'Technical Drawings' },
            { id: 'B2', icon: 'memory', value: '850+', label: 'Simulations Run' },
            { id: 'C3', icon: 'verified_user', value: '100%', label: 'Safety Compliance' }
        ],
        cta: {
            titleLine: 'Ready to Power Your',
            titleHighlight: 'Next Project?',
            description: 'Partner with Focus-TC for industry-leading automation solutions that drive efficiency and growth.',
            primary: 'Request a Consultation',
            secondary: 'View Projects'
        }
    }
};

export default services;
