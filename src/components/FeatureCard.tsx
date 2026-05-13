import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  accentColor = "bg-primary/10 text-primary",
}: FeatureCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-400 overflow-hidden p-7">
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none" />

      <div className="relative space-y-4">
        <div
          className={`inline-flex p-3 rounded-xl ${accentColor} group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <div>
          <h3 className="font-raleway font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-lora">{description}</p>
        </div>
      </div>
    </div>
  );
};
