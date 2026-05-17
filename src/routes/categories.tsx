import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { ProductCard } from "@/components/storefront/ProductCard";
import { products, brands } from "@/lib/data";
import { SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/categories")({
  component: Categories,
});

function Categories() {
  const grouped = brands.slice(1).map((b) => ({
    brand: b,
    items: products.filter((p) => p.brand === b),
  }));

  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Catalogue</p>
            <h1 className="font-display text-5xl tracking-tight mt-2">All categories</h1>
          </div>
          <Link to="/products" className="text-xs font-mono border-b border-border pb-1 hover:text-foreground text-muted-foreground">
            Browse all devices
          </Link>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Filter sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="size-4" />
                <h3 className="text-sm font-medium">Filters</h3>
              </div>
              {[
                { label: "Price", options: ["Under $500", "$500–$1000", "$1000+"] },
                { label: "Storage", options: ["128GB", "256GB", "512GB", "1TB"] },
                { label: "Display", options: ["OLED", "AMOLED", "LTPO"] },
                { label: "5G", options: ["5G Ready"] },
              ].map((f) => (
                <div key={f.label} className="mt-5 first:mt-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{f.label}</p>
                  <div className="space-y-2">
                    {f.options.map((o) => (
                      <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
                        <span className="size-3.5 rounded-md border border-border" />
                        <span className="text-muted-foreground">{o}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Brand tabs + grids */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {brands.map((b, i) => (
                <button
                  key={b}
                  className={`px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                    i === 0
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{products.length} devices</p>
              <select className="bg-card/40 border border-border rounded-full px-4 py-2 text-xs text-muted-foreground">
                <option>Sort by: Featured</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Newest</option>
              </select>
            </div>

            {grouped.map((g) =>
              g.items.length ? (
                <div key={g.brand} className="mb-14">
                  <h2 className="font-display text-2xl tracking-tight mb-5">{g.brand}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {g.items.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
