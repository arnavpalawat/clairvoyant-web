"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out Clairvoyant",
    features: [
      "1 connected calendar",
      "Basic meeting briefs",
      "7-day history",
      "Web access only",
    ],
    cta: "Get Started",
    ctaStyle: "secondary",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For professionals who value their time",
    features: [
      "Unlimited calendars",
      "Full meeting briefs + email triage",
      "Proactive insights & reminders",
      "90-day history",
      "Mobile app + notifications",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "primary",
    popular: true,
    trial: "14-day free trial. No credit card required.",
  },
  {
    name: "Team",
    price: "$20",
    period: "/user/month",
    description: "For teams that move fast together",
    features: [
      "Everything in Pro",
      "Shared team context",
      "Meeting briefs for group calls",
      "Admin controls",
      "Team analytics",
      "Slack integration",
    ],
    cta: "Contact Sales",
    ctaStyle: "secondary",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void-light" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-label">Pricing</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-display text-4xl md:text-5xl text-cream text-center mb-4"
        >
          Simple pricing. Cancel anytime.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream-muted text-center mb-16 max-w-xl mx-auto"
        >
          Start free, upgrade when you&apos;re ready. No hidden fees, no
          surprises.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-amber text-void px-4 py-1.5 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "bg-void-card border-2 border-amber/30 glow-amber"
                    : "card-solid hover:border-border-hover"
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-medium mb-2 ${
                      plan.popular ? "text-amber" : "text-cream"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-cream">
                      {plan.price}
                    </span>
                    <span className="text-cream-dark">{plan.period}</span>
                  </div>
                  <p className="text-sm text-cream-muted mt-2">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-amber" : "text-emerald"
                        }`}
                      />
                      <span className="text-cream-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div>
                  <button
                    className={`w-full ${
                      plan.ctaStyle === "primary"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                  </button>
                  {plan.trial && (
                    <p className="text-xs text-cream-dark text-center mt-3">
                      {plan.trial}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-cream-muted">
            Need custom enterprise features?{" "}
            <a href="#" className="text-amber hover:text-amber-light link-underline">
              Talk to us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
