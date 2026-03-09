const services = {
    hero: {
        breadcrumbs: [ 'الرئيسية', 'الحلول', 'الطاقة' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'بنية طاقة',
        titleAccent: 'حرجة وموثوقة',
        description: 'تقدم فوكاس للتجارة والمقاولات حلول توليد طاقة وهندسة صناعية عالية الدقة للعمليات الحرجة.',
        chips: [ 'مولدات ديزل 20-3000 KVA', 'ISO 9001 / ISO 45001', 'جاهز للأنظمة الهجينة' ],
        ctaPrimary: 'طلب المخططات',
        ctaSecondary: 'عرض دراسات الحالة',
        stats: [
            { value: '99.99%', label: 'ضمان الجاهزية' },
            { value: '+50', label: 'مشروع عالمي' },
            { value: '1.2 GW', label: 'إجمالي القدرة المسلّمة' }
        ],
        cardLabel: 'مراقبة مباشرة',
        dataRows: [
            { key: 'الحمل', value: '84%' },
            { key: 'الحرارة', value: '62°C' },
            { key: 'التردد', value: '50.0Hz' }
        ],
        diagram: {
            core: 'CORE',
            output: 'OUTPUT: 800V',
            input: 'INPUT: HYBRID'
        }
    },
    overview: {
        sidebarTitle: 'نظرة عامة على الخدمات',
        sidebarSubtitle: 'اختر المجال لعرض التفاصيل',
        supportTitle: 'تحتاج مساعدة؟',
        supportLink: 'تواصل مع الدعم',
        downloadButton: 'ملف المواصفات الفنية',
        diagramTexts: {
            power: {
                generator: 'وحدة التوليد',
                load: 'حمل حرج',
                ats: 'لوحة ATS',
                grid: 'الشبكة العمومية',
                fuel: 'خزان الوقود'
            },
            electro: {
                panel: 'اللوحة الرئيسية',
                transformer: 'المحول',
                hvac: 'حمل HVAC',
                pumps: 'وحدة المضخات',
                mcc: 'MCC'
            },
            automation: {
                plc: 'وحدة تحكم PLC',
                plcId: 'المعرّف: PLC-X9',
                io: 'وحدات I/O',
                sensors: 'حساسات ميدانية',
                scada: 'واجهة SCADA',
                scadaId: 'المعرّف: SCADA-01',
                hmi: 'واجهة HMI محلية',
                network: 'شبكة إيثرنت صناعية'
            },
            fallback: {
                system: 'النظام'
            }
        },
        services: [
            {
                id: 'power-generators',
                icon: 'bolt',
                title: 'توليد الطاقة',
                subtitle: 'أنظمة مولدات ديزل',
                serviceId: '#PWR-01',
                heading: 'بنية طاقة صناعية',
                description: 'حلول مولدات ديزل من 20 KVA إلى 3000 KVA مع ATS ومزامنة الشبكة واستمرارية التغذية للبنى الحرجة.',
                stats: [
                    { icon: 'offline_bolt', label: 'نطاق القدرة', value: '20-3000', unit: 'KVA', progress: 85 },
                    { icon: 'verified_user', label: 'ضمان الجاهزية', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'bolt', label: 'قدرة مسلّمة', value: '1.2', unit: 'GW', subtext: 'إجمالي القدرة المنفذة' }
                ],
                diagramLabels: [ 'FIG 3.0 - GENSET SINGLE LINE', 'ATS / GRID READY' ],
                diagramType: 'power'
            },
            {
                id: 'automation',
                icon: 'precision_manufacturing',
                title: 'SCADA والأتمتة الصناعية',
                subtitle: 'أنظمة PLC / SCADA',
                serviceId: '#AUTO-01',
                heading: 'ذكاء التحكم الصناعي',
                description: 'تكامل PLC وSCADA للمراقبة والتحكم الصناعي وإتاحة البيانات اللحظية.',
                stats: [
                    { icon: 'precision_manufacturing', label: 'الأنظمة الأساسية', value: 'PLC', unit: '/SCADA', progress: 100 },
                    { icon: 'verified_user', label: 'ضمان الجاهزية', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'lan', label: 'شبكة التحكم', value: 'مباشرة', unit: '', subtext: 'معمارية إيثرنت صناعية' }
                ],
                diagramLabels: [ 'FIG 3.0 - CONTROL ARCHITECTURE', 'PLC ⇄ SCADA LIVE' ],
                diagramType: 'automation'
            },
            {
                id: 'electromechanical',
                icon: 'electrical_services',
                title: 'المقاولات الكهروميكانيكية',
                subtitle: 'تكامل الأنظمة',
                serviceId: '#EM-01',
                heading: 'أنظمة مبانٍ متكاملة',
                description: 'تنفيذ كهروميكانيكي متكامل لأنظمة توزيع الطاقة ودمج الأنظمة في البنية التحتية الصناعية.',
                stats: [
                    { icon: 'calendar_month', label: 'سنوات الخبرة', value: '6', unit: '+', progress: 70 },
                    { icon: 'workspace_premium', label: 'معيار الجودة', value: 'ISO', unit: '9001', progress: 100 },
                    { icon: 'shield_with_heart', label: 'معيار السلامة', value: 'ISO', unit: '45001', subtext: 'امتثال معتمد' }
                ],
                diagramLabels: [ 'FIG 3.0 - ELECTROMECH COORDINATION', 'SYSTEMS INTERLOCKED' ],
                diagramType: 'electromechanical'
            }
        ]
    },
    whyFocus: {
        badge: 'ميزة استراتيجية',
        title: 'لماذا',
        titleAccent: 'فوكاس',
        lead: 'دقة هندسية مدعومة بمؤشرات أداء موثقة.',
        description: 'تجمع فوكاس للتجارة والمقاولات بين توليد الطاقة والأتمتة والتنفيذ الكهروميكانيكي وفق معايير جودة وسلامة معتمدة.',
        statValues: [ '6+', '50+', '75+' ],
        statLabels: [ 'سنوات خبرة', 'مشروع عالمي', 'عميل راضٍ' ],
        sectionLabel: 'تميّز هندسي',
        sectionIntro: 'يشمل نطاقنا الفني مولدات 20-3000 KVA وأنظمة PLC وSCADA وتكامل MEP، مع 1.2 GW قدرة مسلّمة وضمان جاهزية 99.99%.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'تغطية القدرة الكهربائية',
                description: 'يغطي نطاق المولدات لدينا متطلبات الطاقة الصناعية من 20 KVA إلى 3000 KVA للتشغيل المستمر والاحتياطي.',
                features: [
                    { icon: 'check_circle', text: 'نطاق مولدات ديزل 20-3000 KVA' },
                    { icon: 'check_circle', text: 'تكامل ATS ومزامنة الشبكة' }
                ],
                metric: { value: '20-3000', unit: 'KVA', label: 'نطاق المولدات' }
            },
            {
                id: 2,
                number: '02',
                title: 'تكامل الأتمتة',
                description: 'نصمم معماريات PLC وSCADA وHMI للتحكم اللحظي ورفع وضوح التشغيل الصناعي.',
                features: [
                    { icon: 'hub', text: 'برمجة PLC ومنطق التحكم' },
                    { icon: 'sync', text: 'تكامل SCADA وHMI' }
                ],
                metric: { value: 'PLC', unit: '/SCADA', label: 'نطاق التحكم' }
            },
            {
                id: 3,
                number: '03',
                title: 'تنفيذ كهروميكانيكي وMEP',
                description: 'تنفذ فرقنا أنظمة كهروميكانيكية وتوزيع طاقة وتكامل MEP مع تنسيق موقعي كامل.',
                features: [
                    { icon: 'verified_user', text: 'تنفيذ المقاولات الكهروميكانيكية' },
                    { icon: 'local_shipping', text: 'تكامل MEP والتشغيل' }
                ],
                metric: { value: '2', unit: '', label: 'نطاق التشغيل' }
            },
            {
                id: 4,
                number: '04',
                title: 'معايير السلامة والجودة',
                description: 'نلتزم بمعايير ISO 9001 وISO 45001 والتوافق مع ISO 8528 للمولدات مع المحافظة على ضمان جاهزية 99.99%.',
                features: [
                    { icon: 'shield_with_heart', text: 'امتثال السلامة ISO 45001' },
                    { icon: 'workspace_premium', text: 'مواءمة ISO 9001 وISO 8528' }
                ],
                metric: { value: '99.99%', unit: '', label: 'ضمان الجاهزية' }
            }
        ],
        footerVersion: 'FOCUS T&C',
        footerStatus: 'النظام نشط'
    },
    workflow: {
        coordinates: [ 'COORD: 45.922, 12.001', 'SYS: ONLINE', 'GRID: ACTIVE' ],
        scale: [ 'SCALE: 1:100', 'REF: ENG-FLOW-V5', 'STATUS: MONITORING' ],
        badge: 'هيكل النظام',
        title: 'آلية التنفيذ',
        description: 'مسار تنفيذ منظم يغطي الهندسة والنشر والتشغيل والصيانة للأنظمة الحرجة.',
        activeSuffix: ' // ACTIVE',
        phaseActive: 'المرحلة: نشطة',
        phaseLabel: 'المرحلة',
        durationLabel: 'المدة',
        techStackLabel: 'التقنيات',
        viewDetails: 'عرض التفاصيل',
        prev: 'السابق',
        next: 'التالي',
        steps: [
            {
                id: 1,
                icon: 'chat_bubble_outline',
                title: 'التقييم الهندسي',
                subtitle: 'تحديد النطاق',
                description: 'نحدد متطلبات المشروع وظروف التشغيل وأولويات الأنظمة في الطاقة والأتمتة والتنفيذ الكهروميكانيكي.',
                duration: '1-2 أسبوع',
                techStack: 'معاينة موقع / مراجعة فنية'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'هندسة الأنظمة',
                subtitle: 'تكامل التصميم',
                description: 'نستكمل تصميم سعات المولدات ومعمارية PLC وSCADA وتنسيق MEP قبل التنفيذ.',
                duration: '2-4 أسابيع',
                techStack: 'حزم تصميم / معمارية تحكم'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'النشر',
                subtitle: 'التركيب',
                description: 'تنفذ الفرق الميدانية تركيب ودمج الأنظمة الكهروميكانيكية ولوحات التحكم وبنية الطاقة حسب المخططات المعتمدة.',
                duration: '2-6 أسابيع',
                techStack: 'تنفيذ موقعي / إعداد PLC'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'التشغيل التجريبي',
                subtitle: 'التحقق',
                description: 'يتم التحقق المتكامل من أداء المولدات ومنطق PLC وSCADA وجاهزية النظام قبل التسليم.',
                duration: '1-2 أسبوع',
                techStack: 'اختبارات قبول / تحقق أداء'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'الصيانة',
                subtitle: 'الصيانة',
                description: 'الصيانة المستمرة والدعم الفني يحافظان على الجاهزية وأداء التشغيل طويل المدى.',
                duration: 'مستمر',
                techStack: 'صيانة وقائية / دعم خدمة'
            }
        ],
        metrics: [
            { id: 'A1', icon: 'calendar_month', value: '6+', label: 'سنوات الخبرة' },
            { id: 'B2', icon: 'work', value: '50+', label: 'المشاريع العالمية' },
            { id: 'C3', icon: 'verified_user', value: '99.99%', label: 'ضمان الجاهزية' }
        ],
        cta: {
            titleLine: 'جاهز لدعم',
            titleHighlight: 'مشروعك القادم؟',
            description: 'تعاون مع فوكاس للتجارة والمقاولات لحلول المولدات والأتمتة والتنفيذ الكهروميكانيكي للمهام الحرجة.',
            primary: 'طلب استشارة',
            secondary: 'عرض المشاريع'
        }
    }
};

export default services;
