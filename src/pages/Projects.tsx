import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  sourceUrl: string;
  liveUrl: string;
  techStack: string[];
}

const projects: Project[] = [
//   {
//     id: "1",
//     title: "E-Commerce Platform",
//     description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
//     icon: "🛒",
//     sourceUrl: "https://github.com/user/ecommerce",
//     liveUrl: "https://ecommerce-demo.com",
//     techStack: ["React", "Node.js", "MongoDB", "Stripe"]
//   },
//   {
//     id: "2",
//     title: "Task Management App",
//     description: "Collaborative task management with real-time updates and team features",
//     icon: "📋",
//     sourceUrl: "https://github.com/user/taskmanager",
//     liveUrl: "https://taskmanager-demo.com",
//     techStack: ["React", "Firebase", "Material-UI"]
//   },
//   {
//     id: "3",
//     title: "Weather Dashboard",
//     description: "Beautiful weather dashboard with location-based forecasts",
//     icon: "🌤️",
//     sourceUrl: "https://github.com/user/weather",
//     liveUrl: "https://weather-demo.com",
//     techStack: ["Vue.js", "OpenWeather API", "Chart.js"]
//   },
//   {
//     id: "4",
//     title: "Social Media App",
//     description: "Instagram-like social media platform with photo sharing",
//     icon: "📱",
//     sourceUrl: "https://github.com/user/social",
//     liveUrl: "https://social-demo.com",
//     techStack: ["React Native", "Express", "PostgreSQL"]
//   },
  {
    id: "1",
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern design and animations",
    icon: "💼",
    sourceUrl: "https://github.com/YASH4801/ascend-digital-profile",
    liveUrl: "https://personal-profile-yash-narang.netlify.app/",
    techStack: ["TypeScript", "Tailwind CSS", "React", "Vite"]
  },
  // {
  //   id: "6",
  //   title: "Crypto Tracker",
  //   description: "Real-time cryptocurrency price tracker with portfolio management",
  //   icon: "₿",
  //   sourceUrl: "https://github.com/user/crypto",
  //   liveUrl: "https://crypto-demo.com",
  //   techStack: ["React", "CoinGecko API", "Redux"]
  // }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">My Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my development work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-card animate-fade-in group" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      onClick={() => window.open(project.sourceUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;