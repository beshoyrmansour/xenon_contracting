# Xenon Trade & Contracting — Portfolio Website Specification

> **Purpose:** This document provides everything needed for Claude Code to build a bilingual (English/Arabic) company portfolio website for Xenon Trade & Contracting using Next.js + Tailwind CSS.

---

## 0. Competitor Analysis & Key Feature Benchmarks

### Local & Regional Competitors Analyzed

| Company | Region | Key Strength |
|---------|--------|-------------|
| **IBC Egypt** (ibcegypt.com) | Egypt | Integrated CCTV, fire alarms, security — leader since 1994 |
| **Technonet** (technonet-eg.com) | Egypt | 400+ employees, sprinklers, gas suppression, 3 Cairo locations |
| **IFSS Group Egypt** (egypt.ifssgroup.com) | Egypt | Turn-key fire safety and security integrator since 2016 |
| **Comatrol Systems** (comatrolgroup.com) | Egypt | 35+ years, Hochiki distributor, CCTV specialist |
| **Giants Security** (giantssecurityeg.com) | Egypt | Full security systems, gas detection, fire alarms |
| **EGITS** (egits.net) | Egypt | Smart fire safety, conventional + addressable alarms |

### International Competitors Analyzed

| Company | Region | Key Strength |
|---------|--------|-------------|
| **NAFFCO** (naffco.com) | UAE | Foremost fire truck/vehicle manufacturer + systems |
| **MAF Fire Middle East** (maffire.com) | Dubai | Top fire protection contractor since 2012 |
| **Delmont Fire & Safety** (delmont.ae) | Dubai | Dubai Civil Defense A+ rated contractor |
| **Johnson Controls** | Global | Integrated fire detection, suppression, maintenance |
| **Pye-Barker Fire & Safety** | USA | Largest fully integrated provider, 200+ locations |
| **SimpliSafe** (simplisafe.com) | USA | Award-winning modern security website design |
| **Forcepoint** (forcepoint.com) | USA | Won Best B2B Website Award (WebAward 2021) |

### Key Features Found Across Competitors

Below is a feature matrix showing what top competitors implement. Features marked with **[MUST]** should be in v1. Features marked with **[NICE]** are recommended enhancements.

#### Hero Section Patterns
- **[MUST]** Full-width hero with bold headline + 2 CTA buttons (primary: "Request Quote", secondary: "View Projects")
- **[MUST]** Dark overlay background with gradient or geometric fire-safety pattern
- **[NICE]** Looping background video showing installation/fire systems in action (15-20 seconds)
- **[NICE]** Particle or subtle flame animation effect in hero background

#### Navigation Patterns
- **[MUST]** Sticky header that stays visible on scroll, shrinks slightly on scroll-down
- **[MUST]** Mega-menu dropdown for Services showing icons + service names in a grid
- **[MUST]** Prominent phone CTA button in header ("Call Now" with phone icon)
- **[MUST]** Language toggle (EN/AR) clearly visible in header
- **[NICE]** Breadcrumb trails on inner pages for navigation clarity

#### Trust Signals (Critical — most competitors emphasize these)
- **[MUST]** Animated statistics counters: years of experience, projects completed, service areas, partner brands
- **[MUST]** Client logo grid/carousel grouped by sector (banks, clubs, hospitals, factories)
- **[MUST]** Certification badges displayed in footer AND on About page (tax reg, commercial reg, IBC distributorship)
- **[MUST]** "Why Choose Us" section with 4 trust cards: Licensed, Experienced, 24/7 Support, International Standards
- **[NICE]** Video testimonials from clients
- **[NICE]** Google Reviews / third-party review badges

#### Services Presentation
- **[MUST]** Icon-based service cards with benefit headline (not paragraph-heavy descriptions)
- **[MUST]** Each service links to a dedicated section or anchor with: icon, description, brands used, industries served
- **[NICE]** "How It Works" 3-5 step process section (Consultation → Design → Installation → Testing → Maintenance)
- **[NICE]** Interactive service selector: user picks building type → sees recommended services

#### Portfolio Presentation
- **[MUST]** Filterable grid by sector with category badges
- **[MUST]** Each project card: client name (EN/AR), sector icon, location
- **[NICE]** Case study template for highlighted projects: Challenge → Solution → Results format
- **[NICE]** Before/after imagery for projects (when real photos are available)
- **[NICE]** Project statistics per sector (e.g., "21 Industrial Projects", "5 Healthcare Projects")

#### Lead Generation & CTAs
- **[MUST]** Action-oriented CTA buttons: "Schedule Free Inspection" / "Get a Quote" (not generic "Submit")
- **[MUST]** Contact form with smart defaults: Name, Phone, Email, Service dropdown, Message (max 5 fields)
- **[MUST]** WhatsApp floating button (bottom-right corner)
- **[MUST]** Click-to-call on mobile (phone number tappable everywhere)
- **[NICE]** Exit-intent popup offering free consultation
- **[NICE]** Interactive quote calculator: select building type → square meters → systems needed → estimated range

#### Interactive Features (Differentiators)
- **[NICE]** Interactive coverage map of Egypt showing project locations (Cairo, Alexandria, Damietta, Banha, October City)
- **[NICE]** Service integration diagram showing how fire alarm + CCTV + access control work together
- **[NICE]** FAQ accordion section with common fire safety questions
- **[NICE]** Live chat widget with AI fallback for after-hours

#### Mobile Experience (92% of contractor leads come from mobile)
- **[MUST]** Mobile-first responsive design, load time < 3 seconds
- **[MUST]** Thumb-friendly buttons (min 44x44px touch targets)
- **[MUST]** Sticky mobile header with hamburger menu + click-to-call
- **[MUST]** Full-width cards and simplified navigation (max 5 menu items)
- **[MUST]** 16px minimum body text, clear section separation

#### Footer Patterns
- **[MUST]** Multi-column footer: Quick Links, Services list, Contact info, Social links
- **[MUST]** Certification badges row in footer
- **[MUST]** Emergency/urgent contact number highlighted in red
- **[NICE]** Newsletter signup form in footer
- **[NICE]** Mini site map links

---

## 1. Company Overview

**Company Name:** Xenon Trade & Contracting (شركة زينون للتجارة والمقاولات)

**Industry:** Fire safety, security systems, and electrical contracting

**Founded:** February 2012

**Owner / Managing Engineer:** Eng. Mina Wagdy Wadee Ibrahim (م. مينا وجدي وديع ابراهيم)

**Tagline (suggested):** "Your Trusted Partner in Fire Safety & Security Solutions" / "شريكك الموثوق في حلول السلامة والأمان"

**About the Company:**
Xenon Trade & Contracting is one of Egypt's leading companies in the field of technological development. The company operates with a high level of expertise in electrical works, mechanical works, low-current systems, and various network installations. Xenon is dedicated to competing in the market by delivering high-quality technological solutions at competitive prices, completing all projects according to international codes and industry standards. The company specializes in contracting, trading, supply, installation, and maintenance across multiple fire safety and security disciplines.

---

## 2. Contact Information

| Field | Value |
|-------|-------|
| Phone | 01221715027 |
| Email (Engineering) | eng.mina@xenon.com.eg |
| Email (Sales) | sales@xenon.com.eg |
| Address | 28 A Refaat St., Road Elfarag, Cairo, Egypt |
| LinkedIn | https://www.linkedin.com/in/xenon-contracting-a755223b6 |
| Website Domain | www.xenon.com.eg |

---

## 3. Services (10 Core Disciplines)

Each service should have its own section/card on the Services page with an icon, short description, and relevant brands.

### 3.1 Electrical Contracting (المقاولات الكهربائية)
Electrical contracting, networks, electrical extensions, panels, and lighting systems for commercial, industrial, and residential projects.

### 3.2 Fire Alarm Systems (الانذار المبكر ضد الحريق)
Early warning fire detection systems — both conventional and addressable.
**Brands:** Honeywell, Hochiki, Apollo, Simplex, Firelight

### 3.3 Automatic Water Firefighting & Sprinkler Systems (الاطفاء الآلي بالماء وغرف الطلمبات)
Sprinkler systems and pump rooms (UL/FM listed and non-UL).
**Brands:** TYCO, Kidde, Giacomini
**Pump Brands:** Grundfos, Aurora, Fairbanks Morse, Patterson, Peerless, Watex

### 3.4 Gas-Based Fire Suppression (الاطفاء الآلي بالغازات)
FM200 and CO2 gas suppression systems for server rooms, archives, and sensitive areas.
**Brands:** TYCO, Kidde

### 3.5 Kitchen Hood Fire Suppression (الاطفاء الآلي للمطابخ)
Automatic kitchen hood fire suppression systems for commercial kitchens and restaurants.

### 3.6 CCTV Surveillance Systems (كاميرات المراقبة)
Closed-circuit television surveillance systems for comprehensive property monitoring.

### 3.7 Public Address & Intercom Systems (اذاعة داخلية)
Internal broadcasting, paging, and intercom systems for industrial, commercial, and hospitality facilities.

### 3.8 Intrusion / Burglar Alarm Systems (الانذار المبكر ضد السرقة)
Early warning burglar and intrusion detection systems.

### 3.9 Access Control & PBX Systems (انظمة التحكم في الدخول وسنترالات)
Access control systems, attendance tracking, and telephone exchange (PBX) systems.

### 3.10 Nurse Call Systems (استدعاء ممرضات)
Hospital and healthcare nurse call and patient alert systems.

---

## 4. Partner Brands & Authorized Distributorships

Xenon is an **authorized distributor for IBC (International Business & Communications)** and works with the following international brands:

| Brand | Origin | Specialization |
|-------|--------|---------------|
| **iiD / iiD 2 Secure** | Spain | CCTV surveillance and video transmission over phone/computer networks |
| **Fire Products** | UK | Conventional Fire Alarm Systems |
| **Hochiki** | UK/Japan | Addressable Fire Alarm Systems |
| **Teletek Electronics** | Europe | Intrusion Alarm Systems |
| **Farfisa** | Italy | Intercom and CCTV surveillance systems |
| **JD-Media** | South Korea | Public address systems, paging units, video conferencing |
| **TOA** | Japan | Public address, paging, video conferencing, BMS integration |
| **EiD** | USA/Malaysia | Access control systems and attendance tracking |
| **Honeywell** | USA | Fire alarm systems |
| **Apollo** | UK | Fire detection |
| **Simplex** | USA | Fire alarm systems |
| **TYCO** | Global | Firefighting and suppression systems |
| **Kidde** | USA | Fire suppression (FM200, CO2) |
| **Giacomini** | Italy | Firefighting equipment |
| **Grundfos** | Denmark | Firefighting pumps |
| **Aurora** | USA | Firefighting pumps (UL/FM) |
| **Fairbanks Morse** | USA | Firefighting pumps |
| **Patterson** | USA | Firefighting pumps |
| **Peerless** | USA | Firefighting pumps |
| **Watex** | Regional | Firefighting pumps |

---

## 5. Portfolio — Previous Projects (سابقة أعمال)

The following is the complete list of completed projects organized by client category. Display these on the Projects/Portfolio page, grouped by sector.

### Banking & Finance
- National Bank of Egypt — Minya Branch (البنك الاهلي المصري - المنيا) — via Al-Karama Contracting
- Cairo Bank (بنك القاهرة) — via Concept Contracting
- Alexandria Bank (بنك الاسكندرية) — via Egyptian Trading & Supplies Co.
- National Union Bank (بنك الاتحاد الوطني) — via Keer Trading & Supplies Co.

### Sports & Recreation (Wadi Degla Clubs)
- Wadi Degla Club — New Damietta (نادي وادي دجلة - دمياط الجديدة)
- Wadi Degla Clubs Company — Maadi (شركة اندية وادي دجلة - المعادي)
- Wadi Degla Front — Maadi (نادي وادي دجلة فرونت - المعادي)
- Wadi Degla Club — October (نادي وادي دجلة - اكتوبر)
- Wadi Degla branches across Egypt (فروع اندية وادي دجلة في الجمهورية)

### Healthcare
- Police Hospital — Alexandria (مستشفى الشرطة - الاسكندرية) — via Keer Co.
- Good Shepherd Hospital (مستشفى الراعي الصالح)
- Dr. Osama Eye Clinic (عيادة الدكتور اسامة للعيون)
- Al-Najjar Clinics Complex — Alexandria (مجمع عيادات النجار - الاسكندرية)

### Industrial & Manufacturing
- Multex Egypt Factory — October Free Zone (مصنع ميلتكس ايجيبت - اكتوبر - منطقة حرة)
- Al-Tawfiq Thread Factory (مصنع التوفيق للخيوط)
- Al-Badr Light Industries Factory (مصنع البدر للصناعات الخفيفة)
- Sphinx Sanitary Ware Factory (مصنع سفنكس للادوات الصحية)
- Rand Tex Clothing Factory (مصنع راند تكس للملابس)
- Fiomark Mattress Factory (مصنع فيومارك للمراتب)
- Mina Plast Factory (مصنع مينا بلاست)
- Horus Rubber Factory (مصنع حورس للكاوتشوك)
- In Jack Furniture Factory (مصنع ان جاك لصناعة الموبيليات)
- Al-Salam Plastics Factory (مصنع السلام لصناعة البلاستيك)
- Egyptian-Turkish Textile Factory (مصنع المصري التركي لصناعة النسيج)
- Advanced Plastics Factory (مصنع ادفانسد لصناعة البلاستيك)
- Al-Moheba Animal Feed Co. (شركة المحبة للاعلاف)
- Alpha Vida Animal Feed Co. (شركة الفا فيدا لصناعة الاعلاف)
- Al-Islamia Carton Co. (شركة الاسلامية للكرتون)
- Al-Asriya Thread Manufacturing (العصرية لتصنيع الخيوط)
- Egyptian Carton Co. (المصرية للكرتون)
- International Plastics Co. (الشركة العالمية للبلاستيك)
- United Dyeing Co. (الشركة المتحدة للصباغة)
- Sezo Tex Clothing (سيزو تكس للملابس)
- Masas Venus Clothing Co. (شركة مساس فينوس للملابس)
- Al-Safir Clothing & Knitwear (السفير للملبوسات والتريكو)

### Commercial & Retail
- Al-Imam Mall (مول الامام)
- Bolotex Curtain Manufacturing Co. (شركة بولوتكس لصناعة الستائر)
- Grace Time Printing (مطبعة جريس تيم)
- Tipo Pack Co. (شركة تيبو باك)
- Sheta Warehouses Group (مجموعة مخازن شتة)
- Al-Babawy Cold Storage (ثلاجة الباوي)

### Automotive
- BYD Car Service Center (مركز خدمة سيارات BYD)

### Education
- Nile Language School (مدرسة النيل للغات)
- Al-Salam Private School — Banha (مدرسة السلام الخاصة - بنها)

### Technology & Telecom
- Engineering Group for Technological Systems (شركة المجموعة الهندسية للنظم التكنولوجية)
- Etisalat Service Center (مركز خدمة اتصالات)

### Other
- Al-Haras Center — Banha (سنتر الهراس - بنها)

---

## 6. Brand Assets

### Logo
- **File:** `WhatsApp Image 2026-03-10 at 13.40.28.jpeg` (clean logo on white background)
- **Design:** A stylized flame icon in red, yellow, and gold gradients, with a crescent/swoosh curve at the bottom. Text reads "Xenon" in elegant serif font with "TRADE & CONTRACTING" tagline below.
- **Colors from logo:** Deep red (#8B0000 range), Bright red (#FF0000), Yellow/Gold (#FFD700), Dark gold/brown (#8B4513 range)

### Letterhead
- **File:** `WhatsApp Image 2026-03-10 at 13.40.28 copy.jpeg`
- **Design:** Logo in top-left, golden/orange stripe header bar, watermark logo centered, contact info bar at bottom with phone, address, and email icons.

### Color Palette (derived from brand assets)

> **CRITICAL:** The website MUST use ONLY these brand colors throughout. Every component, button, link, badge, and background must reference this palette. No arbitrary colors should be introduced. All colors are sampled directly from the Xenon logo and letterhead.

- **Primary:** Deep Red `#B22222` (fire/safety — derived from logo flame reds `#8B0000`–`#CC0000`)
- **Secondary:** Gold/Amber `#DAA520` (trust/quality — derived from logo crescent gold `#B8860B`–`#DAA520`)
- **Accent:** Bright Yellow `#FFD700` (energy — derived from logo flame yellow)
- **Dark:** Charcoal `#1A1A2E` (backgrounds, body text)
- **Light:** Off-white `#F8F9FA` (section backgrounds)
- **White:** `#FFFFFF`
- **Text Dark:** `#1A1A1A` (headings — matches logo text color)
- **Text Muted:** `#666666` (secondary text, captions)
- **Error/Alert:** `#DC2626` (form validation errors — harmonizes with primary red)
- **Success:** `#16A34A` (form success states)

#### Brand Color Mapping to UI Elements

| UI Element | Light Theme | Dark Theme |
|------------|-------------|------------|
| Primary buttons | `#DAA520` bg, `#FFFFFF` text | `#DAA520` bg, `#1A1A2E` text |
| Secondary buttons | `#FFFFFF` bg, `#B22222` text, `#B22222` border | `transparent` bg, `#FFFFFF` text, `#FFFFFF` border |
| Navigation links | `#1A1A1A` default, `#B22222` hover | `#F8F9FA` default, `#FFD700` hover |
| Section headings | `#1A1A1A` on light bg, `#FFFFFF` on dark bg | — |
| Card borders on hover | `#DAA520` | `#DAA520` |
| CTA banners | `#1A1A2E` bg, `#DAA520` button | — |
| Footer | `#1A1A2E` bg, `#F8F9FA` text, `#DAA520` accents | — |
| WhatsApp button | `#25D366` (WhatsApp brand green — only exception to palette) | — |
| Sector badges | Use brand colors only: red, gold, charcoal variants | — |

#### Contrast Ratio Compliance (WCAG 2.1 AA)

All color combinations MUST meet minimum 4.5:1 contrast ratio for normal text and 3:1 for large text (18px+ bold or 24px+ regular):

| Combination | Ratio | Pass? |
|-------------|-------|-------|
| `#1A1A1A` on `#F8F9FA` | 16.5:1 | AA ✓ |
| `#1A1A1A` on `#FFFFFF` | 17.4:1 | AA ✓ |
| `#FFFFFF` on `#1A1A2E` | 16.8:1 | AA ✓ |
| `#FFFFFF` on `#B22222` | 6.2:1 | AA ✓ |
| `#1A1A2E` on `#DAA520` | 5.8:1 | AA ✓ |
| `#FFFFFF` on `#DAA520` | 2.5:1 | AA ✗ — use `#1A1A2E` text on gold buttons instead |
| `#B22222` on `#F8F9FA` | 6.0:1 | AA ✓ |
| `#FFD700` on `#1A1A2E` | 8.2:1 | AA ✓ (accent text on dark bg) |

> **Note:** White text on gold (`#DAA520`) fails contrast. Always use dark text (`#1A1A2E`) on gold/amber backgrounds.

---

## 7. Website Architecture & Pages

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **i18n:** next-intl or next-i18next for Arabic/English bilingual support
- **RTL Support:** Full right-to-left layout when Arabic is selected
- **Animations:** Framer Motion for scroll animations and transitions
- **Icons:** Lucide React or React Icons
- **Fonts:** Inter (English), Cairo or Noto Sans Arabic (Arabic)

### Page Structure

#### 7.1 Home Page (الرئيسية)

**Section order (top to bottom):**

1. **Hero Section**
   - Full-viewport height with dark gradient overlay (charcoal to transparent)
   - Subtle animated geometric pattern or fire-themed particle effect in background
   - Headline: "Integrated Fire Safety & Security Solutions" (large, bold, white)
   - Subheadline: "Protecting Egypt's businesses since 2012 — from design to installation to 24/7 support"
   - Two CTA buttons: "Schedule Free Consultation" (primary, gold/amber) + "View Our Projects" (secondary, outlined white)
   - Small trust bar below CTAs: "14+ Years | 50+ Projects | 20+ Partner Brands" with subtle separator lines
   - Flame logo watermark faintly visible in background

2. **Services Overview Grid**
   - Section title: "What We Do" / "خدماتنا"
   - 2-row grid (5 cards per row on desktop, 2 per row on mobile) for all 10 services
   - Each card: icon (Lucide React), service name (EN), 1-line description, hover effect (lift + gold accent border)
   - Cards link to the Services page anchored sections

3. **Why Choose Us (Trust Section)**
   - Dark background section for visual contrast
   - 4 trust cards in a row: "Licensed & Certified" (shield icon), "14+ Years Experience" (clock icon), "International Standards" (globe icon), "24/7 Emergency Support" (phone icon)
   - Each card: icon + number/title + 1-line description

4. **Stats Counter Section**
   - Animated number counters that trigger on scroll-into-view
   - 4 counters: "14+" Years of Experience, "50+" Major Projects Completed, "10" Service Disciplines, "20+" International Partner Brands
   - Numbers animate from 0 to target value over 2 seconds

5. **Featured Projects Carousel**
   - Section title: "Our Portfolio" / "سابقة أعمالنا"
   - Horizontal scroll carousel (or Swiper-style slider) showing 6 featured project cards
   - Each card: sector icon, client name, location, sector badge (Banking, Healthcare, Industrial, etc.)
   - "View All Projects" CTA button below
   - Highlight diversity: show 1 bank, 1 hospital, 1 factory, 1 sports club, 1 commercial, 1 school

6. **How We Work (Process Section)**
   - 5-step horizontal process flow with numbered circles and connecting lines
   - Steps: Consultation → Site Survey → System Design → Installation & Testing → Ongoing Maintenance
   - Each step: number, title, 1-line description, icon
   - Animated: steps reveal sequentially as user scrolls

7. **Trusted Brands Section**
   - Section title: "Our Technology Partners" / "شركاؤنا في التكنولوجيا"
   - Auto-scrolling logo carousel (infinite loop) with brand logos
   - Include: Honeywell, Hochiki, TYCO, TOA, Farfisa, Teletek, JD-Media, EiD, Grundfos, Apollo, Simplex, Kidde, Giacomini
   - Grayscale logos that colorize on hover
   - "Authorized IBC Distributor" badge prominently displayed

8. **Client Sectors Grid**
   - 6 sector cards showing the industries served: Banking & Finance, Healthcare, Industrial, Sports & Recreation, Education, Commercial
   - Each card: sector icon, name, project count (e.g., "4 Projects"), representative client name

9. **CTA Banner Section**
   - Full-width dark/gold gradient background
   - Headline: "Need a Fire Safety or Security Solution?" / "هل تحتاج حلول سلامة من الحريق أو أنظمة أمان؟"
   - Two CTAs: "Request a Quote" (primary) + "Call Us: 01221715027" (secondary with phone icon)

10. **Footer** (global component, see below)

#### 7.2 About Page (من نحن)

**Section order:**

1. **Page Hero Banner**
   - Smaller hero (40vh) with page title "About Xenon" / "عن زينون"
   - Subtitle: "Protecting Egypt since 2012"
   - Dark gradient background consistent with main hero

2. **Company Story**
   - Two-column layout: text on one side, decorative flame logo/graphic on the other
   - Mission statement: adapted from the Arabic مقدمة (Introduction) text
   - Vision: "To be Egypt's most trusted provider of integrated fire safety and security solutions"
   - Key message: expertise in electrical, mechanical, low-current, and network systems

3. **Company Timeline**
   - Vertical timeline with animated reveal on scroll
   - Milestones:
     - 2012: Company founded by Eng. Mina Wagdy
     - 2014: First major bank project (National Bank of Egypt)
     - 2016: Wadi Degla Clubs partnership begins (multiple branches)
     - 2018: IBC authorized distributor partnership
     - 2020: Expansion to Alexandria (Police Hospital, Al-Najjar Clinics)
     - 2022: Electronic invoice registration, customs clearance certification
     - 2024: 50+ projects milestone
   - *(Note: approximate dates — adjust if exact dates are known)*

4. **Company Values**
   - 4 value cards: Quality (star icon), Safety (shield icon), Innovation (lightbulb icon), Compliance (check-circle icon)
   - Each card: icon, value title, 2-line description

5. **Leadership Section**
   - Profile card for Eng. Mina Wagdy Wadee Ibrahim — Managing Engineer & Founder
   - Placeholder for photo (or use an avatar/initials circle)
   - Brief bio: background in engineering, founded Xenon in 2012, vision for fire safety excellence

6. **Certifications & Registration**
   - Grid of certification cards:
     - Tax Registration Card (البطاقة الضريبية)
     - Commercial Registration (السجل التجاري)
     - VAT Registration Certificate (شهادة تسجيل القيمة المضافة)
     - Electronic Invoice System Registration (منظومة الفاتورة الالكترونية)
     - Egyptian Customs Authority Registration (مصلحة الجمارك المصرية)
     - IBC Authorized Distributor Certificate (شهادة موزع معتمد)
   - Each card: certification name (EN/AR), issuing authority, visual badge/icon

7. **Industries We Serve**
   - 6 industry cards with icons: Banking, Healthcare, Industrial, Sports/Recreation, Education, Commercial
   - Brief description of expertise in each sector

#### 7.3 Services Page (خدماتنا)

**Section order:**

1. **Page Hero Banner**
   - Title: "Our Services" / "خدماتنا"
   - Subtitle: "Comprehensive fire safety, security, and electrical solutions"

2. **Services Navigation Bar**
   - Horizontal scrollable tab/chip bar with all 10 service names
   - Clicking a chip smooth-scrolls to that service section
   - Sticky on scroll for easy navigation

3. **Service Sections (10 sections, one per service)**
   Each service section follows this template:
   - **Service icon** (large, in brand accent color)
   - **Service title** (EN/AR): e.g., "Fire Alarm Systems" / "الانذار المبكر ضد الحريق"
   - **Description** (2-3 sentences): what the service covers, typical use cases
   - **Key features** list (3-4 bullet points)
   - **Brands used** (logo pills/badges): e.g., Honeywell, Hochiki, Apollo for fire alarms
   - **Industries served**: icon badges for relevant sectors
   - **CTA button**: "Request Quote for This Service"
   - Alternating layout: odd sections = text-left/visual-right, even sections = reversed

4. **Integration Diagram Section**
   - Visual showing how services work together: Fire Alarm → connected to → Sprinkler System → connected to → CCTV → connected to → Access Control → all feeding into → Central Monitoring
   - Use a simple flowchart or interconnected icons diagram
   - Caption: "Xenon provides end-to-end integrated safety and security ecosystems"

5. **Process Section**
   - "How We Deliver" — 5-step process:
     1. Free Consultation & Site Survey
     2. System Design & Engineering
     3. Equipment Supply & Procurement
     4. Professional Installation & Commissioning
     5. Testing, Handover & Ongoing Maintenance
   - Each step: number, icon, title, 1-line description

6. **Bottom CTA**
   - "Not sure which service you need? Contact us for a free assessment."
   - Two buttons: "Call Us" + "WhatsApp Us"

#### 7.4 Projects / Portfolio Page (سابقة أعمال)

**Section order:**

1. **Page Hero Banner**
   - Title: "Our Projects" / "سابقة أعمالنا"
   - Subtitle: "50+ projects across Egypt's most demanding sectors"

2. **Statistics Bar**
   - Horizontal bar with sector counters:
     - Banking: 4 | Sports: 5 | Healthcare: 4 | Industrial: 21 | Commercial: 6 | Education: 2 | Automotive: 1 | Technology: 2
   - Clickable to filter the grid below

3. **Filter Tabs**
   - Horizontal filter chips: All, Banking & Finance, Sports & Recreation, Healthcare, Industrial, Commercial, Education, Automotive, Technology
   - Active filter highlighted in brand gold/amber
   - Animated grid reflow when filter changes

4. **Projects Grid**
   - 3 columns on desktop, 2 on tablet, 1 on mobile
   - Each project card:
     - Sector icon (top-left badge)
     - Client name (English)
     - Client name (Arabic) in smaller text
     - Location tag (e.g., "Cairo", "Alexandria", "Banha")
     - Sector category badge
     - Subtle hover: card lifts, border turns gold
   - Show all 50+ projects

5. **Coverage Map Section**
   - Stylized SVG map of Egypt with markers for project locations
   - Locations to mark: Cairo (Rod El-Farag, Maadi, Nasr City, October City), Alexandria, Damietta, Banha
   - Each marker: dot + tooltip showing project count for that region
   - If SVG map is complex, use a simplified illustrated map or just a list of cities with project counts

6. **Bottom CTA**
   - "Want to be our next success story?"
   - "Request a Quote" button

#### 7.5 Partners & Brands Page (شركاؤنا)

**Section order:**

1. **Page Hero Banner**
   - Title: "Our Partners" / "شركاؤنا"
   - Subtitle: "Authorized distributor for world-leading fire safety and security brands"

2. **IBC Distributor Highlight Section**
   - Prominent section with IBC logo and description
   - "Authorized Distributor" badge
   - Text explaining the IBC partnership and what it means for clients (access to top-tier international brands, genuine products, certified support)

3. **Brands by Category**
   Organized into expandable/tabbed sections:

   **Fire Alarm Systems:**
   - Hochiki (Addressable), Fire Products (Conventional), Honeywell, Apollo, Simplex

   **Firefighting & Suppression:**
   - TYCO, Kidde (FM200/CO2), Giacomini

   **Firefighting Pumps:**
   - Grundfos, Aurora, Fairbanks Morse, Patterson, Peerless, Watex

   **CCTV & Surveillance:**
   - iiD / iiD 2 Secure, Farfisa

   **Public Address & Intercom:**
   - TOA, JD-Media, Farfisa

   **Intrusion Alarm:**
   - Teletek Electronics

   **Access Control:**
   - EiD

   Each brand card: logo (or placeholder), brand name, country of origin flag, specialization, 1-line description

4. **Why International Brands Matter**
   - 3 value cards: "Genuine Products" (verified quality), "International Standards" (NFPA, UL/FM compliance), "Manufacturer Warranty" (backed by original manufacturers)

#### 7.6 Contact Page (اتصل بنا)

**Section order:**

1. **Page Hero Banner**
   - Title: "Get in Touch" / "اتصل بنا"
   - Subtitle: "We respond within 2 hours during business hours"

2. **Two-Column Layout**
   - **Left column: Contact Form**
     - Fields: Full Name (text), Phone Number (tel), Email (email), Service Interested In (dropdown with all 10 services + "Other"), Building Type (dropdown: Commercial, Industrial, Healthcare, Educational, Residential, Other), Message (textarea)
     - Submit button: "Send Request" / "أرسل طلبك" (gold/amber color)
     - Trust line below form: "Your information is secure and will not be shared"
     - Form validation with inline error messages
   - **Right column: Contact Details**
     - Phone: 01221715027 (clickable on mobile)
     - Engineering email: eng.mina@xenon.com.eg
     - Sales email: sales@xenon.com.eg
     - Address: 28 A Refaat St., Road Elfarag, Cairo, Egypt
     - LinkedIn link
     - Working hours: Sunday — Thursday, 9:00 AM — 5:00 PM
     - Emergency note: "For urgent fire safety issues, call us anytime"

3. **Google Maps Embed**
   - Full-width embedded Google Map showing 28 A Refaat St., Road Elfarag, Cairo
   - Map with marker and address popup

4. **Quick Contact Alternatives**
   - 3 cards side by side: "Call Us" (phone icon + number), "WhatsApp" (WhatsApp icon + direct link), "Email" (mail icon + address)

#### 7.7 Individual Service Pages (Optional Enhancement)

If scope allows, create individual pages for the top 3-4 services (Fire Alarm, Sprinkler, Gas Suppression, CCTV) with:
- Detailed description and technical specifications
- Brands used with more detail
- Related projects from the portfolio
- FAQ section specific to that service
- Dedicated quote request form

### Global Components

#### Navbar (Header)
- **Layout:** Logo (left) | Nav links (center) | Language toggle + Phone CTA (right)
- **Nav links:** Home, About, Services (mega-menu dropdown), Projects, Partners, Contact
- **Services Mega-Menu:** When hovering/clicking "Services", show a dropdown grid with icons for all 10 services — 2 rows of 5 icons with service names
- **Language toggle:** "EN | عربي" pill button that switches locale
- **Phone CTA:** Highlighted button "01221715027" with phone icon (click-to-call on mobile)
- **Behavior:** Sticky on scroll, background becomes solid (glass-morphism or solid dark) when scrolled. Shrinks slightly in height on scroll
- **Mobile:** Hamburger menu (right side) → slide-out drawer with nav links, language toggle, and phone CTA prominently at top

#### Footer
- **Background:** Dark charcoal (#1A1A2E)
- **Layout:** 4 columns on desktop, stacked on mobile
  - Column 1: Logo + company tagline + social links (LinkedIn icon)
  - Column 2: Quick Links (Home, About, Services, Projects, Partners, Contact)
  - Column 3: Our Services (list of all 10 services as links)
  - Column 4: Contact Info (address, phone, emails, working hours)
- **Certification badges row:** Below the columns, a horizontal row of certification badge icons (tax reg, commercial reg, VAT, IBC distributor)
- **Emergency bar:** Red-accented strip: "Emergency? Call us 24/7: 01221715027"
- **Copyright bar:** Bottom strip with "© 2024 Xenon Trade & Contracting. All rights reserved." + privacy/terms links

#### Floating Elements
- **WhatsApp button:** Fixed bottom-right, green WhatsApp icon, links to `https://wa.me/201221715027` with pre-filled message "Hello, I'd like to inquire about your services"
- **Back-to-top button:** Appears after scrolling 500px, smooth scroll to top, small circular button with up-arrow
- **Cookie consent banner:** Minimal bar at bottom (if needed for compliance)

---

## 8. Design Guidelines

### Visual Style
Based on analysis of 13+ competitor websites (IBC Egypt, Technonet, NAFFCO, MAF Fire, Johnson Controls, SimpliSafe, Forcepoint, and others), the website should feel **modern, professional, and industrial** — conveying safety, reliability, and technical expertise while being significantly more polished than local Egyptian competitors.

**Overall feel:** Clean corporate design with bold accent colors from the flame logo. The goal is to look like an international-grade company website, not a typical Egyptian contractor site.

**Typography:**
- English headings: Inter Bold or Inter Black (large, impactful)
- English body: Inter Regular, 16px minimum
- Arabic headings: Cairo Bold
- Arabic body: Cairo Regular, 16px minimum
- Heading hierarchy: H1 (48px/3rem), H2 (36px/2.25rem), H3 (24px/1.5rem), body (16px/1rem)
- Line height: 1.6 for body, 1.2 for headings

**Color Usage (strict brand adherence — see Section 6 for full palette):**
- Dark sections (hero, "Why Choose Us", CTA banners): Charcoal `#1A1A2E` background, `#FFFFFF` text, `#DAA520` gold accents
- Light sections (services, projects grid): `#FFFFFF` or `#F8F9FA` background, `#1A1A1A` text
- Alternate between dark and light sections for visual rhythm
- CTA buttons: Gold/Amber `#DAA520` with `#1A1A2E` dark text (primary — NOT white text, fails contrast), outlined `#FFFFFF` (secondary on dark bg)
- Links and interactive elements: Deep Red `#B22222` for hover states
- Sector badges: use ONLY brand palette variants — `#B22222` (fire), `#DAA520` (electrical), `#1A1A2E` (security), `#8B0000` (industrial). Do NOT introduce blues, greens, or off-brand colors for badges
- Focus indicators: `#FFD700` bright yellow 2px outline (high visibility on both light and dark backgrounds)
- Error states: `#DC2626` red (harmonizes with brand reds)
- All text must meet WCAG 2.1 AA contrast ratios — refer to contrast table in Section 6

**Imagery Direction:**
- Use geometric fire-safety patterns, circuit-board patterns, or abstract safety diagrams as background textures
- Service icons: consistent Lucide React icon set, all in the same stroke weight
- Placeholder project images: gradient cards with sector icons (until real project photos are available)
- Brand logos: grayscale by default, colorize on hover
- No generic stock photos — use patterns, gradients, and icons instead

**Cards & Components:**
- Border radius: 12px for cards, 8px for buttons, 24px for badges/pills
- Shadows: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` (Tailwind shadow-md)
- Hover effects: cards lift 4px (translateY), border turns gold, subtle scale(1.02)
- Card padding: 24px minimum internal padding

**Animations (using Framer Motion):**
- Scroll-triggered fade-in-up for section content (staggered by 100ms per element)
- Counter animations: number counts up from 0 to target over 2 seconds on scroll-into-view
- Page transitions: fade + slight slide
- Hero text: typewriter or fade-in-up on page load
- Service cards: stagger reveal
- Timeline items: reveal sequentially as scrolled
- Logo carousel: continuous auto-scroll, pause on hover
- Keep all animations subtle and professional — no bouncing or overly playful effects

**Spacing System (based on Tailwind defaults):**
- Section padding: `py-20` (80px) on desktop, `py-12` (48px) on mobile
- Section max-width: `max-w-7xl` (1280px) centered
- Grid gaps: `gap-8` (32px) for card grids, `gap-6` (24px) for tighter grids
- Between section title and content: `mb-12` (48px)

### Responsive Breakpoints
- Mobile: < 640px (1 column, stacked layout)
- Tablet: 640px - 1024px (2 columns)
- Desktop: 1024px - 1280px (3 columns for grids)
- Large desktop: > 1280px (max-width container centered)

### Mobile-Specific Design (Critical — most B2B leads come from mobile)
- Hamburger menu with slide-out drawer
- Click-to-call phone button prominently in header
- WhatsApp floating button larger on mobile (56px)
- Service cards stack into full-width cards with horizontal layout (icon left, text right)
- Project grid: single column with larger cards
- Forms: one field visible at a time or stacked with generous spacing
- Touch targets: minimum 44x44px for all interactive elements
- Font sizes: never below 16px (prevents iOS zoom on input focus)
- Reduce animations on mobile (use `prefers-reduced-motion` media query)

### RTL / Arabic Support
- Full mirror layout when Arabic is selected (right-to-left text, mirrored padding/margins)
- Use CSS logical properties throughout: `margin-inline-start` instead of `margin-left`, `padding-inline-end` instead of `padding-right`, etc.
- Arabic font (Cairo from Google Fonts) for all Arabic text
- Tailwind RTL plugin or `[dir="rtl"]` class-based approach
- Navigation order flips: logo on right, menu on left in Arabic
- Icons that imply direction (arrows, chevrons) should flip in RTL
- Numbers remain LTR within Arabic text (CSS `unicode-bidi: embed`)
- Form labels align right, form inputs text aligns right
- Timeline flips direction (items appear from right in RTL)
- Carousel direction reverses

---

## 9. Content Translations

All page content should be available in both English and Arabic. Use i18n JSON files structured as:

```
/messages/en.json
/messages/ar.json
```

The Arabic content from the PDF and documents should be used as the base for Arabic translations. English content should be professionally written (not machine-translated sounding).

---

## 10. SEO & Meta

- **Title:** "Xenon Trade & Contracting | Fire Safety & Security Systems — Egypt"
- **Arabic Title:** "زينون للتجارة والمقاولات | حلول السلامة من الحريق وأنظمة الأمان — مصر"
- **Meta Description:** "Leading Egyptian company specializing in fire alarm systems, sprinkler systems, CCTV, access control, and electrical contracting. 14+ years of experience, 50+ projects."
- **Keywords:** fire alarm Egypt, sprinkler system Cairo, CCTV installation, access control, FM200, CO2 fire suppression, Honeywell fire alarm, Hochiki Egypt, fire safety company Egypt
- Open Graph tags for social sharing
- Structured data (LocalBusiness schema)
- Sitemap and robots.txt

---

## 11. Client Messaging & Engagement Stack

This section defines every tool and component for communicating with potential clients — from first contact to ongoing engagement. All recommendations are chosen for: free/affordable tiers, Arabic support, Next.js compatibility, and suitability for a small B2B contractor in Egypt.

### 11.1 WhatsApp Integration (Critical for Egypt)

WhatsApp is the primary business communication tool in Egypt. This is the single most important engagement channel.

**V1 Implementation: react-whatsapp-widget**
- **Package:** `react-whatsapp-widget` (npm)
- **Cost:** Free, no limits
- **What it does:** Floating WhatsApp chat bubble (bottom-right) that opens a WhatsApp chat with pre-filled message
- **Configuration:**
  ```
  Phone: +201221715027
  Pre-filled message (EN): "Hello, I'd like to inquire about your fire safety services."
  Pre-filled message (AR): "مرحبا، أود الاستفسار عن خدمات السلامة من الحريق."
  ```
- **Behavior:** Green WhatsApp icon, expands on hover/tap to show a mini chat preview with company greeting, click opens `wa.me/201221715027`
- **Mobile:** Larger touch target (56px), opens native WhatsApp app directly
- **Placement:** Fixed bottom-right, z-index above all content, slightly above the back-to-top button

**V2 Enhancement: WhatsApp Business API**
- **Provider:** Gupshup (gupshup.ai) or Ultramsg (ultramsg.com)
- **When to add:** When receiving 20+ inquiries/month via WhatsApp
- **Features:** Auto-replies, message templates, broadcast lists, catalog sharing
- **Cost:** Pay-per-conversation (~$0.01-0.05 per message)

### 11.2 Live Chat Widget

**Recommended: Tawk.to**
- **URL:** https://www.tawk.to/
- **Cost:** 100% free — unlimited chats, unlimited agents, forever
- **Arabic Support:** Yes (45+ languages including Arabic)
- **Mobile Apps:** iOS, Android, Windows, macOS for responding on-the-go
- **Next.js Integration:** Script tag in `layout.tsx` or via `next/script`
- **Key Features:**
  - Pre-chat form to capture name, email, service interest before chat starts
  - Visitor analytics (see which pages they visited before chatting)
  - Canned responses for common questions (pricing, services, scheduling)
  - Offline mode: converts to contact form when no agent is online
  - File sharing in chat (clients can send building photos/blueprints)
- **Implementation:**
  ```tsx
  // Add to app/[locale]/layout.tsx
  import Script from 'next/script'
  <Script src="https://embed.tawk.to/YOUR_PROPERTY_ID/default" strategy="lazyOnload" />
  ```
- **Customization:** Match widget colors to Xenon brand (gold/charcoal theme)
- **Working hours:** Set online hours (Sun-Thu, 9 AM - 5 PM Egypt time), auto-switch to offline form outside hours

**Alternative: Crisp** (crisp.chat)
- Free plan: 2 seats, unlimited conversations
- Real-time message translation (60+ languages) — useful for English-speaking clients
- Consider if translation feature becomes important

### 11.3 Contact Form System

**Stack: React Hook Form + Zod + Formspree**

**Packages:**
```
react-hook-form (form state management)
zod (validation schema)
@hookform/resolvers (connects Zod to React Hook Form)
```

**Form Backend Options (implement one):**

**Option A — Formspree (Recommended for V1):**
- **URL:** https://formspree.io/
- **Cost:** Free tier = 50 submissions/month (enough for launch)
- **Setup:** Create account → get form endpoint → POST form data to endpoint
- **Features:** Email notifications, spam filtering, file uploads, webhook support
- **No backend code needed** — just POST to their API

**Option B — Next.js API Route + Resend (Recommended for V2):**
- Build custom `/api/contact` route
- Use **Resend** (resend.com) to send notification emails
- Use **React Email** (react.email) to design beautiful email templates in JSX
- Cost: Free tier = 100 emails/day
- Full control, no third-party dependency

**Option C — Google Sheets Backend (Free, permanent storage):**
- POST form data to Google Sheets via Sheets API
- Team can view all leads in a shared spreadsheet
- Build automations with Google Apps Script (auto-reply emails, etc.)
- Cost: Completely free

**Multi-Step Contact Form Design:**
```
Step 1: "What do you need?"
  → Service selector (checkboxes): Fire Alarm, Sprinkler, Gas Suppression, CCTV, Access Control, etc.
  → "Urgent / Emergency?" toggle

Step 2: "Tell us about your property"
  → Building type dropdown: Commercial, Industrial, Healthcare, Educational, Residential, Other
  → Approximate area (sq meters) - optional
  → Location (City/District) - dropdown

Step 3: "How can we reach you?"
  → Full Name (required)
  → Phone Number (required) — with +20 Egypt prefix
  → Email (optional)
  → Preferred contact method: Phone / WhatsApp / Email
  → Message / Additional details (textarea)
  → Optional: file upload for blueprints/photos

Submit → "Send Request" / "أرسل طلبك"
```

**Post-Submission:**
- Show success message: "Thank you! We'll contact you within 2 hours during business hours."
- Send confirmation email to client (via Resend)
- Send notification email to eng.mina@xenon.com.eg and sales@xenon.com.eg
- Redirect to a "Thank You" page with: next steps, WhatsApp direct link, emergency phone number

### 11.4 Booking & Scheduling (Site Inspections)

**Recommended: Calendly Embed**
- **URL:** https://calendly.com/
- **Cost:** Free tier (1 event type, unlimited bookings)
- **Next.js Integration:** `react-calendly` npm package or iframe embed
- **Package:** `react-calendly`
- **Features:**
  - Syncs with Google Calendar / Outlook
  - Timezone detection (important for international inquiries)
  - Buffer time between appointments
  - Custom questions before booking (service type, property address)
  - Automatic email confirmations + reminders
- **Event Types to Create:**
  - "Free Fire Safety Consultation" (30 min, phone/video)
  - "On-Site Inspection Request" (schedule preferred date)
- **Placement on Website:**
  - Embed inline on Contact page
  - Link from "Schedule Free Consultation" CTA buttons across the site
  - Popup option triggered by CTA clicks

**Alternative: Cal.com** (open source, self-hosted)
- Consider if Calendly's free tier becomes limiting

### 11.5 CRM Integration

**Recommended: HubSpot Free CRM**
- **URL:** https://www.hubspot.com/products/crm
- **Cost:** Permanently free (no trial, no expiration)
- **Features in Free Tier:**
  - Contact management (unlimited contacts)
  - Deal pipeline (track: New Lead → Quoted → Site Visit → Installation → Completed)
  - Email tracking (see when clients open your proposals)
  - Task management
  - Meeting scheduler (alternative to Calendly)
  - Free forms (can embed HubSpot forms as alternative to custom forms)
  - Mobile app for sales tracking on-the-go
- **Integration with Website:**
  - HubSpot tracking code in `layout.tsx` for visitor analytics
  - Form submissions auto-create contacts in HubSpot
  - Connect via HubSpot API or Zapier
- **Deal Pipeline for Xenon:**
  ```
  New Inquiry → Contacted → Site Survey Scheduled → Proposal Sent → Negotiation → Won/Lost
  ```

**Budget Alternative: Google Sheets CRM**
- Zero cost, instantly accessible
- Use Google Forms or custom form → auto-populate sheet
- Add columns: Status, Follow-up Date, Notes, Service Type
- Good enough for < 50 active leads

### 11.6 Email Notifications & Marketing

**Transactional Email (form confirmations, appointment reminders):**

**Recommended: Resend**
- **URL:** https://resend.com/
- **Cost:** Free = 100 emails/day, 3,000/month
- **Why:** Built for Next.js, uses React Email for JSX email templates
- **Use for:**
  - Form submission confirmation to client
  - New lead notification to Xenon team
  - Appointment reminders (24h and 1h before)
  - Quote/proposal delivery
- **Email Templates to Build (using React Email):**
  1. `lead-notification.tsx` — sent to eng.mina@ when new form submitted
  2. `client-confirmation.tsx` — sent to client confirming receipt
  3. `appointment-reminder.tsx` — sent 24h before scheduled inspection

**Newsletter / Marketing Email:**

**Recommended: Mailchimp**
- **URL:** https://mailchimp.com/
- **Cost:** Free = 500 emails/month to 250 contacts
- **Use for:** Monthly fire safety tips newsletter, company updates, seasonal promotions
- **Website Integration:** Newsletter signup form in footer
- **Footer signup field:** Email input + "Subscribe to Safety Tips" button

### 11.7 Click-to-Call & Phone Integration

**V1: Simple HTML Click-to-Call (Zero cost)**
```html
<a href="tel:+201221715027">Call Now: 01221715027</a>
```
- Place in: header CTA button, contact page, footer emergency bar, every service page CTA
- On mobile: opens native phone dialer
- On desktop: opens default calling app or shows number

**V2: Call Tracking (when budget allows)**
- Use Google Ads call tracking or CallRail
- Track which pages generate phone calls
- Record call duration for lead quality analysis

### 11.8 Social Proof & Reviews

**Google Reviews Widget:**
- **Package:** `react-google-reviews` (npm) or custom component
- **Requires:** Google Business Profile (set up at business.google.com)
- **Display:** Star rating + 3-5 recent reviews in a carousel on homepage
- **Placement:** Between "Why Choose Us" and CTA banner sections

**Custom Testimonial Section (until Google Reviews are established):**
- Build a testimonial carousel component with:
  - Client company name and sector
  - Quote text (get permission from key clients like Wadi Degla, banks)
  - Star rating (visual only)
  - Sector badge
- Rotate through 4-6 testimonials

**Trust Badges Section:**
- Create a horizontal badge bar showing:
  - "IBC Authorized Distributor" badge
  - "14+ Years in Business" badge
  - "50+ Projects Completed" badge
  - "Registered with Egyptian Tax Authority" badge
  - "Electronic Invoice Certified" badge
- Display in footer on every page + dedicated section on About page

### 11.9 FAQ Chatbot (V2 Enhancement)

**Recommended: Botpress**
- **URL:** https://botpress.com/
- **Cost:** Free to start ($1 one-time activation)
- **Features:** Visual flow builder, built-in live chat, AI-powered FAQ answers
- **Arabic Support:** AI can handle Arabic queries
- **Pre-built FAQ Flows for Xenon:**
  - "What services do you offer?" → List of 10 services with links
  - "How much does a fire alarm system cost?" → "Pricing depends on building size and system type. Request a free quote!"
  - "Do you work in [city]?" → "We serve Cairo, Alexandria, Damietta, Banha, and surrounding areas."
  - "How do I schedule an inspection?" → Link to Calendly booking
  - "What brands do you use?" → List top brands with brief descriptions
  - "Do you offer emergency service?" → "Call us 24/7 at 01221715027"
  - "Are you licensed/certified?" → List certifications with links to About page
- **Handoff:** If chatbot can't answer, route to WhatsApp chat with live agent
- **When to add:** After v1 launch, when traffic reaches 100+ visitors/month

### 11.10 Implementation Priority & Dependencies

**Install these packages at project setup:**
```bash
npm install react-hook-form zod @hookform/resolvers react-whatsapp-widget react-calendly framer-motion
```

**Phase 1 — Launch Day (Zero Cost):**
| Component | Tool | Cost | Complexity |
|-----------|------|------|------------|
| WhatsApp Button | react-whatsapp-widget | Free | Easy |
| Live Chat | Tawk.to (script tag) | Free | Easy |
| Contact Form | React Hook Form + Zod + Formspree | Free (50 subs/mo) | Medium |
| Click-to-Call | HTML `<a href="tel:">` | Free | Trivial |
| Trust Badges | Custom component (static) | Free | Easy |
| Newsletter Signup | Mailchimp embed in footer | Free | Easy |

**Phase 2 — Month 2 (Minimal Cost):**
| Component | Tool | Cost | Complexity |
|-----------|------|------|------------|
| Booking System | Calendly embed (react-calendly) | Free | Easy |
| CRM | HubSpot Free CRM | Free | Medium |
| Transactional Email | Resend + React Email | Free (100/day) | Medium |
| Google Reviews | react-google-reviews | Free | Medium |
| Form Backend Upgrade | Next.js API + Google Sheets | Free | Medium |

**Phase 3 — Month 3+ (Small Budget):**
| Component | Tool | Cost | Complexity |
|-----------|------|------|------------|
| FAQ Chatbot | Botpress | ~$1 | Medium |
| WhatsApp Business API | Gupshup/Ultramsg | ~$25/mo | Hard |
| SMS Reminders | Twilio | ~$0.02/SMS | Medium |
| Push Notifications | OneSignal | Free (10K subs) | Medium |
| Call Tracking | Google Ads / CallRail | ~$50/mo | Medium |

---

## 12. Assets to Include in the Project

All logo assets have been generated with **transparent backgrounds** and are ready to use. Copy the `assets/` folder into `/public/assets/` in the Next.js project.

### Pre-Generated Logo Assets (in `assets/` folder)

| File | Size | Usage |
|------|------|-------|
| `xenon-logo.svg` | Vector | Primary logo (scalable, for navbar, hero, etc.) |
| `xenon-logo-white.svg` | Vector | Logo for dark backgrounds (white text, colored flames) |
| `xenon-logo-full.png` | 1280x1536 | High-res source PNG (transparent bg) |
| `xenon-logo-512.png` | 512x614 | Standard web usage (transparent bg) |
| `xenon-logo-256.png` | 256x307 | Thumbnails, smaller placements (transparent bg) |
| `xenon-logo-128.png` | 128x153 | Small logo placements (transparent bg) |
| `xenon-logo-64.png` | 64x76 | Mini logo (transparent bg) |
| `xenon-logo-white-full.png` | 1280x1536 | White text version for dark sections (transparent bg) |
| `xenon-logo-white-512.png` | 512x614 | White version web-sized (transparent bg) |
| `xenon-logo-white-256.png` | 256x307 | White version small (transparent bg) |
| `favicon.ico` | Multi-size | Browser tab icon (16/32/48px, transparent bg) |
| `favicon-16.png` | 16x16 | Favicon fallback |
| `favicon-32.png` | 32x32 | Favicon standard |
| `favicon-48.png` | 48x48 | Favicon high-res |

**All PNGs have transparent backgrounds** — no white box behind the logo.

> **Note:** The SVG logo is a hand-crafted vector approximation of the original JPEG. For pixel-perfect fidelity, use the original `WhatsApp Image 2026-03-10 at 13.40.28.jpeg` as the design reference, and the generated PNGs (which are derived from the SVG) for web use. If you have access to the original vector file (AI/EPS) from the logo designer, replace these SVGs with the original.

### Additional Assets to Create

1. **Brand partner logos** — placeholder SVGs or PNGs for: Honeywell, Hochiki, Apollo, Simplex, TYCO, Kidde, Giacomini, Grundfos, TOA, Farfisa, Teletek, JD-Media, EiD, iiD, Fire Products
2. **Service icons** — use Lucide React icons for each of the 10 services (no custom files needed)
3. **Open Graph image** (`og-image.png`) — 1200x630px social sharing image with logo + tagline on dark background

---

## 13. Development Notes

### Project Structure
```
/app
  /[locale]          # Dynamic locale segment (en, ar)
    /layout.tsx       # Root layout with font loading, direction, metadata
    /page.tsx          # Home page
    /about/page.tsx
    /services/page.tsx
    /projects/page.tsx
    /partners/page.tsx
    /contact/page.tsx
    /not-found.tsx     # Custom 404 page
  /globals.css         # Tailwind imports + custom CSS variables
/components
  /layout
    /Navbar.tsx
    /Footer.tsx
    /LanguageSwitcher.tsx
    /MobileMenu.tsx
  /home
    /Hero.tsx
    /StatsCounter.tsx
    /ServicesGrid.tsx
    /WhyChooseUs.tsx
    /FeaturedProjects.tsx
    /HowWeWork.tsx
    /BrandsCarousel.tsx
    /ClientSectors.tsx
    /CTABanner.tsx
  /services
    /ServiceCard.tsx
    /ServiceSection.tsx
    /IntegrationDiagram.tsx
    /ProcessSteps.tsx
  /projects
    /ProjectCard.tsx
    /ProjectGrid.tsx
    /FilterBar.tsx
    /CoverageMap.tsx
  /partners
    /BrandCard.tsx
    /BrandCategory.tsx
  /contact
    /ContactForm.tsx
    /ContactDetails.tsx
    /MapEmbed.tsx
  /shared
    /SectionTitle.tsx
    /AnimatedCounter.tsx
    /ScrollReveal.tsx     # Framer Motion scroll animation wrapper
    /WhatsAppButton.tsx
    /BackToTop.tsx
  /engagement
    /LiveChatScript.tsx   # Tawk.to script loader
    /CalendlyEmbed.tsx    # Calendly inline/popup booking widget
    /NewsletterSignup.tsx # Mailchimp footer signup form
    /TrustBadges.tsx      # Certification badges bar
    /GoogleReviews.tsx    # Google Reviews carousel (Phase 2)
    /TestimonialCarousel.tsx # Custom testimonial slider
/messages
  /en.json               # All English translations
  /ar.json               # All Arabic translations
/lib
  /i18n.ts               # i18n configuration
  /data.ts               # Projects, services, brands data (typed)
/public
  /assets
    /logo.png            # Xenon logo (optimized)
    /logo-white.png      # White version for dark backgrounds
    /favicon.ico
    /brands/             # Partner brand logos
    /og-image.png        # Open Graph social sharing image
/middleware.ts            # Locale detection and routing middleware
```

### Required Packages
```bash
# Core
npm install next react react-dom typescript tailwindcss framer-motion next-intl

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Client Engagement
npm install react-whatsapp-widget react-calendly

# Icons
npm install lucide-react

# Fonts (via next/font — no npm needed)
# Inter (English) + Cairo (Arabic) loaded from Google Fonts

# Dev Dependencies
npm install -D @types/react @types/node eslint eslint-config-next
```

### Key Implementation Details
- Use Next.js 14+ App Router with `[locale]` dynamic segment for i18n routing
- Use `next-intl` for internationalization (best Next.js App Router support)
- Implement middleware for locale detection: check `Accept-Language` header, default to `en`
- All text content in `/messages/en.json` and `/messages/ar.json` — zero hardcoded strings
- Use CSS logical properties throughout for automatic RTL flipping
- Set `dir="rtl"` and `lang="ar"` on `<html>` when Arabic is selected
- Framer Motion for all scroll animations — use `useInView` hook with `once: true` to trigger once
- Implement smooth scroll behavior via CSS `scroll-behavior: smooth`
- Use Next.js `<Image>` component with `priority` on hero images, lazy loading elsewhere
- Configure proper caching headers for static assets (1 year)
- Add error boundaries with fallback UI
- Custom 404 page in both languages
- Service worker for offline experience (optional)
- Use `next/font` for optimal font loading (Inter + Cairo)
- All data (projects, services, brands) in a typed TypeScript data file for easy updates

### Performance Targets
- Lighthouse score: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total page weight: < 500KB (excluding images)
- Image optimization: WebP format, responsive srcsets

### Accessibility (WCAG 2.1 AA — Mandatory)

> **CRITICAL:** Accessibility is NOT optional. Every page and component must pass automated accessibility testing (axe-core or similar) with zero violations at AA level.

**Semantic HTML & Structure:**
- Proper heading hierarchy: only ONE `<h1>` per page, logical nesting (`h2` → `h3` → `h4`)
- Use semantic elements: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<header>`
- All content regions must have accessible names via `aria-label` or `aria-labelledby`
- Page language set correctly: `lang="en"` or `lang="ar"` on `<html>` element, with `dir="rtl"` for Arabic

**Color & Contrast:**
- Minimum 4.5:1 contrast ratio for normal text (< 18px bold / < 24px regular)
- Minimum 3:1 contrast ratio for large text (≥ 18px bold / ≥ 24px regular)
- Minimum 3:1 contrast ratio for UI components and graphical objects (borders, icons, focus indicators)
- NEVER rely on color alone to convey information — always pair with text labels, icons, or patterns
- See Section 6 contrast ratio table for all approved color combinations
- Gold buttons (`#DAA520`) MUST use dark text (`#1A1A2E`), never white text

**Keyboard Navigation:**
- All interactive elements focusable via Tab key in logical order
- Custom focus indicators: `#FFD700` bright yellow, 2px solid outline, 2px offset (visible on both light and dark bg)
- `outline: 2px solid #FFD700; outline-offset: 2px;` — do NOT use `outline: none` anywhere
- Skip-to-content link as first focusable element on every page
- Modal dialogs trap focus within (no tabbing out), Escape key closes
- Carousel/slider: keyboard arrows to navigate, Enter/Space to select
- Dropdown menus: arrow keys to navigate items, Escape to close

**Images & Media:**
- All images have descriptive `alt` text in both EN and AR (via i18n)
- Decorative images use `alt=""` and `aria-hidden="true"`
- SVG icons: `role="img"` with `aria-label`, or `aria-hidden="true"` if decorative
- Background images with text overlay: text must be in actual HTML, not baked into image
- Icon-only buttons MUST have `aria-label` (e.g., WhatsApp button: `aria-label="Chat on WhatsApp"`)

**Forms:**
- All form inputs have visible `<label>` elements (not just placeholder text)
- Error messages associated via `aria-describedby` and announced with `aria-live="polite"`
- Required fields marked with `aria-required="true"` and visual indicator (not just color)
- Form validation errors: red border + error icon + text message (triple indicator)
- Group related inputs with `<fieldset>` and `<legend>`

**Motion & Animation:**
- Respect `prefers-reduced-motion: reduce` — disable all non-essential animations
- No auto-playing video or audio without user consent
- Counter animations: provide final value immediately when reduced motion is preferred
- Carousel auto-scroll: pause on hover AND on focus, provide manual controls

**RTL Accessibility:**
- Arabic pages: `dir="rtl"` and `lang="ar"` on root element
- Focus order follows RTL reading direction (right-to-left tab order)
- Screen reader testing with Arabic NVDA/VoiceOver

**Testing Requirements:**
- Run `axe-core` or Lighthouse accessibility audit on every page — target 100 score
- Manual keyboard-only navigation test on all pages
- Test with screen reader (NVDA on Windows, VoiceOver on Mac)
- Test with browser zoom at 200% — no content overflow or truncation
- Validate with WAVE Web Accessibility Evaluator

---

## 14. Future Considerations (v2+ Enhancements)

### Quick Wins (add within 1-2 weeks post-launch)
- Google Analytics 4 + conversion event tracking (form submissions, CTA clicks, phone calls)
- Google Business Profile integration
- Hotjar or Microsoft Clarity for heatmaps and user behavior

### Medium-Term (1-3 months post-launch)
- **Interactive Quote Calculator:** User selects building type → square meters → systems needed → gets estimated price range → pre-fills contact form
- **Blog / News section:** Fire safety tips, project announcements, regulatory updates, industry news (helps SEO)
- **Individual service detail pages** for the top 4 services (Fire Alarm, Sprinkler, Gas Suppression, CCTV)
- **Case study pages** for 5-6 highlighted projects with Challenge → Solution → Results format
- **FAQ page** with structured data markup for Google featured snippets
- **Live chat widget** with AI fallback for after-hours basic Q&A

### Long-Term (3-6 months post-launch)
- Client portal for project tracking and documentation access
- Photo/video gallery for completed projects (when real media is available)
- Interactive 3D building visualization showing integrated safety systems
- Credential verification tool (enter cert number → see license status)
- Mobile app for service scheduling and maintenance reminders
- SMS/email automated appointment reminders
- Multi-language expansion (French for North Africa market)
- Predictive maintenance scheduling tool for existing clients
