import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Share2, Twitter, Linkedin, Facebook, Users, Upload } from "lucide-react";

const WaitlistForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [startupName, setStartupName] = useState("");
  const [role, setRole] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [position, setPosition] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Please enter your name and email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("startup_name", startupName);
      formData.append("role", role);
      formData.append("enquiry", enquiry);
      if (file) {
        formData.append("file", file);
      }
      
      const response = await fetch("https://usebasin.com/f/f3362985e01e", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Generate a random position between 1 and 1000
      const randomPosition = Math.floor(Math.random() * 1000) + 1;
      setPosition(randomPosition);
      setFormSubmitted(true);
      toast.success("Thanks for joining our waitlist! We'll be in touch soon.");
    } catch (error) {
      toast.error("There was an error submitting the form. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "I just joined the StartupWifi waitlist! Join me in revolutionizing startup connectivity. #StartupWifi";
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  const renderPositionVisual = () => {
    const totalAvatars = 10;
    const userPosition = Math.min(Math.ceil((position / 1000) * totalAvatars), totalAvatars);
    
    return (
      <div className="relative w-full h-24 mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalAvatars }).map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  index < userPosition
                    ? 'bg-primary/20 border-2 border-primary'
                    : 'bg-muted border-2 border-muted-foreground/20'
                }`}
              >
                <Users className={`w-4 h-4 ${
                  index < userPosition ? 'text-primary' : 'text-muted-foreground/20'
                }`} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Position #{position}
          </div>
        </div>
      </div>
    );
  };

  if (formSubmitted) {
    return (
      <div className="glass-card p-8 max-w-md mx-auto text-center animate-fade-in">
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="mb-6">
          You've successfully joined the StartupWifi waitlist. We'll keep you updated on our launch and any early access opportunities.
        </p>
        
        <div className="mb-8">
          {renderPositionVisual()}
          <p className="text-sm text-muted-foreground mt-8">
            {position} people ahead of you in line
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Share with your network and move up in line!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare('twitter')}
              className="hover:bg-blue-50 hover:text-blue-500"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare('linkedin')}
              className="hover:bg-blue-50 hover:text-blue-500"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleShare('facebook')}
              className="hover:bg-blue-50 hover:text-blue-500"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied to clipboard!");
              }}
              className="hover:bg-gray-50"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
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
        className="space-y-4"
      >
        <div className="formbold-input-group">
          <Label htmlFor="name" className="formbold-form-label">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="formbold-form-input"
          />
        </div>

        <div className="formbold-input-group">
          <Label htmlFor="email" className="formbold-form-label">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="formbold-form-input"
          />
        </div>
        
        <div className="formbold-input-group">
          <Label htmlFor="startupName" className="formbold-form-label">Startup Name (Optional)</Label>
          <Input
            id="startupName"
            name="startup_name"
            type="text"
            placeholder="Your Startup"
            value={startupName}
            onChange={(e) => setStartupName(e.target.value)}
            className="formbold-form-input"
          />
        </div>
        
        <div className="formbold-input-group">
          <Label htmlFor="role" className="formbold-form-label">Your Role (Optional)</Label>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger id="role" name="role" className="formbold-form-select">
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

        <div className="formbold-input-group">
          <Label htmlFor="enquiry" className="formbold-form-label">Your Question or Enquiry (Optional)</Label>
          <Textarea
            id="enquiry"
            name="enquiry"
            placeholder="Ask us anything about StartupWifi..."
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
            className="formbold-form-input min-h-[100px]"
          />
        </div>
        
        <Button 
          type="submit" 
          className="formbold-btn w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
