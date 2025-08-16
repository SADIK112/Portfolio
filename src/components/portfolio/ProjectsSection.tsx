import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Project, projects } from '@/data/projects';
import ProjectModal from './ProjectModal';

// ProjectCard component has been inlined into the ProjectsSection component

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'shopify' | 'machinelearning' | 'web'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const filters = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'shopify' as const, label: 'Shopify'},
    { id: 'web' as const, label: 'Web' },
    { id: 'machinelearning' as const, label: 'Machine Learning' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            isVisible && "animate-slide-up-fade"
          )}>
            Featured Projects
          </h2>
          <div className={cn(
            "w-24 h-1 bg-primary rounded-full mx-auto mb-6",
            isVisible && "animate-draw-line"
          )} />
          <p className={cn(
            "text-muted-foreground max-w-2xl mx-auto",
            isVisible && "animate-fade-in"
          )}>
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Filter buttons */}
        <div className={cn(
          "flex flex-wrap justify-center gap-3 mb-12",
          isVisible && "animate-fade-in"
        )}>
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative block overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover-lift h-full flex flex-col",
                "bg-card border border-border/50 paper-texture",
                isVisible && "animate-organic-entrance"
              )}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              {/* Project image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  )}
                />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* View project button */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <button className="group/btn flex items-center gap-2 text-primary font-medium transition-all duration-300 hover:gap-3">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/SADIK112"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 hover:bg-muted text-foreground font-medium transition-all duration-300 group",
              isVisible && "animate-fade-in"
            )}
          >
            <span>View More on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} onClose={closeModal} />
      </div>
    </section>
  );
};

export default ProjectsSection;