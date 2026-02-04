"use client";

import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-oracle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Noise Overlay */}
        <div className="bg-noise absolute inset-0" />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label mb-8 inline-flex">
                <Star className="w-3.5 h-3.5" />
                Now in Early Access
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="heading-display text-5xl md:text-6xl lg:text-7xl text-cream mb-6"
            >
              Your AI assistant that{" "}
              <span className="gradient-text-amber">thinks ahead.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="text-lg md:text-xl text-cream-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Clairvoyant knows what you need before you ask. Get meeting
              briefs, surface urgent emails, and never miss a follow-up again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#cta" className="btn-primary group">
                Get Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-sm text-cream-dark self-center">
                Free for the first 1,000 users
              </span>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-void bg-void-lighter flex items-center justify-center text-xs text-cream-muted"
                    style={{
                      background: `linear-gradient(135deg, hsl(${
                        i * 40 + 20
                      }, 30%, 20%) 0%, hsl(${i * 40 + 20}, 30%, 15%) 100%)`,
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-cream-muted">
                <span className="text-amber font-medium">2,400+</span> on the
                waitlist
              </p>
            </motion.div>
          </div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Glowing Orb Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber/10 via-violet/5 to-transparent blur-3xl" />
            </div>

            {/* App Preview Card */}
            <div className="relative card-glass p-1 glow-amber">
              <div className="bg-void-card rounded-xl overflow-hidden">
                {/* App Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-burgundy" />
                    <div className="w-3 h-3 rounded-full bg-amber/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald/60" />
                  </div>
                  <span className="text-xs text-cream-dark">Clairvoyant</span>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-4">
                  {/* Greeting */}
                  <div className="space-y-1">
                    <p className="text-cream-dark text-sm">Wednesday, Feb 4</p>
                    <h3 className="text-xl text-cream font-medium">
                      Good morning, Arnav
                    </h3>
                  </div>

                  {/* Meeting Brief Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-void-lighter border border-amber/20 rounded-xl p-4 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber" />
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs text-amber font-medium uppercase tracking-wider mb-1">
                          Coming up in 25 min
                        </p>
                        <p className="text-cream font-medium">
                          Call with Acme Corp
                        </p>
                      </div>
                      <span className="text-xs bg-amber/20 text-amber px-2 py-1 rounded-full">
                        High Priority
                      </span>
                    </div>
                    <p className="text-sm text-cream-muted leading-relaxed">
                      Last discussed pricing concerns. They asked about MAU
                      growth and wanted to see updated metrics.
                    </p>
                    <button className="mt-3 text-sm text-amber hover:text-amber-light transition-colors flex items-center gap-1">
                      View full brief
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>

                  {/* Email Alert */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-void-lighter border border-border rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center">
                        <span className="text-xs text-violet">3</span>
                      </div>
                      <div>
                        <p className="text-sm text-cream font-medium">
                          Emails need attention
                        </p>
                        <p className="text-xs text-cream-dark">
                          Including 1 marked urgent
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Insight */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-start gap-3 p-4 bg-void-lighter/50 rounded-xl border border-border"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber text-xs">!</span>
                    </div>
                    <p className="text-sm text-cream-muted">
                      <span className="text-cream">Reminder:</span> You promised
                      to send the deck to Sarah — it&apos;s been 4 days.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-cream-dark rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
