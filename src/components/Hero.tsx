import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/Open_Mic_1.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional magician performing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-primary mr-2" size={32} />
            <span className="text-primary font-medium tracking-wide uppercase text-lg">
              Magician | Mentalist | Corporate Performer
            </span>
            <Sparkles className="text-primary ml-2" size={32} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="block bg-gradient-gold bg-clip-text text-transparent drop-shadow-lg">
              Aryan Lala
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Want to make your events memorable? Hire Aryan The Magician to add magic to your events with highly interactive experiences that leave lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-magic rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Your Event
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Gallery
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>

      {/* Floating magical elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="text-primary opacity-60" size={24} />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <Sparkles className="text-primary opacity-60" size={20} />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
        <Sparkles className="text-primary opacity-60" size={16} />
      </div>
    </section>
  );
};

export default Hero;