"use client";

import { motion } from "framer-motion";
import React from "react";

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function StaggerGrid({
  children,
  className = "",
  stagger = 0.1,
}: StaggerGridProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item} className="h-full">{child}</motion.div>
      ))}
    </motion.div>
  );
}
