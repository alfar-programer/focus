const services = {
    hero: {
        breadcrumbs: [ 'Home', 'Solutions', 'Power' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'Mission-Critical',
        titleAccent: 'Power Infrastructure',
        description: 'Focus Trading & Contracting designs and delivers power and industrial engineering solutions for operations that need to stay online.',
        chips: [ '20-3000 KVA Diesel Generators', 'ISO 9001 / ISO 45001', 'Hybrid Ready' ],
        ctaPrimary: 'Request Technical Details',
        ctaSecondary: 'View Case Studies',
        stats: [
            { value: '99.99%', label: 'Uptime Guarantee' },
            { value: '50+', label: 'Global Projects' },
            { value: '1.2 GW', label: 'Total Power Delivered' }
        ],
        cardLabel: 'Live Monitoring',
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
        sidebarSubtitle: 'Choose a service area to explore details',
        supportTitle: 'Need Assistance?',
        supportLink: 'Contact Support',
        downloadButton: 'Tech Spec PDF',
        diagramTexts: {
            power: {
                generator: 'GENERATOR UNIT',
                load: 'CRITICAL LOAD',
                ats: 'ATS PANEL',
                grid: 'UTILITY GRID',
                fuel: 'FUEL TANK'
            },
            electro: {
                panel: 'MAIN PANEL',
                transformer: 'TRANSFORMER',
                hvac: 'HVAC LOAD',
                pumps: 'PUMP SKID',
                mcc: 'MCC'
            },
            automation: {
                plc: 'PLC CONTROLLER',
                plcId: 'ID: PLC-X9',
                io: 'REMOTE I/O',
                sensors: 'FIELD SENSORS',
                scada: 'SCADA HMI',
                scadaId: 'ID: SCADA-01',
                hmi: 'LOCAL HMI',
                network: 'INDUSTRIAL ETHERNET'
            },
            fallback: {
                system: 'SYSTEM'
            }
        },
        services: [
            {
                id: 'power-generators',
                icon: 'bolt',
                title: 'Power Generation',
                subtitle: 'DIESEL GENERATOR SYSTEMS',
                serviceId: '#PWR-01',
                heading: 'Industrial Power Infrastructure',
                description: 'Diesel generator solutions from 20 KVA to 3000 KVA with ATS, grid synchronization, and dependable backup continuity.',
                stats: [
                    { icon: 'offline_bolt', label: 'Power Range', value: '20-3000', unit: 'KVA', progress: 85 },
                    { icon: 'verified_user', label: 'Uptime Guarantee', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'bolt', label: 'Power Delivered', value: '1.2', unit: 'GW', subtext: 'Total Delivered Capacity' }
                ],
                diagramLabels: [ 'FIG 3.0 - GENSET SINGLE LINE', 'ATS / GRID READY' ],
                diagramType: 'power'
            },
            {
                id: 'automation',
                icon: 'precision_manufacturing',
                title: 'SCADA & Industrial Automation',
                subtitle: 'PLC / SCADA SYSTEMS',
                serviceId: '#AUTO-01',
                heading: 'Industrial Control Intelligence',
                description: 'PLC and SCADA integration that gives teams better visibility, stronger control, and faster response on site.',
                stats: [
                    { icon: 'precision_manufacturing', label: 'Core Systems', value: 'PLC', unit: '/SCADA', progress: 100 },
                    { icon: 'verified_user', label: 'Uptime Guarantee', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'lan', label: 'Control Network', value: 'Live', unit: '', subtext: 'Industrial Ethernet Architecture' }
                ],
                diagramLabels: [ 'FIG 3.0 - CONTROL ARCHITECTURE', 'PLC ⇄ SCADA LIVE' ],
                diagramType: 'automation'
            },
            {
                id: 'electromechanical',
                icon: 'electrical_services',
                title: 'ELECTROMECHANICAL CONTRACTING',
                subtitle: 'SYSTEMS INTEGRATION',
                serviceId: '#EM-01',
                heading: 'Integrated Building Systems',
                description: 'End-to-end electromechanical contracting for power distribution, systems integration, and coordinated field delivery.',
                stats: [
                    { icon: 'calendar_month', label: 'Years Experience', value: '6', unit: '+', progress: 70 },
                    { icon: 'workspace_premium', label: 'Quality Standard', value: 'ISO', unit: '9001', progress: 100 },
                    { icon: 'shield_with_heart', label: 'Safety Standard', value: 'ISO', unit: '45001', subtext: 'Certified Compliance' }
                ],
                diagramLabels: [ 'FIG 3.0 - ELECTROMECH COORDINATION', 'SYSTEMS INTERLOCKED' ],
                diagramType: 'electromechanical'
            }
        ]
    },
    whyFocus: {
        badge: 'Strategic Advantage',
        title: 'WHY',
        titleAccent: 'FOCUS',
        lead: 'Proven engineering, measured by real delivery outcomes.',
        description: 'Focus brings power generation, automation, and electromechanical execution together under consistent quality and safety standards.',
        statValues: [ '6+', '50+', '75+' ],
        statLabels: [ 'Years Experience', 'Global Projects', 'Satisfied Clients' ],
        sectionLabel: 'Engineering Excellence',
        sectionIntro: 'Our scope includes 20-3000 KVA generators, PLC and SCADA systems, and MEP integration, backed by 1.2 GW delivered and a 99.99% uptime commitment.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'Power Capacity Coverage',
                description: 'Our generator portfolio covers 20 KVA to 3000 KVA for both continuous-duty and backup applications.',
                features: [
                    { icon: 'check_circle', text: '20-3000 KVA diesel generator coverage' },
                    { icon: 'check_circle', text: 'ATS and grid synchronization integration' }
                ],
                metric: { value: '20-3000', unit: 'KVA', label: 'Generator Range' }
            },
            {
                id: 2,
                number: '02',
                title: 'Automation Integration',
                description: 'We design PLC, SCADA, and HMI architectures that keep industrial processes visible and under control.',
                features: [
                    { icon: 'hub', text: 'PLC programming and control logic' },
                    { icon: 'sync', text: 'SCADA and HMI integration' }
                ],
                metric: { value: 'PLC', unit: '/SCADA', label: 'Control Scope' }
            },
            {
                id: 3,
                number: '03',
                title: 'Electromechanical & MEP Delivery',
                description: 'Our teams execute electromechanical systems, power distribution, and MEP integration through coordinated field work.',
                features: [
                    { icon: 'verified_user', text: 'Electromechanical contracting execution' },
                    { icon: 'local_shipping', text: 'MEP integration and commissioning' }
                ],
                metric: { value: '2', unit: '', label: 'Operational Regions' }
            },
            {
                id: 4,
                number: '04',
                title: 'Safety and Quality Standards',
                description: 'We align delivery with ISO 9001, ISO 45001, and ISO 8528 standards while maintaining a 99.99% uptime commitment.',
                features: [
                    { icon: 'shield_with_heart', text: 'ISO 45001 safety compliance' },
                    { icon: 'workspace_premium', text: 'ISO 9001 and ISO 8528 alignment' }
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
        description: 'Our delivery path moves from engineering to deployment, commissioning, and long-term maintenance.',
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
                description: 'We align on requirements, site conditions, and priorities before design begins.',
                duration: '1-2 Weeks',
                techStack: 'Site Audit / Technical Review'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'System Engineering',
                subtitle: 'Design Integration',
                description: 'Our teams finalize generator sizing, PLC and SCADA architecture, and MEP coordination for implementation.',
                duration: '2-4 Weeks',
                techStack: 'Design Packages / Control Architecture'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'Deployment',
                subtitle: 'Installation',
                description: 'Field teams install and integrate electromechanical systems, control panels, and power infrastructure on site.',
                duration: '2-6 Weeks',
                techStack: 'On-Site Execution / PLC Commission Setup'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'Commissioning',
                subtitle: 'Validation',
                description: 'Integrated testing confirms performance, control logic, and full system readiness before handover.',
                duration: '1-2 Weeks',
                techStack: 'Acceptance Testing / Performance Checks'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'Maintenance',
                subtitle: 'Maintenance',
                description: 'Ongoing maintenance and support keep uptime high and operations stable over the long term.',
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
            description: 'Partner with Focus for generator, automation, and electromechanical solutions built for reliable performance.',
            primary: 'Request a Consultation',
            secondary: 'View Projects'
        }
    }
};

export default services;
