import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { ProductCard } from "@/components/storefront/ProductCard";
import { products, brands } from "@/lib/data";
import { ArrowRight, Sparkles, Zap, Shield, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);
  const trending = products.slice(2, 8);

  return (
    <StoreLayout>
      {/* Hero */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto relative">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-gradient-to-b from-card/40 to-background min-h-[640px] grid lg:grid-cols-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.18_230/0.18),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 p-10 lg:p-16 flex flex-col justify-center animate-reveal">
              <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-widest mb-6">
                <Sparkles className="size-3" /> New Series · iPhone 16 Pro
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-balance">
                Beyond <span className="italic font-medium text-muted-foreground">intelligence.</span>
                <br />
                Forged in titanium.
              </h1>
              <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
                A multi-brand sanctuary for the most coveted mobile hardware on the planet. Apple, Samsung, Google, Nothing — handpicked, museum-lit.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  Shop now <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/categories"
                  className="px-7 py-3.5 rounded-full bg-white/5 border border-border text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Explore categories
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { k: "12K", v: "Devices shipped" },
                  { k: "4.9★", v: "Avg rating" },
                  { k: "98%", v: "On-time delivery" },
                ].map((s) => (
                  <div key={s.v}>
                    <p className="font-display text-2xl">{s.k}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center p-10 lg:p-16">
              <div className="absolute size-[420px] rounded-full bg-accent/20 blur-[120px]" />
              <div className="relative animate-float">
                <div
                  className="w-[280px] h-[560px] rounded-[3rem] border-2 border-white/10"
                  style={{
                    background: "linear-gradient(155deg, #2a2d36, #0a0b0f 60%, #1a1c22)",
                    boxShadow:
                      "0 60px 120px -30px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 2px 0 rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black/60" />
                  <div className="absolute top-5 right-5 grid grid-cols-2 gap-2">
                    <div className="size-12 rounded-2xl bg-black/50 border border-white/5 grid place-items-center">
                      <div className="size-5 rounded-full bg-white/10 border border-white/20" />
                    </div>
                    <div className="size-12 rounded-2xl bg-black/50 border border-white/5 grid place-items-center">
                      <div className="size-5 rounded-full bg-white/10 border border-white/20" />
                    </div>
                  </div>
                  <div className="absolute inset-x-8 bottom-10 text-[9px] font-mono uppercase tracking-widest text-white/30">
                    AURA_TITAN_X1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash sale strip */}
      <div className="mt-12 border-y border-border bg-foreground text-background py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-mono text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
              <Zap className="size-3" /> Flash sale ends in 04:22:51 · Nothing Phone (3) restocked · Limited Obsidian 256GB ·
            </span>
          ))}
        </div>
      </div>

      {/* Brands rail */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Curated brands</p>
              <h2 className="font-display text-3xl tracking-tight mt-1">Shop by maker</h2>
            </div>
            <Link to="/categories" className="text-xs font-mono border-b border-border pb-1 hover:text-foreground text-muted-foreground">
              View all
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {brands.map((b, i) => (
              <button
                key={b}
                className={`px-6 py-3 rounded-2xl border text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card/40 border-border text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Weekly selection</p>
              <h2 className="font-display text-4xl tracking-tight mt-1">Trending devices</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo split */}
      <section className="px-6 mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 relative rounded-[2rem] border border-border overflow-hidden p-12 min-h-[420px] bg-gradient-to-br from-card via-background to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,oklch(0.78_0.18_230/0.25),transparent_60%)]" />
            <div className="relative z-10 max-w-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Trade up</span>
              <h3 className="font-display text-4xl tracking-tight mt-3">
                Trade in. Trade up. Save up to $800.
              </h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Send us your old device — get credit instantly. We handle pickup, data wipe, and recycling.
              </p>
              <button className="mt-8 px-6 py-3 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-widest">
                Calculate value
              </button>
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-border overflow-hidden p-10 min-h-[420px] bg-card/60 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Aura Care</span>
              <h3 className="font-display text-3xl tracking-tight mt-3">Protection, redefined.</h3>
              <p className="text-muted-foreground text-sm mt-4">2-year accidental damage, theft & loss coverage.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[Shield, Truck, Zap].map((Icon, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-background/60 border border-border grid place-items-center">
                  <Icon className="size-4 text-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More trending */}
      <section className="px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl tracking-tight mb-8">Just landed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trending.slice(0, 6).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PWA banner */}
      <section className="px-6 mt-24">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-border bg-gradient-to-r from-card/60 to-background p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Install · PWA</span>
            <h3 className="font-display text-3xl tracking-tight mt-3">Add Aura to your home screen.</h3>
            <p className="text-muted-foreground mt-3 max-w-xl">
              Native-like speed, offline browsing, instant flash-sale alerts. No app store required.
            </p>
          </div>
          <button className="px-8 py-4 rounded-full bg-accent text-accent-foreground text-sm font-bold uppercase tracking-widest hover:scale-[1.03] transition-transform">
            Install app
          </button>
        </div>
      </section>
    </StoreLayout>
  );
}
