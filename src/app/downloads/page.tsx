"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PdfDownloadButton } from "@/components/aula/PdfDownloadButton";
import { TRUQUES } from "@/lib/mock-data";

export default function DownloadsPage() {
  const truquesComPdfs = TRUQUES.filter(
    (t) => t.status === "available" && t.lessons.some((l) => l.pdfs.length > 0)
  );

  return (
    <AppShell>
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-purple">
            Materiais
          </p>
          <h1 className="mt-1 font-display text-[28px] font-extrabold text-text">Downloads</h1>
          <p className="mt-1 text-sm text-muted">Todos os PDFs liberados no seu protocolo</p>
        </div>

        {truquesComPdfs.map((truque) => (
          <div key={truque.slug} className="flex flex-col gap-3">
            <h2 className="font-display text-base font-semibold text-text">
              {truque.icon} {truque.title}
            </h2>
            {truque.lessons
              .flatMap((l) => l.pdfs)
              .map((pdf) => (
                <PdfDownloadButton key={pdf.id} name={pdf.name} />
              ))}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
