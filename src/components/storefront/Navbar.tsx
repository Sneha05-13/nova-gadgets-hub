import { Link, useRouterState } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, User } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Devices" },
  { to: "/support", label: "Support" },
];

export function Navbar() {
  const { location } = useRouterState();
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
            <span className="font-display font-black text-[11px] text-background">A</span>
          </div>
          <span className="font-display text-lg tracking-tight uppercase">Aura</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1.5">
          <button className="size-9 rounded-full hover:bg-white/5 grid place-items-center text-muted-foreground hover:text-foreground transition-colors">
            <Search className="size-4" />
          </button>
          <Link to="/wishlist" className="size-9 rounded-full hover:bg-white/5 grid place-items-center text-muted-foreground hover:text-foreground transition-colors">
            <Heart className="size-4" />
          </Link>
          <Link to="/profile" className="size-9 rounded-full hover:bg-white/5 grid place-items-center text-muted-foreground hover:text-foreground transition-colors">
            <User className="size-4" />
          </Link>
          <Link to="/cart" className="relative ml-1 px-4 py-2 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:scale-[1.03] transition-transform">
            <ShoppingBag className="size-3.5" />
            <span>Cart · 2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
