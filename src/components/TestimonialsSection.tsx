import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Md Tofail Hossain",
      position: "Business Owner",
      rating: 5,
      text: "Law Valley provided outstanding legal support for my business. Their expertise in corporate law is unmatched. They are reliable & professional.",
      category: "Corporate Law"
    },
    {
      name: "Sharmeen Akter",
      position: "CEO",
      rating: 5,
      text: "Very strategic corporate advisory & litigation. Their ability to handle cases at the High Court Division helped us overcome critical legal hurdles.",
      category: "Litigation"
    },
    {
      name: "Rakibul Islam",
      position: "Individual Client",
      rating: 5,
      text: "Mr. Ahsanul Karim and his team at Law Valley helped me win a long-disputed land case. They guided me every step of the way. Highly recommended.",
      category: "Property Law"
    }
  ];

  const clients = [
    "Reckitt Benckiser",
    "Beximco",
    "United Group", 
    "Youngone",
    "Runner Automobiles"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-law-gold/10 text-law-gold-dark mb-4">Client Testimonials</Badge>
          <h2 className="section-heading text-primary">What Our Clients Say</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Our clients' success stories and testimonials reflect our commitment to delivering 
            exceptional legal services and building lasting relationships based on trust and results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant group hover:shadow-gold transition-all duration-300 relative animate-fade-in hover-scale">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 p-2 bg-law-gold/10 rounded-full">
                  <Quote className="h-4 w-4 text-law-gold" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-law-gold text-law-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.position}</p>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Clients Section */}
        <div id="clients" className="text-center mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-8">Our Clients</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-lg font-medium text-primary hover:opacity-100 transition-opacity duration-300">
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-law-cream rounded-2xl p-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Client Satisfaction Metrics</h3>
            <p className="text-muted-foreground">
              Our track record speaks for itself - we consistently deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Cases Won</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Client Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;