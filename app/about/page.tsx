import { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import RevealText from "@/components/RevealText";
import Parallax from "@/components/Parallax";
import StaggerGrid from "@/components/StaggerGrid";

export const metadata: Metadata = {
  title: "About Us | Source Accounting",
  description:
    "Learn about Source Accounting and founder Manisha Jain, CPA. 20+ years of accounting experience serving med spas nationwide.",
};

const differentiators = [
  {
    title: "20 Years Experience",
    description:
      "Two decades of hands-on accounting expertise across industries",
  },
  {
    title: "Ernst & Young Trained",
    description:
      "Big Four foundation with the personalized service of a boutique firm",
  },
  {
    title: "QuickBooks Advanced Certified",
    description:
      "Advanced ProAdvisor certification for expert QuickBooks optimization",
  },
  {
    title: "Med Spa Specialists",
    description:
      "Deep understanding of the unique financial complexities of aesthetic practices",
  },
  {
    title: "Year-Round Partnership",
    description:
      "Proactive, ongoing support — not just year-end catch-up work",
  },
  {
    title: "Tax-Ready Books",
    description:
      "Clean, organized financials ready for seamless hand-off to your tax preparer",
  },
];

const missionCards = [
  {
    title: "Mission",
    text: "To empower med spa owners with financial clarity — helping them truly understand their numbers, make confident business decisions, and build the foundation for sustainable, profitable growth.",
  },
  {
    title: "Vision",
    text: "To be the trusted financial partner for aesthetic practices nationwide — delivering professional, hands-on accounting support with a client-first approach, personal attention, and efficient processes.",
  },
  {
    title: "Values",
    text: "Our five cornerstone values drive how we do business: integrity, accountability, professionalism, friendliness, and discipline. We treat every client with fairness and hold ourselves to the highest standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — full viewport Portland banner */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/portland-banner.jpg"
          alt="Portland, Oregon skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-transparent" />
        <div className="relative z-10 max-w-site mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/60 block mb-4">
              Our story
            </span>
          </FadeIn>
          <RevealText
            as="h1"
            className="font-serif text-heading md:text-display text-cream max-w-3xl"
          >
            About Source Accounting
          </RevealText>
        </div>
      </section>

      {/* About the Firm — asymmetric layout */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-2">
              <FadeIn>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
                  Who we are
                </span>
                <h2 className="font-serif text-heading text-dark mb-8">
                  Financial expertise for growing practices
                </h2>
                <div className="space-y-5">
                  <p className="text-body leading-relaxed">
                    Source Accounting is based out of Portland, OR and happily
                    serves clients throughout the US. With 20 years of hands-on
                    accounting experience, we help med spas resolve complex
                    bookkeeping issues, strengthen financial systems, and
                    streamline processes to support profitable growth.
                  </p>
                  <p className="text-body leading-relaxed">
                    As your med spa grows, the financial side of the business
                    becomes more complex. From memberships and prepaid packages
                    to provider payroll, medical director fees, and retail sales,
                    accurate financial reporting matters.
                  </p>
                  <p className="text-body leading-relaxed">
                    Our approach goes beyond once-a-year catch-up work. We
                    partner with med spa owners throughout the year to keep
                    accounting accurate, efficient, and actionable.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-3">
              <FadeIn direction="right" delay={0.2}>
                <Parallax speed={0.15}>
                  <Image
                    src="/images/manisha.webp"
                    alt="Manisha Jain, CPA, CGMA - Founder of Source Accounting"
                    width={800}
                    height={600}
                    className="object-cover w-full aspect-[4/3]"
                  />
                </Parallax>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — numbered editorial items */}
      <section className="bg-white py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
              Why Source
            </span>
          </FadeIn>
          <RevealText
            as="h2"
            className="font-serif text-heading text-dark max-w-2xl mb-16 md:mb-24"
          >
            Why Choose Source Accounting
          </RevealText>

          <StaggerGrid
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            stagger={0.08}
          >
            {differentiators.map((item, i) => (
              <div key={item.title} className="flex items-start gap-6 border-t border-dark/10 pt-8">
                <span className="font-serif text-4xl text-primary/15 leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
                Our approach
              </span>
            </FadeIn>
            <RevealText
              as="h2"
              className="font-serif text-heading text-dark mb-8"
            >
              How We Work
            </RevealText>
            <FadeIn delay={0.3}>
              <p className="text-body text-lg leading-relaxed">
                Our recurring monthly services are designed for med spa owners
                who want an ongoing, professional accounting partner. We provide
                done-for-you bookkeeping and financial support so you can stay
                focused on patient experience, operations, and profitable growth.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values — alternating blocks */}
      <section className="bg-white">
        {missionCards.map((card, i) => {
          const isDark = i % 2 === 0;
          return (
            <div
              key={card.title}
              className={`py-20 md:py-28 ${
                isDark ? "bg-primary text-cream" : "bg-white text-dark"
              }`}
            >
              <div className="max-w-site mx-auto px-6 md:px-10">
                <FadeIn>
                  <div className="max-w-3xl">
                    <span
                      className={`text-[11px] uppercase tracking-[0.2em] block mb-6 ${
                        isDark ? "text-cream/40" : "text-muted"
                      }`}
                    >
                      {card.title}
                    </span>
                    <p
                      className={`font-serif text-subheading leading-relaxed ${
                        isDark ? "text-cream/90" : "text-dark"
                      }`}
                    >
                      {card.text}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </section>

      {/* Our Story */}
      <section className="bg-cream py-24 md:py-36">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted block mb-6">
                Our founder
              </span>
            </FadeIn>
            <RevealText
              as="h2"
              className="font-serif text-heading text-dark mb-10"
            >
              Our Story
            </RevealText>

            <FadeIn delay={0.2}>
              <div className="space-y-5">
                <p className="text-body text-base md:text-lg leading-relaxed">
                  Source Accounting was founded by Manisha A. Jain, CPA to
                  provide growing businesses with a higher level of accounting
                  support and a more proactive client experience. In 2021, the
                  firm officially rebranded from Manisha A. Jain, CPA to Source
                  Accounting to better reflect its mission and long-term vision.
                </p>
                <p className="text-body text-base md:text-lg leading-relaxed">
                  Manisha began her career at Ernst & Young in Chicago and later
                  built experience across regional CPA firms and Fortune 500
                  companies. Over time, she saw that many business owners needed
                  more than year-end accounting support. They needed an
                  experienced financial partner who could help bring clarity,
                  structure, and confidence to the day-to-day financial side of
                  the business.
                </p>
              </div>
            </FadeIn>

            {/* Pull quote */}
            <FadeIn delay={0.3}>
              <blockquote className="my-16 border-l-2 border-primary/20 pl-8">
                <p className="font-serif text-subheading text-dark italic leading-relaxed">
                  &ldquo;The biggest mistake a small business can make is to
                  think like a small business.&rdquo;
                </p>
                <cite className="not-italic text-sm text-muted block mt-4">
                  — Aruna Bhayana
                </cite>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-5">
                <p className="text-body text-base md:text-lg leading-relaxed">
                  That perspective led her to build Source Accounting. Today, the
                  firm supports med spa owners with accurate accounting, stronger
                  financial systems, and ongoing support designed to help them
                  grow with confidence.
                </p>
                <p className="text-body text-base md:text-lg leading-relaxed">
                  Manisha is an Advanced Certified QuickBooks ProAdvisor, a
                  Certified Public Accountant (CPA), and a Chartered Global
                  Management Accountant (CGMA).
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to get started?"
        buttonText="Schedule a Free Consultation"
        href="/schedule"
      />
    </>
  );
}
