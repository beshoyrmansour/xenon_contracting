export type ProjectSector =
  | "banking"
  | "sports"
  | "healthcare"
  | "industrial"
  | "commercial"
  | "automotive"
  | "education"
  | "technology"
  | "other";

export interface Project {
  nameEn: string;
  nameAr: string;
  sector: ProjectSector;
  location: string;
  locationAr: string;
  via?: string;
}

export const projects: Project[] = [
  // Banking & Finance
  { nameEn: "National Bank of Egypt — Minya Branch", nameAr: "البنك الاهلي المصري - المنيا", sector: "banking", location: "Minya", locationAr: "المنيا", via: "Al-Karama Contracting" },
  { nameEn: "Cairo Bank", nameAr: "بنك القاهرة", sector: "banking", location: "Cairo", locationAr: "القاهرة", via: "Concept Contracting" },
  { nameEn: "Alexandria Bank", nameAr: "بنك الاسكندرية", sector: "banking", location: "Cairo", locationAr: "القاهرة", via: "Egyptian Trading & Supplies Co." },
  { nameEn: "National Union Bank", nameAr: "بنك الاتحاد الوطني", sector: "banking", location: "Cairo", locationAr: "القاهرة", via: "Keer Trading & Supplies Co." },
  // Sports & Recreation
  { nameEn: "Wadi Degla Club — New Damietta", nameAr: "نادي وادي دجلة - دمياط الجديدة", sector: "sports", location: "Damietta", locationAr: "دمياط" },
  { nameEn: "Wadi Degla Clubs Company — Maadi", nameAr: "شركة اندية وادي دجلة - المعادي", sector: "sports", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Wadi Degla Front — Maadi", nameAr: "نادي وادي دجلة فرونت - المعادي", sector: "sports", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Wadi Degla Club — October", nameAr: "نادي وادي دجلة - اكتوبر", sector: "sports", location: "October City", locationAr: "مدينة أكتوبر" },
  { nameEn: "Wadi Degla Branches Across Egypt", nameAr: "فروع اندية وادي دجلة في الجمهورية", sector: "sports", location: "Multiple", locationAr: "متعدد" },
  // Healthcare
  { nameEn: "Police Hospital — Alexandria", nameAr: "مستشفى الشرطة - الاسكندرية", sector: "healthcare", location: "Alexandria", locationAr: "الإسكندرية", via: "Keer Co." },
  { nameEn: "Good Shepherd Hospital", nameAr: "مستشفى الراعي الصالح", sector: "healthcare", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Dr. Osama Eye Clinic", nameAr: "عيادة الدكتور اسامة للعيون", sector: "healthcare", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Najjar Clinics Complex — Alexandria", nameAr: "مجمع عيادات النجار - الاسكندرية", sector: "healthcare", location: "Alexandria", locationAr: "الإسكندرية" },
  // Industrial
  { nameEn: "Multex Egypt Factory", nameAr: "مصنع ميلتكس ايجيبت - اكتوبر", sector: "industrial", location: "October City", locationAr: "أكتوبر" },
  { nameEn: "Al-Tawfiq Thread Factory", nameAr: "مصنع التوفيق للخيوط", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Badr Light Industries Factory", nameAr: "مصنع البدر للصناعات الخفيفة", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Sphinx Sanitary Ware Factory", nameAr: "مصنع سفنكس للادوات الصحية", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Rand Tex Clothing Factory", nameAr: "مصنع راند تكس للملابس", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Fiomark Mattress Factory", nameAr: "مصنع فيومارك للمراتب", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Mina Plast Factory", nameAr: "مصنع مينا بلاست", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Horus Rubber Factory", nameAr: "مصنع حورس للكاوتشوك", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "In Jack Furniture Factory", nameAr: "مصنع ان جاك لصناعة الموبيليات", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Salam Plastics Factory", nameAr: "مصنع السلام لصناعة البلاستيك", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Egyptian-Turkish Textile Factory", nameAr: "مصنع المصري التركي لصناعة النسيج", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Advanced Plastics Factory", nameAr: "مصنع ادفانسد لصناعة البلاستيك", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Moheba Animal Feed Co.", nameAr: "شركة المحبة للاعلاف", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Alpha Vida Animal Feed Co.", nameAr: "شركة الفا فيدا لصناعة الاعلاف", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Islamia Carton Co.", nameAr: "شركة الاسلامية للكرتون", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Asriya Thread Manufacturing", nameAr: "العصرية لتصنيع الخيوط", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Egyptian Carton Co.", nameAr: "المصرية للكرتون", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "International Plastics Co.", nameAr: "الشركة العالمية للبلاستيك", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "United Dyeing Co.", nameAr: "الشركة المتحدة للصباغة", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Sezo Tex Clothing", nameAr: "سيزو تكس للملابس", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Masas Venus Clothing Co.", nameAr: "شركة مساس فينوس للملابس", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Safir Clothing & Knitwear", nameAr: "السفير للملبوسات والتريكو", sector: "industrial", location: "Cairo", locationAr: "القاهرة" },
  // Commercial & Retail
  { nameEn: "Al-Imam Mall", nameAr: "مول الامام", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Bolotex Curtain Manufacturing Co.", nameAr: "شركة بولوتكس لصناعة الستائر", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Grace Time Printing", nameAr: "مطبعة جريس تيم", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Tipo Pack Co.", nameAr: "شركة تيبو باك", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Sheta Warehouses Group", nameAr: "مجموعة مخازن شتة", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Babawy Cold Storage", nameAr: "ثلاجة الباوي", sector: "commercial", location: "Cairo", locationAr: "القاهرة" },
  // Automotive
  { nameEn: "BYD Car Service Center", nameAr: "مركز خدمة سيارات BYD", sector: "automotive", location: "Cairo", locationAr: "القاهرة" },
  // Education
  { nameEn: "Nile Language School", nameAr: "مدرسة النيل للغات", sector: "education", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Al-Salam Private School — Banha", nameAr: "مدرسة السلام الخاصة - بنها", sector: "education", location: "Banha", locationAr: "بنها" },
  // Technology & Telecom
  { nameEn: "Engineering Group for Technological Systems", nameAr: "شركة المجموعة الهندسية للنظم التكنولوجية", sector: "technology", location: "Cairo", locationAr: "القاهرة" },
  { nameEn: "Etisalat Service Center", nameAr: "مركز خدمة اتصالات", sector: "technology", location: "Cairo", locationAr: "القاهرة" },
  // Other
  { nameEn: "Al-Haras Center — Banha", nameAr: "سنتر الهراس - بنها", sector: "other", location: "Banha", locationAr: "بنها" },
];

export const sectorCounts: Record<ProjectSector, number> = projects.reduce(
  (acc, p) => {
    acc[p.sector] = (acc[p.sector] || 0) + 1;
    return acc;
  },
  {} as Record<ProjectSector, number>
);
