// components/ContactForm.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return phone.trim() === "" || /^\+?\d{10,15}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing Information",
        description: "Name, Email, and Message are required.",
        variant: "destructive"
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!isValidPhone(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number or leave it blank.",
        variant: "destructive"
      });
      return;
    }

    
    console.log("Submitted Form Data:", formData);

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours."
    });

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

  return (
    <Card className="card-elegant">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary flex items-center space-x-2">
          <Send className="h-6 w-6 text-law-gold" />
          <span>Send Us a Message</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-primary font-medium">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-primary font-medium">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+880 XXX XXX-XXXX"
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-primary font-medium">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-primary font-medium">Legal Service Needed</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleInputChange("service", value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corporate">Corporate Law</SelectItem>
                <SelectItem value="criminal">Criminal Law</SelectItem>
                <SelectItem value="tax">Tax Law</SelectItem>
                <SelectItem value="arbitration">Arbitration</SelectItem>
                <SelectItem value="family">Family Law</SelectItem>
                <SelectItem value="employment">Employment Law</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-primary font-medium">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Please describe your legal matter or question..."
              className="mt-2 min-h-[120px]"
            />
          </div>

          <Button type="submit" className="btn-primary w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
