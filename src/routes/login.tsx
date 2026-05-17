import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background text-foreground">
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-card via-background to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.78_0.18_230/0.2),transparent_60%)]" />
        <Link to="/" className="relative z-10 flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
            <span className="font-display font-black text-xs text-background">A</span>
          </div>
          <span className="font-display text-xl uppercase tracking-tight">Aura</span>
        </Link>
        <div className="relative z-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-4">Members only</p>
          <h2 className="font-display text-5xl tracking-tight leading-[0.95] text-balance">
            Welcome back to the future of mobile.
          </h2>
          <p className="text-muted-foreground mt-5 max-w-md leading-relaxed">
            Track orders, sync wishlists, and receive priority drops from your favourite makers.
          </p>
        </div>
        <p className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          © 2026 Aura Technologies
        </p>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl tracking-tight">Sign in</h1>
          <p className="text-muted-foreground text-sm mt-2">Use your Aura ID to continue.</p>

          <div className="mt-8 space-y-3">
            <button className="w-full py-3 rounded-xl border border-border bg-card/40 hover:bg-card text-sm font-medium">
              Continue with Apple
            </button>
            <button className="w-full py-3 rounded-xl border border-border bg-card/40 hover:bg-card text-sm font-medium">
              Continue with Google
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form className="space-y-3">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                type="email"
                placeholder="you@aura.io"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-card/40 border border-border outline-none focus:border-accent text-sm"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Password</label>
                <button type="button" className="text-[10px] text-accent">Forgot?</button>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-card/40 border border-border outline-none focus:border-accent text-sm"
              />
            </div>
            <button className="w-full py-3.5 rounded-xl bg-foreground text-background text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform">
              Sign in <ArrowRight className="size-4" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            New to Aura? <Link to="/signup" className="text-foreground underline underline-offset-4">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
