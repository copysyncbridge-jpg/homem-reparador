import Link from "next/link";
import { Lock, PlayCircle, FileText, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { TruqueData } from "@/lib/mock-data";

export function TruqueCard({ truque }: { truque: TruqueData }) {
  const locked = truque.status === "locked";
  const pdfsCount = truque.lessons.reduce((acc, l) => acc + l.pdfs.length, 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative flex h-[120px] items-center justify-center border-b border-border bg-surface2">
        <div
          className="absolute inset-0 blur-2xl"
          style={{
            background:
              truque.themeColor === "purple"
                ? "rgba(123,92,240,0.15)"
                : "rgba(201,168,76,0.15)",
          }}
        />
        <span className="relative text-5xl">{truque.icon}</span>

        {locked && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg/70">
            <Lock className="size-8 text-muted" />
          </div>
        )}

        <Badge
          variant={locked ? "muted" : "success"}
          className="absolute right-3 top-3"
        >
          {locked ? "Em breve" : "Disponível"}
        </Badge>
      </div>

      <div className="flex flex-col gap-3 px-5 py-4">
        <div>
          <h3 className="font-display text-lg font-bold text-text">{truque.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted">{truque.description}</p>
        </div>

        {!locked && (
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <PlayCircle className="size-3.5" />
              {truque.lessons.length} aulas
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="size-3.5" />
              {pdfsCount} PDFs
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {truque.duration}
            </span>
          </div>
        )}

        {locked ? (
          <button
            disabled
            className="flex h-11 w-full cursor-not-allowed items-center justify-center rounded-xl bg-surface2 text-sm font-semibold text-muted"
          >
            Bloqueado
          </button>
        ) : (
          <Link
            href={`/truques/${truque.slug}`}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-gold text-sm font-semibold text-bg transition-colors hover:bg-gold-light"
          >
            Acessar →
          </Link>
        )}
      </div>
    </div>
  );
}
