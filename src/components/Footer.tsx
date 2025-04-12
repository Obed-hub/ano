
import React from "react";
import { Mail } from "lucide-react";

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
              <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@startupwifi.com" className="hover:text-primary transition-colors">
                contact@startupwifi.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} StartupWifi. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
