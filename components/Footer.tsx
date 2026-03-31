import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/schedule", label: "Schedule" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/60">
      <div className="mx-auto max-w-site px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-serif text-3xl text-cream">Source</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Financial clarity for med spas and aesthetic practices. Based in
              Portland, OR — serving practices throughout the US.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-cream/40 mb-6">
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-cream/40 mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@source-accounting.com"
                className="hover:text-cream transition-colors duration-300"
              >
                hello@source-accounting.com
              </a>
              <Link
                href="/schedule"
                className="hover:text-cream transition-colors duration-300"
              >
                Book a consultation
              </Link>
            </div>

            {/* Certification badges — small, grayscale */}
            <div className="flex items-center gap-4 mt-8">
              {["badge-qb-advanced", "badge-qb-desktop", "badge-qb-elite", "badge-liveplan"].map(
                (badge) => (
                  <Image
                    key={badge}
                    src={`/images/${badge}.webp`}
                    alt={badge}
                    width={36}
                    height={36}
                    className="h-8 w-auto opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-cream/10 text-xs text-cream/30">
          &copy; 2026 Source Accounting Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
