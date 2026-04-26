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
        badge: 'Focus Trading & Contracting',
        titleLine: 'Connect With',
        titleHighlight: 'FOCUS T&C',
        subtitle: 'Tell us what you are building, and our engineering team will connect with the right support.'
    },
    channelsSection: {
        title: 'Direct Access<br /><span>Channels</span>',
        subtitle: 'Reach our team through the channels below.',
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
                label: 'Email',
                value: 'info@focus-tc.com',
                note: 'Typical response: < 24h'
            },
            {
                icon: '🕐',
                label: 'Operational Hours',
                value: 'Sun-Thur / 08:00-16:00',
                note: 'Weekend Support: Standby'
            }
        ]
    },
    form: {
        title: 'Send an Inquiry',
        subtitle: 'Share your project details and we will get back to you.',
        successTitle: 'Message Received',
        successText: 'Your message was sent successfully. Our team will respond within 24 hours.',
        sendAnother: 'Send Another',
        labels: {
            fullName: 'Full Name',
            company: 'Company',
            email: 'Email Address',
            service: 'Service Interest',
            message: 'Project Brief'
        },
        placeholders: {
            fullName: 'ex. John Doe',
            company: 'ex. Your Company Name',
            email: 'name@company.com',
            message: 'Describe your project requirements...'
        },
        serviceOptions: [
            'Power Generation Solutions',
            'Industrial Automation (PLC / SCADA)',
            'Electromechanical Contracting',
            'MEP Systems Integration',
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
        titleLine: 'Ready to Start',
        titleHighlight: 'Your Project?',
        description: 'Our specialists are ready to support your next power or industrial engineering project.',
        primaryButton: 'Schedule Consultation',
        secondaryButton: 'View Our Services'
    }
};

export default contact;

