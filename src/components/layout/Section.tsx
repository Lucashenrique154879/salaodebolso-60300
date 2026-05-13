import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted";
  reveal?: boolean;
};

export default function Section({ children, className, id, tone = "default", reveal = true }: Props) {
  return (
    <section
      id={id}
      data-reveal={reveal ? "" : undefined}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "muted" && "bg-muted/30",
        className,
      )}
    >
      {children}
    </section>
  );
}

