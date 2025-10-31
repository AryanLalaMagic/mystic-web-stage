import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star, Clapperboard, Sparkles, LucideIcon } from "lucide-react";
import portraitImage from "@/assets/Bennett_2.jpg";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  subtitle: string;
}

const About = () => {
  const stats: StatItem[] = [
    { icon: Clock, value: "14+", label: "Years of Magic", subtitle: "Experience" },
    { icon: Users, value: "2000+", label: "Audience", subtitle: "Maximum Show Size" },
    { icon: Star, value: "Fortune 500", label: "Corporate Clients", subtitle: "IBM, Supertails, Times Group" },
    { icon: Award, value: "Pan-India", label: "Performances", subtitle: "Nationwide Shows" },
    { icon: Clapperboard, value: "Celebrity", label: "Collaborations", subtitle: "Content Creators & Comedians" },
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Image and Text Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
              <img
                src={portraitImage}
                alt="Aryan Lala - Professional Magician"
                className="w-full h-[600px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15 blur-xl" style={{ backgroundColor: 'hsl(124, 20%, 46%)' }}></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Meet <span style={{ color: 'hsl(238, 59%, 67%)' }}>Aryan Lala</span>
            </h2>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-primary">Professional Magician</span>
            </div>

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
                I guarantee three things: <span className="font-semibold text-2xl" style={{ color: 'hsl(238, 59%, 67%)' }}>Entertainment, Entertainment, Entertainment!</span> 
                <br />
                <span className="text-secondary font-medium italic">Har event ko yaadgaar banane ka talent hai!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Horizontal Scroll - Below Both Image and Text */}  
        <div className="mt-16">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory justify-center">
            <div className="flex gap-4 min-w-max px-2">
            {stats.map((stat, index) => {
              // Gradient colors for each stat card
              const gradients = [
                'from-red-600 to-red-700',        // Years Experience
                'from-blue-500 to-purple-600',    // Audience Size  
                'from-green-500 to-teal-600',     // Top Brands
                'from-orange-400 to-pink-500',    // Pan-India
                'from-gray-700 to-gray-900'       // Celebrity Shows
              ];
              const gradient = gradients[index % gradients.length];
              
                return (
                  <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 rounded-3xl flex-shrink-0 w-48 snap-center">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <CardContent className="p-6 text-center relative z-10 h-48 flex flex-col justify-center">
                      {/* Icon with Gradient Background */}
                      <div className="relative mb-4">
                        <div 
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        {/* Glow Effect */}
                        <div 
                          className={`absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} mx-auto opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                        ></div>
                      </div>
                      
                      {/* Main Value */}
                      <div className="text-xl font-bold text-foreground mb-2 leading-tight">
                        {stat.value}
                      </div>
                      
                      {/* Primary Label */}
                      <div className="text-sm font-bold text-foreground mb-1 leading-tight">
                        {stat.label}
                      </div>
                      
                      {/* Subtitle */}
                      <div className="text-xs text-muted-foreground leading-tight px-1">
                        {stat.subtitle}
                      </div>
                      
                      {/* Decorative Line */}
                      <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardContent>
                  </Card>
                );
              })}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4 md:hidden">
              <div className="flex space-x-1">
                {stats.map((_, index) => (
                  <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;