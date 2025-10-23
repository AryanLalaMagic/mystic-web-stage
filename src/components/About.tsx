import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star, Clapperboard } from "lucide-react";
import portraitImage from "@/assets/Bennett_2.jpg";

const About = () => {
  const stats = [
    { icon: Clock, value: "14+", label: "Years Experience" },
    { icon: Users, value: "2000+", label: "Audience Size" },
    { icon: Star, value: "IBM, Supertails, Times Group", label: "Corporate Shows" },
    { icon: Award, value: "Pan-India", label: "Performances" },
    { icon: Clapperboard, value: "Ankur Warikoo, Anshu Mor, Nishant Suri", label: "Content Creators" },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img
                src={portraitImage}
                alt="Aryan Lala - Professional Magician"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-magic-dark/20 to-transparent"></div>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Who is <span className="text-magic-gold">Aryan?</span>
            </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aryan Lala is a Bangalore-based magician, originally from Delhi, who performs magic pan-India. 
                You remember that moment when you saw magic as a child... My goal is to spread that same joy, 
                that sense of wonder which makes you believe anything is possible and makes you forget all your problems through my magic.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aryan's passion for his craft began 14 years ago. He is known for his entertaining performances 
                using a blend of skilled sleight of hand, mind-blowing psychological illusions, touch of comedy and his charm.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I guarantee three things to all my clients: <span className="text-magic-gold font-semibold">Entertainment, Entertainment, Entertainment... </span> 
                Har event ko yaadgaar banane ka talent hai!
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-muted border-border hover:shadow-magic transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-magic-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;