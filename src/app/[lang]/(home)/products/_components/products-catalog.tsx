"use client";

import { useState } from "react";
import {
  Bot,
  Check,
  Code2,
  Cpu,
  CreditCard,
  GitBranch,
  Globe,
  Headphones,
  LayoutDashboard,
  Monitor,
  Plug,
  Route,
  Smartphone,
  Store,
  Tablet,
  Truck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS_DATA } from "@/constants/site-data";
import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";
import type { PillarKey } from "@/types/site";
import { cn } from "@/lib/utils";

function ProductIcon({ name }: { name: string }) {
  const cls = "h-5 w-5";
  switch (name) {
    case "globe":
      return <Globe className={cls} />;
    case "smartphone":
      return <Smartphone className={cls} />;
    case "bot":
      return <Bot className={cls} />;
    case "monitor":
      return <Monitor className={cls} />;
    case "headphones":
      return <Headphones className={cls} />;
    case "store":
      return <Store className={cls} />;
    case "layout-dashboard":
      return <LayoutDashboard className={cls} />;
    case "tablet":
      return <Tablet className={cls} />;
    case "truck":
      return <Truck className={cls} />;
    case "plug":
      return <Plug className={cls} />;
    case "credit-card":
      return <CreditCard className={cls} />;
    case "route":
      return <Route className={cls} />;
    case "code":
      return <Code2 className={cls} />;
    case "cpu":
      return <Cpu className={cls} />;
    case "git-branch":
      return <GitBranch className={cls} />;
    default:
      return <Globe className={cls} />;
  }
}

export function ProductsCatalog() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();
  const [selected, setSelected] = useState<"all" | PillarKey>("all");

  const sections: { key: PillarKey; titleEn: string; titleVi: string; descEn: string; descVi: string }[] = [
    {
      key: "build",
      titleEn: "01. Build — Customer Ordering Surfaces",
      titleVi: "01. Build — Kênh Đặt Hàng Khách Hàng",
      descEn: "Branded web storefronts, native mobile apps, AI ordering agents, kiosks, and call center tools.",
      descVi: "Website thương hiệu, app iOS/Android, AI Agent chốt đơn, Kiosk tại quầy và tổng đài đặt hàng.",
    },
    {
      key: "operate",
      titleEn: "02. Operate — Store, Kitchen & Fleet Control",
      titleVi: "02. Operate — Quản Lý Cửa Hàng, Bếp & Giao Vận",
      descEn: "Unified command dashboard, merchant intake apps, and algorithmic driver dispatch.",
      descVi: "Bảng điều khiển trung tâm, app nhận đơn cho cửa hàng và hệ thống tự động điều phối tài xế.",
    },
    {
      key: "connect",
      titleEn: "03. Connect — POS, Payments & 3PL Sync",
      titleVi: "03. Connect — Đồng Bộ POS, Thanh Toán & 3PL",
      descEn: "Real-time integrations with Toast, Square, Clover, Oracle Simphony, SAP, Stripe, VNPay, and courier networks.",
      descVi: "Tích hợp thời gian thực với Toast, Square, Clover, Oracle Simphony, SAP, Stripe, VNPay và hãng giao hàng.",
    },
    {
      key: "extend",
      titleEn: "04. Extend — APIs, Webhooks, MCP & Open Code",
      titleVi: "04. Extend — API, Webhooks, MCP & Mã Nguồn Mở",
      descEn: "Developer-grade extensibility with REST APIs, event webhooks, Model Context Protocol, and Next.js frontend repos.",
      descVi: "Mở rộng không giới hạn với REST API, Webhooks, Model Context Protocol và kho mã nguồn Next.js.",
    },
  ];

  const visibleSections = selected === "all" ? sections : sections.filter((s) => s.key === selected);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-white py-16 lg:py-24 border-b border-c-border">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            {isVi ? "Hệ sinh thái mô-đun" : "Modular Product Ecosystem"}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-c-dark sm:text-5xl">
            {isVi ? "20+ sản phẩm kết nối trên một lõi duy nhất." : "20+ connected products on one unified engine."}
          </h1>
          <p className="mt-4 text-base text-c-description sm:text-lg">
            {isVi
              ? "Bắt đầu với những mô-đun bạn cần hôm nay và bật thêm kênh bán hàng mới bất cứ lúc nào khi doanh nghiệp tăng trưởng."
              : "Start with the modules you need today and switch on new ordering channels, dispatch engines, or AI agents whenever you scale."}
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(
              [
                { key: "all", label: isVi ? "Tất cả mô-đun" : "All Modules" },
                { key: "build", label: "01. Build" },
                { key: "operate", label: "02. Operate" },
                { key: "connect", label: "03. Connect" },
                { key: "extend", label: "04. Extend" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelected(tab.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold border transition-all",
                  selected === tab.key
                    ? "bg-c-primary text-white border-c-primary shadow-sm"
                    : "bg-white text-c-description border-c-border hover:border-c-primary hover:text-c-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Sections */}
      <Container className="py-16 space-y-20">
        {visibleSections.map((section) => {
          const products = PRODUCTS_DATA.filter((p) => p.pillar === section.key);
          return (
            <div key={section.key} id={section.key} className="scroll-mt-24">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight text-c-dark sm:text-3xl">
                  {isVi ? section.titleVi : section.titleEn}
                </h2>
                <p className="mt-2 text-sm text-c-description sm:text-base">
                  {isVi ? section.descVi : section.descEn}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-2xl border border-c-border bg-white p-6 shadow-bx-card flex flex-col justify-between hover:border-c-primary/40 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-c-primary-soft text-c-primary">
                          <ProductIcon name={product.icon} />
                        </div>
                        {product.badge && (
                          <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-200">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-c-dark">
                        {isVi ? product.titleVi : product.titleEn}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-c-description">
                        {isVi ? product.descriptionVi : product.descriptionEn}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-c-border/70 pt-4 space-y-3">
                      <ul className="space-y-1.5">
                        {(isVi ? product.highlightsVi : product.highlightsEn).map((hl) => (
                          <li key={hl} className="flex items-center gap-2 text-xs text-c-base">
                            <Check className="h-3.5 w-3.5 text-c-primary shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2"
                        onClick={() => openDemoModal(`product_${product.id}`)}
                      >
                        {isVi ? "Xem Demo mô-đun này" : "Request Module Walkthrough"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
