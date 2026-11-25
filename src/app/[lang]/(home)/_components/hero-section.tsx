"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

import { OperoOrbitAccent } from "@/components/brand/opero-logo";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();

  return (
    <section id="top" className="bg-[var(--od-bg)] pt-4 pb-10 sm:pt-6 lg:pt-8 lg:pb-14">
      <Container>
        {/* Framed OPERO Night Hero Card (DESIGN.md §8 — #111013, 20px radius, Orbit motif) */}
        <div className="relative overflow-hidden rounded-[20px] bg-[#111013] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-white">
          {/* Signature OPERO D01 Orbit cropped motif (flat geometry, no glow) */}
          <OperoOrbitAccent
            opacity={0.22}
            className="hidden lg:block absolute -right-24 -top-24 h-[520px] w-[520px] z-0"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Copy Column */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1B1A1F] border border-[#2A2A2E] px-3.5 py-1.5 text-[12.5px] font-medium text-[#A9A8AF]">
                <span className="h-2 w-2 rounded-full bg-[#5E9B2E]" aria-hidden="true" />
                <span>
                  {isVi
                    ? "Kết nối · Vận hành · Tăng trưởng"
                    : "Connect · Operate · Grow"}
                </span>
              </div>

              <h1 className="mt-6 text-[40px] sm:text-[52px] lg:text-[60px] font-bold tracking-[-1.4px] leading-[1.08] text-white">
                <span className="block">{isVi ? "Thương hiệu bạn." : "Your business."}</span>
                <span className="block">{isVi ? "Mọi đơn hàng." : "Every order."}</span>
                <span className="block text-[#D91842]">{isVi ? "Vận hành trơn tru." : "Connected."}</span>
              </h1>

              <p className="mt-6 max-w-[46ch] text-[16px] sm:text-[18px] leading-[1.6] text-[#A9A8AF]">
                {isVi
                  ? `Xây dựng website, ứng dụng, Zalo Mini App và trải nghiệm AI đặt hàng. Kết nối đơn hàng, thanh toán, chi nhánh và giao vận trên ${siteConfig.name}.`
                  : `Build websites, apps, marketplaces, and AI ordering experiences. Connect orders, payments, locations, and delivery on ${siteConfig.name}.`}
              </p>

              {/* Primary Action Row (OPERO UI Kit .btn-brand + .btn-ghost-dark) */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("hero_book_demo")}
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#D91842] px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-[#B8123A] active:bg-[#94102F] active:scale-[0.98] cursor-pointer"
                >
                  <span>{isVi ? "Đặt lịch demo" : "Book a demo"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  href="/demo"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-transparent shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.34)] px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-white/10 active:scale-[0.98]"
                >
                  <span>{isVi ? "Xem bản demo" : "See live demo"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Secondary Explore Links */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#A9A8AF] hover:text-white transition-colors duration-150"
                >
                  <span>{isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="#platform"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#A9A8AF] hover:text-white transition-colors duration-150"
                >
                  <span>{isVi ? "Khám phá nền tảng" : "Explore the platform"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Overlapping MacBook ("Your website") + iPhone ("Your app") Visual */}
            <div className="lg:col-span-7">
              <div className="relative pt-10 pb-6 sm:pt-12">
                {/* Floating Callout: "Your website" */}
                <div className="absolute left-6 sm:left-14 top-1 sm:top-2 z-20 flex flex-col items-start">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1B1A1F] border border-[#2A2A2E] px-3 py-1 text-[12px] font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5E9B2E]" />
                    <span>{isVi ? "Website của bạn" : "Your website"}</span>
                  </span>
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="ml-8 -mt-0.5">
                    <line x1="2" y1="0" x2="14" y2="24" stroke="#D91842" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Floating Callout: "Your app" */}
                <div className="absolute right-2 sm:right-6 top-[20%] z-30 flex flex-col items-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1B1A1F] border border-[#2A2A2E] px-3 py-1 text-[12px] font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5E9B2E]" />
                    <span>{isVi ? "App của bạn" : "Your app"}</span>
                  </span>
                  <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="-mt-0.5">
                    <line x1="10" y1="0" x2="4" y2="22" stroke="#D91842" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* MacBook Frame */}
                <div className="relative z-10 mr-10 sm:mr-20 lg:mr-24">
                  <div className="rounded-t-[18px] rounded-b-[4px] bg-[#1B1A1F] border border-[#2A2A2E] p-2.5 sm:p-3">
                    <div className="overflow-hidden rounded-[10px] bg-white text-[#151417]">
                      {/* Branded Storefront Header */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-[#EBEBED]">
                        <span className="text-[11px] sm:text-[13px] font-bold tracking-tight">Your Brand</span>
                        <div className="flex items-center gap-3 text-[10px] text-[#6E6D75]">
                          <span className="hidden sm:inline">Menu</span>
                          <span className="hidden sm:inline">Locations</span>
                          <span className="rounded-full bg-[#D91842] px-2.5 py-0.5 text-[9.5px] font-semibold text-white">
                            Order
                          </span>
                        </div>
                      </div>

                      {/* Storefront Hero Banner */}
                      <div className="grid grid-cols-12 items-center bg-[#F5F5F6] px-4 py-3 sm:px-5 sm:py-4">
                        <div className="col-span-5">
                          <p className="text-[15px] sm:text-[22px] font-bold leading-[1.12] tracking-tight text-[#151417]">
                            Made fresh
                            <br />
                            for you
                          </p>
                        </div>
                        <div className="col-span-7">
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-white">
                            <Image
                              src="/images/hero-bowl-main.jpg"
                              alt="Grilled chicken bowl"
                              fill
                              priority
                              sizes="(max-width: 768px) 60vw, 380px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* 3-Card Product Grid */}
                      <div className="grid grid-cols-3 gap-2.5 p-3 sm:p-4 bg-white">
                        {[
                          { title: "Grilled chicken bowl", img: "/images/hero-bowl-main.jpg" },
                          { title: "Mediterranean bowl", img: "/images/bowl-mediterranean.jpg" },
                          { title: "Korean bbq bowl", img: "/images/bowl-salmon.jpg" },
                        ].map((item) => (
                          <div key={item.title} className="space-y-1.5">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-[#F5F5F6]">
                              <Image src={item.img} alt={item.title} fill sizes="160px" className="object-cover" />
                            </div>
                            <p className="truncate text-[9px] sm:text-[10.5px] font-semibold text-[#151417]">
                              {item.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="relative mx-auto h-3 w-[104%] -ml-[2%] rounded-b-[12px] bg-[#2A2A2E]">
                    <div className="mx-auto h-1 w-20 rounded-b-md bg-[#3A393F]" />
                  </div>
                </div>

                {/* Overlapping iPhone Frame */}
                <div className="absolute right-0 bottom-0 z-20 w-[142px] sm:w-[186px]">
                  <div className="rounded-[28px] bg-[#1B1A1F] border border-[#3A393F] p-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                    <div className="overflow-hidden rounded-[22px] bg-white text-[#151417]">
                      {/* Dynamic Island */}
                      <div className="mx-auto mt-1.5 h-3 w-16 rounded-full bg-[#111013]" />

                      <div className="px-3 pt-1.5 pb-3">
                        <p className="text-[10px] font-bold text-[#151417]">Your Brand</p>

                        <div className="relative mt-1.5 aspect-[16/11] w-full overflow-hidden rounded-[10px] bg-[#F5F5F6]">
                          <Image
                            src="/images/hero-bowl-main.jpg"
                            alt="Grilled chicken bowl app view"
                            fill
                            sizes="180px"
                            className="object-cover"
                          />
                        </div>

                        <p className="mt-2 text-[11px] font-bold leading-tight text-[#151417]">Grilled chicken bowl</p>
                        <p className="text-[8.5px] font-semibold text-[#6E6D75] mt-0.5">Make it yours</p>

                        <div className="mt-1.5 space-y-1 text-[8.5px]">
                          {[
                            { label: "Base", val: "Brown rice" },
                            { label: "Greens", val: "Baby spinach" },
                            { label: "Sauce", val: "Herb dressing" },
                          ].map((row) => (
                            <div key={row.label} className="flex items-center justify-between gap-1.5">
                              <span className="text-[#6E6D75] font-medium">{row.label}</span>
                              <span className="flex-1 flex items-center justify-between rounded-[6px] border border-[#D9D9DD] px-1.5 py-0.5 text-[8px] text-[#151417]">
                                <span className="truncate">{row.val}</span>
                                <ChevronDown className="h-2.5 w-2.5 text-[#9A99A1] shrink-0" />
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-2.5 rounded-full bg-[#D91842] py-1.5 text-center text-[10px] font-semibold text-white">
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
