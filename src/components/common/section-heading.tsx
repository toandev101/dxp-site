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
            "mb-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em]",
            dark ? "text-blue-300" : "text-[#4B5563]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-[42px] lg:leading-[1.12]",
          dark ? "text-white" : "text-[#111827]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-[#4B5563]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
