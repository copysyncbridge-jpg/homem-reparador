"use client";

import { FileText } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export function PdfDownloadButton({ name }: { name: string }) {
  const { showToast } = useToast();

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
      <FileText className="size-6 shrink-0 text-gold" />
      <span className="flex-1 truncate text-sm text-text">{name}</span>
      <button
        type="button"
        onClick={() => showToast("Em breve", "info")}
        className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
      >
        Baixar PDF
      </button>
    </div>
  );
}
