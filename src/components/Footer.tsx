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
  }, {
    name: "Contact",
    href: "#contact"
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
  return <footer className="bg-card/50 border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Alex Johnson
            </div>
            <p className="text-muted-foreground text-sm">Full-Stack Web 
Developer crafting digital experiences</p>
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
            © {currentYear} Alex Johnson. All rights reserved. Built with ❤️ using React & TypeScript.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;