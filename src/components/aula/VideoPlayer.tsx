"use client";

import { PlayCircle } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export function VideoPlayer({ index, title }: { index: number; title: string }) {
  const { showToast } = useToast();

  return (
    <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden bg-surface2 md:rounded-xl">
      <button
        type="button"
        onClick={() => showToast("Vídeo em breve disponível", "info")}
        className="flex size-16 items-center justify-center rounded-full border border-gold bg-gold/20 transition-transform hover:scale-105"
        aria-label="Reproduzir vídeo"
      >
        <PlayCircle className="size-8 text-gold" />
      </button>
      <p className="px-6 text-center font-display text-base font-semibold text-text">
        Aula {index} — {title}
      </p>
    </div>
  );
}
