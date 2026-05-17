import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { orders, products, formatPrice } from "@/lib/data";
import { MapPin, CreditCard, Bell, Shield } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <StoreLayout>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div className="flex items-center gap-5">
            <div className="size-20 rounded-3xl bg-gradient-to-br from-accent/40 to-accent/10 border border-border grid place-items-center">
              <span className="font-display text-2xl">MC</span>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Account · Black tier</p>
              <h1 className="font-display text-4xl tracking-tight mt-1">Mira Chen</h1>
              <p className="text-muted-foreground text-sm mt-1">mira@aura.io · Member since 2024</p>
            </div>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-card border border-border text-sm hover:bg-white/5">Edit profile</button>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside>
            <nav className="space-y-1">
              {[
                { label: "Overview", icon: Shield, active: true },
                { label: "Addresses", icon: MapPin },
                { label: "Payment methods", icon: CreditCard },
                { label: "Notifications", icon: Bell },
              ].map((i) => (
                <button
                  key={i.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                    i.active ? "bg-white/10 text-foreground" : "text-muted-foreground hover:bg-white/5"
                  }`}
                >
                  <i.icon className="size-4" />
                  {i.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            {/* Saved addresses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl tracking-tight">Saved addresses</h2>
                <button className="text-xs font-mono uppercase tracking-widest text-accent">+ Add new</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { tag: "Home", line: "240 Lafayette St, Apt 12", city: "New York, NY 10012" },
                  { tag: "Office", line: "Aura HQ · 88 Brannan St", city: "San Francisco, CA 94107" },
                ].map((a) => (
                  <div key={a.tag} className="rounded-2xl border border-border bg-card/40 p-5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-accent">{a.tag}</p>
                    <p className="mt-2">{a.line}</p>
                    <p className="text-sm text-muted-foreground">{a.city}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Order history */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl tracking-tight">Recent orders</h2>
                <Link to="/orders" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground">
                  View all
                </Link>
              </div>
              <div className="rounded-2xl border border-border bg-card/40 divide-y divide-border">
                {orders.map((o) => {
                  const product = products.find((p) => p.id === o.items[0].id);
                  return (
                    <div key={o.id} className="p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <div
                          className="size-10 rounded-xl shrink-0"
                          style={{ background: `radial-gradient(circle at 50% 30%, ${product?.colors[0]}, #050505 80%)` }}
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{product?.name}</p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{o.id} · {o.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-xs text-muted-foreground">{o.status}</span>
                        <span className="font-mono text-sm">{formatPrice(o.total)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
