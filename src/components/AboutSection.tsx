import { Button } from "@/components/ui/button";
import courthouseImage from "@/assets/courthouse.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 animate-fade-in">
              <h2 className="section-heading text-primary">
                Meet Our Head of Chamber, Mr. Ahsanul Karim
              </h2>
              
              <p className="text-elegant">
                Mr. Ahsanul Karim, Barrister-at-Law, Advocate at the Supreme Court of Bangladesh, 
                is a seasoned legal expert with more than 30 years of successful experience 
                in practice before the Supreme Court. His high-profile cases across multiple 
                industries demonstrate his chamber's outstanding results in complex legal disputes.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-4">Why Law Valley Stands Out</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                    <div className="flex-shrink-0 w-3 h-3 bg-law-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">30+ Years of Experience</h4>
                      <p className="text-muted-foreground">Led by Mr. Ahsanul Karim, a Senior Advocate, with deep legal insight.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                    <div className="flex-shrink-0 w-3 h-3 bg-law-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Proven Results</h4>
                      <p className="text-muted-foreground">Successful outcomes in complex law, litigation, arbitration & more.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                    <div className="flex-shrink-0 w-3 h-3 bg-law-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Client-Focused</h4>
                      <p className="text-muted-foreground">Personalized legal solutions tailored to your needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                    <div className="flex-shrink-0 w-3 h-3 bg-law-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Comprehensive Services</h4>
                      <p className="text-muted-foreground">From business law to dispute resolution, we cover it all.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
                    <div className="flex-shrink-0 w-3 h-3 bg-law-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Integrity & Ethics</h4>
                      <p className="text-muted-foreground">Transparent, honest advice you can trust.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="btn-primary hover-scale">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative animate-scale-in">
              <img
                src={courthouseImage}
                alt="Law Valley Courthouse"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;