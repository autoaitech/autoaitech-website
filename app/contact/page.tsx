"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "@/components/AnimateIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    challenge: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Form submission:", form);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-24 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let's talk about your business
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us a bit about where you are and what you're trying to grow. We'll get back to you within 24 hours
            with a clear next step.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateIn direction="up">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
                <div className="text-5xl mb-6">✅</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">We got your message</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Thanks for reaching out. Someone from our team will be in touch within 24 hours to set up a call.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in touch</h2>
                <p className="text-slate-500 mb-8">
                  No sales pitch. Just a real conversation about your business and whether we can help.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Sean Mulligan"
                        className="border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className="text-sm font-semibold text-slate-700">
                        Business name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        required
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Your Agency Ltd"
                        className="border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="sean@youragency.ie"
                        className="border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        Phone <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+353 87 000 0000"
                        className="border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="challenge" className="text-sm font-semibold text-slate-700">
                      What's your biggest growth challenge right now? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      required
                      rows={5}
                      value={form.challenge}
                      onChange={handleChange}
                      placeholder="Tell us what's slowing your growth, what you're trying to solve, or where you feel like you're leaving money on the table..."
                      className="border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors w-full sm:w-auto"
                  >
                    Send message
                  </button>

                  <p className="text-slate-400 text-sm">
                    We respond to every message within 24 hours. Your details are never shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </AnimateIn>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🕐", title: "24-hour response", desc: "We respond to every enquiry within one business day." },
            { icon: "🤝", title: "No commitment", desc: "A strategy call is a conversation, not a sales pitch." },
            { icon: "🇮🇪", title: "Ireland-based", desc: "We work with Irish and UK agencies who want real results." },
          ].map((item, i) => (
            <AnimateIn key={item.title} delay={i * 100} direction="up">
              <div className="flex flex-col items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
