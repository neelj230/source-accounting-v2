"use client";

import MagneticButton from "./MagneticButton";

export default function AcuityEmbed() {
  return (
    <div className="bg-cream p-12 md:p-20 text-center border border-dark/5">
      <h3 className="font-serif text-subheading text-dark mb-4">
        Book Your Free Discovery Call
      </h3>
      <p className="text-body leading-relaxed max-w-xl mx-auto mb-10">
        Click below to choose a time that works for you. The call is 20 minutes,
        completely free, and there&apos;s no obligation to work with us.
      </p>
      <MagneticButton>
        <a
          href="https://calendly.com/hello-source-accounting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-cream px-12 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-primary-dark transition-colors duration-500"
        >
          Schedule a Consultation
        </a>
      </MagneticButton>
      <p className="text-sm text-muted mt-8">
        Or email us directly at{" "}
        <a
          href="mailto:hello@source-accounting.com"
          className="text-primary hover:text-primary-dark border-b border-primary/30 pb-0.5 transition-colors duration-300"
        >
          hello@source-accounting.com
        </a>
      </p>
    </div>
  );
}
