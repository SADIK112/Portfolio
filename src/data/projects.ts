export interface Project {
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

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'EcoCommerce Platform',
    description: 'Sustainable e-commerce platform with carbon footprint tracking',
    longDescription: 'A full-featured e-commerce platform focused on sustainability, featuring real-time carbon footprint calculation, eco-friendly product recommendations, and integrated offset programs. Built with modern web technologies to deliver a seamless shopping experience while promoting environmental responsibility.',
    image: '/api/placeholder/1200/600',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    liveUrl: 'https://eco-commerce-demo.com',
    githubUrl: 'https://github.com/example/eco-commerce',
    featured: true,
    category: 'fullstack'
  },
  {
    id: 'task-manager',
    title: 'Zen Task Manager',
    description: 'Mindful productivity app with natural themes and focus modes',
    longDescription: 'A beautiful task management application that promotes mindful productivity through natural themes, breathing exercises, and distraction-free focus modes. Features include task organization, progress tracking, and integration with calendar apps.',
    image: '/api/placeholder/1200/600',
    tech: ['Vue.js', 'TypeScript', 'Supabase', 'Tailwind'],
    liveUrl: 'https://zen-tasks-demo.com',
    githubUrl: 'https://github.com/example/zen-tasks',
    featured: true,
    category: 'web'
  },
  {
    id: 'fitness-tracker',
    title: 'Nature Fitness Tracker',
    description: 'Outdoor fitness tracking with environmental awareness',
    longDescription: 'Mobile fitness application that encourages outdoor activities while providing environmental data about workout locations. Tracks routes, calories, and environmental impact, with challenges and community features to stay motivated.',
    image: '/api/placeholder/1200/600',
    tech: ['React Native', 'Firebase', 'Maps API', 'TensorFlow'],
    liveUrl: 'https://nature-fitness-demo.com',
    githubUrl: 'https://github.com/example/nature-fitness',
    featured: false,
    category: 'mobile'
  },
  {
    id: 'design-system',
    title: 'Organic Design System',
    description: 'Component library inspired by natural forms and movements',
    longDescription: 'A comprehensive design system and component library featuring organic animations, natural color palettes, and accessibility-first components. Built to ensure consistency across products while maintaining flexibility for different use cases.',
    image: '/api/placeholder/1200/600',
    tech: ['React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
    liveUrl: 'https://organic-design-system.com',
    githubUrl: 'https://github.com/example/organic-design',
    featured: false,
    category: 'web'
  },
  {
    id: 'weather-app',
    title: 'Mindful Weather',
    description: 'Weather app with meditation suggestions based on conditions',
    longDescription: 'Weather application that suggests mindfulness activities and meditations based on current weather conditions and seasonal changes. Features include detailed forecasts, air quality index, and personalized activity recommendations.',
    image: '/api/placeholder/1200/600',
    tech: ['Next.js', 'Weather API', 'Framer Motion', 'Tailwind'],
    liveUrl: 'https://mindful-weather-demo.com',
    githubUrl: 'https://github.com/example/mindful-weather',
    featured: false,
    category: 'web'
  },
  {
    id: 'budget-tracker',
    title: 'Green Budget Tracker',
    description: 'Personal finance with sustainability scoring',
    longDescription: 'Budget tracking application that scores purchases based on environmental impact and suggests sustainable alternatives. Features include expense categorization, spending insights, and carbon footprint tracking for your spending habits.',
    image: '/api/placeholder/1200/600',
    tech: ['React', 'Python', 'ML APIs', 'Chart.js'],
    liveUrl: 'https://green-budget-demo.com',
    githubUrl: 'https://github.com/example/green-budget',
    featured: true,
    category: 'fullstack'
  }
];
