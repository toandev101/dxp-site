import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-c-primary/40 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-c-primary text-white hover:bg-c-primary-hover shadow-sm hover:shadow-md active:scale-[0.99]",
        secondary:
          "bg-c-dark text-white hover:bg-c-dark-elevated shadow-sm hover:shadow-md active:scale-[0.99]",
        outline:
          "border border-c-border bg-white text-c-base hover:border-c-primary hover:text-c-primary hover:bg-c-primary-soft/40",
        "outline-dark":
          "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40",
        ghost: "text-c-base hover:bg-c-surface hover:text-c-primary",
        white: "bg-white text-c-dark hover:bg-slate-100 shadow-sm",
      },
      size: {
        sm: "h-9 px-3.5 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
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
