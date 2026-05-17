import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { products, formatPrice } from "@/lib/data";
import { Trash2, Tag, Lock } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  const items = [
    { product: products[0], qty: 1 },
    { product: products[3], qty: 2 },
  ];
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Your bag</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-4">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="rounded-3xl border border-border bg-card/40 p-5 flex gap-5">
                <div
                  className="size-28 rounded-2xl shrink-0 grid place-items-center"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${product.colors[0]}, #050505 80%)` }}
                >
                  <div className="w-8 h-16 rounded-lg border border-white/10" style={{ background: product.colors[0] }} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{product.brand}</p>
                      <Link to="/products/$id" params={{ id: product.id }} className="text-lg font-medium hover:text-accent">
                        {product.name}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">256GB · {product.colors[0] === "#1f2024" ? "Titanium" : "Obsidian"}</p>
                    </div>
                    <p className="font-mono">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-3 bg-background border border-border rounded-full px-1 py-1">
                      <button className="size-7 grid place-items-center rounded-full hover:bg-white/5">−</button>
                      <span className="text-sm w-5 text-center">{qty}</span>
                      <button className="size-7 grid place-items-center rounded-full hover:bg-white/5">+</button>
                    </div>
                    <button className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-border bg-card/40 p-5">
              <div className="flex items-center gap-3">
                <Tag className="size-4 text-accent" />
                <input
                  placeholder="Promo code"
                  className="bg-transparent flex-1 outline-none text-sm placeholder:text-muted-foreground"
                />
                <button className="px-4 py-2 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-widest">Apply</button>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card/40 p-6 h-fit sticky top-28">
            <h3 className="font-display text-xl tracking-tight mb-5">Order summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-mono text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="font-mono text-foreground">Free</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax</span>
                <span className="font-mono text-foreground">{formatPrice(tax)}</span>
              </div>
            </div>
            <div className="my-5 border-t border-border" />
            <div className="flex justify-between items-baseline">
              <span className="text-sm">Total</span>
              <span className="font-display text-2xl">{formatPrice(total)}</span>
            </div>
            <button className="w-full mt-6 px-7 py-4 rounded-full bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
              <Lock className="size-3.5" /> Secure checkout
            </button>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground text-center mt-4">
              Apple Pay · Google Pay · Visa · Mastercard
            </p>
          </aside>
        </div>
      </div>
    </StoreLayout>
  );
}
