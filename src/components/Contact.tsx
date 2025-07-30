import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "🐙",
      color: "primary"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "💼",
      color: "secondary"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "🐦",
      color: "accent"
    },
    {
      name: "Email",
      url: "mailto:alex@example.com",
      icon: "📧",
      color: "primary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    // In a real app, this would download an actual resume file
    toast({
      title: "Resume Download",
      description: "Resume download started!",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="floating absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full blur-sm"></div>
      <div className="floating absolute top-40 right-20 w-6 h-6 bg-secondary/20 rounded-full blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="floating absolute bottom-40 left-20 w-3 h-3 bg-accent/20 rounded-full blur-sm" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass border-glass-border focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass border-glass-border focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass border-glass-border focus:ring-primary focus:border-primary transition-all duration-300 min-h-[120px] resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Resume */}
          <div className={`reveal ${isVisible ? 'revealed' : ''} space-y-8`} style={{ transitionDelay: '0.4s' }}>
            {/* Resume Download */}
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                Download My Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <Button
                onClick={downloadResume}
                size="lg"
                className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300"
              >
                Download Resume (PDF)
              </Button>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-center text-primary">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 rounded-xl glass hover-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-${social.color}`}
                    style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className={`text-sm font-medium group-hover:text-${social.color} transition-colors`}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-primary">
                Let's Discuss Your Project
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="text-primary">📍</span>
                  <span>Based in San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">⏰</span>
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">💬</span>
                  <span>Open to freelance opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;