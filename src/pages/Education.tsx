import { ArrowLeft, GraduationCap, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Education {
  id: string;
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  aggregate: string;
  type: "degree" | "certification";
}

const educationData: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    startYear: "2016",
    endYear: "2020",
    aggregate: "8.5/10 CGPA",
    type: "degree"
  },
  {
    id: "2",
    institution: "AWS Certified",
    degree: "Solutions Architect Associate",
    startYear: "2021",
    endYear: "2024",
    aggregate: "Certified",
    type: "certification"
  },
  {
    id: "3",
    institution: "Google",
    degree: "Professional Cloud Architect",
    startYear: "2022",
    endYear: "2025",
    aggregate: "Certified",
    type: "certification"
  }
];

const Education = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-4">Education & Qualifications</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <Card key={edu.id} className="glass-card animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {edu.type === "degree" ? (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    ) : (
                      <Award className="h-6 w-6 text-accent" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-1">{edu.institution}</CardTitle>
                    <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.startYear} - {edu.endYear}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Score:</span>
                        <span className="text-accent font-semibold">{edu.aggregate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;