"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "down";
  className?: string;
  scale?: boolean;
  blur?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  scale = false,
  blur = false,
}: FadeInProps) {
  const offsets = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: -60 },
    right: { x: 60 },
  };

  const initial = {
    opacity: 0,
    ...offsets[direction],
    ...(scale && { scale: 0.95 }),
    ...(blur && { filter: "blur(4px)" }),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale && { scale: 1 }),
    ...(blur && { filter: "blur(0px)" }),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
