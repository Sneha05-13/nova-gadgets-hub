import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">
      <div className="flex items-center justify-center p-8 order-2 lg:order-1">
        <div className="w-full max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="size-7 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
              <span className="font-display font-black text-[11px] text-background">A</span>
            </div>
            <span className="font-display text-lg uppercase tracking-tight">Aura</span>
          </Link>
          <h1 className="font-display text-3xl tracking-tight">Create your Aura ID</h1>
          <p className="text-muted-foreground text-sm mt-2">One account. Every device.</p>

          <form className="mt-8 space-y-3">
            {[
              { l: "Full name", t: "text", p: "Mira Chen" },
              { l: "Email", t: "email", p: "you@aura.io" },
              { l: "Password", t: "password", p: "Min. 8 characters" },
            ].map((f) => (
              <div key={f.l}>
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{f.l}</label>
                <input
                  type={f.t}
                  placeholder={f.p}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl bg-card/40 border border-border outline-none focus:border-accent text-sm"
                />
              </div>
            ))}

            <label className="flex items-start gap-2 text-xs text-muted-foreground pt-2">
              <span className="size-4 rounded border border-border mt-0.5 shrink-0" />
              <span>I agree to Aura's Terms of Service and Privacy Policy.</span>
            </label>

            <button className="w-full py-3.5 rounded-xl bg-foreground text-background text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform">
              Create account <ArrowRight className="size-4" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already a member? <Link to="/login" className="text-foreground underline underline-offset-4">Sign in</Link>
          </p>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-card via-background to-background overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.18_230/0.2),transparent_60%)]" />
        <Link to="/" className="relative z-10 flex items-center gap-2 self-end">
          <span className="font-display text-xl uppercase tracking-tight">Aura</span>
          <div className="size-8 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
            <span className="font-display font-black text-xs text-background">A</span>
          </div>
        </Link>
        <div className="relative z-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-4">Join Aura</p>
          <h2 className="font-display text-5xl tracking-tight leading-[0.95] text-balance">
            The world's most coveted devices, delivered.
          </h2>
        </div>
        <p className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">© 2026 Aura</p>
      </div>
    </div>
  );
}
