const projects = {
    hero: {
        badge: 'Industrial Delivery',
        title: 'Our Projects',
        subtitle: 'A selection of power, automation, and electromechanical projects delivered across Egypt and Saudi Arabia.',
        primaryButton: 'View Portfolio',
        secondaryButton: 'Contact Team'
    },
    intro: {
        title: 'Engineering Performance at Scale',
        description: 'Focus TC delivers practical, high-performance solutions for industrial, commercial, and utility sectors with a consistent focus on safety and quality.',
        readMethodology: 'Read about our methodology',
        stats: [
            { icon: 'bolt', value: '1.2 GW', label: 'Total Power Delivered' },
            { icon: 'check_circle', value: '50+', label: 'Global Projects' },
            { icon: 'factory', value: '6+', label: 'Years Experience' },
            { icon: 'public', value: '2', label: 'Operational Regions' }
        ]
    },
    grid: {
        categories: {
            all: 'All',
            industrial: 'Industrial',
            commercial: 'Commercial',
            utilities: 'Utilities'
        },
        viewDetails: 'View Project Details',
        modal: {
            client: 'Client',
            duration: 'Duration',
            value: 'Project Value',
            year: 'Year',
            servicesProvided: 'Services Provided',
            requestSimilar: 'Request Similar Project'
        },
        loadMore: 'Load More Projects',
        // TODO: DATA NOT FOUND IN MASTER FILE
        projects: [
            {
                id: 1,
                title: 'Cairo West Power Station',
                location: '6th of October City, Egypt',
                category: 'industrial',
                description: 'Comprehensive electrical installation and automation integration for a new turbine expansion, engineered for 99.9% uptime reliability.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPHmW6_t-Pisd0P3paSmPqru50aIXTYzgrXXaADZewE34mhBDiwpwNAadwcJcldz9Jt2R1hf_dCKHHUi32PxFp6fLHUiU3qzJJI7DqQ9xvjIDShB6eBR7t-6z9AKFDwhgtCAQ_KRUZAyrYQ40n4xxmN61Kw1ZBJOuhbNEstjxlnTpoD8PgkatWyyVC2l6EQ1nb1DBFHQrXfYX1IXd4VnuQZP8yUABfQeP2ZDgai_K_v5fHcZBX_ld9_zo49K8y3XN5K4LyCypWVlY',
                client: 'Cairo West Power Plant',
                duration: '18 months',
                value: '$12.5M',
                services: [ 'Electrical Installation', 'Automation Systems', 'HV Switchgear', 'Power Distribution' ],
                year: '2023'
            },
            {
                id: 2,
                title: 'Al-Massa Hotel Complex',
                location: 'New Capital, Egypt',
                category: 'commercial',
                description: 'Design and implementation of smart building management and emergency backup power systems for a 500-room luxury hotel.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9ErI9voqAxE7bPxbO0qPmnAqc7e-ih4a3xmlF70nADlxjTC2eDJrEVT0vGD3HTceMG-WSbaeymQNewax5ri2aeYi_cgnAZaXsREQjuIcA_ax9su5I7ObeNh61142rJTEBXUTlrumROWSVto7mABGgO22OMazT4KDKmgySKSHeC_W3RqMCEjrfxnhVjI9WBdlGEq40UnEojyVzJNIoo-kbdYkNjcsNBGsveQFmVir1bO9alnAgAQU7sTE-tjY-pX3HC5j-ZcwaNk',
                client: 'Al-Massa Hospitality Group',
                duration: '14 months',
                value: '$8.2M',
                services: [ 'BMS Integration', 'Emergency Power', 'HVAC Controls', 'Low Current Systems' ],
                year: '2024'
            },
            {
                id: 3,
                title: 'Benban Solar Park Grid',
                location: 'Aswan, Egypt',
                category: 'utilities',
                description: 'High-voltage substation connectivity and distribution network installation for one of the world\'s largest solar parks.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzov0Br4DwyUHbAuZYDUwGDLqL-KjVPH5BJN8JaRXdcACHI9e9kjUQtQFXP81MkWwnLz8tiYIVm5N3xnZEdM1rlJXtin9_Yz2xjJUbc40G_j8Eft83oWp9Az51rl5Fj46UcNwaK4DfSGlmyQF6VNTyTEZbQLDXpOR_WokIyWAgAK65UBt-hhWzKOpw2JocNUWMOeu0mkZ8mj7127bCP-Fxvp7qgn5L8xshZgAyAu0_HJUVjLOlUpfElidwRyybDT0FrvtocoOqnqI',
                client: 'Infinity Power / Masdar',
                duration: '24 months',
                value: '$22M',
                services: [ 'HV Substations', 'Grid Connection', 'Power Distribution', 'SCADA Systems' ],
                year: '2022'
            },
            {
                id: 4,
                title: 'Smart Factory Upgrade',
                location: 'Alexandria, Egypt',
                category: 'industrial',
                description: 'Retrofit of legacy manufacturing lines with IoT sensors and live dashboards to support predictive maintenance.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwYINHQ3hHGA66zIFZH8tX5YlK1bTXU350pCuFSUX4TceKCHWuM8gNUvrV38-Wo8jLtDLzjw4VqVvQhiaWQplXC4CvmLfxMzpmhtcp1j77Ye69qz8Ey_CdJbQldlxUGQk8VgsZyeyFGu1yfPXXGHUNYAigTzer_Ho_t7PvyjNKTtEXvdCXmBhtoHFSsScXxY9-iOSHYMGXG7m2n6kEjKefXntmURAWEuZ7I0xw8n0YJoJpfnXt2ifigw7bN9kZ5-rcN5vgZHAeUCw',
                client: 'Alexandria Manufacturing Co.',
                duration: '8 months',
                value: '$3.8M',
                services: [ 'IoT Integration', 'Automation', 'Predictive Maintenance', 'Dashboard Systems' ],
                year: '2024'
            },
            {
                id: 5,
                title: 'Business Bay Tower',
                location: 'Dubai, UAE',
                category: 'commercial',
                description: 'Full electromechanical contracting for a 45-story commercial tower, including HVAC, firefighting, and low-current systems.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVWniBaFY6YQpiU_RRo82EwkC0WKixKASbRlFT-e8RBHtNV_qAkrUOxV9Ekr4xPEQuJFTrvY4ZKqDOYmrHz6ZUAtOmQsZjUr4tQWzX1QCgL42-XtIjZOj_-SPB0y0NAIVpEBIHA2iMME0LqWbVXxhCoDusrURZ3MgyjpMfLYvdlBzKIZ69MJRKiirsvkDfTrxYo2gidw_FfUZ6lCR61qsruAEOPOkdYh_OaohC-eWmLCkz5pol0EQAk33YSKwcHMjrwA8Sz0l3KjI',
                client: 'Dubai Holdings',
                duration: '32 months',
                value: '$45M',
                services: [ 'MEP Design', 'HVAC Systems', 'Fire Fighting', 'Low Current', 'Elevators' ],
                year: '2021'
            },
            {
                id: 6,
                title: 'Water Treatment SCADA',
                location: 'Cairo, Egypt',
                category: 'utilities',
                description: 'Centralized SCADA system for a municipal water treatment facility to optimize chemical dosing and pump operations.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5OaFaSMp9NmrcovZJOe6YGUveIPf8BoCCFfFEWyG9V1KP-OwWVsjkDML-sLi96SPxEWmo1ea01Lh7Kmp9rfx2Tzq9GVb-WNDzVDxwHlcVlEAHlmsukXyMDjZmM6Vxj8UMczS2pV1p6FxVYsFoF5CpEqbUN15cS4quLs47XJwCLxfYe0PGKnydxqAG2E2WC2m9t7eORu_5oC6m4MhDu4I8fAKSMI03NiB8oabWdFhtVtC4wXVaO9IDTghuvoyvD-jhfDJQPhMjoHE',
                client: 'Cairo Water Authority',
                duration: '12 months',
                value: '$5.5M',
                services: [ 'SCADA Design', 'PLC Programming', 'Process Control', 'Remote Monitoring' ],
                year: '2023'
            }
        ]
    },
    cta: {
        badge: 'Partner With Us',
        titleLine: 'Ready to Power Your',
        titleHighlight: ' Next Project?',
        description: 'From initial consultation to final commissioning, Focus TC delivers turnkey electromechanical solutions tailored to your project.',
        features: [ '6+ Years Experience', '99.99% Uptime Guarantee', 'ISO 9001 / ISO 45001' ],
        primaryButton: 'Schedule Consultation',
        secondaryButton: 'Company Profile'
    }
};

export default projects;

