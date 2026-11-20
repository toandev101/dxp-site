"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { PRODUCTS_DATA, SOLUTIONS_DATA, INTEGRATIONS_DATA } from "@/constants/site-data";
import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";

export function SearchModal() {
  const { isSearchModalOpen, setSearchModalOpen } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [
      ...PRODUCTS_DATA.map((p) => ({
        title: isVi ? p.titleVi : p.titleEn,
        category: isVi ? "Sản phẩm" : "Product",
        href: `/products#${p.pillar}`,
      })),
      ...SOLUTIONS_DATA.map((s) => ({
        title: isVi ? s.titleVi : s.titleEn,
        category: isVi ? "Giải pháp" : "Solution",
        href: `/solutions#${s.id}`,
      })),
      ...INTEGRATIONS_DATA.map((i) => ({
        title: i.name,
        category: isVi ? "Tích hợp" : "Integration",
        href: "/integrations",
      })),
    ];

    if (!q) return list.slice(0, 8);
    return list.filter((item) => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)).slice(0, 10);
  }, [query, isVi]);

  return (
    <Dialog open={isSearchModalOpen} onOpenChange={setSearchModalOpen}>
      <DialogContent className="max-w-xl p-5">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold text-c-dark">
            {isVi ? "Tìm kiếm nền tảng" : "Search platform"}
          </DialogTitle>
        </DialogHeader>

        <div className="relative mt-2">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-c-muted" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isVi ? "Tìm website, app, AI agent, POS, bảng giá..." : "Search websites, apps, kiosks, POS, pricing..."}
            className="pl-10"
          />
        </div>

        <div className="mt-3 max-h-72 overflow-y-auto divide-y divide-c-border/70">
          {items.length === 0 ? (
            <p className="py-8 text-center text-sm text-c-muted">
              {isVi ? "Không tìm thấy kết quả phù hợp." : "No matching results found."}
            </p>
          ) : (
            items.map((item) => (
              <Link
                key={`${item.category}-${item.title}`}
                href={item.href}
                onClick={() => setSearchModalOpen(false)}
                className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-c-surface transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-c-dark">{item.title}</p>
                  <p className="text-[11px] text-c-muted">{item.category}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-c-muted" />
              </Link>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
