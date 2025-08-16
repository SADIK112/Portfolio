import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, 
  ShoppingCart, 
  Cpu, 
  Languages,
  Zap,
  Database as DatabaseIcon,
  Cloud,
  GitBranch,
  Server,
  CpuIcon,
  GitBranchIcon,
  Code2,
  Boxes,
  Terminal
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  skills: string[];
  color: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      icon: CpuIcon,
      color: 'text-pink-500',
      skills: [
        'Data Analysis', 'SQL', 'Tableau', 'Python', 'Pandas', 
        'NumPy', 'Data Visualization', 'Business Intelligence', 
        'ETL', 'Data Warehousing', 'Statistical Analysis',
        'Predictive Modeling', 'Data Mining', 'Machine Learning'
      ]
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        'Angular', 'Express.js', 'GraphQL', 'HTML', 'Laravel', 
        'Microservices Architecture', 'NGRX', 'Node.js', 'React', 
        'Real-time Systems', 'REDUX', 'REST APIs', 'Tailwind', 
        'TypeScript', 'Unit Testing', 'Vue', 'Webhooks'
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & Shopify',
      icon: ShoppingCart,
      color: 'text-green-500',
      skills: [
        'Liquid Templating', 'POS Extensions', 'Shopify APIs (REST & GraphQL)',
        'Shopify App Development', 'Shopify CLI', 'Shopify Polaris',
        'Storefront Customization', 'Theme Development'
      ]
    },
    {
      id: 'devops',
      title: 'Development & Deployment',
      icon: Cloud,
      color: 'text-purple-500',
      skills: [
        'Agile', 'AWS Queue', 'AWS Services', 'CI/CD Pipelines',
        'Docker', 'Git', 'GitHub Actions', 'Heroku',
        'MongoDB', 'PostgreSQL', 'SQL'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)',
              opacity: 0.3,
              animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[1.1rem] md:text-[1.2rem]">
            A collection of technologies and tools I've worked with throughout my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className={cn(
                "bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl shadow-lg",
                isVisible && "animate-organic-entrance"
              )}
              style={{ 
                animationDelay: `${category.id === 'data-science' ? '0.1s' : 
                              category.id === 'web-dev' ? '0.3s' : 
                              category.id === 'ecommerce' ? '0.5s' : 
                              category.id === 'devops' ? '0.7s' : '0.9s'}` 
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${category.color}/10 ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted/50 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;