import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[13px] font-medium leading-[1.55]",
            dark ? "text-[#A9A8AF]" : "text-[var(--ink-mute)]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-[-0.02em] leading-[1.1]",
          dark ? "text-white" : "text-[var(--ink)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-[16px] sm:text-[18px] leading-[1.6]",
            dark ? "text-[#A9A8AF]" : "text-[var(--ink-mute)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
