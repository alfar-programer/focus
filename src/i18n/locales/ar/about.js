const about = {
    section1: {
        status: 'حالة النظام: يعمل',
        titlePrefix: 'رحلتنا ',
        titleHighlight: '',
        description: 'مخطط زمني لمسار إنجازاتنا الهندسية ونمو بنيتنا التقنية منذ الانطلاقة. خارطة واضحة لدقة التنفيذ.',
        stats: [
            { label: 'محطات رئيسية', value: '+42' },
            { label: 'عقد تشغيل نشطة', value: '128' },
            { label: 'معدل الدقة', value: '99.9%' }
        ],
        milestones: [
            {
                year: '2020',
                title: 'التأسيس في مصر',
                description: 'تأسيس شركة فوكس للتجارة والمقاولات في مصر، ووضع حجر الأساس للتميز الهندسي.',
                icon: 'foundation',
                protocols: [ 'FTC-01: التأسيس', 'دخول السوق المصري' ],
                reverse: false
            },
            {
                year: '2021',
                title: 'تعزيز العمليات',
                description: 'تعزيز الأنظمة الداخلية وأطر العمل التشغيلية لدعم المتطلبات المتزايدة للمشاريع.',
                icon: 'architecture',
                protocols: [ 'الكفاءة التشغيلية', 'تحسين العمليات' ],
                reverse: true
            },
            {
                year: '2022',
                title: 'إنشاء قسم خدمات ما بعد البيع',
                description: 'إطلاق قسم مخصص للصيانة والدعم الفني طويل الأمد لعملائنا.',
                icon: 'engineering',
                protocols: [ 'نجاح العملاء', 'الدعم الفني' ],
                reverse: false
            },
            {
                year: '2023',
                title: 'رائد في حلول الطاقة',
                description: 'أصبحت شركة فوكس مزوداً رائداً لحلول الطاقة في السوق المصري، محققة معايير صناعية قياسية.',
                icon: 'bolt',
                protocols: [ 'ريادة السوق', 'معايير الطاقة' ],
                reverse: true
            },
            {
                year: '2024',
                title: 'التوسع في المملكة العربية السعودية',
                description: 'توسع إقليمي عبر الحدود إلى المملكة العربية السعودية، وتأسيس المقر الإقليمي في الدمام.',
                icon: 'public',
                protocols: [ 'التوسع الإقليمي', 'عمليات السعودية' ],
                reverse: false
            },
            {
                year: '2025',
                title: 'الشراكة مع صناعات الفداغي',
                description: 'تشكيل شراكة استراتيجية مع صناعات الفداغي لدفع التأثير الصناعي واسع النطاق.',
                icon: 'handshake',
                protocols: [ 'تحالف استراتيجي', 'نطاق صناعي' ],
                reverse: true,
                highlight: true
            }
        ],
        blueprint: [
            'المرجع: FTC-SYSTEM-001',
            'الإحداثيات: 25.2769°N, 55.2962°E',
            'المقياس: 1:1,000,000'
        ]
    },
    section2: {
        domainLabel: 'المجالات التقنية',
        titleStart: 'الخبرات ',
        titleHighlight: 'والقدرات',
        intro: 'نقود بنية تحتية متقدمة عبر هندسة قائمة على البيانات. أقسامنا المتخصصة تقدم حلولاً حرجة للمؤسسات العالمية.',
        downloadSpecs: 'تحميل المواصفات الفنية',
        metricsHeading: 'المؤشرات الفنية',
        tabs: [
            { id: 'power', label: 'أنظمة الطاقة', icon: 'bolt' },
            { id: 'electro', label: 'كهروميكانيك', icon: 'settings_input_component' },
            { id: 'auto', label: 'الأتمتة', icon: 'precision_manufacturing' },
            { id: 'infra', label: 'البنية التحتية', icon: 'foundation' }
        ],
        content: {
            power: {
                title: 'بنية طاقة متقدمة',
                badge: 'تخصص أساسي',
                description: 'نصمم وننفذ بنية كهربائية عالية الأداء مع تركيز على اعتماد مراكز البيانات Tier IV وإدارة الطاقة المستدامة لضمان أعلى موثوقية.',
                features: [
                    { title: 'تصميم المحطات', desc: 'هندسة دورة حياة كاملة لشبكات التوزيع عالية الجهد.', icon: 'subtitles' },
                    { title: 'شبكة مستدامة', desc: 'دمج مصادر الطاقة المتجددة وأنظمة القياس الذكية.', icon: 'energy_savings_leaf' },
                    { title: 'امتثال Tier IV', desc: 'معايير اعتماد صارمة للمنشآت الحرجة.', icon: 'verified_user' },
                    { title: 'صيانة HV/LV', desc: 'دعم فني على مدار الساعة وخدمات مراقبة وقائية.', icon: 'engineering' }
                ],
                metrics: [
                    { value: '99.99%', label: 'موثوقية النظام', desc: 'متوسط جاهزية عبر أكثر من 45 مشروعاً مؤسسياً.', icon: 'radar' },
                    { value: '500MW+', label: 'قدرة مُدارة', desc: 'إجمالي بنية توزيع الطاقة المصممة وتحت الإدارة.', icon: 'power' },
                    { value: '12', label: 'مواقع Tier IV عالمية', desc: 'مراكز بيانات عالية الاعتمادية معتمدة عبر مناطق متعددة.', icon: 'public' }
                ]
            },
            electro: {
                title: 'حلول كهروميكانيكية',
                badge: 'مستوى صناعي',
                description: 'أنظمة ميكانيكية وكهربائية متكاملة للتطبيقات الصناعية الكبرى بما يضمن انسيابية التشغيل وكفاءة الطاقة.',
                features: [
                    { title: 'أنظمة HVAC', desc: 'تحكم مناخي دقيق للبيئات الصناعية ومراكز البيانات.', icon: 'ac_unit' },
                    { title: 'محطات الضخ', desc: 'أنظمة إدارة وتوزيع سوائل عالية السعة.', icon: 'water_drop' }
                ],
                metrics: [
                    { value: '150+', label: 'وحدة مركبة', desc: 'وحدات كهروميكانيكية عالية الأداء تم تركيبها وصيانتها.', icon: 'settings' }
                ]
            },
            auto: {
                title: 'أتمتة صناعية',
                badge: 'تقنية ذكية',
                description: 'أنظمة تحكم وأتمتة من الجيل التالي لتحسين خطوط الإنتاج ورفع مستويات السلامة من خلال المراقبة الذكية.',
                features: [
                    { title: 'أنظمة SCADA', desc: 'حلول مراقبة وتحكم وإدارة بيانات لحظية.', icon: 'monitoring' },
                    { title: 'تكامل الروبوتات', desc: 'تحسين سير العمل تلقائياً باستخدام الروبوتات المتقدمة.', icon: 'smart_toy' }
                ],
                metrics: [
                    { value: '40%', label: 'زيادة الكفاءة', desc: 'متوسط التحسن التشغيلي بعد تطبيق الأتمتة.', icon: 'trending_up' }
                ]
            },
            infra: {
                title: 'بنية مدنية',
                badge: 'جاهزة للتوسع',
                description: 'حلول هندسية إنشائية تأسيسية للمشاريع المعقدة من الأعمال تحت الأرض وحتى الهياكل المرتفعة.',
                features: [
                    { title: 'تهيئة المواقع', desc: 'أعمال تسوية وتجهيز وأساسات متكاملة.', icon: 'agriculture' },
                    { title: 'سلامة إنشائية', desc: 'اختبارات مواد متقدمة وتصميم مقاوم للزلازل.', icon: 'architecture' }
                ],
                metrics: [
                    { value: '2M+', label: 'قدم مربع منفذ', desc: 'إجمالي البصمة الإنشائية والتأسيسية المنجزة.', icon: 'square_foot' }
                ]
            }
        }
    },
    section3: {
        sectionLabel: 'القسم 04',
        titleStart: 'قيمنا ',
        titleHighlight: 'الأساسية',
        navLabel: 'التنقل',
        slideLabel: 'الشريحة',
        progressStart: 'البداية',
        progressEnd: 'الاكتمال',
        values: [
            {
                id: '01',
                title: 'دقة هندسية',
                desc: 'نركز على التفاصيل الدقيقة والتمكن التقني. نؤمن أن كل مليمتر يصنع فرقاً في طريق الكمال.',
                icon: 'precision_manufacturing',
                tag: 'استكشف العمق',
                class: 'precision-slide'
            },
            {
                id: '02',
                title: 'ابتكار صناعي',
                desc: 'إبراز أحدث التقنيات في المقاولات الصناعية مع توظيف BIM والإدارة الذكية للمواقع.',
                icon: 'memory',
                tag: 'اعرض التقنيات',
                class: 'innovation-slide'
            },
            {
                id: '03',
                title: 'نزاهة ثابتة',
                desc: 'ترسيخ الثقة والسلامة في المشاريع الهندسية الكبرى. سمعتنا مبنية على الالتزام.',
                icon: 'verified_user',
                tag: 'حالة موثقة',
                class: 'integrity-slide'
            },
            {
                id: '04',
                title: 'بنية مستدامة',
                desc: 'نبني اليوم بعين على الغد، مع دمج الطاقة الخضراء والمواد المعاد تدويرها في كل سير عمل.',
                icon: 'eco',
                tag: 'الاستدامة',
                class: 'sustainable-slide'
            },
            {
                id: '05',
                title: 'تميّز تعاوني',
                desc: 'نهجنا القائم على الشراكة يوحّد أصحاب المصلحة والمهندسين والعملاء ضمن فريق واحد.',
                icon: 'groups',
                tag: 'نجاح الفريق',
                class: 'excellence-slide'
            }
        ]
    },
    section4: {
        sectionLabel: 'القسم 05',
        titleStart: 'مكاتبنا',
        titleHighlight: '',
        subtitle: 'حضور مزدوج يخدم الخبرة المحلية والامتداد العالمي.',
        coordLabel: 'الإحداثيات',
        directions: 'الاتجاهات',
        offices: [
            {
                id: 'ksa',
                country: 'المملكة العربية السعودية',
                flag: '🇸🇦',
                tag: 'المقر السعودي',
                name: 'مركز راية للأعمال',
                address: '6177 شارع 67، الدمام 34327',
                region: 'المنطقة الشرقية',
                coordinates: '26.4207° شمالاً، 50.0888° شرقاً',
                status: 'نشط',
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.7!2d50.0888!3d26.4207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5b7!2sRaya+Business+Center%2C+Dammam!5e0!3m2!1sen!2ssa!4v1'
            },
            {
                id: 'eg',
                country: 'مصر',
                flag: '🇪🇬',
                tag: 'المقر المصري',
                name: 'أبراج سيتي ستارز',
                address: 'برج رقم 7، الحي الأول، 6 أكتوبر\nمدينة 6 أكتوبر، الجيزة 3225014',
                region: 'محافظة الجيزة',
                coordinates: '29.9697° شمالاً، 30.9247° شرقاً',
                status: 'نشط',
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d30.9247!3d29.9697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585!2sCity+Stars+Towers%2C+6th+October!5e0!3m2!1sen!2seg!4v1'
            }
        ]
    },
    section5: {
        badge: 'عن فوكاس',
        headlineStart: 'هوية هندسية',
        headlineAccent: 'قائمة على الدقة',
        body: 'نعيد تعريف الأنماط التقنية عبر هندسة ذات رؤية. نجمع بين الصلابة الإنشائية والوضوح الجمالي ليصبح كل نظام ننفذه معياراً للتميز الصناعي.',
        analytics: 'تحليلات النظام',
        features: [
            { label: 'المنهجية', value: 'تصميم استراتيجي' },
            { label: 'التنفيذ', value: 'تميز تقني' },
            { label: 'البنية التحتية', value: 'أنظمة موجهة للمستقبل' },
            { label: 'الأساس', value: 'ابتكار منظم' }
        ],
        stats: [
            { end: 24, suffix: 'k+', label: 'تنفيذات' },
            { end: 99.9, suffix: '%', label: 'دقة', decimals: 1 },
            { end: 12, suffix: '+', label: 'مراكز عالمية' },
            { end: null, suffix: '∞', label: 'ابتكار' }
        ]
    },
    partners: {
        titleStart: 'شراكات ',
        titleHighlight: 'استراتيجية',
        subtitle: 'نقود التميز الصناعي عبر تعاون عالمي وخبرة محلية في منطقة الشرق الأوسط وشمال أفريقيا.',
        regions: {
            ksa: 'السعودية',
            egypt: 'مصر'
        },
        features: [
            {
                icon: 'hub',
                title: 'مراكز إقليمية',
                description: 'مكاتب استراتيجية في القاهرة والدمام لدعم العمليات الصناعية عالية الاعتمادية.'
            },
            {
                icon: 'verified',
                title: 'خبراء معتمدون',
                description: 'يتم اعتماد شركائنا عبر برامج ضبط جودة صارمة للحفاظ على أعلى المعايير الهندسية.'
            },
            {
                icon: 'rocket_launch',
                title: 'أثر النمو',
                description: 'ندعم أكثر من 50 مشروع بنية تحتية كبير سنوياً في شمال أفريقيا والخليج.'
            }
        ],
        footer: 'مدعوم بشراكات موثوقة عبر المنطقة'
    },
    section_iso: {
        title: 'شهادات الأيزو',
        subtitle: 'نحن معتمدون بشهادات الأيزو',
        description: 'يتجلى التزامنا بالجودة والمسؤولية البيئية والصحة والسلامة المهنية من خلال شهاداتنا المعترف بها دولياً.',
        certificates: [
            {
                id: 'iso9001',
                title: 'ISO 9001',
                standard: 'نظام إدارة الجودة',
                description: 'متطلبات نظام إدارة الجودة.'
            },
            {
                id: 'iso14001',
                title: 'ISO 14001',
                standard: 'نظام الإدارة البيئية',
                description: 'معايير الإدارة البيئية لمساعدة المنظمات على تقليل تأثيرها.'
            },
            {
                id: 'iso45001',
                title: 'ISO 45001',
                standard: 'نظام إدارة الصحة والسلامة المهنية',
                description: 'إرشادات لتحسين سلامة الموظفين وتقليل مخاطر مكان العمل.'
            }
        ]
    }
};

export default about;

