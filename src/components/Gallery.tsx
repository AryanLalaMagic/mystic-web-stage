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
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <ZoomIn className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Gallery</span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Gallery of <span style={{ color: 'hsl(0, 83%, 31%)' }}>Wonder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a glimpse into the magical moments I've created for clients around the world. 
            Each performance is unique, tailored to create unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-elegant hover:shadow-magic transition-all duration-500 hover:scale-[1.03] bg-card"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Caption always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg drop-shadow-2xl mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-white/80 text-sm font-medium">
                        {item.type === "video" ? "Video" : "Photo"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]" style={{ backgroundColor: 'hsla(238, 59%, 67%, 0.2)' }}>
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm shadow-2xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        {item.type === "video" ? (
                          <Play className="w-8 h-8 text-white fill-white" />
                        ) : (
                          <ZoomIn className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <span className="text-white text-sm uppercase tracking-wider font-bold drop-shadow-2xl">
                        {item.type === "video" ? "Watch Video" : "View Image"}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full bg-card border-border">
                {item.type === "video" && item.videoUrl ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoUrl.includes('shorts/') ? item.videoUrl.split('shorts/')[1] : item.videoUrl.split('v=')[1]?.split('&')[0]}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto rounded-xl"
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-elegant"
          >
            <ZoomIn className="w-5 h-5 mr-2" />
            View Full Portfolio
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;