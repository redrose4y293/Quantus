import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvnzqdp";
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    interest: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.organization,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          _subject: "Quantus Contact Form",
        }),
      });
      if (res.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll respond within 24-48 hours.",
        });
        setFormData({ name: "", organization: "", email: "", interest: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later or email us directly at info@quantus.tech.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <section className=" bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team to learn more about Quantus technology
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Reach out for inquiries about technology partnerships, research collaboration, or general information.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@quantus.tech</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Advanced Research Facility<br />Silicon Valley, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card className="glass-effect">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interest">Interest *</Label>
                          <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })} required>
                            <SelectTrigger id="interest">
                              <SelectValue placeholder="Select interest" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="propulsion">Propulsion</SelectItem>
                              <SelectItem value="shielding">Shielding</SelectItem>
                              <SelectItem value="planetary-defense">Planetary Defense</SelectItem>
                              <SelectItem value="vehicle-safety">Vehicle Safety</SelectItem>
                              <SelectItem value="research">Research</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
