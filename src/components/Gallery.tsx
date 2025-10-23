import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ZoomIn, Play } from "lucide-react";
import warikoo from "@/assets/Ankur_Warikoo.jpeg";
import mor from "@/assets/Anshu_Mor.jpeg";
import suri from "@/assets/Nishant_Suri_1.jpg";
import supertails_1 from "@/assets/Supertails_1.jpg";
import supertails_2 from "@/assets/Supertails_3.jpg";
import mind_read from "@/assets/Performance_Image_5.jpeg";

import bennett from "@/assets/Bennett_1.jpg";
import ibm_1 from "@/assets/IBM_1.jpg";
import ibm_2 from "@/assets/IBM_2.jpg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    type: "image" | "video";
    title: string;
    videoUrl?: string;
  }

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: warikoo,
      alt: "Magic with Ankur Warikoo",
      type: "image",
      title: "Magic with Ankur Warikoo"
    },
    {
      id: 2,
      src: mor,
      alt: "Magic with Anshu Mor",
      type: "image",
      title: "Magic with Anshu Mor"
    },
    {
      id: 3,
      src: suri,
      alt: "Magic with Nishant Suri",
      type: "image",
      title: "Magic with Nishant Suri"
    },
    {
      id: 4,
      src: supertails_1,
      alt: "Corporate Show at Supertails",
      type: "image",
      title: "Corporate Show at Supertails"
    },
    {
      id: 5,
      src: bennett,
      alt: "Corporate Show at Times Group",
      type: "video",
      title: "Corporate Show at Times Group",
      videoUrl: "https://www.youtube.com/shorts/qOg2XH2a3ho"
    },
    {
      id: 6,
      src: ibm_1,
      alt: "Performed for 2000 people",
      type: "image",
      title: "Performed for 2000+ people"
    },
    {
      id: 7,
      src: ibm_2,
      alt: "Corporate Show at IBM",
      type: "image",
      title: "Corporate Show at IBM"
    },
    {
      id: 8,
      src: supertails_2,
      alt: "Corporate Show at Supertails",
      type: "image",
      title: "Interactive Corporate Shows"
    },
    {
      id: 9,
      src: mind_read,
      alt: "Blow Minds",
      type: "image",
      title: "Amazing Reactions"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Gallery of <span className="text-primary">Wonder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into the magical moments I've created for clients around the world. 
            Each performance is unique, tailored to create unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-card hover:shadow-magic transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-500"
                  />
                  
                  {/* Caption always visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4">
                    <h3 className="text-primary font-semibold text-base">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Hover overlay - semi-transparent */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-lg">
                        {item.type === "video" ? (
                          <Play className="w-8 h-8 text-primary" />
                        ) : (
                          <ZoomIn className="w-8 h-8 text-primary" />
                        )}
                      </div>
                      <span className="text-primary text-sm uppercase tracking-wide font-bold">
                        {item.type === "video" ? "Watch Video" : "View Image"}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full bg-magic-dark border-magic-gold">
                {item.type === "video" && item.videoUrl ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoUrl.includes('shorts/') ? item.videoUrl.split('shorts/')[1] : item.videoUrl.split('v=')[1]?.split('&')[0]}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;