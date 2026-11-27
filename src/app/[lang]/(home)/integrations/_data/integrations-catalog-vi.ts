import { siteConfig } from "@/lib/site-config";
import {
  HUB_CATEGORY_CARDS,
  type HubCategoryCard,
  type IntegrationCategory,
  type IntegrationItem,
} from "./integrations-catalog";

const BRAND = siteConfig.name;

export const CATEGORY_LABELS_VI: Record<"All" | IntegrationCategory, string> = {
  All: "Tất cả",
  Payments: "Thanh toán",
  POS: "POS",
  Middleware: "Middleware",
  Delivery: "Giao hàng",
  Marketplaces: "Sàn giao đồ ăn",
  "Loyalty & CRM": "Khách hàng thân thiết & CRM",
  Analytics: "Phân tích & Báo cáo",
  "Automation and more": "Tự động hóa & khác",
  "Login & Security": "Đăng nhập & Bảo mật",
};

export function getCategoryLabel(cat: "All" | IntegrationCategory, isVi: boolean): string {
  return isVi ? CATEGORY_LABELS_VI[cat] : cat;
}

export const HUB_CATEGORY_CARDS_VI: HubCategoryCard[] = [
  {
    num: "01",
    title: "Cổng thanh toán",
    body: "Stripe, PayPal, Adyen, Mercado Pago và nhiều cổng thanh toán khác, kèm danh sách quốc gia hỗ trợ cho từng nhà cung cấp.",
    cta: "Khám phá thanh toán",
    href: "/integrations/payments",
  },
  {
    num: "02",
    title: "Tích hợp POS",
    body: "Đồng bộ thực đơn từ POS và đẩy đơn hàng trực tiếp vào POS. Hỗ trợ Square, Clover, Oracle Simphony, Shopify và nhiều hệ thống khác.",
    cta: "Khám phá POS",
    href: "/integrations/pos",
  },
  {
    num: "03",
    title: "Middleware",
    body: "Kết nối hàng trăm hệ thống POS khác thông qua ItsaCheckmate, Deliverect, Stream và Mokka.",
    cta: "Khám phá middleware",
    href: "/integrations/pos#pos-systems",
    filterCategory: "Middleware",
  },
  {
    num: "04",
    title: "Mạng lưới giao hàng",
    body: "Tài xế nội bộ của bạn, Uber Direct, DoorDash Drive, Lalamove và nhiều đối tác khác, được điều phối tự động.",
    cta: "Khám phá giao hàng",
    href: "/integrations/delivery",
  },
  {
    num: "05",
    title: "Sàn giao đồ ăn",
    body: `Nhận đơn Uber Eats và Just Eat ngay trong ${BRAND}, đồng thời xuất bản thực đơn tập trung từ một nơi duy nhất.`,
    cta: "Khám phá sàn giao đồ ăn",
    href: "/integrations#directory",
    filterCategory: "Marketplaces",
  },
  {
    num: "06",
    title: "Khách hàng thân thiết & CRM",
    body: "Điểm thưởng, ví tiền mặt và dữ liệu khách hàng đồng bộ trực tiếp với hệ thống marketing của bạn.",
    cta: "Khám phá loyalty & CRM",
    href: "/integrations/loyalty",
  },
  {
    num: "07",
    title: "Phân tích & Marketing",
    body: "Pixel, thẻ theo dõi và xuất dữ liệu BI cho mọi kênh bán hàng và từng cửa hàng.",
    cta: "Khám phá phân tích",
    href: "/integrations/analytics",
  },
  {
    num: "08",
    title: "Tự động hóa & khác",
    body: "Webhooks, Plugins, API & MCP, Zapier và công cụ nhắn tin giúp tự động hóa toàn bộ quy trình vận hành.",
    cta: "Khám phá tự động hóa",
    href: "/integrations/automation",
  },
  {
    num: "09",
    title: "Đăng nhập & Bảo mật",
    body: "Đăng nhập bằng Apple, Google hoặc Facebook, mã đăng nhập qua SMS/WhatsApp và bảo vệ chống bot với Google reCAPTCHA.",
    cta: "Khám phá đăng nhập & bảo mật",
    href: "/integrations/login-security",
  },
];

export function getHubCategoryCards(isVi: boolean): HubCategoryCard[] {
  return isVi ? HUB_CATEGORY_CARDS_VI : HUB_CATEGORY_CARDS;
}

const ITEM_VI_OVERRIDES: Record<string, { name?: string; description: string; countryNote?: string }> = {
  // Payments
  adyen: {
    description: `Thanh toán trực tuyến qua tài khoản Adyen của riêng bạn, được đội ngũ ${BRAND} thiết lập và bật theo từng cửa hàng.`,
    countryNote: "Phạm vi sản phẩm theo từng khu vực: hỗ trợ đăng ký trực tuyến cho pháp nhân tại các quốc gia này theo Adyen for Platforms, tùy thuộc loại hình doanh nghiệp và tính năng.",
  },
  "apple-pay": {
    description: "Thanh toán Apple Pay ngay tại bước checkout, vận hành qua Stripe và kích hoạt theo từng cửa hàng.",
  },
  "authorize-net": {
    description: "Thanh toán trực tuyến xử lý qua tài khoản Authorize.net của bạn, dành cho doanh nghiệp tại Hoa Kỳ và Canada.",
    countryNote: "Authorize.net áp dụng cho doanh nghiệp đặt trụ sở tại Hoa Kỳ và Canada, tùy theo điều kiện tài khoản và đơn vị xử lý thanh toán.",
  },
  "b-pay": {
    description: "Khách hàng thanh toán từ tài khoản Bankily bằng số điện thoại và mã xác nhận trên ứng dụng Bankily.",
    countryNote: "Banque Populaire de Mauritanie cung cấp Bankily cho cư dân Mauritania với mạng lưới điểm chấp nhận được phê duyệt.",
  },
  cardnet: {
    description: "Thanh toán thẻ bằng đồng Peso Dominica trên trang thanh toán bảo mật của CardNET, bật theo từng cửa hàng.",
    countryNote: "Dành cho doanh nghiệp tại Cộng hòa Dominica có đăng ký thương mại và tài khoản ngân hàng nội địa.",
  },
  computop: {
    description: "Thanh toán thẻ trên biểu mẫu bảo mật của Computop thông qua tài khoản Computop Paygate của bạn.",
    countryNote: "Computop Paygate GmbH là nhà cung cấp thanh toán tại Đức, tập trung vào thị trường Đức và khu vực DACH.",
  },
  credibanco: {
    description: "Thanh toán thẻ tín dụng và thẻ ghi nợ tại Colombia trên cổng bảo mật Credibanco, hỗ trợ trả góp.",
    countryNote: "Botón de Pagos của Credibanco vận hành trên nền tảng e-Co cho các đơn vị chấp nhận thanh toán tại Colombia.",
  },
  cybersource: {
    description: "Thanh toán thẻ qua tài khoản Cybersource của bạn, hỗ trợ lưu thẻ và tùy chọn bảo mật 3-D Secure.",
    countryNote: "Cybersource hỗ trợ chấp nhận thanh toán tại hơn 160 quốc gia và vùng lãnh thổ thông qua hơn 200 ngân hàng và đơn vị xử lý.",
  },
  ecocash: {
    description: "Thanh toán ví di động EcoCash bằng USD hoặc ZiG, khách hàng xác nhận trực tiếp trên điện thoại.",
    countryNote: "EcoCash là ví di động tại Zimbabwe, đăng ký đối tác qua hệ thống Econet Shops và quy trình thẩm định của EcoCash.",
  },
  epayco: {
    description: "Khách hàng chọn phương thức thanh toán trên trang bảo mật của ePayco và quay lại trang checkout của bạn.",
    countryNote: "ePayco là cổng thanh toán trực tuyến tại Colombia, yêu cầu doanh nghiệp hoạt động hợp pháp tại lãnh thổ Colombia.",
  },
  freshpay: {
    description: "Thanh toán tiền di động tại CHDC Congo qua M-Pesa, Airtel Money, Orange Money và Afrimoney bằng CDF hoặc USD.",
    countryNote: "FreshPay do MOKO Afrika vận hành, phục vụ các doanh nghiệp tại Cộng hòa Dân chủ Congo.",
  },
  giftme: {
    description: "Khách hàng thanh toán bằng Giftme và có thể đăng nhập bằng tài khoản Giftme ngay trong ứng dụng Giftme.",
    countryNote: "Giftme là nền tảng thẻ quà tặng số dành cho các thương hiệu và cửa hàng tại Jamaica.",
  },
  globalpay: {
    description: "Thanh toán thẻ qua GlobalPay de Redeban, hỗ trợ lưu thẻ và tùy chọn xác thực 3D Secure.",
    countryNote: "GlobalPay là cổng thanh toán trực tuyến của Redeban dành cho doanh nghiệp tại Colombia.",
  },
  "google-pay": {
    description: "Thanh toán Google Pay ngay tại bước checkout, vận hành qua Stripe và kích hoạt theo từng cửa hàng.",
  },
  hitpay: {
    description: "Thanh toán thẻ trên trang bảo mật HitPay, hỗ trợ lưu thẻ cho khách hàng quay lại mua lần sau.",
    countryNote: "HitPay hỗ trợ đăng ký doanh nghiệp mới tại 8 thị trường châu Á - Thái Bình Dương này. Phê duyệt tài khoản và phương thức thanh toán tùy theo nhà cung cấp.",
  },
  hyp: {
    description: "Thanh toán thẻ trên trang bảo mật Hyp thông qua thiết bị đầu cuối Hyp của riêng bạn.",
    countryNote: "Hyp (trước đây là YaadPay) cung cấp cổng thanh toán Hyp Pay tối ưu cho thị trường Israel.",
  },
  interswitch: {
    description: "Khách hàng thanh toán trên trang Interswitch Webpay và quay lại hoàn tất đơn trên checkout của bạn.",
    countryNote: "Cổng thanh toán Interswitch hỗ trợ thanh toán đồng Naira nội địa với Verve, Mastercard và Visa theo quy định của Ngân hàng Trung ương Nigeria.",
  },
  izipay: {
    description: "Thanh toán thẻ, mã QR và Yape tại Peru bằng tài khoản Izipay của bạn, kèm tính năng lưu thẻ.",
    countryNote: "Áp dụng cho doanh nghiệp và cá nhân có mã RUC, DNI hoặc thẻ cư trú tại Peru.",
  },
  liqpay: {
    description: "Nhúng checkout LiqPay trực tiếp vào website và ứng dụng đặt món với tài khoản LiqPay của bạn.",
    countryNote: "Yêu cầu đơn vị bán hàng có địa chỉ tại Ukraine và đáp ứng quy định pháp luật Ukraine.",
  },
  "mercado-pago": {
    description: "Tích hợp Mercado Pago Checkout Pro với phạm vi kênh và cấu hình được xác nhận theo phương thức đã cài đặt.",
    countryNote: "Phạm vi sản phẩm theo khu vực: Checkout Pro và thanh toán trực tuyến khả dụng tại 7 thị trường Mỹ Latinh này.",
  },
  mollie: {
    description: "Thanh toán trực tuyến xử lý trong tài khoản Mollie của bạn, bật linh hoạt theo từng cửa hàng.",
    countryNote: "Mollie hoạt động trên toàn bộ 30 quốc gia EEA cùng Thụy Sĩ và Vương quốc Anh.",
  },
  paypal: {
    description: "Thanh toán PayPal bằng tài khoản doanh nghiệp PayPal của bạn, bật linh hoạt theo từng cửa hàng.",
    countryNote: "Phạm vi sản phẩm theo khu vực: Expanded Checkout khả dụng cho tài khoản doanh nghiệp tại 37 quốc gia này.",
  },
  paystack: {
    description: "Khách hàng thanh toán trên trang checkout Paystack với các kênh mà tài khoản Paystack của bạn hỗ trợ, bật theo từng cửa hàng.",
    countryNote: "Paystack phục vụ doanh nghiệp tại Ghana, Kenya, Nigeria và Nam Phi.",
  },
  payu: {
    description: `Thanh toán trực tuyến qua tài khoản PayU của bạn, được đội ngũ ${BRAND} hỗ trợ thiết lập và bật theo từng cửa hàng.`,
    countryNote: "Phạm vi theo khu vực: hỗ trợ các thị trường tại Mỹ Latinh, châu Âu, châu Phi và Ấn Độ.",
  },
  razorpay: {
    description: "Thanh toán trực tuyến xử lý trong tài khoản Razorpay của bạn, dành cho doanh nghiệp đăng ký tại Ấn Độ.",
    countryNote: "Razorpay hỗ trợ doanh nghiệp đăng ký tại Ấn Độ; chấp nhận thẻ quốc tế áp dụng cho doanh nghiệp đủ điều kiện.",
  },
  redsys: {
    description: "Thanh toán thẻ trên trang bảo mật Redsys TPV Virtual, hỗ trợ hoàn tiền toàn phần và một phần.",
    countryNote: "Redsys là hạ tầng thanh toán tại Tây Ban Nha. Doanh nghiệp nhận TPV Virtual thông qua ngân hàng đối tác của Redsys.",
  },
  "square-checkout": {
    description: "Khách hàng thanh toán đơn trực tuyến trên trang checkout do Square lưu trữ, gắn với tài khoản Square của bạn.",
    countryNote: "Dịch vụ xử lý thanh toán Square hiện hỗ trợ tại 8 quốc gia này.",
  },
  stripe: {
    description: "Thanh toán thẻ, Apple Pay và Google Pay qua tài khoản Stripe của bạn, bật theo từng cửa hàng.",
    countryNote: "Danh sách quốc gia hỗ trợ tài khoản doanh nghiệp trực tiếp theo công bố toàn cầu của Stripe.",
  },
  "stripe-checkout": {
    description: "Khách hàng thanh toán đơn trực tuyến trên trang checkout do Stripe lưu trữ, thiết lập theo từng cửa hàng.",
    countryNote: "Stripe Checkout khả dụng cho doanh nghiệp có tài khoản Stripe trực tiếp tại 44 quốc gia này.",
  },
  "stripe-connect": {
    description: "Tự động chia tách doanh thu thanh toán giữa nền tảng và từng cửa hàng, có hỗ trợ chia tách cho tài xế.",
    countryNote: "Thị trường hỗ trợ tài khoản kết nối Standard của Stripe; phạm vi Express và Custom có thể khác nhau.",
  },
  "stripe-terminal": {
    description: `Thanh toán thẻ trực tiếp tại ki-ốt ${BRAND} của bạn thông qua đầu đọc thông minh Stripe.`,
    countryNote: "Các quốc gia có ít nhất một dòng đầu đọc thẻ Stripe Terminal (thông minh hoặc di động) được phân phối chính thức.",
  },
  yappy: {
    description: "Khách hàng tại Panama thanh toán đơn trực tuyến ngay từ ứng dụng Yappy bằng nút thanh toán Yappy.",
    countryNote: "Điều khoản Yappy Comercial yêu cầu doanh nghiệp hoạt động và đăng ký trụ sở tại Cộng hòa Panama.",
  },

  // POS Direct
  clover: {
    description: "Kết nối đơn hàng trực tuyến vào Clover và tối ưu luồng xử lý cho cả sàn giao đồ ăn lẫn giao hàng trực tiếp.",
    countryNote: "Clover POS hoạt động tại Hoa Kỳ, Canada, Argentina, Brazil, Mexico, Úc, Singapore, Anh, Ireland, Áo, Đức và Hà Lan.",
  },
  limetray: {
    description: "Đồng bộ thực đơn và tồn kho LimeTray, đẩy đơn trực tuyến vào LimeTray và cập nhật trạng thái hai chiều.",
  },
  "oracle-simphony": {
    description: `Nhập thực đơn từ Oracle Simphony, tạo đơn trực tuyến dưới dạng phiếu Simphony và gửi tiến độ bếp ngược lại ${BRAND}.`,
  },
  pulsepos: {
    description: "Dành cho đối tác nhượng quyền Domino's dùng PulsePOS. Đồng bộ sản phẩm, mã giảm giá, đẩy đơn vào PulsePOS và cập nhật trạng thái từ cửa hàng.",
  },
  shopify: {
    description: "Đồng bộ danh mục sản phẩm Shopify, gửi đơn trực tuyến sang Shopify và cập nhật trạng thái đơn từ Shopify.",
  },
  square: {
    description: "Đồng bộ thực đơn Square, đẩy đơn trực tuyến vào Square và cập nhật trạng thái trực tiếp cho khách hàng.",
    countryNote: "Nhà bán hàng Square hoạt động tại Mỹ, Canada, Úc, Nhật Bản, Anh, Ireland, Pháp và Tây Ban Nha.",
  },
  toast: {
    description: `Kết nối Toast POS với ${BRAND}, được đội ngũ chúng tôi khảo sát và triển khai theo từng chi nhánh và quy trình của bạn.`,
  },
  wansoft: {
    description: "Đồng bộ thực đơn Wansoft, đẩy đơn trực tuyến vào Wansoft và gửi cập nhật trạng thái đơn về cho khách hàng.",
    countryNote: "Wansoft by Clip là hệ thống POS nhà hàng được thiết kế cho doanh nghiệp tại Mexico.",
  },

  // Middleware
  deliverect: {
    description: "Xuất bản thực đơn từ Deliverect, đẩy đơn vào POS qua Deliverect và giữ trạng thái đơn đồng bộ liên tục.",
    countryNote: "Deliverect hỗ trợ tích hợp đặt món trên khắp Bắc Mỹ, châu Âu, Mỹ Latinh, Trung Đông và Bắc Âu.",
  },
  itsacheckmate: {
    description: "Đồng bộ thực đơn từ ItsaCheckmate và đẩy đơn hàng trực tuyến vào POS của bạn thông qua ItsaCheckmate.",
    countryNote: "Checkmate (ItsaCheckmate) đặt trụ sở tại New York và cung cấp dịch vụ tại thị trường Hoa Kỳ.",
  },
  mokka: {
    description: "Nhập thực đơn và đẩy đơn trực tuyến vào POS qua Mokka, bao gồm cả hệ thống Oracle Simphony.",
    countryNote: "Mokka là bộ sản phẩm nhà hàng của Softlogy dành cho các chuỗi nhà hàng và nhượng quyền tại Colombia.",
  },
  stream: {
    description: "Xuất bản thực đơn từ Stream, đẩy đơn trực tuyến vào POS qua Stream và nhận cập nhật trạng thái trực tiếp.",
  },

  // Delivery
  borzo: {
    description: `Tài xế giao hàng theo yêu cầu của Borzo cho đơn riêng của bạn, bàn giao tự động và cập nhật trạng thái ngay trong ${BRAND}.`,
    countryNote: "Borzo cung cấp dịch vụ giao hàng trong ngày và theo yêu cầu tại Ấn Độ và Indonesia.",
  },
  "doordash-drive": {
    description: "Tài xế DoorDash Drive giao đơn riêng của bạn với yêu cầu giao tự động, cập nhật trạng thái và liên kết theo dõi.",
    countryNote: "DoorDash Drive hoạt động tại Hoa Kỳ, Canada, Úc và New Zealand.",
  },
  lalamove: {
    description: "Tài xế Lalamove giao đơn trực tiếp của bạn với cơ chế đặt xe tự động, cập nhật trạng thái và liên kết theo dõi.",
    countryNote: "Lalamove vận hành dịch vụ giao hàng theo yêu cầu tại các thị trường châu Á (bao gồm Việt Nam), EMEA và châu Mỹ.",
  },
  llamafood: {
    description: "Đội ngũ giao hàng Llamafood tại Peru cho đơn của bạn, hỗ trợ điều phối tự động và trạng thái trực tuyến.",
    countryNote: "Llamafood là đơn vị giao hàng và vận chuyển hoạt động tại các thành phố ở Peru.",
  },
  nash: {
    description: "Điều phối giao hàng đa đối tác qua Nash từ một kết nối duy nhất cho mọi đơn đặt trực tiếp của bạn.",
  },
  "ordering-driver-app": {
    name: "Ứng dụng Tài xế OPERO",
    description: `Ứng dụng riêng của ${BRAND} dành cho đội ngũ tài xế nội bộ, hỗ trợ gán đơn thủ công hoặc tự động.`,
  },
  "pedidosya-courier": {
    description: "Tài xế PedidosYa giao đơn của bạn với báo phí tại checkout, điều phối tự động, trạng thái trực tuyến và thu hộ COD.",
    countryNote: "PedidosYa Envíos cung cấp giao hàng chặng cuối cho doanh nghiệp tại 15 quốc gia Mỹ Latinh.",
  },
  picker: {
    description: "Kết nối đội giao hàng nội địa qua Picker với báo phí tại checkout, đặt tài xế tự động và trạng thái trực tuyến.",
    countryNote: "Picker kết nối doanh nghiệp tại Mỹ Latinh với các đội ngũ giao hàng chặng cuối tại địa phương.",
  },
  "rappi-cargo": {
    description: "Tài xế Rappi Cargo giao đơn trực tiếp của bạn với báo phí tại checkout, điều phối tự động và theo dõi trực tiếp.",
    countryNote: "Rappi Cargo cung cấp tài xế theo yêu cầu tại 9 quốc gia Mỹ Latinh nơi Rappi hoạt động.",
  },
  shipday: {
    description: "Điều phối Shipday cho đơn của bạn với chuyển đơn tự động, phân bổ tài xế và cập nhật trạng thái trực tuyến.",
    countryNote: "Shipday cung cấp mạng lưới tài xế theo yêu cầu tại Mỹ, Canada, Úc và Vương quốc Anh.",
  },
  stuart: {
    description: "Tài xế Stuart giao đơn của bạn, vận hành song song cùng các đối tác giao hàng khác và đội tài xế nội bộ.",
    countryNote: "Stuart hoạt động tại Vương quốc Anh, Pháp và Ba Lan.",
  },
  "uber-direct": {
    description: "Tài xế Uber Direct giao đơn trực tiếp của bạn với báo phí tại checkout, điều phối tự động và theo dõi lộ trình trực tiếp.",
  },
  "yango-delivery": {
    description: "Tài xế Yango Delivery giao đơn của bạn với điều phối tự động, trạng thái trực tuyến và ảnh bằng chứng giao hàng.",
    countryNote: "Yango Delivery phục vụ doanh nghiệp tại nhiều thị trường Trung Đông, châu Phi và Mỹ Latinh.",
  },

  // Marketplaces
  "doordash-marketplace": {
    description: `Kết nối gian hàng DoorDash, xuất bản thực đơn từ ${BRAND} và nhận đơn DoorDash tập trung ngay trong ${BRAND}.`,
  },
  "just-eat": {
    description: `Xuất bản thực đơn lên Just Eat, nhận đơn Just Eat ngay trong ${BRAND} và đồng bộ trạng thái đơn ngược lại.`,
  },
  rappi: {
    description: `Xuất bản thực đơn lên Rappi, nhận đơn Rappi ngay trong ${BRAND} và tự động gửi trạng thái đơn về Rappi.`,
  },
  "uber-eats": {
    description: `Xuất bản thực đơn lên Uber Eats, nhận đơn Uber Eats ngay trong ${BRAND} và tự động cập nhật trạng thái ngược lại.`,
  },

  // Loyalty & CRM
  hubspot: {
    description: `Tự động gửi khách hàng mới và đơn hàng sang danh bạ và giao dịch (deals) HubSpot qua ứng dụng Zapier của ${BRAND}.`,
  },
  klaviyo: {
    description: `Email và SMS marketing qua Klaviyo cho khách hàng ${BRAND} của bạn — sắp ra mắt.`,
  },
  mailchimp: {
    description: `Tự động thêm khách hàng mới từ ${BRAND} vào danh sách Mailchimp kèm họ tên, email, số điện thoại và địa chỉ.`,
  },
  "ordering-loyalty": {
    description: `Tích điểm thưởng, ví tiền mặt và hạng thành viên tích hợp sẵn, cấu hình theo từng cửa hàng trong Bảng điều khiển ${BRAND}.`,
  },
  spoonity: {
    description: `Ghi nhận đơn hàng ${BRAND} vào Spoonity để tích điểm thành viên và tự động hủy giao dịch trên Spoonity khi đơn bị hủy.`,
  },

  // Analytics
  api: {
    description: `Lấy dữ liệu đơn hàng, khách hàng và doanh thu vào hệ thống báo cáo riêng của bạn bằng ${BRAND} API.`,
  },
  "looker-studio": {
    description: "Sắp ra mắt. Công cụ báo cáo của Google giúp xây dựng bảng điều khiển tùy chỉnh từ dữ liệu đặt hàng của bạn.",
  },
  excel: {
    description: "Xuất danh sách đơn hàng ra tệp CSV để phân tích và lập báo cáo trong Microsoft Excel.",
  },
  "google-analytics-4": {
    description: `Ghi nhận lượt xem trang, lượt bấm sản phẩm, thêm vào giỏ và thanh toán từ website ${BRAND} vào tài khoản GA4 của bạn.`,
  },
  "google-tag-manager": {
    description: `Nhúng container Tag Manager của bạn vào website ${BRAND}, tự động tải sau khi khách đồng ý cookie.`,
  },
  mcp: {
    description: `Kết nối Claude Code, ChatGPT, Codex và các công cụ AI tương thích với tài khoản ${BRAND} của bạn thông qua MCP.`,
  },
  "meta-pixel": {
    description: `Gửi sự kiện xem trang, thêm vào giỏ, đăng ký và mua hàng từ website ${BRAND} sang Meta Pixel của bạn.`,
  },
  "ordering-analytics": {
    description: "Báo cáo đơn hàng, doanh thu, sản phẩm, mức độ hài lòng và giao hàng ngay trong Bảng điều khiển, kèm xuất CSV.",
  },
  segment: {
    description: `Theo dõi các hành vi thương mại từ website và ứng dụng ${BRAND} ngay trong không gian làm việc Segment của bạn.`,
  },

  // Built-in Automations
  "auto-accept-orders": {
    name: "Tự động nhận đơn",
    description: "Đơn hàng mới được tự động xác nhận ngay lập tức để đội ngũ bỏ qua bước duyệt thủ công và bắt tay vào chuẩn bị.",
  },
  "custom-orders": {
    name: "Đơn hàng tùy chỉnh",
    description: "Cho phép khách đặt yêu cầu lấy và giao hàng riêng, tự động kiểm tra khoảng cách tối đa và tính phí theo mỗi km.",
  },
  "whatsapp-order-notifications": {
    name: "Thông báo đơn qua WhatsApp",
    description: "Tự động gửi tin nhắn WhatsApp cho khách khi đơn được tạo và cập nhật mỗi khi trạng thái đơn thay đổi.",
  },

  // Automation Integrations
  "custom-smtp": {
    description: "Gửi email đơn hàng và cảnh báo qua máy chủ SMTP của riêng bạn với địa chỉ người gửi và reply-to theo thương hiệu.",
  },
  "google-maps": {
    description: "Tìm kiếm địa chỉ, hiển thị bản đồ và định vị tọa độ trên mọi kênh bằng khóa Google Maps API của riêng bạn.",
  },
  intercom: {
    description: `Tích hợp cửa sổ chat trực tiếp Intercom trên website ${BRAND} để hỗ trợ khách hàng theo thời gian thực.`,
  },
  mapbox: {
    description: `Giải pháp bản đồ thay thế Google Maps cho nền tảng ${BRAND} của bạn, sử dụng token Mapbox riêng.`,
  },
  onesignal: {
    description: "Thông báo đẩy trạng thái đơn hàng dành cho quản trị viên, chủ cửa hàng, khách hàng và tài xế thông qua OneSignal.",
  },
  "ordering-api": {
    description: "Hệ thống backend vận hành Bảng điều khiển, mở sẵn cho các ứng dụng riêng, tích hợp nội bộ và công cụ AI của bạn.",
  },
  plugins: {
    description: `Mở rộng ${BRAND} với logic nghiệp vụ riêng hoặc từ bên thứ ba thông qua các hook, cài đặt trực tiếp từ Bảng điều khiển.`,
  },
  twilio: {
    description: "Gửi mã xác thực một lần (OTP) qua SMS hoặc WhatsApp khi khách đăng nhập và đăng ký thông qua tài khoản Twilio của bạn.",
  },
  webhooks: {
    description: "Gửi sự kiện đơn hàng, khách hàng và tài xế tới URL của bạn theo thời gian thực, áp dụng toàn hệ thống hoặc theo từng cửa hàng.",
  },
  "whatsapp-business": {
    description: `Trợ lý đặt món AI của ${BRAND} hoạt động trên số WhatsApp Business của bạn, trả lời câu hỏi về thực đơn và nhận đơn tự động.`,
  },
  zapier: {
    description: `Gửi sự kiện từ ${BRAND} sang Zapier để kích hoạt quy trình tự động trên hàng nghìn ứng dụng khác mà không cần viết code.`,
  },

  // Login & Security
  "facebook-login": {
    description: "Cho phép khách đăng nhập bằng tài khoản Facebook trên website và ứng dụng, cấu hình bằng ứng dụng Meta Developer của bạn.",
  },
  "google-recaptcha": {
    description: "Chống bot cho biểu mẫu đăng ký, đăng nhập và đặt hàng trực tuyến bằng khóa Google reCAPTCHA của riêng bạn.",
  },
  "google-sign-in": {
    description: "Cho phép khách đăng nhập và đăng ký bằng tài khoản Google trên website và ứng dụng thông qua dự án Firebase của bạn.",
  },
  "apple-sign-in": {
    description: "Cho phép khách đăng nhập bằng Tài khoản Apple trên website và ứng dụng, thiết lập qua tài khoản Apple Developer của bạn.",
  },
};

export function localizeCountrySummary(summary: string | undefined, isVi: boolean): string | undefined {
  if (!summary || !isVi) return summary;
  if (summary === "Country availability: ask us") {
    return "Phạm vi quốc gia: liên hệ tư vấn";
  }
  const bizMatch = summary.match(/^Business countries \((\d+\+?)\)( · eligibility varies)?$/);
  if (bizMatch) {
    return bizMatch[2]
      ? `Quốc gia kinh doanh (${bizMatch[1]}) · điều kiện tùy khu vực`
      : `Quốc gia kinh doanh (${bizMatch[1]})`;
  }
  const mktMatch = summary.match(/^Markets \((\d+\+?)\)$/);
  if (mktMatch) {
    return `Thị trường (${mktMatch[1]})`;
  }
  return summary;
}

export function localizeBadge(badge: string | undefined, isVi: boolean): string | undefined {
  if (!badge || !isVi) return badge;
  const map: Record<string, string> = {
    "Coming soon": "Sắp ra mắt",
    "Connected tool": "Công cụ kết nối",
    [`Built into ${BRAND}`]: `Tích hợp sẵn trong ${BRAND}`,
    "Developer access": "Truy cập lập trình viên",
    "Spreadsheet analysis": "Phân tích bảng tính",
    "Marketing measurement": "Đo lường marketing",
    "Tag management": "Quản lý thẻ",
    "AI tools": "Công cụ AI",
    "Customer data": "Dữ liệu khách hàng",
    [`${BRAND} automation`]: `Tự động hóa ${BRAND}`,
  };
  return map[badge] ?? badge;
}

export function localizeCtaLabel(item: IntegrationItem, localizedName: string, isVi: boolean): string {
  if (!isVi) return item.ctaLabel;
  const exactMap: Record<string, string> = {
    "Discuss future availability": "Trao đổi kế hoạch ra mắt",
    "Open API": "Mở API",
    "Open Excel": "Mở Excel",
    "Open MCP": "Mở MCP",
    "View Ordering Driver App": "Xem Ứng dụng Tài xế",
    "View Ordering Loyalty": "Xem Ordering Loyalty",
    "View Auto-accept orders": "Xem Tự động nhận đơn",
    "View Custom orders": "Xem Đơn hàng tùy chỉnh",
    "View WhatsApp order notifications": "Xem Thông báo WhatsApp",
  };
  if (exactMap[item.ctaLabel]) return exactMap[item.ctaLabel];
  if (item.ctaLabel.startsWith("View ") && item.ctaLabel.endsWith(" integration")) {
    return `Xem tích hợp ${localizedName}`;
  }
  return item.ctaLabel;
}

export function localizeIntegrationItem(item: IntegrationItem, isVi: boolean): IntegrationItem {
  if (!isVi) return item;

  const override = ITEM_VI_OVERRIDES[item.id];
  if (override) {
    const localizedName = override.name ?? item.name;
    return {
      ...item,
      name: localizedName,
      description: override.description,
      countrySummary: localizeCountrySummary(item.countrySummary, true),
      countryNote: override.countryNote ?? item.countryNote,
      badge: localizeBadge(item.badge, true),
      ctaLabel: localizeCtaLabel(item, localizedName, true),
    };
  }

  // Middleware POS items (300+ generated entries)
  const mwMatch = item.description.match(/^Connected to .+ through (.+) middleware\.$/);
  const description = mwMatch
    ? `Kết nối với ${BRAND} thông qua middleware ${mwMatch[1]}.`
    : item.description;

  return {
    ...item,
    description,
    countrySummary: localizeCountrySummary(item.countrySummary, true),
    badge: localizeBadge(item.badge, true),
    ctaLabel: localizeCtaLabel(item, item.name, true),
  };
}
