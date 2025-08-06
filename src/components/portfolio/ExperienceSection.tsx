import { useState, useEffect, useRef } from 'react';
import bevyLogo from '../../assets/bevy.jpeg';
import yotechLogo from '../../assets/yotech.jpeg';
import { cn } from '@/lib/utils';
import { 
  MapPin, 
  Calendar, 
  Award,
  Users,
  TrendingUp,
  Star,
  Building,
  Briefcase
} from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'fulltime' | 'contract' | 'freelance';
  description: string;
  achievements: string[];
  tech: string[];
  logo: string;
}

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences: Experience[] = [
    {
      id: 'bevy-commerce-lead',
      company: 'Bevy Commerce',
      role: 'Full-stack Developer (Project Lead)',
      duration: '06/2021 - Present',
      location: 'Canada',
      type: 'fulltime',
      description: 'Led end-to-end development of multiple Shopify and POS applications, managing full project lifecycles from architecture design to deployment.',
      achievements: [
        'Led end-to-end development of multiple Shopify and POS applications, managing full project lifecycles from architecture design to deployment.',
        'Architected and built real-time auction system with live bidding functionality for Emdals Auctions using WebSocket technology and real-time data synchronization.',
        'Developed Shopify POS apps enabling secure crypto payments in partnership with Uniswap.',
        'Created advanced POS features including fractional quantities, draft orders, and custom discount systems for high-profile brands (Danielle Frankel, Beauty First Nebraska).',
        'Supported Web3 projects (Vtrader, Coinbase, Ghost Drops) with wallet integration and cryptocurrency transaction processing.'
      ],
      tech: ['Shopify', 'POS', 'WebSocket', 'Uniswap', 'Crypto', 'Web3'],
      logo: bevyLogo
    },
    {
      id: 'bevy-commerce-senior-frontend',
      company: 'Bevy Commerce',
      role: 'Senior Frontend Developer',
      duration: '06/2021 - Present',
      location: 'Canada',
      type: 'fulltime',
      description: 'Led complete redesign of Upscribe Shopify project and implemented CI/CD pipelines.',
      achievements: [
        'Led complete redesign of Upscribe Shopify project, enhancing themes and app functionality resulting in 25% increase in user engagement.',
        'Implemented CI/CD pipelines using GitHub Actions, ensuring reliable deployments and streamlined team workflows with ClickUp integration.',
        'Developed responsive frontend architectures with seamless backend integration, improving application performance and user experience.'
      ],
      tech: ['React', 'Shopify', 'GitHub Actions', 'ClickUp'],
      logo: bevyLogo
    },
    {
      id: 'bevy-commerce-frontend',
      company: 'Bevy Commerce',
      role: 'Frontend Developer',
      duration: '06/2021 - Present',
      location: 'Canada',
      type: 'fulltime',
      description: 'Developed interactive components and led company website redesign.',
      achievements: [
        'Translated design mock-ups into responsive, high-quality code, ensuring compatibility across devices and reducing load times by 10%.',
        'Developed interactive components and plugins to boost user engagement and dynamic experiences.',
        'Collaborated with backend teams to integrate APIs smoothly for reliable data flow and functionality.',
        'Led company website redesign, incorporating animations to improve user interaction by 12%.'
      ],
      tech: ['React', 'API Integration', 'Animations'],
      logo: bevyLogo
    },
    {
      id: 'yo-tech',
      company: 'YO TECH',
      role: 'Software Developer',
      duration: '10/2019 - 05/2021',
      location: 'Canada',
      type: 'fulltime',
      description: 'Led restructuring of Angular projects and integrated multiple payment systems.',
      achievements: [
        'Led restructuring of Angular projects by implementing loading techniques, improving application performance by 45%.',
        'Integrated multiple payment systems (card, Apple Pay, Google Pay, Alipay, PayPal) for secure, seamless transactions.',
        'Utilized NGRX for state management to optimize page performance and enhance user experience.',
        'Mentored junior developers and conducted code reviews, improving team code quality by 20%.',
        'Worked closely with designers, QA, and product managers to deliver cohesive, high-quality products.'
      ],
      tech: ['Angular', 'NGRX', 'Payments', 'Mentorship'],
      logo: yotechLogo
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'fulltime':
        return 'bg-primary/10 text-primary border-primary/30';
      case 'contract':
        return 'bg-accent/20 text-accent-foreground border-accent/30';
      case 'freelance':
        return 'bg-sage/10 text-sage-hover border-sage/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fulltime':
        return Building;
      case 'contract':
        return Briefcase;
      case 'freelance':
        return Users;
      default:
        return Building;
    }
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      {/* Flowing river background */}
      <div className="absolute inset-0 opacity-20">
        {/* River path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            fill="none"
            opacity="0.3"
            className={cn(
              "transition-all duration-2000",
              isVisible && "animate-draw-line"
            )}
          />
          <path
            d="M0,450 Q350,250 700,450 T1200,450"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
            className={cn(
              "transition-all duration-2000",
              isVisible && "animate-draw-line"
            )}
            style={{ animationDelay: '0.5s' }}
          />
        </svg>

        {/* Floating elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute animate-float",
              i % 3 === 0 ? "w-4 h-4 bg-primary/10 rounded-full" :
              i % 3 === 1 ? "w-3 h-6 bg-accent/10 rounded-full" :
              "w-6 h-3 bg-sage/10 rounded-full"
            )}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-fluid-3xl font-bold text-foreground mb-4 text-3xl",
            isVisible && "animate-slide-up-fade"
          )}>
            Professional Journey
          </h2>
          <div className={cn(
            "w-24 h-1 bg-primary rounded-full mx-auto mb-6",
            isVisible && "animate-draw-line"
          )} />
          <p className={cn(
            "text-fluid-lg text-muted-foreground max-w-2xl mx-auto text-[1.1rem] md:text-[1.2rem]",
            isVisible && "animate-slide-up-fade"
          )} style={{ animationDelay: '0.2s' }}>
            Follow my growth as a developer through meaningful projects and collaborative experiences.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full hidden lg:block">
            <div className={cn(
              "w-full bg-primary rounded-full transition-all duration-2000",
              isVisible ? "h-full" : "h-0"
            )} style={{ transitionDelay: '0.5s' }} />
          </div>

          {/* Experience cards */}
          <div className="space-y-4 lg:space-y-6">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const TypeIcon = getTypeIcon(exp.type);
              
              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative flex items-center",
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  )}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-20 hidden lg:block">
                    <div className={cn(
                      "absolute inset-0 rounded-full bg-primary transition-all duration-500",
                      isVisible && "animate-pulse-gentle"
                    )} style={{ animationDelay: `${0.8 + index * 0.2}s` }} />
                  </div>

                  {/* Experience card */}
                  <div 
                    className={cn(
                      "w-full lg:w-5/12 group cursor-pointer",
                      isLeft ? "lg:pr-12" : "lg:pl-12"
                    )}
                    onMouseEnter={() => setActiveExperience(exp.id)}
                    onMouseLeave={() => setActiveExperience(null)}
                  >
                    <div className={cn(
                      "p-8 rounded-3xl shadow-soft transition-all duration-500 hover-lift paper-texture",
                      "bg-card border border-border/50",
                      activeExperience === exp.id && "shadow-organic",
                      isVisible && "animate-organic-entrance"
                    )} style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
                      {/* Company header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-medium flex-shrink-0">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground truncate">
                              {exp.company}
                            </h3>
                            <div className={cn(
                              "px-3 py-1 rounded-full text-xs font-medium border",
                              getTypeColor(exp.type)
                            )}>
                              <TypeIcon className="w-3 h-3 inline mr-1" />
                              {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-medium text-primary mb-3">
                            {exp.role}
                          </h4>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground text-base">Key Achievements</span>
                        </div>
                        
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className={cn(
                                "flex items-start gap-3 text-sm text-muted-foreground transition-all duration-300",
                                activeExperience === exp.id && "animate-slide-up-fade"
                              )}
                              style={{ animationDelay: `${achievementIndex * 0.1}s` }}
                            >
                              <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">Technologies</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {exp.tech.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className={cn(
                                "px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium transition-all duration-300 text-base",
                                activeExperience === exp.id && "animate-organic-entrance"
                              )}
                              style={{ animationDelay: `${techIndex * 0.05}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className={cn(
                        "absolute top-4 right-4 w-3 h-3 rounded-full bg-primary transition-all duration-300",
                        activeExperience === exp.id ? "opacity-100 animate-pulse-gentle" : "opacity-0"
                      )} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career summary */}
        <div className={cn(
          "mt-20 text-center p-8 rounded-3xl shadow-medium border border-primary/20",
          isVisible && "animate-organic-entrance"
        )} style={{ animationDelay: '1.5s' }}>
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-card-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-card-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-card-foreground">Client Satisfaction</div>
            </div>
          </div>
          
          <p className="text-lg text-card-foreground font-medium max-w-2xl mx-auto">
            Every role has been a stepping stone in my journey to create meaningful digital experiences. 
            I'm passionate about continuous learning and contributing to teams that make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;