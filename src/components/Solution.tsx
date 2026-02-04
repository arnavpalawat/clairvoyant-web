"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Zap, Eye } from "lucide-react";

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void to-void" />
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="section-label">
              <Sparkles className="w-3.5 h-3.5" />
              The Solution
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream text-center mb-8"
          >
            An AI that{" "}
            <span className="gradient-text-amber">anticipates</span>, not just
            responds.
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-cream-muted text-center max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Clairvoyant watches your calendar, email, and docs — then{" "}
            <span className="text-cream">
              proactively surfaces what matters, when it matters.
            </span>
          </motion.p>

          {/* Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Before */}
            <div className="card-solid p-8 border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cream-dark/10 flex items-center justify-center">
                  <span className="text-cream-dark text-lg">?</span>
                </div>
                <div>
                  <p className="text-sm text-cream-dark uppercase tracking-wider font-medium">
                    Traditional AI
                  </p>
                  <p className="text-cream font-medium">Waits for you to ask</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-cream-muted">
                  <span className="text-cream-dark">→</span>
                  <span>&quot;Hey AI, what&apos;s on my calendar?&quot;</span>
                </div>
                <div className="flex items-center gap-3 text-cream-muted">
                  <span className="text-cream-dark">→</span>
                  <span>&quot;Summarize this email thread&quot;</span>
                </div>
                <div className="flex items-center gap-3 text-cream-muted">
                  <span className="text-cream-dark">→</span>
                  <span>&quot;What did we discuss with Acme?&quot;</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="card-glass p-8 border-amber/20 glow-amber relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-sm text-amber uppercase tracking-wider font-medium">
                      Clairvoyant
                    </p>
                    <p className="text-cream font-medium">
                      Tells you before you ask
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-cream-muted">
                    <Zap className="w-4 h-4 text-amber mt-1 flex-shrink-0" />
                    <span>
                      &quot;Call with Acme in 30 min — last time you discussed
                      pricing...&quot;
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-cream-muted">
                    <Zap className="w-4 h-4 text-amber mt-1 flex-shrink-0" />
                    <span>
                      &quot;3 emails need your attention today — 1 is
                      urgent.&quot;
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-cream-muted">
                    <Zap className="w-4 h-4 text-amber mt-1 flex-shrink-0" />
                    <span>
                      &quot;You promised to follow up with Sarah — it&apos;s
                      been 4 days.&quot;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-cream font-medium">
              No prompting. No searching.
              <br />
              <span className="text-cream-muted">
                Just the right context at the right time.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
