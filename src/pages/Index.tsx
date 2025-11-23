import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ApplicationCard } from "@/components/ApplicationCard";
import { 
  Rocket, 
  Shield, 
  Target, 
  Globe, 
  Waves, 
  Flame, 
  Moon, 
  Car,
  ArrowRight,
  Zap,
  Lock,
  Orbit
} from "lucide-react";
import heroImage from "@/assets/12th.png";
import techImage from "@/assets/2nd.png";

const applications = [
  {
    title: "Non-Propellant Propulsion",
    slug: "propulsion",
    description: "Field-asymmetry propulsion with no exhaust, unlimited ΔV",
    icon: Rocket,
    tags: ["Aerospace", "Deep Space"]
  },
  {
    title: "Adaptive Shielding",
    slug: "shielding",
    description: "Protection from radiation, kinetic impacts, and EM threats",
    icon: Shield,
    tags: ["Defense", "Aerospace"]
  },
  {
    title: "Bullet Deflection",
    slug: "bullet-deflection",
    description: "Personal and vehicle armor with field-skin technology",
    icon: Target,
    tags: ["Defense", "Security"]
  },
  {
    title: "Asteroid Control",
    slug: "asteroid-steering",
    description: "Trajectory modification and resource harvesting corridors",
    icon: Globe,
    tags: ["Planetary Defense", "Mining"]
  },
  {
    title: "Tidal Wave Mitigation",
    slug: "tidal-wave",
    description: "Offshore field deployment to disrupt tsunami formation",
    icon: Waves,
    tags: ["Planetary Defense", "Infrastructure"]
  },
  {
    title: "Wildfire Protection",
    slug: "wildfire",
    description: "Field corridors to redirect ember trajectories and wind",
    icon: Flame,
    tags: ["Infrastructure", "Emergency"]
  },
  {
    title: "Extreme Gravity Support",
    slug: "black-hole",
    description: "Field-assisted exploration near black holes and neutron stars",
    icon: Moon,
    tags: ["Deep Space", "Research"]
  },
  {
    title: "Vehicle Crash Protection",
    slug: "vehicle-crash",
    description: "Impact envelope shaping for occupant safety",
    icon: Car,
    tags: ["Automotive", "Safety"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <img src={heroImage} alt="Quantus Technology" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-9 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              Quantus: Controlled{" "}
              <span className="gradient-text glow-effect">Field Asymmetry</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Revolutionary propulsion, shielding, and planetary defense through spacetime-pressure manipulation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/technology">
                  Explore Technology
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/applications">View Applications</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/partners">Partner Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Quantus */}
      <section className="section-padding bg-card/20 relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What is Quantus?</h2>
            <p className="text-lg text-muted-foreground">
              A unified field-control platform enabling breakthrough capabilities across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Field-Curvature Engine",
                description: "Asymmetric spacetime-pressure regions for propellantless propulsion"
              },
              {
                icon: Lock,
                title: "Adaptive Shielding",
                description: "Multi-spectrum protection from radiation, kinetic, and EM threats"
              },
              {
                icon: Orbit,
                title: "Planetary Defense",
                description: "Large-scale hazard control for asteroids, tsunamis, and wildfires"
              }
            ].map((pillar, index) => (
              <div
                key={pillar.title}
                className="glass-effect p-8 rounded-lg text-center space-y-4 animate-fade-in-up card-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Application <span className="gradient-text">Domains</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From deep space to planetary protection, Quantus technology enables breakthrough solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={app.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ApplicationCard {...app} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/applications">
                Explore All Applications
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Partner with Quantus?</h2>
            <p className="text-lg text-muted-foreground">
              Join leading defense, aerospace, and research organizations in exploring the future of field control technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/partners">Become a Partner</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
