"use client";

import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import FadeIn from "@/components/FadeIn";
import StaggerGrid from "@/components/StaggerGrid";
import { testimonials } from "@/lib/testimonials";

const variantCycle: Array<"light" | "dark" | "accent"> = [
  "light",
  "accent",
  "dark",
  "light",
  "accent",
  "light",
  "dark",
  "accent",
  "light",
];

export default function TestimonialsPage() {
  // Split: first half as scrolling marquee, second half as card grid — no repeats
  const marqueeItems = testimonials.slice(0, 4);
  const gridItems = testimonials.slice(4);

  return (
    <>
      <Hero
        eyebrow="Testimonials"
        title="Client Testimonials"
        subtitle="Don't just take our word for it — hear from business owners who trust Source Accounting with their finances."
      />

      {/* Scrolling marquee with first batch */}
      <section className="bg-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-site mx-auto px-6 md:px-10 mb-10">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted block">
              What our clients say
            </span>
          </FadeIn>
        </div>
        <TestimonialMarquee testimonials={marqueeItems} direction="left" speed={40} />
      </section>

      {/* Card grid with remaining testimonials */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {gridItems.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                variant={variantCycle[i % variantCycle.length]}
              />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <CTABanner
        title="Ready to experience the difference?"
        buttonText="Schedule a Consultation"
        href="/schedule"
      />
    </>
  );
}
