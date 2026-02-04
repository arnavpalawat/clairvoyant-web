"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-oracle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid with subtle pulse */}
        <motion.div
          className="absolute inset-0 bg-grid"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Orbs with complex motion */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 60%)",
            filter: "blur(70px)",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* Noise Overlay */}
        <div className="bg-noise absolute inset-0" />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge with pulse animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="section-label mb-8 inline-flex cursor-default"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(245, 158, 11, 0.1)",
                    "0 0 30px rgba(245, 158, 11, 0.2)",
                    "0 0 15px rgba(245, 158, 11, 0.1)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </motion.span>
                Now in Early Access
              </motion.span>
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
              <motion.span
                className="gradient-text-amber inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                thinks ahead.
              </motion.span>
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
              <motion.a
                href="#waitlist"
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join the Waitlist
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.a>
              <motion.span
                className="text-sm text-cream-dark self-center"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Free for the first 1,000 users
              </motion.span>
            </motion.div>

            {/* Social Proof with hover effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-void flex items-center justify-center text-xs text-cream-muted cursor-default"
                    style={{
                      background: `linear-gradient(135deg, hsl(${
                        i * 40 + 20
                      }, 30%, 18%) 0%, hsl(${i * 40 + 20}, 30%, 12%) 100%)`,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.15,
                      zIndex: 10,
                      borderColor: "rgba(245, 158, 11, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-cream-muted">
                <motion.span
                  className="text-amber font-medium"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  2,400+
                </motion.span>{" "}
                on the waitlist
              </p>
            </motion.div>
          </div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Glowing Orb Background with rotation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber/10 via-violet/5 to-transparent blur-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* App Preview Card with float animation */}
            <motion.div
              className="relative card-glass p-1"
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0 0 30px rgba(245, 158, 11, 0.1)",
                  "0 0 50px rgba(245, 158, 11, 0.2)",
                  "0 0 30px rgba(245, 158, 11, 0.1)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-void-card rounded-xl overflow-hidden">
                {/* App Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-burgundy"
                      whileHover={{ scale: 1.3 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-amber/60"
                      whileHover={{ scale: 1.3 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-emerald/60"
                      whileHover={{ scale: 1.3 }}
                    />
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
                    className="bg-void-lighter border border-amber/20 rounded-xl p-4 relative overflow-hidden group cursor-default"
                    whileHover={{ borderColor: "rgba(245, 158, 11, 0.4)" }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-1 h-full bg-amber"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <motion.p
                          className="text-xs text-amber font-medium uppercase tracking-wider mb-1"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Coming up in 25 min
                        </motion.p>
                        <p className="text-cream font-medium">
                          Call with Acme Corp
                        </p>
                      </div>
                      <motion.span
                        className="text-xs bg-amber/20 text-amber px-2 py-1 rounded-full"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        High Priority
                      </motion.span>
                    </div>
                    <p className="text-sm text-cream-muted leading-relaxed">
                      Last discussed pricing concerns. They asked about MAU
                      growth and wanted to see updated metrics.
                    </p>
                    <motion.button
                      className="mt-3 text-sm text-amber flex items-center gap-1"
                      whileHover={{ x: 5, color: "#fbbf24" }}
                    >
                      View full brief
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </motion.div>

                  {/* Email Alert */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-void-lighter border border-border rounded-xl p-4 cursor-default"
                    whileHover={{ borderColor: "rgba(124, 58, 237, 0.3)" }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-8 h-8 rounded-full bg-violet/20 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <span className="text-xs text-violet font-medium">3</span>
                      </motion.div>
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
                    className="flex items-start gap-3 p-4 bg-void-lighter/50 rounded-xl border border-border cursor-default"
                    whileHover={{ borderColor: "rgba(248, 244, 235, 0.15)" }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="text-amber text-xs">!</span>
                    </motion.div>
                    <p className="text-sm text-cream-muted">
                      <span className="text-cream">Reminder:</span> You promised
                      to send the deck to Sarah — it&apos;s been 4 days.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
          className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2 cursor-pointer"
          whileHover={{ borderColor: "rgba(245, 158, 11, 0.5)" }}
        >
          <motion.div
            className="w-1 h-2 bg-cream-dark rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
