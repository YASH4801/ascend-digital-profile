import { Download, Briefcase, Trophy, GraduationCap, Code, FolderOpen, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Work Experience",
    icon: Briefcase,
    description: "Professional journey and achievements",
    path: "/work-experience",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Achievements",
    icon: Trophy,
    description: "Awards, recognition, and milestones",
    path: "/achievements",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Academic background and qualifications",
    path: "/education",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Skills",
    icon: Code,
    description: "Technical expertise and soft skills",
    path: "/skills",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Projects",
    icon: FolderOpen,
    description: "Portfolio of development work",
    path: "/projects",
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Contact",
    icon: Mail,
    description: "Get in touch for opportunities",
    path: "/contact",
    color: "from-indigo-500 to-blue-500"
  }
];

const Index = () => {
  const handleResumeDownload = () => {
    // This would normally download a real PDF file
    console.log("Downloading resume...");
    // For demo purposes, we'll just show an alert
    alert("Resume download would start here. Please add your actual resume file to the public folder.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={handleResumeDownload} className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bio */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="gradient-text">John Doe</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              Full Stack Developer & Software Engineer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{animationDelay: "0.2s"}}>
              Passionate about creating innovative solutions with modern technologies. 
              Experienced in React, Node.js, Java Spring, and cloud architectures. 
              Always eager to tackle new challenges and deliver exceptional user experiences.
            </p>

            <div className="flex justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
              <Button onClick={handleResumeDownload} className="gap-2 glow-primary">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 animate-slide-up" style={{animationDelay: "0.6s"}}>
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Twitter className="h-5 w-5" />
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Click on any section below to learn more about my background and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <Link key={section.title} to={section.path}>
                <Card className="section-card h-full animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4`}>
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{section.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
