import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { adminOrders, formatPrice } from "@/lib/data";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrdersPage,
});

function AdminOrdersPage() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Fulfilment</p>
          <h2 className="font-display text-2xl mt-1">Orders</h2>
        </div>
        <div className="flex gap-2">
          {["All", "Paid", "Shipped", "Refunded", "Pending"].map((t, i) => (
            <button
              key={t}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest ${
                i === 0 ? "bg-foreground text-background" : "border border-border text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <tr className="text-left">
              <th className="px-5 py-3"><input type="checkbox" className="accent-accent" /></th>
              <th className="px-5 py-3">Order</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Total</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[...adminOrders, ...adminOrders].map((o, i) => (
              <tr key={i} className="hover:bg-white/[0.02]">
                <td className="px-5 py-4"><input type="checkbox" className="accent-accent" /></td>
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
