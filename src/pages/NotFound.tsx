
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted/10">
      <div className="glass-card p-8 max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-primary hover:bg-primary/90"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
