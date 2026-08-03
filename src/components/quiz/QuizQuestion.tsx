"use client";

import { Input } from "@/components/ui/input";
import { QuizOption } from "@/components/quiz/QuizOption";
import { cn } from "@/lib/utils";
import type { QuizQuestionData } from "@/lib/mock-data";

export function QuizQuestion({
  question,
  value,
  onChange,
}: {
  question: QuizQuestionData;
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-purple">
          {question.eyebrow}
        </p>
        <h1 className="font-display text-2xl font-bold leading-[1.3] text-text">
          {question.title}
        </h1>
        {question.subtitle && <p className="mt-2 text-sm text-muted">{question.subtitle}</p>}
      </div>

      {question.type === "text" && (
        <Input
          autoFocus
          placeholder={question.placeholder}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {question.type === "single" && (
        <div className="flex flex-col gap-3">
          {question.options?.map((opt) => (
            <QuizOption
              key={opt.value}
              icon={opt.icon}
              label={opt.label}
              selected={value === opt.value}
              onClick={() => onChange(opt.value)}
            />
          ))}
        </div>
      )}

      {question.type === "multi" && (
        <div className="flex flex-col gap-3">
          {question.options?.map((opt) => {
            const list = Array.isArray(value) ? value : [];
            const selected = list.includes(opt.value);
            return (
              <QuizOption
                key={opt.value}
                icon={opt.icon}
                label={opt.label}
                selected={selected}
                multi
                onClick={() => {
                  const next = selected ? list.filter((v) => v !== opt.value) : [...list, opt.value];
                  onChange(next);
                }}
              />
            );
          })}
        </div>
      )}

      {question.type === "biotipo" && (
        <div className="grid grid-cols-3 gap-3">
          {question.options?.map((opt) => {
            const selected = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                className={cn(
                  "flex flex-col items-center gap-3 rounded-xl border px-3 py-6 text-center transition-colors duration-150",
                  selected
                    ? "border-gold bg-gold/10"
                    : "border-border bg-surface hover:border-gold/40 hover:bg-surface2"
                )}
              >
                <span className="text-4xl leading-none">{opt.icon}</span>
                <span className={cn("text-sm font-medium", selected ? "text-gold" : "text-text")}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
