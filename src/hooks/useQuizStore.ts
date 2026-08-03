"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getQuizAnswers,
  setQuizAnswer as persistAnswer,
  setQuizDone as persistDone,
  type QuizAnswers,
} from "@/lib/quiz-store";

export function useQuizStore() {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe read of localStorage on mount
    setAnswers(getQuizAnswers());
    setReady(true);
  }, []);

  const answer = useCallback((questionId: string, value: string | string[]) => {
    persistAnswer(questionId, value);
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const finish = useCallback(() => {
    persistDone();
  }, []);

  return { answers, ready, answer, finish };
}
