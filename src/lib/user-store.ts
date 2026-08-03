// Persistência mock do usuário via localStorage. Sem backend real.

export type HrUser = {
  name: string;
  email: string;
};

export type LessonProgress = Record<string, Record<string, boolean>>;

const USER_KEY = "hr_user";
const IA_DONE_KEY = "hr_ia_done";
const PROGRESS_KEY = "hr_progress";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getUser(): HrUser | null {
  if (!isBrowser()) return null;
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as HrUser;
  } catch {
    return null;
  }
}

export function setUser(user: HrUser) {
  if (!isBrowser()) return;
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function isIaDone(): boolean {
  if (!isBrowser()) return false;
  return window.localStorage.getItem(IA_DONE_KEY) === "true";
}

export function setIaDone() {
  if (!isBrowser()) return;
  window.localStorage.setItem(IA_DONE_KEY, "true");
}

export function getProgress(): LessonProgress {
  if (!isBrowser()) return {};
  const raw = window.localStorage.getItem(PROGRESS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as LessonProgress;
  } catch {
    return {};
  }
}

export function isLessonComplete(slug: string, lessonId: string): boolean {
  const progress = getProgress();
  return Boolean(progress[slug]?.[lessonId]);
}

export function setLessonComplete(slug: string, lessonId: string, complete: boolean) {
  if (!isBrowser()) return;
  const progress = getProgress();
  progress[slug] = { ...progress[slug], [lessonId]: complete };
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function countCompletedInTruque(slug: string): number {
  const progress = getProgress();
  const truqueProgress = progress[slug];
  if (!truqueProgress) return 0;
  return Object.values(truqueProgress).filter(Boolean).length;
}

export function countTotalCompleted(): number {
  const progress = getProgress();
  return Object.values(progress).reduce(
    (total, lessons) => total + Object.values(lessons).filter(Boolean).length,
    0
  );
}

export function clearAll() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(USER_KEY);
  window.localStorage.removeItem(IA_DONE_KEY);
  window.localStorage.removeItem(PROGRESS_KEY);
  window.localStorage.removeItem("hr_quiz");
  window.localStorage.removeItem("hr_quiz_done");
}
