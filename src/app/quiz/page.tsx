"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { QUIZ_QUESTIONS } from "@/lib/mock-data";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/hooks/useQuizStore";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { getRedirectPath } from "@/lib/auth-guard";
import { isQuizDone } from "@/lib/quiz-store";

export default function QuizPage() {
  const router = useRouter();
  const { checking } = useAuthGuard("user");
  const { answers, ready, answer, finish } = useQuizStore();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!checking && isQuizDone()) {
      router.replace(getRedirectPath("quiz") ?? "/dashboard");
    }
  }, [checking, router]);

  if (checking || !ready) {
    return <div className="min-h-screen bg-bg" />;
  }

  const question = QUIZ_QUESTIONS[index];
  const total = QUIZ_QUESTIONS.length;
  const currentValue = answers[question.id];
  const hasAnswer =
    question.type === "multi"
      ? Array.isArray(currentValue) && currentValue.length > 0
      : Boolean(currentValue) && (currentValue as string).trim().length > 0;

  function handleAdvance() {
    if (!hasAnswer) return;
    if (index === total - 1) {
      finish();
      router.push("/loading-ia");
    } else {
      setIndex((i) => i + 1);
    }
  }

  function handleBack() {
    if (index > 0) setIndex((i) => i - 1);
  }

  function handleExit() {
    router.push("/login");
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <QuizProgress
        current={index + 1}
        total={total}
        showBack={index > 0}
        onBack={handleBack}
        onExit={handleExit}
      />

      <div className="flex flex-1 flex-col overflow-hidden px-5 pt-4">
        <div className="mx-auto w-full max-w-md flex-1 overflow-y-auto pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <QuizQuestion
                question={question}
                value={currentValue}
                onChange={(value) => answer(question.id, value)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {hasAnswer && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 border-t border-border bg-bg/95 px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4 backdrop-blur"
          >
            <div className="mx-auto w-full max-w-md">
              <Button className="w-full" onClick={handleAdvance}>
                {index === total - 1 ? "Ver meu protocolo →" : "Avançar"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
