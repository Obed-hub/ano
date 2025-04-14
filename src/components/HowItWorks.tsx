import React from "react";
import { ClipboardList, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, delay }) => {
  return (
    <div className={`flex items-start gap-4 reveal-animation opacity-0`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-muted/30" id="how-it-works">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">How It Works</h2>
        <p className="section-subheading text-center">
          Get started in three simple steps to connect with real testers and customers.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-center">
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
            
            <div className="mt-6 text-center lg:text-left">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="#waitlist">Join Waitlist Now</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <img 
                src="/images/pexels-divinetechygirl-1181346.jpg"
                alt="StartupWifi Planning Process" 
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">Our comprehensive planning approach to help startups succeed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
