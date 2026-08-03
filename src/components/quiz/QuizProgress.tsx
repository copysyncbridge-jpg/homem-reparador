"use client";

import { ChevronLeft, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function QuizProgress({
  current,
  total,
  showBack,
  onBack,
  onExit,
}: {
  current: number;
  total: number;
  showBack: boolean;
  onBack: () => void;
  onExit: () => void;
}) {
  return (
    <div className="flex h-14 shrink-0 items-center gap-3 px-4">
      <button
        type="button"
        onClick={onBack}
        className="flex size-9 shrink-0 items-center justify-center text-muted disabled:opacity-0"
        disabled={!showBack}
        aria-label="Voltar"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="flex flex-1 items-center gap-3">
        <Progress value={(current / total) * 100} className="flex-1" />
        <span className="whitespace-nowrap text-xs text-muted">
          {current} de {total}
        </span>
      </div>

      <button
        type="button"
        onClick={onExit}
        className="flex size-9 shrink-0 items-center justify-center text-muted hover:text-text"
        aria-label="Sair"
      >
        <X className="size-5" />
      </button>
    </div>
  );
}
