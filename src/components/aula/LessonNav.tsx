"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LessonNav({
  slug,
  prevLessonId,
  nextLessonId,
}: {
  slug: string;
  prevLessonId: string | null;
  nextLessonId: string | null;
}) {
  const router = useRouter();

  return (
    <div className="flex gap-3">
      <Button
        variant="ghost"
        className="flex-1"
        disabled={!prevLessonId}
        onClick={() => prevLessonId && router.push(`/aula/${slug}/${prevLessonId}`)}
      >
        <ChevronLeft className="size-4" />
        Aula anterior
      </Button>
      <Button
        variant="primary"
        className="flex-1"
        disabled={!nextLessonId}
        onClick={() => nextLessonId && router.push(`/aula/${slug}/${nextLessonId}`)}
      >
        Próxima aula
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
