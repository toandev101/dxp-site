"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

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
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--od-bg)] pt-10 pb-10 sm:pt-14 lg:pt-16 lg:pb-12"
    >
      {/* Top-right faded kitchen preparation backdrop photo (exact Ordering.co hero composition) */}
      <div className="pointer-events-none hidden lg:block absolute top-0 right-0 w-[54%] h-[480px] z-0 od-hero-mask-y">
        <div className="relative h-full w-full od-hero-mask-x">
          <Image
            src="/images/hero-prep.jpg"
            alt=""
            fill
            priority
            sizes="55vw"
            className="object-cover object-center opacity-85"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Copy Column (46%) */}
          <div className="lg:col-span-5 text-left">
            <p className="text-[11.2px] font-semibold uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
              {isVi ? "ĐẶT HÀNG & GIAO VẬN, DƯỚI THƯƠNG HIỆU CỦA BẠN" : "ORDERING & DELIVERY, UNDER YOUR BRAND"}
            </p>

            <h1 className="mt-5 text-[48px] sm:text-[62px] lg:text-[74px] font-bold tracking-[-0.045em] leading-[1.03] text-[var(--od-text)]">
              <span className="block">{isVi ? "Doanh nghiệp bạn." : "Your business."}</span>
              <span className="block">{isVi ? "Mọi đơn hàng." : "Every order."}</span>
              <span className="block text-[#266df0]">{isVi ? "Kết nối đồng bộ." : "Connected."}</span>
            </h1>

            <p className="mt-6 max-w-[450px] text-[17px] sm:text-[18px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? `Xây dựng website, ứng dụng, sàn thương mại và trải nghiệm AI đặt hàng. Kết nối đơn hàng, thanh toán, chi nhánh và giao vận trên ${siteConfig.name}.`
                : `Build websites, apps, marketplaces, and AI ordering experiences. Connect orders, payments, locations, and delivery on ${siteConfig.name}.`}
            </p>

            {/* Primary Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={() => openDemoModal("hero_book_demo")}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[4px] bg-[#266df0] px-[22px] py-[13px] text-[14.4px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
              >
                <span>{isVi ? "Đặt lịch demo" : "Book a demo"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Secondary Explore Row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-2.5">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Xem bản demo trực tiếp" : "See a live demo"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#platform"
                className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Khám phá nền tảng" : "Explore the platform"}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Overlapping MacBook ("Your website") + iPhone ("Your app") Visual */}
          <div className="lg:col-span-7 lg:mt-16">
            <div className="relative pt-10 pb-6 sm:pt-12">
              {/* Floating Callout: "Your website" */}
              <div className="absolute left-8 sm:left-16 top-1 sm:top-2 z-20 flex flex-col items-start">
                <span className="rounded-[6px] bg-white px-2.5 py-1 text-[12px] font-medium text-[#0b0c0d] shadow-[0_2px_10px_rgba(11,12,13,0.12)] border border-[#dee0e3]">
                  {isVi ? "Website của bạn" : "Your website"}
                </span>
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="ml-8 -mt-0.5">
                  <line x1="2" y1="0" x2="14" y2="28" stroke="#266df0" strokeWidth="1.4" />
                </svg>
              </div>

              {/* Floating Callout: "Your app" */}
              <div className="absolute right-2 sm:right-6 top-[22%] z-30 flex flex-col items-center">
                <span className="rounded-[6px] bg-white px-2.5 py-1 text-[12px] font-medium text-[#0b0c0d] shadow-[0_2px_10px_rgba(11,12,13,0.12)] border border-[#dee0e3]">
                  {isVi ? "App của bạn" : "Your app"}
                </span>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="-mt-0.5">
                  <line x1="10" y1="0" x2="4" y2="24" stroke="#266df0" strokeWidth="1.4" />
                </svg>
              </div>

              {/* Sleek Silver/Black MacBook Frame */}
              <div className="relative z-10 mr-10 sm:mr-20 lg:mr-24">
                <div className="rounded-t-[18px] rounded-b-[4px] bg-[#141517] p-2.5 sm:p-3 shadow-[0_26px_65px_-18px_rgba(11,12,13,0.34)] ring-1 ring-black/15">
                  <div className="overflow-hidden rounded-[8px] bg-white text-[#0b0c0d]">
                    {/* Branded Storefront Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
                      <span className="text-[11px] sm:text-[13px] font-bold tracking-tight">Your Brand</span>
                      <div className="flex items-center gap-3 text-[10px] text-slate-500">
                        <span className="hidden sm:inline">Menu</span>
                        <span className="hidden sm:inline">Locations</span>
                        <span className="rounded bg-[#266df0] px-2 py-0.5 text-[9.5px] font-semibold text-white">
                          Order
                        </span>
                      </div>
                    </div>

                    {/* Storefront Hero Banner: "Made fresh for you" + Bowl */}
                    <div className="grid grid-cols-12 items-center bg-[#f6f7f7] px-4 py-3 sm:px-5 sm:py-4">
                      <div className="col-span-5">
                        <p className="text-[15px] sm:text-[22px] font-bold leading-[1.12] tracking-tight text-[#0b0c0d]">
                          Made fresh
                          <br />
                          for you
                        </p>
                      </div>
                      <div className="col-span-7">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
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
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#f6f7f7]">
                            <Image src={item.img} alt={item.title} fill sizes="160px" className="object-cover" />
                          </div>
                          <p className="truncate text-[9px] sm:text-[10.5px] font-semibold text-[#0b0c0d]">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Aluminum Laptop Deck & Base */}
                <div className="relative mx-auto h-3.5 w-[104%] -ml-[2%] rounded-b-[14px] bg-gradient-to-b from-[#d1d5db] via-[#e5e7eb] to-[#9ca3af] shadow-[0_14px_30px_-8px_rgba(11,12,13,0.3)]">
                  <div className="mx-auto h-1 w-20 rounded-b-md bg-[#9ca3af]" />
                </div>
              </div>

              {/* Overlapping iPhone Frame ("Your app" — Grilled chicken bowl + modifiers + Add to cart) */}
              <div className="absolute right-0 bottom-0 z-20 w-[142px] sm:w-[186px]">
                <div className="rounded-[28px] bg-[#111214] p-[6px] shadow-[0_24px_55px_-12px_rgba(11,12,13,0.42)] ring-1 ring-white/20">
                  <div className="overflow-hidden rounded-[22px] bg-white text-[#0b0c0d]">
                    {/* Notch */}
                    <div className="mx-auto mt-1.5 h-3 w-16 rounded-full bg-[#111214]" />

                    <div className="px-3 pt-1.5 pb-3">
                      <p className="text-[10px] font-bold text-[#0b0c0d]">Your Brand</p>

                      <div className="relative mt-1.5 aspect-[16/11] w-full overflow-hidden rounded-xl bg-[#f6f7f7]">
                        <Image
                          src="/images/hero-bowl-main.jpg"
                          alt="Grilled chicken bowl app view"
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      </div>

                      <p className="mt-2 text-[11px] font-bold leading-tight text-[#0b0c0d]">Grilled chicken bowl</p>
                      <p className="text-[8.5px] font-semibold text-[#3f4145] mt-0.5">Make it yours</p>

                      <div className="mt-1.5 space-y-1 text-[8.5px]">
                        {[
                          { label: "Base", val: "Brown rice" },
                          { label: "Greens", val: "Baby spinach" },
                          { label: "Sauce", val: "Herb dressing" },
                        ].map((row) => (
                          <div key={row.label} className="flex items-center justify-between gap-1.5">
                            <span className="text-[#3f4145] font-medium">{row.label}</span>
                            <span className="flex-1 flex items-center justify-between rounded border border-[#dee0e3] px-1.5 py-0.5 text-[8px] text-[#0b0c0d]">
                              <span className="truncate">{row.val}</span>
                              <ChevronDown className="h-2.5 w-2.5 text-[#989aa0] shrink-0" />
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2.5 rounded-[5px] bg-[#266df0] py-1.5 text-center text-[10px] font-semibold text-white">
                        Add to cart
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
