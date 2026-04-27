import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#properties", label: "Properties" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
  isMenuOpen || isScrolled
    ? "bg-background/60 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-primary/5"
    : "bg-transparent"
}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="logo.png.webp" 
                alt="BDBel Logo" 
                className="h-10 w-20"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 ${isScrolled ? 'text-foreground/70' : 'text-white'} hover:text-primary transition-all duration-300 font-medium text-base group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4 ml-6">
            <a href="tel:+1234567890" className={`flex items-center gap-2 ${isScrolled ? 'text-foreground/70' : 'text-white'} hover:text-primary transition-all duration-300 group`}>
              <Phone className="h-4 w-4 icon-hover" />
              <span className="font-medium text-sm">09 678 060 708</span>
            </a>
            <Button className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow hover:scale-105 transition-all duration-300">
              <span>Schedule Tour</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Phone Number */}
          <a href="tel:+1234567890" className={`md:hidden flex items-center gap-2 ml-auto mr-3 ${!isMenuOpen && !isScrolled ? 'text-white' : 'text-black'} hover:text-primary transition-all duration-300 whitespace-nowrap`}>
            <Phone className="h-5 w-5" />
            <span className="font-medium text-sm">09678060708</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${!isMenuOpen && !isScrolled ? 'text-white' : 'text-black'} hover:text-black md:text-foreground md:hover:text-primary transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4 w-full bg-gradient-to-r from-primary to-accent">
                Schedule Tour
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
