import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award } from "lucide-react";
import leadLawyerImage from "@/assets/lead-lawyer.jpg";
import lawyer2Image from "@/assets/lawyer-2.jpg";
import lawyer3Image from "@/assets/lawyer-3.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Barrister Rahman Ahmed",
      position: "Senior Partner & Lead Advocate",
      image: leadLawyerImage,
      experience: "30+ Years",
      specialization: ["Corporate Law", "Supreme Court", "International Law"],
      email: "rahman@lawvalley.com",
      phone: "+880 123 456-7890",
      description: "Leading legal expert with extensive experience in corporate law and Supreme Court advocacy."
    },
    {
      name: "Advocate Fatima Khatun",
      position: "Partner - Criminal & Family Law",
      image: lawyer2Image,
      experience: "15+ Years",
      specialization: ["Criminal Defense", "Family Law", "Women's Rights"],
      email: "fatima@lawvalley.com",
      phone: "+880 123 456-7891",
      description: "Dedicated advocate specializing in criminal defense and family law matters."
    },
    {
      name: "Advocate Mahbub Hassan",
      position: "Senior Associate - Tax & Corporate",
      image: lawyer3Image,
      experience: "12+ Years",
      specialization: ["Tax Law", "Corporate Advisory", "Arbitration"],
      email: "mahbub@lawvalley.com",
      phone: "+880 123 456-7892",
      description: "Expert in tax law and corporate advisory with a track record of successful arbitrations."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-primary">Meet Our Legal Team</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Our distinguished team of legal professionals brings decades of combined experience 
            and expertise to serve your legal needs with excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="card-elegant group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Contact Info */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-2">
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-law-gold transition-colors"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                      </a>
                      <a 
                        href={`tel:${member.phone}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-law-gold transition-colors"
                      >
                        <Phone className="h-4 w-4 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <Badge className="bg-law-gold/10 text-law-gold-dark hover:bg-law-gold/20 flex items-center space-x-1">
                      <Award className="h-3 w-3" />
                      <span>{member.experience}</span>
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  
                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialization.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-law-gold" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-law-gold" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-law-cream rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Legal Experts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Cases Handled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;