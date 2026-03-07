const contact = {
    offices: [
        {
            id: 'eg',
            position: [ 29.9697, 30.9247 ],
            flag: '🇪🇬',
            name: 'City Stars Towers',
            city: '6th of October City, Giza · Egypt',
            address: 'Tower No. 7, First 6th of October, Giza 3225014',
            mapsUrl: 'https://maps.google.com/?q=City+Stars+Towers,+6th+October+City,+Giza,+Egypt'
        },
        {
            id: 'ksa',
            position: [ 26.4207, 50.0888 ],
            flag: '🇸🇦',
            name: 'Raya Business Center',
            city: 'Dammam 34327 · Saudi Arabia',
            address: '6177 67 St, Dammam 34327, Saudi Arabia',
            mapsUrl: 'https://maps.google.com/?q=Raya+Business+Center,+Dammam+34327,+Saudi+Arabia'
        }
    ],
    hero: {
        badge: 'System Online',
        titleLine: "Let's Build",
        titleHighlight: 'Something Intelligent',
        subtitle: 'Engineering solutions for the next century. Establish a secure connection with our tactical division below.'
    },
    channelsSection: {
        title: 'Direct Access<br /><span>Channels</span>',
        subtitle: 'Select your preferred communication protocol for immediate assistance.',
        channels: [
            {
                icon: '🇸🇦',
                label: 'KSA Office',
                value: '+966 53 818 6792',
                note: 'Saudi Arabia Direct Line'
            },
            {
                icon: '🇪🇬',
                label: 'Egypt Office',
                value: '+20 109 088 0401',
                note: 'Egypt Direct Line'
            },
            {
                icon: '✉️',
                label: 'Digital Correspondence',
                value: 'info@focus-tc.com',
                note: 'Response time: < 24h'
            },
            {
                icon: '🕐',
                label: 'Operational Hours',
                value: 'Mon-Fri / 0800-1800 EST',
                note: 'Weekend Support: Standby'
            }
        ]
    },
    form: {
        title: 'Initiate Request',
        subtitle: 'Securely submit your mission parameters for analysis.',
        successTitle: 'Message Received',
        successText: 'Your message has been securely transmitted. Our team will respond within 24 hours.',
        sendAnother: 'Send Another',
        labels: {
            fullName: 'Full Name',
            company: 'Company',
            email: 'Email Address',
            service: 'Service Interest',
            message: 'Mission Brief'
        },
        placeholders: {
            fullName: 'ex. John Doe',
            company: 'ex. Wayne Enterprises',
            email: 'name@company.com',
            message: 'Describe your project requirements...'
        },
        serviceOptions: [
            'Power Generation',
            'SCADA and Industrial Automation',
            'Electro Mechanical Works',
            'Other'
        ],
        submit: 'Send',
        sending: 'Sending...',
        errors: {
            required: 'Please fill in all required fields.',
            invalidEmail: 'Please enter a valid email address.',
            generic: 'Something went wrong. Please try again later.',
            connection: 'Failed to send message. Please check your connection.'
        }
    },
    map: {
        directions: 'Get Directions →'
    },
    cta: {
        titleLine: 'Ready to Engineer',
        titleHighlight: 'The Future?',
        description: 'Our specialists are standing by to deploy resources for your next major undertaking.',
        primaryButton: 'Schedule Consultation',
        secondaryButton: 'View Our Services'
    }
};

export default contact;

