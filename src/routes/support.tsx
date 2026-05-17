import { createFileRoute, Link } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { Headphones, MessageCircle, FileText, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/support")({
  component: Support,
});

function Support() {
  const channels = [
    { Icon: MessageCircle, title: "Live chat", desc: "Average 3-minute response." },
    { Icon: Headphones, title: "Concierge", desc: "Speak to a specialist." },
    { Icon: FileText, title: "Help articles", desc: "Browse 240+ guides." },
    { Icon: ShieldCheck, title: "Aura Care", desc: "Manage your protection plan." },
  ];
  return (
    <StoreLayout>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Support center</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">How can we help?</h1>
          <div className="mt-6 max-w-xl flex">
            <input
              placeholder="Search articles, orders, devices…"
              className="flex-1 px-5 py-3.5 rounded-l-full bg-card/40 border border-border outline-none focus:border-accent text-sm"
            />
            <button className="px-6 rounded-r-full bg-foreground text-background text-xs font-bold uppercase tracking-widest">Search</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {channels.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card/40 p-6 hover:bg-card/70 transition-colors">
              <div className="size-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center">
                <c.Icon className="size-4 text-accent" />
              </div>
              <h3 className="font-medium mt-4">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card/40 p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl tracking-tight">Need a specialist?</h3>
            <p className="text-muted-foreground mt-2">Schedule a 15-minute call with a device expert.</p>
          </div>
          <Link to="/contact" className="px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-bold uppercase tracking-widest">
            Book a session
          </Link>
        </div>
      </div>
    </StoreLayout>
  );
}
