"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { INTEGRATIONS_DATA } from "@/constants/site-data";
import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "pos" | "payments" | "delivery" | "crm" | "developers";

export function IntegrationsDirectory() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");

  const tabs: { key: CategoryFilter; labelEn: string; labelVi: string }[] = [
    { key: "all", labelEn: "All Integrations", labelVi: "Tất cả" },
    { key: "pos", labelEn: "POS & ERP", labelVi: "POS & ERP" },
    { key: "payments", labelEn: "Payments", labelVi: "Thanh toán" },
    { key: "delivery", labelEn: "3PL Delivery", labelVi: "Giao vận 3PL" },
    { key: "crm", labelEn: "CRM & Analytics", labelVi: "CRM & Đo lường" },
    { key: "developers", labelEn: "APIs & MCP", labelVi: "API & MCP" },
  ];

  const filtered = INTEGRATIONS_DATA.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const text = `${item.name} ${item.descriptionEn} ${item.descriptionVi}`.toLowerCase();
    const matchesQuery = !query.trim() || text.includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-white py-16 lg:py-24 border-b border-c-border">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            {isVi ? "Hệ sinh thái tích hợp" : "Connected Stack"}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-c-dark sm:text-5xl">
            {isVi
              ? "Kết nối POS, thanh toán, giao vận và công cụ tăng trưởng."
              : "Connect your POS, payments, delivery fleets & AI stack."}
          </h1>
          <p className="mt-4 text-base text-c-description sm:text-lg">
            {isVi
              ? "Hoạt động như một lớp middleware thông minh đồng bộ hai chiều mà không làm gián đoạn vận hành hiện tại."
              : "Plug seamlessly into what your stores already run — or build custom connectors with our open REST API and Webhooks."}
          </p>

          <div className="mt-8 mx-auto max-w-md relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-c-muted" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isVi ? "Tìm POS, cổng thanh toán, 3PL..." : "Search Toast, Stripe, Uber Direct, MCP..."}
              className="pl-10"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setCategory(tab.key)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold border transition-all",
                  category === tab.key
                    ? "bg-c-dark text-white border-c-dark"
                    : "bg-white text-c-description border-c-border hover:border-c-primary hover:text-c-primary"
                )}
              >
                {isVi ? tab.labelVi : tab.labelEn}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-c-border bg-white p-6 shadow-bx-card flex flex-col justify-between hover:border-c-primary/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-extrabold text-white ${item.color}`}
                  >
                    {item.initials}
                  </div>
                  {item.badge && (
                    <span className="rounded-full bg-c-primary-soft px-2.5 py-0.5 text-[10px] font-bold text-c-primary">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-bold text-c-dark">{item.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-c-description">
                  {isVi ? item.descriptionVi : item.descriptionEn}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openDemoModal(`integration_${item.id}`)}
                className="mt-5 text-left text-xs font-bold text-c-primary hover:underline"
              >
                {isVi ? "Yêu cầu tài liệu kết nối →" : "Request connector docs →"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-c-border bg-c-surface p-8 text-center">
          <h3 className="text-lg font-bold text-c-dark">
            {isVi ? "Không thấy hệ thống POS hoặc ERP của bạn?" : "Don't see your POS or ERP listed?"}
          </h3>
          <p className="mt-2 text-sm text-c-description max-w-xl mx-auto">
            {isVi
              ? "Đội ngũ kỹ sư tích hợp của chúng tôi hỗ trợ kết nối nhanh qua Middleware hoặc REST Webhook tùy chỉnh."
              : "Our solutions team builds custom ERP/POS adapters using our OpenAPI specification and HMAC-signed webhooks."}
          </p>
          <Button className="mt-5" onClick={() => openDemoModal("custom_integration")}>
            {isVi ? "Đề xuất tích hợp riêng" : "Request Custom Integration"}
          </Button>
        </div>
      </Container>
    </div>
  );
}
