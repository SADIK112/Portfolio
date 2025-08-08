import { X, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Reset states when project changes
  useEffect(() => {
    setCurrentImage(0);
    setIsFullscreen(false);
  }, [project]);

  if (!project) return null;

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!project.images?.length) return;
    
    if (direction === 'next') {
      setCurrentImage((prev) => (prev + 1) % project.images!.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  // Get the current image to display (main image or from the images array)
  const displayImage = project.images && project.images.length > 0 
    ? project.images[currentImage] 
    : project.image;

  // Fullscreen image viewer
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Exit fullscreen"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          {project.images && project.images.length > 1 && (
            <>
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => navigateImage('next')}
                className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          
          <img 
            src={displayImage} 
            alt={project.title}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        
        <div className="absolute bottom-4 text-white/70 text-sm">
          {project.images && project.images.length > 1 && (
            <span>{currentImage + 1} of {project.images.length}</span>
          )}
        </div>
      </div>
    );
  }

  // Regular modal view
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project content */}
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Project images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden border border-border/50 bg-gray-100 aspect-video flex items-center justify-center group">
              <img 
                src={displayImage} 
                alt={project.title}
                className="w-full h-full object-contain p-2 cursor-zoom-in"
                onClick={toggleFullscreen}
              />
              <button 
                onClick={toggleFullscreen}
                className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="View fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            
            {/* Thumbnails */}
            {project.images?.length ? (
              <div className="grid grid-cols-3 gap-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                      currentImage === idx 
                        ? 'border-primary ring-2 ring-primary ring-offset-2' 
                        : 'border-border/30 hover:border-border/60'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {currentImage === idx && (
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                    )}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Project details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            {project.features && (
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <span>View Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              )}
              
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border rounded-lg flex items-center gap-2 hover:bg-accent/10 transition-colors"
                >
                  <span>Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
