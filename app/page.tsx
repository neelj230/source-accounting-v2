"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "@/components/RevealText";
import FadeIn from "@/components/FadeIn";
import MagneticButton from "@/components/MagneticButton";
import Parallax from "@/components/Parallax";
import StaggerGrid from "@/components/StaggerGrid";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { testimonials } from "@/lib/testimonials";

const painPoints = [
  "Which treatments are actually the most profitable?",
  "Are my injectors producing enough revenue?",
  "Are memberships and packages helping or hurting cash flow?",
  "Why does revenue look strong but cash always feels tight?",
  "Can I afford another provider or new device?",
  "How do I know if my books are accurate and up to date?",
];

const services = [
  {
    title: "Strong Financial Infrastructure",
    description:
      "Accurate books and dependable reporting built around the operational realities of med spa businesses.",
    image: "/images/medspa-1.jpg",
  },
  {
    title: "Clarity for Better Decisions",
    description:
      "Gain visibility into cash flow, margins, and business performance so you can lead with more confidence.",
    image: "/images/medspa-2.jpg",
  },
  {
    title: "CFO-Level Guidance",
    description:
      "Get strategic financial partnership to support planning, decision-making, and sustainable growth.",
    image: "/images/medspa-3.jpg",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Start with a complimentary discovery call so we can learn about your med spa, your goals, and the financial challenges affecting profitability, cash flow, or growth.",
  },
  {
    number: "02",
    title: "Strategic Recommendations",
    description:
      "You'll receive tailored recommendations designed to strengthen reporting, improve cash flow, and support more profitable growth for your practice.",
  },
  {
    number: "03",
    title: "Monthly CFO Partnership",
    description:
      "With ongoing monthly CFO support, you'll have a trusted financial partner to help you evaluate decisions, plan ahead, and stay focused on the bigger picture.",
  },
];

const badges = [
  { src: "/images/badge-qb-advanced.webp", alt: "QuickBooks Advanced Certified ProAdvisor" },
  { src: "/images/badge-qb-desktop.webp", alt: "QuickBooks Certified ProAdvisor Desktop" },
  { src: "/images/badge-qb-elite.webp", alt: "QuickBooks ProAdvisor Elite" },
  { src: "/images/badge-liveplan.webp", alt: "LivePlan Expert Advisor Certified" },
];

function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-dark/40">
        Scroll
      </span>
      <motion.div
        className="w-[1px] h-8 bg-dark/20"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  );
}

const cardStyles = [
  {
    bgColor: "#2B3F36",
    gradient: "radial-gradient(ellipse at top right, rgba(197,163,90,0.15), transparent 60%), radial-gradient(ellipse at bottom left, rgba(245,243,236,0.08), transparent 50%)",
    numberBadge: "bg-white/15 text-white",
    title: "text-white",
    desc: "text-white/70",
    bigNum: "text-white/[0.06]",
    accentBg: "rgba(196,163,90,0.12)",
  },
  {
    bgColor: "#1A2B22",
    gradient: "radial-gradient(ellipse at bottom right, rgba(197,163,90,0.2), transparent 60%), radial-gradient(ellipse at top left, rgba(43,63,54,0.5), transparent 50%)",
    numberBadge: "bg-white/10 text-amber-300",
    title: "text-white",
    desc: "text-white/70",
    bigNum: "text-white/[0.06]",
    accentBg: "rgba(245,243,236,0.04)",
  },
  {
    bgColor: "#F0EDE4",
    gradient: "radial-gradient(ellipse at top left, rgba(43,63,54,0.06), transparent 60%), radial-gradient(ellipse at bottom right, rgba(197,163,90,0.1), transparent 50%)",
    numberBadge: "bg-primary text-white",
    title: "text-dark",
    desc: "text-body",
    bigNum: "text-primary/[0.04]",
    accentBg: "rgba(43,63,54,0.04)",
  },
];

function ServiceStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto px-6 md:px-10">
      {services.map((service, i) => {
        const style = cardStyles[i];
        return (
          <div
            key={i}
            className="sticky top-[12vh] mb-8"
            style={{ zIndex: i + 1 }}
          >
            <div
              className="relative h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: style.bgColor }}
            >
              {/* Gradient texture overlay */}
              <div
                className="absolute inset-0"
                style={{ background: style.gradient }}
              />

              {/* Decorative large number */}
              <div className="absolute top-8 right-10 md:top-12 md:right-16">
                <span className={`font-serif text-[8rem] md:text-[12rem] leading-none select-none ${style.bigNum}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Decorative accent shape */}
              <div
                className="absolute top-0 right-0 w-1/3 h-1/3 rounded-bl-[4rem]"
                style={{ backgroundColor: style.accentBg }}
              />

              {/* Number badge */}
              <div className="absolute top-6 left-7 md:top-8 md:left-10">
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-serif text-xl font-bold ${style.numberBadge}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <h3 className={`font-serif text-subheading md:text-heading ${style.title} mb-3 md:mb-4`}>
                  {service.title}
                </h3>
                <p className={`${style.desc} text-base md:text-lg leading-relaxed max-w-xl`}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-10 mb-14 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <FadeIn>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
                What clients say
              </span>
            </FadeIn>
            <RevealText
              as="h2"
              className="font-serif text-heading text-dark max-w-2xl"
            >
              Trusted by business owners across industries
            </RevealText>
          </div>
          <FadeIn delay={0.3}>
            <Link
              href="/testimonials"
              className="inline-block text-[11px] uppercase tracking-[0.2em] text-primary hover:text-primary-dark transition-colors duration-300 border-b border-primary/30 pb-1 flex-shrink-0"
            >
              View all testimonials
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Single scrolling marquee row */}
      <TestimonialMarquee testimonials={testimonials} direction="left" speed={55} />
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[100svh] flex items-center relative bg-cream">
        <div className="max-w-site mx-auto px-6 md:px-10 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-8">
                  Med Spa Financial Partner
                </span>
              </FadeIn>

              <RevealText
                as="h1"
                className="font-serif text-display text-dark"
              >
                Financial Clarity for Med Spas
              </RevealText>

              <FadeIn delay={0.5}>
                <p className="mt-8 text-body text-lg md:text-xl max-w-xl leading-relaxed">
                  Bookkeeping and fractional CFO services designed for aesthetic
                  practices that want better profitability, cleaner financials,
                  and data-driven growth.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <MagneticButton>
                    <Link
                      href="/schedule"
                      className="inline-block bg-primary text-cream px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-primary-dark transition-colors duration-500"
                    >
                      Schedule a Consultation
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      href="#how-we-help"
                      className="inline-block border border-dark/20 text-dark px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-dark hover:text-cream transition-all duration-500"
                    >
                      Learn How We Help
                    </Link>
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>

            {/* Hero image with parallax */}
            <FadeIn delay={0.3} className="hidden lg:block">
              <Parallax speed={0.3} className="aspect-[4/5] relative">
                <Image
                  src="/images/medspa-1.jpg"
                  alt="Med spa interior"
                  fill
                  className="object-cover"
                  priority
                />
              </Parallax>
            </FadeIn>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Badge Marquee */}
      <section className="bg-white py-8 md:py-12 border-y border-dark/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...badges, ...badges, ...badges, ...badges].map((badge, i) => (
            <div key={i} className="mx-8 md:mx-14 flex-shrink-0">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={80}
                height={80}
                className="h-16 md:h-20 w-auto opacity-30 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pain Points — dark section */}
      <section id="how-we-help" className="bg-primary py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/40 block mb-6">
              The questions that keep you up at night
            </span>
          </FadeIn>

          <RevealText
            as="h2"
            className="font-serif text-heading text-cream max-w-3xl mb-16 md:mb-20"
          >
            Growing your med spa but unsure about your numbers?
          </RevealText>

          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
            stagger={0.08}
          >
            {painPoints.map((question, i) => (
              <div
                key={i}
                className="flex items-start gap-6 border-t border-cream/10 pt-8"
              >
                <span className="font-serif text-5xl text-cream/10 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-cream/80 text-lg leading-relaxed pt-2">
                  {question}
                </p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Services — stacking scroll cards */}
      <section className="bg-cream pt-24 md:pt-36 pb-[10vh]">
        <div className="max-w-site mx-auto px-6 md:px-10 mb-16 md:mb-20">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
              How we help
            </span>
          </FadeIn>
          <RevealText
            as="h2"
            className="font-serif text-heading text-dark max-w-3xl"
          >
            Strategic financial support for growth-minded med spas
          </RevealText>
        </div>

        <ServiceStack />
      </section>

      {/* Process — card-based with images */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
              Our process
            </span>
          </FadeIn>
          <RevealText
            as="h2"
            className="font-serif text-heading text-dark max-w-2xl mb-16 md:mb-24"
          >
            Three steps to financial clarity
          </RevealText>

          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[1fr]"
            stagger={0.12}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="group relative bg-cream rounded-2xl overflow-hidden border border-dark/[0.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-500 flex flex-col h-full"
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                {/* Card image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={`/images/medspa-${i + 1}.jpg`}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-primary font-serif text-lg font-bold shadow-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-xl md:text-[1.35rem] text-dark mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-body text-[15px] leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to get clarity on your med spa's finances?"
        buttonText="Schedule a Consultation"
        href="/schedule"
      />
    </>
  );
}
