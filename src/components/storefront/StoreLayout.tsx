import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
