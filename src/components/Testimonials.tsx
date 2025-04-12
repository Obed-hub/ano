
import React, { useEffect } from "react";
import { Quote } from "lucide-react";

const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  role: string;
  delay: number;
}> = ({ quote, author, role, delay }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-animation");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [delay]);

  return (
    <div className="glass-card p-6 reveal-animation opacity-0">
      <Quote className="w-6 h-6 text-primary/60 mb-2" />
      <p className="italic mb-4">{quote}</p>
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-muted-foreground">{role}</div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">What Founders Say</h2>
        <p className="section-subheading text-center">
          Hear from founders who have accelerated their growth with StartupWifi (early customers).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TestimonialCard
            quote="StartupWifi helped us find our initial customers and refine our product based on real feedback. We hit product-market fit in half the time."
            author="Sarah Johnson"
            role="Founder, TechStart"
            delay={0}
          />
          <TestimonialCard
            quote="The quality of testers was impressive. We received actionable insights that directly led to feature improvements and higher user satisfaction."
            author="Michael Chen"
            role="CTO, DataFlow"
            delay={200}
          />
          <TestimonialCard
            quote="Having access to real customers from day one made all the difference. We were able to validate our business model much faster than expected."
            author="Aisha Patel"
            role="CEO, CloudStack"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
