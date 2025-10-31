import { Button } from "@/components/ui/button";
import {
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Sparkles,
  Heart,
  Star,
  Wand2,
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
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="border-b border-white/10">
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h2 className="text-xl font-serif font-bold text-white">
                Aryan Lala Magic
              </h2>
            </div>
            <p className="uppercase text-yellow-400 text-[11px] tracking-widest font-semibold">
              Magician • Mentalist • Entertainer
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm max-w-md">
            Crafting wonder for over 14 years — from private parties to large-scale stage illusions. Every performance is unique and unforgettable.
          </p>
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-700">
                <Mail className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-gray-300">aryanlalamagic@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-emerald-600">
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-gray-300">Bangalore • Pan India</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-3 flex items-center gap-2 text-white">
            <Star className="w-4 h-4 text-yellow-400" />
            Quick Links
          </h3>
          <ul className="space-y-1.5">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-3 flex items-center gap-2 text-white">
            <Wand2 className="w-4 h-4 text-yellow-400" />
            Services
          </h3>
          <ul className="space-y-1.5 text-gray-300">
            <li>Corporate Events</li>
            <li>Weddings</li>
            <li>Private Parties</li>
            <li>Close-Up Magic</li>
            <li>Stage Illusions</li>
            <li>Mind Reading</li>
          </ul>
        </div>
      </div>

      {/* Social + Bottom Bar */}
      <div className="border-t border-white/10 bg-foreground/90">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Follow the Magic:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-purple-600 hover:bg-purple-500 hover:scale-110 hover:shadow-md transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Heart className="w-4 h-4 text-yellow-400" />
            <span>Made with Magic in India</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400 text-xs">
          <p>© 2025 Aryan Lala. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
