
import React, { useEffect } from "react";
import { Users, Mail, LineChart } from "lucide-react";

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  direction: "left" | "right" | "normal";
  delay: number;
}> = ({ icon, title, description, direction, delay }) => {
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

    const elements = document.querySelectorAll(`.reveal-animation${direction === "left" ? "-left" : direction === "right" ? "-right" : ""}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [direction, delay]);

  return (
    <div className={`glass-card p-8 reveal-animation${direction === "left" ? "-left" : direction === "right" ? "-right" : ""} opacity-0`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-16 px-4" id="benefits">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Key Benefits</h2>
        <p className="section-subheading text-center">
          A hybrid solution offering early feedback, real-world usage data, and access to verified customer profiles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <BenefitCard
            icon={<Users className="w-6 h-6 text-primary" />}
            title="Access to Beta Testers"
            description="Choose from packages with 30, 50, or 100 real product testers who provide actionable feedback."
            direction="left"
            delay={0}
          />
          <BenefitCard
            icon={<Mail className="w-6 h-6 text-primary" />}
            title="Real Customer Access"
            description="Connect with ready-to-convert customers through email or group-based interactions."
            direction="normal"
            delay={200}
          />
          <BenefitCard
            icon={<LineChart className="w-6 h-6 text-primary" />}
            title="Fast Product Validation"
            description="Validate your product quickly with real users and gain insights to refine your offering."
            direction="right"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
