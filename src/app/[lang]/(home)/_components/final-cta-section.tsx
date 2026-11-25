"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { OperoOrbitAccent } from "@/components/brand/opero-logo";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

export function FinalCtaSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();

  return (
    <section className="bg-[var(--od-bg)] py-14 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[20px] bg-[#111013] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-white">
          {/* Cropped OPERO D01 Orbit signature visual (flat vector, no glow) */}
          <OperoOrbitAccent
            opacity={0.18}
            className="hidden lg:block absolute -left-24 -bottom-24 h-[420px] w-[420px] z-0"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Closing Copy */}
            <div className="lg:col-span-5">
              <h2 className="text-[44px] sm:text-[56px] lg:text-[68px] font-bold tracking-[-0.04em] leading-[1.03] text-white">
                {isVi ? (
                  <>
                    Biến thành <span className="text-[#D91842]">của bạn.</span>
                  </>
                ) : (
                  <>
                    Make it <span className="text-[#D91842]">yours.</span>
                  </>
                )}
              </h2>

              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.55] text-[#A9A8AF]">
                {isVi ? (
                  <>
                    Khách hàng của bạn. Thương hiệu của bạn.
                    <br />
                    Quán của bạn chạy trơn tru hơn mỗi ngày.
                  </>
                ) : (
                  <>
                    Your customers. Your brand.
                    <br />
                    A connected ordering operation running smoothly every day.
                  </>
                )}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("final_cta")}
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#D91842] px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-[#B8123A] active:bg-[#94102F] active:scale-[0.98] cursor-pointer"
                >
                  <span>{isVi ? "Đặt lịch demo" : "Book a demo"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-transparent shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.34)] px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-white/10 active:scale-[0.98]"
                >
                  <span>{isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 text-[13.5px] text-[#A9A8AF]">
                {isVi
                  ? "Xây dựng doanh nghiệp của bạn trên hạ tầng OPERO đã sẵn sàng."
                  : `Build your business on ${siteConfig.name} infrastructure ready to scale.`}
              </p>
            </div>

            {/* Right: Takeaway Packaging + Bowl + Overlaid Crisp iPhone Order Review */}
            <div className="lg:col-span-7">
              <div className="relative mx-auto max-w-[660px]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] border border-[#2A2A2E]">
                  <Image
                    src="/images/closing-packaging.jpg"
                    alt="Your Brand takeaway packaging, a prepared bowl, and a phone showing the customer order."
                    fill
                    sizes="(max-width: 1024px) 100vw, 660px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute left-[34%] top-[34%] -translate-x-1/2 hidden sm:block">
                    <span className="text-[19px] font-extrabold tracking-tight text-[#2b2118]/85">
                      Your Brand
                    </span>
                  </div>
                </div>

                {/* Crisp Overlaid iPhone Showing Order Review */}
                <div className="absolute right-2 sm:right-6 bottom-2 sm:bottom-3 w-[132px] sm:w-[168px] rotate-[2deg]">
                  <div className="rounded-[24px] bg-[#1B1A1F] border border-[#3A393F] p-[5px] shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                    <div className="overflow-hidden rounded-[19px] bg-white p-2.5 text-[#151417]">
                      <p className="text-center text-[9px] font-bold text-[#151417]">Your Brand</p>
                      <p className="mt-1 text-[11px] font-bold text-[#151417]">Your order</p>
                      <div className="relative mt-1.5 aspect-square w-full overflow-hidden rounded-[8px] bg-[#F5F5F6]">
                        <Image
                          src="/images/hero-bowl-main.jpg"
                          alt="Grilled chicken bowl"
                          fill
                          sizes="150px"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-1.5 text-[9.5px] font-bold leading-tight">Grilled chicken bowl</p>
                      <p className="text-[8px] text-[#6E6D75]">No onion</p>
                      <div className="mt-2 rounded-full bg-[#D91842] py-1.5 text-center text-[9px] font-semibold text-white">
                        Review order
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
