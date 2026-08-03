"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { checking, user } = useAuthGuard("full");

  if (checking || !user) {
    return <div className="min-h-screen bg-bg" />;
  }

  const initials = user.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-bg md:pl-60">
      <Sidebar userName={user.name} />

      <header className="flex h-14 items-center justify-between border-b border-border bg-surface px-4 md:hidden">
        <span className="font-display text-base font-semibold text-text">
          Olá, {user.name} 👋
        </span>
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-gold">
          {initials || "?"}
        </div>
      </header>

      <main className="px-4 py-6 pb-28 md:px-10 md:py-10 md:pb-10">{children}</main>

      <MobileNav />
    </div>
  );
}
