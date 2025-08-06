import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUp, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

// Import or define the Project type
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack';
}

// This would ideally come from a data file or API
import { projects } from '@/data/projects';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real app, you would fetch the project data here
    const foundProject = projects.find(p => p.id === id) || null;
    setProject(foundProject);

    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Back button */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all projects
        </Link>
      </div>

      {/* Project header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project links */}
        <div className="flex gap-4 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>

      {/* Project thumbnail */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project content */}
      <div 
        ref={contentRef}
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-a:transition-colors"
      >
        <h2>About the Project</h2>
        <p className="text-lg">{project.longDescription}</p>
        
        {/* Add more project details here as needed */}
        <h3>Key Features</h3>
        <ul>
          <li>Responsive design that works on all devices</li>
          <li>Modern UI with smooth animations</li>
          <li>Optimized for performance and accessibility</li>
          {/* Add more features as needed */}
        </ul>

        {/* Add more sections like challenges, solutions, etc. */}
        <h3>Technologies Used</h3>
        <div className="flex flex-wrap gap-2 my-4">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-background border border-border rounded-full shadow-lg hover:bg-muted/50 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProjectDetails;
