
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WaitlistForm from "@/components/WaitlistForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index: React.FC = () => {
  // Set up intersection observers for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-animation, .reveal-animation-left, .reveal-animation-right");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        
        <section className="py-16 px-4" id="waitlist">
          <div className="container mx-auto">
            <h2 className="section-heading text-center">Ready to Accelerate Your Growth?</h2>
            <p className="section-subheading text-center">
              Join our waitlist today and be the first to know when we launch.
            </p>
            
            <div className="mt-12">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
