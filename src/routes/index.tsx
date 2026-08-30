import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { VehicleCard } from "@/components/vehicle-card";
import { brands, vehicles } from "@/data/vehicles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catálogo de seminovos premium | Revenda Premium" },
      {
        name: "description",
        content:
          "Veja o estoque completo de seminovos premium: SUVs, sedãs e esportivos com procedência, garantia e ficha técnica detalhada.",
      },
      { property: "og:title", content: "Catálogo de seminovos premium | Revenda Premium" },
      {
        property: "og:description",
        content: "SUVs, sedãs e esportivos selecionados, com procedência e garantia.",
      },
    ],
  }),
  component: Catalogo,
});

const filters = [
  { label: "Faixa de preço", options: ["Qualquer", "Até 150 mil", "150–350 mil", "Acima de 350 mil"] },
  { label: "Ano", options: ["Todos", "2024", "2023", "2022", "2021"] },
  { label: "Câmbio", options: ["Todos", "Automático", "Manual"] },
  { label: "Combustível", options: ["Todos", "Flex", "Gasolina", "Diesel", "Híbrido"] },
];

function Catalogo() {
  const [featured, ...rest] = vehicles;

  return (
    <div className="min-h-screen showroom-bg">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pb-24">
        <section className="border-b border-border py-14">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">Estoque atualizado hoje</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Carros selecionados, sem surpresa na entrega.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Cada veículo passa por 128 pontos de inspeção, laudo cautelar e revisão completa antes
            de entrar no pátio.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Garantia de 12 meses
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Laudo cautelar aprovado
            </span>
            <span className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-primary" /> Aprovação em até 30 min
            </span>
          </div>
        </section>

        <section className="sticky top-16 z-20 -mx-6 glass-panel px-6 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {brands.map((brand, i) => (
                <button
                  key={brand}
                  className={`h-9 rounded-xs border px-3 text-xs font-semibold tracking-wide uppercase transition-colors ${
                    i === 0
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="ml-auto flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <select
                  key={filter.label}
                  aria-label={filter.label}
                  className="h-9 rounded-xs border border-border bg-background/60 px-2 text-xs text-muted-foreground outline-none focus:border-primary/60"
                >
                  {filter.options.map((option) => (
                    <option key={option}>{`${filter.label}: ${option}`}</option>
                  ))}
                </select>
              ))}
              <span className="flex h-9 items-center gap-2 rounded-xs border border-border px-3 text-xs text-muted-foreground">
                <LayoutGrid className="h-3.5 w-3.5" /> {vehicles.length} veículos
              </span>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <VehicleCard vehicle={featured} featured />
          {rest.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-muted-foreground">
          <span>Revenda Premium · Av. Beira Mar, 2100 · Fortaleza/CE</span>
          <span>(85) 3000-0000 · contato@revendapremium.com.br</span>
        </div>
      </footer>
    </div>
  );
}
