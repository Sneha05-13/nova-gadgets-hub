import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { products, formatPrice } from "@/lib/data";
import { Plus, Search, Filter, MoreVertical } from "lucide-react";

export const Route = createFileRoute("/admin/products/")({
  component: AdminProducts,
});

function AdminProducts() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Catalogue</p>
          <h2 className="font-display text-2xl mt-1">Products</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/40 border border-border">
            <Search className="size-4 text-muted-foreground" />
            <input placeholder="Search products" className="bg-transparent outline-none text-sm w-56" />
          </div>
          <button className="px-4 py-2.5 rounded-xl border border-border bg-card/40 flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="size-4" /> Filter
          </button>
          <Link to="/admin/products/new" className="px-4 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Plus className="size-4" /> New product
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <tr className="text-left">
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Brand</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Stock</th>
              <th className="px-5 py-3">Rating</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((p, i) => (
              <tr key={p.id} className="hover:bg-white/[0.02]">
                <td className="px-5 py-4 flex items-center gap-3">
                  <div className="size-10 rounded-xl shrink-0" style={{ background: `radial-gradient(circle at 50% 30%, ${p.colors[0]}, #050505 80%)` }} />
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-[10px] font-mono text-muted-foreground">{p.id}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{p.brand}</td>
                <td className="px-5 py-4 font-mono">{formatPrice(p.price)}</td>
                <td className="px-5 py-4 font-mono">{120 - i * 12}</td>
                <td className="px-5 py-4">{p.rating} ★</td>
                <td className="px-5 py-4 text-right">
                  <button className="size-8 rounded-full hover:bg-white/5 grid place-items-center text-muted-foreground">
                    <MoreVertical className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
