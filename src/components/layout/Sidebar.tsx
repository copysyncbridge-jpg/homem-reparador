"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, LayoutDashboard, User, Zap } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/truques", label: "Truques", icon: Zap },
  { href: "/perfil", label: "Perfil", icon: User },
  { href: "/downloads", label: "Downloads", icon: Download },
];

export function Sidebar({ userName }: { userName: string }) {
  const pathname = usePathname();
  const initials = userName
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-border bg-surface md:flex">
      <div className="flex h-20 items-center justify-center border-b border-border">
        <Logo size="sm" />
      </div>

      <nav className="flex-1 space-y-1 px-3 py-6">
        {NAV_ITEMS.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-11 items-center gap-3 rounded-lg border-l-2 px-3 text-sm font-medium transition-colors",
                active
                  ? "border-l-gold bg-gold/10 text-gold"
                  : "border-l-transparent text-muted hover:text-text"
              )}
            >
              <Icon className="size-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 border-t border-border px-4 py-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">
          {initials || "?"}
        </div>
        <span className="truncate text-sm text-text">{userName}</span>
      </div>
    </aside>
  );
}
