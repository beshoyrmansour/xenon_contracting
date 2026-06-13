// Bilingual city landing pages targeting "مكافحة حريق + [city]" local-intent
// searches. Rendered at /[locale]/locations/[city] (English under /en).

export interface Bilingual {
  en: string;
  ar: string;
}

export interface City {
  slug: string;
  name: Bilingual;
  intro: Bilingual;
  areas: { en: string[]; ar: string[] };
}

export const cities: City[] = [
  {
    slug: "cairo",
    name: { en: "Cairo", ar: "القاهرة" },
    intro: {
      en: "Xenon provides fire fighting, fire alarm, CCTV and security systems across Cairo — supply, installation and maintenance compliant with the Egyptian Fire Code and Civil Defense for offices, hospitals, banks, malls and factories.",
      ar: "تقدم زينون أنظمة مكافحة الحريق والإنذار وكاميرات المراقبة والأمن في جميع أنحاء القاهرة — توريد وتركيب وصيانة مطابقة للكود المصري للحريق واشتراطات الدفاع المدني للمكاتب والمستشفيات والبنوك والمولات والمصانع.",
    },
    areas: {
      en: ["Nasr City", "Heliopolis", "Maadi", "New Cairo", "Downtown", "Gesr El Suez"],
      ar: ["مدينة نصر", "مصر الجديدة", "المعادي", "القاهرة الجديدة", "وسط البلد", "جسر السويس"],
    },
  },
  {
    slug: "giza",
    name: { en: "Giza", ar: "الجيزة" },
    intro: {
      en: "Xenon delivers fire fighting and security systems across Giza — including 6th of October and Sheikh Zayed — with design, supply, installation and maintenance to the Egyptian Fire Code and Civil Defense requirements.",
      ar: "توفر زينون أنظمة مكافحة الحريق والأمن في جميع أنحاء الجيزة — بما في ذلك 6 أكتوبر والشيخ زايد — مع التصميم والتوريد والتركيب والصيانة وفق الكود المصري للحريق واشتراطات الدفاع المدني.",
    },
    areas: {
      en: ["6th of October", "Sheikh Zayed", "Dokki", "Mohandessin", "Haram", "Faisal"],
      ar: ["6 أكتوبر", "الشيخ زايد", "الدقي", "المهندسين", "الهرم", "فيصل"],
    },
  },
  {
    slug: "alexandria",
    name: { en: "Alexandria", ar: "الإسكندرية" },
    intro: {
      en: "Xenon installs and maintains fire fighting, fire alarm and security systems across Alexandria for industrial, commercial and healthcare facilities — fully compliant with the Egyptian Fire Code and Civil Defense.",
      ar: "تقوم زينون بتركيب وصيانة أنظمة مكافحة الحريق والإنذار والأمن في جميع أنحاء الإسكندرية للمنشآت الصناعية والتجارية والصحية — مطابقة بالكامل للكود المصري للحريق واشتراطات الدفاع المدني.",
    },
    areas: {
      en: ["Smouha", "Sidi Gaber", "Miami", "Borg El Arab", "Agami", "Montaza"],
      ar: ["سموحة", "سيدي جابر", "ميامي", "برج العرب", "العجمي", "المنتزه"],
    },
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
