import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";
import scienceFieldImage from "@/assets/9th.png";
import labImage from "@/assets/5th.png";
import shieldingImage from "@/assets/6th.png";

const sciencePillars = [
  {
    title: "Field Asymmetry Physics",
    description:
      "How controlled gradients in spacetime pressure generate directional forces without propellant mass.",
    image: scienceFieldImage,
    points: [
      "Uses asymmetric field geometry instead of reaction mass",
      "Couples to inertia and local curvature rather than exhaust",
      "Enables thrust, lift, and shielding from the same core effect"
    ]
  },
  {
    title: "Laboratory Validation",
    description:
      "Precision experiments that measure tiny force signatures and map the surrounding field topology.",
    image: labImage,
    points: [
      "Sub-millinewton thrust measurements in vacuum",
      "Interferometric mapping of field distortions",
      "Controlled on/off and direction reversal sequences"
    ]
  },
  {
    title: "Shielding & Energy Flow",
    description:
      "Using field envelopes to steer radiation, particles, and kinetic trajectories around protected zones.",
    image: shieldingImage,
    points: [
      "Field skins that redirect incoming momentum",
      "Multi-spectrum interaction from particles to EM waves",
      "Scalable from personal protection to orbital platforms"
    ]
  }
];

const experiments = [
  {
    name: "Vacuum Chamber Thrust Measurements",
    status: "completed",
    type: "lab",
    description: "High-precision force measurements in 10⁻⁶ torr environment demonstrating propellantless thrust"
  },
  {
    name: "Field Topology Mapping",
    status: "in_progress",
    type: "simulation",
    description: "3D visualization and characterization of asymmetric field geometry using interferometric sensors"
  },
  {
    name: "Shielding Efficacy Tests",
    status: "planned",
    type: "lab",
    description: "Radiation and particle deflection measurements across multiple energy spectra"
  },
  {
    name: "Scaled Vehicle Integration",
    status: "planned",
    type: "field",
    description: "Drone and small aircraft integration for real-world maneuvering demonstrations"
  }
];

const Science = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className=" bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Science & <span className="gradient-text">Research</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Rigorous experimental validation and theoretical foundations of Quantus technology
              </p>
            </div>
          </div>
        </section>

        {/* Science Explanation Cards */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-10">
              <div className="space-y-4 text-center">
                <h2 className="text-4xl font-bold">How the Science Works</h2>
                <p className="text-lg text-muted-foreground">
                  A high-level view of the physics, experiments, and shielding principles behind controlled field asymmetry.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {sciencePillars.map((pillar, index) => (
                  <Card
                    key={pillar.title}
                    className="glass-effect overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl mb-1">{pillar.title}</CardTitle>
                      <CardDescription>{pillar.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experiments Section */}
        <section className=" bg-card/20">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Experimental Program</h2>
                <p className="text-lg text-muted-foreground">
                  Progressive validation through simulation, laboratory testing, and field demonstrations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {experiments.map((exp, index) => (
                  <Card 
                    key={exp.name} 
                    className="glass-effect animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <CardTitle className="text-lg">{exp.name}</CardTitle>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          exp.status === "completed" 
                            ? "bg-primary/20 text-primary" 
                            : exp.status === "in_progress"
                            ? "bg-accent/20 text-accent"
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {exp.status === "completed" && <CheckCircle className="w-3 h-3" />}
                          {exp.status === "in_progress" && <Clock className="w-3 h-3 animate-spin" />}
                          <span className="capitalize">{exp.status.replace("_", " ")}</span>
                        </div>
                      </div>
                      <CardDescription>{exp.description}</CardDescription>
                      <div className="pt-3">
                        <Badge variant="outline" className="text-xs capitalize">
                          {exp.type}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRL Explanation */}
        <section className="mt-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Technology Readiness Levels (TRL)</CardTitle>
                  <CardDescription>
                    Standard NASA/DoD scale for tracking technology maturation from concept to deployment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { level: "TRL 1-2", desc: "Basic principles observed and concept formulated" },
                      { level: "TRL 3-4", desc: "Laboratory validation and component testing" },
                      { level: "TRL 5-6", desc: "System integration in relevant environment" },
                      { level: "TRL 7-8", desc: "System prototype demonstration in operational environment" },
                      { level: "TRL 9", desc: "Actual system proven in operational environment" }
                    ].map((item) => (
                      <div key={item.level} className="flex items-start gap-3 text-sm">
                        <Badge variant="secondary" className="mt-0.5">
                          {item.level}
                        </Badge>
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Science;
