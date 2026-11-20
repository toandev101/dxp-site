"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Clock, ShieldCheck, Sparkles, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import useDictionaries from "@/hooks/useDictionaries";

const schema = z.object({
  fullName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  company: z.string().min(2, "Required"),
  businessType: z.string().min(1),
  locations: z.string().min(1),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function DemoFormPageClient() {
  const { lang, t } = useDictionaries();
  const isVi = lang === "vi";
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      businessType: "restaurant",
      locations: "2-10",
      notes: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "demo_page" }),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      toast.success(t.form_success_title, { description: t.form_success_desc });
    } catch {
      toast.error(isVi ? "Gửi thất bại, vui lòng thử lại." : "Submission failed. Please try again.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isVi ? "Tư vấn 1-1 cùng chuyên gia" : "1-on-1 Live Walkthrough"}</span>
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-c-dark sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              {isVi
                ? "Xem trực tiếp cách DXP Ordering vận hành thương hiệu của bạn."
                : "See DXP Ordering tailored to your exact business model."}
            </h1>
            <p className="text-base text-c-description leading-relaxed">
              {isVi
                ? "Trong 30 phút demo trực tiếp, kiến trúc sư giải pháp của chúng tôi sẽ trình bày quy trình đặt hàng từ Web/App/AI Agent xuống POS & Điều phối tài xế."
                : "In a 30-minute live session, our solutions architects will walk you through white-label storefronts, native apps, AI agents, POS sync, and open APIs."}
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  icon: <Clock className="h-4 w-4 text-c-primary" />,
                  title: isVi ? "Ra mắt nhanh chỉ trong vài ngày" : "Launch in days, not months",
                  desc: isVi
                    ? "Nhận lộ trình triển khai và đồng bộ thực đơn thực tế."
                    : "Get a realistic rollout plan for your stores and POS.",
                },
                {
                  icon: <ShieldCheck className="h-4 w-4 text-emerald-600" />,
                  title: isVi ? "0% hoa hồng đơn hàng" : "0% order commissions",
                  desc: isVi
                    ? "Ước tính chi tiết mức lợi nhuận bạn tiết kiệm được mỗi năm."
                    : "Custom ROI breakdown comparing third-party delivery fees.",
                },
                {
                  icon: <Users className="h-4 w-4 text-indigo-600" />,
                  title: isVi ? "Sandbox API & Mã nguồn thử nghiệm" : "API Sandbox & Architecture Review",
                  desc: isVi
                    ? "Mời đội ngũ kỹ thuật của bạn cùng tham gia đánh giá."
                    : "Bring your engineers to review REST APIs, MCP, and Next.js code.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-c-border shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-c-dark">{item.title}</p>
                    <p className="text-xs text-c-description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-c-border bg-white p-7 sm:p-9 shadow-bx-elevated">
              {done ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h2 className="text-2xl font-bold text-c-dark">{t.form_success_title}</h2>
                  <p className="mt-2 text-sm text-c-description max-w-md mx-auto">
                    {t.form_success_desc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-c-dark">
                        {t.form_name} *
                      </label>
                      <Input placeholder="Alex Chen" {...register("fullName")} />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-c-error">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-c-dark">
                        {t.form_email} *
                      </label>
                      <Input type="email" placeholder="alex@company.com" {...register("email")} />
                      {errors.email && (
                        <p className="mt-1 text-xs text-c-error">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-c-dark">
                      {t.form_company} *
                    </label>
                    <Input placeholder="UrbanBite Kitchens" {...register("company")} />
                    {errors.company && (
                      <p className="mt-1 text-xs text-c-error">{errors.company.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-c-dark">
                        {t.form_business_type}
                      </label>
                      <select
                        {...register("businessType")}
                        className="flex h-11 w-full rounded-lg border border-c-border bg-white px-3 text-sm text-c-base focus:border-c-primary focus:outline-none focus:ring-2 focus:ring-c-primary/20"
                      >
                        <option value="restaurant">{isVi ? "Nhà hàng / Quán cà phê" : "Restaurant / Cafe"}</option>
                        <option value="franchise">{isVi ? "Chuỗi / Nhượng quyền" : "Franchise / Chain"}</option>
                        <option value="marketplace">{isVi ? "Sàn giao hàng đa gian hàng" : "Delivery Marketplace"}</option>
                        <option value="retail">{isVi ? "Siêu thị / Bán lẻ" : "Grocery / Retail"}</option>
                        <option value="agency">{isVi ? "Agency / Đội kỹ thuật" : "Agency / Engineering Team"}</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-c-dark">
                        {t.form_locations}
                      </label>
                      <select
                        {...register("locations")}
                        className="flex h-11 w-full rounded-lg border border-c-border bg-white px-3 text-sm text-c-base focus:border-c-primary focus:outline-none focus:ring-2 focus:ring-c-primary/20"
                      >
                        <option value="1">1</option>
                        <option value="2-10">2 – 10</option>
                        <option value="11-50">11 – 50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-c-dark">
                      {t.form_notes}
                    </label>
                    <Textarea
                      placeholder={
                        isVi
                          ? "Chia sẻ nhu cầu về Website, App di động, AI Ordering Agents, Kiosk hoặc tích hợp POS..."
                          : "Tell us about your ordering channels, POS, delivery workflow, or API goals..."
                      }
                      {...register("notes")}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t.form_submitting : t.form_submit}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
