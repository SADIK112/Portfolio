import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Leaf, 
  TreePine, 
  Flower2, 
  Sprout,
  Globe,
  Database,
  Palette,
  Wrench,
  Cloud,
  Shield
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  icon: any;
  description: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend Technology
    { name: 'Angular', level: 90, category: 'frontend', icon: Leaf, description: 'Modern SPA development' },
    { name: 'React', level: 90, category: 'frontend', icon: Leaf, description: 'Component-based UIs' },
    { name: 'Vue', level: 85, category: 'frontend', icon: Leaf, description: 'Progressive web apps' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: Leaf, description: 'Type-safe development' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: Leaf, description: 'Core web scripting' },
    { name: 'HTML5', level: 95, category: 'frontend', icon: Leaf, description: 'Semantic markup' },
    { name: 'CSS3', level: 92, category: 'frontend', icon: Leaf, description: 'Modern styling' },
    { name: 'NGRX', level: 85, category: 'frontend', icon: Leaf, description: 'State management' },
    // Backend Technology
    { name: 'Node.js', level: 88, category: 'backend', icon: TreePine, description: 'Server-side JavaScript' },
    { name: 'Express.js', level: 85, category: 'backend', icon: TreePine, description: 'API development' },
    { name: 'GraphQL', level: 80, category: 'backend', icon: TreePine, description: 'Flexible APIs' },
    { name: 'Laravel', level: 78, category: 'backend', icon: TreePine, description: 'PHP web framework' },
    { name: 'Microservices Architecture', level: 80, category: 'backend', icon: TreePine, description: 'Scalable systems' },
    { name: 'REST APIs', level: 90, category: 'backend', icon: TreePine, description: 'Web services' },
    { name: 'Webhooks', level: 85, category: 'backend', icon: TreePine, description: 'Event-driven integrations' },
    { name: 'MongoDB', level: 83, category: 'backend', icon: Database, description: 'NoSQL data management' },
    { name: 'SQL', level: 80, category: 'backend', icon: Database, description: 'Relational databases' },
    // E-commerce & Shopify
    { name: 'Shopify App Development', level: 90, category: 'frontend', icon: Leaf, description: 'Custom Shopify solutions' },
    { name: 'Shopify APIs (REST & GraphQL)', level: 88, category: 'frontend', icon: Leaf, description: 'Shopify integrations' },
    { name: 'Liquid Templating', level: 85, category: 'frontend', icon: Leaf, description: 'Shopify theming' },
    { name: 'POS Extensions', level: 80, category: 'frontend', icon: Leaf, description: 'Shopify POS customization' },
    { name: 'Shopify CLI', level: 80, category: 'frontend', icon: Leaf, description: 'Shopify development tools' },
    { name: 'Shopify Polaris', level: 80, category: 'frontend', icon: Leaf, description: 'UI components for Shopify' },
    { name: 'Storefront Customization', level: 85, category: 'frontend', icon: Leaf, description: 'Custom storefronts' },
    { name: 'Theme Development', level: 87, category: 'frontend', icon: Leaf, description: 'Shopify themes' },
  ];

  const categoryColors = {
    frontend: { bg: 'bg-sage/10', text: 'text-sage-hover', border: 'border-sage/30' },
    backend: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/30' }
  };

  const categoryIcons = {
    frontend: Sprout,
    backend: TreePine
  };

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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute animate-float",
              i % 4 === 0 ? "w-6 h-6 bg-primary/10 rounded-full" :
              i % 4 === 1 ? "w-4 h-8 bg-accent/10 rounded-full" :
              i % 4 === 2 ? "w-8 h-4 bg-sage/10 rounded-full" :
              "w-5 h-5 bg-muted/10 rounded-full"
            )}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + (i % 4)}s`
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
            Skills Garden
          </h2>
          <div className={cn(
            "w-24 h-1 bg-primary rounded-full mx-auto mb-6 text-lg",
            isVisible && "animate-draw-line"
          )} />
          <p className={cn(
            "text-fluid-lg text-muted-foreground max-w-2xl mx-auto text-lg",
            isVisible && "animate-slide-up-fade"
          )} style={{ animationDelay: '0.2s' }}>
            Watch my skills grow like plants in a digital garden - each one nurtured through practice and passion.
          </p>
        </div>

        {/* Skills garden grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {Object.entries(categoryColors).map(([category, colors], categoryIndex) => {
            const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
            const categorySkills = getSkillsByCategory(category);
            
            return (
              <div
                key={category}
                className={cn(
                  "p-8 rounded-3xl border-2 paper-texture transition-all duration-500 hover-lift",
                  colors.bg,
                  colors.border,
                  isVisible && "animate-organic-entrance"
                )}
                style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    colors.bg.replace('/10', '/20'),
                    colors.border
                  )}>
                    <CategoryIcon className={cn("w-6 h-6", colors.text)} />
                  </div>
                  <h3 className={cn("text-2xl font-semibold capitalize", colors.text)}>
                    {category} Skills
                  </h3>
                </div>

                {/* Skills list - now a grid of compact skill chips with tooltips */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={cn(
                        "relative flex items-center gap-2 px-3 py-2 rounded-xl border transition hover:shadow-md bg-white/80 hover:bg-white",
                        colors.border,
                        colors.text,
                        "group"
                      )}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <skill.icon className={cn("w-5 h-5", colors.text)} />
                      <span className="font-medium text-[0.95rem] text-foreground/90 truncate max-w-[90px]">{skill.name}</span>
                      {/* Tooltip for description */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-lg bg-background border border-muted px-3 py-2 text-sm text-foreground shadow-xl whitespace-normal animate-fade-in">
                          {skill.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;