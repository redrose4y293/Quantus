import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, Video } from "lucide-react";
import media1 from "@/assets/2nd.png";
import media2 from "@/assets/5th.png";
import media3 from "@/assets/6th.png";
import media4 from "@/assets/7th.png";
import media5 from "@/assets/8th.png";
import media6 from "@/assets/9th.png";
import backgroundimage from '@/assets/10th.png';
const Media = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute inset-0 opacity-30">
          <img src={backgroundimage} alt="Quantus Technology" className="w-full h-full object-cover" />
        </div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Media & <span className="gradient-text">Simulations</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Visual demonstrations and simulations of Quantus technology across multiple application domains
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Propulsion Field Visualization", type: "simulation", tags: ["Propulsion", "3D"], image: media1 },
                { title: "Asteroid Deflection Trajectory", type: "simulation", tags: ["Planetary Defense"], image: media2 },
                { title: "Shielding Envelope Demo", type: "concept", tags: ["Shielding"], image: media3 },
                { title: "Field Topology Mapping", type: "simulation", tags: ["Research", "Technical"], image: media4 },
                { title: "Vehicle Integration Concept", type: "concept", tags: ["Automotive"], image: media5 },
                { title: "Tsunami Wave Disruption", type: "simulation", tags: ["Planetary Defense"], image: media6 }
              ].map((item, index) => (
                <Card key={item.title} className="glass-effect card-hover animate-fade-in-up overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Media;
