import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  );
}
