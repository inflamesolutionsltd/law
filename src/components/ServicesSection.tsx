import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, FileText, Gavel, Scale, Home, Briefcase, Shield, Landmark } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Business and Corporate Law",
      description: "We offer sound legal solutions to start, structure, and expand your business. We protect your interests while promoting growth.",
      features: ["Company Formation", "Contract Drafting", "M&A Advisory", "Compliance Management"]
    },
    {
      icon: Landmark,
      title: "Constitutional Law and Writs",
      description: "We handle writ petitions and constitutional challenges in various courts, ensuring your rights and freedoms are effectively defended.",
      features: ["Writ Petitions", "Constitutional Challenges", "Rights Protection", "Court Representation"]
    },
    {
      icon: FileText,
      title: "Capital Markets",
      description: "We offer expert legal services in IPOs, securities, and compliance. We help clients navigate regulatory and financial obligations with success.",
      features: ["IPO Services", "Securities Law", "Regulatory Compliance", "Financial Advisory"]
    },
    {
      icon: Shield,
      title: "Banking and Insurance",
      description: "We represent clients in loan disputes, banking fraud, recovery proceedings, and insurance claim settlements.",
      features: ["Loan Disputes", "Banking Fraud", "Recovery Proceedings", "Insurance Claims"]
    },
    {
      icon: Scale,
      title: "Customs, VAT and Income Tax Law",
      description: "We offer strategic guidance for regulatory compliance and tax dispute resolution.",
      features: ["Tax Planning", "VAT Advisory", "Customs Law", "Dispute Resolution"]
    },
    {
      icon: Home,
      title: "Laws relating to Land, Inheritance and Property",
      description: "We provide expert legal support in land documentation, inheritance disputes, and property transactions.",
      features: ["Land Documentation", "Inheritance Law", "Property Transactions", "Title Verification"]
    },
    {
      icon: Gavel,
      title: "Arbitration",
      description: "We offer expert representation in commercial and cross-border arbitration with high efficiency.",
      features: ["Commercial Arbitration", "Cross-border Disputes", "Mediation", "Alternative Dispute Resolution"]
    },
    {
      icon: Briefcase,
      title: "Litigation",
      description: "We handle civil and criminal litigation, including high-stake and sensitive disputes.",
      features: ["Civil Litigation", "Criminal Defense", "Appeals", "Court Representation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading text-primary">Our Services</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Comprehensive Legal Expertise, Nationwide Reach. We provide effective legal solutions 
            tailored to support your business growth and stability across all major practice areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-elegant group hover:shadow-gold transition-all duration-300 animate-fade-in hover-scale">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary rounded-lg group-hover:bg-law-gold transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-law-gold rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-12 text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Expert Legal Solutions – Contact Us Today!</h3>
          <p className="text-xl mb-8 text-white/90">
            With decades of experience, we offer the expertise and commitment needed for your legal success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-law-gold hover:bg-law-gold-dark text-primary font-semibold px-8 hover-scale">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 hover-scale">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;