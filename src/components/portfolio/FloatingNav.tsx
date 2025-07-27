import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [accentLine, setAccentLine] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollY = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateAccentLine = () => {
      const activeIdx = navItems.findIndex(item => item.id === activeSection);
      const ref = buttonRefs.current[activeIdx];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const parentRect = ref.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setAccentLine({
            left: rect.left - parentRect.left + 24, // Shift right by 24px for better alignment
            width: rect.width
          });
        }
      }
    };
    updateAccentLine();
    window.addEventListener('resize', updateAccentLine);
    return () => window.removeEventListener('resize', updateAccentLine);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
      "glass-organic rounded-full px-6 py-3",
      isScrolled ? "shadow-medium" : "shadow-soft"
    )}>
      <div className="flex items-center space-x-1">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            ref={el => (buttonRefs.current[index] = el)}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              "hover:text-primary hover:bg-accent/50",
              activeSection === item.id 
                ? "text-primary bg-accent" 
                : "text-muted-foreground"
            )}
          >
            <span className="relative z-10 text-[1.05rem] md:text-[1.1rem]">{item.label}</span>
            
            {/* Active indicator */}
            {activeSection === item.id && (
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-organic-entrance" />
            )}
            
            {/* Hover ripple effect */}
            <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        ))}
      </div>
      
      {/* Animated accent line under active nav link */}
      <div
        className="absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-500"
        style={{
          left: accentLine.left,
          width: accentLine.width,
          transition: 'left 0.4s cubic-bezier(.4,1.2,.4,1), width 0.4s cubic-bezier(.4,1.2,.4,1)'
        }}
      />
    </nav>
  );
};

export default FloatingNav;