function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-xl border border-border bg-surface2 px-3 py-3">
      <p className="font-display text-2xl font-bold text-gold">{value}</p>
      <p className="mt-0.5 text-xs text-muted">{label}</p>
    </div>
  );
}

export function StatsBar({
  dia,
  modulosConcluidos,
  modulosTotal,
  percentConcluido,
}: {
  dia: number;
  modulosConcluidos: number;
  modulosTotal: number;
  percentConcluido: number;
}) {
  return (
    <div className="flex gap-3">
      <StatCard value={String(dia)} label="Dia de protocolo" />
      <StatCard value={`${modulosConcluidos}/${modulosTotal}`} label="Módulos" />
      <StatCard value={`${percentConcluido}%`} label="Concluído" />
    </div>
  );
}
