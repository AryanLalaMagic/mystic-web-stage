import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star, Clapperboard, Sparkles } from "lucide-react";
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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
              <img
                src={portraitImage}
                alt="Aryan Lala - Professional Magician"
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Professional Magician</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15 blur-xl" style={{ backgroundColor: 'hsl(124, 20%, 46%)' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">About the Magician</span>
              </div> */}
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Meet <span style={{ color: 'hsl(238, 59%, 67%)' }}>Aryan Lala</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Bangalore-based magician originally from Delhi, performing magic pan-India. 
                  You remember that moment when you saw magic as a child... My goal is to spread that same joy, 
                  that sense of wonder which makes you believe anything is possible.
                </p>
                <p>
                  With 14 years of passion for the craft, I'm known for entertaining performances 
                  using skilled sleight of hand, mind-blowing psychological illusions, comedy, and charm.
                </p>
                <p className="text-foreground font-medium">
                  I guarantee three things: <span className="text-primary font-semibold">Entertainment, Entertainment, Entertainment!</span> 
                  <br />
                  <span className="text-secondary font-medium italic">Har event ko yaadgaar banane ka talent hai!</span>
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                // Different colors for each stat card from Coolors palette
                const colors = [
                  'hsl(0, 83%, 31%)',     // Dark Red
                  'hsl(238, 59%, 67%)',   // Tropical Indigo
                  'hsl(124, 20%, 46%)',   // Sea Green
                  'hsl(30, 17%, 85%)',    // Timberwolf (with dark text)
                  'hsl(195, 8%, 20%)'     // Onyx
                ];
                const bgColor = colors[index % colors.length];
                const textColor = index === 3 ? 'hsl(195, 8%, 20%)' : 'white'; // Dark text for light Timberwolf
                
                return (
                  <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: bgColor }}
                      >
                        <stat.icon className="w-6 h-6" style={{ color: textColor }} />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;