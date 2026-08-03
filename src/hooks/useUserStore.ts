"use client";

import { useCallback, useEffect, useState } from "react";
import { getUser, setUser as persistUser, clearAll, type HrUser } from "@/lib/user-store";

export function useUserStore() {
  const [user, setUserState] = useState<HrUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe read of localStorage on mount
    setUserState(getUser());
    setReady(true);
  }, []);

  const login = useCallback((name: string, email: string) => {
    const user = { name, email };
    persistUser(user);
    setUserState(user);
  }, []);

  const logout = useCallback(() => {
    clearAll();
    setUserState(null);
  }, []);

  return { user, ready, login, logout };
}
