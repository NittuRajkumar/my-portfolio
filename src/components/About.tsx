import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    commits: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = {
    experience: 5,
    projects: 50,
    clients: 25,
    commits: 1000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        experience: Math.floor(finalCounts.experience * progress),
        projects: Math.floor(finalCounts.projects * progress),
        clients: Math.floor(finalCounts.clients * progress),
        commits: Math.floor(finalCounts.commits * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(finalCounts);
      }
    }, stepDuration);
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className={`reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Profile Image */}
          <div
            className={`reveal ${isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative mx-auto lg:mx-20 w-80 h-80">
              <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-30 pulse-glow"></div>
              <div className="relative glass-card  p-3 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div
            className={`reveal ${isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">
            Passionate Web Developer✨ & Building Websites🧠
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ➤ I’m a self-taught full‑stack web developer with hands-on
                experience building responsive web applications using HTML5,
                CSS3, 🧩 JavaScript, React, Node.js, and MongoDB. 🧠 I’ve
                completed personal and academic projects—such as food munch and
                mini games—that showcase my problem‑solving skills and
                efficient code. ✨
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ✅ Now I’m seeking an entry‑level role where I can bring that
                foundation to real‑world applications, grow professionally, 🧠
                and contribute to impactful projects. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;







// import { useEffect, useRef, useState } from "react";
// import profileImg from "@/assets/profile.jpg";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState({
//     experience: 0,
//     projects: 0,
//     clients: 0,
//     commits: 0
//   });
//   const sectionRef = useRef<HTMLElement>(null);

//   const finalCounts = {
//     experience: 5,
//     projects: 50,
//     clients: 25,
//     commits: 1000
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//           animateCounters();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   const animateCounters = () => {
//     const duration = 2000;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       const progress = step / steps;

//       setCounters({
//         experience: Math.floor(finalCounts.experience * progress),
//         projects: Math.floor(finalCounts.projects * progress),
//         clients: Math.floor(finalCounts.clients * progress),
//         commits: Math.floor(finalCounts.commits * progress)
//       });

//       if (step >= steps) {
//         clearInterval(timer);
//         setCounters(finalCounts);
//       }
//     }, stepDuration);
//   };

//   return (
//     <section id="about" ref={sectionRef} className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         {/* Title */}
//         <div className={`reveal ${isVisible ? "revealed" : ""}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             <span className="bg-gradient-primary bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-1 items-center">
//           {/* Left: Profile Image */}
//           <div className={`reveal ${isVisible ? "revealed" : ""}`} style={{ transitionDelay: "0.2s" }}>
//             <div className="relative mx-auto lg:mx-20 w-80 h-70 ">
//               <div className="absolute inset-0 bg-gradient-primary  blur-lg opacity-30 pulse-glow"></div>
//               <div className="relative glass-card rounded-full p-0 pb-3 pt-3 pl-3 pr-3  overflow-hidden">
//                 <img
//                   src={profileImg}
//                   alt="Profile"
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right: Description */}
//           <div className={`reveal ${isVisible ? "revealed" : ""}`} style={{ transitionDelay: "0.4s" }}>
//             <div className="glass-card p-3  pr-12 rounded-2xl">
//               <h3 className="text-2xl font-bold mb-9 text-primary">
//               Passionate Web Developer ✨ & Building WebSites🧠
//               </h3>
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 ➤ I’m a self-taught full‑stack web developer with hands-on experience building responsive web applications 
//                  using HTML5, CSS3, 🧩 JavaScript, React, Node.js, and MongoDB.🧠I’ve completed personal and academic projects—such
//                   as food munch, mini games showcase my problem‑solving skills and  efficient code.✨
//               </p>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 ✅ Now I’m seeking an entry‑level role where I can bring that foundation to real‑world applications, grow professionally,
//                 🧠 and contribute to impactful projects.✨
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;










// import { useEffect, useRef, useState } from "react";
// import profileImg from "@/assets/profile.jpg";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState({
//     experience: 0,
//     projects: 0,
//     clients: 0,
//     commits: 0
//   });
//   const sectionRef = useRef<HTMLElement>(null);

//   const finalCounts = {
//     experience: 5,
//     projects: 50,
//     clients: 25,
//     commits: 1000
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//           animateCounters();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   const animateCounters = () => {
//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const stepDuration = duration / steps;

//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       const progress = step / steps;
      
//       setCounters({
//         experience: Math.floor(finalCounts.experience * progress),
//         projects: Math.floor(finalCounts.projects * progress),
//         clients: Math.floor(finalCounts.clients * progress),
//         commits: Math.floor(finalCounts.commits * progress)
//       });

//       if (step >= steps) {
//         clearInterval(timer);
//         setCounters(finalCounts);
//       }
//     }, stepDuration);
//   };

//   return (
//     <section id="about" ref={sectionRef} className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             <span className="bg-gradient-primary bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
//         </div>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {}
//           <div className={`reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
//             <div className="relative mx-auto lg:mx-0 ml-2 w-80 h-80">
//               <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-30 pulse-glow"></div>
//               <div className="relative glass-card rounded-full p-2 overflow-hidden">
//                    <img
//                   src={profileImg}
//                   alt="Alex Johnson"
//                   className="w-full h-full object-cover rounded-full"
//                 /> 
//               </div>
//             </div>
//           </div>

//           {}
//           <div className={`reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
//             <div className="glass-card p-3 mr-3  pr-9 center  rounded-2xl">
//               <h3 className="text-2xl font-bold mb-6 text-primary">
//                 Passionate Developer & Build Web Applications
//               </h3>
              
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 With over 5 years of experience in full-stack development, I specialize in creating 
//                 robust, scalable web applications using modern technologies. My journey began with 
//                 a fascination for how things work, which led me to explore the vast world of programming.
//               </p>
              
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I thrive on turning complex problems into simple, beautiful solutions. Whether it's 
//                 building responsive user interfaces, designing efficient databases, or optimizing 
//                 application performance, I bring dedication and creativity to every project.
//               </p>

              

              
//             </div> 
//           </div>
//         </div>
      
//   </section> 
    
//   );
// };

// export default About;






           /* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {counters.experience}+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {counters.projects}+
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {counters.clients}+
                  </div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {counters.commits}+
                  </div>
                  <div className="text-sm text-muted-foreground">Git Commits</div>
                </div>
              </div> */


            
