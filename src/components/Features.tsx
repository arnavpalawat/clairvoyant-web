"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Calendar,
  Mail,
  Lightbulb,
  Sun,
  ArrowRight,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    id: "meetings",
    icon: Calendar,
    label: "Meeting Briefs",
    headline: "Walk into every meeting prepared.",
    description:
      "30 minutes before your call, Clairvoyant delivers a brief: who you're meeting, what you discussed last time, relevant docs, and what to watch out for.",
    quote: 'No more "sorry, can you remind me where we left off?"',
    visual: "meeting",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Triage",
    headline: "See what actually needs your attention.",
    description:
      "Not all emails are equal. Clairvoyant learns what matters to you and surfaces the 5% that need a response — so you can ignore the rest guilt-free.",
    quote: null,
    visual: "email",
  },
  {
    id: "reminders",
    icon: Lightbulb,
    label: "Proactive Reminders",
    headline: "Never drop the ball again.",
    description:
      '"You mentioned sending the deck to Sarah — it\'s been 4 days." Clairvoyant catches the commitments you make in emails and meetings, then reminds you before they slip.',
    quote: null,
    visual: "reminder",
  },
  {
    id: "daily",
    icon: Sun,
    label: "Daily Brief",
    headline: "Start every day with clarity.",
    description:
      "Each morning, get a summary: your key meetings, priority tasks, things you might have forgotten. Each evening, a quick review of what got done and what's ahead.",
    quote: null,
    visual: "daily",
  },
];

function MeetingVisual() {
  return (
    <div className="bg-void-card rounded-xl border border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <span className="text-xs text-amber font-medium">
          BRIEF READY • 10:30 AM
        </span>
        <span className="text-xs text-cream-dark">25 min</span>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h4 className="text-cream font-medium mb-1">Call with Investor</h4>
          <p className="text-sm text-cream-muted">John Smith, Sarah Lee</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-cream-dark mt-0.5" />
            <div>
              <p className="text-sm text-cream">Last conversation (Jan 15)</p>
              <p className="text-xs text-cream-muted">
                Discussed $2M seed at $10M cap
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber mt-0.5" />
            <div>
              <p className="text-sm text-cream">Watch out</p>
              <p className="text-xs text-cream-muted">
                You haven&apos;t sent the updated deck
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailVisual() {
  return (
    <div className="bg-void-card rounded-xl border border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <span className="text-xs text-cream-dark">NEEDS YOUR ATTENTION</span>
      </div>
      <div className="divide-y divide-border">
        {[
          { from: "Legal Team", subject: "Contract review needed", urgent: true },
          { from: "Mike Chen", subject: "Re: Partnership proposal", urgent: false },
          { from: "Sarah Wilson", subject: "Follow-up from yesterday", urgent: false },
        ].map((email, i) => (
          <div key={i} className="px-4 py-3 flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                email.urgent ? "bg-burgundy-light" : "bg-amber/60"
              }`}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-cream truncate">{email.subject}</p>
              <p className="text-xs text-cream-dark">{email.from}</p>
            </div>
            {email.urgent && (
              <span className="text-xs text-burgundy-light">Urgent</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReminderVisual() {
  return (
    <div className="bg-void-card rounded-xl border border-amber/20 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-4 h-4 text-amber" />
          </div>
          <div>
            <p className="text-sm text-cream mb-1">
              You mentioned sending the deck to Sarah
            </p>
            <div className="flex items-center gap-2 text-xs text-cream-dark">
              <Clock className="w-3 h-3" />
              <span>4 days ago in email thread</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 px-3 bg-amber/10 text-amber text-sm rounded-lg hover:bg-amber/20 transition-colors">
            Mark done
          </button>
          <button className="flex-1 py-2 px-3 bg-void-lighter text-cream-muted text-sm rounded-lg hover:bg-void-light transition-colors">
            Snooze
          </button>
        </div>
      </div>
    </div>
  );
}

function DailyVisual() {
  return (
    <div className="bg-void-card rounded-xl border border-border overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <Sun className="w-4 h-4 text-amber" />
        <span className="text-sm text-cream font-medium">
          Your morning brief
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-emerald" />
          <span className="text-sm text-cream">4 meetings today</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-emerald" />
          <span className="text-sm text-cream">3 emails need responses</span>
        </div>
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber" />
          <span className="text-sm text-cream">
            1 follow-up overdue
          </span>
        </div>
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-cream-dark">
            First meeting at 10:30 AM — brief ready
          </p>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<string, React.FC> = {
  meeting: MeetingVisual,
  email: EmailVisual,
  reminder: ReminderVisual,
  daily: DailyVisual,
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const activeFeatureData = features.find((f) => f.id === activeFeature)!;
  const VisualComponent = visuals[activeFeatureData.visual];

  return (
    <section ref={ref} id="features" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-void-light" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-label">Features</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-display text-4xl md:text-5xl text-cream text-center mb-16 max-w-3xl mx-auto"
        >
          Everything you need to know, exactly when you need it.
        </motion.h2>

        {/* Features Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-start">
          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                  activeFeature === feature.id
                    ? "bg-void-card border border-amber/20 glow-amber"
                    : "bg-transparent border border-transparent hover:bg-void-card/50 hover:border-border"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeFeature === feature.id
                        ? "bg-amber/20"
                        : "bg-void-lighter group-hover:bg-void-light"
                    }`}
                  >
                    <feature.icon
                      className={`w-6 h-6 transition-colors ${
                        activeFeature === feature.id
                          ? "text-amber"
                          : "text-cream-dark group-hover:text-cream-muted"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium mb-1 transition-colors ${
                        activeFeature === feature.id
                          ? "text-amber"
                          : "text-cream-dark"
                      }`}
                    >
                      {feature.label}
                    </p>
                    <h3
                      className={`text-lg font-medium transition-colors ${
                        activeFeature === feature.id
                          ? "text-cream"
                          : "text-cream-muted group-hover:text-cream"
                      }`}
                    >
                      {feature.headline}
                    </h3>
                    {activeFeature === feature.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-cream-muted mt-3 leading-relaxed">
                          {feature.description}
                        </p>
                        {feature.quote && (
                          <p className="text-sm text-cream-dark mt-3 italic">
                            {feature.quote}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-all ${
                      activeFeature === feature.id
                        ? "text-amber translate-x-1"
                        : "text-cream-dark opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Visual Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sticky top-32"
          >
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber/10 via-violet/5 to-transparent rounded-3xl blur-3xl" />

              {/* Phone Frame */}
              <div className="relative card-glass p-2 rounded-3xl">
                <div className="bg-void rounded-2xl overflow-hidden">
                  {/* Phone Notch */}
                  <div className="h-6 bg-void-lighter flex items-center justify-center">
                    <div className="w-20 h-1 bg-void-card rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <VisualComponent />
                    </motion.div>
                  </div>

                  {/* Home Indicator */}
                  <div className="h-8 flex items-center justify-center">
                    <div className="w-32 h-1 bg-cream/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Cards - Mobile */}
        <div className="lg:hidden grid gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-solid p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-amber" />
                </div>
                <span className="text-sm text-amber font-medium">
                  {feature.label}
                </span>
              </div>
              <h3 className="text-xl text-cream font-medium mb-3">
                {feature.headline}
              </h3>
              <p className="text-cream-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
