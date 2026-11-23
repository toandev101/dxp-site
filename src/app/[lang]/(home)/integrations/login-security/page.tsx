import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { LoginSecurityPageView } from "./_components/login-security-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Login and security integrations",
  description:
    "Let customers sign in with Apple, Google, or Facebook, send login codes by SMS or WhatsApp, and protect sign-up, login, and orders with Google reCAPTCHA.",
  path: "/integrations/login-security",
});

export default function LoginSecurityIntegrationsPage() {
  return <LoginSecurityPageView />;
}
