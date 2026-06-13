// Bilingual blog content. Each article is rendered at /[locale]/blog/[slug]
// (English under /en). Targets the informational keyword cluster from the SEO
// strategy (addressable vs conventional, Egyptian Fire Code 305, FM200 vs CO2).

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
  title: Bilingual;
  excerpt: Bilingual;
  keywords: string[];
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "addressable-vs-conventional-fire-alarm",
    date: "2026-05-20",
    cover: "/services/fireAlarm.png",
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
        heading: {
          en: "Which one should you choose?",
          ar: "أيهما تختار؟",
        },
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
  {
    slug: "egyptian-fire-code-305",
    date: "2026-05-28",
    cover: "/services/sprinkler.png",
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
        heading: {
          en: "What is Code 305?",
          ar: "ما هو كود 305؟",
        },
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
        heading: {
          en: "Core requirements",
          ar: "الاشتراطات الأساسية",
        },
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
    slug: "fm200-vs-co2-suppression",
    date: "2026-06-05",
    cover: "/services/gasSuppression.png",
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
        heading: {
          en: "What drives the cost",
          ar: "ما الذي يحدد التكلفة",
        },
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
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
