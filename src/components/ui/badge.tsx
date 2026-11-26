import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium leading-[1.4] transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-[var(--brand-red-50)] text-[var(--od-action-content)]",
        dark: "bg-[#1B1A1F] text-[#F9D0D8] border border-[#2A2A2E]",
        success: "bg-[var(--success-bg)] text-[var(--success)]",
        warning: "bg-[var(--warning-bg)] text-[var(--warning)]",
        danger: "bg-[var(--danger-bg)] text-[var(--danger)]",
        info: "bg-[var(--info-bg)] text-[var(--info)]",
        neutral: "bg-[var(--line-soft)] text-[var(--ink-2)]",
        accent: "bg-[var(--brand-red-50)] text-[var(--danger)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
