
import React, { useEffect } from "react";
import { ClipboardList, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Step: React.FC<{
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ number, title, description, icon, delay }) => {
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
    <div className="glass-card p-6 flex items-start gap-4 reveal-animation opacity-0">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-muted/30" id="how-it-works">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">How It Works</h2>
        <p className="section-subheading text-center">
          Get started in three simple steps to connect with real testers and customers.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <Step
              number={1}
              title="Sign Up and Define Your Needs"
              description="Tell us about your product and select the tester/customer package that fits your needs."
              icon={<ClipboardList className="w-5 h-5 text-primary" />}
              delay={0}
            />
            <Step
              number={2}
              title="Get Matched with Testers/Customers"
              description="We match you with relevant testers and potential customers based on your product category."
              icon={<Users className="w-5 h-5 text-primary" />}
              delay={200}
            />
            <Step
              number={3}
              title="Collect Feedback and Grow"
              description="Receive valuable feedback, make improvements, and convert testers into paying customers."
              icon={<BadgeCheck className="w-5 h-5 text-primary" />}
              delay={400}
            />
            
            <div className="mt-8 text-center lg:text-left">
              <Button className="bg-primary hover:bg-primary/90">
                Join Waitlist Now
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-2 aspect-video reveal-animation-right opacity-0 order-1 lg:order-2">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="StartupWifi Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
