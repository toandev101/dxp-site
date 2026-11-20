"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";

export function CustomerStoriesSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const secondaryCases = [
    {
      title: "Domino’s Pizza",
      meta: isVi ? "Thương hiệu nhà hàng · Mexico · Colombia" : "Restaurant brands · Mexico · Colombia",
      descEn:
        "Call center software with caller recognition, agent handoffs, secure card entry, and a menu new agents can learn.",
      descVi:
        "Phần mềm tổng đài với nhận diện người gọi, chuyển tiếp tổng đài viên, nhập thẻ an toàn và giao diện thực đơn dễ đào tạo.",
      tags: "Call Center · Delivery",
      img: "/images/journey-merchant.jpg",
    },
    {
      title: "Burger King Mexico",
      meta: isVi ? "Thương hiệu nhà hàng · Mexico" : "Restaurant brands · Mexico",
      descEn:
        "Self-ordering kiosks trialed at an airport and deployed across multiple stores, plus online ordering.",
      descVi:
        "Kiosk tự phục vụ thử nghiệm tại sân bay và triển khai đồng loạt trên nhiều cửa hàng cùng kênh đặt món trực tuyến.",
      tags: "Kiosk · Web · Loyalty & offers",
      img: "/images/case-kiosk.jpg",
    },
    {
      title: "KFC Albania",
      meta: isVi ? "Thương hiệu nhà hàng · Albania" : "Restaurant brands · Albania",
      descEn:
        "A branded website, customer app, store and driver apps, and delivery dashboards for online orders in Albania.",
      descVi:
        "Website thương hiệu, ứng dụng khách hàng, app cửa hàng, app tài xế và bảng điều phối giao hàng toàn quốc.",
      tags: "Web · Apps · Delivery · Loyalty & offers",
      img: "/images/journey-delivery.jpg",
    },
  ];

  return (
    <section id="customers" className="bg-[var(--od-bg)] py-20 lg:py-24">
      <Container>
        {/* Header Row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[34px] sm:text-[41.6px] font-bold tracking-[-0.04em] leading-[1.1] text-[var(--od-text)]">
            {isVi ? (
              <>
                Đa dạng mô hình.
                <br />
                Vận hành kết nối.
              </>
            ) : (
              <>
                Different businesses.
                <br />
                Connected operations.
              </>
            )}
          </h2>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
          >
            <span>{isVi ? "Tất cả câu chuyện khách hàng" : "All customer stories"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Asymmetric 2-Column Case Study Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Featured Story: Alsea */}
          <article className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-[var(--od-surface-subtle)]">
              <Image
                src="/images/case-alsea.jpg"
                alt="The WOW+ app in use, from the Alsea customer story."
                fill
                sizes="(max-width: 1024px) 100vw, 581px"
                className="object-cover"
              />
            </div>

            <p className="mt-5 text-[12.5px] font-medium text-[var(--od-text-muted)]">
              {isVi ? "Tập đoàn nhà hàng · Mexico · Colombia" : "Restaurant groups · Mexico · Colombia"}
            </p>
            <h3 className="mt-1.5 text-[32px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
              Alsea
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Ứng dụng WOW+, mười website thương hiệu, trung tâm tổng đài và hệ thống giao vận cho tập đoàn F&B đa thương hiệu."
                : "The WOW+ app, ten brand storefronts, call centers, and delivery for a multi-brand restaurant operator."}
            </p>
            <p className="mt-3 text-[12.5px] font-medium text-[var(--od-text-muted)]">
              Web · Apps · Call Center · Delivery · Loyalty &amp; offers
            </p>
            <Link
              href="/solutions#franchises"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Đọc câu chuyện" : "Read story"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>

          {/* Right Column: 3 Stacked Horizontal Cards */}
          <div className="lg:col-span-7 divide-y divide-[var(--od-border)]">
            {secondaryCases.map((item, idx) => (
              <article
                key={item.title}
                className={`grid grid-cols-1 gap-5 sm:grid-cols-[180px_1fr] items-start ${
                  idx === 0 ? "pb-7" : "py-7"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[var(--od-surface-subtle)]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[var(--od-text-muted)]">{item.meta}</p>
                  <h3 className="mt-1 text-[22px] font-bold tracking-[-0.025em] leading-[1.2] text-[var(--od-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--od-text-muted)]">
                    {isVi ? item.descVi : item.descEn}
                  </p>
                  <p className="mt-2.5 text-[12px] font-medium text-[var(--od-text-muted)]">{item.tags}</p>
                  <Link
                    href="/solutions#restaurants"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Đọc câu chuyện" : "Read story"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
