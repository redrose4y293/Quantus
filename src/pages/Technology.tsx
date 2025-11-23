import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Cpu, Radio, Gauge, Beaker, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import techDiagram from "@/assets/10th.png";
import engineImage from "@/assets/11th.png";

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-4 pb-30">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
          <div className="absolute inset-0 opacity-10 ">
           <img src={techDiagram} alt="Quantus Technology" className="w-full h-full object-cover" />
           </div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Technology <span className="gradient-text">Overview</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Understanding the physics and engineering behind controlled field asymmetry
              </p>
            </div>
          </div>
        </section>

        {/* Field Asymmetry Engine */}
        <section className="mt-10">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <Atom className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">Field Asymmetry Engine</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  The core of Quantus technology lies in creating controlled asymmetric spacetime-pressure regions. Unlike chemical, ionic, or nuclear propulsion which relies on mass ejection, our system manipulates the local field geometry itself.
                </p>
                <p className="text-muted-foreground">
                  By generating directional field gradients, we create a pressure differential that enables thrust without propellant, shielding without physical barriers, and force projection at unprecedented scales.
                </p>
                <ul className="space-y-3">
                  {[
                    "Zero propellant mass requirements",
                    "No thermal signature from exhaust",
                    "Scalable from micro to planetary applications",
                    "Adaptive real-time field shaping"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-effect p-8 rounded-lg overflow-hidden">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={engineImage} 
                    alt="Field Asymmetry Engine"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Control Stack */}
        <section className="mt-10 bg-card/20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Control Stack</h2>
              <p className="text-lg text-muted-foreground">
                Precision field manipulation requires advanced sensing and control systems
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Radio,
                  title: "Field Generator",
                  description: "High-precision emitter arrays for creating controlled asymmetric field regions with microsecond response times"
                },
                {
                  icon: Gauge,
                  title: "Sensor Array",
                  description: "Gradiometers, interferometers, and EM monitors provide real-time field topology mapping at nanometer precision"
                },
                {
                  icon: Cpu,
                  title: "Control Algorithms",
                  description: "Closed-loop field-shaping AI that maintains optimal gradient profiles under dynamic conditions"
                }
              ].map((item, index) => (
                <Card key={item.title} className="glass-effect animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Modes */}
        <section className="mt-10">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Operating Modes</h2>
              <p className="text-lg text-muted-foreground">
                Quantus technology adapts to different applications through specialized field configurations
              </p>
            </div>

            <Tabs defaultValue="propulsion" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="propulsion">Propulsion</TabsTrigger>
                <TabsTrigger value="shielding">Shielding</TabsTrigger>
                <TabsTrigger value="impact">Impact Envelope</TabsTrigger>
                <TabsTrigger value="planetary">Planetary Scale</TabsTrigger>
              </TabsList>

              <TabsContent value="propulsion" className="mt-8">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Propulsion Mode</CardTitle>
                    <CardDescription>
                      Directional asymmetry creates net thrust vector without mass ejection
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      In propulsion mode, the field generator creates a pressure gradient with higher field intensity on one side of the vehicle. This asymmetry produces a net force in the direction of lower field intensity, enabling acceleration without propellant.
                    </p>
                    <ul className="space-y-2">
                      {["Unlimited ΔV capability", "Silent operation", "Instant vector control", "Scalable thrust levels"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shielding" className="mt-8">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Shielding Mode</CardTitle>
                    <CardDescription>
                      Uniform field envelope deflects incoming particles and radiation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Shielding mode generates a spherical or conformal field envelope that creates a potential barrier. Incoming radiation, particles, and even kinetic projectiles encounter field gradients that deflect or dissipate their energy before reaching the protected volume.
                    </p>
                    <ul className="space-y-2">
                      {["Radiation protection", "Kinetic impact mitigation", "EM pulse shielding", "Adaptive response to threats"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="impact" className="mt-8">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Impact Envelope Mode</CardTitle>
                    <CardDescription>
                      Shaped field geometry modifies collision dynamics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      For vehicle safety and ballistic protection, impact envelope mode creates a shaped field region that gradually decelerates incoming objects or projectiles, spreading the force over time and space to reduce peak acceleration.
                    </p>
                    <ul className="space-y-2">
                      {["Reduced peak forces", "Extended deceleration zones", "Occupant protection", "Bullet and fragment deflection"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="planetary" className="mt-8">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle>Planetary-Envelope Mode</CardTitle>
                    <CardDescription>
                      Large-scale field projection for hazard mitigation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      At the largest scales, multiple coordinated field generators create extended pressure zones capable of deflecting asteroids, disrupting tidal wave formation, or creating protective corridors against wildfires.
                    </p>
                    <ul className="space-y-2">
                      {["Asteroid trajectory modification", "Tsunami wave disruption", "Wildfire wind redirection", "Coordinated multi-emitter systems"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Scalability */}
        <section className="mt-10 bg-card/20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold">Scalability</h2>
                <p className="text-lg text-muted-foreground">
                  Quantus technology scales across nine orders of magnitude
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { scale: "Micro", size: "1cm - 10m", examples: ["Personal armor", "Drones", "Small vehicles"] },
                  { scale: "Meso", size: "10m - 1km", examples: ["Ships", "Aircraft", "Urban protection"] },
                  { scale: "Macro", size: "1km - 1000km", examples: ["Coastlines", "Asteroid fields", "Orbital defense"] }
                ].map((item, index) => (
                  <Card key={item.scale} className="glass-effect animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle>{item.scale} Scale</CardTitle>
                      <CardDescription className="text-lg font-mono text-primary">{item.size}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.examples.map((example) => (
                          <li key={example} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{example}</span>
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

        {/* Experimental Roadmap */}
        <section className="mt-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Beaker className="w-8 h-8 text-primary" />
                  <h2 className="text-4xl font-bold">Experimental Roadmap</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Rigorous validation through progressive testing phases
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1: Vacuum Chamber Tests",
                    description: "High-vacuum (10⁻⁶ torr) force measurements to validate propellantless thrust generation",
                    status: "In Progress"
                  },
                  {
                    phase: "Phase 2: Lab-Scale Demonstrations",
                    description: "Controlled field-shaping experiments with precision metrology and field topology mapping",
                    status: "Planned Q2 2025"
                  },
                  {
                    phase: "Phase 3: Field Trials",
                    description: "Scaled prototypes in operational environments including aerial and orbital platforms",
                    status: "Planned 2026"
                  }
                ].map((phase, index) => (
                  <Card key={phase.phase} className="glass-effect animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <CardTitle>{phase.phase}</CardTitle>
                          <CardDescription>{phase.description}</CardDescription>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === "In Progress" 
                            ? "bg-primary/20 text-primary" 
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {phase.status}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">Explore the Applications</h2>
              <p className="text-lg text-muted-foreground">
                See how Quantus technology enables breakthrough capabilities across multiple domains
              </p>
              <Button size="lg" asChild>
                <Link to="/applications">View All Applications</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Technology;
