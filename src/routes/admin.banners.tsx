import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { banners } from "@/lib/data";
import { Plus, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/admin/banners")({
  component: Banners,
});

function Banners() {
  return (
    <AdminLayout>
      <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Storefront</p>
          <h2 className="font-display text-2xl mt-1">Banners</h2>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <Plus className="size-4" /> New banner
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {banners.map((b, i) => (
          <div key={b.id} className="rounded-3xl border border-border bg-card/40 overflow-hidden">
            <div
              className="aspect-[16/9] grid place-items-center"
              style={{
                background: `linear-gradient(135deg, oklch(0.78 0.18 ${230 + i * 40} / 0.3), oklch(0.13 0.005 270))`,
              }}
            >
              <ImageIcon className="size-8 text-white/30" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">{b.title}</p>
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${
                    b.status === "Live"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-border bg-white/5 text-muted-foreground"
                  }`}
                >
                  {b.status}
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-2">
                {b.id} · {b.placement}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-lg border border-border text-xs">Edit</button>
                <button className="flex-1 py-2 rounded-lg border border-border text-xs">Schedule</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
