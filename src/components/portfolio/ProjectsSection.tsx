import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project, projects } from '@/data/projects';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'web' as const, label: 'Web Apps' },
    { id: 'mobile' as const, label: 'Mobile' },
    { id: 'fullstack' as const, label: 'Full-Stack' }
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

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Link
        to={`/projects/${project.id}`}
        className={cn(
          "group relative block overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover-lift",
          "bg-card border border-border/50 paper-texture",
          project.featured && "md:col-span-2",
          isVisible && "animate-organic-entrance"
        )}
        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered && "scale-110"
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
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )} />

          {/* Quick action buttons */}
          <div className={cn(
            "absolute top-4 right-4 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          )}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-foreground" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-foreground" />
            </a>
            <button
              onClick={() => navigate(`/projects/${project.id}`)}
              className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Project info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech, techIndex) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs font-medium">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* View project button */}
          <div className="flex items-center justify-between">
            <button className="group/btn flex items-center gap-2 text-primary font-medium transition-all duration-300 hover:gap-3">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
            
            <div className="flex gap-1">
              <div className={cn(
                "w-2 h-2 bg-primary rounded-full transition-all duration-300",
                isHovered && "animate-pulse-gentle"
              )} />
              <div className={cn(
                "w-2 h-2 bg-accent rounded-full transition-all duration-300",
                isHovered && "animate-pulse-gentle"
              )} style={{ animationDelay: '0.1s' }} />
              <div className={cn(
                "w-2 h-2 bg-sage rounded-full transition-all duration-300",
                isHovered && "animate-pulse-gentle"
              )} style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none",
          "bg-gradient-to-br from-primary/5 via-transparent to-accent/5",
          isHovered ? "opacity-100" : "opacity-0"
        )} />
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-6 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-full transition-colors',
                filter === f.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
            isVisible && "animate-slide-up-fade"
          )}>
            Featured Projects
          </h2>
          <div className={cn(
            "w-24 h-1 bg-primary rounded-full mx-auto mb-6",
            isVisible && "animate-draw-line"
          )} />
          <p className={cn(
            "text-fluid-lg text-muted-foreground max-w-2xl mx-auto",
            isVisible && "animate-slide-up-fade"
          )} style={{ animationDelay: '0.2s' }}>
            A collection of projects that showcase my passion for creating meaningful digital experiences with natural, intuitive design.
          </p>
        </div>

        {/* Filter buttons */}
        <div className={cn(
          "flex flex-wrap justify-center gap-3 mb-12",
          isVisible && "animate-slide-up-fade"
        )} style={{ animationDelay: '0.3s' }}>
          {filters.map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id as any)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift",
                filter === filterOption.id
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-card text-foreground border border-border/50 hover:border-primary/50"
              )}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className={cn(
          "mt-16 text-center",
          isVisible && "animate-organic-entrance"
        )} style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card rounded-full shadow-medium border border-border/50 hover-lift cursor-pointer group">
            <Play className="w-5 h-5 text-primary group-hover:animate-pulse-gentle" />
            <span className="text-foreground font-medium">See More Projects on GitHub</span>
            <ArrowRight className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-card rounded-3xl shadow-organic max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-organic-entrance"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover-lift"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;