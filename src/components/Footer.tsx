import { Link } from "react-router-dom";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card/40 backdrop-blur-md">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">Quantus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Controlled Field Asymmetry for Propulsion, Shielding, and Planetary Defense
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-muted-foreground hover:text-primary transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-muted-foreground hover:text-primary transition-colors">
                  Science & Papers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-muted-foreground hover:text-primary transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
                            <li className="flex items-start gap-2">
                <a href="./GB.docx" target="_blank">Global Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>info@quantus.tech</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Advanced Research Facility<br />Silicon Valley, CA</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Quantus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
