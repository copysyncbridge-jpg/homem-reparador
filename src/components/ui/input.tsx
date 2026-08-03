import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-[52px] w-full rounded-[10px] border border-border bg-surface2 px-4 text-[15px] text-text placeholder:text-muted outline-none transition-colors focus:border-gold focus:ring-4 focus:ring-gold/20",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
      {children}
    </label>
  );
}
