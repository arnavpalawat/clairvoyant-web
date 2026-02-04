"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-void" />

      {/* Subtle top glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245, 158, 11, 0.04) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top Border Gradient */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(248, 244, 235, 0.1), rgba(245, 158, 11, 0.3), rgba(248, 244, 235, 0.1), transparent)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-narrow relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 mb-6 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative w-8 h-8 flex items-center justify-center"
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 bg-amber rounded-lg blur-lg"
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 relative z-10"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  className="text-amber"
                />
              </svg>
            </motion.div>
            <span className="text-lg font-semibold tracking-tight text-cream">
              Clairvoyant
            </span>
          </motion.a>

          {/* Tagline */}
          <motion.p
            className="text-cream-muted text-sm mb-8 max-w-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The AI that thinks ahead, so you don&apos;t have to.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-void-lighter border border-border flex items-center justify-center text-cream-muted"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(245, 158, 11, 0.4)",
                  color: "#f59e0b",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                custom={i}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider with animation */}
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Copyright */}
          <motion.p
            className="text-xs text-cream-dark"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © 2026 Clairvoyant
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
