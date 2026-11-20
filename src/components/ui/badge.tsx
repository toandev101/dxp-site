import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-c-primary-soft text-c-primary border border-c-primary/15",
        dark: "bg-white/10 text-blue-300 border border-white/15",
        success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        neutral: "bg-slate-100 text-slate-700 border border-slate-200",
        accent: "bg-indigo-50 text-indigo-700 border border-indigo-200",
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
