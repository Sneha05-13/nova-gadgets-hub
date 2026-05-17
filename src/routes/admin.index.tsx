import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { adminOrders, products, formatPrice } from "@/lib/data";
import { TrendingUp, ShoppingBag, Users, DollarSign, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const stats = [
  { label: "Revenue", value: "$142,480", delta: "+12.4%", Icon: DollarSign },
  { label: "Orders", value: "1,204", delta: "+8.1%", Icon: ShoppingBag },
  { label: "Active users", value: "8,421", delta: "+22.0%", Icon: Users },
  { label: "Conversion", value: "4.2%", delta: "+0.6 pp", Icon: TrendingUp },
];

const chartData = [38, 52, 44, 61, 73, 58, 80, 72, 91, 86, 102, 124];

function AdminDashboard() {
  const max = Math.max(...chartData);
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card/40 p-5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.label}</p>
              <s.Icon className="size-4 text-accent" />
            </div>
            <p className="font-display text-3xl mt-3">{s.value}</p>
            <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
              <ArrowUpRight className="size-3" /> {s.delta} vs last week
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card/40 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Revenue</p>
              <p className="font-display text-xl mt-1">Last 12 months</p>
            </div>
            <div className="flex gap-2">
              {["1W", "1M", "3M", "1Y"].map((p, i) => (
                <button
                  key={p}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest ${
                    i === 3 ? "bg-foreground text-background" : "border border-border text-muted-foreground"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2 h-56">
            {chartData.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-accent/40 to-accent"
                  style={{ height: `${(v / max) * 100}%` }}
                />
                <span className="text-[9px] font-mono text-muted-foreground">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Top sellers</p>
          <div className="mt-5 space-y-4">
            {products.slice(0, 5).map((p, i) => (
              <div key={p.id} className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground w-4">{String(i + 1).padStart(2, "0")}</span>
                <div className="size-9 rounded-xl shrink-0" style={{ background: `radial-gradient(circle at 50% 30%, ${p.colors[0]}, #050505 80%)` }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{p.name}</p>
                  <p className="text-[10px] text-muted-foreground">{p.brand}</p>
                </div>
                <span className="text-xs font-mono">{formatPrice(p.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/40 overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Recent orders</p>
            <p className="font-display text-lg mt-1">Latest activity</p>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <tr className="text-left">
              <th className="px-5 py-3">Order</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Total</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {adminOrders.map((o) => (
              <tr key={o.id} className="hover:bg-white/[0.02]">
                <td className="px-5 py-4 font-mono text-xs">{o.id}</td>
                <td className="px-5 py-4">{o.customer}</td>
                <td className="px-5 py-4 font-mono">{formatPrice(o.total)}</td>
                <td className="px-5 py-4">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${
                      o.status === "Paid"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : o.status === "Shipped"
                          ? "border-accent/30 bg-accent/10 text-accent"
                          : o.status === "Refunded"
                            ? "border-destructive/30 bg-destructive/10 text-destructive"
                            : "border-border bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right text-muted-foreground">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
