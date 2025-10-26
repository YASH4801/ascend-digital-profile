import { ArrowLeft, Code, Wrench, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript/TypeScript", level: 60 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 }
    ]
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "PostgreSql", level: 90 },
      { name: "MySql", level: 90 },
      { name: "React.js", level: 20 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 70 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Communication", level: 92 },
      { name: "Problem Solving", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Mentoring", level: 87 }
    ]
  }
];

const Skills = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-4">Skills & Expertise</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiencies and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="glass-card animate-fade-in" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;