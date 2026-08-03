"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Progress } from "@/components/ui/progress";
import { LessonList } from "@/components/truques/LessonList";
import { TRUQUES } from "@/lib/mock-data";
import { getProgress } from "@/lib/user-store";

export default function TruqueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const truque = TRUQUES.find((t) => t.slug === slug);

  if (!truque || truque.status === "locked") {
    notFound();
  }

  const progress = getProgress();
  const completedIds = new Set(
    Object.entries(progress[truque.slug] ?? {})
      .filter(([, done]) => done)
      .map(([id]) => id)
  );

  const total = truque.lessons.length;
  const completedCount = completedIds.size;
  const currentLesson = Math.min(completedCount + 1, total);

  return (
    <AppShell>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div>
          <Link
            href="/truques"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted hover:text-text"
          >
            <ChevronLeft className="size-4" />
            Truques
          </Link>
          <h1 className="font-display text-[26px] font-extrabold text-text">{truque.title}</h1>

          <div className="mt-4 flex items-center gap-3">
            <Progress value={(completedCount / total) * 100} className="flex-1" />
            <span className="whitespace-nowrap text-xs text-muted">
              Aula {currentLesson} de {total}
            </span>
          </div>
        </div>

        <LessonList slug={truque.slug} lessons={truque.lessons} completedIds={completedIds} />
      </div>
    </AppShell>
  );
}
