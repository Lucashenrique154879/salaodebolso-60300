import { useEffect, useState } from "react";

export default function RouteLoading() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        <div className="mx-auto w-28 h-28 relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/25 to-secondary/25 blur-2xl" />
          <div className="absolute inset-0 grid place-items-center">
            <div
              className={[
                "w-16 h-16 rounded-2xl border border-border bg-card",
                "shadow-premium",
                "animate-[spin_1.8s_linear_infinite]",
                "origin-center",
              ].join(" ")}
              style={{ transform: "rotate(20deg)" }}
              aria-hidden="true"
            />
            <div
              className={[
                "absolute w-10 h-10 rounded-xl border border-border bg-card",
                "animate-[spin_1.1s_linear_infinite_reverse]",
              ].join(" ")}
              style={{ transform: "rotate(-12deg)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="text-sm font-raleway font-semibold text-muted-foreground">
            Carregando…
          </div>
          <div className={["mt-2 text-xs font-lora text-muted-foreground/80 transition-opacity duration-500", visible ? "opacity-100" : "opacity-0"].join(" ")}>
            Preparando uma experiência premium.
          </div>
        </div>
      </div>
    </div>
  );
}

