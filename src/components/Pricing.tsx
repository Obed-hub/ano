
import React, { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingCard: React.FC<{
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
  color?: string;
}> = ({ title, description, price, features, isPopular, delay, color = "bg-primary" }) => {
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
    <div className={`glass-card p-6 ${isPopular ? 'border-primary ring-1 ring-primary shadow-lg shadow-primary/20' : ''} reveal-animation opacity-0 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2`}>
      {isPopular && (
        <div className="text-xs uppercase font-bold text-primary mb-2">Most Popular</div>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="text-3xl font-bold mb-6">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className={`w-5 h-5 ${isPopular ? "text-primary" : "text-secondary"} flex-shrink-0 mt-0.5`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}>
        Get Started
      </Button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-12 px-4" id="pricing">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Pricing Summary</h2>
        <p className="section-subheading text-center">
          Simple, transparent pricing with no long-term commitments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <PricingCard
            title="Starter"
            description="Perfect for early-stage startups"
            price="$399"
            features={[
              "30 Real Product Testers",
              "Basic Feedback Reporting",
              "1 Target Customer Segment",
              "Email Support",
            ]}
            color="bg-secondary"
            delay={0}
          />
          <PricingCard
            title="Growth"
            description="Ideal for validation & growth"
            price="$649"
            features={[
              "50 Real Product Testers",
              "Enhanced Feedback Analytics",
              "2 Target Customer Segments",
              "Email + Chat Support",
              "Conversion Strategy Call"
            ]}
            isPopular={true}
            delay={200}
          />
          <PricingCard
            title="Scale"
            description="For startups ready to scale"
            price="$999"
            features={[
              "100 Real Product Testers",
              "Premium Feedback & Analytics",
              "3 Target Customer Segments",
              "Priority Support",
              "2 Conversion Strategy Calls",
              "Custom User Acquisition Plan"
            ]}
            color="bg-secondary"
            delay={400}
          />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Need a custom solution? <Button variant="link" className="p-0">Contact us</Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
