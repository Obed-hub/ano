
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">
            <span className="text-primary">Startup</span>Wifi
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            How It Works
          </Button>
          <Button variant="ghost" size="sm">
            Pricing
          </Button>
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary/90" size="sm">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
