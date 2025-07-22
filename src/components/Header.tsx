
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-olive bg-clip-text text-transparent">
          Olive
        </div>
        
        <nav className="flex gap-6">
          <Button variant="ghost" className="text-white hover:text-primary">
            About Us
          </Button>
          <Button variant="ghost" className="text-white hover:text-primary">
            Pricing
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
