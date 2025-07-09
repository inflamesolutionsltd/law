import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Users } from "lucide-react";
import leadLawyerImage from "@/assets/lead-lawyer.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 law-gradient-bg"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white ">
            <div className=" pt-10">
               <Badge className=" bg-law-gold text-primary mb-6  text-sm font-medium px-4 py-2 animate-fade-in transition duration-300 hover:bg-white hover:scale-105 hover:border hover:border-law-gold">
              Renowned Law Firm in Bangladesh
            </Badge>
            </div>
           


            
            <h1 className="hero-text text-white mb-6 animate-fade-in">
              Trusted Legal Partner for Over 30 Years
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
              Comprehensive Legal Expertise, Nationwide Reach. With expertise in the Supreme Court, 
              District Courts, and Tribunals, both in Dhaka and beyond, Law Valley provides effective 
              legal solutions tailored to support your business growth and stability.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Award className="h-6 w-6 text-law-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Users className="h-6 w-6 text-law-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-white/80">Cases Won</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-law-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-white/80">Client Trust</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hover-scale bg-law-gold hover:bg-law-gold-dark text-primary font-semibold px-8 py-4">
                Book Consultation
              </Button>
              <Button size="lg" className="hover-scale bg-white hover:bg-law-gold-dark text-primary font-semibold px-8 py-4">
                Meet Our Lawyers
              </Button>
            </div>
          </div>

          {/* Lead Lawyer Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={leadLawyerImage}
                alt="Lead Advocate - Law Valley"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
        {/* Lawyer Info Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md rounded-xl p-6 animate-scale-in shadow-lg">
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">Mr. Ahsanul Karim</h3>
          <p className="text-white mb-3 drop-shadow-sm">Barrister-at-Law, Head of Chamber</p>
          <div className="flex items-center space-x-4 text-sm text-white drop-shadow-sm">
            <span className="flex items-center space-x-1">
              <Award className="h-4 w-4 text-law-gold drop-shadow" />
              <span>Supreme Court Advocate</span>
            </span>
            <span className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-law-gold drop-shadow" />
              <span>30+ Years Experience</span>
            </span>
          </div>
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;