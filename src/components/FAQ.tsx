"use client";

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Clairvoyant access my data?",
    answer:
      'We use OAuth (the same secure method you use to "Sign in with Google"). We request read-only access to your calendar and email. We never store your passwords, and you can revoke access anytime.',
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Your data is encrypted at rest and in transit. We never sell your data or use it to train AI models. You can delete everything with one click.",
  },
  {
    question: "What if the AI gets something wrong?",
    answer:
      "It happens! That's why we show our sources — you can always see why Clairvoyant surfaced something. Use the feedback buttons to help it learn your preferences.",
  },
  {
    question: "Does it work with Outlook / other email?",
    answer:
      "We're starting with Google Workspace (Gmail + Calendar). Outlook support is coming soon — join the waitlist to get notified.",
  },
  {
    question: "Can I use it with my team?",
    answer:
      "Yes! Our Team plan lets you share context across your organization. Great for sales teams, execs, and anyone with lots of meetings.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "If you're not happy, we're not happy. Email us within 30 days for a full refund, no questions asked.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <span className="text-lg text-cream font-medium group-hover:text-amber transition-colors">
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
            isOpen ? "bg-amber text-void" : "bg-void-lighter text-cream-muted"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-cream-muted leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="heading-display text-4xl md:text-5xl text-cream text-center mb-16"
          >
            Questions? We&apos;ve got answers.
          </motion.h2>

          {/* FAQ List */}
          <div className="border-t border-border">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-cream-muted">
              Still have questions?{" "}
              <a href="mailto:hello@clairvoyant.ai" className="text-amber hover:text-amber-light link-underline">
                Reach out to us
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
