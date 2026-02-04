"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Waitlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      id="waitlist"
      className="section relative overflow-hidden py-32 md:py-40"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-void" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 50%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 50%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + (i % 3) * 0.5}px`,
            height: `${1 + (i % 3) * 0.5}px`,
            left: `${8 + (i * 5) % 85}%`,
            top: `${15 + (i * 6) % 70}%`,
            backgroundColor: i % 3 === 0 ? "rgba(245, 158, 11, 0.5)" : i % 3 === 1 ? "rgba(124, 58, 237, 0.35)" : "rgba(248, 244, 235, 0.25)",
          }}
          animate={{
            y: [0, -40 - (i % 3) * 15, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 4 + (i % 4) * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.25,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <motion.span
              className="section-label"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.1)",
                  "0 0 40px rgba(245, 158, 11, 0.2)",
                  "0 0 20px rgba(245, 158, 11, 0.1)",
                ],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.span>
              Early Access Open
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6"
          >
            Stop reacting.{" "}
            <motion.span
              className="gradient-text-amber inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Start anticipating.
            </motion.span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream-muted mb-12 max-w-lg mx-auto"
          >
            Be the first to experience AI that knows what you need before you ask.
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
                <motion.div
                  className="relative"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-amber/20 via-violet/10 to-amber/20 rounded-full blur-xl"
                    animate={{
                      opacity: isHovered ? 0.8 : 0.3,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex gap-2 p-1.5 bg-void-card border border-border rounded-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-5 py-3 bg-transparent text-cream placeholder:text-cream-dark focus:outline-none text-sm"
                    />
                    <motion.button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-cream text-void text-sm font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.02, backgroundColor: "#fbbf24" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span>Join</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-2 bg-emerald/10 rounded-2xl blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative card-glass p-6 border-emerald/30 rounded-2xl">
                  <motion.div
                    className="flex items-center justify-center gap-3 text-emerald mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="text-lg font-medium">
                      You&apos;re on the list!
                    </span>
                  </motion.div>
                  <p className="text-cream-muted text-sm">
                    We&apos;ll notify you when it&apos;s your turn.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-cream-dark mt-6"
            >
              No credit card required • Set up in 2 minutes
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
