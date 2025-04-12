
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Startup</span>Wifi
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting SaaS founders with real product testers and ready-to-convert customers.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary" asChild>
                  <a href="#benefits">Benefits</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary" asChild>
                  <a href="#how-it-works">How It Works</a>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary" asChild>
                  <a href="#pricing">Pricing</a>
                </Button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary" asChild>
                <a href="mailto:contact@startupwifi.com">
                  contact@startupwifi.com
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} StartupWifi. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm" asChild>
              <a href="#">Privacy Policy</a>
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary text-sm" asChild>
              <a href="#">Terms of Service</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
