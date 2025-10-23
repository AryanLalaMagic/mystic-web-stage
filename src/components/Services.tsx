import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Heart, 
  Users, 
  Sparkles, 
  Brain, 
  Wand2 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Shows",
      description: "Make All-Hands meetings fun and corporate events that people talk about. Performed for big companies like IBM, Times Group and Supertails with audiences ranging from 20 to 2000 people.",
      features: ["Team building entertainment", "Conference magic", "Interactive presentations", "Audience engagement"],
      price: "For Corporate Events"
    },
    {
      icon: Heart,
      title: "Wedding Magic",
      description: "Make your wedding magical so guests remember it forever. Add that special touch to make your big day truly unforgettable.",
      features: ["Reception entertainment", "Guest interaction", "Memorable moments", "Photo opportunities"],
      price: "Wedding Packages"
    },
    {
      icon: Users,
      title: "Private Parties",
      description: "House party ko aur mazzedaar! Throw a fun bachelorette party for your bestie or make personal events go from high to super high.",
      features: ["Birthday celebrations", "Bachelorette parties", "House parties", "Personal events"],
      price: "Party Packages"
    },
    {
      icon: Brain,
      title: "Mind Reading & Mentalism",
      description: "Mind-blowing psychological illusions that will leave your guests amazed. Comedy, magic, mind-reading - I do it all!",
      features: ["Mentalism shows", "Mind reading", "Psychological illusions", "Interactive experiences"],
      price: "Mentalism Shows"
    },
    {
      icon: Wand2,
      title: "Stage Performances",
      description: "Big stage performances to entertain large crowds with grand illusions and theatrical magic that captivates everyone.",
      features: ["Grand illusions", "Comedy magic", "Stage presence", "Large audience entertainment"],
      price: "Stage Shows"
    },
    {
      icon: Sparkles,
      title: "Close-Up Magic",
      description: "More interactive magic to mingle with your guests. Intimate miracles performed right before your eyes using everyday objects.",
      features: ["Table-to-table magic", "Walk-around entertainment", "Interactive demonstrations", "Guest mingling"],
      price: "Close-Up Magic"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            My <span className="text-primary">Magic Shows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From big stage performances to entertain crowds to close-up magic to mingle with your guests. 
            Comedy and magic ka full combination - it's all about magic!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-2 border-border hover:border-primary hover:shadow-magic transition-all duration-300 group rounded-xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <span className="font-bold text-primary uppercase tracking-wide text-sm">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-magic rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;