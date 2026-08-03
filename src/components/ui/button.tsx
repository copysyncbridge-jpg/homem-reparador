"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline" | "danger";
type ButtonSize = "default" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-bg hover:bg-gold-light active:scale-[0.98] disabled:bg-surface2 disabled:text-muted disabled:hover:bg-surface2",
  ghost:
    "bg-transparent border border-border text-muted hover:text-text hover:border-gold/40 active:scale-[0.98]",
  outline:
    "bg-transparent border border-gold/30 text-gold hover:bg-gold/10 active:scale-[0.98]",
  danger:
    "bg-danger/10 border border-danger/30 text-danger hover:bg-danger/20 active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-[52px] px-6 text-[15px]",
  sm: "h-11 px-4 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", loading, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-[10px] font-display font-semibold transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="size-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
