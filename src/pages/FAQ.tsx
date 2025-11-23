import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    category: "Technology",
    questions: [
      {
        q: "Is Quantus 'reactionless' propulsion?",
        a: "Quantus propulsion operates without propellant ejection, but it's not 'reactionless' in the physics sense. The system interacts with the local spacetime field geometry, creating asymmetric pressure regions that generate thrust. This is fundamentally different from chemical, ionic, or nuclear propulsion."
      },
      {
        q: "How does it differ from EM drive, warp drive, or antigravity?",
        a: "Unlike speculative concepts, Quantus is based on controlled field asymmetry with measurable effects. We don't claim faster-than-light travel or gravity cancellation. Our technology manipulates field gradients to create directional forces - similar in principle to pressure differentials, but at the field level."
      }
    ]
  },
  {
    category: "Applications",
    questions: [
      {
        q: "Which applications will be demonstrated first?",
        a: "Our roadmap prioritizes propulsion and shielding demonstrations in controlled laboratory environments, followed by scaled vehicle integration. These foundational capabilities enable the broader application suite."
      },
      {
        q: "How does the same technology work for bullets, asteroids, waves, and wildfires?",
        a: "The underlying field-control mechanism is consistent across all applications. What changes is the scale, field geometry, and operating parameters. A bullet deflection system uses micro-scale, high-intensity fields, while tsunami mitigation employs macro-scale, distributed field arrays."
      }
    ]
  },
  {
    category: "Partnerships",
    questions: [
      {
        q: "What is the current readiness level?",
        a: "Our core technology is at TRL 3-4, with laboratory validation underway. Specific application verticals are at varying stages, with propulsion and shielding leading the development roadmap."
      },
      {
        q: "How can government agencies or labs engage?",
        a: "We offer multiple engagement levels from technical briefings to joint development programs. Submit a partner application through our Partners page, and our team will coordinate appropriate access based on organizational requirements."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <section className=" bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Common questions about Quantus technology, applications, and partnerships
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto space-y-12">
            {faqs.map((category) => (
              <div key={category.category} className="space-y-6">
                <h2 className="text-3xl font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.category}-${index}`} className="glass-effect rounded-lg px-6">
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
