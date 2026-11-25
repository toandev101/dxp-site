"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OPERO Order Orbit — Signature Live Progress Ring (https://opero-ui-kit.vercel.app/#orbit)
 * Derived directly from the D01 Orbit logo geometry:
 *   center (128, 128), radius 76, open arc M199.42 102 A76 76 0 1 1 154 56.58
 */

const ORBIT_ARC_PATH = "M199.42 102A76 76 0 1 1 154 56.58";

export interface OrderOrbitProps {
  /** Progress from 0 to 1 */
  progress: number;
  /** Size in pixels (default 148; use 44 for mini KDS tickets) */
  size?: number;
  /** Dark surface mode (e.g. KDS board #1B1A1F) */
  dark?: boolean;
  /** Error / delayed state */
  issue?: boolean;
  className?: string;
}

export function OrderOrbit({
  progress,
  size = 148,
  dark = false,
  issue = false,
  className,
}: OrderOrbitProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  const isMini = size <= 56;
  const strokeWidth = isMini ? 40 : 32;
  const dotRadius = isMini ? 26 : 18;

  const angleRad = ((-20 + 310 * clamped) * Math.PI) / 180;
  const cx = 128 + 76 * Math.cos(angleRad);
  const cy = 128 + 76 * Math.sin(angleRad);

  const trackColor = dark ? "#2A2A2E" : "var(--line-soft)";
  const progressColor = issue
    ? dark
      ? "#FF6B86"
      : "var(--danger)"
    : dark
      ? "#FFFFFF"
      : "var(--ink)";
  const dotColor = issue ? (dark ? "#FF6B86" : "var(--danger)") : "var(--brand-green)";
  const haloColor = dark ? "#1B1A1F" : "var(--canvas)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      role="img"
      aria-label={`Order progress ${Math.round(clamped * 100)}%`}
      className={cn("shrink-0 select-none", className)}
    >
      {/* Background track */}
      <path
        d={ORBIT_ARC_PATH}
        pathLength={100}
        fill="none"
        stroke={trackColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
      />
      {/* Active progress arc */}
      <path
        d={ORBIT_ARC_PATH}
        pathLength={100}
        fill="none"
        stroke={progressColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeDasharray={`${clamped * 100} 100`}
        style={{ transition: "stroke-dasharray 0.3s cubic-bezier(0.2, 0, 0, 1)" }}
      />
      {/* Moving live dot with knockout halo */}
      <circle
        cx={cx}
        cy={cy}
        r={dotRadius}
        fill={dotColor}
        stroke={haloColor}
        strokeWidth={isMini ? 10 : 8}
        style={{ transition: "cx 0.3s cubic-bezier(0.2, 0, 0, 1), cy 0.3s cubic-bezier(0.2, 0, 0, 1)" }}
      />
    </svg>
  );
}

export interface OrbitStep {
  key: string;
  labelEn: string;
  labelVi: string;
  statusEn: string;
  statusVi: string;
  subEn: string;
  subVi: string;
  progress: number;
}

export const DEFAULT_ORBIT_STEPS: OrbitStep[] = [
  {
    key: "new",
    labelEn: "Received",
    labelVi: "Mới nhận",
    statusEn: "Order received",
    statusVi: "Đã nhận đơn #OP-4821",
    subEn: "Routed automatically to Downtown Flagship · 0s delay",
    subVi: "Đã chuyển tự động về chi nhánh Quận 1 · 0 giây trễ",
    progress: 0.12,
  },
  {
    key: "accepted",
    labelEn: "Confirmed",
    labelVi: "Xác nhận",
    statusEn: "Store confirmed",
    statusVi: "Quán đã xác nhận",
    subEn: "Synced directly to POS & Kitchen Display · ETA 18 min",
    subVi: "Đồng bộ thẳng xuống POS & màn hình bếp KDS · Dự kiến 18 phút",
    progress: 0.34,
  },
  {
    key: "cooking",
    labelEn: "Preparing",
    labelVi: "Đang làm",
    statusEn: "Kitchen preparing",
    statusVi: "Bếp đang chuẩn bị món",
    subEn: "2 items on prep line · Driver auto-assigned nearby",
    subVi: "2 món đang lên bếp · Tài xế gần nhất đã được điều phối",
    progress: 0.58,
  },
  {
    key: "shipping",
    labelEn: "Delivering",
    labelVi: "Đang giao",
    statusEn: "Courier on the way",
    statusVi: "Tài xế đang giao tới bạn",
    subEn: "1.2 km away · Live GPS tracking shared on Zalo & Web",
    subVi: "Cách 1,2 km · Cập nhật hành trình trực tiếp trên Zalo & Web",
    progress: 0.82,
  },
  {
    key: "done",
    labelEn: "Delivered",
    labelVi: "Hoàn tất",
    statusEn: "Delivered smoothly",
    statusVi: "Đã giao hoàn tất",
    subEn: "Loyalty points credited · 0% third-party commission",
    subVi: "Đã cộng điểm thành viên · 0% hoa hồng sàn trung gian",
    progress: 1,
  },
];

export function OrderOrbitShowcase({ isVi = false }: { isVi?: boolean }) {
  const [stepIdx, setStepIdx] = React.useState(2);
  const current = DEFAULT_ORBIT_STEPS[stepIdx] ?? DEFAULT_ORBIT_STEPS[0];

  return (
    <div className="rounded-[20px] bg-[var(--canvas)] p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex items-center justify-center sm:justify-start">
          <OrderOrbit progress={current.progress} size={136} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="opero-label">{isVi ? "Order Orbit · Theo dõi đơn trực tiếp" : "Order Orbit · Live order telemetry"}</p>
          <h3 className="mt-1 text-[22px] sm:text-[24px] font-semibold leading-[1.25] text-[var(--ink)]">
            {isVi ? current.statusVi : current.statusEn}
          </h3>
          <p className="mt-1.5 text-[14.5px] leading-[1.55] text-[var(--ink-mute)]">
            {isVi ? current.subVi : current.subEn}
          </p>

          {/* Interactive Step Pills (OPERO UI Kit .steps) */}
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Order stages">
            {DEFAULT_ORBIT_STEPS.map((st, idx) => {
              const isActive = idx === stepIdx;
              const isPassed = idx < stepIdx;
              return (
                <button
                  key={st.key}
                  type="button"
                  onClick={() => setStepIdx(idx)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-150 cursor-pointer",
                    isActive
                      ? "bg-[var(--btn-app-bg)] text-[var(--btn-app-fg)]"
                      : isPassed
                        ? "bg-[var(--brand-green-50)] text-[var(--brand-green-text)]"
                        : "bg-[var(--line-soft)] text-[var(--ink-mute)] hover:text-[var(--ink)]"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      isActive
                        ? "bg-[#5E9B2E]"
                        : isPassed
                          ? "bg-[#5E9B2E]"
                          : "bg-current opacity-40"
                    )}
                    aria-hidden="true"
                  />
                  <span>{isVi ? st.labelVi : st.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
