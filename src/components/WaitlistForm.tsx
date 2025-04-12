
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [startupName, setStartupName] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This is for Netlify forms
      const formData = new FormData();
      formData.append("form-name", "waitlist");
      formData.append("email", email);
      formData.append("startupName", startupName);
      formData.append("role", role);
      
      await fetch("/", {
        method: "POST",
        body: formData,
      });
      
      setFormSubmitted(true);
      toast.success("Thanks for joining our waitlist! We'll be in touch soon.");
    } catch (error) {
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="glass-card p-8 max-w-md mx-auto text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="mb-6">
          You've successfully joined the StartupWifi waitlist. We'll keep you updated on our launch and any early access opportunities.
        </p>
        <Button onClick={() => setFormSubmitted(false)} variant="outline">
          Back to Form
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">Join the Waitlist</h3>
      <p className="text-muted-foreground mb-6 text-center">
        Be the first to know when we launch and get early access.
      </p>
      
      <form 
        onSubmit={handleSubmit} 
        data-netlify="true" 
        name="waitlist" 
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="waitlist" />
        
        <div>
          <Label htmlFor="email">Email (Gmail) *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="startupName">Startup Name (Optional)</Label>
          <Input
            id="startupName"
            name="startupName"
            type="text"
            placeholder="Your Startup"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="role">Your Role (Optional)</Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger id="role" name="role">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="founder">Founder</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="product-lead">Product Lead</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
