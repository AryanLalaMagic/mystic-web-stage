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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Services</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            My <span style={{ color: 'hsl(238, 59%, 67%)' }}>Magic Shows</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From grand stage performances to intimate close-up magic. 
            Comedy and magic ka perfect combination - it's all about creating unforgettable moments!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 hover:shadow-elegant transition-all duration-300 group rounded-2xl overflow-hidden h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: index % 5 === 0 ? 'hsl(0, 83%, 31%)' : index % 5 === 1 ? 'hsl(238, 59%, 67%)' : index % 5 === 2 ? 'hsl(124, 20%, 46%)' : index % 5 === 3 ? 'hsl(195, 8%, 20%)' : 'hsl(30, 17%, 85%)', color: index % 5 === 4 ? 'hsl(195, 8%, 20%)' : 'white' }}>
                  <service.icon className="w-8 h-8" style={{ color: index % 5 === 4 ? 'hsl(195, 8%, 20%)' : 'white' }} />
                </div>
                <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <div className="bg-primary/5 rounded-lg px-4 py-3">
                    <span className="font-semibold text-primary text-sm uppercase tracking-wide">
                      {service.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'hsl(238, 59%, 67%)' }}
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;