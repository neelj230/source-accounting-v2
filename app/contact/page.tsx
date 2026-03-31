import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us | Source Accounting",
  description:
    "Get in touch with Source Accounting. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Fill out the form below and we'll get back to you quickly."
      />

      <section className="bg-white py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-primary text-cream p-10 md:p-12 h-fit">
                  <h2 className="font-serif text-2xl text-cream mb-10">
                    Contact Information
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-cream/40 block mb-2">
                        Email
                      </span>
                      <a
                        href="mailto:hello@source-accounting.com"
                        className="text-cream/80 hover:text-cream transition-colors duration-300"
                      >
                        hello@source-accounting.com
                      </a>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-cream/40 block mb-2">
                        Location
                      </span>
                      <p className="text-cream/80">Based out of Portland, OR</p>
                      <p className="text-cream/80">
                        Serving med spas throughout the US
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-cream/40 block mb-2">
                        Hours
                      </span>
                      <p className="text-cream/80">
                        Monday – Friday, 9am – 5pm PT
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-cream/10 mt-10 pt-10">
                    <p className="text-cream/60 text-sm mb-3">
                      Prefer to schedule a call?
                    </p>
                    <Link
                      href="/schedule"
                      className="text-[11px] uppercase tracking-[0.2em] text-cream border-b border-cream/30 pb-1 hover:border-cream transition-colors duration-300"
                    >
                      Book a free consultation
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
