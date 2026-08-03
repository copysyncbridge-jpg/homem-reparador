"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRedirectPath, type GuardLevel } from "@/lib/auth-guard";
import { getUser, type HrUser } from "@/lib/user-store";

// Protege páginas que dependem de estado salvo em localStorage.
// `checking` fica true enquanto o redirecionamento (se houver) é decidido,
// evitando flash de conteúdo protegido antes do redirect.
export function useAuthGuard(level: GuardLevel) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<HrUser | null>(null);

  useEffect(() => {
    const redirect = getRedirectPath(level);
    if (redirect) {
      router.replace(redirect);
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe read of localStorage on mount
    setUser(getUser());
    setChecking(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { checking, user };
}
