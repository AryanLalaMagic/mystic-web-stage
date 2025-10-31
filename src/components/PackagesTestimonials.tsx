import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Wand2, Star, Quote, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const PackagesTestimonials = () => {
  const [activeTab, setActiveTab] = useState<'packages' | 'testimonials'>('packages');

  const packages = [
    {
      name: "Silver Package",
      duration: "30 minutes",
      icon: Wand2,
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
      icon: Wand2,
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

  const testimonials = [
    {
      name: "Ankur Warikoo",
      title: "Content Creator & Entrepreneur",
      image: "https://yt3.googleusercontent.com/Xmf5LtdlD2A7hOScjvc0nh87d1YfbfF458lN7Ot5T1a1CQePP6vNEmhZuj0x0TSz-37DBMzUsw=s900-c-k-c0x00ffffff-no-rj",
      rating: 5,
      text: "I am a fan of magic an now I am Aryan's fan. His magic was absolutely mind-blowing! The way he connects with the audience and creates those unforgettable moments is truly special. A master of his craft."
    },
    {
      name: "IBM",
      title: "Program Director, ISDL",
      image: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
      rating: 5,
      text: "What an incredible show! Aryan performed for 2000+ people and managed to keep everyone engaged throughout. His stage presence and magical skills are absolutely phenomenal!"
    },
    {
      name: "Anshu Mor",
      title: "Stand-up Comedian",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShT-6xWrXCgguIJK61elHMSjlRpK1llDfkYHbQ3967Mw4qbW9Yw9AzFfKupWkY8_D-h1s&usqp=CAU",
      rating: 5,
      text: "I've seen many performers, but Aryan brings something unique to the table. His blend of comedy and magic had everyone laughing and amazed at the same time. Incredible talent! Definitely book him for your events"
    },
    {
      name: "Times Group",
      title: "Assistant General Manager, Bennett University",
      image: "https://chatveda.com/whatspop/timesgroup.png",
      rating: 5,
      text: "A complete entertainment package. He had a 30 min slot in our event but everyone was talking about after the event. He was so amazing we called him again next year."
    },
    {
      name: "Nishant Suri",
      title: "Stand-up Comedian",
      image: "https://m.media-amazon.com/images/M/MV5BZThhNDRlN2QtYjhiNC00MzY2LWI5OTQtYWZhMDk2OTlmYzE2XkEyXkFqcGc@._V1_.jpg",
      rating: 5,
      text: "Aryan's magic is not just tricks... it's pure entertainment! His charming personality combined with mind-bending illusions creates an experience you'll never forget."
    },
    {
      name: "Supertails HR Team",
      title: "Human Resources, Supertails",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpAKQP7-OCoj4rlmECZfDAY_BK283TRrZfzRvY5hNael_-EBEd_3MDFb6vxwJp6W4424&usqp=CAU",
      rating: 5,
      text: "Aryan made our corporate event unforgettable! The entire team was engaged and entertained. His interactive magic show boosted our employees morale during hectic company's sale."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Tab Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-card rounded-full p-1 border border-border shadow-lg">
            <Button
              variant={activeTab === 'packages' ? 'default' : 'ghost'}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'packages' 
                  ? 'text-white shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{
                backgroundColor: activeTab === 'packages' ? 'hsl(238, 59%, 67%)' : 'transparent'
              }}
              onClick={() => setActiveTab('packages')}
            >
              <Crown className="w-5 h-5 mr-2" />
              Magic Packages
            </Button>
            <Button
              variant={activeTab === 'testimonials' ? 'default' : 'ghost'}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'testimonials' 
                  ? 'text-white shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{
                backgroundColor: activeTab === 'testimonials' ? 'hsl(124, 20%, 46%)' : 'transparent'
              }}
              onClick={() => setActiveTab('testimonials')}
            >
              <Quote className="w-5 h-5 mr-2" />
              What Clients Say
            </Button>
          </div>
        </div>

        {/* Content Container with Horizontal Scroll */}
        <div className="relative">
          {activeTab === 'packages' ? (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Choose Your <span className="text-primary">Magic Experience</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select the perfect package for your event. Each show is tailored to create unforgettable moments.
                </p>
              </div>
              
              {/* Packages Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  {packages.map((pkg, index) => (
                    <Card
                      key={index}
                      className={`relative bg-card border-2 transition-all duration-300 rounded-xl overflow-hidden w-full ${
                        pkg.highlight
                          ? "border-primary shadow-magic scale-105 md:scale-110"
                          : "border-border hover:border-primary/50 hover:shadow-card"
                      }`}
                    >
                      {pkg.badge && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                          <span 
                            className="px-4 py-1 rounded-full text-xs font-bold shadow-xl text-white border border-white"
                            style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}
                          >
                            ✨ {pkg.badge} ✨
                          </span>
                        </div>
                      )}

                      <CardHeader className="text-center pb-4 pt-8">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${pkg.highlight ? "" : "bg-muted"}`}>
                          <pkg.icon className={`w-8 h-8 ${pkg.highlight ? "text-primary" : "text-primary"}`} />
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
                          className="w-full rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white shadow-lg hover:shadow-xl"
                          style={{ 
                            backgroundColor: pkg.highlight ? 'hsl(0, 83%, 31%)' : 'hsl(238, 59%, 67%)',
                          }}
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
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Need a custom package? Let's discuss your specific requirements.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:text-white"
                  style={{ 
                    borderColor: 'hsl(124, 20%, 46%)', 
                    color: 'hsl(124, 20%, 46%)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(124, 20%, 46%)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'hsl(124, 20%, 46%)';
                  }}
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Custom Quote
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  What <span style={{ color: 'hsl(124, 20%, 46%)' }}>Clients Say</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Don't just take my word for it. Here's what your favourite content creators and my clients 
                  have to say about their magical experiences.
                </p>
              </div>

              {/* Testimonials Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-500 relative overflow-hidden group rounded-2xl w-full">
                      <CardContent className="p-6">
                        {/* Quote Icon */}
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'hsl(238, 59%, 67%)' }}>
                          <Quote className="w-6 h-6 text-primary-foreground" />
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Client Info */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 ring-2 ring-primary/20">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-primary font-medium">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300 blur-xl" style={{ backgroundColor: 'hsl(30, 17%, 85%)' }}></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300 blur-xl" style={{ backgroundColor: 'hsl(124, 20%, 46%)' }}></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-elegant">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                    Ready to Create Your Own <span style={{ color: 'hsl(238, 59%, 67%)' }}>Magical Moment?</span>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join hundreds of satisfied clients who have experienced the wonder of professional magic entertainment.
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                      ))}
                    </div>
                    <div className="w-px h-5 bg-border"></div>
                    <span className="text-foreground font-bold">5.0 Average Rating</span>
                    <div className="w-px h-5 bg-border"></div>
                    <span className="text-muted-foreground font-medium">200+ Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackagesTestimonials;
