import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    type: "image" | "video";
    title: string;
    videoUrl?: string;
  }

  // Start with video first as requested
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: bennett,
      alt: "Corporate Show at Times Group",
      type: "video",
      title: "Corporate Show at Times Group",
      videoUrl: "https://www.youtube.com/shorts/qOg2XH2a3ho"
    },
    {
      id: 2,
      src: warikoo,
      alt: "Magic with Ankur Warikoo",
      type: "image",
      title: "Magic with Ankur Warikoo"
    },
    {
      id: 3,
      src: mor,
      alt: "Magic with Anshu Mor",
      type: "image",
      title: "Magic with Anshu Mor"
    },
    {
      id: 4,
      src: suri,
      alt: "Magic with Nishant Suri",
      type: "image",
      title: "Magic with Nishant Suri"
    },
    {
      id: 5,
      src: supertails_1,
      alt: "Corporate Show at Supertails",
      type: "image",
      title: "Corporate Show at Supertails"
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

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, galleryItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Gallery of <span style={{ color: 'hsl(0, 83%, 31%)' }}>Wonder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a glimpse into the magical moments I've created for clients around the world. 
            Each performance is unique, tailored to create unforgettable experiences.
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card aspect-video">
            {currentItem.type === "video" && currentItem.videoUrl ? (
              <div className="relative w-full h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${currentItem.videoUrl.includes('shorts/') ? currentItem.videoUrl.split('shorts/')[1] : currentItem.videoUrl.split('v=')[1]?.split('&')[0]}?autoplay=0&mute=${isVideoMuted ? 1 : 0}&controls=1`}
                  title={currentItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-2xl"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 text-white border-0 hover:bg-black/70"
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            ) : (
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white border-0 hover:bg-white/30 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white border-0 hover:bg-white/30 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            {/* Auto-play Control */}
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 left-4 bg-black/50 text-white border-0 hover:bg-black/70"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoPlaying ? "Pause" : "Play"}
            </Button>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
              <h3 className="text-white font-bold text-xl mb-2">{currentItem.title}</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-white/80 text-sm font-medium">
                  {currentItem.type === "video" ? "Video" : "Photo"}
                </span>
              </div>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {galleryItems.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;