import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Official OPERO D01 "Orbit" Logo System (BRAND.md §2 & src/docs/logo-trial/)
 * Exact vector paths from lockup.svg & symbol.svg — never retyped in a font.
 */

const ORBIT_RING_PATH =
  "M218.21 95.17A96 96 0 1 1 160.84 37.79L147.15 75.37A56 56 0 1 0 180.63 108.85Z";

export interface OperoLockupProps {
  /**
   * - "auto": Red ring, green dot, wordmark inherits currentColor (#151417 light / #FFFFFF dark)
   * - "light": Red ring, green dot, #151417 wordmark (for white / #F5F5F6 backgrounds)
   * - "dark": Red ring, green dot, #FFFFFF wordmark (for #111013 / #1B1A1F backgrounds)
   * - "red": White ring, #111013 dot, #FFFFFF wordmark (for #D91842 backgrounds)
   * - "mono-light": All #151417
   * - "mono-dark": All #FFFFFF
   */
  variant?: "auto" | "light" | "dark" | "red" | "mono-light" | "mono-dark";
  className?: string;
}

export function OperoLockup({ variant = "auto", className }: OperoLockupProps) {
  const ringFill =
    variant === "red" || variant === "mono-dark"
      ? "#FFFFFF"
      : variant === "mono-light"
        ? "#151417"
        : "#D91842";

  const dotFill =
    variant === "red"
      ? "#111013"
      : variant === "mono-light"
        ? "#151417"
        : variant === "mono-dark"
          ? "#FFFFFF"
          : "#5E9B2E";

  const textFill =
    variant === "light" || variant === "mono-light"
      ? "#151417"
      : variant === "dark" || variant === "red" || variant === "mono-dark"
        ? "#FFFFFF"
        : "currentColor";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 930 256"
      role="img"
      aria-label="OPERO"
      className={cn("h-7 w-auto shrink-0 select-none", className)}
    >
      <title>OPERO</title>
      <path fill={ringFill} d={ORBIT_RING_PATH} />
      <circle cx="181.74" cy="74.26" r="14" fill={dotFill} />
      <g fill={textFill}>
        <path
          d="M252 32H322A62 62 0 0 1 322 156H292V224H252ZM292 72H322A22 22 0 0 1 322 116H292Z"
          fillRule="evenodd"
        />
        <path d="M408 32H518V72H448V108H504V148H448V184H518V224H408Z" />
        <path
          d="M542 32H612A62 62 0 0 1 612 156H582V224H542ZM582 72H612A22 22 0 0 1 612 116H582Z"
          fillRule="evenodd"
        />
        <path d="M598 140H644L682 224H636Z" />
        <path
          fillRule="evenodd"
          d="M802 32A96 96 0 1 1 802 224A96 96 0 1 1 802 32ZM802 72A56 56 0 1 0 802 184A56 56 0 1 0 802 72Z"
        />
      </g>
    </svg>
  );
}

export interface OperoSymbolProps {
  variant?: "default" | "on-red" | "mono-light" | "mono-dark" | "app-icon";
  className?: string;
}

export function OperoSymbol({ variant = "default", className }: OperoSymbolProps) {
  if (variant === "app-icon") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        aria-hidden="true"
        className={cn("h-8 w-8 shrink-0 select-none", className)}
      >
        <rect width="256" height="256" rx="59" fill="#D91842" />
        <g transform="translate(32 32) scale(0.75)">
          <path fill="#FFFFFF" d={ORBIT_RING_PATH} />
          <circle cx="181.74" cy="74.26" r="14" fill="#111013" />
        </g>
      </svg>
    );
  }

  const ringFill =
    variant === "on-red" || variant === "mono-dark"
      ? "#FFFFFF"
      : variant === "mono-light"
        ? "#151417"
        : "#D91842";

  const dotFill =
    variant === "on-red"
      ? "#111013"
      : variant === "mono-light"
        ? "#151417"
        : variant === "mono-dark"
          ? "#FFFFFF"
          : "#5E9B2E";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={cn("h-6 w-6 shrink-0 select-none", className)}
    >
      <path fill={ringFill} d={ORBIT_RING_PATH} />
      <circle cx="181.74" cy="74.26" r="14" fill={dotFill} />
    </svg>
  );
}

/**
 * Large architectural Orbit motif for Hero / Closing CTA (DESIGN.md §8).
 * Flat vector geometry only — no glow, no gradient, max 2 per page.
 */
export function OperoOrbitAccent({
  className,
  opacity = 0.16,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
    >
      <path fill="#D91842" d={ORBIT_RING_PATH} />
      <circle cx="181.74" cy="74.26" r="14" fill="#5E9B2E" />
    </svg>
  );
}
