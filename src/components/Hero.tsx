import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury modern home at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-20">
        <div className="max-w-3xl">
          <p className="text-white font-medium mb-4 animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
            A Growing Real Estate Company in Bangladesh
          </p>
          <h1 className="font-sofia font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
            Your Trusted Partner for Quality Living
            <span className="text-3xl lg:text-5xl block text-[#E6B450] bg-clip-text">Build Your Dream Home</span>
          </h1>
          <p className="font-sofia text-lg md:text-xl text-primary-foreground/100 mb-10 max-w-2xl leading-relaxed animate-fade-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
            Better Engineering Ltd (bel) is a fast-growing, forward-thinking real estate company in Bangladesh, founded in 2019. We create more than buildings. We craft homes that reflect your lifestyle, dreams, and aspirations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl">
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-accent">500+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Properties Sold</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-accent">15+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-accent">98%</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
