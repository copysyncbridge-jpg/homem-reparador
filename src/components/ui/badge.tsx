import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "success" | "muted" | "purple" | "danger";

const variantClasses: Record<BadgeVariant, string> = {
  gold: "bg-gold/20 text-gold",
  success: "bg-success/15 text-success",
  muted: "bg-surface2 text-muted",
  purple: "bg-purple/20 text-purple",
  danger: "bg-danger/15 text-danger",
};

export function Badge({
  children,
  variant = "gold",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
