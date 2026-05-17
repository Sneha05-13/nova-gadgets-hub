import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-7 rounded-lg bg-gradient-to-br from-white to-white/40 grid place-items-center">
              <span className="font-display font-black text-[11px] text-background">A</span>
            </div>
            <span className="font-display text-xl tracking-tight uppercase">Aura</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Curating the finest mobile technology for a focused digital existence. Built for those who demand precision.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">All systems nominal</span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">Smartphones</Link></li>
            <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Flash Sale</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest">Account</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/orders" className="hover:text-foreground">Orders</Link></li>
            <li><Link to="/profile" className="hover:text-foreground">Profile</Link></li>
            <li><Link to="/wishlist" className="hover:text-foreground">Wishlist</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/support" className="hover:text-foreground">Care Plans</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] font-mono text-muted-foreground tracking-widest">
          <span>© 2026 AURA TECHNOLOGIES</span>
          <div className="flex gap-6">
            <span>PRIVACY</span>
            <span>TERMS</span>
            <span>EN_INTL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
