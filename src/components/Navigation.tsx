import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Technology", path: "/technology" },
  { name: "Applications", path: "/applications" },
  { name: "Science", path: "/science" },
  { name: "Partners", path: "/partners" },
  { name: "Media", path: "/media" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Rocket className="w-8 h-8 text-primary group-hover:animate-float" />
            <span className="text-2xl font-bold gradient-text">Quantus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
             <Link to="/partners" onClick={() => setIsOpen(false)}>
            <Button size="sm" className="ml-4" >
              Partner Access
            </Button>
           </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/partners" onClick={() => setIsOpen(false)}>
            <Button className="w-full mt-4" >Partner Access</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
