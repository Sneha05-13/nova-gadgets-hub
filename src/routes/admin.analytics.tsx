import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/analytics")({
  component: Analytics,
});

const line = [22, 28, 34, 30, 42, 48, 55, 50, 64, 60, 72, 78, 86, 92, 88, 102];
const donut = [
  { label: "Apple", value: 38, color: "oklch(0.78 0.18 230)" },
  { label: "Samsung", value: 24, color: "oklch(0.72 0.17 160)" },
  { label: "Google", value: 14, color: "oklch(0.78 0.15 80)" },
  { label: "Nothing", value: 12, color: "oklch(0.7 0.22 320)" },
  { label: "Others", value: 12, color: "oklch(0.6 0.04 270)" },
];

function Analytics() {
  const max = Math.max(...line);
  const points = line.map((v, i) => `${(i / (line.length - 1)) * 100},${100 - (v / max) * 90}`).join(" ");

  let cum = 0;
  const radius = 60;
  const C = 2 * Math.PI * radius;

  return (
    <AdminLayout>
      <div className="mb-6">
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Insights</p>
        <h2 className="font-display text-2xl mt-1">Revenue analytics</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        {[
          { k: "Gross revenue", v: "$1,482,210", d: "+18.4%" },
          { k: "Net revenue", v: "$1,204,650", d: "+14.1%" },
          { k: "Refund rate", v: "1.8%", d: "−0.4 pp" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-card/40 p-5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.k}</p>
            <p className="font-display text-3xl mt-2">{s.v}</p>
            <p className="text-xs text-emerald-400 mt-1">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card/40 p-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Revenue trend · 16 weeks</p>
          <svg viewBox="0 0 100 100" className="w-full h-64 mt-4" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.18 230)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.78 0.18 230)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points={`0,100 ${points} 100,100`} fill="url(#grad)" />
            <polyline points={points} fill="none" stroke="oklch(0.78 0.18 230)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Brand share</p>
          <div className="mt-6 flex items-center justify-center">
            <svg viewBox="0 0 160 160" className="size-48 -rotate-90">
              <circle cx="80" cy="80" r={radius} fill="none" stroke="oklch(1 0 0 / 0.06)" strokeWidth="14" />
              {donut.map((d) => {
                const dash = (d.value / 100) * C;
                const el = (
                  <circle
                    key={d.label}
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke={d.color}
                    strokeWidth="14"
                    strokeDasharray={`${dash} ${C - dash}`}
                    strokeDashoffset={-cum}
                  />
                );
                cum += dash;
                return el;
              })}
            </svg>
          </div>
          <div className="mt-5 space-y-2">
            {donut.map((d) => (
              <div key={d.label} className="flex items-center gap-3 text-xs">
                <span className="size-2.5 rounded-full" style={{ background: d.color }} />
                <span className="flex-1">{d.label}</span>
                <span className="font-mono text-muted-foreground">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
