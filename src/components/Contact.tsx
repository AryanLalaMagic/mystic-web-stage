import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
// Removed Supabase import - now using direct API calls
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar,
  Users,
  DollarSign,
  Send,
  Instagram,
  Sparkles,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    plan: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
      console.log('Attempting to submit form to:', `${API_BASE_URL}/api/contact-form`);
      
      const response = await fetch(`${API_BASE_URL}/api/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          plan: formData.plan,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Form submission error:', result);
        toast({
          title: "Error",
          description: result.error || "Something went wrong. Please try again or contact me directly.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        plan: "",
        message: ""
      });
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: "Connection Error",
        description: "Unable to connect to server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "aryanlalamagic@gmail.com",
      description: "Response within 24 hours",
      link: "mailto:aryanlalamagic@gmail.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@aryanthe_magician",
      description: "DM for quick responses",
      link: "https://instagram.com/aryanthe_magician"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "Bangalore | Delhi | Pan-India",
      description: "Travel available nationwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24 Hours",
      description: "Usually much faster"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contact</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Book Your <span style={{ color: 'hsl(124, 20%, 46%)' }}>Magical Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to make your event magical? Let's discuss how I can add that special 
            touch to make your gathering truly unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border border-border rounded-2xl shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent/50 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: index <= 1 ? 'hsl(238, 59%, 67%)' : 'hsl(0, 83%, 31%)' }}>
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-primary font-semibold">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline transition-colors"
                          >
                            {item.info}
                          </a>
                        ) : (
                          item.info
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-primary/5 border border-border rounded-2xl shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-serif font-bold text-foreground mb-6 text-xl flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="w-3 h-3 text-secondary" />
                    </div>
                    <span>Booking 2-10 weeks in advance recommended</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3 h-3 text-secondary" />
                    </div>
                    <span>Events from 20 to 2000+ guests</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <DollarSign className="w-3 h-3 text-secondary" />
                    </div>
                    <span>Custom quotes based on event requirements</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-3 h-3 text-secondary" />
                    </div>
                    <span>Travel available worldwide</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-border rounded-2xl shadow-elegant relative z-10">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-serif text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'hsl(124, 20%, 46%)' }}>
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Request a Quote
                </CardTitle>
                <p className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-foreground font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-foreground font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        required
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                        placeholder=""
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="eventType" className="text-foreground font-semibold">Event Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="holiday">Holiday Party</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="eventDate" className="text-foreground font-semibold">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="guestCount" className="text-foreground font-semibold">Guest Count</Label>
                      <Select onValueChange={(value) => handleInputChange("guestCount", value)}>
                        <SelectTrigger className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Number of guests" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                          <SelectItem value="10-25">10-25 guests</SelectItem>
                          <SelectItem value="26-50">26-50 guests</SelectItem>
                          <SelectItem value="51-100">51-100 guests</SelectItem>
                          <SelectItem value="101-200">101-200 guests</SelectItem>
                          <SelectItem value="201-500">201-500 guests</SelectItem>
                          <SelectItem value="500+">500+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="budget" className="text-foreground font-semibold">Plan</Label>
                      <Select onValueChange={(value) => handleInputChange("plan", value)}>
                        <SelectTrigger className="bg-muted/50 border-border rounded-xl h-12 focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Select your plan" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                          <SelectItem value="silver">Silver Package (30 minutes)</SelectItem>
                          <SelectItem value="gold">Gold Package (45 minutes)</SelectItem>
                          <SelectItem value="platinum">Platinum Package (1 hour)</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                          <SelectItem value="discuss">Let's discuss options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-foreground font-semibold">Tell me about your event</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please share details about your event, venue, audience, and any specific requirements..."
                      rows={6}
                      className="bg-muted/50 border-border rounded-xl focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 hover:shadow-lg"
                    style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Booking Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;