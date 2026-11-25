"use client";

import Image from "next/image";
import { Check, ChevronLeft, MapPin, Mic, Phone, Plus, Search, Star } from "lucide-react";

/** 1. Marketplace Website Preview (circular categories, filters, green promo banner, Top Businesses) */
export function MarketplaceWebPreview() {
  const categories = ["All", "Food", "Coffee", "Dessert", "Asian", "Mexican", "Healthy", "Steak", "Sushi"];
  const filters = ["Price", "Brands", "Delivery fee", "Max delivery time", "Max distance"];
  const stores = [
    { name: "Fast Bite", time: "25 min", img: "/images/hero-bowl-main.jpg" },
    { name: "Chick-fil-A", time: "20 min", img: "/images/bowl-mediterranean.jpg" },
    { name: "Fresh Patio", time: "30 min", img: "/images/bowl-salmon.jpg" },
    { name: "P.F. Changs", time: "35 min", img: "/images/case-alsea.jpg" },
    { name: "Panera", time: "18 min", img: "/images/audience-operator.jpg" },
  ];

  return (
    <div className="h-full w-full bg-white p-3 sm:p-4 text-[#151417] flex flex-col justify-between overflow-hidden select-none">
      {/* Circular Category Icons Row */}
      <div className="flex items-center gap-2 overflow-hidden">
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className={`flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 shrink-0 ${
              idx === 0 ? "bg-[#FDECEF] text-[#B8123A]" : "text-[#3A393F]"
            }`}
          >
            <div className="h-6 w-6 rounded-full bg-[#F5F5F6] border border-[#D9D9DD] flex items-center justify-center text-[9px] font-bold">
              {cat.slice(0, 2)}
            </div>
            <span className="text-[7.5px] font-medium">{cat}</span>
          </div>
        ))}
      </div>

      {/* Filter Pills + Search */}
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 overflow-hidden">
          {filters.map((f) => (
            <span
              key={f}
              className="rounded-full border border-[#D9D9DD] bg-white px-2 py-0.5 text-[7.5px] text-[#3A393F] whitespace-nowrap"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="hidden sm:flex items-center gap-1 rounded-full border border-[#D9D9DD] bg-[#F5F5F6] px-2.5 py-0.5 text-[7.5px] text-[#9A99A1] w-28">
          <Search className="h-2.5 w-2.5" />
          <span>Search</span>
        </div>
      </div>

      {/* Green Healthy Promo Banner */}
      <div className="mt-2.5 grid grid-cols-12 gap-3 items-center">
        <div className="col-span-6 sm:col-span-5 rounded-xl bg-gradient-to-r from-[#2fb36d] to-[#52c788] p-2.5 text-white flex items-center justify-between overflow-hidden">
          <div className="space-y-0.5">
            <p className="text-[11px] font-bold leading-tight">Healthy</p>
            <p className="text-[7.5px] text-white/90 leading-tight">Fresh bowls just launched</p>
            <span className="mt-1 inline-block rounded bg-white px-1.5 py-0.5 text-[7px] font-bold text-[#15803d]">
              Order now
            </span>
          </div>
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/40">
            <Image src="/images/bowl-mediterranean.jpg" alt="Healthy" fill sizes="60px" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Top Businesses Grid */}
      <div className="mt-2.5">
        <p className="text-[9.5px] font-bold text-[#151417]">Top Businesses</p>
        <p className="text-[7px] text-[#9A99A1]">Sponsored</p>
        <div className="mt-1.5 grid grid-cols-5 gap-2">
          {stores.map((st) => (
            <div key={st.name} className="space-y-1">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#F5F5F6]">
                <Image src={st.img} alt={st.name} fill sizes="120px" className="object-cover" />
                <span className="absolute left-1 top-1 rounded bg-black/65 px-1 py-0.5 text-[6px] font-semibold text-white">
                  10% off
                </span>
              </div>
              <p className="truncate text-[8px] font-semibold text-[#151417]">{st.name}</p>
              <p className="text-[6.5px] text-[#9A99A1]">{st.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** 2. Marketplace App Preview (5 fanned iPhones with emerald center hero screen) */
export function MarketplaceAppPreview() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden p-4 select-none">
      {/* Far Left Phone */}
      <div className="hidden sm:block w-[86px] -mr-5 -rotate-[12deg] translate-y-4 rounded-[16px] bg-[#1B1A1F] p-1 shadow-lg">
        <div className="rounded-[12px] bg-white p-1.5 h-[165px] overflow-hidden text-[#151417]">
          <p className="text-[6.5px] font-bold">Delivery · ASAP</p>
          <div className="mt-1.5 grid grid-cols-2 gap-1">
            <div className="h-8 rounded bg-[#F5F5F6]" />
            <div className="h-8 rounded bg-[#F5F5F6]" />
          </div>
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image src="/images/hero-bowl-main.jpg" alt="" fill sizes="80px" className="object-cover" />
          </div>
          <p className="mt-1 text-[6px] font-bold">Top businesses</p>
        </div>
      </div>

      {/* Mid Left Phone */}
      <div className="w-[100px] sm:w-[108px] -mr-4 -rotate-[6deg] -translate-y-2 rounded-[18px] bg-[#1B1A1F] p-1 shadow-xl z-10">
        <div className="rounded-[14px] bg-white p-2 h-[192px] overflow-hidden text-[#151417]">
          <p className="text-[7px] font-bold text-[#3A393F]">Featured items</p>
          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
            {["/images/hero-bowl-main.jpg", "/images/bowl-salmon.jpg", "/images/bowl-mediterranean.jpg", "/images/hero-bowl-main.jpg"].map(
              (src, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="relative aspect-square rounded overflow-hidden">
                    <Image src={src} alt="" fill sizes="50px" className="object-cover" />
                  </div>
                  <p className="text-[6px] font-semibold">$12.90</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Center Emerald Hero Phone */}
      <div className="w-[116px] sm:w-[132px] z-20 translate-y-3 rounded-[22px] bg-[#1B1A1F] p-[5px] shadow-2xl ring-1 ring-white/20">
        <div className="rounded-[17px] bg-gradient-to-b from-[#2fb36d] via-[#1f9d5a] to-[#0b3d24] p-2.5 h-[222px] flex flex-col justify-between text-white overflow-hidden">
          <div>
            <span className="inline-block rounded-full bg-white/20 px-1.5 py-0.5 text-[6px]">English</span>
            <p className="mt-2 text-[11px] font-bold leading-tight">
              Shop easily,
              <br />
              quickly and
              <br />
              securely.
            </p>
          </div>
          <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/30">
            <Image src="/images/bowl-mediterranean.jpg" alt="Marketplace app" fill sizes="90px" className="object-cover" />
          </div>
          <div className="space-y-1">
            <div className="rounded-md bg-[#111013] py-1 text-center text-[7px] font-semibold">Log in</div>
            <div className="rounded-md bg-white py-1 text-center text-[7px] font-semibold text-[#151417]">Sign up</div>
          </div>
        </div>
      </div>

      {/* Mid Right Phone */}
      <div className="w-[100px] sm:w-[108px] -ml-4 rotate-[7deg] -translate-y-2 rounded-[18px] bg-[#1B1A1F] p-1 shadow-xl z-10">
        <div className="rounded-[14px] bg-white p-2 h-[192px] overflow-hidden text-[#151417]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
            <Image src="/images/bowl-salmon.jpg" alt="" fill sizes="90px" className="object-cover" />
          </div>
          <p className="mt-1.5 text-[7.5px] font-bold">Japanese Cuisine</p>
          <p className="text-[6px] text-[#3A393F]">4.9 ★ · 20–30 min</p>
          <div className="mt-2 space-y-1">
            <div className="h-5 rounded bg-[#F5F5F6]" />
            <div className="h-5 rounded bg-[#F5F5F6]" />
          </div>
        </div>
      </div>

      {/* Far Right Phone (Checkout) */}
      <div className="hidden sm:block w-[86px] -ml-5 rotate-[13deg] translate-y-4 rounded-[16px] bg-[#1B1A1F] p-1 shadow-lg">
        <div className="rounded-[12px] bg-white p-2 h-[165px] overflow-hidden text-[#151417] flex flex-col justify-between">
          <div>
            <p className="text-[7px] font-bold">Checkout</p>
            <div className="mt-2 space-y-1">
              <div className="h-3 rounded bg-[#F5F5F6]" />
              <div className="h-3 rounded bg-[#F5F5F6]" />
              <div className="h-3 rounded bg-[#F5F5F6]" />
            </div>
          </div>
          <div className="rounded bg-[#D91842] py-1 text-center text-[6.5px] font-semibold text-white">
            Place order
          </div>
        </div>
      </div>
    </div>
  );
}

/** 3. Restaurant Website Preview (Wagamoto Modern Asian Cuisine banner + menu tabs + favorites) */
export function RestaurantWebPreview() {
  const tabs = ["All", "Favorites", "Combos", "Bundles", "Bao", "Fried Rice", "Desserts", "Bowls"];

  return (
    <div className="h-full w-full bg-white text-[#151417] flex flex-col overflow-hidden select-none">
      {/* Banner Header */}
      <div className="relative h-[42%] w-full bg-gradient-to-r from-[#f8f3eb] via-[#f4ede2] to-[#e9e0d2] px-5 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-3 z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#182234] text-white font-black text-xl tracking-tight shadow-sm">
            W
          </div>
          <div>
            <p className="text-[17px] sm:text-[20px] font-black tracking-wide text-[#182234] leading-none">
              WAGAMOTO
            </p>
            <p className="mt-0.5 text-[8px] font-semibold tracking-[0.18em] text-[#3A393F]">
              MODERN ASIAN CUISINE
            </p>
          </div>
        </div>
        <div className="relative h-24 w-36 rounded-xl overflow-hidden opacity-90 shadow-sm hidden sm:block">
          <Image src="/images/bowl-salmon.jpg" alt="Wagamoto menu" fill sizes="160px" className="object-cover" />
        </div>
      </div>

      {/* Store Meta + Delivery Badges */}
      <div className="px-4 py-2.5 flex items-center justify-between gap-2 border-b border-[#D9D9DD]/60">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg border border-[#D9D9DD] bg-white flex items-center justify-center font-black text-xs text-[#182234]">
            W
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#151417]">Wagamoto</p>
            <p className="text-[7.5px] text-[#3A393F]">2950 Clarendon Blvd, Court House, VA 22201</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-center">
          <div className="rounded-md border border-[#D9D9DD] px-2.5 py-1">
            <p className="text-[8.5px] font-bold">0.00 $</p>
            <p className="text-[6.5px] text-[#9A99A1]">Delivery fee</p>
          </div>
          <div className="rounded-md border border-[#D9D9DD] px-2.5 py-1">
            <p className="text-[8.5px] font-bold">25min</p>
            <p className="text-[6.5px] text-[#9A99A1]">Delivery time</p>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="px-4 py-2 flex items-center gap-1.5 overflow-hidden">
        {tabs.map((tab, idx) => (
          <span
            key={tab}
            className={`rounded-full px-2.5 py-0.5 text-[7.5px] font-medium whitespace-nowrap ${
              idx === 0 ? "bg-[#FDECEF] text-[#B8123A] font-semibold" : "bg-[#F5F5F6] text-[#3A393F]"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Favorites Row */}
      <div className="px-4 pb-3 flex-1">
        <p className="text-[9.5px] font-bold text-[#151417] mb-1.5">Favorites</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Bowl + 2 Bao", img: "/images/hero-bowl-main.jpg" },
            { name: "Bowl + 3 Potstickers", img: "/images/bowl-salmon.jpg" },
            { name: "6 Pack of Bao", img: "/images/bowl-mediterranean.jpg" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-lg border border-[#D9D9DD]/80 p-1.5 bg-white"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md">
                <Image src={item.img} alt={item.name} fill sizes="48px" className="object-cover" />
              </div>
              <p className="text-[7.5px] font-semibold leading-tight text-[#151417] line-clamp-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** 4. Restaurant App Preview (2 slightly angled iPhones side by side with featured menu + dark View Order button) */
export function RestaurantAppPreview() {
  return (
    <div className="h-full w-full flex items-center justify-center gap-2 sm:gap-4 p-4 overflow-hidden select-none">
      {/* Left Angled Phone */}
      <div className="w-[126px] sm:w-[146px] -rotate-[5deg] rounded-[22px] bg-[#1B1A1F] p-[5px] shadow-xl">
        <div className="rounded-[17px] bg-white p-2.5 h-[228px] flex flex-col justify-between text-[#151417] overflow-hidden">
          <div>
            <div className="flex items-center justify-between text-[7px] text-[#3A393F]">
              <span className="font-semibold">Delivery</span>
              <span>ASAP</span>
            </div>
            <div className="mt-1.5 flex gap-1">
              <span className="rounded-full bg-[#5E9B2E] px-2 py-0.5 text-[6.5px] font-semibold text-white">All</span>
              <span className="rounded-full bg-[#F5F5F6] px-2 py-0.5 text-[6.5px]">Featured</span>
              <span className="rounded-full bg-[#F5F5F6] px-2 py-0.5 text-[6.5px]">Popular</span>
            </div>
            <p className="mt-2 text-[8px] font-bold">Featured items</p>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              {[
                { name: "Signature Bowl", price: "$14.50", img: "/images/hero-bowl-main.jpg" },
                { name: "Salmon Poke", price: "$16.00", img: "/images/bowl-salmon.jpg" },
              ].map((it) => (
                <div key={it.name} className="rounded-lg border border-[#D9D9DD] p-1">
                  <div className="relative aspect-square rounded overflow-hidden">
                    <Image src={it.img} alt={it.name} fill sizes="60px" className="object-cover" />
                    <span className="absolute right-0.5 bottom-0.5 h-3.5 w-3.5 rounded-full bg-white shadow flex items-center justify-center">
                      <Plus className="h-2 w-2" />
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[6.5px] font-semibold">{it.name}</p>
                  <p className="text-[6.5px] font-bold text-[#B8123A]">{it.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-full bg-[#111013] py-1.5 text-center text-[7px] font-semibold text-white">
            View Order · $49.38
          </div>
        </div>
      </div>

      {/* Right Angled Phone */}
      <div className="w-[126px] sm:w-[146px] rotate-[4deg] translate-y-2 rounded-[22px] bg-[#1B1A1F] p-[5px] shadow-xl">
        <div className="rounded-[17px] bg-white p-2.5 h-[228px] flex flex-col justify-between text-[#151417] overflow-hidden">
          <div>
            <div className="flex items-center justify-between text-[7px] text-[#3A393F]">
              <span className="font-semibold">Delivery</span>
              <span>ASAP</span>
            </div>
            <p className="mt-2 text-[8px] font-bold">Limited Time Only</p>
            <div className="mt-1.5 space-y-2">
              {[
                { name: "Grilled Chicken Combo", price: "$18.90", img: "/images/hero-bowl-main.jpg" },
                { name: "Mediterranean Plate", price: "$13.50", img: "/images/bowl-mediterranean.jpg" },
                { name: "Crispy Salmon Roll", price: "$11.20", img: "/images/bowl-salmon.jpg" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between gap-1.5 border-b border-slate-100 pb-1.5">
                  <div className="min-w-0">
                    <p className="truncate text-[7px] font-bold">{row.name}</p>
                    <p className="text-[6.5px] text-[#3A393F]">{row.price}</p>
                  </div>
                  <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md">
                    <Image src={row.img} alt={row.name} fill sizes="40px" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-full bg-[#111013] py-1.5 text-center text-[7px] font-semibold text-white">
            View Order · $18.90
          </div>
        </div>
      </div>
    </div>
  );
}

/** 5. Business App Preview (Back "Your logo / Welcome" phone + Front "My orders" In Progress queue phone) */
export function BusinessAppPreview() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 overflow-hidden select-none">
      <div className="relative flex items-center">
        {/* Back Phone ("Your logo / Welcome") */}
        <div className="w-[122px] sm:w-[136px] -translate-y-2 rounded-[22px] bg-[#1B1A1F] p-[5px] shadow-xl">
          <div className="relative rounded-[17px] h-[222px] overflow-hidden flex flex-col justify-between p-2.5 text-white">
            <Image src="/images/audience-operator.jpg" alt="" fill sizes="140px" className="object-cover brightness-50" />
            <div className="relative z-10 mt-1 rounded-md bg-white px-2 py-1 text-center text-[10px] font-bold text-[#151417] shadow">
              Your logo
            </div>
            <div className="relative z-10 space-y-1.5">
              <p className="text-[12px] font-bold">Welcome</p>
              <div className="rounded bg-white/15 px-2 py-1 text-[6.5px] text-white/80 border border-white/20">
                Project name
              </div>
              <div className="rounded bg-[#D91842] py-1 text-center text-[7.5px] font-semibold">
                Set project
              </div>
            </div>
          </div>
        </div>

        {/* Front Phone ("My orders" In Progress) */}
        <div className="w-[128px] sm:w-[144px] -ml-6 translate-y-4 z-10 rounded-[22px] bg-[#1B1A1F] p-[5px] shadow-2xl ring-1 ring-white/20">
          <div className="rounded-[17px] bg-white p-2.5 h-[222px] text-[#151417] overflow-hidden">
            <div className="flex items-center justify-between">
              <p className="text-[9.5px] font-bold">My orders</p>
              <span className="h-2 w-2 rounded-full bg-[#00d17e]" />
            </div>
            <div className="mt-1.5 flex gap-1.5 border-b border-slate-100 pb-1 text-[6.5px]">
              <span className="text-[#9A99A1]">Pending</span>
              <span className="font-bold text-[#151417] border-b border-[#151417] pb-0.5">In Progress</span>
              <span className="text-[#9A99A1]">Completed</span>
            </div>
            <div className="mt-2 space-y-2">
              {[
                { name: "Italian (DEMO)", status: "Accepted by business", id: "No. 2442", color: "bg-emerald-500" },
                { name: "Flowers (DEMO)", status: "Driver in business", id: "No. 2439", color: "bg-pink-500" },
                { name: "Pizza Master", status: "Ready for pickup", id: "No. 2435", color: "bg-orange-500" },
                { name: "Fresh Bowls", status: "Preparing · 12 min", id: "No. 2431", color: "bg-[#D91842]" },
              ].map((ord) => (
                <div key={ord.id} className="flex items-start gap-2 border-b border-slate-100 pb-1.5">
                  <span className={`mt-0.5 h-5 w-5 shrink-0 rounded-md ${ord.color} text-[7px] font-bold text-white flex items-center justify-center`}>
                    {ord.name.slice(0, 2)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[7.5px] font-bold">{ord.name}</p>
                    <p className="text-[6px] text-[#9A99A1]">{ord.id}</p>
                    <p className="truncate text-[6px] font-semibold text-[#B8123A]">{ord.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 6. Driver App Preview (Courier backdrop + Map Phone + Accepted Order Details Phone) */
export function DriverAppPreview() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 overflow-hidden select-none">
      <div className="relative flex items-center justify-center w-full max-w-[360px]">
        {/* Courier Background Card */}
        <div className="relative h-[220px] w-[220px] overflow-hidden rounded-xl shadow-md ml-12">
          <Image src="/images/journey-delivery.jpg" alt="Delivery driver" fill sizes="240px" className="object-cover" />
        </div>

        {/* Left Map Phone */}
        <div className="absolute left-2 sm:left-4 top-5 w-[106px] sm:w-[116px] rounded-[18px] bg-[#1B1A1F] p-1 shadow-xl z-10">
          <div className="rounded-[14px] bg-[#FDECEF] h-[182px] overflow-hidden relative p-2 text-[#151417]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 120 180" fill="none">
              <path d="M 10 150 Q 55 95 45 55 T 105 22" stroke="#D91842" strokeWidth="3" strokeDasharray="4 4" />
              <circle cx="45" cy="55" r="5" fill="#D91842" />
              <circle cx="105" cy="22" r="5" fill="#00d17e" />
            </svg>
            <div className="relative z-10 mt-auto flex flex-col justify-between h-full">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[6.5px] font-bold shadow-xs">
                <MapPin className="h-2.5 w-2.5 text-[#D91842]" /> 1.4 km
              </span>
              <div className="rounded-lg bg-white p-1.5 shadow-sm text-[6.5px]">
                <p className="font-bold">Pickup ready</p>
                <p className="text-[#3A393F]">ETA 7 mins</p>
              </div>
            </div>
          </div>
        </div>

        {/* Front Center Order Details Phone */}
        <div className="absolute left-[74px] sm:left-[92px] bottom-1 w-[114px] sm:w-[126px] rounded-[20px] bg-[#1B1A1F] p-[4px] shadow-2xl z-20 ring-1 ring-white/25">
          <div className="rounded-[16px] bg-white p-2.5 h-[196px] flex flex-col justify-between text-[#151417]">
            <div className="space-y-1.5">
              <p className="text-[7px] font-bold leading-tight">Order No. 2437 is Accepted by driver</p>
              <div className="rounded bg-[#F5F5F6] p-1.5 text-[6px] space-y-0.5">
                <p className="font-bold text-[#151417]">Business details</p>
                <p className="text-[#3A393F]">Downtown Kitchen · 5th Ave</p>
              </div>
              <div className="rounded bg-[#F5F5F6] p-1.5 text-[6px] space-y-0.5">
                <p className="font-bold text-[#151417]">Customer details</p>
                <p className="text-[#3A393F]">Alex Morgan · Apt 4B</p>
                <div className="flex items-center gap-1 text-[#B8123A] pt-0.5">
                  <Phone className="h-2 w-2" /> <span>Call customer</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[6px] font-bold text-white text-center">
              <span className="rounded bg-[#eb3b3b] py-1">Pickup failed</span>
              <span className="rounded bg-[#00a86b] py-1">Pickup complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 7. AI Ordering Agents WhatsApp Dark-Mode Phone Preview + "From conversation to order" annotation */
export function AiWhatsappPreview() {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-6 overflow-hidden select-none">
      {/* Pale blue circle aura behind phone */}
      <div className="pointer-events-none absolute h-[240px] w-[240px] rounded-full bg-[#dbe8ff]" />

      {/* Hand-drawn style annotation on right */}
      <div className="hidden sm:flex flex-col items-center absolute right-5 top-12 z-20 text-[#B8123A]">
        <span className="text-[11px] font-semibold italic leading-tight text-center -rotate-6">
          From
          <br />
          conversation
          <br />
          to order
        </span>
        <svg width="36" height="34" viewBox="0 0 36 34" fill="none" className="mt-1">
          <path d="M 28 2 C 26 18 16 26 4 28" stroke="#B8123A" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 9 23 L 3 28 L 10 31" stroke="#B8123A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Dark WhatsApp iPhone */}
      <div className="relative z-10 w-[184px] sm:w-[200px] rounded-[28px] bg-[#1B1A1F] p-[6px] shadow-[0_24px_55px_-12px_rgba(11,12,13,0.35)]">
        <div className="rounded-[22px] bg-[#0b141a] overflow-hidden text-white">
          {/* Top Bar */}
          <div className="flex items-center gap-2 bg-[#1f2c34] px-3 py-2.5">
            <ChevronLeft className="h-3.5 w-3.5 text-slate-300" />
            <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-[#10B981] via-[#D91842] to-[#F59E0B] p-[2px]">
              <span className="block h-full w-full rounded-full bg-white" />
            </span>
            <div className="leading-none">
              <p className="text-[9.5px] font-bold">OPERO</p>
              <p className="text-[7px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                <Star className="h-2 w-2 fill-current" /> AI Agent
              </p>
            </div>
          </div>

          {/* WhatsApp Messages */}
          <div className="p-2.5 space-y-2 text-[7.5px] leading-[1.35]">
            <div className="max-w-[92%] rounded-xl rounded-tl-sm bg-[#1f2c34] px-2.5 py-2 text-slate-100">
              <p className="font-semibold">Let&apos;s customize your Spicy Pepperoni Pizza:</p>
              <p className="mt-1 text-slate-300">1. Choose Your Dough: Classic, Gluten-Free, High-Rise</p>
              <p className="text-slate-300">2. Choose Your Sauce: Red Sauce, White Cream, BBQ</p>
              <p className="mt-1 text-slate-200">Which dough and sauce would you like?</p>
            </div>

            <div className="ml-auto w-fit rounded-xl rounded-tr-sm bg-[#005c4b] px-2.5 py-1.5 text-white flex items-center gap-1">
              <span>Classic and red sauce</span>
              <Check className="h-2.5 w-2.5 text-sky-300" />
            </div>

            <div className="max-w-[92%] rounded-xl rounded-tl-sm bg-[#1f2c34] px-2.5 py-2 text-slate-100">
              <p className="font-semibold">Added Spicy Pepperoni Pizza with Classic Dough and Red Sauce.</p>
              <p className="mt-1 text-slate-300">Your cart is ready. Would you like to add a side or drink?</p>
            </div>
          </div>

          {/* Input Bar */}
          <div className="flex items-center gap-1.5 bg-[#1f2c34] px-2.5 py-2">
            <div className="flex-1 rounded-full bg-[#2a3942] px-2.5 py-1 text-[7.5px] text-slate-400">
              Message...
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00a884] text-white">
              <Mic className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
