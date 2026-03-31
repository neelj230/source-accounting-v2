"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  variant?: "light" | "dark" | "accent";
}

const variantStyles = {
  light: {
    bg: "bg-white",
    border: "border border-dark/[0.06]",
    quote: "text-primary/15",
    text: "text-body",
    name: "text-dark",
    role: "text-muted",
  },
  dark: {
    bg: "bg-primary",
    border: "border border-primary-dark/20",
    quote: "text-cream/10",
    text: "text-cream/75",
    name: "text-cream",
    role: "text-cream/50",
  },
  accent: {
    bg: "bg-[#F0EDE4]",
    border: "border border-dark/[0.04]",
    quote: "text-accent/20",
    text: "text-body",
    name: "text-dark",
    role: "text-muted",
  },
};

export default function TestimonialCard({
  quote,
  name,
  role,
  variant = "light",
}: TestimonialCardProps) {
  const styles = variantStyles[variant];

  return (
    <motion.div
      className={`${styles.bg} ${styles.border} rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-500`}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Decorative quote mark */}
      <div>
        <svg
          className={`w-10 h-10 mb-6 ${styles.quote}`}
          viewBox="0 0 40 40"
          fill="currentColor"
        >
          <path d="M10.7 30.5c-2.1 0-3.8-.7-5.1-2.1-1.3-1.4-2-3.2-2-5.4 0-2.5.8-5.1 2.4-7.8C7.6 12.5 10 10.3 13 8.5l1.8 2.7c-2.3 1.4-4 2.9-5.1 4.5-1.1 1.6-1.6 3.1-1.6 4.5.3-.1.7-.2 1.2-.2 1.6 0 2.9.5 3.9 1.6 1 1.1 1.5 2.4 1.5 4.1 0 1.6-.6 3-1.7 4.1-1.1 1.1-2.5 1.7-4.3 1.7zm18.4 0c-2.1 0-3.8-.7-5.1-2.1-1.3-1.4-2-3.2-2-5.4 0-2.5.8-5.1 2.4-7.8C26 12.5 28.4 10.3 31.4 8.5l1.8 2.7c-2.3 1.4-4 2.9-5.1 4.5-1.1 1.6-1.6 3.1-1.6 4.5.3-.1.7-.2 1.2-.2 1.6 0 2.9.5 3.9 1.6 1 1.1 1.5 2.4 1.5 4.1 0 1.6-.6 3-1.7 4.1-1.1 1.1-2.5 1.7-4.3 1.7z" />
        </svg>

        <p className={`${styles.text} text-[15px] md:text-base leading-[1.75] font-light`}>
          {quote}
        </p>
      </div>

      {/* Author */}
      <div className="mt-8 pt-6 border-t border-current/[0.06]">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder circle */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${
              variant === "dark"
                ? "bg-cream/10 text-cream"
                : "bg-primary/[0.06] text-primary"
            }`}
          >
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <p className={`font-medium text-sm ${styles.name}`}>{name}</p>
            <p className={`text-xs mt-0.5 ${styles.role}`}>{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
