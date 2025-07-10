import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Corporate Law",
    "Criminal Law", 
    "Tax Law",
    "Arbitration",
    "Family Law",
    "Employment Law"
  ];

  const legalInfo = [
    "Privacy Policy",
    "Terms of Service",
    "Legal Disclaimer",
    "Bar Council Registration",
    "Professional Ethics",
    "Client Rights"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <img
                  src="/law_img/.png"
                  alt="Law Valley Logo"
                  className="h-16 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-white/80 leading-relaxed">
                  Bangladesh's premier multidisciplinary law firm with over 30 years of legal excellence. 
                  Trusted by individuals and corporations nationwide for comprehensive legal solutions.
                </p>
              </div>
              
              {/* Certifications */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-law-gold">
                  <div className="w-2 h-2 bg-law-gold rounded-full"></div>
                  <span className="text-sm">Supreme Court Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-law-gold">
                  <div className="w-2 h-2 bg-law-gold rounded-full"></div>
                  <span className="text-sm">Bar Council Registered</span>
                </div>
                <div className="flex items-center space-x-2 text-law-gold">
                  <div className="w-2 h-2 bg-law-gold rounded-full"></div>
                  <span className="text-sm">Top 10 Law Firm - Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-law-gold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-law-gold transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>→</span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-law-gold">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 flex items-center space-x-2">
                      <span>→</span>
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
                {/* Contact Info */}
<div>
  <h3 className="text-xl font-bold mb-6 text-law-gold">Contact Information</h3>
  <div className="space-y-4">
    <div className="flex items-start space-x-3">
      <MapPin className="h-5 w-5 text-law-gold mt-1 flex-shrink-0" />
      <div className="text-white/80">
        <p>Saiham Sky View Tower 195,</p>
        <p>Shahid Syed Nazrul Islam Sarani</p>
        <p>Suite No. 11A (11th Floor)</p>
        <p>45 Bijoy Nagor</p>
        <p>Dhaka – 1000, Bangladesh</p>
      </div>
    </div>

    <div className="flex items-center space-x-3">
      <Phone className="h-5 w-5 text-law-gold" />
      <div className="text-white/80">
        <p>+880-2222-26013</p>
        <p>+880-1915-964722</p>
      </div>
    </div>

    <div className="flex items-center space-x-3">
      <Mail className="h-5 w-5 text-law-gold" />
      <div className="text-white/80">
        <p>lawvalley@gmail.com</p>
        <p>info@lawvalley.com.bd</p>
      </div>
    </div>

    <div className="flex items-start space-x-3">
      <Clock className="h-5 w-5 text-law-gold mt-1" />
      <div className="text-white/80">
        <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-law-gold">Emergency: 24/7</p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Legal Information Section */}
        <div className="border-t border-white/20 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-law-gold mb-4">Legal Information</h4>
              <div className="grid grid-cols-2 gap-2">
                {legalInfo.map((info, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm text-white/60 hover:text-law-gold transition-colors"
                  >
                    {info}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-law-gold mb-4">Professional Standards</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Law Valley adheres to the highest standards of legal practice as mandated by the 
                Bangladesh Bar Council. All our advocates are licensed and maintain continuing 
                legal education requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2024 Law Valley - A Multidiscipline Law Firm. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Established 1993 • Supreme Court License No. SC/BD/LAW/1993/001
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-law-gold font-medium text-sm">Follow Us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-law-gold transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-white/60 hover:text-law-gold transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/60 hover:text-law-gold transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;