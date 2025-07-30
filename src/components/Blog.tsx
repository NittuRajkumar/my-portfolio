import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
      date: "December 15, 2023",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "Mastering API Design with GraphQL",
      excerpt: "Deep dive into GraphQL concepts, schema design, and best practices for building efficient APIs.",
      date: "November 28, 2023",
      readTime: "12 min read",
      tags: ["GraphQL", "API", "Backend"],
      featured: false
    },
    {
      id: 3,
      title: "Docker Containerization for Full-Stack Applications",
      excerpt: "Complete guide to containerizing your full-stack applications with Docker and Docker Compose.",
      date: "November 10, 2023",
      readTime: "15 min read",
      tags: ["Docker", "DevOps", "Deployment"],
      featured: true
    },
    {
      id: 4,
      title: "Performance Optimization in Modern Web Apps",
      excerpt: "Techniques and strategies for optimizing web application performance, from code splitting to lazy loading.",
      date: "October 22, 2023",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "JavaScript"],
      featured: false
    },
    {
      id: 5,
      title: "Database Design Patterns for Scalable Systems",
      excerpt: "Explore common database patterns and when to use them for building scalable backend systems.",
      date: "October 5, 2023",
      readTime: "14 min read",
      tags: ["Database", "PostgreSQL", "Architecture"],
      featured: false
    },
    {
      id: 6,
      title: "Testing Strategies for Full-Stack Applications",
      excerpt: "Comprehensive testing approach covering unit tests, integration tests, and end-to-end testing.",
      date: "September 18, 2023",
      readTime: "11 min read",
      tags: ["Testing", "Jest", "Cypress"],
      featured: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTagColor = (tag: string) => {
    const colorMap: { [key: string]: string } = {
      "React": "primary",
      "TypeScript": "secondary",
      "GraphQL": "accent",
      "Docker": "primary",
      "Performance": "secondary",
      "Database": "accent",
      "Testing": "primary"
    };
    return colorMap[tag] || "primary";
  };

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`reveal ${isVisible ? 'revealed' : ''} group`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500 group-hover:shadow-glow-primary h-full flex flex-col">
                {/* Blog Image Placeholder */}
                <div className="relative h-48 bg-gradient-accent overflow-hidden">
                  <div className="absolute inset-0 tech-grid opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-30">📝</div>
                  </div>
                  
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-300"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs font-medium rounded-full bg-${getTagColor(tag)}/10 text-${getTagColor(tag)} border border-${getTagColor(tag)}/20`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="self-start text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className={`reveal ${isVisible ? 'revealed' : ''} text-center mt-12`} style={{ transitionDelay: '0.8s' }}>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300"
          >
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;