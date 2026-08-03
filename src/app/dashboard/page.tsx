"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { StatsBar } from "@/components/dashboard/StatsBar";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { useUserStore } from "@/hooks/useUserStore";
import { countCompletedInTruque, countTotalCompleted } from "@/lib/user-store";
import { getQuizAnswers } from "@/lib/quiz-store";
import {
  TRUQUES,
  BIOTIPO_LABELS,
  FAIXA_ETARIA_LABELS,
  getTodayTip,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const { user } = useUserStore();
  const availableTruques = TRUQUES.filter((t) => t.status === "available");

  const answers = getQuizAnswers();
  const biotipo = typeof answers.biotipo === "string" ? BIOTIPO_LABELS[answers.biotipo] : null;
  const idade = typeof answers.idade === "string" ? FAIXA_ETARIA_LABELS[answers.idade] : null;
  const perfilLabel = biotipo && idade ? `Perfil: ${biotipo} · ${idade}` : null;

  const totalLessons = availableTruques.reduce((acc, t) => acc + t.lessons.length, 0);
  const completedLessons = countTotalCompleted();
  const percentConcluido =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const modulosConcluidos = availableTruques.filter(
    (t) => t.lessons.length > 0 && countCompletedInTruque(t.slug) === t.lessons.length
  ).length;

  return (
    <AppShell>
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <WelcomeBanner name={user?.name ?? ""} perfilLabel={perfilLabel} />

        <StatsBar
          dia={1}
          modulosConcluidos={modulosConcluidos}
          modulosTotal={availableTruques.length}
          percentConcluido={percentConcluido}
        />

        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-text">Truques Masculinos</h2>
            <p className="text-sm text-muted">Desbloqueados para você</p>
          </div>
          <Link href="/truques" className="text-sm font-medium text-gold hover:text-gold-light">
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {availableTruques.map((truque) => (
            <ModuleCard
              key={truque.slug}
              truque={truque}
              completedCount={countCompletedInTruque(truque.slug)}
            />
          ))}
        </div>

        <div className="rounded-[10px] border-l-[3px] border-purple bg-surface2 px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-purple">
            💡 Sabia que?
          </p>
          <p className="mt-1.5 text-sm italic text-text">{getTodayTip()}</p>
        </div>
      </div>
    </AppShell>
  );
}
