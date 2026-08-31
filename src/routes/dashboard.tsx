import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowDownRight,
  ArrowUpRight,
  Car,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  Tag,
  Users,
} from "lucide-react";
import {
  formatPrice,
  leads,
  mixByBrand,
  salesByMonth,
  stock,
  type StockRow,
} from "@/data/vehicles";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Painel de gestão da revenda | Revenda Premium" },
      {
        name: "description",
        content:
          "Indicadores de estoque, vendas do mês, ticket médio e leads em um painel único para a equipe da revenda.",
      },
      { property: "og:title", content: "Painel de gestão da revenda | Revenda Premium" },
      {
        property: "og:description",
        content: "Estoque, vendas, ticket médio e leads em tempo real.",
      },
    ],
  }),
  component: Dashboard,
});

const nav = [
  { label: "Visão geral", icon: LayoutDashboard, active: true },
  { label: "Estoque", icon: Car },
  { label: "Leads", icon: MessagesSquare },
  { label: "Clientes", icon: Users },
  { label: "Preços", icon: Tag },
  { label: "Configurações", icon: Settings },
];

const kpis = [
  { label: "Veículos em estoque", value: "48", delta: "+6", up: true, hint: "vs. mês anterior" },
  { label: "Vendas no mês", value: "31", delta: "+29%", up: true, hint: "meta: 24" },
  { label: "Ticket médio", value: formatPrice(287400), delta: "-3,1%", up: false, hint: "vs. julho" },
  { label: "Leads ativos", value: "126", delta: "+18", up: true, hint: "últimos 7 dias" },
];

const statusStyle: Record<StockRow["status"], string> = {
  Disponível: "border-success/40 text-success",
  Reservado: "border-warning/40 text-warning",
  "Em preparação": "border-border text-muted-foreground",
  Vendido: "border-primary/40 text-primary",
};

function Dashboard() {
  return (
    <div className="flex min-h-screen showroom-bg">
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 lg:flex">
        <Link to="/" className="flex items-baseline gap-2 px-2">
          <span className="font-display text-base font-extrabold tracking-[0.18em] uppercase">
            Revenda
          </span>
          <span className="font-display text-base font-light tracking-[0.18em] text-muted-foreground uppercase">
            Premium
          </span>
        </Link>

        <nav className="mt-8 space-y-1">
          {nav.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xs px-3 py-2.5 text-sm transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_2px_0_0_0_var(--foreground)]"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
              }`}
            >
              <item.icon className={`h-4 w-4 ${item.active ? "text-primary" : ""}`} />
              {item.label}
            </button>
          ))}
        </nav>

        <Link
          to="/"
          className="mt-auto rounded-xs border border-sidebar-border px-3 py-2.5 text-center text-xs tracking-wide text-muted-foreground uppercase hover:text-primary"
        >
          Ver catálogo
        </Link>
      </aside>

      <main className="min-w-0 flex-1 px-6 py-8 lg:px-10">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.42em] text-muted-foreground uppercase">Painel</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold text-balance-tight uppercase">Visão geral da operação</h1>
          </div>
          <div className="flex gap-2 text-xs">
            {["Hoje", "7 dias", "30 dias", "Ano"].map((range, i) => (
              <button
                key={range}
                className={`h-9 rounded-xs border px-3 font-semibold tracking-wide uppercase ${
                  i === 2
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="group relative overflow-hidden rounded-md border border-border bg-card p-5 transition-colors hover:border-foreground/30">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">{kpi.label}</p>
              <p className="mt-3 font-display text-4xl font-extrabold tracking-tight">{kpi.value}</p>
              <p
                className={`mt-2 flex items-center gap-1 text-xs ${kpi.up ? "text-success" : "text-destructive"}`}
              >
                {kpi.up ? (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                ) : (
                  <ArrowDownRight className="h-3.5 w-3.5" />
                )}
                {kpi.delta}
                <span className="text-muted-foreground">· {kpi.hint}</span>
              </p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="group relative overflow-hidden rounded-md border border-border bg-card p-5 transition-colors hover:border-foreground/30">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase">
              Vendas por mês
            </h2>
            <div className="mt-5 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesByMonth}>
                  <CartesianGrid stroke="var(--border)" vertical={false} />
                  <XAxis
                    dataKey="month"
                    stroke="var(--muted-foreground)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      color: "var(--popover-foreground)",
                      fontSize: 12,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="vendas"
                    stroke="var(--chart-1)"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: "var(--chart-1)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="meta"
                    stroke="var(--chart-5)"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-md border border-border bg-card p-5 transition-colors hover:border-foreground/30">
            <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase">
              Mix por marca
            </h2>
            <div className="mt-5 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mixByBrand}>
                  <CartesianGrid stroke="var(--border)" vertical={false} />
                  <XAxis
                    dataKey="brand"
                    stroke="var(--muted-foreground)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--muted-foreground)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "var(--muted)" }}
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      color: "var(--popover-foreground)",
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="unidades" fill="var(--chart-1)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase">Estoque</h2>
              <span className="text-xs text-muted-foreground">{stock.length} registros</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs tracking-wide text-muted-foreground uppercase">
                    <th className="px-5 py-3 font-medium">Veículo</th>
                    <th className="px-5 py-3 font-medium">Placa</th>
                    <th className="px-5 py-3 font-medium">Preço</th>
                    <th className="px-5 py-3 font-medium">Dias em pátio</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stock.map((row) => (
                    <tr key={row.id} className="border-b border-border/60 last:border-0">
                      <td className="px-5 py-4 font-medium">{row.vehicle}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.plate}</td>
                      <td className="px-5 py-4">{formatPrice(row.price)}</td>
                      <td
                        className={`px-5 py-4 ${row.days > 45 ? "text-destructive" : "text-muted-foreground"}`}
                      >
                        {row.days} dias
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`rounded-xs border px-2 py-1 text-[11px] font-semibold tracking-wide uppercase ${statusStyle[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-md border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="font-display text-xs font-bold tracking-[0.2em] uppercase">
                Leads recentes
              </h2>
              <span className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">Ver todos</span>
            </div>
            <ul>
              {leads.map((lead) => (
                <li
                  key={lead.name}
                  className="flex items-center gap-3 border-b border-border/60 px-5 py-4 last:border-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-xs font-bold">
                    {lead.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{lead.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {lead.interest} · {lead.channel}
                    </p>
                  </div>
                  <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                    {lead.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
