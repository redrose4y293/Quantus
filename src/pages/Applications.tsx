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
  Car
} from "lucide-react";
import backgroundimage from '@/assets/8th.png';

const applications = [
  {
    title: "Non-Propellant Propulsion",
    slug: "propulsion",
    description: "Field-asymmetry propulsion with no exhaust, unlimited ΔV, and silent operation for orbital repositioning and deep-space missions",
    icon: Rocket,
    tags: ["Aerospace", "Deep Space", "Defense"]
  },
  {
    title: "Adaptive Shielding",
    slug: "shielding",
    description: "Multi-spectrum protection from radiation storms, kinetic debris, and EM pulses for spacecraft and critical infrastructure",
    icon: Shield,
    tags: ["Defense", "Aerospace", "Infrastructure"]
  },
  {
    title: "Bullet / Fragment Deflection",
    slug: "bullet-deflection",
    description: "Personal armor envelopes and vehicle field-skin technology for ballistic protection without physical mass",
    icon: Target,
    tags: ["Defense", "Security", "Military"]
  },
  {
    title: "Asteroid Steering & Harvesting",
    slug: "asteroid-steering",
    description: "Trajectory modification for planetary defense and resource harvesting corridor creation for mining operations",
    icon: Globe,
    tags: ["Planetary Defense", "Mining", "Space Commerce"]
  },
  {
    title: "Tidal Wave / Tsunami Mitigation",
    slug: "tidal-wave",
    description: "Offshore field deployment to disrupt wave formation and coastal field corridors to dissipate tsunami energy",
    icon: Waves,
    tags: ["Planetary Defense", "Infrastructure", "Emergency Response"]
  },
  {
    title: "Wildfire Protection",
    slug: "wildfire",
    description: "Field corridors to alter wind patterns, redirect ember trajectories, and create protection bubbles for critical infrastructure",
    icon: Flame,
    tags: ["Infrastructure", "Emergency Response", "Environmental"]
  },
  {
    title: "Black Hole / Extreme Gravity Exploration",
    slug: "black-hole",
    description: "Field-assisted gravity-gradient compensation and buffer-layer zones for exploration near extreme gravity wells",
    icon: Moon,
    tags: ["Deep Space", "Research", "Astrophysics"]
  },
  {
    title: "Vehicle Crash / Impact Envelope",
    slug: "vehicle-crash",
    description: "Local field bubbles for envelope shaping, deceleration path optimization, and occupant acceleration smoothing",
    icon: Car,
    tags: ["Automotive", "Safety", "Transportation"]
  }
];

const Applications = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute inset-0 opacity-30">
          <img src={backgroundimage} alt="Quantus Technology" className="w-full h-full object-cover" />
        </div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Application <span className="gradient-text">Stacks</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Quantus is a platform technology with multiple specialized application verticals spanning defense, aerospace, planetary protection, and critical infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {applications.map((app, index) => (
                <div
                  key={app.slug}
                  className="h-full animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ApplicationCard {...app} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Applications;
