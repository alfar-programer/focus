const services = {
    hero: {
        breadcrumbs: [ 'Home', 'Solutions', 'Power' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'Mission-Critical',
        titleAccent: 'Power Infrastructure',
        description: 'Focus Trading & Contracting delivers high-precision power generation and industrial engineering solutions for mission-critical operations.',
        chips: [ '20-3000 KVA Diesel Generators', 'ISO 9001 / ISO 45001', 'Hybrid Ready' ],
        ctaPrimary: 'Request Schematics',
        ctaSecondary: 'View Case Studies',
        stats: [
            { value: '99.99%', label: 'Uptime Guarantee' },
            { value: '50+', label: 'Global Projects' },
            { value: '1.2 GW', label: 'Total Power Delivered' }
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
                description: 'Diesel generator solutions from 20 KVA to 3000 KVA with ATS, grid synchronization, and backup continuity for critical infrastructure.',
                stats: [
                    { icon: 'offline_bolt', label: 'Power Range', value: '20-3000', unit: 'KVA', progress: 85 },
                    { icon: 'verified_user', label: 'Uptime Guarantee', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'bolt', label: 'Power Delivered', value: '1.2', unit: 'GW', subtext: 'Total Delivered Capacity' }
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
                description: 'Integrated mechanical, electrical, and plumbing systems engineered for industrial and commercial facilities.',
                stats: [
                    { icon: 'public', label: 'Operational Regions', value: '2', unit: '', progress: 100, subtext: 'Egypt / Saudi Arabia' },
                    { icon: 'work', label: 'Global Projects', value: '50', unit: '+', progress: 80 },
                    { icon: 'groups', label: 'Satisfied Clients', value: '75', unit: '+', subtext: 'Across Core Sectors' }
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
                description: 'End-to-end electromechanical contracting for power distribution, system integration, and industrial infrastructure delivery.',
                stats: [
                    { icon: 'calendar_month', label: 'Years Experience', value: '6', unit: '+', progress: 70 },
                    { icon: 'workspace_premium', label: 'Quality Standard', value: 'ISO', unit: '9001', progress: 100 },
                    { icon: 'shield_with_heart', label: 'Safety Standard', value: 'ISO', unit: '45001', subtext: 'Certified Compliance' }
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
                description: 'PLC and SCADA integration for industrial monitoring, supervisory control, and real-time data visibility.',
                stats: [
                    { icon: 'precision_manufacturing', label: 'Core Systems', value: 'PLC', unit: '/SCADA', progress: 100 },
                    { icon: 'verified_user', label: 'Uptime Guarantee', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'lan', label: 'MEP Integration', value: 'Enabled', unit: '', subtext: 'Cross-Discipline Coordination' }
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
        lead: 'Engineering precision backed by verified delivery metrics.',
        description: 'Focus combines power generation, automation, and electromechanical execution with ISO-aligned quality and safety standards.',
        statValues: [ '6+', '50+', '75+' ],
        statLabels: [ 'Years Experience', 'Global Projects', 'Satisfied Clients' ],
        sectionLabel: 'Engineering Excellence',
        sectionIntro: 'Our technical scope covers 20-3000 KVA generators, PLC and SCADA systems, and MEP integration, with 1.2 GW delivered and 99.99% uptime commitment.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'Power Capacity Coverage',
                description: 'Our generator portfolio supports industrial power requirements from 20 KVA to 3000 KVA for continuous and backup applications.',
                features: [
                    { icon: 'check_circle', text: '20-3000 KVA Diesel Generator Scope' },
                    { icon: 'check_circle', text: 'ATS and Grid Synchronization Integration' }
                ],
                metric: { value: '20-3000', unit: 'KVA', label: 'Generator Range' }
            },
            {
                id: 2,
                number: '02',
                title: 'Automation Integration',
                description: 'We engineer PLC, SCADA, and HMI architectures for real-time control and industrial process visibility.',
                features: [
                    { icon: 'hub', text: 'PLC Programming and Control Logic' },
                    { icon: 'sync', text: 'SCADA and HMI Integration' }
                ],
                metric: { value: 'PLC', unit: '/SCADA', label: 'Control Scope' }
            },
            {
                id: 3,
                number: '03',
                title: 'Electromechanical & MEP Delivery',
                description: 'Our teams execute electromechanical systems, power distribution, and MEP integration with coordinated field implementation.',
                features: [
                    { icon: 'verified_user', text: 'Electromechanical Contracting Execution' },
                    { icon: 'local_shipping', text: 'MEP Integration and Commissioning' }
                ],
                metric: { value: '2', unit: '', label: 'Operational Regions' }
            },
            {
                id: 4,
                number: '04',
                title: 'Safety and Quality Standards',
                description: 'We align delivery with ISO 9001, ISO 45001, and ISO 8528 generator compliance standards while maintaining a 99.99% uptime service commitment.',
                features: [
                    { icon: 'shield_with_heart', text: 'ISO 45001 Safety Compliance' },
                    { icon: 'workspace_premium', text: 'ISO 9001 and ISO 8528 Alignment' }
                ],
                metric: { value: '99.99%', unit: '', label: 'Uptime Guarantee' }
            }
        ],
        footerVersion: 'FOCUS T&C',
        footerStatus: 'System Active'
    },
    workflow: {
        coordinates: [ 'COORD: 45.922, 12.001', 'SYS: ONLINE', 'GRID: ACTIVE' ],
        scale: [ 'SCALE: 1:100', 'REF: ENG-FLOW-V5', 'STATUS: MONITORING' ],
        badge: 'System Architecture',
        title: '05 // ENGINEERED FLOW',
        description: 'A structured delivery path covering engineering, deployment, commissioning, and maintenance for mission-critical systems.',
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
                title: 'Engineering Assessment',
                subtitle: 'Scope Definition',
                description: 'We define project requirements, operating conditions, and system priorities for power, automation, and electromechanical delivery.',
                duration: '1-2 Weeks',
                techStack: 'Site Audit / Technical Review'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'System Engineering',
                subtitle: 'Design Integration',
                description: 'Our engineering teams finalize generator sizing, PLC and SCADA architecture, and MEP coordination for implementation readiness.',
                duration: '2-4 Weeks',
                techStack: 'Design Packages / Control Architecture'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'Deployment',
                subtitle: 'Installation',
                description: 'Field teams install and integrate electromechanical systems, control panels, and power infrastructure according to approved engineering plans.',
                duration: '2-6 Weeks',
                techStack: 'On-Site Execution / PLC Commission Setup'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'Commissioning',
                subtitle: 'Validation',
                description: 'Integrated testing validates generator performance, PLC and SCADA logic, and overall system readiness before handover.',
                duration: '1-2 Weeks',
                techStack: 'Acceptance Testing / Performance Checks'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'Maintenance',
                subtitle: 'Maintenance',
                description: 'Ongoing maintenance and service support sustain uptime performance and long-term operational reliability.',
                duration: 'Ongoing',
                techStack: 'Preventive Maintenance / Service Support'
            }
        ],
        metrics: [
            { id: 'A1', icon: 'calendar_month', value: '6+', label: 'Years Experience' },
            { id: 'B2', icon: 'work', value: '50+', label: 'Global Projects' },
            { id: 'C3', icon: 'verified_user', value: '99.99%', label: 'Uptime Guarantee' }
        ],
        cta: {
            titleLine: 'Ready to Power Your',
            titleHighlight: 'Next Project?',
            description: 'Partner with Focus for generator, automation, and electromechanical solutions built for mission-critical performance.',
            primary: 'Request a Consultation',
            secondary: 'View Projects'
        }
    }
};

export default services;
