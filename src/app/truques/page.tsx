"use client";

import { AppShell } from "@/components/layout/AppShell";
import { TruqueCard } from "@/components/truques/TruqueCard";
import { useUserStore } from "@/hooks/useUserStore";
import { TRUQUES } from "@/lib/mock-data";

export default function TruquesPage() {
  const { user } = useUserStore();

  return (
    <AppShell>
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-purple">
            Módulos
          </p>
          <h1 className="mt-1 font-display text-[28px] font-extrabold text-text">
            Truques Masculinos
          </h1>
          <p className="mt-1 text-sm text-muted">Protocolo calibrado para {user?.name ?? ""}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TRUQUES.map((truque) => (
            <TruqueCard key={truque.slug} truque={truque} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
