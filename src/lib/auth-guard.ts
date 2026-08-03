import { getUser, isIaDone } from "./user-store";
import { isQuizDone } from "./quiz-store";

export type GuardLevel = "user" | "quiz" | "full";

// Retorna a rota para onde o usuário deve ser redirecionado, ou null se o acesso é permitido.
export function getRedirectPath(level: GuardLevel): string | null {
  const user = getUser();
  if (!user) return "/login";

  if (level === "user") return null;

  if (!isQuizDone()) return "/quiz";

  if (level === "quiz") return null;

  if (!isIaDone()) return "/loading-ia";

  return null;
}
