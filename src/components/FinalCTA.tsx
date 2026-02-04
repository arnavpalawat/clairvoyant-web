"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      id="cta"
      className="section relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-oracle" />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="section-label">
              <Sparkles className="w-3.5 h-3.5" />
              Early Access
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            Stop reacting.{" "}
            <span className="gradient-text-amber">Start anticipating.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream-muted mb-10 max-w-lg mx-auto"
          >
            Join 2,400+ professionals who never walk into a meeting unprepared.
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex gap-3 flex-col sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-4 bg-void-card border border-border rounded-full text-cream placeholder:text-cream-dark focus:outline-none focus:border-amber/50 focus:ring-2 focus:ring-amber/20 transition-all"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap group">
                    Get Early Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-glass p-6 border-emerald/20"
              >
                <div className="flex items-center justify-center gap-3 text-emerald mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg font-medium">You&apos;re on the list!</span>
                </div>
                <p className="text-cream-muted text-sm">
                  We&apos;ll be in touch soon with early access.
                </p>
              </motion.div>
            )}

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-cream-dark mt-4"
            >
              No credit card required. Set up in 2 minutes.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
