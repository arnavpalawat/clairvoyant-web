"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I used to spend 10 minutes before every call scrambling for context. Now it's just... there. Clairvoyant feels like magic.",
    name: "Sarah Chen",
    title: "Founder @ Stealth Startup",
    avatar: "SC",
  },
  {
    quote:
      "The email triage alone is worth it. I went from inbox anxiety to actually knowing what needs my attention.",
    name: "Marcus Williams",
    title: "Product Lead @ Series B Startup",
    avatar: "MW",
  },
  {
    quote:
      "It caught a follow-up I completely forgot about. That one save paid for a year of subscription.",
    name: "Priya Sharma",
    title: "Investor @ VC Fund",
    avatar: "PS",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void-light to-void" />

      {/* Ambient Light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245, 158, 11, 0.2) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="heading-display text-4xl md:text-5xl text-cream text-center mb-16"
        >
          Trusted by people who value their time.
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="card-glass p-8 h-full flex flex-col transition-all duration-300 hover:border-amber/20 hover:glow-amber">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-amber/40" />
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-cream leading-relaxed mb-8 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber/20 to-violet/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-cream">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-cream font-medium">{testimonial.name}</p>
                    <p className="text-sm text-cream-dark">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-cream-dark mb-8 uppercase tracking-wider">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {["Startup A", "Startup B", "Startup C", "Startup D"].map(
              (company, i) => (
                <div
                  key={i}
                  className="text-cream-dark/40 text-lg font-medium tracking-wide"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
