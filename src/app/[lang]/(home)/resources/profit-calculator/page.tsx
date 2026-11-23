import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { ProfitCalculatorView } from "./_components/profit-calculator-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Delivery marketplace profit calculator",
  description:
    "Work out profit per order, break-even orders and a 12-month projection for your delivery marketplace. Free, no sign-up, download as a spreadsheet.",
  path: "/resources/profit-calculator",
});

export default function ProfitCalculatorPage() {
  return <ProfitCalculatorView />;
}
