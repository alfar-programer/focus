const services = {
    hero: {
        breadcrumbs: [ 'الرئيسية', 'الحلول', 'الطاقة' ],
        serviceId: 'SERVICE ID: #PWR-002',
        titleLine: 'بنية طاقة',
        titleAccent: 'حرجة وموثوقة',
        description: 'هندسة عالية الدقة لضمان الاستمرارية المطلقة. نقدم حلول توليد طاقة صناعية لمراكز البيانات والمجمعات الصناعية ودعم الشبكات الوطنية.',
        chips: [ 'قدرة +800kVA', 'معتمد ISO 8528', 'جاهز للأنظمة الهجينة' ],
        ctaPrimary: 'طلب المخططات',
        ctaSecondary: 'عرض دراسات الحالة',
        stats: [
            { value: '99.99%', label: 'ضمان الجاهزية' },
            { value: '+50', label: 'مشروع عالمي' },
            { value: '1.2GW', label: 'طاقة مولدة' }
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
                ats: 'عقدة ATS'
            },
            mep: {
                electrical: 'كهرباء',
                hvac: 'نظام HVAC',
                plumbing: 'أعمال صحية',
                hub: 'محور MEP'
            },
            electro: {
                core: 'محور رئيسي',
                electrical: 'كهرباء',
                hvac: 'نظام HVAC'
            },
            automation: {
                plc: 'وحدة تحكم PLC',
                plcId: 'المعرّف: PLC-X9',
                scada: 'واجهة SCADA',
                scadaId: 'المعرّف: SCADA-01'
            },
            fallback: {
                system: 'النظام'
            }
        },
        services: [
            {
                id: 'power-generators',
                icon: 'bolt',
                title: 'مولدات الطاقة',
                subtitle: 'صناعي واحتياطي',
                serviceId: '#PWR-GEN-04',
                heading: 'بنية طاقة صناعية',
                description: 'حلول توليد طاقة موثوقة وعالية الكفاءة مصممة للبنى الحرجة. نقدم أنظمة احتياطية قوية ووحدات إمداد مستمر مخصصة للمتطلبات الصناعية.',
                stats: [
                    { icon: 'offline_bolt', label: 'سعة الطاقة', value: '800', unit: 'kVA', progress: 80 },
                    { icon: 'speed', label: 'كفاءة المولد', value: '98.5', unit: '%', progress: 98.5 },
                    { icon: 'rocket_launch', label: 'سرعة التنفيذ', value: '48', unit: 'ساعة', subtext: 'تركيب سريع في الموقع' }
                ],
                diagramLabels: [ 'FIG 3.0 - POWER FLOW', 'GRID SYNCHRONIZED' ],
                diagramType: 'power'
            },
            {
                id: 'mep-systems',
                icon: 'hvac',
                title: 'أنظمة MEP',
                subtitle: 'تكامل وتحكم',
                serviceId: '#MEP-01',
                heading: 'تكامل أنظمة MEP',
                description: 'حلول ميكانيكية وكهربائية وصحية مصممة بدقة للبنية التجارية الكبيرة مع ضمان التشغيل البيني السلس للأنظمة الأساسية.',
                stats: [
                    { icon: 'bolt', label: 'قدرة النظام', value: '50', unit: 'MW', progress: 85 },
                    { icon: 'timer', label: 'جاهزية مضمونة', value: '99.9', unit: '%', progress: 99 },
                    { icon: 'groups', label: 'فريق الهندسة', value: '45', unit: '+', subtext: 'متخصصون معتمدون' }
                ],
                diagramLabels: [ 'FIG 3.0 - MEP FLOW', 'SYSTEM ACTIVE' ],
                diagramType: 'mep'
            },
            {
                id: 'electromechanical',
                icon: 'electrical_services',
                title: 'المقاولات الكهروميكانيكية',
                subtitle: 'أنظمة وطاقة',
                serviceId: '#EM-01',
                heading: 'أنظمة مبانٍ متكاملة',
                description: 'حلول كهروميكانيكية متكاملة من البداية للنهاية لبنية عالية الأداء، توحد الكهرباء وHVAC والصحي ضمن إطار تشغيلي واحد.',
                stats: [
                    { icon: 'hub', label: 'تغطية التكامل', value: '100', unit: '%', progress: 100 },
                    { icon: 'precision_manufacturing', label: 'دقة التركيب', value: '99.8', unit: '%', progress: 99.8 },
                    { icon: 'rocket_launch', label: 'كفاءة التسليم', value: 'عالية', unit: '', subtext: 'سير عمل محسّن' }
                ],
                diagramLabels: [ 'FIG 3.0 - SYSTEM MAP', 'LIVE SYNC' ],
                diagramType: 'electromechanical'
            },
            {
                id: 'automation',
                icon: 'precision_manufacturing',
                title: 'الأتمتة والأجهزة',
                subtitle: 'أنظمة SCADA وPLC',
                serviceId: '#AUTO-01',
                heading: 'ذكاء التحكم الصناعي',
                description: 'معماريات PLC وSCADA وDCS متقدمة لبيئات صناعية حرجة مع تحكم دقيق واكتساب بيانات لحظي.',
                stats: [
                    { icon: 'speed', label: 'استجابة التحكم', value: '10', unit: 'ms', progress: 95 },
                    { icon: 'verified_user', label: 'جاهزية النظام', value: '99.99', unit: '%', progress: 99.99 },
                    { icon: 'my_location', label: 'دقة الحساسات', value: '+/- 0.01', unit: '%', subtext: 'معايرة دقيقة' }
                ],
                diagramLabels: [ 'FIG 3.0 - SCADA LOOP', 'ACTIVE FEED' ],
                diagramType: 'automation'
            }
        ]
    },
    whyFocus: {
        badge: 'ميزة استراتيجية',
        title: 'لماذا',
        titleAccent: 'فوكاس',
        lead: 'دقة هندسية مع تنفيذ سريع.',
        description: 'نقدم حلول مقاولات معقدة لا تحتمل الفشل. من البنى الحرجة إلى الأطر المستدامة، يحدد نهجنا الانضباط الفني والتفوق التقني.',
        statValues: [ '24h', '100%', 'ISO' ],
        statLabels: [ 'التحريك', 'الامتثال', 'معتمد' ],
        sectionLabel: 'تميّز هندسي',
        sectionIntro: 'إطارنا التشغيلي مبني على الدقة والسرعة وسلاسل الإمداد المتكاملة. لا نبني بنية تحتية فقط، بل نبني يقيناً في عالم متغير.',
        items: [
            {
                id: 1,
                number: '01',
                title: 'قدرة استجابة سريعة',
                description: 'إطارنا التشغيلي المرن يضمن نشر الموارد والفرق المتخصصة للمواقع الحرجة خلال 24 ساعة من بدء المشروع باستخدام مراكز لوجستية مسبقة التجهيز.',
                features: [
                    { icon: 'check_circle', text: 'تشغيل مركز القيادة 24/7' },
                    { icon: 'check_circle', text: 'شبكة موردين معتمدة مسبقاً' }
                ],
                metric: { value: '24', unit: 'ساعة', label: 'زمن النشر' }
            },
            {
                id: 2,
                number: '02',
                title: 'هندسة تعاونية',
                description: 'نهج متعدد التخصصات يكسر العزلة التقليدية عبر تنسيق قائم على BIM، مع دمج الفرق الإنشائية والميكانيكية والكهربائية في بيئة رقمية موحدة.',
                features: [
                    { icon: 'hub', text: 'تنسيق بين التخصصات' },
                    { icon: 'sync', text: 'تحديثات توأم رقمي لحظية' }
                ],
                metric: { value: '100%', unit: '', label: 'تناغم الفرق' }
            },
            {
                id: 3,
                number: '03',
                title: 'سلسلة إمداد متكاملة',
                description: 'نعتمد على شبكة عالمية من المصنعين والشركاء اللوجستيين المعتمدين لضمان توفر المواد رغم تقلبات السوق، مع تأمين العناصر الحرجة مسبقاً.',
                features: [
                    { icon: 'verified_user', text: 'موثوقية موردين معتمدين' },
                    { icon: 'local_shipping', text: 'تتبع لوجستي مؤتمت' }
                ],
                metric: { value: '45+', unit: '', label: 'مراكز عالمية' }
            },
            {
                id: 4,
                number: '04',
                title: 'معايير السلامة والجودة',
                description: 'فلسفة صفر أذى مدمجة في كل طبقات التشغيل، مع التزام صارم بمعايير ISO 45001 وISO 9001 وتحليلات استباقية لتقليل المخاطر.',
                features: [
                    { icon: 'shield_with_heart', text: 'بروتوكولات سلامة حرجة' },
                    { icon: 'workspace_premium', text: 'متوافق مع ISO 9001 و45001' }
                ],
                metric: { value: 'Zero', unit: '', label: 'اعتماد بدون حوادث' }
            }
        ],
        footerVersion: 'Focus System v2.0',
        footerStatus: 'النظام نشط'
    },
    workflow: {
        coordinates: [ 'COORD: 45.922, 12.001', 'SYS: ONLINE', 'GRID: ACTIVE' ],
        scale: [ 'SCALE: 1:100', 'REF: ENG-FLOW-V5', 'STATUS: MONITORING' ],
        badge: 'هيكل النظام',
        title: '05 // ENGINEERED FLOW',
        description: 'عرض بصري لمنهجيتنا الهندسية الصارمة. من الفكرة حتى التشغيل، كل مرحلة مدفوعة بالبيانات.',
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
                title: 'الاستشارة',
                subtitle: 'تحديد أولي',
                description: 'نبدأ بمقابلات شاملة مع أصحاب المصلحة وجمع المتطلبات لتحديد نطاق المشروع والقيود ومؤشرات النجاح.',
                duration: '1-2 أسبوع',
                techStack: 'Jira / Miro'
            },
            {
                id: 2,
                icon: 'settings',
                title: 'الهندسة',
                subtitle: 'هندسة دقيقة',
                description: 'نحوّل القيود المفاهيمية إلى واقع تشغيلي عبر نمذجة CAD واختبارات إجهاد صارمة مع محاكاة للأداء الأقصى.',
                duration: '4-6 أسابيع',
                techStack: 'AutoCAD / PySim'
            },
            {
                id: 3,
                icon: 'construction',
                title: 'التنفيذ',
                subtitle: 'التركيب',
                description: 'تنفيذ ودمج احترافي مع الأنظمة القائمة بواسطة فنيين معتمدين لضمان نشر سلس بأقل توقف.',
                duration: '3-4 أسابيع',
                techStack: 'Fusion 360 / PLC'
            },
            {
                id: 4,
                icon: 'published_with_changes',
                title: 'التشغيل التجريبي',
                subtitle: 'الاختبارات',
                description: 'بروتوكولات اختبار صارمة وتحقق من الأداء لضمان مطابقة المواصفات أو تجاوزها قبل التسليم.',
                duration: '2-3 أسابيع',
                techStack: 'LabVIEW / TestStand'
            },
            {
                id: 5,
                icon: 'support_agent',
                title: 'الدعم',
                subtitle: 'الصيانة',
                description: 'مراقبة 24/7 وصيانة استباقية لضمان الأداء الأمثل والاستجابة السريعة لأي حالات.',
                duration: 'مستمر',
                techStack: 'Azure IoT / Teams'
            }
        ],
        metrics: [
            { id: 'A1', icon: 'description', value: '142', label: 'رسومات فنية' },
            { id: 'B2', icon: 'memory', value: '850+', label: 'محاكاة منفذة' },
            { id: 'C3', icon: 'verified_user', value: '100%', label: 'امتثال السلامة' }
        ],
        cta: {
            titleLine: 'جاهز لدعم',
            titleHighlight: 'مشروعك القادم؟',
            description: 'تعاون مع فوكاس للحصول على حلول أتمتة رائدة تعزز الكفاءة والنمو.',
            primary: 'طلب استشارة',
            secondary: 'عرض المشاريع'
        }
    }
};

export default services;
