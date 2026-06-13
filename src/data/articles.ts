// Bilingual blog content. Each article is rendered at /[locale]/blog/[slug]
// (English under /en). Targets the informational keyword cluster from the SEO
// strategy plus trending 2026 topics (smart/AI detection, Civil Defense rules,
// lithium-battery safety, maintenance).

export interface Bilingual {
  en: string;
  ar: string;
}

export interface ArticleSection {
  heading: Bilingual;
  /** One or more paragraphs per locale. */
  body: { en: string[]; ar: string[] };
}

export interface Article {
  slug: string;
  /** ISO date (used for <time> and Article schema). */
  date: string;
  cover: string;
  category: Bilingual;
  title: Bilingual;
  excerpt: Bilingual;
  keywords: string[];
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "choosing-fire-fighting-company-egypt",
    date: "2026-06-13",
    cover: "/blog/choosing-fire-fighting-company-egypt.png",
    category: { en: "Buying Guide", ar: "دليل الشراء" },
    title: {
      en: "How to Choose a Fire Fighting Company in Egypt",
      ar: "كيف تختار شركة مكافحة حريق في مصر",
    },
    excerpt: {
      en: "What to check before hiring a fire fighting company in Egypt — approvals, genuine brands, code compliance and maintenance.",
      ar: "ما الذي يجب التحقق منه قبل اختيار شركة مكافحة حريق في مصر — الاعتمادات والعلامات الأصلية والمطابقة للكود والصيانة.",
    },
    keywords: [
      "افضل شركة مكافحة حريق",
      "choose fire fighting company Egypt",
      "شركة انظمة اطفاء حريق",
      "fire safety contractor Egypt",
    ],
    sections: [
      {
        heading: {
          en: "Check approvals and compliance",
          ar: "تحقق من الاعتمادات والمطابقة",
        },
        body: {
          en: [
            "Confirm the company designs and documents to the Egyptian Fire Code (305) and Civil Defense requirements, and references international standards like NFPA and UL/FM. Ask to see examples of approved projects.",
            "A capable contractor handles the full cycle — design, supply, installation, testing and maintenance — not just equipment sales.",
          ],
          ar: [
            "تأكد أن الشركة تصمم وتوثق وفق الكود المصري للحريق (305) واشتراطات الدفاع المدني، وتستند إلى المعايير الدولية مثل NFPA وUL/FM. واطلب أمثلة لمشاريع معتمدة.",
            "المقاول القادر يتولى الدورة الكاملة — التصميم والتوريد والتركيب والاختبار والصيانة — وليس بيع المعدات فقط.",
          ],
        },
      },
      {
        heading: {
          en: "Genuine brands and experience",
          ar: "العلامات الأصلية والخبرة",
        },
        body: {
          en: [
            "Ask which brands they use and whether they are authorized distributors of genuine products — counterfeit detectors and extinguishers fail when it matters. Years of experience and a portfolio across sectors (banks, hospitals, factories) are good signals.",
            "Verify the team includes qualified engineers, not only installers.",
          ],
          ar: [
            "اسأل عن العلامات التي يستخدمونها وهل هم موزعون معتمدون لمنتجات أصلية — فالكواشف والطفايات المقلدة تفشل وقت الحاجة. وسنوات الخبرة ومحفظة أعمال عبر القطاعات (بنوك، مستشفيات، مصانع) مؤشرات جيدة.",
            "تأكد أن الفريق يضم مهندسين مؤهلين وليس فنيي تركيب فقط.",
          ],
        },
      },
      {
        heading: {
          en: "Maintenance and after-sales",
          ar: "الصيانة وما بعد البيع",
        },
        body: {
          en: [
            "A good company offers a maintenance contract with documented reports — vital for keeping systems compliant and ready for inspection. Clarify response times for emergencies.",
            "Xenon is an authorized IBC distributor with 14+ years and 150+ projects, delivering design, supply, installation and maintenance to code. Contact us for a free assessment.",
          ],
          ar: [
            "الشركة الجيدة تقدم عقد صيانة بتقارير موثقة — وهو ضروري للحفاظ على مطابقة الأنظمة وجاهزيتها للمعاينة. ووضّح أوقات الاستجابة للطوارئ.",
            "زينون موزع معتمد لـ IBC بخبرة أكثر من 14 عامًا وأكثر من 150 مشروعًا، وتقدم التصميم والتوريد والتركيب والصيانة وفق الكود. تواصل معنا للحصول على تقييم مجاني.",
          ],
        },
      },
    ],
  },
  {
    slug: "restaurant-kitchen-fire-safety",
    date: "2026-06-11",
    cover: "/blog/restaurant-kitchen-fire-safety.png",
    category: { en: "Safety Guides", ar: "أدلة السلامة" },
    title: {
      en: "Fire Safety for Restaurants & Commercial Kitchens in Egypt",
      ar: "السلامة من الحريق للمطاعم والمطابخ التجارية في مصر",
    },
    excerpt: {
      en: "Hood suppression, the right extinguishers and Civil Defense rules every restaurant and commercial kitchen in Egypt needs.",
      ar: "إطفاء الشفاطات والطفايات المناسبة واشتراطات الدفاع المدني التي يحتاجها كل مطعم ومطبخ تجاري في مصر.",
    },
    keywords: [
      "restaurant fire safety Egypt",
      "kitchen hood suppression",
      "اطفاء شفاطات المطابخ",
      "سلامة المطاعم من الحريق",
    ],
    sections: [
      {
        heading: { en: "Why kitchens are high-risk", ar: "لماذا المطابخ عالية الخطورة" },
        body: {
          en: [
            "Commercial kitchens combine open flames, hot oil and grease build-up — a leading cause of fires. Grease fires spread fast and water makes them worse.",
            "Civil Defense treats restaurants as a higher-risk activity with stricter requirements.",
          ],
          ar: [
            "تجمع المطابخ التجارية بين اللهب المكشوف والزيت الساخن وتراكم الدهون — وهي من أبرز أسباب الحرائق. وحرائق الزيوت تنتشر بسرعة والماء يزيدها سوءًا.",
            "يتعامل الدفاع المدني مع المطاعم كنشاط أعلى خطورة باشتراطات أكثر صرامة.",
          ],
        },
      },
      {
        heading: { en: "Hood suppression is essential", ar: "إطفاء الشفاطات ضروري" },
        body: {
          en: [
            "A wet-chemical hood suppression system automatically detects and extinguishes fires at the cooking line and shuts off the fuel/gas supply. It is the core protection for any commercial kitchen.",
            "Pair it with the right extinguishers (Class K/F for cooking oils) and trained staff.",
          ],
          ar: [
            "يكتشف نظام إطفاء الشفاطات بالكيماويات الرطبة الحريق تلقائيًا ويُخمده عند خط الطهي ويغلق إمداد الوقود/الغاز. وهو الحماية الأساسية لأي مطبخ تجاري.",
            "اقرنه بالطفايات المناسبة (فئة K/F لزيوت الطهي) وتدريب العاملين.",
          ],
        },
      },
      {
        heading: { en: "Staying compliant", ar: "البقاء مطابقًا" },
        body: {
          en: [
            "Keep hood systems and extinguishers serviced and documented for Civil Defense inspection. Cleaning grease from hoods and ducts is part of fire prevention.",
            "Xenon supplies, installs and maintains kitchen hood suppression and restaurant fire systems across Egypt. Contact us for a survey.",
          ],
          ar: [
            "حافظ على صيانة أنظمة الشفاطات والطفايات وتوثيقها لمعاينة الدفاع المدني. وتنظيف الدهون من الشفاطات والمجاري جزء من الوقاية من الحريق.",
            "تقوم زينون بتوريد وتركيب وصيانة إطفاء شفاطات المطابخ وأنظمة حريق المطاعم في جميع أنحاء مصر. تواصل معنا لمعاينة.",
          ],
        },
      },
    ],
  },
  {
    slug: "data-center-server-room-fire-protection",
    date: "2026-06-09",
    cover: "/blog/data-center-server-room-fire-protection.png",
    category: { en: "Suppression", ar: "أنظمة الإطفاء" },
    title: {
      en: "Data Center & Server Room Fire Protection in Egypt",
      ar: "حماية مراكز البيانات وغرف السيرفرات من الحريق في مصر",
    },
    excerpt: {
      en: "Clean-agent suppression, early aspirating detection and the right design to protect server rooms without damaging equipment.",
      ar: "الإطفاء بالغاز النظيف والكشف المبكر بالشفط والتصميم الصحيح لحماية غرف السيرفرات دون إتلاف المعدات.",
    },
    keywords: [
      "data center fire protection",
      "server room suppression",
      "حماية غرف السيرفرات",
      "FM200 server room",
    ],
    sections: [
      {
        heading: { en: "Why water won't do", ar: "لماذا لا تصلح المياه" },
        body: {
          en: [
            "Server rooms hold sensitive, energized electronics where water or foam would cause as much damage as the fire. They need clean-agent gas suppression such as FM200 that leaves no residue and doesn't conduct electricity.",
            "Downtime is costly, so detection must be early and suppression fast.",
          ],
          ar: [
            "تحتوي غرف السيرفرات على إلكترونيات حساسة مغذّاة بالكهرباء، حيث تسبب المياه أو الرغوة ضررًا يوازي الحريق. وتحتاج إلى إطفاء بالغاز النظيف مثل FM200 الذي لا يترك رواسب ولا يوصّل الكهرباء.",
            "التوقف مكلف، لذا يجب أن يكون الكشف مبكرًا والإطفاء سريعًا.",
          ],
        },
      },
      {
        heading: { en: "Early detection matters", ar: "أهمية الكشف المبكر" },
        body: {
          en: [
            "Aspirating smoke detection (VESDA-type) samples air continuously to catch smoke at the earliest stage — far sooner than standard detectors. Combined with clean-agent suppression, it gives the best protection.",
            "Smart/IoT panels add remote monitoring for unmanned rooms.",
          ],
          ar: [
            "يأخذ الكشف بالشفط (نوع VESDA) عينات من الهواء باستمرار لرصد الدخان في أبكر مرحلة — أسرع كثيرًا من الكواشف العادية. وبدمجه مع الإطفاء بالغاز النظيف يمنح أفضل حماية.",
            "تضيف اللوحات الذكية/إنترنت الأشياء المراقبة عن بُعد للغرف غير المأهولة.",
          ],
        },
      },
      {
        heading: { en: "Designing it right", ar: "التصميم الصحيح" },
        body: {
          en: [
            "The system must be sized to the room volume with proper sealing, abort/discharge controls and integration with the building alarm. Compliance with the Egyptian Fire Code is essential.",
            "Xenon designs and installs clean-agent suppression and detection for data centers and server rooms. Contact us for a design assessment.",
          ],
          ar: [
            "يجب تحديد حجم النظام وفق حجم الغرفة مع إحكام مناسب وضوابط إيقاف/تفريغ وتكامل مع إنذار المبنى. والمطابقة للكود المصري للحريق ضرورية.",
            "تقوم زينون بتصميم وتركيب الإطفاء بالغاز النظيف والكشف لمراكز البيانات وغرف السيرفرات. تواصل معنا لدراسة التصميم.",
          ],
        },
      },
    ],
  },
  {
    slug: "hospital-fire-safety",
    date: "2026-06-07",
    cover: "/blog/hospital-fire-safety.png",
    category: { en: "Safety Guides", ar: "أدلة السلامة" },
    title: {
      en: "Fire Safety in Hospitals: Detection, Suppression & Nurse Call",
      ar: "السلامة من الحريق في المستشفيات: الكشف والإطفاء واستدعاء الممرضات",
    },
    excerpt: {
      en: "How hospitals in Egypt protect patients with addressable alarms, clean-agent suppression and integrated nurse call and evacuation.",
      ar: "كيف تحمي المستشفيات في مصر المرضى بأنظمة إنذار معنونة وإطفاء بالغاز النظيف وتكامل استدعاء الممرضات والإخلاء.",
    },
    keywords: [
      "hospital fire safety",
      "healthcare fire systems Egypt",
      "نظام انذار مستشفيات",
      "استدعاء ممرضات",
    ],
    sections: [
      {
        heading: { en: "Patients can't self-evacuate", ar: "المرضى لا يمكنهم الإخلاء الذاتي" },
        body: {
          en: [
            "Hospitals are high-stakes: many patients can't move quickly, so detection must be early and precise, and evacuation carefully staged. Addressable alarm systems pinpoint the exact location to guide a fast response.",
            "Reliability and zoning to protect operating theaters and ICUs are critical.",
          ],
          ar: [
            "المستشفيات عالية الحساسية: كثير من المرضى لا يستطيعون الحركة بسرعة، لذا يجب أن يكون الكشف مبكرًا ودقيقًا والإخلاء على مراحل مدروسة. وأنظمة الإنذار المعنونة تحدد الموقع بدقة لتوجيه استجابة سريعة.",
            "الموثوقية وتقسيم المناطق لحماية غرف العمليات والعناية المركزة أمر بالغ الأهمية.",
          ],
        },
      },
      {
        heading: { en: "Suppression that protects equipment", ar: "إطفاء يحمي المعدات" },
        body: {
          en: [
            "Sensitive areas — imaging rooms, labs and server rooms — benefit from clean-agent suppression rather than water. Kitchens and plant rooms need their own protection.",
            "Systems integrate with building management and the alarm for a coordinated response.",
          ],
          ar: [
            "تستفيد المناطق الحساسة — غرف الأشعة والمعامل وغرف السيرفرات — من الإطفاء بالغاز النظيف بدلًا من المياه. وتحتاج المطابخ وغرف المعدات إلى حماية خاصة بها.",
            "تتكامل الأنظمة مع إدارة المبنى والإنذار لاستجابة منسقة.",
          ],
        },
      },
      {
        heading: { en: "Integrated nurse call & safety", ar: "تكامل استدعاء الممرضات والسلامة" },
        body: {
          en: [
            "Nurse call systems integrated with fire detection help staff respond and manage patient movement during an emergency. The whole ecosystem must meet the Egyptian Fire Code and Civil Defense.",
            "Xenon designs integrated fire, suppression and nurse call systems for hospitals. Contact us for a consultation.",
          ],
          ar: [
            "تساعد أنظمة استدعاء الممرضات المتكاملة مع كشف الحريق العاملين على الاستجابة وإدارة حركة المرضى أثناء الطوارئ. ويجب أن يكون النظام بأكمله مطابقًا للكود المصري للحريق والدفاع المدني.",
            "تقوم زينون بتصميم أنظمة الحريق والإطفاء واستدعاء الممرضات المتكاملة للمستشفيات. تواصل معنا للاستشارة.",
          ],
        },
      },
    ],
  },
  {
    slug: "fire-system-maintenance-guide",
    date: "2026-06-12",
    cover: "/blog/fire-system-maintenance-guide.png",
    category: { en: "Safety Guides", ar: "أدلة السلامة" },
    title: {
      en: "Fire System Maintenance in Egypt: How Often & What's Checked",
      ar: "صيانة أنظمة الحريق في مصر: كل كم مرة وما الذي يُفحص",
    },
    excerpt: {
      en: "A practical maintenance schedule for fire alarms, extinguishers and suppression systems to stay compliant and protected in Egypt.",
      ar: "جدول صيانة عملي لأنظمة إنذار الحريق والطفايات وأنظمة الإطفاء للحفاظ على المطابقة والحماية في مصر.",
    },
    keywords: [
      "fire system maintenance Egypt",
      "صيانة انظمة الحريق",
      "fire extinguisher inspection",
      "عقد صيانة طفايات",
    ],
    sections: [
      {
        heading: {
          en: "How often should you service?",
          ar: "كل كم مرة تتم الصيانة؟",
        },
        body: {
          en: [
            "For most commercial properties in Egypt and the wider MENA region, comprehensive professional maintenance every 6 months is recommended. High-risk environments such as chemical plants and large warehouses often need quarterly inspections.",
            "Monthly visual checks by staff — extinguisher pressure, blocked exits and panel status — supplement the professional visits.",
          ],
          ar: [
            "لمعظم المنشآت التجارية في مصر ومنطقة الشرق الأوسط، يُوصى بصيانة احترافية شاملة كل 6 أشهر. وغالبًا تحتاج البيئات عالية الخطورة مثل المصانع الكيماوية والمخازن الكبيرة إلى فحص ربع سنوي.",
            "الفحوصات البصرية الشهرية من العاملين — ضغط الطفايات والمخارج المسدودة وحالة اللوحة — تكمّل الزيارات الاحترافية.",
          ],
        },
      },
      {
        heading: { en: "What gets checked", ar: "ما الذي يُفحص" },
        body: {
          en: [
            "A proper service covers: alarm panel and detector testing, battery and backup checks, extinguisher pressure testing and refilling, sprinkler and pump-room inspection, and suppression cylinder weight checks.",
            "Each visit should produce a documented maintenance report — essential for Civil Defense inspection.",
          ],
          ar: [
            "تغطي الصيانة الصحيحة: اختبار لوحة الإنذار والكواشف، وفحص البطاريات والاحتياطي، واختبار ضغط الطفايات وإعادة تعبئتها، وفحص الرشاشات وغرفة الطلمبات، وفحص أوزان أسطوانات الإطفاء.",
            "يجب أن تنتج كل زيارة تقرير صيانة موثّق — وهو ضروري لمعاينة الدفاع المدني.",
          ],
        },
      },
      {
        heading: { en: "Maintenance contracts", ar: "عقود الصيانة" },
        body: {
          en: [
            "A scheduled maintenance contract keeps your systems compliant, extends equipment life and avoids surprises at inspection.",
            "Xenon offers maintenance contracts for fire alarm, sprinkler, suppression and extinguisher systems across Egypt. Contact us to set one up.",
          ],
          ar: [
            "يحافظ عقد الصيانة الدوري على مطابقة أنظمتك، ويطيل عمر المعدات، ويتجنب المفاجآت عند المعاينة.",
            "توفر زينون عقود صيانة لأنظمة إنذار الحريق والرشاشات والإطفاء والطفايات في جميع أنحاء مصر. تواصل معنا لإعداد عقد.",
          ],
        },
      },
    ],
  },
  {
    slug: "civil-defense-requirements-shops-2026",
    date: "2026-06-10",
    cover: "/blog/civil-defense-requirements-shops-2026.png",
    category: { en: "Standards & Compliance", ar: "المعايير والاعتماد" },
    title: {
      en: "Civil Defense Requirements for Commercial Shops in Egypt (2026)",
      ar: "متطلبات الدفاع المدني للمحلات التجارية في مصر 2026",
    },
    excerpt: {
      en: "What shops, restaurants and warehouses need to pass Civil Defense inspection in Egypt in 2026 — extinguishers, alarms, suppression and documentation.",
      ar: "ما يحتاجه أصحاب المحلات والمطاعم والمخازن لاجتياز معاينة الدفاع المدني في مصر 2026 — طفايات وإنذار وإطفاء وتوثيق.",
    },
    keywords: [
      "متطلبات الدفاع المدني 2026",
      "شهادة سلامة محل تجاري",
      "Civil Defense requirements Egypt",
      "fire safety certificate Egypt",
    ],
    sections: [
      {
        heading: {
          en: "Requirements vary by activity",
          ar: "المتطلبات تختلف حسب النشاط",
        },
        body: {
          en: [
            "Civil Defense requirements are not the same for every business. A clothing shop differs from a perfume store or an electronics outlet, and high-risk activities like restaurants and chemical warehouses face stricter rules.",
            "High-risk premises increasingly must install automatic suppression (such as FM200) in server and electrical rooms.",
          ],
          ar: [
            "متطلبات الدفاع المدني ليست واحدة لكل نشاط. فمحل الملابس يختلف عن محل العطور أو الأجهزة الكهربائية، وتواجه الأنشطة عالية الخطورة مثل المطاعم والمخازن الكيماوية اشتراطات أكثر صرامة.",
            "يجب على المنشآت عالية الخطورة بشكل متزايد تركيب إطفاء تلقائي (مثل FM200) في غرف الخوادم والكهرباء.",
          ],
        },
      },
      {
        heading: { en: "The essentials checklist", ar: "قائمة الأساسيات" },
        body: {
          en: [
            "Most premises need: serviced fire extinguishers with pressure gauges in the green range, a fire alarm appropriate to the size, clear escape routes with emergency lighting, and — for kitchens — hood suppression.",
            "Keep the annual maintenance report and safety certificate on hand to present during inspection.",
          ],
          ar: [
            "تحتاج معظم المنشآت إلى: طفايات حريق مصانة بمؤشر ضغط في النطاق الأخضر، ونظام إنذار مناسب للمساحة، ومسارات هروب واضحة مع إضاءة طوارئ، وللمطابخ إطفاء شفاطات.",
            "احتفظ بتقرير الصيانة السنوي وشهادة السلامة لتقديمهما أثناء المعاينة.",
          ],
        },
      },
      {
        heading: {
          en: "How to get approved without rework",
          ar: "كيف تحصل على الاعتماد دون إعادة عمل",
        },
        body: {
          en: [
            "The fastest path to approval is designing to the Egyptian Fire Code from the start and documenting everything. Working with an experienced contractor avoids costly rejections at inspection.",
            "Xenon designs, installs and documents systems to Civil Defense requirements and supports you through approval. Contact us for a free assessment.",
          ],
          ar: [
            "أسرع طريق للاعتماد هو التصميم وفق الكود المصري للحريق من البداية وتوثيق كل شيء. والعمل مع مقاول ذي خبرة يتجنب الرفض المكلف عند المعاينة.",
            "تقوم زينون بتصميم وتركيب وتوثيق الأنظمة وفق اشتراطات الدفاع المدني وتدعمك خلال الاعتماد. تواصل معنا للحصول على تقييم مجاني.",
          ],
        },
      },
    ],
  },
  {
    slug: "lithium-battery-fire-safety",
    date: "2026-06-08",
    cover: "/blog/lithium-battery-fire-safety.png",
    category: { en: "Safety Guides", ar: "أدلة السلامة" },
    title: {
      en: "Lithium-Ion Battery Fire Safety for Warehouses & Facilities",
      ar: "السلامة من حرائق بطاريات الليثيوم في المخازن والمنشآت",
    },
    excerpt: {
      en: "Why lithium-ion battery fires are a growing risk in Egypt's warehouses and how to detect and suppress them early.",
      ar: "لماذا تتزايد مخاطر حرائق بطاريات الليثيوم في مخازن مصر وكيف تكتشفها وتُخمدها مبكرًا.",
    },
    keywords: [
      "lithium battery fire safety",
      "warehouse fire protection Egypt",
      "حرائق بطاريات الليثيوم",
      "حماية المخازن من الحريق",
    ],
    sections: [
      {
        heading: {
          en: "Why lithium fires are different",
          ar: "لماذا تختلف حرائق الليثيوم",
        },
        body: {
          en: [
            "Lithium-ion batteries can enter thermal runaway — a self-sustaining reaction that produces intense heat and reignites easily. Storage areas, forklifts and EV charging zones are common sources.",
            "Standard detection may react too late, which is why early thermal and gas detection matters for these hazards.",
          ],
          ar: [
            "يمكن أن تدخل بطاريات الليثيوم في الانفلات الحراري — وهو تفاعل ذاتي الاستمرار ينتج حرارة شديدة ويعاود الاشتعال بسهولة. ومناطق التخزين والرافعات الشوكية ومناطق شحن المركبات الكهربائية مصادر شائعة.",
            "قد يتفاعل الكشف التقليدي متأخرًا، ولذلك يهم الكشف الحراري والغازي المبكر لهذه المخاطر.",
          ],
        },
      },
      {
        heading: {
          en: "Detection and suppression that works",
          ar: "الكشف والإطفاء الفعّال",
        },
        body: {
          en: [
            "A layered approach works best: early-warning aspirating or thermal detection, plus suppression suited to the space. AI vision systems on existing CCTV can flag overheating batteries before flame.",
            "Clear separation, charging-zone controls and trained staff reduce the chance of escalation.",
          ],
          ar: [
            "النهج متعدد الطبقات هو الأفضل: كشف مبكر بالشفط أو حراري، مع إطفاء مناسب للمكان. ويمكن لأنظمة الرؤية بالذكاء الاصطناعي على كاميرات المراقبة الحالية رصد البطاريات شديدة السخونة قبل اللهب.",
            "الفصل الواضح وضوابط مناطق الشحن وتدريب العاملين تقلل فرص التصعيد.",
          ],
        },
      },
      {
        heading: { en: "Protecting your facility", ar: "حماية منشأتك" },
        body: {
          en: [
            "If you store, charge or handle lithium batteries, your fire strategy should be designed for this specific hazard and meet the Egyptian Fire Code.",
            "Xenon designs detection and suppression for warehouses and logistics facilities. Contact us for a site assessment.",
          ],
          ar: [
            "إذا كنت تخزّن أو تشحن أو تتعامل مع بطاريات الليثيوم، فيجب تصميم استراتيجية الحريق لهذا الخطر تحديدًا وأن تكون مطابقة للكود المصري للحريق.",
            "تقوم زينون بتصميم الكشف والإطفاء للمخازن ومنشآت اللوجستيات. تواصل معنا لمعاينة الموقع.",
          ],
        },
      },
    ],
  },
  {
    slug: "ai-smart-fire-detection-egypt",
    date: "2026-06-06",
    cover: "/blog/ai-smart-fire-detection-egypt.png",
    category: { en: "Fire Alarm", ar: "إنذار الحريق" },
    title: {
      en: "Smart & AI Fire Detection: What It Means for Buildings in Egypt",
      ar: "الكشف الذكي عن الحريق والذكاء الاصطناعي: ماذا يعني لمبانيك في مصر",
    },
    excerpt: {
      en: "How AI-powered and IoT-connected fire detection is changing protection for warehouses, data centers and high-value facilities in Egypt.",
      ar: "كيف يغيّر الكشف عن الحريق المعتمد على الذكاء الاصطناعي وإنترنت الأشياء حماية المخازن ومراكز البيانات والمنشآت عالية القيمة في مصر.",
    },
    keywords: [
      "smart fire detection",
      "AI fire detection Egypt",
      "IoT fire alarm",
      "الكشف الذكي عن الحريق",
    ],
    sections: [
      {
        heading: {
          en: "What 'smart' detection actually adds",
          ar: "ما الذي يضيفه الكشف الذكي فعليًا",
        },
        body: {
          en: [
            "Smart fire detection layers AI analytics and IoT connectivity on top of conventional detectors and CCTV. Instead of waiting for smoke to reach a point detector, vision-based systems can flag heat or early flame from camera feeds, and connected panels share data for remote monitoring.",
            "For Egyptian facilities this means faster alerts, fewer false alarms, and the ability to monitor multiple sites from one dashboard.",
          ],
          ar: [
            "يضيف الكشف الذكي تحليلات الذكاء الاصطناعي واتصال إنترنت الأشياء فوق الكواشف التقليدية وكاميرات المراقبة. وبدلًا من انتظار وصول الدخان إلى كاشف نقطي، يمكن للأنظمة المعتمدة على الرؤية رصد الحرارة أو اللهب المبكر من بث الكاميرات، وتتشارك اللوحات المتصلة البيانات للمراقبة عن بُعد.",
            "بالنسبة للمنشآت المصرية يعني هذا تنبيهات أسرع وإنذارات كاذبة أقل والقدرة على مراقبة عدة مواقع من لوحة واحدة.",
          ],
        },
      },
      {
        heading: { en: "Where it matters most", ar: "أين يكون الأهم" },
        body: {
          en: [
            "High-value and high-risk environments benefit most: data centers, warehouses, factories and logistics facilities — especially those storing lithium-ion batteries, where early thermal detection can catch a problem hours before flame.",
            "Most deployments plug into existing CCTV, so you rarely need a full hardware overhaul.",
          ],
          ar: [
            "تستفيد البيئات عالية القيمة وعالية الخطورة أكثر: مراكز البيانات والمخازن والمصانع ومنشآت اللوجستيات — خاصة تلك التي تخزّن بطاريات الليثيوم، حيث يلتقط الكشف الحراري المبكر المشكلة قبل اللهب بساعات.",
            "تعمل معظم التطبيقات مع كاميرات المراقبة الحالية، لذا نادرًا ما تحتاج إلى تغيير كامل للأجهزة.",
          ],
        },
      },
      {
        heading: { en: "Is it right for you?", ar: "هل يناسبك؟" },
        body: {
          en: [
            "Smart detection complements — not replaces — a code-compliant fire alarm system. The foundation still needs to meet the Egyptian Fire Code and Civil Defense. We help you design a compliant base system and add smart monitoring where it adds real value.",
            "Talk to us about a layered approach that fits your facility and budget.",
          ],
          ar: [
            "يكمّل الكشف الذكي نظام إنذار حريق مطابقًا للكود — ولا يحل محله. فالأساس يجب أن يظل مطابقًا للكود المصري للحريق واشتراطات الدفاع المدني. نساعدك في تصميم نظام أساسي مطابق وإضافة المراقبة الذكية حيث تضيف قيمة حقيقية.",
            "تحدث معنا عن نهج متعدد الطبقات يناسب منشأتك وميزانيتك.",
          ],
        },
      },
    ],
  },
  {
    slug: "fm200-vs-co2-suppression",
    date: "2026-06-05",
    cover: "/blog/fm200-vs-co2-suppression.png",
    category: { en: "Suppression", ar: "أنظمة الإطفاء" },
    title: {
      en: "FM200 vs CO2 Gas Suppression: Choosing the Right Clean Agent",
      ar: "الفرق بين أنظمة الإطفاء FM200 وCO2: كيف تختار النظام المناسب",
    },
    excerpt: {
      en: "When to use FM200 vs CO2 fire suppression for server rooms, archives and high-risk areas — and what drives the cost in Egypt.",
      ar: "متى تستخدم نظام الإطفاء FM200 ومتى CO2 لغرف السيرفرات والأرشيف والأماكن عالية الخطورة — وما الذي يحدد التكلفة في مصر.",
    },
    keywords: [
      "FM200 gas suppression",
      "CO2 fire suppression",
      "نظام اطفاء FM200",
      "نظام اطفاء CO2",
    ],
    sections: [
      {
        heading: {
          en: "FM200: a clean agent for occupied spaces",
          ar: "FM200: غاز نظيف للأماكن المأهولة",
        },
        body: {
          en: [
            "FM200 is a clean agent that suppresses fire quickly without leaving residue and without conducting electricity, making it ideal for sensitive, occupied areas such as server rooms, control rooms and archives.",
            "Because it discharges in seconds and is safe at design concentrations, it protects both people and delicate equipment.",
          ],
          ar: [
            "غاز FM200 هو غاز نظيف يُخمد الحريق بسرعة دون ترك رواسب ودون توصيل الكهرباء، مما يجعله مثاليًا للأماكن الحساسة والمأهولة مثل غرف السيرفرات وغرف التحكم والأرشيف.",
            "ولأنه يُفرَّغ خلال ثوانٍ وآمن عند تركيزات التصميم، فإنه يحمي الأشخاص والمعدات الدقيقة معًا.",
          ],
        },
      },
      {
        heading: {
          en: "CO2: for unoccupied high-risk areas",
          ar: "CO2: للأماكن غير المأهولة عالية الخطورة",
        },
        body: {
          en: [
            "CO2 suppresses fire by displacing oxygen, which makes it highly effective for unoccupied, high-hazard spaces such as generator rooms, paint booths and certain industrial enclosures.",
            "Because it reduces oxygen, CO2 requires strict safety controls and is not used for normally occupied rooms.",
          ],
          ar: [
            "يُخمد ثاني أكسيد الكربون الحريق عبر إزاحة الأكسجين، مما يجعله فعّالًا جدًا للأماكن غير المأهولة عالية الخطورة مثل غرف المولدات وكبائن الدهان وبعض الحيّزات الصناعية.",
            "ولأنه يقلل الأكسجين، يتطلب CO2 ضوابط سلامة صارمة ولا يُستخدم للغرف المأهولة عادةً.",
          ],
        },
      },
      {
        heading: { en: "What drives the cost", ar: "ما الذي يحدد التكلفة" },
        body: {
          en: [
            "Cost depends on the protected volume, the number and capacity of cylinders, detection and the pipework. A proper site assessment is the only way to size the system correctly and stay compliant.",
            "Xenon designs, supplies, installs and refills FM200 and CO2 systems and cylinders. Contact us for a free assessment and quotation.",
          ],
          ar: [
            "تعتمد التكلفة على الحجم المراد حمايته، وعدد وسعة الأسطوانات، والكشف، وشبكة المواسير. والمعاينة الصحيحة للموقع هي الطريقة الوحيدة لتحديد حجم النظام بدقة والبقاء مطابقًا.",
            "تقوم زينون بتصميم وتوريد وتركيب وإعادة تعبئة أنظمة واسطوانات FM200 وCO2. تواصل معنا للحصول على تقييم وعرض سعر مجاني.",
          ],
        },
      },
    ],
  },
  {
    slug: "egyptian-fire-code-305",
    date: "2026-05-28",
    cover: "/blog/egyptian-fire-code-305.png",
    category: { en: "Standards & Compliance", ar: "المعايير والاعتماد" },
    title: {
      en: "The Egyptian Fire Code (Code 305) & Civil Defense Requirements Explained",
      ar: "دليل الكود المصري للحريق (كود 305) واشتراطات الدفاع المدني",
    },
    excerpt: {
      en: "A practical overview of the Egyptian Fire Code 305 and Civil Defense requirements every facility owner in Egypt should know before building approval.",
      ar: "نظرة عملية على الكود المصري للحريق (كود 305) واشتراطات الدفاع المدني التي يجب أن يعرفها كل صاحب منشأة في مصر قبل الاعتماد.",
    },
    keywords: [
      "Egyptian fire code 305",
      "civil defense approved",
      "الكود المصري للحريق",
      "اشتراطات الدفاع المدني",
    ],
    sections: [
      {
        heading: { en: "What is Code 305?", ar: "ما هو كود 305؟" },
        body: {
          en: [
            "Code 305 is the Egyptian Code for the foundations of design and execution requirements to protect facilities from fire. It governs how fire protection systems are designed and installed across different building types, prioritizing the protection of life first, then property.",
            "It is issued in parts covering design foundations, building services systems, detection and alarm systems, and water-based firefighting systems.",
          ],
          ar: [
            "كود 305 هو الكود المصري لأسس التصميم واشتراطات التنفيذ لحماية المنشآت من الحريق. ينظّم كيفية تصميم وتركيب أنظمة الحماية من الحريق في مختلف أنواع المباني، مع إعطاء الأولوية لحماية الأرواح أولًا ثم الممتلكات.",
            "ويصدر في أجزاء تغطي أسس التصميم، وأنظمة خدمات المبنى، وأنظمة الكشف والإنذار، وأنظمة الإطفاء بالمياه.",
          ],
        },
      },
      {
        heading: { en: "Core requirements", ar: "الاشتراطات الأساسية" },
        body: {
          en: [
            "Requirements span site and structural considerations, means of escape, smoke ventilation, fire detection and alarm devices, the water resources required for firefighting, electrical and lighting provisions, and Civil Defense measures.",
            "Systems are also commonly referenced against international standards such as NFPA and UL/FM listings for equipment and pump rooms.",
          ],
          ar: [
            "تشمل الاشتراطات اعتبارات الموقع والإنشاء، ووسائل النجاة، وتهوية الدخان، وأجهزة كشف وإنذار الحريق، والموارد المائية اللازمة للإطفاء، والتجهيزات الكهربائية والإضاءة، وتدابير الدفاع المدني.",
            "كما يُشار إلى الأنظمة عادةً وفق المعايير الدولية مثل NFPA واعتمادات UL/FM للمعدات وغرف الطلمبات.",
          ],
        },
      },
      {
        heading: {
          en: "Getting your facility approved",
          ar: "اعتماد منشأتك",
        },
        body: {
          en: [
            "Civil Defense approval requires designs and documentation that meet Code 305. Working with an experienced contractor reduces rejections and rework during inspection.",
            "Xenon designs, documents and installs systems to Code 305 and Civil Defense requirements, and supports clients through inspection and approval.",
          ],
          ar: [
            "تتطلب موافقة الدفاع المدني تصميمات ومستندات مطابقة لكود 305. والعمل مع مقاول ذي خبرة يقلل الرفض وإعادة العمل أثناء المعاينة.",
            "تقوم زينون بتصميم وتوثيق وتركيب الأنظمة وفق كود 305 واشتراطات الدفاع المدني، وتدعم العملاء خلال المعاينة والاعتماد.",
          ],
        },
      },
    ],
  },
  {
    slug: "addressable-vs-conventional-fire-alarm",
    date: "2026-05-20",
    cover: "/blog/addressable-vs-conventional-fire-alarm.png",
    category: { en: "Fire Alarm", ar: "إنذار الحريق" },
    title: {
      en: "Addressable vs Conventional Fire Alarm Systems: Which Do You Need?",
      ar: "الفرق بين نظام إنذار الحريق المعنون والتقليدي: أيهما تحتاج؟",
    },
    excerpt: {
      en: "Understand the practical difference between conventional and addressable fire alarm systems and how to choose the right one for your building in Egypt.",
      ar: "تعرّف على الفرق العملي بين نظام إنذار الحريق التقليدي والمعنون وكيفية اختيار النظام المناسب لمبناك في مصر.",
    },
    keywords: [
      "addressable fire alarm system",
      "conventional fire alarm system",
      "انذار حريق معنون",
      "انذار حريق تقليدي",
    ],
    sections: [
      {
        heading: {
          en: "How a conventional system works",
          ar: "كيف يعمل النظام التقليدي",
        },
        body: {
          en: [
            "A conventional fire alarm system divides the building into zones, with each zone wired to a circuit on the control panel. When a detector activates, the panel shows which zone triggered the alarm — but not the exact device.",
            "This keeps cost down and suits smaller premises such as shops, small offices and villas, where locating the fire within a zone is fast enough.",
          ],
          ar: [
            "يقسم نظام إنذار الحريق التقليدي المبنى إلى مناطق (Zones)، وتُوصَّل كل منطقة بدائرة على لوحة التحكم. وعند تنشيط أحد الكواشف تُظهر اللوحة المنطقة التي أطلقت الإنذار — لكن دون تحديد الجهاز بدقة.",
            "هذا يقلل التكلفة ويناسب المنشآت الصغيرة مثل المحلات والمكاتب الصغيرة والفلل، حيث يكون تحديد الحريق داخل المنطقة سريعًا بما يكفي.",
          ],
        },
      },
      {
        heading: {
          en: "How an addressable system works",
          ar: "كيف يعمل النظام المعنون",
        },
        body: {
          en: [
            "In an addressable system every detector and module has a unique address, so the panel reports the exact device and location of an alarm or fault. Devices share a loop, which simplifies wiring on large sites.",
            "This precision is essential for hospitals, malls, factories, hotels and high-rise buildings, where finding the source quickly saves lives and reduces downtime.",
          ],
          ar: [
            "في النظام المعنون يحمل كل كاشف ووحدة عنوانًا فريدًا، لذا تُبلّغ اللوحة عن الجهاز والموقع بدقة عند حدوث إنذار أو عطل. وتتشارك الأجهزة في حلقة واحدة (Loop) مما يبسّط التمديدات في المواقع الكبيرة.",
            "هذه الدقة ضرورية للمستشفيات والمولات والمصانع والفنادق والمباني المرتفعة، حيث يوفّر تحديد المصدر بسرعة الأرواح ويقلل التوقف.",
          ],
        },
      },
      {
        heading: { en: "Which one should you choose?", ar: "أيهما تختار؟" },
        body: {
          en: [
            "Choose conventional for small, simple buildings on a tighter budget. Choose addressable when the building is large or complex, when you need device-level location, or when the Egyptian Fire Code and Civil Defense require it for the occupancy type.",
            "Xenon assesses each site and recommends the right system, then supplies, installs and maintains it to code. Contact us for a free survey.",
          ],
          ar: [
            "اختر النظام التقليدي للمباني الصغيرة والبسيطة وبميزانية أقل. واختر النظام المعنون عندما يكون المبنى كبيرًا أو معقدًا، أو عند الحاجة لتحديد موقع كل جهاز، أو عندما يتطلب الكود المصري للحريق والدفاع المدني ذلك حسب نوع النشاط.",
            "تقوم زينون بدراسة كل موقع وترشيح النظام المناسب، ثم توريده وتركيبه وصيانته وفق الكود. تواصل معنا لمعاينة مجانية.",
          ],
        },
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
