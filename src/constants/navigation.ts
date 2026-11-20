import type { NavItem } from "@/types/site";

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    labelKey: "nav_products",
    href: "/products",
    children: [
      {
        labelKey: "Ordering Websites & Native Apps",
        descriptionKey: "Branded web storefronts & iOS/Android apps with 0% commission.",
        href: "/products#build",
        icon: "smartphone",
      },
      {
        labelKey: "AI Ordering Agents",
        descriptionKey: "Conversational AI across Web Chat, WhatsApp & Voice.",
        href: "/products#ai-agents",
        icon: "bot",
        badge: "NEW",
      },
      {
        labelKey: "Self-Ordering Kiosks",
        descriptionKey: "In-store touch-screen kiosks synced to kitchen & POS.",
        href: "/products#build",
        icon: "monitor",
      },
      {
        labelKey: "Merchant App & Dashboard",
        descriptionKey: "Centralized multi-store command center & tablet order intake.",
        href: "/products#operate",
        icon: "layout-dashboard",
      },
      {
        labelKey: "Driver App & Auto-Dispatch",
        descriptionKey: "In-house fleet routing, live GPS tracking & 3PL fallback.",
        href: "/products#operate",
        icon: "truck",
      },
      {
        labelKey: "APIs, Webhooks & MCP",
        descriptionKey: "Open REST API, SDKs, MCP server & frontend source code.",
        href: "/products#extend",
        icon: "code",
      },
    ],
  },
  {
    labelKey: "nav_solutions",
    href: "/solutions",
    children: [
      {
        labelKey: "Single & Multi-Location Restaurants",
        descriptionKey: "Launch direct commission-free ordering and own your guest data.",
        href: "/solutions#restaurants",
        icon: "utensils",
      },
      {
        labelKey: "Franchises & Enterprise Chains",
        descriptionKey: "HQ, regional & store-level permissions with unified brand control.",
        href: "/solutions#franchises",
        icon: "building",
      },
      {
        labelKey: "Multi-Vendor Marketplaces",
        descriptionKey: "Build your own DoorDash, UberEats or regional delivery super app.",
        href: "/solutions#marketplaces",
        icon: "store",
      },
      {
        labelKey: "Grocery, Pharmacy & Local Retail",
        descriptionKey: "High-SKU catalogs, barcode modifiers & scheduled delivery slots.",
        href: "/solutions#retail",
        icon: "shopping-bag",
      },
    ],
  },
  {
    labelKey: "nav_integrations",
    href: "/integrations",
  },
  {
    labelKey: "nav_pricing",
    href: "/pricing",
  },
];

export const FOOTER_COLUMNS = {
  platform: [
    { labelEn: "Ordering Websites", labelVi: "Website đặt hàng", href: "/products#build" },
    { labelEn: "Native iOS & Android Apps", labelVi: "Ứng dụng iOS & Android", href: "/products#build" },
    { labelEn: "AI Ordering Agents", labelVi: "AI Ordering Agents", href: "/products#build" },
    { labelEn: "Self-Ordering Kiosks", labelVi: "Kiosk tự phục vụ", href: "/products#build" },
    { labelEn: "Merchant App & Dashboard", labelVi: "App cửa hàng & Dashboard", href: "/products#operate" },
    { labelEn: "Driver App & Dispatch", labelVi: "App tài xế & Điều phối", href: "/products#operate" },
  ],
  solutions: [
    { labelEn: "Restaurants & Cafes", labelVi: "Nhà hàng & Quán cà phê", href: "/solutions#restaurants" },
    { labelEn: "Franchises & Chains", labelVi: "Chuỗi & Nhượng quyền", href: "/solutions#franchises" },
    { labelEn: "Delivery Marketplaces", labelVi: "Sàn giao hàng đa gian hàng", href: "/solutions#marketplaces" },
    { labelEn: "Grocery & Local Retail", labelVi: "Siêu thị & Bán lẻ", href: "/solutions#retail" },
    { labelEn: "Cloud & Ghost Kitchens", labelVi: "Bếp trung tâm (Cloud Kitchen)", href: "/solutions#cloud-kitchens" },
  ],
  developers: [
    { labelEn: "REST API & Webhooks", labelVi: "REST API & Webhooks", href: "/products#extend" },
    { labelEn: "MCP Server for AI Agents", labelVi: "MCP Server cho AI Agent", href: "/products#extend" },
    { labelEn: "POS & 3PL Integrations", labelVi: "Tích hợp POS & 3PL", href: "/integrations" },
    { labelEn: "Open Frontend Source Code", labelVi: "Mã nguồn Frontend mở", href: "/products#extend" },
    { labelEn: "System Status (99.99%)", labelVi: "Trạng thái hệ thống (99.99%)", href: "/api/health" },
  ],
  company: [
    { labelEn: "Transparent Pricing", labelVi: "Bảng giá minh bạch", href: "/pricing" },
    { labelEn: "Book a Live Demo", labelVi: "Đặt lịch Demo", href: "/demo" },
    { labelEn: "0% Commission Calculator", labelVi: "Tính hoa hồng tiết kiệm", href: "/pricing#calculator" },
    { labelEn: "Enterprise Security", labelVi: "Bảo mật doanh nghiệp", href: "/solutions#franchises" },
  ],
};
