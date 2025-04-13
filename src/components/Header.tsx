import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(path.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
            <span className="text-primary">Startup</span>Wifi
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => handleNavigation('#how-it-works')}>
            How It Works
          </Button>
          <Button variant="ghost" size="sm" onClick={() => handleNavigation('#pricing')}>
            Pricing
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/faq" onClick={closeMenu}>FAQ</Link>
          </Button>
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary/90" size="sm" onClick={() => handleNavigation('#waitlist')}>
            Join Waitlist
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 border-t bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start" onClick={() => handleNavigation('#how-it-works')}>
              How It Works
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => handleNavigation('#pricing')}>
              Pricing
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link to="/faq" onClick={closeMenu}>FAQ</Link>
            </Button>
            <Button className="justify-start mt-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigation('#waitlist')}>
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
