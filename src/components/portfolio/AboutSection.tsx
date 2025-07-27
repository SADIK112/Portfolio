import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Code, Heart, Lightbulb, Target, Coffee, Rocket } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const infoCards = [
    {
      icon: Code,
      title: "Passionate Developer",
      description: "5+ years crafting digital experiences with modern technologies and clean, maintainable code.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Obsessed with creating intuitive interfaces that users love and businesses trust.",
      color: "bg-accent/20 text-accent-foreground"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Always exploring new technologies and methodologies to solve complex problems elegantly.",
      color: "bg-sage/10 text-sage-hover"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Curiosity Ignites",
      description: "Armed with nothing but curiosity and a laptop, I dove into HTML, CSS, and JavaScript—spending late nights building my first web pages and falling in love with the magic of code.",
      position: "left"
    },
    {
      year: "2020",
      title: "First Full-Stack Triumph",
      description: "Built my first React + Node.js app from scratch. Debugged, deployed, and realized the thrill of seeing my ideas come alive on the internet. This was the year I knew: tech was my future.",
      position: "right"
    },
    {
      year: "2021",
      title: "YO TECH Adventure",
      description: "Joined YO TECH as a Frontend Developer. Here, I learned the power of teamwork, tackled real-world e-commerce challenges, and helped launch products used by thousands—growing as both a coder and collaborator.",
      position: "left"
    },
    {
      year: "2022",
      title: "Leading at Bevy Commerce",
      description: "Took the leap to Full-stack Developer (Project Lead) at Bevy Commerce. Led teams, architected robust Shopify & POS solutions, and discovered the joy of mentoring others while shipping high-impact features.",
      position: "right"
    },
    {
      year: "2023",
      title: "Web3 & Beyond",
      description: "Ventured into Web3, integrating crypto payments and building real-time auction platforms. Every project stretched my skills and imagination, fueling my passion for cutting-edge tech.",
      position: "left"
    },
    {
      year: "2024",
      title: "Global Impact & Mastery",
      description: "Now in Canada, I craft seamless commerce experiences with Shopify, Next.js, and modern stacks—helping brands grow, mentoring devs, and always chasing that next creative breakthrough.",
      position: "right"
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-warm relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full bg-primary/5 animate-float",
              i % 3 === 0 ? "w-20 h-20" : i % 3 === 1 ? "w-12 h-12" : "w-8 h-8"
            )}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + (i % 3) * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className={cn(
            "text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 drop-shadow-lg",
            isVisible && "animate-slide-up-fade"
          )}>
            About Me
          </h2>
          <div className="w-32 h-2 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full animate-draw-line" />
          <p className={cn(
            "text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in",
            isVisible && "animate-slide-up-fade"
          )}>
            Turning curiosity into code, and ideas into impact—one bold project at a time.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-20 text-center">
          {infoCards.map((card, i) => (
            <div
              key={card.title}
              className={cn(
                "relative flex-1 min-w-[250px] max-w-sm glass-card p-8 rounded-2xl shadow-md border-2 border-primary/20 backdrop-blur-lg transition-transform duration-500 hover:scale-105 hover:shadow-accent/20 group",
                card.color,
                isVisible && `animate-fade-in-up`)
              }
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center justify-center mb-8 z-10">
  <div className="w-16 h-16 rounded-full bg-primary border-4 border-white flex items-center justify-center">
    <card.icon className={cn(
      "w-10 h-10 text-primary-foreground transition-transform duration-500",
      activeCard === i ? "scale-110 drop-shadow-md" : ""
    )} />
  </div>
</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-foreground z-20 relative">{card.title}</h3>
              <p className="text-[1.05rem] md:text-[1.1rem] text-muted-foreground font-medium">{card.description}</p>
              <div className={cn(
                "absolute inset-0 rounded-2xl pointer-events-none border-4 border-accent/0 group-hover:border-accent/60 transition-all duration-500"
              )} />
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative flex justify-center">
          {/* Central animated timeline bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-primary to-accent rounded-full shadow-xl animate-grow-bar">
            <div className={cn(
              "w-full rounded-full bg-gradient-to-b from-primary to-accent animate-gradient-bar transition-all duration-2000",
              isVisible ? "h-full" : "h-0"
            )} style={{ transitionDelay: '0.8s' }} />
          </div>

          {/* Timeline items */}
          <div className="w-full">
            {milestones.map((milestone, index) => {
              const Icon = [Rocket, Target, Coffee, Lightbulb, Code, Heart][index % 6];
              const alignLeft = milestone.position === "left";
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex w-full my-12 group",
                    alignLeft ? "justify-start" : "justify-end"
                  )}
                >
                  {/* Timeline bubble with icon */}
                  <div className={cn(
                    "absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center",
                  )}>
                    <div className="w-16 h-16 rounded-full border-4 border-white bg-primary shadow-xl flex items-center justify-center text-3xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:shadow-accent/40 animate-pop">
  <Icon className="w-8 h-8 text-primary-foreground" />
</div>
                    <div className="w-2 h-8 bg-gradient-to-b from-accent to-transparent rounded-b-full" />
                  </div>

                  {/* Milestone card */}
                  <div className={cn(
                    "relative max-w-lg p-8 rounded-2xl glass-card border-2 border-primary/20 shadow-md backdrop-blur-xl transition-all duration-500 mt-8",
                    alignLeft ? "ml-24 mr-auto text-left" : "mr-24 ml-auto text-right",
                    "hover:scale-105 hover:shadow-accent/30 animate-fade-in-up"
                  )} style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[1.25rem] font-extrabold text-primary drop-shadow-md">{milestone.year}</span>
                      <span className="text-[1.1rem] font-bold text-foreground">{milestone.title}</span>
                    </div>
                    <p className="text-[1.05rem] text-foreground/90 font-medium text-left">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;