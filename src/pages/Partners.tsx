import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Shield, Handshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import backgroundimage from '@/assets/11th.png'

const partnerTypes = [
  {
    icon: Shield,
    title: "Government & Defense",
    description: "DoD, AFRL, NASA, and allied defense organizations",
    benefits: ["Priority access to classified briefings", "Joint test facility access", "Co-development opportunities"]
  },
  {
    icon: Building2,
    title: "Industry & OEMs",
    description: "Aerospace, automotive, and technology manufacturers",
    benefits: ["Technology licensing", "Integration support", "Early prototype access"]
  },
  {
    icon: GraduationCap,
    title: "Academia",
    description: "Research universities and national laboratories",
    benefits: ["Research collaboration", "Data sharing", "Joint publications"]
  }
];

const Partners = () => {
  const { toast } = useToast();
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvnzqdp";
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    partnerType: "",
    applicationDomain: "",
    accessLevel: "",
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
          partnerType: formData.partnerType,
          applicationDomain: formData.applicationDomain,
          accessLevel: formData.accessLevel,
          message: formData.message,
          _subject: "Quantus Partner Application",
        }),
      });
      if (res.ok) {
        toast({
          title: "Application Submitted",
          description: "Our partnerships team will review your request and be in touch within 2-3 business days.",
        });
        setFormData({
          name: "",
          organization: "",
          email: "",
          partnerType: "",
          applicationDomain: "",
          accessLevel: "",
          message: ""
        });
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

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute inset-0 opacity-20">
                  <img src={backgroundimage} alt="Quantus Technology" className="w-full h-full object-cover" />
         </div>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Partner <span className="gradient-text">Ecosystem</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join leading defense, aerospace, and research organizations advancing field control technology
              </p>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section>
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <Card 
                  key={type.title} 
                  className="glass-effect card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <type.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <Handshake className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Application Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold">Partner Application</h2>
                <p className="text-lg text-muted-foreground">
                  Submit your interest and our partnerships team will be in touch
                </p>
              </div>

              <Card className="glass-effect">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@organization.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        placeholder="Organization Name"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="partnerType">Partner Type *</Label>
                        <Select value={formData.partnerType} onValueChange={(value) => handleChange("partnerType", value)} required>
                          <SelectTrigger id="partnerType">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="government">Government & Defense</SelectItem>
                            <SelectItem value="industry">Industry & OEM</SelectItem>
                            <SelectItem value="academia">Academia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="applicationDomain">Application Domain *</Label>
                        <Select value={formData.applicationDomain} onValueChange={(value) => handleChange("applicationDomain", value)} required>
                          <SelectTrigger id="applicationDomain">
                            <SelectValue placeholder="Select domain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="propulsion">Propulsion</SelectItem>
                            <SelectItem value="shielding">Shielding</SelectItem>
                            <SelectItem value="planetary-defense">Planetary Defense</SelectItem>
                            <SelectItem value="vehicle-safety">Vehicle Safety</SelectItem>
                            <SelectItem value="research">Research</SelectItem>
                            <SelectItem value="multiple">Multiple Domains</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accessLevel">Required Access Level *</Label>
                      <Select value={formData.accessLevel} onValueChange={(value) => handleChange("accessLevel", value)} required>
                        <SelectTrigger id="accessLevel">
                          <SelectValue placeholder="Select access level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="briefing">Technical Briefing</SelectItem>
                          <SelectItem value="technical-deck">Technical Documentation</SelectItem>
                          <SelectItem value="lab-test">Lab Test Access</SelectItem>
                          <SelectItem value="joint-development">Joint Development</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your interest in Quantus technology and how you envision a partnership..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
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

export default Partners;
