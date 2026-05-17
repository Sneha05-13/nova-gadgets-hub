import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="group relative bg-card/40 border border-border rounded-3xl p-5 hover:bg-card/70 transition-all duration-500 hover:-translate-y-1"
    >
      {product.badge && (
        <span className="absolute top-6 left-6 z-10 text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
          {product.badge}
        </span>
      )}
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute top-6 right-6 z-10 size-8 rounded-full grid place-items-center bg-black/30 backdrop-blur border border-border text-muted-foreground hover:text-foreground"
      >
        <Heart className="size-3.5" />
      </button>
      <div
        className="aspect-square rounded-2xl mb-5 grid place-items-center relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${product.colors[0]}, #050505 80%)`,
        }}
      >
        <div
          className="absolute inset-x-10 bottom-6 h-2 rounded-full blur-xl opacity-60"
          style={{ background: product.colors[0] }}
        />
        <div
          className="relative w-[42%] h-[78%] rounded-[2rem] border-2 group-hover:scale-105 transition-transform duration-700"
          style={{
            background: `linear-gradient(155deg, ${product.colors[0]}, ${product.colors[1] ?? product.colors[0]})`,
            borderColor: "rgba(255,255,255,0.06)",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black/40" />
          <div className="absolute top-3 right-3 size-6 rounded-lg bg-black/30 border border-white/5 grid place-items-center">
            <div className="size-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{product.brand}</p>
            <h3 className="text-base font-medium mt-0.5">{product.name}</h3>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm">{formatPrice(product.price)}</p>
            {product.oldPrice && (
              <p className="font-mono text-[10px] text-muted-foreground line-through">{formatPrice(product.oldPrice)}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star className="size-3 fill-accent text-accent" />
            <span className="text-[11px] text-muted-foreground">
              {product.rating} · {product.reviews}
            </span>
          </div>
          <div className="flex gap-1">
            {product.colors.slice(0, 4).map((c, i) => (
              <span key={i} className="size-3 rounded-full border border-white/10" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
