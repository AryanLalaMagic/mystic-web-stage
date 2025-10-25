import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Wand2 } from "lucide-react";
import heroImage from "@/assets/Open_Mic_1.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional magician performing"
          className="w-full h-full object-cover brightness-[0.45]"
        />
        {/* Invisible overlay for readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-[#DDD5D0]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-[#7D80DA]" />
            <span className="font-medium text-[#DDD5D0]/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Professional Magician & Mentalist
            </span>
            <Sparkles className="w-5 h-5 text-[#5E8C61]" />
          </div>

          {/* Main Name */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#DDD5D0] drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]">
            Aryan Lala
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-[#DDD5D0]/95 drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] leading-relaxed">
            Creating{" "}
            <span className="text-[#7D80DA] font-semibold">
              magical moments
            </span>{" "}
            that leave lasting impressions
          </p>

          {/* Supporting Line */}
          <p className="text-lg md:text-xl font-light text-[#DDD5D0]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
            From private gatherings to corporate galas, experience live magic
            that sparks{" "}
            <span className="text-[#8E0D0D] font-semibold">wonder</span> and{" "}
            <span className="text-[#5E8C61] font-semibold">connection</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              className="border border-[#DDD5D0]/40 text-[#DDD5D0] hover:text-[#313638] hover:bg-[#DDD5D0] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .querySelector("#gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Gallery
            </Button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-12 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#DDD5D0]/40 hover:border-[#DDD5D0]/70 transition-colors shadow-[0_0_12px_rgba(0,0,0,0.5)]">
              <ArrowDown className="w-6 h-6 text-[#DDD5D0]" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Floating Accents */}
      <Sparkles className="absolute top-24 left-10 w-6 h-6 text-[#7D80DA] opacity-70 animate-pulse" />
      <Sparkles className="absolute bottom-20 right-12 w-5 h-5 text-[#5E8C61] opacity-60 animate-pulse delay-700" />
      <Wand2 className="absolute top-64 right-16 w-5 h-5 text-[#8E0D0D] opacity-55 animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
