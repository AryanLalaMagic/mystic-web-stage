import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Silver Package",
      duration: "30 minutes",
      icon: Sparkles,
      features: [
        "Interactive magic performance",
        "Audience engagement",
        "Perfect for small gatherings",
        "Close-up or stage magic",
      ],
      highlight: false,
    },
    {
      name: "Gold Package",
      duration: "45 minutes",
      icon: Crown,
      features: [
        "Extended performance time",
        "Mix of close-up & stage magic",
        "Mentalism & mind reading",
        "Customized for your event",
        "Perfect for corporate events",
      ],
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Platinum Package",
      duration: "1 hour",
      icon: Crown,
      features: [
        "Full magic experience",
        "Stage illusions & grand magic",
        "Mentalism & comedy magic",
        "Interactive crowd involvement",
        "Personalized show design",
        "Ideal for large gatherings",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Magic Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect package for your event. Each show is tailored to create unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative bg-card border-2 transition-all duration-300 rounded-xl overflow-hidden ${
                pkg.highlight
                  ? "border-primary shadow-magic scale-105 md:scale-110"
                  : "border-border hover:border-primary/50 hover:shadow-card"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    pkg.highlight ? "bg-gradient-gold" : "bg-muted"
                  }`}
                >
                  <pkg.icon className={`w-8 h-8 ${pkg.highlight ? "text-magic-dark" : "text-primary"}`} />
                </div>
                <CardTitle className="text-2xl font-serif text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-primary mb-1">
                  {pkg.duration}
                </div>
                <p className="text-sm text-muted-foreground">magic show</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <Check className={`w-5 h-5 ${pkg.highlight ? "text-primary" : "text-accent"} mr-3 flex-shrink-0 mt-0.5`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    pkg.highlight
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-magic"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  size="lg"
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom package? Let's discuss your specific requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default Packages;