import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const downloadResume = () => {
    // In a real app, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="tech-grid absolute inset-0 opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="floating absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
        <div className="floating absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full blur-sm" style={{
        animationDelay: '2s'
      }}></div>
        <div className="floating absolute bottom-40 left-20 w-3 h-3 bg-accent/30 rounded-full blur-sm" style={{
        animationDelay: '4s'
      }}></div>
        <div className="floating absolute bottom-20 right-10 w-5 h-5 bg-primary/30 rounded-full blur-sm" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="glass-card p-12 rounded-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">RAJKUMAR</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 h-12">
            <span className="text-foreground">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies. 
            Passionate about creating scalable, efficient, and beautiful web applications 
            that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="group relative overflow-hidden bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-4 text-lg font-semibold">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button onClick={downloadResume} variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300 px-8 py-4 text-lg font-semibold">
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;
