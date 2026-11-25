"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, Sparkles } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";

const demoSchema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(2, "Please enter your company or brand name"),
  businessType: z.string().min(1),
  locations: z.string().min(1),
  notes: z.string().optional(),
});

type DemoFormValues = z.infer<typeof demoSchema>;

export function DemoModal() {
  const { isDemoModalOpen, closeDemoModal, demoModalSource } = useUiStore();
  const { lang, t } = useDictionaries();
  const isVi = lang === "vi";
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      businessType: "restaurant",
      locations: "2-10",
      notes: "",
    },
  });

  const onSubmit = async (values: DemoFormValues) => {
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: demoModalSource }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
      toast.success(t.form_success_title, { description: t.form_success_desc });
    } catch {
      toast.error(isVi ? "Có lỗi xảy ra, vui lòng thử lại." : "Something went wrong. Please try again.");
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeDemoModal();
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 200);
    }
  };

  return (
    <Dialog open={isDemoModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF6E8] text-[#3F7A1C]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-[#151417]">{t.form_success_title}</h3>
            <p className="mt-2 text-sm text-[#6E6D75]">{t.form_success_desc}</p>
            <Button className="mt-6 w-full" onClick={() => handleOpenChange(false)}>
              {isVi ? "Quay lại trang" : "Back to Site"}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#FDECEF] px-3 py-1 text-xs font-semibold text-[#D91842]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>
                  {demoModalSource && demoModalSource !== "general" && !demoModalSource.includes("_")
                    ? demoModalSource
                    : isVi
                      ? "0% Hoa hồng · White-label"
                      : "Guided demo · 30 min"}
                </span>
              </div>
              <DialogTitle>{t.demo_modal_title}</DialogTitle>
              <DialogDescription>{t.demo_modal_subtitle}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3.5">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-c-dark">{t.form_name} *</label>
                  <Input placeholder="Alex Chen" {...register("fullName")} />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-c-error">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-c-dark">{t.form_email} *</label>
                  <Input type="email" placeholder="alex@company.com" {...register("email")} />
                  {errors.email && (
                    <p className="mt-1 text-xs text-c-error">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-c-dark">{t.form_company} *</label>
                <Input placeholder="UrbanBite Group" {...register("company")} />
                {errors.company && (
                  <p className="mt-1 text-xs text-c-error">{errors.company.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-c-dark">{t.form_business_type}</label>
                  <select
                    {...register("businessType")}
                    className="flex h-11 w-full rounded-[8px] border border-[#D9D9DD] bg-white px-3 text-sm text-[#151417] focus:border-[#151417] focus:outline-none"
                  >
                    <option value="restaurant">{isVi ? "Nhà hàng / Quán cà phê" : "Restaurant / Cafe"}</option>
                    <option value="franchise">{isVi ? "Chuỗi / Nhượng quyền" : "Franchise / Chain"}</option>
                    <option value="marketplace">{isVi ? "Sàn giao hàng đa gian hàng" : "Delivery Marketplace"}</option>
                    <option value="retail">{isVi ? "Siêu thị / Bán lẻ" : "Grocery / Retail"}</option>
                    <option value="agency">{isVi ? "Agency / Đội kỹ thuật" : "Agency / Dev Team"}</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-c-dark">{t.form_locations}</label>
                  <select
                    {...register("locations")}
                    className="flex h-11 w-full rounded-[8px] border border-[#D9D9DD] bg-white px-3 text-sm text-[#151417] focus:border-[#151417] focus:outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2-10">2 – 10</option>
                    <option value="11-50">11 – 50</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-c-dark">{t.form_notes}</label>
                <Textarea
                  placeholder={
                    isVi
                      ? "VD: Website thương hiệu, App iOS/Android, Kiosk tại quầy, tích hợp POS..."
                      : "e.g. Branded ordering site, native apps, WhatsApp AI agent, Toast POS sync..."
                  }
                  {...register("notes")}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? t.form_submitting : t.form_submit}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
