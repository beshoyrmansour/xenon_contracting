import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProcessSection from "@/components/home/ProcessSection";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import SectorsGrid from "@/components/home/SectorsGrid";
import CTABanner from "@/components/home/CTABanner";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <FeaturedProjects />
        <ProcessSection />
        <BrandsCarousel />
        <SectorsGrid />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
