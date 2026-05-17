import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ImagePlus } from "lucide-react";

export const Route = createFileRoute("/admin/products/new")({
  component: NewProduct,
});

function NewProduct() {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link to="/admin/products" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground">
            ← Products
          </Link>
          <h2 className="font-display text-2xl mt-2">Add new product</h2>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 rounded-xl border border-border text-sm">Save draft</button>
          <button className="px-5 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold uppercase tracking-widest">Publish</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="space-y-6">
          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="font-medium mb-5">Basics</h3>
            <div className="space-y-4">
              {[
                { l: "Product name", p: "iPhone 16 Pro" },
                { l: "Tagline", p: "Forged in titanium." },
              ].map((f) => (
                <div key={f.l}>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{f.l}</label>
                  <input placeholder={f.p} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm" />
                </div>
              ))}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Description</label>
                <textarea rows={5} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm resize-none" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="font-medium mb-5">Media</h3>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl border-2 border-dashed border-border grid place-items-center text-muted-foreground hover:border-accent transition-colors">
                  <ImagePlus className="size-5" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="font-medium mb-5">Variants</h3>
            <div className="space-y-3">
              {["Color", "Storage", "Carrier"].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-20">{v}</span>
                  <input className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="font-medium mb-5">Pricing</h3>
            <div className="space-y-4">
              {[
                { l: "Price", p: "$1,199" },
                { l: "Compare at", p: "$1,299" },
                { l: "Cost per item", p: "$640" },
              ].map((f) => (
                <div key={f.l}>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{f.l}</label>
                  <input placeholder={f.p} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm font-mono" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="font-medium mb-5">Organization</h3>
            <div className="space-y-4">
              {[
                { l: "Brand", p: "Apple" },
                { l: "Category", p: "Smartphones" },
                { l: "Tags", p: "flagship, titanium" },
              ].map((f) => (
                <div key={f.l}>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{f.l}</label>
                  <input placeholder={f.p} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm" />
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </AdminLayout>
  );
}
