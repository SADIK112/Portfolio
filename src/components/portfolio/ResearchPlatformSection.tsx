import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Brain, GraduationCap, Users, Zap, BarChart3, Clock, Globe } from 'lucide-react';
import soloProject from '@/assets/solo-project.png';

const ResearchPlatformSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '50,000+', label: 'Professor Profiles', icon: GraduationCap },
    { value: '$2B+', label: 'Funding Tracked', icon: BarChart3 },
    { value: '6M+', label: 'Graduate Students', icon: Users },
    { value: '40-60h', label: 'Time Saved', icon: Clock },
  ];

  return (
    <section 
      id="research-platform"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Graduate Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing how students connect with research opportunities and funding
          </p>
        </div>

        <div className={cn(
          "bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-8 md:p-12 mb-16",
          "transform transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                The <span className="text-primary">LinkedIn for Emerging Researchers</span>
              </h3>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Building an AI-powered platform that transforms the way graduate students discover research opportunities and funding. 
                Our intelligent matching system connects you with compatible professors and tailored funding opportunities in minutes, 
                not months.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Intelligent Matching</h4>
                    <p className="text-muted-foreground text-sm">AI-powered compatibility scoring for perfect professor-student matches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">Access to 50,000+ professor profiles worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Funding Intelligence</h4>
                    <p className="text-muted-foreground text-sm">$2B+ in tracked funding opportunities at your fingertips</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-xl p-4">
                <p className="font-medium mb-2">Join the waitlist for early access</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  />
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl">
                <img 
                  src={soloProject}
                  alt="ResearchMatch Platform Preview"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={cn(
                      "bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border/50",
                      "transform transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            I am on a mission to transform the $4.7 trillion global education services market, 
            starting with the $3B+ graduate research segment. Join me in revolutionizing 
            academic discovery.
          </p>
          <button disabled className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:opacity-90 transition-opacity">
            Learn More About Our Vision
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchPlatformSection;
