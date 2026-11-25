import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * OPERO UI Kit Button System (https://opero-ui-kit.vercel.app/#nut)
 * - primary / brand: #D91842 — strictly marketing website CTAs
 * - app / ink: #151417 (light) / #FFFFFF (dark) — product/console primary actions
 * - secondary: soft neutral pill (no border)
 * - ghost-dark: transparent with crisp inset 1.5px white border on dark Hero/KDS
 * - danger: destructive action (#B8123A light / #FF6B86 dark)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,transform,opacity] duration-150 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-[var(--canvas-soft)] disabled:text-[var(--ink-faint)] disabled:scale-100 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-[#D91842] text-white hover:bg-[#B8123A] active:bg-[#94102F]",
        brand: "bg-[#D91842] text-white hover:bg-[#B8123A] active:bg-[#94102F]",
        app: "bg-[var(--btn-app-bg)] text-[var(--btn-app-fg)] font-medium hover:opacity-90",
        ink: "bg-[var(--btn-app-bg)] text-[var(--btn-app-fg)] font-medium hover:opacity-90",
        secondary: "bg-[var(--line-soft)] text-[var(--ink)] font-medium hover:bg-[var(--line)]",
        "ghost-dark":
          "bg-transparent text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.34)] hover:bg-white/10",
        "outline-dark":
          "bg-transparent text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.34)] hover:bg-white/10",
        outline:
          "border border-[var(--line)] bg-[var(--canvas)] text-[var(--ink)] hover:border-[var(--ink-faint)] hover:bg-[var(--canvas-soft)]",
        danger: "bg-[var(--danger)] text-white dark:text-[#151417] font-medium hover:opacity-90",
        ghost: "text-[var(--ink)] hover:bg-[var(--line-soft)]",
        white: "bg-white text-[#151417] hover:bg-[#F5F5F6]",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-5 text-[14px]",
        lg: "h-12 px-6 text-[15px]",
        pos: "min-h-[56px] px-7 text-[17px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
