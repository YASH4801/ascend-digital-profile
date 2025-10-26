import { LucideIcon, ArrowLeft, Trophy, Award, Medal, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "award" | "certification" | "recognition" | "milestone";
  icon: LucideIcon;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "OCI 2025 Certified AI Foundations Associate",
    description: "Successfully passed the OCI 2025 Certified AI Foundations Associate exam with 95% score",
    date: "October 2025",
    category: "certification",
    icon: Award
  },
  {
    id: "2",
    title: "Living Proof Level 2 Recognition",
    description: "Recognized for outstanding contributions to client Success, achieving Level 2 status 7th time",
    date: "September 2025",
    category: "award",
    icon: Medal
  },
  // {
  //   id: "3",
  //   title: "Open Source Contributor",
  //   description: "Top 100 contributor to React ecosystem with 500+ GitHub stars",
  //   date: "Ongoing",
  //   category: "recognition",
  //   icon: Star
  // },
  // {
  //   id: "4",
  //   title: "Project Lead Success",
  //   description: "Successfully delivered 5 major projects on time and under budget",
  //   date: "2022-2023",
  //   category: "milestone",
  //   icon: Target
  // },
  // {
  //   id: "5",
  //   title: "Innovation Award",
  //   description: "Created an internal tool that improved team productivity by 30%",
  //   date: "June 2022",
  //   category: "award",
  //   icon: Medal
  // },
  // {
  //   id: "6",
  //   title: "Technical Excellence",
  //   description: "Achieved 99.9% uptime for critical production systems",
  //   date: "2022",
  //   category: "milestone",
  //   icon: Target
  // }
];

const categoryColors = {
  award: "text-yellow-500",
  certification: "text-blue-500", 
  recognition: "text-purple-500",
  milestone: "text-green-500"
};

const Achievements = () => {
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
          <h1 className="text-4xl font-bold gradient-text mb-4">Achievements & Recognition</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones, awards, and recognition throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={achievement.id} className="glass-card animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-lg bg-primary/10 ${categoryColors[achievement.category]}`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
                <div className="mt-4">
                  <span className={`text-xs px-3 py-1 rounded-full bg-primary/10 ${categoryColors[achievement.category]} font-medium`}>
                    {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;