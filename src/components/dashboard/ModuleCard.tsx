import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { TruqueData } from "@/lib/mock-data";

export function ModuleCard({
  truque,
  completedCount,
}: {
  truque: TruqueData;
  completedCount: number;
}) {
  const total = truque.lessons.length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const status =
    completedCount === 0 ? "NOVO" : completedCount === total ? "CONCLUÍDO" : "EM ANDAMENTO";
  const badgeVariant = status === "CONCLUÍDO" ? "success" : "gold";

  return (
    <Link
      href={`/truques/${truque.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-transform duration-150 hover:scale-[1.02]"
    >
      <div className="relative flex h-[100px] items-center justify-center bg-surface2">
        <div className="absolute inset-0 bg-gold/10 blur-2xl" />
        <span className="relative text-4xl">{truque.icon}</span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <Badge variant={badgeVariant} className="w-fit">
          {status}
        </Badge>
        <h3 className="font-display text-[15px] font-semibold text-text">{truque.title}</h3>
        <p className="truncate text-[13px] text-muted">{truque.description}</p>
      </div>

      <div className="h-1 w-full bg-surface2">
        <div className="h-full bg-gold" style={{ width: `${percent}%` }} />
      </div>
    </Link>
  );
}
