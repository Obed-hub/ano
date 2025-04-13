
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
       Coming soon...
      </Button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section className="py-12 px-4" id="pricing">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Pricing Summary(Pay as you go)</h2>
        <p className="section-subheading text-center">
          Invest in your startup.Invest in your dream.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <PricingCard
            title="Starter"
            description="Perfect for early-stage startups"
            price="coming soon..."
            features={[
              "20 Real customer feedback",
              "Basic Feedback Reporting",
              "7 Target Customer groups/niches + 10 customers/clients",
              "Email Support",
              "1 Conversion Strategy Call",
            ]}
            color="bg-secondary"
            delay={0}
          />
          <PricingCard
            title="Growth"
            description="Ideal for validation & growth"
            price="coming soon..."
            features={[
              "30 Real customer feedback",
              "Enhanced Feedback Analytics",
              " 15 Target Customer groups/niches + 20 customers/clients",
              "Email + Chat Support",
              "Conversion Strategy Call"
            ]}
            isPopular={true}
            delay={200}
          />
          <PricingCard
            title="Scale"
            description="For startups ready to scale"
            price="coming soon..."
            features={[
              "50 Real customer feedback",
              "Premium Feedback & Analytics",
              "25 Target Customer groups/niches + 35 customers/clients",
              "Priority Support",
              "3 Conversion Strategy Calls",
              "Custom User Acquisition Plan",
              "Customized to your needs"
            ]}
            color="bg-secondary"
            delay={400}
          />
          <PricingCard
          title="Scale"
          description="For Users Who Want Million daily page visitors"
          price="$custom"
          features={[
            "Customized to your needs",
            "Full product distribution across multiple platforms and networks ",
            "SEO optimization tailored for your product",
            "Viral campaigns and giveaways to drive sign-ups",
            "unlimited Conversion Strategy Calls",
            "Access to influencers and organic marketing tools",
            "Multiple Newsletter Launch: Targeted product launch emails sent to multiple niche newsletters",
            "Online reputation management (responding to comments, reviews, etc.)",
            "And more..."
          ]}
          color="bg-secondary"
          delay={400}
        />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            we validate your product before we launch it. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
