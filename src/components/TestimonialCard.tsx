import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  image,
}: TestimonialCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-400 p-7 flex flex-col gap-5">
      {/* Quote icon */}
      <div className="flex items-start justify-between">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
          ))}
        </div>
        <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
      </div>

      {/* Content */}
      <p className="text-foreground/80 leading-relaxed font-lora italic text-sm flex-1">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="font-raleway font-bold text-primary text-sm">{initials}</span>
          )}
        </div>
        <div>
          <p className="font-raleway font-semibold text-sm text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground font-lora">{role}</p>
        </div>
      </div>
    </div>
  );
};
