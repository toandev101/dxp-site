import type {
  FaqItem,
  IntegrationItem,
  PricingTier,
  ProductItem,
  SolutionItem,
  TestimonialItem,
} from "@/types/site";

export const TRUSTED_BRANDS = [
  "Pizza Nova Group",
  "MetroFresh Market",
  "UrbanBite Kitchens",
  "BistroGo Franchise",
  "QuickKart Delivery",
  "Pacific Eats Co.",
  "Artisan Roasters",
  "SwiftMart Local",
];

export const PRODUCTS_DATA: ProductItem[] = [
  // BUILD
  {
    id: "ordering-website",
    pillar: "build",
    titleEn: "White-Label Ordering Websites",
    titleVi: "Website Đặt Hàng White-Label",
    descriptionEn:
      "Blazing-fast, SEO-optimized ordering storefronts hosted on your own custom domain with smart upsells, modifiers, and 1-click reorder.",
    descriptionVi:
      "Website đặt hàng tốc độ cao, chuẩn SEO chạy trên tên miền riêng kèm gợi ý bán kèm thông minh, chọn topping và đặt lại 1 chạm.",
    highlightsEn: ["Custom domain & SSL", "Visual theme builder", "Instant Apple Pay / Google Pay"],
    highlightsVi: ["Tên miền riêng & SSL", "Tùy biến giao diện trực quan", "Thanh toán 1 chạm linh hoạt"],
    icon: "globe",
  },
  {
    id: "native-apps",
    pillar: "build",
    titleEn: "Native iOS & Android Apps",
    titleVi: "Ứng Dụng Native iOS & Android",
    descriptionEn:
      "Published under your own App Store and Play Store developer accounts with push notifications, loyalty wallets, and live order tracking.",
    descriptionVi:
      "Xuất bản dưới tài khoản App Store & Google Play riêng của thương hiệu kèm thông báo đẩy, ví điểm thưởng và theo dõi đơn trực tiếp.",
    highlightsEn: ["100% your brand identity", "Automated push campaigns", "Biometric checkout"],
    highlightsVi: ["100% nhận diện thương hiệu", "Chiến dịch Push tự động", "Thanh toán sinh trắc học"],
    icon: "smartphone",
  },
  {
    id: "ai-ordering-agents",
    pillar: "build",
    titleEn: "AI Ordering Agents",
    titleVi: "Trợ Lý AI Chốt Đơn (AI Agents)",
    descriptionEn:
      "Conversational AI agents that take accurate orders via Web Chat, WhatsApp, and Phone Voice — synced live with menu availability and zones.",
    descriptionVi:
      "Trợ lý AI hội thoại tự động chốt đơn qua Web Chat, WhatsApp và Tổng đài thoại — đồng bộ trực tiếp thực đơn, tồn kho và vùng giao.",
    highlightsEn: ["WhatsApp, Web & Voice", "Modifier & allergen aware", "Seamless human handoff"],
    highlightsVi: ["WhatsApp, Web & Giọng nói", "Hiểu topping & ghi chú món", "Chuyển nhân viên mượt mà"],
    icon: "bot",
    badge: "NEW",
  },
  {
    id: "self-ordering-kiosks",
    pillar: "build",
    titleEn: "Self-Ordering Kiosks",
    titleVi: "Kiosk Tự Phục Vụ Tại Quầy",
    descriptionEn:
      "In-store touch-screen kiosks for dine-in and takeaway that cut queue times by 45% and increase average ticket size by up to 22%.",
    descriptionVi:
      "Màn hình cảm ứng đặt món tại cửa hàng giúp giảm 45% thời gian chờ và tăng giá trị đơn trung bình lên đến 22%.",
    highlightsEn: ["Dine-in & takeaway flows", "Card terminal & QR pay", "Direct kitchen printer sync"],
    highlightsVi: ["Hỗ trợ ăn tại chỗ & mang về", "Tích hợp máy quẹt thẻ & QR", "In phiếu bếp trực tiếp"],
    icon: "monitor",
  },
  {
    id: "call-center",
    pillar: "build",
    titleEn: "Call Center Console",
    titleVi: "Phần Mềm Tổng Đài Đặt Hàng",
    descriptionEn:
      "Dedicated high-speed console for phone agents to look up caller history, build complex combo orders, and route to the nearest branch.",
    descriptionVi:
      "Giao diện tốc độ cao cho tổng đài viên tra cứu lịch sử khách gọi, tạo đơn combo phức tạp và chuyển về chi nhánh gần nhất.",
    highlightsEn: ["Caller ID & address memory", "Multi-branch routing", "Unified CRM profile"],
    highlightsVi: ["Nhận diện SĐT & địa chỉ cũ", "Định tuyến chi nhánh tự động", "Hồ sơ khách hàng hợp nhất"],
    icon: "headphones",
  },
  {
    id: "marketplace-hub",
    pillar: "build",
    titleEn: "Multi-Vendor Marketplace",
    titleVi: "Sàn Thương Mại Đa Gian Hàng",
    descriptionEn:
      "Launch a regional delivery marketplace with vendor onboarding, split payouts, dynamic delivery fees, and multi-store cart management.",
    descriptionVi:
      "Triển khai sàn giao đồ ăn/bán lẻ khu vực với phân quyền đối tác, chia doanh thu tự động, phí giao linh hoạt và giỏ hàng đa cửa hàng.",
    highlightsEn: ["Vendor commission rules", "Automated split payouts", "Zone & radius geofencing"],
    highlightsVi: ["Cấu hình chiết khấu đối tác", "Đối soát & chia tiền tự động", "Khoanh vùng giao bản đồ"],
    icon: "store",
  },

  // OPERATE
  {
    id: "command-dashboard",
    pillar: "operate",
    titleEn: "Centralized Command Dashboard",
    titleVi: "Bảng Điều Khiển Trung Tâm",
    descriptionEn:
      "Manage stores, menus, modifiers, dynamic pricing, promo codes, roles, delivery zones, and real-time P&L analytics from one unified portal.",
    descriptionVi:
      "Quản lý toàn bộ cửa hàng, thực đơn, giá bán, khuyến mãi, phân quyền, vùng giao và báo cáo doanh thu thời gian thực tại một nơi.",
    highlightsEn: ["HQ, regional & store roles", "Bulk menu scheduling", "Live cohort & sales BI"],
    highlightsVi: ["Phân quyền trụ sở & chi nhánh", "Lên lịch thực đơn hàng loạt", "Báo cáo BI trực quan"],
    icon: "layout-dashboard",
  },
  {
    id: "merchant-app",
    pillar: "operate",
    titleEn: "Merchant Order App",
    titleVi: "Ứng Dụng Nhận Đơn Cửa Hàng",
    descriptionEn:
      "Tablet and mobile app for store staff to accept orders, adjust prep times, snooze out-of-stock items, and auto-print kitchen tickets.",
    descriptionVi:
      "Ứng dụng tablet/điện thoại giúp nhân viên nhận đơn, cập nhật thời gian chuẩn bị, tạm ẩn món hết hàng và in hóa đơn bếp tự động.",
    highlightsEn: ["Instant audio alerts", "1-tap item snoozing", "Bluetooth & LAN thermal print"],
    highlightsVi: ["Chuông báo đơn tức thì", "Tạm ẩn món hết chỉ 1 chạm", "In nhiệt Bluetooth & LAN"],
    icon: "tablet",
  },
  {
    id: "driver-dispatch",
    pillar: "operate",
    titleEn: "Driver App & Auto-Dispatch",
    titleVi: "App Tài Xế & Điều Phối Tự Động",
    descriptionEn:
      "Algorithmic auto-assignment for your in-house fleet with turn-by-turn routing, proof of delivery photos, and live customer map tracking.",
    descriptionVi:
      "Thuật toán tự động gán đơn cho đội tài xế nội bộ kèm chỉ đường, chụp ảnh xác nhận giao hàng và bản đồ theo dõi thời gian thực.",
    highlightsEn: ["Smart batching & auto-assign", "Live ETA tracking link", "Driver shift & earnings"],
    highlightsVi: ["Gộp đơn & gán tài xế thông minh", "Link theo dõi hành trình trực tiếp", "Quản lý ca & thu nhập tài xế"],
    icon: "truck",
  },

  // CONNECT
  {
    id: "pos-sync",
    pillar: "connect",
    titleEn: "Bi-Directional POS Sync",
    titleVi: "Đồng Bộ POS Hai Chiều",
    descriptionEn:
      "Connect Toast, Square, Clover, Oracle Simphony, Shopify, and Deliverect to sync menus, modifiers, taxes, and inject orders straight into the kitchen.",
    descriptionVi:
      "Kết nối Toast, Square, Clover, Oracle Simphony, Shopify, SAP/ERP để đồng bộ thực đơn, thuế và đẩy đơn thẳng xuống bếp.",
    highlightsEn: ["Menu & stock webhook sync", "Zero manual re-keying", "Middleware & native adapters"],
    highlightsVi: ["Đồng bộ thực đơn & tồn kho", "Không cần nhập tay lại đơn", "Hỗ trợ kết nối trực tiếp & trung gian"],
    icon: "plug",
  },
  {
    id: "payments-orchestration",
    pillar: "connect",
    titleEn: "Global & Local Payments",
    titleVi: "Thanh Toán Quốc Tế & Nội Địa",
    descriptionEn:
      "Accept cards, digital wallets, QR payments, cash on delivery, and split marketplace payouts via Stripe, Adyen, PayPal, VNPay, and MoMo.",
    descriptionVi:
      "Chấp nhận thẻ quốc tế, ví điện tử, mã QR, tiền mặt COD và chia thanh toán qua Stripe, Adyen, PayPal, VNPay và MoMo.",
    highlightsEn: ["PCI-DSS compliant checkout", "Saved cards & 1-click pay", "Automated refunds & tips"],
    highlightsVi: ["Chuẩn bảo mật PCI-DSS", "Lưu thẻ & thanh toán nhanh", "Hoàn tiền & tiền tip tự động"],
    icon: "credit-card",
  },
  {
    id: "delivery-3pl",
    pillar: "connect",
    titleEn: "3PL Delivery Network Fallback",
    titleVi: "Kết Nối Hãng Giao Hàng 3PL",
    descriptionEn:
      "Overflow peak-hour orders automatically to DoorDash Drive, Uber Direct, GrabExpress, or Ahamove whenever your own fleet is at capacity.",
    descriptionVi:
      "Tự động đẩy đơn giờ cao điểm sang DoorDash Drive, Uber Direct, GrabExpress hoặc Ahamove khi đội xe nội bộ quá tải.",
    highlightsEn: ["Dynamic rate comparison", "Unified tracking link", "Hybrid own-fleet + 3PL rules"],
    highlightsVi: ["So sánh cước phí tự động", "Một link theo dõi duy nhất", "Kết hợp xe nhà & đối tác 3PL"],
    icon: "route",
  },

  // EXTEND
  {
    id: "open-api-webhooks",
    pillar: "extend",
    titleEn: "REST APIs, Webhooks & SDKs",
    titleVi: "REST API, Webhooks & SDKs",
    descriptionEn:
      "Every single entity — orders, carts, stores, menus, customers, drivers — is exposed via a typed REST API and real-time event webhooks.",
    descriptionVi:
      "Mọi đối tượng — đơn hàng, giỏ hàng, cửa hàng, thực đơn, khách hàng, tài xế — đều có REST API chuẩn hóa và Webhook thời gian thực.",
    highlightsEn: ["OpenAPI 3.1 specification", "TypeScript & React SDKs", "HMAC-signed event webhooks"],
    highlightsVi: ["Chuẩn tài liệu OpenAPI 3.1", "SDK TypeScript & React", "Webhook ký bảo mật HMAC"],
    icon: "code",
  },
  {
    id: "mcp-server",
    pillar: "extend",
    titleEn: "Model Context Protocol (MCP)",
    titleVi: "Máy Chủ MCP Cho AI",
    descriptionEn:
      "Expose your catalog, store availability, cart actions, and order status natively to Claude, Gemini, ChatGPT, and custom enterprise AI workflows.",
    descriptionVi:
      "Kết nối trực tiếp danh mục món, trạng thái cửa hàng, giỏ hàng và đơn hàng tới Claude, Gemini, ChatGPT và quy trình AI nội bộ.",
    highlightsEn: ["Zero-glue AI tool calling", "Scoped OAuth permissions", "Real-time cart & checkout tools"],
    highlightsVi: ["AI gọi công cụ trực tiếp", "Phân quyền OAuth an toàn", "Công cụ giỏ hàng & thanh toán live"],
    icon: "cpu",
    badge: "NEW",
  },
  {
    id: "open-source-frontend",
    pillar: "extend",
    titleEn: "Open Frontend Source Code",
    titleVi: "Mã Nguồn Frontend Mở",
    descriptionEn:
      "Need pixel-perfect custom UX? Get full access to our Next.js & React Native frontend repositories so your engineers own the last mile.",
    descriptionVi:
      "Cần trải nghiệm UX đặc thù? Sở hữu mã nguồn Next.js & React Native để đội ngũ kỹ sư tự do tùy biến hoàn toàn không giới hạn.",
    highlightsEn: ["Next.js App Router + Tailwind", "Zero vendor lock-in", "Deploy on your own cloud"],
    highlightsVi: ["Next.js App Router + Tailwind", "Không bị khóa nhà cung cấp", "Triển khai trên hạ tầng riêng"],
    icon: "git-branch",
  },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "restaurants",
    titleEn: "Single & Multi-Location Restaurants",
    titleVi: "Nhà Hàng & Chuỗi Cửa Hàng",
    subtitleEn: "Reclaim 25–30% delivery app margins.",
    subtitleVi: "Lấy lại 25–30% lợi nhuận từ phí chiết khấu ứng dụng.",
    descriptionEn:
      "Convert third-party diners into direct loyal customers with branded web ordering, native mobile apps, built-in loyalty points, and commission-free delivery.",
    descriptionVi:
      "Chuyển đổi thực khách từ app trung gian thành khách hàng trực tiếp với website thương hiệu, app di động, tích điểm thành viên và giao hàng 0% hoa hồng.",
    metricsEn: "+34% direct repeat orders",
    metricsVi: "+34% tỷ lệ khách đặt lại trực tiếp",
    featuresEn: [
      "Branded website + iOS & Android apps",
      "Direct POS menu & order injection",
      "Automated SMS & push win-back campaigns",
      "Hybrid in-house & 3PL on-demand couriers",
    ],
    featuresVi: [
      "Website thương hiệu + ứng dụng iOS & Android",
      "Đồng bộ thực đơn & đẩy đơn thẳng vào POS",
      "Chiến dịch tự động nhắc khách quay lại",
      "Kết hợp shipper nội bộ và đối tác giao hàng",
    ],
    icon: "utensils",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    id: "franchises",
    titleEn: "Franchises & Enterprise Chains",
    titleVi: "Chuỗi Nhượng Quyền & Doanh Nghiệp Lớn",
    subtitleEn: "Central governance with local flexibility.",
    subtitleVi: "Quản trị tập trung, vận hành linh hoạt từng chi nhánh.",
    descriptionEn:
      "Operate 50 to 5,000+ stores across regions with HQ brand governance, regional pricing tiers, franchisee payout splits, and enterprise SLA reliability.",
    descriptionVi:
      "Vận hành từ 50 đến hơn 5.000 điểm bán đa khu vực với kiểm soát thương hiệu tập trung, bảng giá theo vùng và đối soát nhượng quyền chuẩn xác.",
    metricsEn: "99.99% uptime SLA at peak",
    metricsVi: "Cam kết SLA 99,99% giờ cao điểm",
    featuresEn: [
      "Multi-brand & multi-country domain routing",
      "HQ, regional & franchisee RBAC roles",
      "ERP, SAP & Oracle Simphony integrations",
      "Open frontend source code & dedicated CSM",
    ],
    featuresVi: [
      "Quản lý đa thương hiệu & đa tên miền",
      "Phân quyền Trụ sở, Khu vực & Cửa hàng",
      "Tích hợp ERP, SAP & Oracle Simphony",
      "Mã nguồn mở & chuyên gia đồng hành riêng",
    ],
    icon: "building",
    accent: "from-slate-800 to-slate-950",
  },
  {
    id: "marketplaces",
    titleEn: "Multi-Vendor Delivery Marketplaces",
    titleVi: "Sàn Giao Hàng Đa Gian Hàng",
    subtitleEn: "Launch your regional super-app in weeks.",
    subtitleVi: "Ra mắt siêu ứng dụng giao hàng khu vực trong vài tuần.",
    descriptionEn:
      "Run a local food, grocery, or multi-vertical marketplace with self-serve merchant onboarding, custom commission structures, and automated driver dispatch.",
    descriptionVi:
      "Vận hành sàn giao đồ ăn, tạp hóa hoặc đa ngành hàng với cổng đối tác tự đăng ký, cấu hình hoa hồng linh hoạt và điều phối tài xế tự động.",
    metricsEn: "Launch 10x faster than custom builds",
    metricsVi: "Ra mắt nhanh gấp 10 lần so với tự xây",
    featuresEn: [
      "Merchant portal & live onboarding approvals",
      "Automated split payouts & commission tiers",
      "Zone-based surge pricing & delivery fees",
      "Fleet auto-dispatch & live map analytics",
    ],
    featuresVi: [
      "Cổng đăng ký và duyệt gian hàng đối tác",
      "Tự động chia doanh thu & hoa hồng",
      "Phí giao linh hoạt theo khu vực & giờ cao điểm",
      "Điều phối đội xe tự động & bản đồ trực tiếp",
    ],
    icon: "store",
    accent: "from-emerald-600 to-teal-600",
  },
  {
    id: "retail",
    titleEn: "Grocery, Pharmacy & Local Retail",
    titleVi: "Siêu Thị, Nhà Thuốc & Bán Lẻ",
    subtitleEn: "Built for 50,000+ SKUs and scheduled slots.",
    subtitleVi: "Xử lý hơn 50.000 SKU và khung giờ giao hẹn trước.",
    descriptionEn:
      "Handle high-SKU inventories, weighted produce, item substitutions, barcode picking workflows, and same-day scheduled delivery windows seamlessly.",
    descriptionVi:
      "Quản lý danh mục hàng chục nghìn sản phẩm, hàng cân ký, thay thế món hết, quy trình soạn hàng mã vạch và giao hàng theo khung giờ.",
    metricsEn: "<150ms catalog search across 50k SKUs",
    metricsVi: "Tìm kiếm dưới 150ms trên 50.000 sản phẩm",
    featuresEn: [
      "Multi-level categories & faceted search",
      "Real-time ERP & warehouse inventory sync",
      "Scheduled delivery & curbside pickup slots",
      "Picker app & customer substitution chat",
    ],
    featuresVi: [
      "Danh mục đa cấp & bộ lọc tìm kiếm nhanh",
      "Đồng bộ tồn kho ERP & kho hàng thời gian thực",
      "Đặt lịch giao theo khung giờ & nhận tại quầy",
      "Ứng dụng soạn hàng & xác nhận đổi sản phẩm",
    ],
    icon: "shopping-bag",
    accent: "from-violet-600 to-purple-700",
  },
  {
    id: "cloud-kitchens",
    titleEn: "Cloud Kitchens & Virtual Brands",
    titleVi: "Bếp Trung Tâm & Thương Hiệu Ảo",
    subtitleEn: "Multiple virtual brands from a single kitchen.",
    subtitleVi: "Vận hành nhiều thương hiệu ảo từ một căn bếp duy nhất.",
    descriptionEn:
      "Spin up distinct branded storefronts for each virtual concept while consolidating incoming orders, prep queues, and driver handoffs onto one kitchen tablet.",
    descriptionVi:
      "Triển khai hàng loạt website/app riêng biệt cho từng thương hiệu ảo nhưng gom toàn bộ đơn hàng và điều phối về một màn hình bếp chung.",
    metricsEn: "3x kitchen throughput per square meter",
    metricsVi: "Tăng gấp 3 lần công suất trên mỗi mét vuông bếp",
    featuresEn: [
      "Multi-brand carts & cross-brand combos",
      "Single consolidated kitchen tablet view",
      "Shared driver fleet & batch delivery",
      "Per-brand profitability & promo analytics",
    ],
    featuresVi: [
      "Giỏ hàng đa thương hiệu & combo kết hợp",
      "Gom đơn tập trung trên một màn hình bếp",
      "Dùng chung đội tài xế & gộp chuyến giao",
      "Báo cáo lợi nhuận chi tiết theo từng thương hiệu",
    ],
    icon: "flame",
    accent: "from-orange-500 to-rose-600",
  },
];

export const INTEGRATIONS_DATA: IntegrationItem[] = [
  {
    id: "toast",
    name: "Toast POS",
    category: "pos",
    descriptionEn: "Two-way menu sync, real-time 86'd item updates, and direct kitchen order injection.",
    descriptionVi: "Đồng bộ thực đơn 2 chiều, tự động ẩn món hết và đẩy đơn trực tiếp xuống bếp.",
    badge: "Popular",
    initials: "TS",
    color: "bg-orange-500",
  },
  {
    id: "square",
    name: "Square POS",
    category: "pos",
    descriptionEn: "Unified catalog, modifier mapping, and automatic payment reconciliation.",
    descriptionVi: "Đồng bộ danh mục món, nhóm topping và đối soát thanh toán tự động.",
    initials: "SQ",
    color: "bg-slate-900",
  },
  {
    id: "clover",
    name: "Clover",
    category: "pos",
    descriptionEn: "Direct order firing to Clover stations and synchronized inventory counts.",
    descriptionVi: "Đẩy đơn trực tiếp về máy Clover và cập nhật tồn kho tức thì.",
    initials: "CL",
    color: "bg-emerald-600",
  },
  {
    id: "simphony",
    name: "Oracle Simphony",
    category: "pos",
    descriptionEn: "Enterprise-grade integration for global QSR and hospitality franchises.",
    descriptionVi: "Tích hợp chuẩn doanh nghiệp cho chuỗi nhà hàng và khách sạn quốc tế.",
    badge: "Enterprise",
    initials: "OS",
    color: "bg-red-600",
  },
  {
    id: "deliverect",
    name: "Deliverect",
    category: "pos",
    descriptionEn: "Middleware connector unlocking 100+ regional POS systems out of the box.",
    descriptionVi: "Cầu nối trung gian mở khóa hơn 100 hệ thống POS khu vực tức thì.",
    initials: "DL",
    color: "bg-teal-600",
  },
  {
    id: "sap",
    name: "SAP & DXP ERP",
    category: "pos",
    descriptionEn: "Real-time catalog, tax group, store availability, and order ledger syncing.",
    descriptionVi: "Đồng bộ danh mục, thuế VAT, chi nhánh và sổ cái đơn hàng với SAP/DXP.",
    badge: "Native",
    initials: "SP",
    color: "bg-blue-700",
  },
  {
    id: "stripe",
    name: "Stripe Connect",
    category: "payments",
    descriptionEn: "Cards, Apple Pay, Google Pay, and automated multi-vendor marketplace splits.",
    descriptionVi: "Thẻ quốc tế, Apple Pay, Google Pay và chia doanh thu đa gian hàng tự động.",
    badge: "Popular",
    initials: "ST",
    color: "bg-indigo-600",
  },
  {
    id: "adyen",
    name: "Adyen",
    category: "payments",
    descriptionEn: "Global omnichannel payments across web, mobile apps, and in-store kiosks.",
    descriptionVi: "Thanh toán đa kênh toàn cầu cho web, app di động và Kiosk tại quầy.",
    initials: "AD",
    color: "bg-green-600",
  },
  {
    id: "vnpay",
    name: "VNPay & MoMo",
    category: "payments",
    descriptionEn: "Instant QR banking, domestic ATM cards, and e-wallet checkout for APAC.",
    descriptionVi: "Thanh toán QR ngân hàng, thẻ nội địa và ví điện tử nhanh chóng tại Việt Nam.",
    badge: "APAC",
    initials: "VN",
    color: "bg-sky-600",
  },
  {
    id: "doordash-drive",
    name: "DoorDash Drive",
    category: "delivery",
    descriptionEn: "On-demand white-label courier fulfillment directly from your own checkout.",
    descriptionVi: "Gọi tài xế giao hàng theo yêu cầu ngay từ trang thanh toán riêng của bạn.",
    badge: "Popular",
    initials: "DD",
    color: "bg-rose-600",
  },
  {
    id: "uber-direct",
    name: "Uber Direct",
    category: "delivery",
    descriptionEn: "Local courier network with instant quotes, dispatch, and live ETA links.",
    descriptionVi: "Mạng lưới giao hàng địa phương với báo giá tức thì và link theo dõi trực tiếp.",
    initials: "UD",
    color: "bg-zinc-900",
  },
  {
    id: "grab-express",
    name: "GrabExpress & Ahamove",
    category: "delivery",
    descriptionEn: "Southeast Asia express fleet fallback for peak-hour restaurant & retail delivery.",
    descriptionVi: "Đội xe giao nhanh Đông Nam Á tự động hỗ trợ đơn giờ cao điểm.",
    badge: "APAC",
    initials: "GE",
    color: "bg-emerald-500",
  },
  {
    id: "hubspot",
    name: "HubSpot & Klaviyo",
    category: "crm",
    descriptionEn: "Sync customer segments, order milestones, and abandoned cart triggers.",
    descriptionVi: "Đồng bộ tệp khách hàng, cột mốc đơn hàng và kích hoạt nhắc giỏ hàng bỏ quên.",
    initials: "HK",
    color: "bg-amber-600",
  },
  {
    id: "ga4",
    name: "Google Analytics 4 & Meta",
    category: "crm",
    descriptionEn: "Server-side ecommerce events, conversion API, and campaign attribution.",
    descriptionVi: "Đo lường sự kiện thương mại điện tử server-side và hiệu quả quảng cáo.",
    initials: "GA",
    color: "bg-blue-500",
  },
  {
    id: "mcp",
    name: "MCP & AI Agents",
    category: "developers",
    descriptionEn: "Native Model Context Protocol server for conversational commerce agents.",
    descriptionVi: "Máy chủ Model Context Protocol nguyên bản cho trợ lý AI đặt hàng.",
    badge: "NEW",
    initials: "MC",
    color: "bg-violet-600",
  },
  {
    id: "webhooks",
    name: "REST API & Webhooks",
    category: "developers",
    descriptionEn: "Real-time event streams and typed SDKs for custom business automations.",
    descriptionVi: "Luồng sự kiện thời gian thực và SDK định kiểu sẵn cho mọi luồng tự động hóa.",
    initials: "AP",
    color: "bg-cyan-600",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "restaurant",
    nameEn: "Restaurant",
    nameVi: "Nhà Hàng (Restaurant)",
    taglineEn: "For single stores & growing chains eliminating 30% app commissions.",
    taglineVi: "Dành cho nhà hàng đơn lẻ & chuỗi đang mở rộng muốn bỏ phí hoa hồng 30%.",
    monthlyPrice: 149,
    annualPrice: 119,
    unitEn: "/ location / month",
    unitVi: "/ chi nhánh / tháng",
    commissionEn: "0% order commission",
    commissionVi: "0% hoa hồng đơn hàng",
    ctaEn: "Start Restaurant Trial",
    ctaVi: "Dùng thử gói Nhà hàng",
    featuresEn: [
      "Branded white-label ordering website",
      "Native iOS & Android customer apps",
      "Merchant tablet app & Command Dashboard",
      "In-house Driver App & live GPS tracking",
      "Self-Ordering Kiosk mode included",
      "POS & payment gateway integrations",
      "Loyalty points, coupons & upsells",
    ],
    featuresVi: [
      "Website đặt hàng white-label tên miền riêng",
      "Ứng dụng khách hàng iOS & Android",
      "App nhận đơn cửa hàng & Dashboard trung tâm",
      "App tài xế nội bộ & theo dõi GPS trực tiếp",
      "Tích hợp sẵn chế độ Kiosk tự phục vụ",
      "Kết nối POS và cổng thanh toán phổ biến",
      "Tích điểm thành viên, voucher & bán kèm",
    ],
  },
  {
    id: "marketplace",
    nameEn: "Marketplace",
    nameVi: "Sàn Thương Mại (Marketplace)",
    taglineEn: "For multi-vendor food, grocery & local commerce delivery platforms.",
    taglineVi: "Dành cho sàn giao đồ ăn, tạp hóa và nền tảng thương mại đa gian hàng.",
    monthlyPrice: 500,
    annualPrice: 425,
    unitEn: "/ month (incl. 2,500 orders)",
    unitVi: "/ tháng (gồm 2.500 đơn)",
    commissionEn: "0% commission · $0.29 / extra order",
    commissionVi: "0% hoa hồng · $0.29 / đơn vượt mức",
    popular: true,
    ctaEn: "Launch Your Marketplace",
    ctaVi: "Triển khai Sàn ngay",
    featuresEn: [
      "Everything in Restaurant, unlimited vendors",
      "Multi-vendor marketplace web + iOS/Android",
      "Vendor self-onboarding & approval workflows",
      "Automated split payouts & commission rules",
      "Algorithmic fleet auto-dispatch & zones",
      "3PL fallback (DoorDash, Uber, GrabExpress)",
      "Full REST API, Webhooks & AI Agent add-on",
    ],
    featuresVi: [
      "Mọi tính năng gói Nhà hàng, không giới hạn gian hàng",
      "Sàn đa nhà bán Web + App iOS/Android",
      "Cổng đăng ký & duyệt đối tác tự động",
      "Chia thanh toán & cấu hình chiết khấu linh hoạt",
      "Thuật toán tự động điều phối tài xế theo vùng",
      "Kết nối hãng giao hàng 3PL dự phòng giờ cao điểm",
      "Toàn quyền REST API, Webhooks & tùy chọn AI Agent",
    ],
  },
  {
    id: "enterprise",
    nameEn: "Enterprise",
    nameVi: "Doanh Nghiệp (Enterprise)",
    taglineEn: "For global franchises, large multi-brand groups & custom architectures.",
    taglineVi: "Dành cho chuỗi nhượng quyền lớn, tập đoàn đa thương hiệu & kiến trúc riêng.",
    monthlyPrice: 2500,
    annualPrice: 2150,
    unitEn: "starting / month",
    unitVi: "khởi điểm / tháng",
    commissionEn: "0% commission · Custom volume tiers",
    commissionVi: "0% hoa hồng · Hạn mức tùy chỉnh",
    ctaEn: "Talk to Enterprise Sales",
    ctaVi: "Liên hệ Tư vấn Doanh nghiệp",
    featuresEn: [
      "Everything in Marketplace at enterprise scale",
      "Full open frontend source code access",
      "Dedicated cloud cluster & 99.99% uptime SLA",
      "Custom ERP, SAP, Simphony & SSO integrations",
      "AI Ordering Agents (Web, WhatsApp & Voice) + MCP",
      "Multi-country domains & regional RBAC",
      "Dedicated Solutions Architect & 24/7 priority support",
    ],
    featuresVi: [
      "Mọi tính năng Marketplace ở quy mô tập đoàn",
      "Bàn giao quyền truy cập mã nguồn Frontend mở",
      "Cụm máy chủ riêng biệt & cam kết SLA 99,99%",
      "Tích hợp sâu ERP, SAP, Oracle Simphony & SSO",
      "Trợ lý AI chốt đơn (Web, WhatsApp, Voice) + MCP",
      "Đa quốc gia, đa tên miền & phân quyền theo vùng",
      "Kiến trúc sư giải pháp riêng & hỗ trợ 24/7",
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quoteEn:
      "We moved 42 locations off third-party delivery apps in six weeks. Our direct order share jumped from 18% to 61%, saving over $48,000 every single month in commissions.",
    quoteVi:
      "Chúng tôi chuyển đổi 42 chi nhánh sang kênh đặt hàng trực tiếp chỉ trong 6 tuần. Tỷ trọng đơn trực tiếp tăng từ 18% lên 61%, tiết kiệm hơn 48.000 USD tiền hoa hồng mỗi tháng.",
    author: "Marcus Vance",
    roleEn: "VP of Digital Operations",
    roleVi: "Phó Chủ Tịch Vận Hành Số",
    company: "UrbanBite Kitchens",
    metricEn: "$48k/mo saved",
    metricVi: "Tiết kiệm $48k/tháng",
    avatarBg: "bg-blue-600",
    initials: "MV",
  },
  {
    id: "t2",
    quoteEn:
      "Instead of spending 14 months building an ordering backend from scratch, our engineering team built directly on the REST API and forked the Next.js storefront in 3 weeks.",
    quoteVi:
      "Thay vì mất 14 tháng tự lập trình backend đặt hàng từ con số 0, đội ngũ kỹ thuật của chúng tôi tích hợp trực tiếp qua REST API và tùy biến storefront Next.js chỉ trong 3 tuần.",
    author: "Elena Rostova",
    roleEn: "CTO & Co-Founder",
    roleVi: "Giám Đốc Công Nghệ (CTO)",
    company: "QuickKart Regional Marketplace",
    metricEn: "11 months saved",
    metricVi: "Rút ngắn 11 tháng phát triển",
    avatarBg: "bg-indigo-600",
    initials: "ER",
  },
  {
    id: "t3",
    quoteEn:
      "Deploying the WhatsApp AI Ordering Agent alongside our in-store kiosks doubled our weekend rush capacity without adding a single cashier or phone agent.",
    quoteVi:
      "Triển khai trợ lý AI chốt đơn trên WhatsApp kết hợp cùng Kiosk tại quầy đã giúp chúng tôi nhân đôi công suất cuối tuần mà không cần tuyển thêm thu ngân hay trực tổng đài.",
    author: "David Nguyen",
    roleEn: "Head of Franchise Technology",
    roleVi: "Giám Đốc Công Nghệ Chuỗi",
    company: "Pacific Eats Group",
    metricEn: "2.1x peak throughput",
    metricVi: "Gấp 2,1 lần công suất giờ cao điểm",
    avatarBg: "bg-emerald-600",
    initials: "DN",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    questionEn: "Do you really charge 0% commission on orders?",
    questionVi: "Nền tảng có thực sự thu 0% hoa hồng trên đơn hàng không?",
    answerEn:
      "Yes. Across our Restaurant, Marketplace, and Enterprise plans, we never take a percentage cut of your sales revenue. You only pay a predictable software subscription (plus standard third-party payment processor fees directly to Stripe, Adyen, or your local gateway). Marketplace plans include a monthly order allowance with a flat micro-fee only if you exceed it.",
    answerVi:
      "Đúng vậy. Ở tất cả các gói Nhà hàng, Sàn thương mại và Doanh nghiệp, chúng tôi không cắt phần trăm doanh thu bán hàng của bạn. Bạn chỉ trả phí phần mềm cố định hàng tháng (cùng phí giao dịch tiêu chuẩn trực tiếp cho cổng thanh toán của bạn).",
  },
  {
    id: "faq-2",
    questionEn: "How fast can we launch our branded website and mobile apps?",
    questionVi: "Mất bao lâu để triển khai website và ứng dụng di động mang thương hiệu riêng?",
    answerEn:
      "Branded ordering websites, merchant dashboards, and driver apps can go live in as little as 3–5 business days once your menu and payment keys are connected. Native iOS and Android apps typically publish to your developer accounts within 2–3 weeks including App Store and Google Play review.",
    answerVi:
      "Website đặt hàng, dashboard quản trị và app tài xế có thể hoạt động chỉ sau 3–5 ngày làm việc ngay khi đồng bộ thực đơn và cổng thanh toán. Ứng dụng iOS & Android thường hoàn tất xuất bản lên App Store và Google Play trong 2–3 tuần.",
  },
  {
    id: "faq-3",
    questionEn: "Can we keep our existing POS and delivery drivers?",
    questionVi: "Chúng tôi có thể giữ nguyên hệ thống POS và đội tài xế hiện tại không?",
    answerEn:
      "Absolutely. We are built as modular middleware that plugs into your existing stack. Connect Toast, Square, Clover, Oracle Simphony, SAP, or Deliverect so menus stay synced and orders fire straight to the kitchen. Use our Driver App for your own fleet, or auto-fallback to DoorDash Drive, Uber Direct, and GrabExpress during rush hours.",
    answerVi:
      "Hoàn toàn được. Hệ thống được thiết kế theo mô-đun để cắm thẳng vào hạ tầng sẵn có: đồng bộ Toast, Square, Clover, Oracle Simphony, SAP/ERP; đồng thời dùng App Tài xế cho đội xe riêng hoặc tự động gọi GrabExpress, Uber Direct, DoorDash Drive vào giờ cao điểm.",
  },
  {
    id: "faq-4",
    questionEn: "How do AI Ordering Agents and the MCP Server work?",
    questionVi: "AI Ordering Agents và MCP Server hoạt động như thế nào?",
    answerEn:
      "AI Ordering Agents read directly from your live catalog, modifiers, store hours, and delivery zones. Guests can message on Web Chat, WhatsApp, or call by voice in natural language — the agent builds the cart, validates address eligibility, sends a checkout link, and hands off to a human agent whenever custom rules trigger.",
    answerVi:
      "AI Ordering Agents đọc trực tiếp dữ liệu thực đơn, topping, giờ mở cửa và vùng giao hàng theo thời gian thực. Khách hàng nhắn tin qua Web Chat, WhatsApp hoặc gọi điện bằng ngôn ngữ tự nhiên — AI sẽ tự tạo giỏ hàng, kiểm tra khu vực giao, gửi link thanh toán và chuyển nhân viên khi cần.",
  },
  {
    id: "faq-5",
    questionEn: "Can our engineering team customize the frontend or build on the API?",
    questionVi: "Đội ngũ lập trình nội bộ có thể tùy biến giao diện hoặc gọi API mở rộng không?",
    answerEn:
      "Yes! Unlike closed SaaS platforms, you get full REST API access, HMAC-signed webhooks, TypeScript SDKs, and on Enterprise tiers, full access to our Next.js App Router and React Native frontend source code so you never hit a platform ceiling.",
    answerVi:
      "Có! Khác với các nền tảng SaaS đóng, bạn được cung cấp đầy đủ REST API, Webhook bảo mật HMAC, TypeScript SDK và ở gói Enterprise là toàn bộ mã nguồn Frontend Next.js App Router & React Native để đội ngũ kỹ sư tự do mở rộng.",
  },
];
