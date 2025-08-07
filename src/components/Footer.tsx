const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: "Home",
    href: "#hero"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Projects",
    href: "#projects"
  }, 
  {
    name: "Services",
    href: "#Services"
  },{
    name: "Contact Us",
    href: "#Contact us"
  }];
  const socialLinks = [{
    name: "GitHub",
    href: "https://github.com",
    icon: "🐙"
  }, {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "💼"
  }, {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "🐦"
  }];
  
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer id="footer" className=" relative bg-card/50 border-t border-glass-border">

    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection("#hero")}
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              RAJKUMAR NITTU
            </div>
            <p className="text-muted-foreground text-sm">Full-Stack Web Developer, Building Web Applications </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {link.name}
                </button>)}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover-glow transition-all duration-300 hover:scale-110" aria-label={social.name}>
                <span className="text-lg">{social.icon}</span>
              </a>)}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} RAJKUMAR NITTU. All rights reserved. Built with ❤️ using React & JavaScript.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;