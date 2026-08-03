"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, CheckCircle2, X } from "lucide-react";
import { VideoPlayer } from "@/components/aula/VideoPlayer";
import { PdfDownloadButton } from "@/components/aula/PdfDownloadButton";
import { LessonNav } from "@/components/aula/LessonNav";
import { Badge } from "@/components/ui/badge";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { TRUQUES } from "@/lib/mock-data";
import { isLessonComplete, setLessonComplete } from "@/lib/user-store";

export default function AulaPage({
  params,
}: {
  params: Promise<{ slug: string; aulaId: string }>;
}) {
  const { slug, aulaId } = use(params);
  const router = useRouter();
  const { checking } = useAuthGuard("full");
  const [burstKey, setBurstKey] = useState(0);

  const truque = TRUQUES.find((t) => t.slug === slug);
  const lessonIndex = truque?.lessons.findIndex((l) => l.id === aulaId) ?? -1;
  const lesson = truque && lessonIndex !== -1 ? truque.lessons[lessonIndex] : null;

  const [completed, setCompleted] = useState(() =>
    lesson ? isLessonComplete(slug, lesson.id) : false
  );

  if (checking) {
    return <div className="min-h-screen bg-bg" />;
  }

  if (!truque || !lesson) {
    notFound();
  }

  const prevLesson = truque.lessons[lessonIndex - 1] ?? null;
  const nextLesson = truque.lessons[lessonIndex + 1] ?? null;
  const lessonId = lesson.id;

  function handleToggleComplete() {
    const next = !completed;
    setLessonComplete(slug, lessonId, next);
    setCompleted(next);
    if (next) setBurstKey((k) => k + 1);
  }

  return (
    <div className="min-h-screen bg-bg">
      <header className="flex h-14 items-center justify-between border-b border-border px-4">
        <Link
          href={`/truques/${slug}`}
          className="flex items-center gap-1 text-sm text-muted hover:text-text"
        >
          <ChevronLeft className="size-4" />
          {truque.title}
        </Link>
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="flex size-8 items-center justify-center text-muted hover:text-text"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>
      </header>

      <div className="mx-auto flex max-w-2xl flex-col gap-6 pb-10 md:px-6 md:pt-6">
        <VideoPlayer index={lesson.index} title={lesson.title} />

        <div className="flex flex-col gap-2 px-5 md:px-0">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-[22px] font-bold text-text">{lesson.title}</h1>
          </div>
          <Badge variant="muted" className="w-fit normal-case">
            {lesson.duration}
          </Badge>
        </div>

        <div className="mx-5 rounded-xl border border-border bg-surface px-6 py-5 md:mx-0">
          <div
            className="prose-invert text-[15px] leading-[1.75] text-text [&_em]:text-muted [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:text-gold [&_ul]:list-disc [&_ul]:pl-5"
            dangerouslySetInnerHTML={{ __html: lesson.descriptionHtml }}
          />
        </div>

        {lesson.pdfs.length > 0 && (
          <div className="flex flex-col gap-3 px-5 md:px-0">
            <h2 className="font-display text-base font-semibold text-text">
              📥 Materiais da Aula
            </h2>
            {lesson.pdfs.map((pdf) => (
              <PdfDownloadButton key={pdf.id} name={pdf.name} />
            ))}
          </div>
        )}

        <div className="relative px-5 md:px-0">
          <button
            type="button"
            onClick={handleToggleComplete}
            className={
              completed
                ? "flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-success bg-success/10 text-sm font-semibold text-success"
                : "flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border text-sm font-medium text-muted hover:text-text"
            }
          >
            <CheckCircle2 className="size-4" />
            {completed ? "Concluída ✓" : "Marcar como concluída"}
          </button>

          <AnimatePresence>
            {burstKey > 0 && (
              <ConfettiBurst key={burstKey} />
            )}
          </AnimatePresence>
        </div>

        <div className="px-5 md:px-0">
          <LessonNav
            slug={slug}
            prevLessonId={prevLesson?.id ?? null}
            nextLessonId={nextLesson?.id ?? null}
          />
        </div>
      </div>
    </div>
  );
}

function ConfettiBurst() {
  const particles = [-24, 0, 24];
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
      {particles.map((x, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1, x, y: 0, scale: 1 }}
          animate={{ opacity: 0, y: -32, scale: 0.6 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="absolute size-2 rounded-full bg-gold"
        />
      ))}
    </div>
  );
}
