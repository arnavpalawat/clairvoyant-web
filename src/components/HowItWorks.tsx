"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link2, Brain, Bell, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect your accounts",
    description:
      "Link Google Calendar, Gmail, and your favorite tools. We'll handle the rest.",
    visual: (
      <div className="flex items-center gap-3">
        {["G", "S", "N"].map((letter, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-lg bg-void-lighter border border-border flex items-center justify-center text-cream-muted text-sm font-medium"
          >
            {letter}
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    icon: Brain,
    title: "Clairvoyant learns your world",
    description:
      "We analyze your calendar, emails, and docs to understand your relationships, priorities, and commitments.",
    visual: (
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-void-lighter rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-amber to-amber-light rounded-full"
          />
        </div>
        <span className="text-xs text-amber">Learning...</span>
      </div>
    ),
  },
  {
    number: "03",
    icon: Bell,
    title: "Get proactive insights",
    description:
      "Meeting briefs arrive before calls. Important emails surface automatically. Forgotten follow-ups get flagged.",
    visual: (
      <div className="flex items-center gap-2 bg-void-lighter px-3 py-2 rounded-lg border border-amber/20">
        <Bell className="w-4 h-4 text-amber" />
        <span className="text-sm text-cream">Brief ready for 10:30 call</span>
      </div>
    ),
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Clairvoyant gets smarter",
    description:
      "Thumbs up what helps. Dismiss what doesn't. Your feedback trains your personal AI to know exactly what you need.",
    visual: (
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/20 rounded-lg text-emerald text-sm">
          <ThumbsUp className="w-4 h-4" />
          Helpful
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-void-lighter border border-border rounded-lg text-cream-muted text-sm">
          <ThumbsUp className="w-4 h-4 rotate-180" />
          Not useful
        </button>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-label">How It Works</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-display text-4xl md:text-5xl text-cream text-center mb-16 max-w-2xl mx-auto"
        >
          Set up in 2 minutes.{" "}
          <span className="text-cream-dark">Save hours every week.</span>
        </motion.h2>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
              )}

              <div className="flex gap-6 pb-12 last:pb-0">
                {/* Step Number */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-void-lighter border border-border flex items-center justify-center">
                    <span className="text-sm text-amber font-mono font-medium">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-amber" />
                    <h3 className="text-xl text-cream font-medium">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-cream-muted mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="card-solid p-4 inline-block">{step.visual}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
