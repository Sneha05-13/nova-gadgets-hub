import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { products } from "@/lib/data";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/admin/inventory")({
  component: Inventory,
});

function Inventory() {
  return (
    <AdminLayout>
      <div className="mb-6">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Stock</p>
        <h2 className="font-display text-2xl mt-1">Inventory</h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { k: "Total SKUs", v: "248" },
          { k: "Low stock", v: "14", warn: true },
          { k: "Out of stock", v: "3", warn: true },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-card/40 p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.k}</p>
            <p className="font-display text-3xl mt-2 flex items-center gap-2">
              {s.v}
              {s.warn && <AlertTriangle className="size-4 text-amber-400" />}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <tr className="text-left">
              <th className="px-5 py-3">SKU</th>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Variant</th>
              <th className="px-5 py-3">Warehouse</th>
              <th className="px-5 py-3">Stock</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((p, i) => {
              const stock = 120 - i * 12;
              const low = stock < 30;
              return (
                <tr key={p.id} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs text-muted-foreground">SKU-{p.id.toUpperCase().slice(0, 6)}-{i + 100}</td>
                  <td className="px-5 py-4">{p.name}</td>
                  <td className="px-5 py-4 text-muted-foreground">256GB · Titanium</td>
                  <td className="px-5 py-4 text-muted-foreground">SFO-01</td>
                  <td className={`px-5 py-4 font-mono ${low ? "text-amber-400" : ""}`}>{stock}</td>
                  <td className="px-5 py-4 text-right">
                    <button className="text-[10px] font-mono uppercase tracking-widest text-accent">Restock</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
