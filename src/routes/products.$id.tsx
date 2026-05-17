import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { ProductCard } from "@/components/storefront/ProductCard";
import { products, formatPrice, type Product } from "@/lib/data";
import { Star, Heart, Share2, GitCompare, Truck, Shield, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/products/$id")({
  component: ProductDetail,
  loader: ({ params }): Product => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return product;
  },
});

function ProductDetail() {
  const product = Route.useLoaderData();
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-8">
          <Link to="/">Home</Link> / <Link to="/products">Devices</Link> / {product.brand} / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <div>
            <div
              className="aspect-square rounded-[2rem] border border-border grid place-items-center relative overflow-hidden"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${product.colors[0]}, #050505 80%)`,
              }}
            >
              <div className="absolute size-[300px] rounded-full blur-[120px]" style={{ background: product.colors[0], opacity: 0.5 }} />
              <div
                className="relative w-[44%] h-[78%] rounded-[3rem] border-2 animate-float"
                style={{
                  background: `linear-gradient(155deg, ${product.colors[0]}, ${product.colors[1] ?? product.colors[0]})`,
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.colors.slice(0, 4).map((c, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl border border-border grid place-items-center"
                  style={{ background: `linear-gradient(155deg, ${c}, #050505)` }}
                >
                  <div className="size-3 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{product.brand}</span>
              {product.badge && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                  {product.badge}
                </span>
              )}
            </div>
            <h1 className="font-display text-5xl tracking-tight">{product.name}</h1>
            <p className="text-muted-foreground mt-3 text-lg">{product.tagline}</p>

            <div className="flex items-center gap-4 mt-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="flex items-baseline gap-3 mt-8">
              <span className="font-display text-4xl">{formatPrice(product.price)}</span>
              {product.oldPrice && <span className="text-muted-foreground line-through font-mono">{formatPrice(product.oldPrice)}</span>}
            </div>
            <p className="text-xs text-muted-foreground mt-1">or {formatPrice(Math.round(product.price / 12))}/mo for 12 months</p>

            <div className="mt-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">Color</p>
              <div className="flex gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    className={`size-12 rounded-2xl border-2 ${i === 0 ? "border-accent" : "border-border"}`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">Storage</p>
              <div className="flex flex-wrap gap-2">
                {product.storage.map((s, i) => (
                  <button
                    key={s}
                    className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                      i === 0
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button className="flex-1 min-w-[200px] px-7 py-4 rounded-full bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Add to bag
              </button>
              <button className="px-5 py-4 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground">
                <Heart className="size-4" />
              </button>
              <button className="px-5 py-4 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground">
                <GitCompare className="size-4" />
              </button>
              <button className="px-5 py-4 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground">
                <Share2 className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-10">
              {[
                { Icon: Truck, label: "Free 2-day shipping" },
                { Icon: Shield, label: "2-year Aura Care" },
                { Icon: RotateCcw, label: "30-day returns" },
              ].map(({ Icon, label }) => (
                <div key={label} className="rounded-2xl border border-border bg-card/40 p-4">
                  <Icon className="size-4 text-accent" />
                  <p className="text-[11px] text-muted-foreground mt-2 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs */}
        <section className="mb-20">
          <h2 className="font-display text-3xl tracking-tight mb-6">Specifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.specs.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card/40 p-5">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.label}</p>
                <p className="text-base mt-2">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-20">
          <h2 className="font-display text-3xl tracking-tight mb-6">Reviews</h2>
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <p className="font-display text-5xl">{product.rating}</p>
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">{product.reviews} verified reviews</p>
              <div className="mt-5 space-y-2">
                {[5, 4, 3, 2, 1].map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <span className="text-[10px] font-mono w-3 text-muted-foreground">{n}</span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: `${[78, 14, 5, 2, 1][5 - n]}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: "Mira C.", text: "The titanium feels weightless. Battery genuinely lasts two days. Worth every penny.", rating: 5 },
                { name: "Jide O.", text: "Cameras are extraordinary in low light. Setup migration from my old phone was seamless.", rating: 5 },
                { name: "Lina R.", text: "Beautifully packaged. Display is the best I've seen. Slight learning curve on the new gestures.", rating: 4 },
              ].map((r, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card/40 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium">{r.name}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className={`size-3 ${k < r.rating ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mb-20">
          <h2 className="font-display text-3xl tracking-tight mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </StoreLayout>
  );
}
