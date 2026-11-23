"use client";

import { Check, Plus, Search } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { SolutionSlug } from "../_data/solution-types";

const BRAND = siteConfig.name;

export function SolutionHeroMockup({ slug }: { slug: Exclude<SolutionSlug, "marketplaces"> }) {
  switch (slug) {
    case "restaurants":
      return <RestaurantsHeroMockup />;
    case "franchises":
      return <FranchisesHeroMockup />;
    case "enterprise":
      return <EnterpriseHeroMockup />;
    case "groceries":
      return <GroceriesHeroMockup />;
    case "agencies-resellers":
      return <AgenciesResellersHeroMockup />;
    case "startups":
      return <StartupsHeroMockup />;
    case "delivery-companies":
      return <DeliveryCompaniesHeroMockup />;
    case "software-companies":
      return <SoftwareCompaniesHeroMockup />;
    case "middleware":
      return <MiddlewareHeroMockup />;
    case "custom-projects":
      return <CustomProjectsHeroMockup />;
  }
}

function OrderingRingIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path d="M 7.5 9.2 A 11 11 0 0 1 17.5 5.1" stroke="#10B981" strokeWidth="3.3" strokeLinecap="round" />
      <path d="M 20.5 6 A 11 11 0 0 1 26.8 14.5" stroke="#266DF0" strokeWidth="3.3" strokeLinecap="round" />
      <path d="M 26.4 18.8 A 11 11 0 0 1 18.8 26.6" stroke="#DB2777" strokeWidth="3.3" strokeLinecap="round" />
      <path d="M 14.6 26.9 A 11 11 0 0 1 6.2 20.8" stroke="#F59E0B" strokeWidth="3.3" strokeLinecap="round" />
      <path d="M 5.2 16.8 A 11 11 0 0 1 5.9 12.2" stroke="#22C55E" strokeWidth="3.3" strokeLinecap="round" />
    </svg>
  );
}

function RestaurantsHeroMockup() {
  const items = [
    { name: "Seasonal pasta", tone: "from-[#fef3c7] to-[#fde68a]/60" },
    { name: "House pizza", tone: "from-[#dcfce7] to-[#bbf7d0]/60" },
    { name: "Garden salad", tone: "from-[#e0f2fe] to-[#bae6fd]/60" },
  ];

  return (
    <div className="flex flex-col items-center lg:items-end">
      <p className="mb-2.5 font-mono text-[11px] text-[#989aa0]">Illustrative storefront</p>
      <div className="w-full max-w-[325px] rounded-[34px] bg-white p-5 text-[#0b0c0d] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#d4d6da]" />
        <p className="text-[15.5px] font-bold">Example restaurant</p>
        <p className="font-mono text-[10.5px] text-[#7a7d84]">yourrestaurant.com</p>

        <div className="mt-3.5 flex items-center justify-between gap-2 text-[10.5px]">
          <div className="inline-flex items-center gap-1.5">
            <span className="rounded-full bg-[#0b0c0d] px-3 py-1 font-semibold text-white">Delivery</span>
            <span className="rounded-full border border-[#dee0e3] px-3 py-1 font-medium text-[#3f4145]">Pickup</span>
          </div>
          <span className="text-[10px] text-[#7a7d84]">Choose an order type</span>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-full border border-[#dee0e3] bg-[#fafafa] px-3.5 py-2 text-[11px] text-[#7a7d84]">
          <Search className="h-3.5 w-3.5" />
          <span>Search the menu</span>
        </div>

        <div className="mt-3 flex gap-1.5 text-[10.5px]">
          <span className="rounded-full border border-[#266df0] bg-[#edf3ff] px-3 py-1 font-semibold text-[#1f5fd1]">
            Mains
          </span>
          <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Sides</span>
          <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Drinks</span>
        </div>

        <div className="mt-3.5 space-y-2.5">
          {items.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 py-1">
              <div className="flex items-center gap-3">
                <span className={`h-11 w-11 shrink-0 rounded-[9px] bg-gradient-to-br ${item.tone}`} />
                <div>
                  <p className="text-[12.5px] font-bold text-[#0b0c0d]">{item.name}</p>
                  <p className="text-[10.5px] text-[#7a7d84]">Menu example</p>
                </div>
              </div>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#266df0] text-white">
                <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-full bg-[#0b0c0d] py-2.5 text-center text-[11.5px] font-semibold text-white">
          View cart
        </div>
      </div>
    </div>
  );
}

function FranchisesHeroMockup() {
  const stores = [
    { name: "Example store 01", status: "Open", dot: "bg-[#10b981]", text: "text-[#059669]", channels: "Web · App" },
    { name: "Example store 02", status: "Busy", dot: "bg-[#f59e0b]", text: "text-[#b45309]", channels: "Web · Kiosk" },
    { name: "Example store 03", status: "Closed", dot: "bg-[#9ca3af]", text: "text-[#7a7d84]", channels: "Set by store" },
  ];

  return (
    <div>
      <p className="mb-2.5 font-mono text-[11px] text-[#989aa0]">Illustrative network view</p>
      <div className="overflow-hidden rounded-[12px] border border-[#2f3136] bg-white text-[#0b0c0d] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-4 border-r border-[#dee0e3] bg-[#f6f7f7] p-3.5 space-y-3 text-[11px]">
          <div className="flex items-center gap-2 font-bold text-[12px]">
            <OrderingRingIcon className="h-4 w-4 shrink-0" />
            <span className="truncate">Example network</span>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[9.5px] uppercase text-[#7a7d84]">Scope</p>
            <p className="rounded-[5px] bg-[#edf3ff] px-2 py-1 font-semibold text-[#1f5fd1]">All locations · —</p>
            <p className="px-2 py-1 text-[#3f4145]">Region A · —</p>
            <p className="px-2 py-1 text-[#3f4145]">Region B · —</p>
          </div>

          <div className="space-y-1 pt-1">
            <p className="font-mono text-[9.5px] uppercase text-[#7a7d84]">Manage</p>
            <p className="px-2 py-0.5 text-[#3f4145]">Catalog</p>
            <p className="px-2 py-0.5 text-[#3f4145]">Roles</p>
            <p className="px-2 py-0.5 text-[#3f4145]">Settings</p>
          </div>
        </aside>

        {/* Main */}
        <div className="col-span-8 p-4 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-bold">Network view</span>
            <div className="inline-flex rounded-[5px] border border-[#dee0e3] p-0.5 text-[10px]">
              <span className="rounded-[4px] bg-[#0b0c0d] px-2 py-0.5 font-semibold text-white">Current view</span>
              <span className="px-2 py-0.5 text-[#7a7d84]">History</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["Orders", "Stores", "Regions", "Channels"].map((lbl) => (
              <div key={lbl} className="rounded-[6px] border border-[#dee0e3] bg-[#fafafa] px-2.5 py-2">
                <p className="text-[9.5px] text-[#7a7d84]">{lbl}</p>
                <p className="mt-0.5 text-[13px] font-bold">—</p>
              </div>
            ))}
          </div>

          <div className="text-[10.5px]">
            <div className="grid grid-cols-12 border-b border-[#dee0e3] pb-1.5 font-mono text-[9px] uppercase text-[#7a7d84]">
              <span className="col-span-5">Store</span>
              <span className="col-span-3">Status</span>
              <span className="col-span-4 text-right">Channels</span>
            </div>
            <div className="divide-y divide-[#f0f1f3]">
              {stores.map((st) => (
                <div key={st.name} className="grid grid-cols-12 items-center py-2">
                  <span className="col-span-5 font-semibold truncate">{st.name}</span>
                  <span className={`col-span-3 inline-flex items-center gap-1 font-medium ${st.text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
                    {st.status}
                  </span>
                  <span className="col-span-4 text-right text-[#7a7d84]">{st.channels}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnterpriseHeroMockup() {
  const waves = [
    { step: "Step 1", status: "Define", name: "Map the network", note: "Locations, channels, roles, and dependencies.", active: false },
    { step: "Step 2", status: "Review", name: "Validate the model", note: "Walk through the store and guest journeys with the teams that own them.", active: true },
    { step: "Step 3", status: "Plan", name: "Expand deliberately", note: "Apply the confirmed model to the next locations when their requirements are known.", active: false },
  ];

  return (
    <div>
      <p className="mb-2.5 font-mono text-[11px] text-[#989aa0]">Illustrative rollout sequence</p>
      <div className="rounded-[12px] bg-white p-5 sm:p-6 text-[#0b0c0d] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#1f5fd1]">Planning sequence</p>
        <p className="mt-1 text-[18px] font-bold">A staged network plan</p>

        <ol className="mt-4 space-y-3">
          {waves.map((w) => (
            <li
              key={w.step}
              className={`rounded-[9px] border p-3.5 ${
                w.active ? "border-[#266df0] bg-[#edf3ff]/60" : "border-[#dee0e3] bg-[#fafafa]"
              }`}
            >
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono font-semibold text-[#1f5fd1]">{w.step}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    w.active ? "bg-[#266df0] text-white" : "border border-[#dee0e3] bg-white text-[#3f4145]"
                  }`}
                >
                  {w.status}
                </span>
              </div>
              <p className="mt-1 text-[14px] font-bold">{w.name}</p>
              <p className="mt-0.5 text-[12px] leading-[1.5] text-[#3f4145]">{w.note}</p>
            </li>
          ))}
        </ol>

        <p className="mt-4 border-t border-[#dee0e3] pt-3 text-[11.5px] text-[#7a7d84]">
          Use the sequence to make responsibilities and dependencies visible.
        </p>
      </div>
    </div>
  );
}

function GroceriesHeroMockup() {
  const rows = [
    { name: "Bananas", meta: "1.2 kg · Aisle Produce", state: "Picked", tone: "done" },
    { name: "Milk, whole", meta: "2 units · Aisle Dairy", state: "Picked", tone: "done" },
    { name: "Chicken breast", meta: "0.9 kg · Aisle Butcher", state: "Weighing", tone: "active" },
    { name: "Sourdough loaf", meta: "1 unit · Aisle Bakery", state: "To pick", tone: "todo" },
  ] as const;

  return (
    <div className="rounded-[12px] bg-white p-5 text-[#0b0c0d] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between border-b border-[#dee0e3] pb-3">
        <span className="inline-flex items-center gap-2 text-[13px] font-bold">
          <OrderingRingIcon className="h-4 w-4" />
          Ordering Merchant
        </span>
        <span className="rounded-full bg-[#edf3ff] px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#1f5fd1]">
          Picking
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px]">
        <span className="font-bold">Order #4821</span>
        <span className="rounded-[6px] bg-[#f6f7f7] px-2.5 py-1 text-[11px] text-[#3f4145]">
          <strong className="font-mono text-[#7a7d84] mr-1.5">Slot</strong>
          Today · 4:00 – 5:00 PM
        </span>
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#3f4145]">
        <span>Picked</span>
        <span className="font-mono font-semibold text-[#1f5fd1]">6 of 14 items</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#e5e7eb]">
        <div className="h-full w-[43%] rounded-full bg-[#266df0]" />
      </div>

      <ul className="mt-3.5 space-y-2 text-[11.5px]">
        {rows.map((r) => (
          <li
            key={r.name}
            className={`flex items-center justify-between rounded-[8px] border px-3 py-2 ${
              r.tone === "active" ? "border-[#266df0] bg-[#edf3ff]/50" : "border-[#dee0e3]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                  r.tone === "done"
                    ? "bg-[#10b981] text-white"
                    : r.tone === "active"
                      ? "border-2 border-[#266df0] bg-white"
                      : "border border-[#cbd5e1] bg-white"
                }`}
              >
                {r.tone === "done" && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
              <div>
                <p className="font-bold leading-tight">{r.name}</p>
                <p className="text-[10px] text-[#7a7d84]">{r.meta}</p>
              </div>
            </div>
            <span
              className={`font-mono text-[10px] font-semibold ${
                r.tone === "done" ? "text-[#059669]" : r.tone === "active" ? "text-[#1f5fd1]" : "text-[#7a7d84]"
              }`}
            >
              {r.state}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 rounded-[8px] border border-[#f59e0b]/40 bg-[#fffbeb] p-3 text-[11px]">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] font-semibold uppercase text-[#b45309]">Out of stock</span>
          <span className="rounded bg-[#b45309] px-2 py-0.5 text-[10px] font-semibold text-white">Ask the customer</span>
        </div>
        <p className="mt-1 font-medium text-[#0b0c0d]">
          <span className="line-through text-[#7a7d84]">Greek yogurt, 1 kg</span> →{" "}
          <strong>Greek yogurt, 2 × 500 g</strong>
        </p>
      </div>

      <p className="mt-3 text-[11px] text-[#7a7d84]">Pack when the list is complete, then hand to delivery.</p>
    </div>
  );
}

function AgenciesResellersHeroMockup() {
  return (
    <div className="rounded-[12px] bg-white p-6 text-[#0b0c0d] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dee0e3] pb-4">
        <span className="inline-flex items-center gap-2 text-[13px] font-bold">
          <span className="h-4 w-4 rounded-[4px] bg-[#0b0c0d]" />
          Nova Digital
        </span>
        <span className="font-mono text-[11px] text-[#7a7d84]">Illustrative ownership map</span>
      </div>

      <p className="mt-4 text-[22px] font-bold tracking-[-0.025em]">A branded ordering offer</p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-[9px] border border-[#dee0e3] bg-[#fafafa] p-4">
          <p className="text-[13.5px] font-bold">Your agency owns</p>
          <ul className="mt-2.5 space-y-1.5 text-[12.5px] text-[#3f4145]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
              Client relationship
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
              Brand and domain
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
              Commercial offer
            </li>
          </ul>
        </div>

        <div className="rounded-[9px] border border-[#266df0]/25 bg-[#edf3ff]/70 p-4">
          <p className="text-[13.5px] font-bold">{BRAND} provides</p>
          <ul className="mt-2.5 space-y-1.5 text-[12.5px] text-[#3f4145]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
              Ordering surfaces
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
              Platform operations
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
              Product technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StartupsHeroMockup() {
  return (
    <div>
      <p className="mb-2.5 font-mono text-[11px] text-[#989aa0]">Illustrative workspace</p>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-12 items-stretch">
        {/* Mini customer phone */}
        <div className="sm:col-span-5 rounded-[14px] bg-white p-4 text-[#0b0c0d] shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[9.5px] text-[#7a7d84]">
              <span>Sample</span>
              <span>●●●</span>
            </div>
            <p className="mt-2 text-[14px] font-bold">Bowl &amp; Co.</p>
            <p className="text-[10px] text-[#7a7d84]">Illustrative ordering</p>
            <div className="mt-2.5 flex gap-1 text-[9.5px]">
              <span className="rounded-full bg-[#0b0c0d] px-2.5 py-0.5 font-semibold text-white">Bowls</span>
              <span className="rounded-full border border-[#dee0e3] px-2.5 py-0.5 text-[#3f4145]">Wraps</span>
              <span className="rounded-full border border-[#dee0e3] px-2.5 py-0.5 text-[#3f4145]">Juices</span>
            </div>
            <div className="mt-3 space-y-2">
              {["from-[#dcfce7] to-[#bbf7d0]", "from-[#fef3c7] to-[#fde68a]", "from-[#e0f2fe] to-[#bae6fd]"].map(
                (grad, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-7 w-7 rounded-[6px] bg-gradient-to-br ${grad}`} />
                      <div>
                        <p className="text-[10.5px] font-bold leading-tight">Sample item</p>
                        <p className="text-[9px] text-[#7a7d84]">Catalog detail</p>
                      </div>
                    </div>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#266df0] text-white text-[11px] font-bold">
                      +
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-[6px] bg-[#0b0c0d] px-3 py-1.5 text-[10px] font-semibold text-white">
            <span>Sample cart</span>
            <span>—</span>
          </div>
        </div>

        {/* Mini merchant workspace */}
        <div className="sm:col-span-7 rounded-[14px] bg-white p-4 text-[#0b0c0d] shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#dee0e3] pb-2.5">
              <span className="text-[12px] font-bold">Illustrative merchant workspace</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#059669]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                Configuration
              </span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Order activity", "Sales activity", "Delivery activity"].map((lbl) => (
                <div key={lbl} className="rounded-[6px] border border-[#dee0e3] bg-[#fafafa] p-2">
                  <p className="text-[9px] text-[#7a7d84]">{lbl}</p>
                  <p className="mt-1 text-[13px] font-bold">—</p>
                </div>
              ))}
            </div>

            <p className="mt-3.5 font-mono text-[9.5px] uppercase text-[#7a7d84]">Illustrative order queue</p>
            <div className="mt-2 space-y-1.5 text-[10.5px]">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="flex items-center justify-between rounded-[6px] border border-[#dee0e3] px-2.5 py-1.5"
                >
                  <span className="font-semibold">Sample order</span>
                  <span className="font-mono text-[9.5px] text-[#1f5fd1]">Configuration step</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeliveryCompaniesHeroMockup() {
  const deliveries = [
    { driver: "Ana R.", merchant: "La Trattoria", state: "Picked up", transit: true },
    { driver: "Marco V.", merchant: "Sushi Kōji", state: "Delivering", transit: true },
    { driver: "Luis P.", merchant: "Café Botánico", state: "Assigned", transit: false },
    { driver: "Sofía M.", merchant: "Green Bowl", state: "Delivering", transit: true },
    { driver: "Diego T.", merchant: "Pollos del Norte", state: "Assigned", transit: false },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-12 rounded-[12px] border border-[#2a2d33] bg-[#121417] p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
      {/* Left: Active deliveries list */}
      <div className="sm:col-span-7 rounded-[9px] border border-[#26282c] bg-[#16181c] p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold text-white">Active deliveries</span>
          <span className="rounded-full bg-[#142547] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#92b5ff]">
            Auto dispatch
          </span>
        </div>
        <p className="mt-2 font-mono text-[10px] text-[#7a7d84]">Driver · Merchant</p>
        <div className="mt-2 divide-y divide-[#26282c] text-[11.5px]">
          {deliveries.map((d) => (
            <div key={d.driver} className="flex items-center justify-between py-2">
              <div>
                <p className="font-semibold text-white leading-tight">{d.driver}</p>
                <p className="text-[10px] text-[#989aa0]">{d.merchant}</p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  d.transit ? "bg-[#059669]/20 text-[#34d399]" : "bg-[#266df0]/20 text-[#92b5ff]"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${d.transit ? "bg-[#10b981]" : "bg-[#266df0]"}`} />
                {d.state}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Dark Zone Map */}
      <div className="sm:col-span-5 relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[9px] border border-[#26282c] bg-[#0e1014] p-3.5">
        <div className="relative z-10 flex items-center justify-between text-[10.5px]">
          <span className="font-bold text-white">Zone map</span>
          <span className="font-mono text-[#989aa0]">Service zone</span>
        </div>

        {/* Concentric map rings & pins */}
        <div className="relative my-3 flex flex-1 items-center justify-center">
          <span className="absolute h-28 w-28 rounded-full border border-dashed border-[#266df0]/50 bg-[#266df0]/10" />
          <span className="absolute h-16 w-16 rounded-full border border-[#266df0]/60 bg-[#266df0]/15" />
          <span className="relative z-10 h-3 w-3 rounded-full bg-[#266df0] ring-4 ring-[#266df0]/30" />
          <span className="absolute left-5 top-5 h-2 w-2 rounded-full bg-[#10b981]" />
          <span className="absolute right-6 top-8 h-2 w-2 rounded-full bg-[#10b981]" />
          <span className="absolute left-8 bottom-4 h-2 w-2 rounded-full bg-[#92b5ff]" />
          <span className="absolute right-7 bottom-5 h-2 w-2 rounded-full bg-[#10b981]" />
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-[#c4c6ca]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            On the way
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#92b5ff]" />
            Assigned
          </span>
        </div>
      </div>
    </div>
  );
}

function SoftwareCompaniesHeroMockup() {
  const stages = [
    { label: "Connect", value: "API access" },
    { label: "Configure", value: "Branded ordering surfaces" },
    { label: "Operate", value: "Orders, payments and delivery" },
  ];

  return (
    <div className="rounded-[12px] border border-[#2a2d33] bg-[#121417] p-6 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#989aa0]">Illustrative integration map</p>
      <p className="mt-2 text-[22px] sm:text-[24px] font-bold tracking-[-0.025em] leading-[1.2] text-white">
        Choose how ordering appears in your product
      </p>
      <ol className="mt-5 divide-y divide-[#26282c] border-t border-[#26282c]">
        {stages.map((st, idx) => (
          <li key={st.label} className="flex items-center justify-between gap-4 py-3.5 text-[13.5px]">
            <span className="inline-flex items-center gap-3 font-mono text-[#92b5ff]">
              <span>0{idx + 1}</span>
              <span className="text-[#c4c6ca]">{st.label}</span>
            </span>
            <strong className="font-semibold text-white text-right">{st.value}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

function MiddlewareHeroMockup() {
  const stages = [
    { num: "01", name: "Your front", val: "Website, app or kiosk", dashed: false },
    { num: "02", name: `${BRAND} API`, val: "Menus, orders, statuses", dashed: false },
    { num: "03", name: "Your stack", val: "POS, delivery, marketplaces, payments", dashed: true },
    { num: "04", name: "Webhooks", val: "Order status back to your front", dashed: false },
  ];

  return (
    <div className="rounded-[12px] border border-[#2a2d33] bg-[#121417] p-6 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#989aa0]">Illustrative order route</p>
      <p className="mt-2.5 text-[24px] sm:text-[26px] font-bold tracking-[-0.025em] leading-[1.15] text-white">
        One connection in the middle of your stack
      </p>
      <ol className="mt-5 border-t border-[#26282c]">
        {stages.map((st) => (
          <li
            key={st.num}
            className={`flex flex-wrap items-center justify-between gap-3 py-3.5 text-[13px] ${
              st.dashed ? "border-b border-dashed border-[#34363a]" : "border-b border-[#26282c] last:border-b-0"
            }`}
          >
            <span className="inline-flex items-center gap-3 font-mono">
              <span className="text-[#92b5ff]">{st.num}</span>
              <span className="text-[#c4c6ca]">{st.name}</span>
            </span>
            <strong className="font-semibold text-white text-right">{st.val}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CustomProjectsHeroMockup() {
  return (
    <div
      className="flex flex-col items-stretch"
      role="img"
      aria-label={`Diagram: a project requirement can be evaluated against ${BRAND} platform capabilities.`}
    >
      {/* Top Node: Your project */}
      <div className="rounded-[12px] border border-[#266df0] bg-[#121e38] px-6 py-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] font-medium text-[#92b5ff]">Your project</p>
          <p className="mt-1 text-[20px] sm:text-[22px] font-bold tracking-[-0.02em] text-white">
            Your ordering requirement
          </p>
        </div>
        <span className="font-mono text-[11.5px] text-[#989aa0]">Defined with your team</span>
      </div>

      {/* Connector 1 */}
      <div className="mx-auto h-6 w-px bg-[#34363a]" aria-hidden="true" />

      {/* Middle Node: Extend */}
      <div className="rounded-[12px] border border-[#34363a] bg-[#141517] px-6 py-5">
        <p className="font-mono text-[11px] font-medium text-[#989aa0]">Extend</p>
        <p className="mt-1 text-[16.5px] font-bold text-white">Ordering API · Platform capabilities</p>
      </div>

      {/* Connector 2 */}
      <div className="mx-auto h-6 w-px bg-[#34363a]" aria-hidden="true" />

      {/* Bottom Node: Infrastructure */}
      <div className="rounded-[12px] border border-[#34363a] bg-[#141517] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2.5 text-[16px] font-bold tracking-[-0.02em] text-white">
          <OrderingRingIcon className="h-6 w-6" />
          <span>{BRAND}</span>
        </span>
        <div className="text-left sm:text-right">
          <p className="text-[15.5px] font-bold text-white">{BRAND} infrastructure</p>
          <p className="mt-0.5 font-mono text-[11.5px] text-[#989aa0]">
            Catalog · Orders · Payments · Delivery
          </p>
        </div>
      </div>
    </div>
  );
}
