import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const projects = [{
    id: 1,
    title: "Collection Of Mini Games",
    description: "A Enjoy four interactive game cards: There are as like a Emoji Game, Memory Matrix, Rock Paper Scissors, and Card-Flip Memory Game.... Its a offline games for everyone to its will be knowing the upgrading up skill on mini games Built with a  HTML, CSS, React.js, and  doing JavaScript for a modern, responsive design Mini-games are lightweight and  playing with an ideal for improving focus, reflexes, and problem-solving skills and  while having fun and enteretainment..All the best...!!!! ",
    image: project1,
    technologies: ["FRONTEND","HTML", "CSS", "REACT JS", "JAVA SCRIPT"],
    liveDemo: "https://rajkumargames.ccbp.tech/",
    sourceCode: "https://github.com/NittuRajkumar/Collection-of-mini-games",
    featured: true
  }, {
    id: 2,
    title: "Login and Registration",
    description: "This project is a Login and Registration Authentication System built using the MERN stack (MongoDB, Express.js, React.js, Node.js).The frontend is developed with React and deployed on Vercel for fast and scalable performance.The backend REST API is built with Node.js and Express, deployed on Render, and connected to MongoDB for data storage. The complete source code is version-controlled and shared via GitHub, enabling collaboration and easy deployment.",
    image: project2,
    technologies: ["REACT JS", "MONGO DB", "REST API'S", "NODE JS","EXPRESS JS"],
    liveDemo: "https://login-and-register-omega.vercel.app/",
    sourceCode: "https://github.com/NittuRajkumar/Login-And-Register-Frontend",
    featured: false
  }, {
    id: 3,
    title: "Nxt Trendz Online Shoping",
    description: "A Nxttrendz is a modern online shopping platform offering a wide range of fashion, electronics, and lifestyle products. 🛍️ It provides users with a seamless shopping experience, featuring easy navigation and quick checkout.exclusive deals and trendy collections, Nxttrendz keeps shoppers updated with the latest styles. enhancing customer satisfaction.Shop anytime, anywhere with Nxttrendz and enjoy with a  free online retail experience.....!! Username: rahul,  Password: rahul@2021",
    image: project3,
    technologies: ["FRONTEND","REACT JS", "PYTHON", "API", "SQL", "HTML","CSS"],
    liveDemo: "https://nxttrendzmarket.ccbp.tech/login",
    sourceCode: "https://github.com/NittuRajkumar/Nxt-Trendz---Specific-Product-Details",
    featured: true
  // }, {
  //   id: 4,
  //   title: "Social Media API",
  //   description: "RESTful API for a social media platform with user management, post creation, real-time messaging, and content moderation.",
  //   image: project1,
  //   technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "CloudFlare"],
  //   liveDemo: "https://api.example.com",
  //   sourceCode: "https://github.com/example/social-api",
  //   featured: false
  // }, {
  //   id: 5,
  //   title: "Cryptocurrency Tracker",
  //   description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
  //   image: project2,
  //   technologies: ["React", "TypeScript", "GraphQL", "Redis", "WebSocket"],
  //   liveDemo: "https://crypto.example.com",
  //   sourceCode: "https://github.com/example/crypto-tracker",
  //   featured: false
  // }, {
  //   id: 6,
  //   title: "Learning Management System",
  //   description: "Educational platform with course management, video streaming, progress tracking, and interactive quizzes.",
  //   image: project3,
  //   technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
  //   liveDemo: "https://learn.example.com",
  //   sourceCode: "https://github.com/example/lms",
  //   featured: true
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const getTechColor = (tech: string) => {
    const colorMap: {
      [key: string]: string;
    } = {
      "React": "primary",
      "Vue.js": "secondary",
      "Node.js": "accent",
      "Python": "primary",
      "TypeScript": "secondary",
      "MongoDB": "accent",
      "PostgreSQL": "primary",
      "AWS": "secondary"
    };
    return colorMap[tech] || "primary";
  };
  return <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Featured My Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={project.id} className={`reveal ${isVisible ? 'revealed' : ''} group relative`} style={{
          transitionDelay: `${index * 0.1}s`
        }}>
              <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-glow-primary">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Featured Badge */}
                  {project.featured && <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                      Featured
                    </div>}
                  
                  {/* Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-glow-primary" onClick={() => window.open(project.liveDemo, '_blank')}>
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => window.open(project.sourceCode, '_blank')}>
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className={`px-2 py-1 text-xs font-medium rounded-full bg-${getTechColor(tech)}/10 text-${getTechColor(tech)} border border-${getTechColor(tech)}/20`}>
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* View More Button */}
        <div className={`reveal ${isVisible ? 'revealed' : ''} text-center mt-12`} style={{
        transitionDelay: '0.8s'
      }}>
          <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300" onClick={() => window.open("https://github.com/NittuRajkumar", '_blank')}>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;