import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group border-2 border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br from-white to-accent/10 hover:scale-105 animate-fade-in">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
