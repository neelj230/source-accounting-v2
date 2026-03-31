import { Metadata } from "next";
import Hero from "@/components/Hero";
import AcuityEmbed from "@/components/AcuityEmbed";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Source Accounting",
  description:
    "Book a free discovery call with Source Accounting. No obligation, no cost.",
};

export default function SchedulePage() {
  return (
    <>
      <Hero
        eyebrow="Schedule"
        title="Schedule Your Free Consultation"
        subtitle="Start with a complimentary discovery call. We'll learn about your med spa, your current accounting setup, and the challenges you want to solve."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <FadeIn>
            <AcuityEmbed />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <p className="max-w-2xl text-xs text-muted">
            *Source Accounting does not do tax filing and preparation. We prepare
            your books to be tax-ready for a clean hand-off to your tax
            preparer.
          </p>
        </div>
      </section>
    </>
  );
}
