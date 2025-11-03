import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="group border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-white hover:scale-105 animate-fade-in">
      <CardContent className="p-8">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed mb-6 italic">"{content}"</p>
        <div className="flex items-center gap-4">
          {image && (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-bold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
