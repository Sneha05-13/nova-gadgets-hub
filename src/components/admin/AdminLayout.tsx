import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  Users,
  Ticket,
  Image as ImageIcon,
  LineChart,
  LogOut,
} from "lucide-react";

const items = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/inventory", label: "Inventory", icon: Boxes },
  { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/coupons", label: "Coupons", icon: Ticket },
  { to: "/admin/banners", label: "Banners", icon: ImageIcon },
  { to: "/admin/analytics", label: "Analytics", icon: LineChart },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { location } = useRouterState();
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <aside className="w-64 border-r border-border bg-black/30 sticky top-0 h-screen flex flex-col">
        <div className="px-6 py-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
              <span className="font-display font-black text-xs text-background">A</span>
            </div>
            <div>
              <p className="font-display text-sm uppercase tracking-tight">Aura</p>
              <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Merchant OS</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1">
          {items.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  active
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <Icon className="size-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="px-3 py-4 border-t border-border">
          <Link
            to="/admin/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
          >
            <LogOut className="size-4" />
            <span>Sign out</span>
          </Link>
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="border-b border-border bg-black/20 backdrop-blur sticky top-0 z-30">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Aura Merchant</p>
              <h1 className="font-display text-lg tracking-tight">Welcome back, Mira</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                Live
              </div>
              <div className="size-9 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-border" />
            </div>
          </div>
        </div>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
