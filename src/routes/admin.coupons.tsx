import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { coupons } from "@/lib/data";
import { Plus, Ticket } from "lucide-react";

export const Route = createFileRoute("/admin/coupons")({
  component: Coupons,
});

function Coupons() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Promotions</p>
          <h2 className="font-display text-2xl mt-1">Coupons & offers</h2>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Plus className="size-4" /> New coupon
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((c) => (
          <div key={c.code} className="rounded-3xl border border-border bg-card/40 p-6 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-accent/10 blur-2xl" />
            <div className="size-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center mb-5">
              <Ticket className="size-4 text-accent" />
            </div>
            <p className="font-display text-3xl tracking-tighter font-mono">{c.code}</p>
            <p className="text-muted-foreground text-sm mt-2">{c.discount} off · {c.uses.toLocaleString()} uses</p>
            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Expires {c.expires}</span>
              <span
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${
                  c.status === "Active"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-border bg-white/5 text-muted-foreground"
                }`}
              >
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
