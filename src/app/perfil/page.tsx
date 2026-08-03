"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/hooks/useUserStore";
import { getQuizAnswers } from "@/lib/quiz-store";
import { BIOTIPO_LABELS, FAIXA_ETARIA_LABELS } from "@/lib/mock-data";

export default function PerfilPage() {
  const router = useRouter();
  const { user, logout } = useUserStore();
  const answers = getQuizAnswers();

  const biotipo = typeof answers.biotipo === "string" ? BIOTIPO_LABELS[answers.biotipo] : "—";
  const idade = typeof answers.idade === "string" ? FAIXA_ETARIA_LABELS[answers.idade] : "—";

  function handleLogout() {
    logout();
    router.push("/login");
  }

  const initials = (user?.name ?? "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <AppShell>
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-purple">Conta</p>
          <h1 className="mt-1 font-display text-[28px] font-extrabold text-text">Perfil</h1>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold/20 text-lg font-semibold text-gold">
            {initials || "?"}
          </div>
          <div>
            <p className="font-display text-lg font-bold text-text">{user?.name}</p>
            <p className="text-sm text-muted">{user?.email}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="mb-4 font-display text-base font-semibold text-text">
            Seu perfil calibrado
          </h2>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Biotipo</dt>
              <dd className="mt-1 text-sm text-text">{biotipo}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Faixa etária</dt>
              <dd className="mt-1 text-sm text-text">{idade}</dd>
            </div>
          </dl>
        </div>

        <Button variant="ghost" onClick={handleLogout} className="w-full">
          <LogOut className="size-4" />
          Sair da conta
        </Button>
      </div>
    </AppShell>
  );
}
