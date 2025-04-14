import React from "react";
import { 
  CheckCircle2, 
  Zap, 
  Rocket, 
  Crown, 
  Users, 
  BarChart, 
  MessageSquare, 
  Target, 
  Globe, 
  Mail, 
  Shield, 
  TrendingUp,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  return (
    <div className="glass-card p-6 reveal-animation opacity-0 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Goals: React.FC = () => {
  const features = [
    {
      title: "Customer Feedback Collection",
      description: "Gather real, actionable feedback from your target audience to validate and improve your product.",
      icon: <Users className="w-6 h-6 text-primary" />,
      delay: 0
    },
    {
      title: "Advanced Analytics",
      description: "Get deep insights into user behavior, preferences, and market trends with our comprehensive analytics suite.",
      icon: <BarChart className="w-6 h-6 text-primary" />,
      delay: 100
    },
    {
      title: "Target Audience Segmentation",
      description: "Get your first  1000 targeted user/customer.",
      icon: <Target className="w-6 h-6 text-primary" />,
      delay: 200
    },
    {
      title: "Multi-Platform Distribution",
      description: "Launch your product across multiple platforms and networks for maximum reach and impact.",
      icon: <Globe className="w-6 h-6 text-primary" />,
      delay: 300
    },
    {
      title: "Strategic Support",
      description: "Access expert guidance through strategy calls and priority support channels.",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      delay: 400
    },
    {
      title: "Viral Marketing Campaigns",
      description: "Create and execute viral campaigns and giveaways to drive rapid user acquisition.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      delay: 500
    },
    {
      title: "Newsletter Integration",
      description: "Leverage multiple newsletter launches to reach targeted audiences effectively.",
      icon: <Mail className="w-6 h-6 text-primary" />,
      delay: 600
    },
    {
      title: "Reputation Management",
      description: "Maintain and enhance your online presence with professional reputation management.",
      icon: <Shield className="w-6 h-6 text-primary" />,
      delay: 700
    },
    {
      title: "Growth Strategy",
      description: "Develop and implement custom user acquisition plans for sustainable growth.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      delay: 800
    },
    {
      title: "Influencer Network",
      description: "Access our network of influencers and organic marketing tools for amplified reach.",
      icon: <Star className="w-6 h-6 text-primary" />,
      delay: 900
    }
  ];

  return (
    <section className="py-12 px-4" id="goals">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">LaunchPad Pro</h2>
          <p className="section-subheading">
            Everything you need to launch and grow your startup
          </p>
          <div className="mt-6">
            <Button className="bg-primary hover:bg-primary/90">
              Start Your Journey
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Transform your startup vision into reality with our comprehensive launch platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Goals;
