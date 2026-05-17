import { createFileRoute } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { orders, products, formatPrice } from "@/lib/data";
import { CheckCircle2, Circle, Package } from "lucide-react";

export const Route = createFileRoute("/orders")({
  component: Orders,
});

function Orders() {
  return (
    <StoreLayout>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">History</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">Your orders</h1>
        </div>

        <div className="space-y-6">
          {orders.map((o) => {
            const product = products.find((p) => p.id === o.items[0].id);
            return (
              <div key={o.id} className="rounded-3xl border border-border bg-card/40 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div
                      className="size-14 rounded-2xl grid place-items-center"
                      style={{ background: `radial-gradient(circle at 50% 30%, ${product?.colors[0]}, #050505 80%)` }}
                    >
                      <Package className="size-5 text-white/40" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{o.id}</p>
                      <p className="font-medium">{product?.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{o.date} · {formatPrice(o.total)}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                      o.status === "Delivered"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : o.status === "In transit"
                          ? "border-accent/30 bg-accent/10 text-accent"
                          : "border-border bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {o.status}
                  </span>
                </div>

                <div className="p-6">
                  <div className="relative">
                    <div className="absolute left-2.5 top-2.5 bottom-2.5 w-px bg-border" />
                    {o.timeline.map((t, i) => {
                      const done = t.at !== "—";
                      return (
                        <div key={i} className="flex items-start gap-4 pb-5 last:pb-0 relative">
                          {done ? (
                            <CheckCircle2 className="size-5 text-accent shrink-0 bg-background rounded-full relative z-10" />
                          ) : (
                            <Circle className="size-5 text-muted-foreground shrink-0 bg-background rounded-full relative z-10" />
                          )}
                          <div className="flex-1 flex justify-between">
                            <span className={done ? "text-foreground" : "text-muted-foreground"}>{t.label}</span>
                            <span className="text-xs font-mono text-muted-foreground">{t.at}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StoreLayout>
  );
}
