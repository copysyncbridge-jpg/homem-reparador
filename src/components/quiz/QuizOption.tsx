"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizOption({
  icon,
  label,
  selected,
  multi,
  onClick,
}: {
  icon: string;
  label: string;
  selected: boolean;
  multi?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors duration-150",
        selected
          ? "border-gold bg-gold/10"
          : "border-border bg-surface hover:border-gold/40 hover:bg-surface2"
      )}
    >
      <span className="text-2xl leading-none">{icon}</span>
      <span className={cn("flex-1 text-[15px] font-medium", selected ? "text-gold" : "text-text")}>
        {label}
      </span>
      {multi && (
        <span
          className={cn(
            "flex size-5 shrink-0 items-center justify-center rounded-md border",
            selected ? "border-gold bg-gold text-bg" : "border-border"
          )}
        >
          {selected && <Check className="size-3.5" strokeWidth={3} />}
        </span>
      )}
    </button>
  );
}
