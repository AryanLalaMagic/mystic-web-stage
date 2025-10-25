import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Youtube, 
  Mail, 
  Phone,
  MapPin,
  Sparkles,
  Heart,
  Star,
  Wand2
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/aryanthe_magician/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@ShazamwithAryan/featured", label: "YouTube" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background">
      {/* Newsletter/CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'hsl(30, 17%, 85%)', color: 'hsl(195, 8%, 20%)' }}>
              <Wand2 className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4">
              Ready to Add Magic to Your Event?
            </h2>
            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have experienced the wonder of professional magic entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Event
              </Button>
              <div className="flex items-center gap-2 text-background/80">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">5.0 Rating • 200+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-secondary" />
                <h2 className="text-3xl font-serif font-bold text-background">
                  Aryan Lala Magic
                </h2>
              </div>
              <p className="text-secondary uppercase tracking-wide text-sm font-bold">
                Professional Magician & Mentalist
              </p>
            </div>
            <p className="text-background/80 leading-relaxed mb-8 text-lg">
              Creating unforgettable moments of wonder and amazement for over 14 years. 
              From intimate close-up magic to grand stage illusions, every performance 
              is crafted to leave a lasting impression.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-background/90">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}>
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-background">Email</p>
                  <p className="text-background/80">aryanlalamagic@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center text-background/90">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'hsl(124, 20%, 46%)' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-background">Location</p>
                  <p className="text-background/80">Bangalore Based (Pan India Available)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-background mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-colors duration-300 font-medium hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-bold text-background mb-6 flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-secondary" />
              Services
            </h3>
            <ul className="space-y-4 text-background/80">
              <li className="font-medium">Corporate Events</li>
              <li className="font-medium">Wedding Entertainment</li>
              <li className="font-medium">Private Parties</li>
              <li className="font-medium">Close-Up Magic</li>
              <li className="font-medium">Stage Illusions</li>
              <li className="font-medium">Mind Reading</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/10 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <span className="text-background font-semibold text-lg">Follow the magic:</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: 'hsl(238, 59%, 67%)' }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-background/80">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="font-medium">Made with magic in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 bg-foreground/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70">
            <p className="font-medium">
              © 2025 Aryan Lala. All rights reserved. ✨
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-secondary transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;