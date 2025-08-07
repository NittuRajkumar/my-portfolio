import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern UIs using React, JavaScript, HTML CSS, and more.",
  },
  {
    title: "Backend Development",
    description:
      "Creating scalable and secure backends with Python, Node.js, Express, and MongoDB.",
  },
  {
    title: "Full Stack Web Apps",
    description:
      "End-to-end development of web apps with authentication, dashboards, and APIs.",
  },
  {
    title: "API Integration",
    description:
      "Connecting apps with third-party services like EmailJs, Firebase, or custom REST APIs.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying websites and apps on Vercel, Netlify, DigitalOcean, or AWS.",
  },
  {
    title: "Performance Optimization",
    description:
      "Speeding up websites with best practices for performance, SEO, and accessibility.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className={`reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl border border-muted/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
