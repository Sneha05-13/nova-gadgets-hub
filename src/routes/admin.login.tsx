import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-6">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 justify-center mb-10">
          <div className="size-8 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
            <span className="font-display font-black text-xs text-background">A</span>
          </div>
          <span className="font-display text-xl uppercase tracking-tight">Aura · Merchant OS</span>
        </Link>
        <div className="rounded-3xl border border-border bg-card/40 p-8">
          <div className="size-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center mb-5">
            <Lock className="size-4 text-accent" />
          </div>
          <h1 className="font-display text-2xl tracking-tight">Sign in to dashboard</h1>
          <p className="text-muted-foreground text-sm mt-2">Authorized staff only.</p>

          <form className="mt-6 space-y-3">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Work email</label>
              <input
                type="email"
                placeholder="admin@aura.io"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">2FA code</label>
              <input
                placeholder="6-digit code"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-accent text-sm font-mono tracking-widest"
              />
            </div>
            <Link
              to="/admin"
              className="w-full py-3.5 mt-3 rounded-xl bg-foreground text-background text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
            >
              Enter dashboard <ArrowRight className="size-4" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
