"use client";

import Link from "next/link";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";

interface CTABannerProps {
  title: string;
  buttonText: string;
  href: string;
}

export default function CTABanner({ title, buttonText, href }: CTABannerProps) {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="max-w-site mx-auto px-6 md:px-10 text-center">
        <RevealText
          as="h2"
          className="font-serif text-heading text-cream max-w-3xl mx-auto"
        >
          {title}
        </RevealText>
        <div className="mt-10 md:mt-14">
          <MagneticButton>
            <Link
              href={href}
              className="inline-block border border-cream/40 text-cream px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-cream hover:text-primary transition-all duration-500"
            >
              {buttonText}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
