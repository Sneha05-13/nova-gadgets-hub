import { createFileRoute } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { ProductCard } from "@/components/storefront/ProductCard";
import { products } from "@/lib/data";

export const Route = createFileRoute("/wishlist")({
  component: Wishlist,
});

function Wishlist() {
  const saved = [products[1], products[2], products[5], products[7]];
  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Saved</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">Your wishlist</h1>
          <p className="text-muted-foreground mt-3">{saved.length} devices · curated by you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {saved.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </StoreLayout>
  );
}
