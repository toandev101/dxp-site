"use client";

import { Sun } from "lucide-react";

import { EnterpriseBrandMark } from "@/app/[lang]/(home)/_components/proof-section";
import { cn } from "@/lib/utils";

export function AlseaLogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <span className="inline-flex items-center gap-1 leading-none">
      <span
        className={cn(
          "font-extrabold tracking-[-0.03em] text-[#005f86]",
          size === "sm" ? "text-[15px]" : size === "lg" ? "text-[28px]" : "text-[21px]"
        )}
      >
        Alsea
      </span>
      <Sun
        className={cn(
          "text-[#f2c94c] -mt-2",
          size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
        )}
        strokeWidth={2.2}
      />
    </span>
  );
}

export function CustomerBrandBadge({
  slug,
  name,
  compact = false,
}: {
  slug: string;
  name: string;
  compact?: boolean;
}) {
  const scaleCls = compact ? "scale-[0.58] origin-center" : "scale-[0.88] origin-center";

  switch (slug) {
    case "alsea":
      return <AlseaLogoMark size={compact ? "sm" : "lg"} />;
    case "dominos-mexico-and-colombia":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="Domino's" />
        </span>
      );
    case "burger-king":
    case "burger-king-cyprus":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="Burger King" />
        </span>
      );
    case "chilis-mexico":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="Chili's" />
        </span>
      );
    case "p-f-changs":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="P.F. Chang's" />
        </span>
      );
    case "vips":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="Vips" />
        </span>
      );
    case "starbucks-mexico":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="Starbucks" />
        </span>
      );
    case "kfc-albania":
    case "kfc-kosova":
    case "kfc-macedonia":
      return (
        <span className={cn("inline-flex", scaleCls)}>
          <EnterpriseBrandMark brand="KFC" />
        </span>
      );
    case "archies-colombia":
      return <span className="text-[13px] font-black italic tracking-tight text-[#d91e2a]">Archie&apos;s</span>;
    case "bookelu":
      return <span className="text-[12px] font-serif font-semibold tracking-wide text-[#9a7b56]">Bookelu</span>;
    case "coldstone":
      return <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#b31b2c]">Cold Stone</span>;
    case "eatngo":
      return <span className="text-[12px] font-black tracking-tight text-[#0d5c3d]">EatN&apos;Go</span>;
    case "el-porton-mexico":
      return <span className="text-[11px] font-bold tracking-tight text-[#8c2d19]">El Portón</span>;
    case "foodplanet":
      return <span className="text-[11px] font-extrabold tracking-tight text-[#16a34a]">Food Planet</span>;
    case "gomamam":
      return <span className="text-[11.5px] font-black tracking-tight text-[#ea580c]">GoMamam</span>;
    case "gotchew":
      return <span className="text-[11.5px] font-black tracking-tight text-[#dc2626]">GotChew</span>;
    case "hungrydodo":
      return <span className="text-[10.5px] font-extrabold tracking-tight text-[#e11d48]">HungryDodo</span>;
    case "italiannis-mexico":
      return <span className="text-[11px] font-serif font-bold italic text-[#7c2d12]">Italianni&apos;s</span>;
    case "mylocal":
      return <span className="text-[12px] font-extrabold tracking-tight text-[#2563eb]">MyLocal</span>;
    case "piki":
      return <span className="text-[13px] font-black tracking-tight text-[#f59e0b]">Piki</span>;
    case "pinknberrry":
      return <span className="text-[11.5px] font-extrabold tracking-tight text-[#db2777]">pinkberry</span>;
    case "pupuseria-suiza":
      return <span className="text-[10px] font-bold tracking-tight text-[#b91c1c]">Pupusería</span>;
    case "the-cheesecake-factory":
      return <span className="text-[9.5px] font-serif font-bold text-[#78350f]">Cheesecake</span>;
    default: {
      const initials = name
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
      return (
        <span className="font-mono text-[12px] font-bold tracking-wider text-[#374151]">{initials}</span>
      );
    }
  }
}
