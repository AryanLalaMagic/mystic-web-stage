import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Youtube, 
  Mail, 
  Phone,
  MapPin,
  Sparkles
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
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}


      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-bold text-background mb-2">
                Shazam With Aryan
              </h2>
              <p className="text-accent uppercase tracking-wide text-sm font-semibold">
                Magic that Connects | Shazam With Aryan
              </p>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Creating unforgettable moments of wonder and amazement for over 14 years. 
              From intimate close-up magic to grand stage illusions, every performance 
              is crafted to leave a lasting impression.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-background/90">
                <Mail className="w-4 h-4 text-accent mr-3" />
                <span>aryanlalamagic@gmail.com</span>
              </div>
              <div className="flex items-center text-background/90">
                <MapPin className="w-4 h-4 text-accent mr-3" />
                <span>Bangalore Based (Pan India available)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-background mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold text-background mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-background/80">
              <li>Corporate Events</li>
              <li>Wedding Entertainment</li>
              <li>Private Parties</li>
              <li>Close-Up Magic</li>
              <li>Stage Illusions</li>
              <li>Mind Reading</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-background/80">Follow the magic:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            <Button variant="default">
              Book Your Event
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>
              © 2025 Aryan Lala. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
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