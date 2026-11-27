"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { LOGIN_SECURITY_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  FilterableIntegrationsGrid,
  IntegrationClosingCta,
  IntegrationHero,
} from "../../_components/integrations-shared";
import { LoginSecurityHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function LoginSecurityPageView() {
  const { openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: isVi ? "Tích hợp" : "Integrations", href: "/integrations" },
          { label: isVi ? "Đăng nhập & Bảo mật" : "Login and security" },
        ]}
        eyebrow={isVi ? "Tích hợp đăng nhập & bảo mật" : "Login and security integrations"}
        title={
          isVi
            ? "Đăng nhập nhanh hơn cho khách hàng. Ngăn chặn bot ngay từ cổng."
            : "Faster sign-in for customers. Fewer bots at the door."
        }
        lede={
          isVi
            ? "Cho phép khách đăng nhập bằng tài khoản họ đang dùng sẵn, đồng thời ngăn lưu lượng truy cập tự động tại các bước đăng ký, đăng nhập và thanh toán."
            : "Let customers log in with the accounts they already use, and keep automated traffic out of sign-up, login, and checkout."
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Login & security integrations",
        }}
        secondaryCta={{
          label: isVi ? "Xem tất cả tích hợp" : "See all integrations",
          href: "/integrations",
        }}
        aside={<LoginSecurityHeroAside />}
      />

      {/* 2. FILTERABLE CATALOG (5 INTEGRATIONS) */}
      <section id="catalog" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">
            {isVi ? "Tích hợp đăng nhập & bảo mật" : "Login and security integrations"}
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {isVi ? "Chọn cách khách hàng đăng nhập." : "Choose how customers sign in."}
          </h2>

          <div className="mt-8">
            <FilterableIntegrationsGrid
              items={LOGIN_SECURITY_INTEGRATIONS}
              searchPlaceholder={
                isVi ? "Tìm tích hợp đăng nhập & bảo mật" : "Search login and security integrations"
              }
              countNoun={isVi ? "tích hợp đăng nhập & bảo mật" : "login and security integrations"}
              defaultVisibleCount={12}
            />
          </div>
        </Container>
      </section>

      {/* 3. COMPARE SIGN-IN OPTIONS */}
      <section id="compare" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Tùy chọn đăng nhập" : "Sign-in options"}
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi ? "Cung cấp đúng cách đăng nhập khách hàng mong đợi." : "Offer the login your customers expect."}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <h3 className="text-[19px] font-bold text-[var(--od-text)]">
                {isVi ? "Đăng nhập mạng xã hội" : "Social login"}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Khách hàng đăng nhập nhanh bằng tài khoản Apple, Google hoặc Facebook thay vì phải tạo mật khẩu mới."
                  : "Customers sign in with their Apple, Google, or Facebook account instead of creating a new password."}
              </p>
            </div>

            <button
              type="button"
              onClick={() => openDemoModal("Twilio one-time login codes")}
              className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-[19px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                  {isVi ? "Mã xác thực một lần (OTP)" : "One-time codes"}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Khách hàng nhận mã đăng nhập hoặc đăng ký qua SMS hay WhatsApp, gửi trực tiếp bằng tài khoản Twilio của bạn."
                    : "Customers get a login or sign-up code by SMS or WhatsApp, sent through your Twilio account."}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                {isVi ? "Khám phá Twilio" : "Explore Twilio"} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* 4. CLOSING CTA */}
      <IntegrationClosingCta
        title={
          isVi
            ? "Biến đăng nhập thành bước đơn giản nhất khi đặt hàng."
            : "Make signing in the easy part of ordering."
        }
        body={
          isVi
            ? "Cho chúng tôi biết phương thức đăng nhập khách hàng của bạn mong muốn — chúng tôi sẽ hỗ trợ bạn cấu hình hoàn chỉnh."
            : "Tell us which login options your customers expect, and we will help you set them up."
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Login & security setup",
        }}
        secondaryCta={{ label: isVi ? "Xem tất cả tích hợp" : "See all integrations", href: "/integrations" }}
      />
    </div>
  );
}
