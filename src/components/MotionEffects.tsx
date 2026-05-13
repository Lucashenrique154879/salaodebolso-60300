import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function MotionEffects() {
  const location = useLocation();
  const reduceMotion = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    for (const el of targets) el.classList.add("reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-revealed");
          io.unobserve(el);
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    for (const el of targets) io.observe(el);

    return () => io.disconnect();
  }, [reduceMotion, location.pathname]);

  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;

    let raf = 0;
    let ticking = false;

    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (!parallaxEls.length) return;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight || 1;

      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) continue;

        const speedRaw = el.getAttribute("data-parallax-speed");
        const speed = clamp(Number(speedRaw ?? "0.18"), -0.6, 0.6);
        const progress = clamp((rect.top + rect.height / 2) / vh, 0, 1);
        const offset = (progress - 0.5) * speed * 120;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [reduceMotion, location.pathname]);

  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;

    const pathname = location.pathname;
    if (pathname !== "/" && pathname !== "/afiliados") return;

    let reverted = false;
    let ctxRevert: (() => void) | undefined;

    const run = async () => {
      const mod = await import("gsap");
      if (reverted) return;

      const gsap = mod.gsap ?? (mod as unknown as { gsap: any }).gsap;
      if (!gsap) return;

      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-hero]"));
      if (!nodes.length) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          nodes,
          { opacity: 0, y: 22, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out", stagger: 0.08 },
        );
      });

      ctxRevert = () => ctx.revert();
    };

    void run();

    return () => {
      reverted = true;
      ctxRevert?.();
    };
  }, [reduceMotion, location.pathname]);

  return null;
}

