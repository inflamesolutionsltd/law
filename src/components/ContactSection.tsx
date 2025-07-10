import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: [
      "Saiham Sky View Tower, 195 Shahid Syed Nazrul Islam Sarani",
      "Suite No. 11A (11th Floor), 45 Bijoy Nagar",
      "Dhaka – 1000, Bangladesh"
    ]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+880-2222-26013",
      "+880-16022-36975",
      "+880-17982-98777",
      "Emergency: 24/7 Available"
    ]
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "lawvalley@gmail.com",
      "lawvalleyfirm@gmail.com",
      "info@lawvalley.com.bd"
    ]
  }
];


  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-primary">Get in Touch</h2>
          <p className="text-elegant max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a consultation. 
            Our experienced team is here to provide you with expert legal guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ContactForm>
            
          </ContactForm>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant group hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-law-gold/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary group-hover:text-law-gold transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary mb-3">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="card-elegant bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4 text-white">Emergency Legal Assistance</h3>
                <p className="text-white/90 mb-4">
                  Need urgent legal help? Our emergency hotline is available 24/7 for critical legal matters.
                </p>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-law-gold" />
                  <a href="tel:+880-2222-26013" className="text-law-gold font-semibold text-lg">
                    +880-2222-26013

                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
  <Card className="card-elegant overflow-hidden">
    <CardContent className="p-0">
      <div className="bg-muted p-8 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Visit Our Office</h3>
        <p className="text-muted-foreground mb-6">
          Located in the heart of Gulshan, Dhaka – easily accessible by all major transportation routes.
        </p>

        {/* Embedded Google Map */}
        <div className="rounded-lg overflow-hidden aspect-[3/1]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.343157937044!2d90.40767912439107!3d23.73513938936376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f44d23a501%3A0x9729423fe7e27ee0!2sLaw%20Valley%20%7C%20Law%20Firm%20In%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1752044367977!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center mt-6">
          <MapPin className="h-12 w-12 text-law-gold mx-auto mb-2" />
          <p className="text-primary font-medium">Law Valley | Law Firm in Dhaka</p>
          <p className="text-muted-foreground text-sm">
            Satarkul Sky View Tower, B-8/B, Block-B, Dhaka-1212
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


        
        
      </div>
    </section>
  );
};

export default ContactSection;