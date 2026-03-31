"use client";

import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  large?: boolean;
}

export default function Hero({ title, subtitle, eyebrow, large }: HeroProps) {
  return (
    <section
      className={`${
        large ? "pt-40 pb-32 md:pt-52 md:pb-40" : "pt-36 pb-20 md:pt-44 md:pb-28"
      } bg-cream`}
    >
      <div className="max-w-site mx-auto px-6 md:px-10">
        {eyebrow && (
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
              {eyebrow}
            </span>
          </FadeIn>
        )}
        <RevealText as={large ? "h1" : "h1"} className="font-serif text-heading text-dark max-w-4xl">
          {title}
        </RevealText>
        {subtitle && (
          <FadeIn delay={0.3}>
            <p className="mt-8 text-body text-lg md:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
