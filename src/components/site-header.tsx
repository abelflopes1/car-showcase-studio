import { Link } from "@tanstack/react-router";
import { Search, Gauge } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 glass-panel">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-extrabold tracking-[0.18em] uppercase">Revenda</span>
          <span className="font-display text-lg font-light tracking-[0.18em] text-muted-foreground uppercase">
            Premium
          </span>
        </Link>

        <div className="relative ml-auto hidden w-full max-w-sm items-center md:flex">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            aria-label="Buscar veículo"
            placeholder="Buscar por modelo, marca ou versão"
            className="h-10 w-full rounded-sm border border-border bg-background/60 pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
          />
        </div>

        <Link
          to="/dashboard"
          className="inline-flex h-10 items-center gap-2 rounded-sm border border-border px-3 text-sm font-medium transition-colors hover:border-foreground/50 hover:bg-foreground hover:text-background"
        >
          <Gauge className="h-4 w-4" />
          <span className="hidden sm:inline">Painel</span>
        </Link>
      </div>
    </header>
  );
}
