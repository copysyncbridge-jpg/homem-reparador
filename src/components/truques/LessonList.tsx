"use client";

import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LessonData } from "@/lib/mock-data";

export function LessonList({
  slug,
  lessons,
  completedIds,
}: {
  slug: string;
  lessons: LessonData[];
  completedIds: Set<string>;
}) {
  return (
    <div className="flex flex-col gap-2">
      {lessons.map((lesson) => {
        const done = completedIds.has(lesson.id);
        return (
          <Link
            key={lesson.id}
            href={`/aula/${slug}/${lesson.id}`}
            className={cn(
              "flex items-center gap-3 rounded-xl bg-surface2 px-4 py-3 transition-colors hover:bg-surface2/70"
            )}
          >
            {done ? (
              <CheckCircle2 className="size-5 shrink-0 text-gold" />
            ) : (
              <Circle className="size-5 shrink-0 text-muted" />
            )}
            <div className="flex-1">
              <p className="font-display text-[15px] font-semibold text-text">
                {lesson.index}. {lesson.title}
              </p>
              <p className="text-xs text-muted">{lesson.duration}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
