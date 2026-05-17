import { createFileRoute } from "@tanstack/react-router";
import { StoreLayout } from "@/components/storefront/StoreLayout";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQ,
});

const items = [
  { q: "How long does shipping take?", a: "Free 2-day shipping across the US. International orders arrive in 5–7 business days." },
  { q: "What's your return policy?", a: "30-day no-questions returns. Devices must be in original packaging with all accessories." },
  { q: "Do you offer trade-in?", a: "Yes — get up to $800 instant credit when you trade in any device, any condition." },
  { q: "Is Aura Care worth it?", a: "Aura Care covers accidental damage, theft, and loss for 24 months. We recommend it for flagship purchases." },
  { q: "Which payment methods are accepted?", a: "Visa, Mastercard, Amex, Apple Pay, Google Pay, and Affirm financing." },
  { q: "Can I cancel an order?", a: "Yes, anytime before shipment. After shipment, refer to our return policy." },
  { q: "How do I install the PWA?", a: "On iOS, tap Share → Add to Home Screen. On Android, tap the Install prompt." },
];

function FAQ() {
  return (
    <StoreLayout>
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Knowledge</p>
          <h1 className="font-display text-5xl tracking-tight mt-2">Frequently asked.</h1>
        </div>
        <div className="rounded-3xl border border-border bg-card/40 divide-y divide-border">
          {items.map((it, i) => (
            <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden" open={i === 0}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-base font-medium">{it.q}</span>
                <Plus className="size-4 text-muted-foreground transition-transform group-open:rotate-45" />
              </summary>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </StoreLayout>
  );
}
