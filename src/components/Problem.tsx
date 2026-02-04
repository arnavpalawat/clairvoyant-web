"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, Mail, Calendar, Brain } from "lucide-react";

const painPoints = [
  {
    icon: Calendar,
    text: "You walk into meetings unprepared",
  },
  {
    icon: Mail,
    text: "Important emails get buried under noise",
  },
  {
    icon: Brain,
    text: "Tasks slip because nothing reminded you",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void-light to-void" />

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
              <AlertCircle className="w-3.5 h-3.5" />
              The Problem
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream text-center mb-8"
          >
            You&apos;re drowning in information, but{" "}
            <span className="text-cream-dark">starving for context.</span>
          </motion.h2>

          {/* Body Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-lg md:text-xl text-cream-muted leading-relaxed max-w-2xl mx-auto">
              You have 47 unread emails. Back-to-back meetings. A task list that
              haunts you. But when you walk into that investor call, you
              can&apos;t remember what you discussed last time.
            </p>
          </motion.div>

          {/* Pain Points Visual */}
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="card-solid p-6 h-full transition-all duration-300 hover:border-burgundy/30 hover:bg-burgundy/5">
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/20 transition-colors">
                    <point.icon className="w-6 h-6 text-burgundy-light" />
                  </div>
                  <p className="text-cream text-lg font-medium">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block card-glass px-8 py-6 border-burgundy/20">
              <p className="text-lg text-cream-muted">
                <span className="text-cream font-medium">
                  Current AI assistants wait for you to ask.
                </span>
                <br />
                <span className="text-cream-dark">
                  But you don&apos;t know what you don&apos;t know.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
