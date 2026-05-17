import { createFileRoute } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <StoreLayout>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Reach us</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">Talk to a human.</h1>
          <p className="text-muted-foreground mt-3 max-w-xl">Concierge support 24/7. Average reply in under 3 minutes.</p>
        </div>
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <form className="rounded-3xl border border-border bg-card/40 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { l: "Full name", t: "text" },
                { l: "Email", t: "email" },
              ].map((f) => (
                <div key={f.l}>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{f.l}</label>
                  <input type={f.t} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm" />
                </div>
              ))}
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
              <input className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm" />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={6} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm resize-none" />
            </div>
            <button className="px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-bold uppercase tracking-widest">Send message</button>
          </form>

          <aside className="space-y-3">
            {[
              { Icon: Mail, label: "Email", value: "concierge@aura.io" },
              { Icon: Phone, label: "Phone", value: "+1 (888) 287-2872" },
              { Icon: MapPin, label: "HQ", value: "88 Brannan St, SF, CA" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card/40 p-5 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center">
                  <c.Icon className="size-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="text-sm mt-1">{c.value}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </StoreLayout>
  );
}
