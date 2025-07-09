import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Practice Areas", href: "#services" },
    { name: "Our Lawyers", href: "#team" },
    { name: "Our Clients", href: "#clients" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "News/Articles", href: "#news" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/law_img/logo.png"
              alt="Law Valley Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+8801234567890" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+880-2222-26013</span>
            </a>
            <Button className="btn-primary">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <a href="tel:+8801234567890" className="flex items-center space-x-2 text-primary">
                  <Phone className="h-4 w-4" />
                  <span>+880 123 456-7890</span>
                </a>
                <Button className="btn-primary w-full">
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

    </header>
  );
};

export default Header;