import { Link } from "@tanstack/react-router";
import { Fuel, Gauge, Settings2 } from "lucide-react";
import { formatKm, formatPrice, type Vehicle } from "@/data/vehicles";

export function VehicleCard({ vehicle, featured = false }: { vehicle: Vehicle; featured?: boolean }) {
  return (
    <Link
      to="/veiculo/$id"
      params={{ id: vehicle.id }}
      className={`group relative flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary/50 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-muted ${featured ? "md:w-1/2" : ""}`}>
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.version}`}
          width={1280}
          height={854}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-full"
        />
        <span className="absolute top-3 left-3 rounded-xs border border-border bg-background/80 px-2 py-1 text-[11px] font-semibold tracking-wide uppercase backdrop-blur">
          {vehicle.condition}
        </span>
        {vehicle.oldPrice ? (
          <span className="absolute top-3 right-3 rounded-xs bg-primary px-2 py-1 text-[11px] font-bold tracking-wide text-primary-foreground uppercase">
            Oferta
          </span>
        ) : null}
      </div>

      <div className={`flex flex-1 flex-col gap-4 p-5 ${featured ? "md:justify-center md:p-8" : ""}`}>
        <div>
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {vehicle.brand}
          </p>
          <h3
            className={`mt-1 font-display font-bold ${featured ? "text-3xl" : "text-xl"} leading-tight`}
          >
            {vehicle.model}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{vehicle.version}</p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-primary" />
            {formatKm(vehicle.km)}
          </li>
          <li className="flex items-center gap-1.5">
            <Settings2 className="h-3.5 w-3.5 text-primary" />
            {vehicle.transmission}
          </li>
          <li className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5 text-primary" />
            {vehicle.fuel}
          </li>
          <li>{vehicle.year}</li>
        </ul>

        <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
          <div>
            {vehicle.oldPrice ? (
              <p className="text-xs text-muted-foreground line-through">
                {formatPrice(vehicle.oldPrice)}
              </p>
            ) : null}
            <p className="font-display text-2xl font-bold text-primary">
              {formatPrice(vehicle.price)}
            </p>
          </div>
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors group-hover:text-primary">
            Ver detalhes
          </span>
        </div>
      </div>
    </Link>
  );
}
