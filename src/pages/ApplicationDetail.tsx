import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";

const titleMap: Record<string, string> = {
  propulsion: "Non-Propellant Propulsion",
  shielding: "Adaptive Shielding",
  "bullet-deflection": "Bullet / Fragment Deflection",
  "asteroid-steering": "Asteroid Steering & Harvesting",
  "tidal-wave": "Tidal Wave / Tsunami Mitigation",
  wildfire: "Wildfire Protection",
  "black-hole": "Black Hole / Extreme Gravity Exploration",
  "vehicle-crash": "Vehicle Crash / Impact Envelope",
};

const ApplicationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = (slug && titleMap[slug]) || "Application Details";

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-3xl">{title}</CardTitle>
                  <CardDescription>
                    High-level overview and details for this application area. More content coming soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    We are preparing in-depth documentation, diagrams, and demonstrations for each application.
                    If you have a specific use case, reach out via the Contact page.
                  </p>
                  <div className="flex gap-3">
                    <Link to="/applications">
                      <Button variant="secondary">Back to Applications</Button>
                    </Link>
                    <Link to="/contact">
                      <Button>Contact Us</Button>
                    </Link>
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

export default ApplicationDetail;
