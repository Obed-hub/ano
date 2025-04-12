
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-fade-in">
          <span className="text-primary">Real Testers.</span> 
          <span className="text-secondary"> Real Customers.</span> 
          <span className="text-primary"> Real Growth.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
          StartupWifi connects SaaS founders with {" "}
          <span className="font-semibold text-foreground">30/50/100 real product testers</span>
          {" "} AND {" "}
          <span className="font-semibold text-foreground">ready-to-convert customers</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full bg-primary hover:bg-primary/90" asChild>
            <a href="#waitlist">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-full" asChild>
            <a href="#how-it-works">Learn More</a>
          </Button>
        </div>
        
        <div className="mt-16 p-4 glass-card max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
          <p className="text-lg">
            <span className="highlight">Validate faster</span>, 
            <span className="highlight"> acquire early customers</span>, and 
            <span className="highlight"> hit product-market fit sooner</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
