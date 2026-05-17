import { createFileRoute } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { ProductCard } from "@/components/storefront/ProductCard";
import { products, brands } from "@/lib/data";

export const Route = createFileRoute("/products/")({
  component: ProductList,
});

function ProductList() {
  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Devices</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">All smartphones</h1>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </StoreLayout>
  );
}
