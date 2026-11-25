import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OPERO UI Kit — 7 Official Order Status Chips (https://opero-ui-kit.vercel.app/#nut)
 * Pill shape (9999px), 6px leading dot using currentColor, adaptive Light/Dark semantic tokens.
 */
export type OrderStatusKind =
  | "new"
  | "accepted"
  | "cooking"
  | "ready"
  | "shipping"
  | "done"
  | "cancelled";

const STATUS_STYLES: Record<OrderStatusKind, string> = {
  new: "bg-[var(--brand-red-50)] text-[var(--brand-red)]",
  accepted: "bg-[var(--info-bg)] text-[var(--info)]",
  cooking: "bg-[var(--warning-bg)] text-[var(--warning)]",
  ready: "bg-[var(--success-bg)] text-[var(--success)]",
  shipping: "bg-[var(--line-soft)] text-[var(--ink-2)]",
  done: "bg-[var(--line-soft)] text-[var(--ink-mute)]",
  cancelled: "bg-[var(--danger-bg)] text-[var(--danger)]",
};

export function OrderStatusChip({
  status,
  children,
  className,
}: {
  status: OrderStatusKind;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium leading-[1.4]",
        STATUS_STYLES[status],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </span>
  );
}

/**
 * OPERO UI Kit — Toggle Switch (44px x 26px pill, #5E9B2E on-state)
 */
export function OperoToggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-[26px] w-[44px] shrink-0 items-center rounded-full p-[3px] transition-colors duration-150 cursor-pointer",
        checked ? "bg-[#5E9B2E]" : "bg-[var(--line)]"
      )}
    >
      <span
        className={cn(
          "h-[20px] w-[20px] rounded-full bg-white transition-transform duration-150 ease-[cubic-bezier(0.2,0,0,1)]",
          checked ? "translate-x-[18px]" : "translate-x-0"
        )}
      />
    </button>
  );
}
