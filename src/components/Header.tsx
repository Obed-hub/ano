
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">
            <span className="text-primary">Startup</span>Wifi
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="#how-it-works">How It Works</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#pricing">Pricing</a>
          </Button>
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary/90" size="sm" asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 border-t bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start" onClick={closeMenu} asChild>
              <a href="#how-it-works">How It Works</a>
            </Button>
            <Button variant="ghost" className="justify-start" onClick={closeMenu} asChild>
              <a href="#pricing">Pricing</a>
            </Button>
            <Button className="justify-start mt-2 bg-primary hover:bg-primary/90" onClick={closeMenu} asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
