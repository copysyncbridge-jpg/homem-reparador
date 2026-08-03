"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, LayoutDashboard, User, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/truques", label: "Truques", icon: Zap },
  { href: "/perfil", label: "Perfil", icon: User },
  { href: "/downloads", label: "Downloads", icon: Download },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex h-16 items-stretch border-t border-border bg-surface pb-[env(safe-area-inset-bottom)] md:hidden">
      {NAV_ITEMS.map((item) => {
        const active = pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium",
              active ? "text-gold" : "text-muted"
            )}
          >
            {active && <span className="absolute top-1.5 size-1 rounded-full bg-gold" />}
            <Icon className="size-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
