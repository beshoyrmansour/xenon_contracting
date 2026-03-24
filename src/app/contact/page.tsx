"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import { FadeInUp } from "@/components/ScrollReveal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  Linkedin,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const serviceKeys = [
  "electrical",
  "fireAlarm",
  "sprinkler",
  "gasSuppression",
  "kitchenHood",
  "cctv",
  "publicAddress",
  "intrusionAlarm",
  "accessControl",
  "nurseCall",
] as const;

export default function ContactPage() {
  const t = useTranslations("contact");
  const ts = useTranslations("services");
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(1, t("required")),
    phone: z.string().min(8, t("invalidPhone")),
    email: z.string().email(t("invalidEmail")).or(z.literal("")),
    service: z.string().optional(),
    buildingType: z.string().optional(),
    message: z.string().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      buildingType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // For now, simulate submission. Replace with Formspree or API route.
    console.log("Form data:", data);
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />

        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <FadeInUp>
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  {t("formTitle")}
                </h2>
                {submitted ? (
                  <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
                    <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                    <p className="text-lg font-semibold text-text-dark mb-2">
                      {t("successMessage")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        {t("name")} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors text-base"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        {t("phone")} *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors text-base"
                        dir="ltr"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        {t("email")}
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors text-base"
                        dir="ltr"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        {t("service")}
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors text-base bg-white"
                      >
                        <option value="">{t("selectService")}</option>
                        {serviceKeys.map((key) => (
                          <option key={key} value={key}>
                            {ts(key)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Building Type */}
                    <div>
                      <label
                        htmlFor="buildingType"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        {t("buildingType")}
                      </label>
                      <select
                        id="buildingType"
                        {...register("buildingType")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors text-base bg-white"
                      >
                        <option value="">{t("selectBuilding")}</option>
                        <option value="commercial">
                          {t("buildingCommercial")}
                        </option>
                        <option value="industrial">
                          {t("buildingIndustrial")}
                        </option>
                        <option value="healthcare">
                          {t("buildingHealthcare")}
                        </option>
                        <option value="educational">
                          {t("buildingEducational")}
                        </option>
                        <option value="residential">
                          {t("buildingResidential")}
                        </option>
                        <option value="other">{t("buildingOther")}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-dark mb-1.5"
                      >
                        {t("message")}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register("message")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors text-base resize-vertical"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-secondary text-dark font-bold rounded-lg text-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "..." : t("submit")}
                    </button>

                    <p className="text-xs text-text-muted text-center flex items-center justify-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {t("trustLine")}
                    </p>
                  </form>
                )}
              </FadeInUp>

              {/* Contact Details */}
              <FadeInUp delay={0.2}>
                <h2 className="text-2xl font-bold text-text-dark mb-6">
                  {t("detailsTitle")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">
                        {t("addressLabel")}
                      </p>
                      <a
                        href="https://maps.google.com/?q=30.115889,31.329802"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-secondary transition-colors"
                      >
                        {t("address")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">
                        {t("phoneLabel")}
                      </p>
                      <a
                        href="tel:+201221715027"
                        className="text-sm text-primary hover:text-secondary transition-colors"
                        dir="ltr"
                      >
                        01221715027
                      </a>
                      <br />
                      <a
                        href="tel:+201501548315"
                        className="text-sm text-primary hover:text-secondary transition-colors"
                        dir="ltr"
                      >
                        01501548315
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">
                        {t("emailEngLabel")}
                      </p>
                      <a
                        href="mailto:eng.mina@xenon.com.eg"
                        className="text-sm text-primary hover:text-secondary transition-colors"
                      >
                        eng.mina@xenon.com.eg
                      </a>
                      <p className="font-medium text-text-dark mt-2">
                        {t("emailSalesLabel")}
                      </p>
                      <a
                        href="mailto:sales@xenon.com.eg"
                        className="text-sm text-primary hover:text-secondary transition-colors"
                      >
                        sales@xenon.com.eg
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">
                        {t("workingHours")}
                      </p>
                      <p className="text-sm text-text-muted">
                        {t("workingHoursValue")}
                      </p>
                      <p className="text-sm text-primary font-medium mt-1">
                        {t("emergencyNote")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/xenon-contracting-a755223b6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-secondary transition-colors"
                      >
                        Xenon Contracting
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="bg-light">
          <iframe
            title="Xenon Trade & Contracting Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5!2d31.329802!3d30.115889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzU3LjIiTiAzMcKwMTknNDcuMyJF!5e0!3m2!1sen!2seg!4v1600000000000!5m2!1sen!2seg"
            width="100%"
            height="300"
            className="sm:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* Quick Contact Cards */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-dark">
                {t("quickContact")}
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 rounded-xl glass-card hover:shadow-lg hover:border-secondary border-2 border-transparent transition-all">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <span className="font-semibold text-text-dark">
                  {t("phoneLabel")}
                </span>
                <a href="tel:+201221715027" className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                  01221715027
                </a>
                <a href="tel:+201501548315" className="text-sm text-text-muted hover:text-primary transition-colors" dir="ltr">
                  01501548315
                </a>
              </div>
              <a
                href="https://wa.me/201221715027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-xl glass-card hover:shadow-lg hover:border-whatsapp border-2 border-transparent transition-all"
              >
                <MessageCircle className="w-8 h-8 text-whatsapp mb-3" />
                <span className="font-semibold text-text-dark">
                  {t("whatsapp")}
                </span>
                <span className="text-sm text-text-muted">WhatsApp</span>
              </a>
              <a
                href="mailto:eng.mina@xenon.com.eg"
                className="flex flex-col items-center p-6 rounded-xl glass-card hover:shadow-lg hover:border-secondary border-2 border-transparent transition-all"
              >
                <Mail className="w-8 h-8 text-primary mb-3" />
                <span className="font-semibold text-text-dark">
                  {t("email")}
                </span>
                <span className="text-sm text-text-muted">
                  eng.mina@xenon.com.eg
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
