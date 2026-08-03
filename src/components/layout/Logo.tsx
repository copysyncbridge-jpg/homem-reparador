import { cn } from "@/lib/utils";

export function Logo({ className, size = "default" }: { className?: string; size?: "default" | "sm" }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <span
        className={cn(
          "font-display font-black text-gold leading-none",
          size === "default" ? "text-4xl" : "text-xl"
        )}
      >
        HOMEM
      </span>
      <span className="my-1.5 h-px w-10 bg-border" />
      <span
        className={cn(
          "font-display font-bold text-text tracking-[0.2em] leading-none",
          size === "default" ? "text-[22px]" : "text-xs"
        )}
      >
        REPARADOR
      </span>
    </div>
  );
}
