"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "@/lib/testimonials";

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
}

const variantCycle: Array<"light" | "dark" | "accent"> = [
  "light",
  "accent",
  "dark",
  "light",
  "accent",
];

export default function TestimonialMarquee({
  testimonials,
  direction = "left",
  speed = 40,
}: TestimonialMarqueeProps) {
  // Double the items for seamless loop
  const items = [...testimonials, ...testimonials];
  const totalWidth = testimonials.length * 400; // approx card width + gap

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {items.map((t, i) => (
          <div key={`${t.name}-${i}`} className="w-[360px] flex-shrink-0">
            <TestimonialCard
              quote={t.quote.length > 200 ? t.quote.slice(0, 200) + "..." : t.quote}
              name={t.name}
              role={t.role}
              variant={variantCycle[i % variantCycle.length]}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
