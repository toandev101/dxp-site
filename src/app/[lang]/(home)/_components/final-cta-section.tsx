"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <section className="overflow-hidden bg-[var(--od-action-soft)] py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left 45% Giant Closing Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-[52px] sm:text-[68px] lg:text-[84px] font-bold tracking-[-0.06em] leading-[1.02] text-[var(--od-text)]">
              {isVi ? (
                <>
                  Biến thành <span className="text-[#266df0]">của bạn.</span>
                </>
              ) : (
                <>
                  Make it <span className="text-[#266df0]">yours.</span>
                </>
              )}
            </h2>

            <p className="mt-5 text-[18px] sm:text-[20px] leading-[1.5] text-[var(--od-text-muted)]">
              {isVi ? (
                <>
                  Khách hàng của bạn. Thương hiệu của bạn.
                  <br />
                  Một hệ thống đặt hàng kết nối đồng bộ.
                </>
              ) : (
                <>
                  Your customers. Your brand.
                  <br />
                  A connected ordering operation.
                </>
              )}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={() => openDemoModal("final_cta")}
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

            <p className="mt-6 text-[13.5px] text-[var(--od-text-muted)]">
              {isVi
                ? "Xây dựng doanh nghiệp của bạn trên hạ tầng đã sẵn sàng."
                : "Build your business on the infrastructure already here."}
            </p>
          </div>

          {/* Right 55%: Takeaway Packaging + Bowl + Overlaid Crisp iPhone Order Review */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-[680px]">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px]">
                <Image
                  src="/images/closing-packaging.jpg"
                  alt="Your Brand takeaway packaging, a prepared bowl, and a phone showing the customer order."
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover"
                />
                {/* Subtle "Your Brand" imprint badge floating cleanly on the kraft bag center */}
                <div className="pointer-events-none absolute left-[34%] top-[34%] -translate-x-1/2 hidden sm:block">
                  <span className="text-[19px] font-extrabold tracking-tight text-[#2b2118]/85">
                    Your Brand
                  </span>
                </div>
              </div>

              {/* Crisp Overlaid iPhone Showing "Your Brand / Your order / Review order" */}
              <div className="absolute right-2 sm:right-6 bottom-2 sm:bottom-3 w-[132px] sm:w-[168px] rotate-[2deg]">
                <div className="rounded-[24px] bg-[#111214] p-[5px] shadow-[0_24px_50px_-10px_rgba(11,12,13,0.42)] ring-1 ring-white/20">
                  <div className="overflow-hidden rounded-[19px] bg-white p-2.5 text-[#0b0c0d]">
                    <p className="text-center text-[9px] font-bold text-[#0b0c0d]">Your Brand</p>
                    <p className="mt-1 text-[11px] font-bold text-[#0b0c0d]">Your order</p>
                    <div className="relative mt-1.5 aspect-square w-full overflow-hidden rounded-lg bg-[#f6f7f7]">
                      <Image
                        src="/images/hero-bowl-main.jpg"
                        alt="Grilled chicken bowl"
                        fill
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-1.5 text-[9.5px] font-bold leading-tight">Grilled chicken bowl</p>
                    <p className="text-[8px] text-[#3f4145]">No onion</p>
                    <div className="mt-2 rounded-[5px] bg-[#266df0] py-1.5 text-center text-[9px] font-semibold text-white">
                      Review order
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
