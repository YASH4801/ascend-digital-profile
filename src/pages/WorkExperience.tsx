import { ArrowLeft, Building2, Calendar, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  duration: string;
  techStack: string[];
  description: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Corp Inc.",
    logo: "🏢",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    techStack: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced application load time by 40% through optimization",
      "Mentored 5 junior developers and established code review processes"
    ]
  },
  {
    id: "2",
    company: "StartupXYZ",
    logo: "🚀",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    techStack: ["React", "Redux", "JavaScript", "Sass", "Firebase"],
    description: [
      "Built responsive web applications from scratch",
      "Collaborated with UX team to implement pixel-perfect designs",
      "Integrated third-party APIs and payment systems"
    ]
  }
];

const WorkExperience = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-4">Work Experience</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through my professional development and key contributions
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="glass-card animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exp.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-2">{exp.company}</CardTitle>
                    <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default WorkExperience;