import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { formatKm, formatPrice, vehicles } from "@/data/vehicles";

export const Route = createFileRoute("/veiculo/$id")({
  loader: ({ params }) => {
    const vehicle = vehicles.find((v) => v.id === params.id);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Veículo indisponível | Revenda Premium" }, { name: "robots", content: "noindex" }],
      };
    }
    const { vehicle } = loaderData;
    const title = `${vehicle.brand} ${vehicle.model} ${vehicle.version} | Revenda Premium`;
    const description = `${vehicle.brand} ${vehicle.model} ${vehicle.year}, ${formatKm(vehicle.km)}, ${vehicle.transmission}. ${formatPrice(vehicle.price)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: VeiculoDetalhe,
});

function VeiculoDetalhe() {
  const { vehicle } = Route.useLoaderData();

  return (
    <div className="min-h-screen showroom-bg">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao catálogo
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-md border border-border">
              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
                width={1280}
                height={854}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {vehicles.slice(0, 4).map((v, i) => (
                <img
                  key={`${v.id}-${i}`}
                  src={v.image}
                  alt={`Ângulo ${i + 1} do ${vehicle.model}`}
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="h-20 w-full rounded-xs border border-border object-cover opacity-70 transition-opacity hover:opacity-100"
                />
              ))}
            </div>

            <section className="mt-10">
              <h2 className="font-display text-lg font-bold tracking-wide uppercase">
                Ficha técnica
              </h2>
              <dl className="mt-4 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {vehicle.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between bg-card px-4 py-3 text-sm">
                    <dt className="text-muted-foreground">{spec.label}</dt>
                    <dd className="font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-md border border-border bg-card p-6">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {vehicle.brand} · {vehicle.condition}
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold">{vehicle.model}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{vehicle.version}</p>

              <div className="mt-6 border-y border-border py-5">
                {vehicle.oldPrice ? (
                  <p className="text-sm text-muted-foreground line-through">
                    {formatPrice(vehicle.oldPrice)}
                  </p>
                ) : null}
                <p className="font-display text-4xl font-bold text-primary">
                  {formatPrice(vehicle.price)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  ou 48x de {formatPrice(Math.round(vehicle.price / 34))} com entrada
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Ano</span> <span className="text-foreground">{vehicle.year}</span>
                </li>
                <li className="flex justify-between">
                  <span>Quilometragem</span>{" "}
                  <span className="text-foreground">{formatKm(vehicle.km)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Cor</span> <span className="text-foreground">{vehicle.color}</span>
                </li>
                <li className="flex justify-between">
                  <span>Combustível</span> <span className="text-foreground">{vehicle.fuel}</span>
                </li>
              </ul>

              <button className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-primary text-sm font-bold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> Falar com consultor
              </button>
              <button className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm border border-border text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary">
                <Phone className="h-4 w-4" /> Agendar test drive
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
