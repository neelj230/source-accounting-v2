"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/schedule", label: "Schedule" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{ mixBlendMode: mobileMenuOpen ? "normal" : undefined }}
      >
        <div
          className={`mx-auto max-w-site px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-4" : "py-6 md:py-8"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative z-[101]">
            <Image
              src="/images/logo.webp"
              alt="Source Accounting"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-dark/70 hover:text-dark transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-[101] flex flex-col justify-center items-center w-10 h-10 gap-[7px]"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-[1px] w-7 bg-current origin-center"
              animate={
                mobileMenuOpen
                  ? { rotate: 45, y: 4, color: "#F5F3EC" }
                  : { rotate: 0, y: 0, color: "#1A1A1A" }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className="block h-[1px] w-7 bg-current origin-center"
              animate={
                mobileMenuOpen
                  ? { rotate: -45, y: -4, color: "#F5F3EC" }
                  : { rotate: 0, y: 0, color: "#1A1A1A" }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-primary flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl text-cream/90 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
