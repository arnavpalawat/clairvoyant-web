"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8"
      >
        <nav
          className={`max-w-4xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-void-card/90 backdrop-blur-xl border border-border shadow-2xl shadow-black/20"
              : "bg-void-card/60 backdrop-blur-md border border-border/50"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative w-7 h-7 flex items-center justify-center"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 bg-amber rounded-lg blur-md"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Star icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 relative z-10"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  className="text-amber"
                />
              </svg>
            </motion.div>
            <span className="text-base font-semibold tracking-tight text-cream">
              Clairvoyant
            </span>
          </motion.a>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <motion.a
              href="#features"
              className="text-cream-muted hover:text-cream text-sm font-medium relative overflow-hidden group"
              whileHover={{ y: -1 }}
            >
              <span className="relative z-10">Features</span>
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#waitlist"
              className="relative overflow-hidden px-4 py-1.5 rounded-full bg-cream text-void text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="relative z-10 flex items-center gap-1.5"
                whileHover={{ x: 2 }}
              >
                Join Waitlist
                <motion.svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-cream-muted hover:text-cream transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <motion.div
          initial={false}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          className="absolute inset-0 bg-void/98 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          initial={false}
          animate={{
            y: isMobileMenuOpen ? 0 : -20,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="relative pt-28 px-8"
        >
          <div className="flex flex-col gap-6">
            <motion.a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-medium text-cream-muted hover:text-cream transition-colors"
              whileHover={{ x: 10 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#waitlist"
              className="btn-primary w-full justify-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
            </motion.a>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
