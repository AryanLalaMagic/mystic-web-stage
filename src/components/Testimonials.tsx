import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Heart } from "lucide-react";

const Testimonials = () => {
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
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            What <span style={{ color: 'hsl(124, 20%, 46%)' }}>Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what your favourite content creators and my clients 
            have to say about their magical experiences and the lasting impressions I left.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-500 relative overflow-hidden group rounded-2xl">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'hsl(238, 59%, 67%)' }}>
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
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

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-10 max-w-3xl mx-auto shadow-elegant">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'hsl(0, 83%, 31%)' }}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Create Your Own <span style={{ color: 'hsl(238, 59%, 67%)' }}>Magical Moment?</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Join hundreds of satisfied clients who have experienced the wonder of professional magic entertainment.
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary fill-current" />
                ))}
              </div>
              <div className="w-px h-6 bg-border"></div>
              <span className="text-foreground font-bold text-lg">5.0 Average Rating</span>
              <div className="w-px h-6 bg-border"></div>
              <span className="text-muted-foreground font-medium">200+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;