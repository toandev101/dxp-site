import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { LoginSecurityPageView } from "./_components/login-security-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp đăng nhập & bảo mật" : "Login and security integrations",
    description: isVi
      ? "Cho phép khách đăng nhập bằng Apple, Google hoặc Facebook, gửi mã xác thực qua SMS/WhatsApp và chống bot với Google reCAPTCHA."
      : "Let customers sign in with Apple, Google, or Facebook, send login codes by SMS or WhatsApp, and protect sign-up, login, and orders with Google reCAPTCHA.",
    path: "/integrations/login-security",
  });
}

export default function LoginSecurityIntegrationsPage() {
  return <LoginSecurityPageView />;
}
