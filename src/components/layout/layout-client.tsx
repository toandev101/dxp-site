"use client";

import { Header } from "./header";
import { MenuMobile } from "./menu-mobile";
import { Footer } from "./footer";
import { DemoModal } from "@/components/common/demo-modal";
import { SearchModal } from "@/components/common/search-modal";
import { FloatingChatWidget } from "@/components/common/floating-chat-widget";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--od-bg)] text-[var(--od-text)] antialiased">
      <Header />
      <MenuMobile />
      <main className="flex-1">{children}</main>
      <Footer />
      <DemoModal />
      <SearchModal />
      <FloatingChatWidget />
    </div>
  );
}
