import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "Html", level: 95, category: "Frontend", icon: "📄" },
    { name: "Css", level: 90, category: "Frontend", icon: "🎨" },
    { name: "Javascript", level: 65, category: "Frontend", icon: "🟨" },
    { name: "React JS", level: 70, category: "Frontend", icon: "⚛️" },

     { name: "Python", level: 90, category: "Backend", icon: "🐍" },
    { name: "Node JS", level: 80, category: "Backend", icon: "💚" },
    {name: "Express JS", level: 80, category: "Backend", icon: "🔧"},
    { name: "API'S", level: 75, category: "Backend", icon: "🔗" },
     
    

    
    { name: "SQL", level: 75, category: "Database", icon: "🛢️" },
    { name: "Mongo DB", level: 85, category: "Database", icon: "🍃" },
    {name: "Git Hub", level: 80, category: "Database", icon: "🐙"},
    {name: "Post Man", level: 60, category: "Database", icon: "🚀"},
    
    
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: "primary",
      Language: "secondary",
      Backend: "accent",
      Database: "primary",
      DevOps: "secondary",
      Cloud: "accent",
      API: "primary"
    };
    return colors[category as keyof typeof colors] || "primary";
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              My Skills 
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category}
              className={`reveal ${isVisible ? 'revealed' : ''} glass-card p-6 rounded-2xl hover-lift`}
              style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className={`text-xl font-bold mb-6 text-${getCategoryColor(category)}`}>
                {category}
              </h3>
              
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full skill-progress rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className={`reveal ${isVisible ? 'revealed' : ''} mt-16`} style={{ transitionDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Technologies, I Work With...
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML5", "CSS3", "Express.js", "Javascript", "Python", "Git", "GitHub",
             "React Js", "Mongo Db", "Node Js", "Sql", "Bootstarap"
            ].map((tech, index) => (
              <div
                key={tech}
                className={`glass px-4 py-2 rounded-full text-sm font-medium hover-glow transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: `${0.8 + (index * 0.05)}s`,
                  background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
