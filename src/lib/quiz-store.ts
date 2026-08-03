// Persistência mock das respostas do quiz via localStorage.

export type QuizAnswers = Record<string, string | string[]>;

const QUIZ_KEY = "hr_quiz";
const QUIZ_DONE_KEY = "hr_quiz_done";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getQuizAnswers(): QuizAnswers {
  if (!isBrowser()) return {};
  const raw = window.localStorage.getItem(QUIZ_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as QuizAnswers;
  } catch {
    return {};
  }
}

export function setQuizAnswer(questionId: string, value: string | string[]) {
  if (!isBrowser()) return;
  const answers = getQuizAnswers();
  answers[questionId] = value;
  window.localStorage.setItem(QUIZ_KEY, JSON.stringify(answers));
}

export function isQuizDone(): boolean {
  if (!isBrowser()) return false;
  return window.localStorage.getItem(QUIZ_DONE_KEY) === "true";
}

export function setQuizDone() {
  if (!isBrowser()) return;
  window.localStorage.setItem(QUIZ_DONE_KEY, "true");
}

export function clearQuiz() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(QUIZ_KEY);
  window.localStorage.removeItem(QUIZ_DONE_KEY);
}
