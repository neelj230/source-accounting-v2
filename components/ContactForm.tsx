"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16">
        <p className="text-heading font-serif text-dark">Thank you.</p>
        <p className="mt-4 text-body text-lg">
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/hello@source-accounting.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="firstName"
            className="text-[11px] uppercase tracking-[0.15em] text-muted block mb-3"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="input-editorial"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="text-[11px] uppercase tracking-[0.15em] text-muted block mb-3"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="input-editorial"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-[11px] uppercase tracking-[0.15em] text-muted block mb-3"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="input-editorial"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="text-[11px] uppercase tracking-[0.15em] text-muted block mb-3"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="input-editorial"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="text-[11px] uppercase tracking-[0.15em] text-muted block mb-3"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="input-editorial"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-[11px] uppercase tracking-[0.15em] text-muted block mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input-editorial resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-cream py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-primary-dark transition-colors duration-500"
      >
        Send Message
      </button>
    </form>
  );
}
