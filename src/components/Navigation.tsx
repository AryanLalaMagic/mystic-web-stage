import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Glass morphism background */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-r from-[#313638]/60 via-[#313638]/40 to-[#313638]/60 rounded-b-2xl border border-[#DDD5D0]/10 shadow-2xl" style={{
          background: 'linear-gradient(135deg, rgba(49, 54, 56, 0.8) 0%, rgba(49, 54, 56, 0.6) 50%, rgba(49, 54, 56, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
        }}></div>
        <div className="flex items-center justify-between h-20 relative z-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-[#DDD5D0] tracking-wide">
              Shazam with Aryan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-[#DDD5D0]/90 hover:text-[#7D80DA] font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7D80DA] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}

            <Button
              className="text-[#DDD5D0] px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md border border-transparent"
              style={{
                backgroundColor: "#8E0D0D",
              }}
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ✨ Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#DDD5D0]"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fadeIn relative z-10">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-[#313638]/95 backdrop-blur-xl border border-[#DDD5D0]/20 rounded-xl mt-4 shadow-lg"
                 style={{
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)',
                 }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-[#DDD5D0]/90 hover:text-[#7D80DA] hover:bg-[#5E8C61]/20 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="w-full mt-4 text-[#DDD5D0] rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: "#8E0D0D",
                }}
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                ✨ Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
