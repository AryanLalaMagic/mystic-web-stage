import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import PackagesTestimonials from "@/components/PackagesTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <PackagesTestimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
