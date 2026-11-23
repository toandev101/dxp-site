"use client";

import {
  Check,
  CreditCard,
  Lock,
  MapPin,
  Phone,
  Plus,
  QrCode,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import type { PlatformSlug } from "../_data/platform-types";

export function PlatformHeroMockup({ slug, caption }: { slug: PlatformSlug; caption?: string }) {
  return (
    <div className="w-full">
      {slug === "ordering-web" && <OrderingWebMockup />}
      {slug === "ordering-apps" && <OrderingAppsMockup />}
      {slug === "restaurant-website" && <RestaurantWebsiteMockup />}
      {slug === "restaurant-app" && <RestaurantAppMockup />}
      {slug === "ordering-kiosk" && <OrderingKioskMockup />}
      {slug === "ordering-call-center" && <OrderingCallCenterMockup />}
      {slug === "multi-store-ordering" && <MultiStoreMockup />}
      {slug === "ai-ordering-agents" && <AiAgentsHeroMockup />}

      {caption && (
        <p className="mt-3 text-[12px] font-mono text-[#989aa0]">{caption}</p>
      )}
    </div>
  );
}

function OrderingWebMockup() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#2a2c30] bg-[#1e2024] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      {/* Dark Browser Chrome */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 bg-[#1c1e22]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4e54]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4e54]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4e54]" />
        </div>
        <span className="rounded-t-md bg-[#2a2c31] px-3 py-1 text-[11px] font-medium text-[#d4d6da]">
          Sample restaurant
        </span>
      </div>
      <div className="px-4 pb-2.5 bg-[#1c1e22]">
        <div className="flex items-center gap-2 rounded-md bg-[#27292e] px-3 py-1.5 text-[11px] text-[#c4c6ca]">
          <Lock className="h-3 w-3 text-[#989aa0]" />
          <span>lunapizza.com/menu</span>
        </div>
      </div>

      {/* White Storefront Viewport */}
      <div className="bg-white text-[#0b0c0d]">
        <div className="flex items-center justify-between border-b border-[#dee0e3] px-4 py-2.5 text-[11px]">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[12.5px]">Sample restaurant</span>
            <div className="hidden sm:flex items-center gap-3 text-[#3f4145]">
              <span>Menu</span>
              <span>Locations</span>
              <span>Orders</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline text-[10px] text-[#3f4145]">Delivery · 14 Elm St</span>
            <span className="rounded-[5px] bg-[#266df0] px-2.5 py-1 text-[10.5px] font-semibold text-white">
              Cart · 2
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12">
          {/* Left Menu Area */}
          <div className="sm:col-span-8 p-4 border-b sm:border-b-0 sm:border-r border-[#dee0e3]">
            <div className="rounded-[10px] bg-gradient-to-r from-[#1d4ed8] via-[#266df0] to-[#3b82f6] p-4 text-white">
              <p className="text-[10px] text-white/80">Sample promotion</p>
              <p className="mt-0.5 text-[15px] font-bold">Featured menu items</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5 text-[10.5px]">
              <span className="rounded-full bg-[#0b0c0d] px-3 py-1 font-semibold text-white">Pizza</span>
              <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Pasta</span>
              <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Salads</span>
              <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Drinks</span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { name: "Pepperoni", price: "$14.00" },
                { name: "Margherita", price: "$12.50" },
                { name: "Four cheese", price: "$15.00" },
              ].map((item) => (
                <div key={item.name} className="rounded-[8px] border border-[#dee0e3] p-2">
                  <div className="h-14 rounded-[5px] bg-[#f3f4f6]" />
                  <p className="mt-2 text-[11px] font-bold">{item.name}</p>
                  <p className="text-[10px] text-[#3f4145]">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cart Sidebar */}
          <div className="sm:col-span-4 p-4 flex flex-col justify-between bg-white">
            <div>
              <p className="text-[12px] font-bold">Your order</p>
              <div className="mt-2.5 space-y-2 text-[10.5px]">
                <div className="flex justify-between">
                  <span className="text-[#3f4145]">2× Pepperoni</span>
                  <span className="font-medium">$28.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#3f4145]">1× Garlic bread</span>
                  <span className="font-medium">$5.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#3f4145]">Delivery</span>
                  <span className="font-medium">$3.40</span>
                </div>
                <div className="flex justify-between border-t border-[#dee0e3] pt-2 font-bold text-[11.5px]">
                  <span>Total</span>
                  <span>$36.90</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="rounded-[6px] bg-[#266df0] py-2 text-center text-[11px] font-semibold text-white">
                Checkout
              </div>
              <p className="mt-2 text-center text-[9px] text-[#7a7d84]">Apple Pay · Google Pay · Card · Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderingAppsMockup() {
  const steps = [
    { label: "Order accepted", time: "7:02 PM", done: true },
    { label: "In the kitchen", time: "7:08 PM", done: true },
    { label: "On the way", time: "ETA 8 min", active: true },
    { label: "Delivered", time: "Est. 7:24 PM", done: false },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[300px] sm:w-[330px] rounded-[34px] border border-[#2f3136] bg-[#16181c] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        <div className="rounded-[24px] bg-white p-5 text-[#0b0c0d]">
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#dee0e3]" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase text-[#1f5fd1]">Live order</p>
              <p className="text-[16px] font-bold">Order #48291</p>
            </div>
            <span className="rounded-full bg-[#e7f8f0] px-2.5 py-1 text-[10px] font-bold text-[#059669]">
              On the way
            </span>
          </div>

          <div className="mt-4 rounded-[10px] bg-[#f6f7f7] p-3.5 border border-[#dee0e3]">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold">Verde Cocina Riverside</span>
              <span className="font-mono text-[#1f5fd1]">14 Elm St</span>
            </div>
            <p className="mt-1 text-[11px] text-[#3f4145]">2× Green bowl · 1× Street corn · $30.50</p>
          </div>

          <ol className="mt-5 space-y-3">
            {steps.map((st) => (
              <li key={st.label} className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${
                      st.done
                        ? "bg-[#266df0] text-white"
                        : st.active
                          ? "border-2 border-[#266df0] bg-[#edf3ff]"
                          : "border border-[#dee0e3] bg-white"
                    }`}
                  >
                    {st.done && <Check className="h-3 w-3" strokeWidth={3} />}
                    {st.active && <span className="h-2 w-2 rounded-full bg-[#266df0]" />}
                  </span>
                  <span className={st.active || st.done ? "font-semibold text-[#0b0c0d]" : "text-[#989aa0]"}>
                    {st.label}
                  </span>
                </div>
                <span className="text-[11px] text-[#7a7d84]">{st.time}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-[6px] bg-[#266df0] py-2.5 text-center text-[12px] font-semibold text-white">
            Reorder in one tap
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantWebsiteMockup() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#2a2c30] bg-[#1e2024] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 px-4 pt-3 pb-2 bg-[#1c1e22]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4e54]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4e54]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4e54]" />
        </div>
        <span className="rounded-t-md bg-[#2a2c31] px-3 py-1 text-[11px] font-medium text-[#d4d6da]">
          Verde Cocina
        </span>
      </div>
      <div className="px-4 pb-2.5 bg-[#1c1e22]">
        <div className="flex items-center gap-2 rounded-md bg-[#27292e] px-3 py-1.5 text-[11px] text-[#c4c6ca]">
          <Lock className="h-3 w-3 text-[#989aa0]" />
          <span>order.verdecocina.com</span>
        </div>
      </div>

      <div className="bg-white p-5 text-[#0b0c0d]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[15px] font-bold">Verde Cocina</p>
          <div className="inline-flex rounded-full bg-[#f6f7f7] p-0.5 text-[10.5px]">
            <span className="rounded-full bg-white px-2.5 py-1 font-semibold shadow-xs">Delivery</span>
            <span className="px-2.5 py-1 text-[#3f4145]">Pickup</span>
            <span className="px-2.5 py-1 text-[#3f4145]">Dine in</span>
          </div>
        </div>

        <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#3f4145]">
          <MapPin className="h-3.5 w-3.5 text-[#7a7d84]" />
          <span>14 Elm St · As soon as possible</span>
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5 text-[10.5px]">
          <span className="rounded-full bg-[#0b0c0d] px-3 py-1 font-semibold text-white">Bowls</span>
          <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Tacos</span>
          <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Sides</span>
          <span className="rounded-full border border-[#dee0e3] px-3 py-1 text-[#3f4145]">Drinks</span>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            { name: "Green bowl", sub: "Choose a base · $12.50" },
            { name: "Chipotle bowl", sub: "Choose a base · $13.00" },
            { name: "Street corn", sub: "Side · $5.00" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-[8px] border border-[#dee0e3] px-3.5 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-[6px] bg-gradient-to-br from-[#d1fae5] to-[#e0f2fe]" />
                <div>
                  <p className="text-[12px] font-bold">{item.name}</p>
                  <p className="text-[10.5px] text-[#3f4145]">{item.sub}</p>
                </div>
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#dee0e3] text-[#0b0c0d]">
                <Plus className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-[8px] bg-[#266df0] px-4 py-3 text-white text-[12px] font-semibold">
          <span>2 items · $25.50</span>
          <span className="rounded border border-white/40 px-2.5 py-0.5 text-[11px]">Checkout</span>
        </div>
      </div>
    </div>
  );
}

function RestaurantAppMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-[300px] sm:w-[325px] rounded-[34px] border border-[#2f3136] bg-[#16181c] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        <div className="rounded-[24px] bg-white p-4 text-[#0b0c0d]">
          <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-[#dee0e3]" />
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-bold">Verde Cocina</span>
            <span className="rounded-full bg-[#edf3ff] px-2.5 py-0.5 text-[10px] font-semibold text-[#1f5fd1]">
              iOS · Android
            </span>
          </div>

          <div className="mt-3 flex gap-1.5 text-[10px]">
            <span className="rounded-full bg-[#0b0c0d] px-2.5 py-1 font-semibold text-white">Delivery</span>
            <span className="rounded-full border border-[#dee0e3] px-2.5 py-1 text-[#3f4145]">Pickup</span>
            <span className="rounded-full border border-[#dee0e3] px-2.5 py-1 text-[#3f4145]">Curbside</span>
          </div>

          <div className="mt-3.5 space-y-2">
            {[
              { name: "Green bowl", sub: "Brown rice · Avocado · $12.50" },
              { name: "Chipotle bowl", sub: "Grilled chicken · $13.00" },
              { name: "Hibiscus agua fresca", sub: "16 oz · $4.00" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-[8px] border border-[#dee0e3] p-2.5"
              >
                <div>
                  <p className="text-[11.5px] font-bold">{item.name}</p>
                  <p className="text-[10px] text-[#3f4145]">{item.sub}</p>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f6f7f7] text-[#0b0c0d]">
                  <Plus className="h-3 w-3" />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-[8px] bg-[#266df0] px-3.5 py-2.5 text-[11.5px] font-semibold text-white">
            <span>View cart · 2 items</span>
            <span>$25.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderingKioskMockup() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[360px] rounded-[16px] border border-[#2f3136] bg-[#181a1e] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        <div className="rounded-[10px] bg-white p-4 text-[#0b0c0d]">
          <div className="flex items-center justify-between border-b border-[#dee0e3] pb-2.5">
            <span className="text-[13px] font-bold">Verde Cocina</span>
            <span className="font-mono text-[10px] tracking-[0.12em] text-[#7a7d84]">SELF-ORDER</span>
          </div>

          <p className="mt-3 text-[13px] font-bold">How would you like to eat?</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded-[8px] border-2 border-[#266df0] bg-[#edf3ff]/60 p-2.5">
              <UtensilsCrossed className="h-4 w-4 text-[#266df0]" />
              <p className="mt-1 text-[11.5px] font-bold">Eat in</p>
              <p className="text-[10px] text-[#3f4145]">Table service</p>
            </div>
            <div className="rounded-[8px] border border-[#dee0e3] p-2.5">
              <ShoppingBag className="h-4 w-4 text-[#3f4145]" />
              <p className="mt-1 text-[11.5px] font-bold">Take out</p>
              <p className="text-[10px] text-[#3f4145]">Ready at the counter</p>
            </div>
          </div>

          <div className="mt-3 flex gap-3 border-b border-[#dee0e3] pb-2 text-[10.5px] text-[#3f4145]">
            <span className="font-bold text-[#0b0c0d]">Bowls</span>
            <span>Tacos</span>
            <span>Sides</span>
            <span>Drinks</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { name: "Green bowl", sub: "Choose a base" },
              { name: "Chipotle bowl", sub: "Choose a base" },
              { name: "Street corn", sub: "Add a topping" },
              { name: "Horchata", sub: "Two sizes" },
            ].map((item) => (
              <div key={item.name} className="rounded-[8px] border border-[#dee0e3] p-2.5">
                <div className="h-7 rounded bg-[#f3f4f6]" />
                <p className="mt-2 text-[11px] font-bold">{item.name}</p>
                <p className="text-[9.5px] text-[#3f4145]">{item.sub}</p>
                <span className="mt-2 inline-block rounded-[4px] bg-[#266df0] px-2.5 py-1 text-[10px] font-semibold text-white">
                  + Add
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3.5 flex items-center justify-between border-t border-[#dee0e3] pt-3">
            <div>
              <p className="text-[11px] font-bold">Your order</p>
              <p className="text-[10px] text-[#3f4145]">3 items</p>
            </div>
            <span className="rounded-[6px] bg-[#266df0] px-3.5 py-2 text-[11px] font-semibold text-white">
              Review and pay
            </span>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 border-t border-[#dee0e3] pt-2.5 text-[10px] text-[#7a7d84]">
            <CreditCard className="h-3.5 w-3.5" />
            <QrCode className="h-3.5 w-3.5" />
            <span>Card terminal · QR pay</span>
          </div>
        </div>
      </div>
      {/* Kiosk stand neck + base */}
      <div className="h-5 w-14 bg-[#26282d]" />
      <div className="h-2 w-36 rounded-full bg-[#2f3136]" />
    </div>
  );
}

function OrderingCallCenterMockup() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#2a2c30] bg-[#16181c] p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
      <div className="rounded-[8px] bg-white p-4 text-[#0b0c0d] space-y-3">
        <div className="flex items-center justify-between border-b border-[#dee0e3] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7f8f0] text-[#059669]">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[12px] font-bold">Caller: +1 (555) 234-8890</p>
              <p className="text-[10px] text-[#3f4145]">Maya Patel · 14 past orders</p>
            </div>
          </div>
          <span className="rounded-full bg-[#edf3ff] px-2.5 py-0.5 text-[10px] font-semibold text-[#1f5fd1]">
            Agent Console
          </span>
        </div>

        <div className="rounded-[8px] bg-[#f6f7f7] p-3 border border-[#dee0e3] text-[11px]">
          <div className="flex justify-between">
            <span className="font-semibold">Saved address</span>
            <span className="text-[#1f5fd1] font-semibold">Nearest store matched</span>
          </div>
          <p className="mt-1 text-[#3f4145]">14 Elm St, Apt 3B → Verde Cocina Riverside (1.2 mi)</p>
        </div>

        <div className="space-y-1.5 text-[11px]">
          <div className="flex justify-between rounded border border-[#dee0e3] px-3 py-2">
            <span className="font-medium">2× Green bowl (Extra avocado)</span>
            <span className="font-bold">$28.00</span>
          </div>
          <div className="flex justify-between rounded border border-[#dee0e3] px-3 py-2">
            <span className="font-medium">1× Street corn</span>
            <span className="font-bold">$5.00</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#dee0e3]">
          <span className="text-[12px] font-bold">Total: $36.40</span>
          <div className="flex gap-2">
            <span className="rounded-[5px] border border-[#dee0e3] px-2.5 py-1.5 text-[10.5px] font-semibold">
              Card on file
            </span>
            <span className="rounded-[5px] bg-[#266df0] px-3 py-1.5 text-[10.5px] font-semibold text-white">
              Send payment link
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiStoreMockup() {
  const stores = [
    { name: "Verde Cocina · Riverside", dist: "1.2 mi", eta: "20–25 min", status: "Delivery & Pickup", active: true },
    { name: "Verde Cocina · Downtown", dist: "2.8 mi", eta: "30–35 min", status: "Delivery & Pickup", active: false },
    { name: "Verde Cocina · Airport", dist: "6.4 mi", eta: "15 min", status: "Pickup only", active: false },
  ];

  return (
    <div className="overflow-hidden rounded-[12px] border border-[#2a2c30] bg-[#16181c] p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
      <div className="rounded-[8px] bg-white p-5 text-[#0b0c0d]">
        <p className="text-[11px] font-mono uppercase text-[#1f5fd1]">Store finder</p>
        <p className="mt-1 text-[16px] font-bold">Choose your location</p>
        <div className="mt-3 flex items-center gap-2 rounded-[6px] border border-[#dee0e3] bg-[#f6f7f7] px-3 py-2 text-[12px]">
          <MapPin className="h-4 w-4 text-[#266df0]" />
          <span className="font-medium">14 Elm St, Austin, TX</span>
        </div>

        <div className="mt-4 space-y-2.5">
          {stores.map((st) => (
            <div
              key={st.name}
              className={`rounded-[8px] p-3 border flex items-center justify-between ${
                st.active ? "border-[#266df0] bg-[#edf3ff]/40" : "border-[#dee0e3] bg-white"
              }`}
            >
              <div>
                <p className="text-[12px] font-bold">{st.name}</p>
                <p className="text-[10.5px] text-[#3f4145]">
                  {st.dist} · {st.status} · {st.eta}
                </p>
              </div>
              <span
                className={`rounded-[5px] px-2.5 py-1 text-[10.5px] font-semibold ${
                  st.active ? "bg-[#266df0] text-white" : "border border-[#dee0e3] text-[#0b0c0d]"
                }`}
              >
                {st.active ? "Order here" : "Select"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AiAgentsHeroMockup() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#2b2d32] bg-[#141518] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between border-b border-[#26282c] px-5 py-3.5 text-[12px]">
        <span className="font-semibold text-white">Verde Cocina · WhatsApp</span>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#c4c6ca]">
          <span className="h-2 w-2 rounded-full bg-[#00d17e]" />
          Agent online
        </span>
      </div>

      <div className="p-5 space-y-3 text-[12.5px] leading-[1.45]">
        <div className="ml-auto max-w-[82%] rounded-[10px] rounded-br-[3px] bg-[#266df0] px-3.5 py-2.5 text-white">
          Hi, two green bowls and an agua fresca for delivery to 14 Elm St.
        </div>

        <div className="max-w-[84%] rounded-[10px] rounded-bl-[3px] bg-[#222428] px-3.5 py-2.5 text-[#e5e7eb]">
          Two green bowls and one hibiscus agua fresca from Verde Cocina Riverside, delivering to 14 Elm St. Anything
          else?
        </div>

        <div className="ml-auto w-fit rounded-[10px] rounded-br-[3px] bg-[#266df0] px-3.5 py-2 text-white">
          That&apos;s everything.
        </div>

        <div className="max-w-[80%] rounded-[10px] rounded-bl-[3px] bg-[#222428] px-3.5 py-2.5 text-[#e5e7eb]">
          I&apos;ll share the next step to complete this order.
        </div>

        <div className="ml-auto w-fit rounded-[10px] rounded-br-[3px] bg-[#266df0] px-3.5 py-2 text-white">
          Thanks, I&apos;ve completed that step.
        </div>

        <div className="mt-4 rounded-[8px] border border-[#2f3136] bg-[#18191d] p-3.5 text-[11.5px]">
          <p className="font-mono text-[10.5px] text-[#989aa0]">Illustrative order handoff</p>
          <p className="mt-1 font-semibold text-white">Order context passed to the operations team</p>
          <p className="mt-0.5 text-[#c4c6ca]">Store, fulfillment, and handoff details kept together</p>
        </div>
      </div>
    </div>
  );
}
