export function WelcomeBanner({
  name,
  perfilLabel,
}: {
  name: string;
  perfilLabel: string | null;
}) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-surface2 to-surface p-5">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
        🛡️ Protocolo ativo
      </span>
      <h1 className="mt-2 font-display text-[22px] font-extrabold text-text">Pronto, {name}.</h1>
      <p className="mt-1 text-sm text-muted">
        Seu plano exclusivo foi calibrado para o seu perfil.
      </p>
      {perfilLabel && (
        <span className="mt-4 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
          {perfilLabel}
        </span>
      )}
    </div>
  );
}
