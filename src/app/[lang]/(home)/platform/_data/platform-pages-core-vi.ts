import type { PlatformPageSpec } from "./platform-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const ORDERING_KIOSK_SPEC_VI: PlatformPageSpec = {
  slug: "ordering-kiosk",
  template: "showcase",
  metaTitle: "Phần mềm Kiosk Tự Phục Vụ (Self-Ordering Kiosk)",
  metaDescription:
    "Xây dựng Kiosk tự đặt món theo đúng thực đơn, hình thức phục vụ, quy trình thanh toán và luồng chuyển bếp mà phòng ăn của bạn cần.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Xây dựng", href: "/products#build" },
      { label: "Kiosk tự phục vụ" },
    ],
    title: "Mang đến lộ trình tự đặt món rõ ràng cho khách tại quán.",
    lede: "Kiosk tự phục vụ dẫn dắt khách hàng đặt món trực quan ngay trên màn hình cảm ứng tại cửa hàng. Khách chọn dùng tại chỗ hoặc mang đi, hoàn tất bước thanh toán đã cấu hình và nhận số thứ tự/thông tin nhận món trong khi đơn hàng lập tức chuyển thẳng xuống bếp.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Đặt món cảm ứng trực quan" },
      { text: "Chọn dùng tại chỗ hoặc mang đi" },
      { text: "Chuyển đơn thẳng xuống bếp" },
    ],
  },
  pageIndex: [
    { label: "Tổng quan", href: "#pillars" },
    { label: "Tính năng", href: "#features" },
    { label: "Chuyển đơn xuống bếp", href: "#kitchen" },
    { label: "Trên màn hình", href: "#screens" },
    { label: "Trải nghiệm tại quán", href: "#capabilities" },
    { label: "Kết nối hệ thống", href: "#connected" },
    { label: "Phần cứng & cài đặt", href: "#control" },
  ],
  pillars: {
    eyebrow: "Kiosk tự phục vụ",
    title: "Thiết kế luồng đặt món tại quán theo đúng cách đội ngũ phục vụ khách.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Một thực đơn, một bảng giá thống nhất",
        body: "Kiosk dùng chung thực đơn, tùy chọn món và quy tắc giá của cửa hàng, đảm bảo khách chọn món trên cùng một cấu trúc vận hành với đội ngũ của bạn.",
      },
      {
        label: "02",
        title: "Dùng tại chỗ hoặc mang đi",
        body: "Khách chọn dùng tại quán hay mang đi ngay từ bước đầu tiên và lựa chọn đó xuyên suốt toàn bộ đơn hàng.",
      },
      {
        label: "03",
        title: "Thanh toán phù hợp từng cửa hàng",
        body: "Kiosk hiển thị đúng luồng thanh toán đã cấu hình cho chi nhánh: máy quẹt thẻ, mã QR hoặc cổng thanh toán trực tuyến.",
      },
      {
        label: "04",
        title: "Chuyển thẳng xuống bếp",
        body: "Đơn đã xác nhận kèm số thứ tự và ghi chú chế biến đi thẳng vào các hệ thống mà đội ngũ bếp đang sử dụng.",
      },
    ],
  },
  features: {
    title: "Tích hợp trọn vẹn mọi bước chọn món vào hành trình Kiosk.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Tự đặt món có hướng dẫn",
        body: "Danh mục, món ăn, tùy chọn bổ sung và gợi ý trực quan giúp khách thao tác chạm mượt mà từ đầu đến cuối.",
      },
      {
        title: "Dùng tại chỗ và mang đi",
        body: "Hình thức phục vụ khách chọn tự động hiển thị trên hóa đơn, phiếu bếp và quy trình trả món.",
      },
      {
        title: "Thanh toán thẻ và mã QR",
        body: "Kết nối đầu đọc thẻ, QR hoặc cổng thanh toán phù hợp thói quen chi trả của khách tại từng điểm bán.",
      },
      {
        title: "Số thứ tự và nhận món",
        body: "Hiển thị số đơn hàng và chỉ dẫn nhận món phù hợp với mô hình phục vụ của cửa hàng.",
      },
      {
        title: "Đồng bộ bếp và POS",
        body: "Định tuyến đơn đã xác nhận thẳng tới màn hình bếp, máy in phiếu và hệ thống POS của cửa hàng.",
      },
      {
        title: "Dấu ấn thương hiệu trên màn hình",
        body: "Áp dụng bộ nhận diện và nội dung thương hiệu để Kiosk hòa làm một với không gian quán.",
      },
    ],
  },
  stepsSplit: {
    id: "kitchen",
    eyebrow: "Từ màn hình Kiosk xuống bếp",
    title: "Điều gì diễn ra ngay sau khi khách bấm thanh toán.",
    lead: "Hành trình Kiosk khép lại bằng bước bàn giao vận hành rõ ràng: xác nhận đơn, số thứ tự, chi tiết món và trạng thái thanh toán đi thẳng từ màn hình khách tới đội ngũ chế biến.",
    steps: [
      {
        num: "01",
        title: "Khách xác nhận và thanh toán",
        body: "Khách kiểm tra món đã chọn, hình thức dùng tại chỗ/mang đi và hoàn tất thanh toán.",
      },
      {
        num: "02",
        title: "Hệ thống cấp số đơn hàng",
        body: "Màn hình hiển thị số thứ tự hoặc hướng dẫn nhận món theo quy trình của cửa hàng.",
      },
      {
        num: "03",
        title: "Vận hành nhận đủ thông tin đơn",
        body: "Đội ngũ tại quán nhận đầy đủ chi tiết đơn hàng để kiểm tra, chế biến và phục vụ đúng yêu cầu.",
      },
      {
        num: "04",
        title: "Hệ thống bếp nhận phiếu ngay lập tức",
        body: "Dữ liệu đơn được định tuyến tới màn hình bếp, máy in và hệ thống POS đã tích hợp tại chi nhánh.",
      },
    ],
  },
  screensWalkthrough: {
    id: "screens",
    eyebrow: "Trên màn hình",
    title: "Trải nghiệm khách nhìn thấy và nội dung bạn luôn chủ động cập nhật.",
    lead: "Kiosk mở đầu bằng hình ảnh thương hiệu của bạn và dẫn khách từ cú chạm đầu tiên vào thực đơn có thể cập nhật bất kỳ lúc nào.",
    caption: "Màn hình Kiosk minh họa với cửa hàng và thực đơn mẫu.",
    items: [
      {
        title: "Mở đầu bằng thương hiệu, sau đó chọn ăn tại quán hay mang đi",
        body: "Chào đón khách bằng nhận diện thương hiệu nổi bật và để khách chọn dùng tại chỗ hoặc nhận tại quầy ngay ở cú chạm đầu tiên.",
      },
      {
        title: "Duyệt thực đơn luôn cập nhật theo thời gian thực",
        body: "Cập nhật giá, tùy chọn món và tình trạng hết món tập trung từ Bảng điều khiển để mọi Kiosk hiển thị chính xác tức thì.",
      },
    ],
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Trong không gian nhà hàng",
    title: "Kiosk tự phục vụ thay đổi điều gì cho khách hàng và nhân viên.",
    items: [
      {
        title: "Đặt món nhanh gọn",
        body: "Khách tự xem thực đơn, tùy chỉnh món ăn và thanh toán ngay tại Kiosk.",
      },
      {
        title: "Giảm hàng chờ tại quầy",
        body: "Khách không phải xếp hàng chờ gọi món ở quầy thu ngân, giúp nhân viên tập trung vào khâu phục vụ quan trọng hơn.",
      },
      {
        title: "Tùy biến theo sở thích",
        body: "Khách thoải mái chọn ghi chú, topping và khẩu phần theo đúng ý muốn và nhịp độ của mình.",
      },
      {
        title: "Gợi ý mua thêm & khuyến mãi",
        body: "Kiosk chủ động hiển thị ưu đãi và món ăn kèm ngay trong quá trình khách chọn món.",
      },
      {
        title: "Tăng độ chính xác đơn hàng",
        body: "Khách trực tiếp nhập lựa chọn của mình, hạn chế tối đa sai sót do nhập tay qua trung gian.",
      },
      {
        title: "Dữ liệu hành vi thực tế",
        body: "Hoạt động trên Kiosk bổ sung dữ liệu về sở thích món ăn và xu hướng gọi món tại quán.",
      },
      {
        title: "Đồng nhất thương hiệu với ứng dụng khách hàng",
        body: "Trên mọi gói dịch vụ, trải nghiệm đặt món mang thương hiệu riêng cũng có thể phát hành dưới dạng ứng dụng di động trên App Store và Google Play.",
      },
    ],
  },
  scopeNotes: [
    {
      id: "kiosk-curbside-scope",
      title: "Phân tách rõ nhận tại quầy và nhận tại xe (curbside).",
      lead: "Tài liệu Kiosk tự phục vụ hiện tại thiết kế cho trải nghiệm đặt món tại quán để nhận ở quầy hoặc phục vụ tại bàn. Tùy chọn mang đi không tự động tạo luồng giao ra bãi xe.",
      paragraphs: [
        "Trong hành trình Kiosk tiêu chuẩn, tên khách và mã xác nhận giúp nhà hàng định danh đơn hàng nhưng không mang thông tin biển số xe hay vị trí đỗ xe.",
        "Nếu cần điểm chạm nhận tại xe (curbside), hãy sử dụng luồng đặt món qua mã QR của cửa hàng: mã QR tại ô đỗ xe có thể gắn sẵn số vị trí và mở trực tiếp thực đơn trên điện thoại của khách.",
      ],
    },
  ],
  connected: {
    eyebrow: "Một hạ tầng thống nhất",
    title: "Giữ Kiosk kết nối chặt chẽ với toàn bộ vận hành cửa hàng.",
    body: "Hoạch định Kiosk song hành cùng danh mục món, dữ liệu khách hàng, hình thức phục vụ và hệ thống vận hành đang hỗ trợ các kênh đặt hàng khác.",
    topRow: ["Website", "Ứng dụng", "Kiosk", "Tổng đài", "Trợ lý AI"],
    hubNote: "Đồng bộ thực đơn, thanh toán và định tuyến bếp",
    bottomRow: ["App Cửa hàng", "POS", "Màn hình bếp", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Phần cứng của bạn, thương hiệu của bạn",
    title: "Tùy chỉnh cấu hình Kiosk vừa vặn từng cửa hàng.",
    body: "Trước khi đưa vào hoạt động, hãy đồng bộ trải nghiệm khách với phần cứng, phương thức thanh toán, máy in, luồng bếp và nhận diện thương hiệu tại chi nhánh.",
    cards: [
      {
        title: "Máy tính bảng phổ thông",
        body: "Chạy giao diện Kiosk mượt mà trên các dòng máy tính bảng thương mại và chân đế đặt quầy được hỗ trợ.",
      },
      {
        title: "Thiết bị Kiosk chuyên dụng",
        body: "Kết hợp khung đứng sàn, máy in hóa đơn và đầu đọc thẻ thanh toán tương thích.",
      },
      {
        title: "Tùy biến nhận diện thương hiệu",
        body: "Áp dụng logo, bảng màu, phông chữ và màn hình chờ quảng bá ưu đãi riêng cho từng thương hiệu.",
      },
      {
        title: "Cấu hình theo từng chi nhánh",
        body: "Thiết lập cách đánh số đơn, chế độ ăn tại chỗ/mang đi và định tuyến bếp riêng cho mỗi địa điểm.",
      },
    ],
  },
  related: {
    title: "Mọi kênh đặt hàng khác dành cho khách hàng của bạn.",
    items: [
      {
        label: "Xây dựng",
        title: "Website đặt hàng",
        body: "Cửa hàng trực tuyến mang thương hiệu riêng trên tên miền của bạn.",
        href: "/platform/ordering-web",
      },
      {
        label: "Xây dựng",
        title: "Ứng dụng đặt hàng",
        body: "Ứng dụng iOS và Android gốc mang thương hiệu riêng của bạn.",
        href: "/platform/ordering-apps",
      },
      {
        label: "Xây dựng",
        title: "Tổng đài đặt hàng",
        body: "Tổng đài viên tiếp nhận đơn qua điện thoại vào cùng một hệ thống.",
        href: "/platform/ordering-call-center",
      },
      {
        label: "Tích hợp",
        title: "Tích hợp POS",
        body: "Đẩy đơn từ Kiosk thẳng vào hệ thống POS cửa hàng đang vận hành.",
        href: "/integrations/pos",
      },
    ],
  },
  closingCta: {
    title: "Thiết kế lộ trình tự đặt món cho cửa hàng mẫu của bạn.",
    body: "Mang theo thực đơn, mô hình phục vụ và kịch bản chuyển bếp của bạn. Chúng tôi sẽ cùng bạn rà soát từng bước trải nghiệm và lựa chọn cấu hình Kiosk phù hợp nhất.",
    docGuide: { label: "Hướng dẫn sử dụng ứng dụng Kiosk tự phục vụ", href: "/demo" },
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Ordering Kiosk · Guided demo" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const ORDERING_CALL_CENTER_SPEC_VI: PlatformPageSpec = {
  slug: "ordering-call-center",
  template: "showcase",
  metaTitle: "Phần mềm Tổng đài Đặt hàng (Call Center)",
  metaDescription:
    "Màn hình điều phối cho đội tổng đài viên của bạn: tra cứu khách theo SĐT, chọn địa chỉ đã lưu, tự động gán chi nhánh gần nhất và lên đơn ngay từ thực đơn.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Xây dựng", href: "/products#build" },
      { label: "Tổng đài đặt hàng" },
    ],
    title: "Tổng đài viên nhận cuộc gọi. Đơn hàng đổ thẳng về đúng chi nhánh.",
    lede: "Tổng đài đặt hàng là giao diện làm việc chuyên dụng cho đội ngũ nhận đơn qua điện thoại của bạn. Hệ thống tự tra cứu khách theo số điện thoại, hiển thị địa chỉ đã lưu, chọn chi nhánh gần nhất và chuyển đơn về App Cửa hàng & POS hệt như mọi kênh trực tuyến khác.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Tra cứu nhanh theo số điện thoại" },
      { text: "Tự động chọn chi nhánh gần nhất" },
      { text: "Phân quyền nhân viên & giám sát" },
    ],
  },
  pageIndex: [
    { label: "Tổng quan", href: "#pillars" },
    { label: "Tính năng", href: "#features" },
    { label: "Luồng nhận cuộc gọi", href: "#flow" },
    { label: "Bên trong màn hình tổng đài", href: "#console" },
    { label: "Hồ sơ khách hàng", href: "#customer-records" },
    { label: "Xuyên suốt ca trực", href: "#capabilities" },
    { label: "Hệ thống kết nối", href: "#connected" },
    { label: "Phân quyền đội ngũ", href: "#control" },
  ],
  pillars: {
    eyebrow: "Tổng đài đặt hàng",
    title: "Một màn hình duy nhất cho mọi cuộc gọi đặt món của đội ngũ bạn.",
    numbered: true,
    items: [
      { label: "01", title: "Nhận diện khách theo số điện thoại", body: "Tổng đài viên nhập số điện thoại là hồ sơ mở ra ngay: tên, lịch sử đơn và địa chỉ đã lưu trước cả khi hỏi câu đầu tiên." },
      { label: "02", title: "Tự động chọn đúng chi nhánh", body: "Địa chỉ giao hàng tự động đối chiếu bản đồ để chọn chi nhánh gần nhất phục vụ được, nhân viên không cần nhớ vùng giao." },
      { label: "03", title: "Đầy đủ thực đơn & tùy chọn", body: "Dùng chung danh mục món với website/app, đầy đủ nhóm món, topping và điều kiện tùy chọn, tối ưu để gõ nhanh lúc nghe máy." },
      { label: "04", title: "Thanh toán không cần đọc số thẻ", body: "Gửi link thanh toán tới điện thoại khách hoặc thanh toán bằng thẻ đã lưu — tổng đài viên không bao giờ phải giữ thông tin thẻ." },
    ],
  },
  features: {
    title: "Mọi công cụ đội tổng đài cần để chốt đơn nhanh và chính xác.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      { title: "Tra cứu & lịch sử khách hàng", body: "Tìm theo số điện thoại hoặc tên. Đơn cũ, địa chỉ và ghi chú hiển thị chung một màn hình với đơn đang tạo." },
      { title: "Địa chỉ đã lưu & thêm mới", body: "Chọn nhanh địa chỉ khách đã có hoặc thêm địa chỉ mới ngay trong cuộc gọi và lưu sẵn cho lần sau." },
      { title: "Chọn chi nhánh gần nhất theo địa chỉ", body: "Hệ thống tự đối chiếu địa chỉ với danh sách cửa hàng và vùng giao hàng để định tuyến đúng chi nhánh." },
      { title: "Giao hàng hay mang về đều đồng nhất", body: "Loại đơn, khung giờ và quy tắc chi nhánh dùng chung hoàn toàn với website, không phải cấu hình hai lần cho tổng đài." },
      { title: "Link thanh toán hoặc thẻ đã lưu", body: "Khách tự thanh toán an toàn trên điện thoại của mình hoặc trừ qua thẻ đã lưu sẵn trên tài khoản." },
      { title: "Đơn đổ thẳng về đúng cửa hàng", body: "Đơn xuất hiện ngay trên App Cửa hàng và POS của chi nhánh phụ trách, kèm theo dõi đơn và thông báo cho khách." },
    ],
  },
  stepsSplit: {
    id: "flow",
    eyebrow: "Trong cuộc gọi",
    title: "Một cuộc gọi, một đơn hàng, đúng chi nhánh.",
    lead: "Giao diện bám sát mạch hội thoại tự nhiên thay vì form nhập liệu rườm rà. Mỗi bước tự động mở sẵn bước tiếp theo để nhân viên tập trung phục vụ khách hàng.",
    steps: [
      { num: "01", title: "Tra cứu khách theo số điện thoại", body: "Mở ngay tài khoản khách gồm tên, lịch sử đặt món và địa chỉ đã lưu, hoặc tạo hồ sơ mới ngay khi trò chuyện." },
      { num: "02", title: "Xác nhận địa chỉ, tự động chọn chi nhánh", body: "Khách chọn địa chỉ cũ hoặc đọc địa chỉ mới; hệ thống lập tức chọn chi nhánh gần nhất phục vụ khu vực đó." },
      { num: "03", title: "Lên đơn từ thực đơn chi nhánh", body: "Hiển thị đầy đủ thực đơn thực tế của chi nhánh kèm tùy chọn và tình trạng còn món để nhân viên tư vấn chuẩn xác." },
      { num: "04", title: "Thu tiền qua điện thoại khách", body: "Gửi đường dẫn thanh toán qua tin nhắn hoặc thanh toán bằng phương thức đã lưu." },
      { num: "05", title: "Chuyển đơn về cửa hàng xử lý", body: "Đơn xuất hiện trên App Cửa hàng và POS của chi nhánh, đồng thời khách nhận tin nhắn theo dõi như mọi kênh online khác." },
    ],
  },
  screensWalkthrough: {
    id: "console",
    eyebrow: "Bên trong màn hình tổng đài",
    title: "Những gì tổng đài viên thấy ở từng bước cuộc gọi.",
    lead: "Trọn vẹn một cuộc gọi qua từng màn hình: nhận diện người gọi, tạo đơn, xác nhận thanh toán và quản lý hàng đợi sau đó.",
    caption: "Màn hình tổng đài minh họa cùng cửa hàng và thực đơn mẫu.",
    items: [
      { title: "Tìm khách gọi theo số điện thoại", body: "Tự động gợi ý khách đã đăng ký ngay khi gõ số, hoặc tạo hồ sơ khách mới giữa cuộc gọi." },
      { title: "Xác nhận chi tiết và tạo đơn", body: "Duyệt danh mục món của chi nhánh, chọn topping/ghi chú và gợi ý bán thêm ngay cạnh giỏ hàng trực tiếp." },
      { title: "Chốt đơn với bản tóm tắt đầy đủ", body: "Kiểm tra lại chi nhánh, địa chỉ giao, món ăn, thuế phí và phương thức thanh toán trước khi chuyển đơn." },
      { title: "Quản lý hàng đợi gọn gàng", body: "Theo dõi đơn chờ xử lý, trạng thái bếp, cửa hàng, khách hàng và tài xế xuyên suốt ca trực." },
    ],
  },
  capabilityBands: [
    {
      id: "customer-records",
      eyebrow: "Hồ sơ khách hàng",
      title: "Lưu nhiều số điện thoại và hỗ trợ đặt hộ người khác.",
      body: "Quản lý số điện thoại phụ và thông tin người nhận riêng ngay trên tài khoản khách để xử lý các cuộc gọi lặp lại nhanh hơn.",
      where: "Màn hình Tổng đài đặt hàng",
      columns: [
        {
          title: "Nhiều số điện thoại & người nhận",
          items: [
            { title: "Lưu nhiều số điện thoại", body: "Nhận diện ngay khách quen dù họ gọi từ số nhà, văn phòng hay di động." },
            { title: "Đặt hộ người thân & đồng nghiệp", body: "Cho phép người gọi đặt và thanh toán cho đơn hàng giao đến người nhận khác." },
          ],
        },
        {
          title: "Lợi ích vận hành",
          items: [
            { body: "Rút ngắn thời gian xử lý mỗi cuộc gọi và tránh trùng lặp hồ sơ khách hàng giữa các chi nhánh." },
          ],
        },
      ],
    },
  ],
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Xuyên suốt ca trực",
    title: "Thêm nhiều tiện ích hỗ trợ đội ngũ tổng đài.",
    items: [
      { title: "Hỗ trợ đa kênh", body: "Giải đáp nhanh câu hỏi, xử lý sự cố đơn hàng và ghi nhận phản hồi nâng cao chất lượng dịch vụ." },
      { title: "Trợ lý AI hỗ trợ tra cứu", body: "Phân tích dữ liệu đơn và hồ sơ ngay trên màn hình giúp tổng đài viên trả lời nhanh và chính xác hơn." },
      { title: "Thống kê thời gian thực", body: "Theo dõi các chỉ số vận hành biến động theo thời gian thực để kịp thời điều phối trong giờ cao điểm." },
      { title: "Quy trình xử lý tùy chỉnh", body: "Thiết kế luồng xử lý sự cố rõ ràng giúp giải quyết nhanh và giữ trải nghiệm hài lòng cho khách." },
      { title: "Dữ liệu khách hàng đồng bộ", body: "Tổng đài viên luôn làm việc trên hồ sơ cập nhật mới nhất để chủ động nắm bắt nhu cầu người gọi." },
      { title: "Giao diện tập trung tốc độ cao", body: "Tối giản thao tác thừa giúp chốt đơn nhanh, chính xác mà vẫn giữ sự thân thiện." },
      { title: "Vận hành ổn định giờ cao điểm", body: "Giảm tối đa thời gian chờ máy và duy trì hiệu suất ổn định xuyên suốt các khung giờ đông khách." },
    ],
  },
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Điện thoại chỉ là một kênh. Hạ tầng đồng bộ mới là cốt lõi.",
    body: "Màn hình tổng đài dùng chung thực đơn, giá bán, danh sách cửa hàng, vùng giao hàng, hồ sơ khách và thanh toán với website, app, kiosk và AI Agent. Đơn qua điện thoại là cùng một dữ liệu chuẩn như đơn web.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Một chuẩn dữ liệu đơn hàng duy nhất cho mọi kênh",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Tổng đài viên & giám sát",
    title: "Màn hình mượt cho nhân viên, tầm nhìn rõ cho quản lý.",
    body: "Phân phạm vi chi nhánh cho từng nhân viên và cung cấp góc nhìn tổng hợp cho cấp giám sát. Quản lý tài khoản, phân quyền và lịch sử đơn tập trung khi đội tổng đài mở rộng.",
    cards: [
      { title: "Tài khoản tổng đài viên", body: "Cấp quyền cụ thể cho nhân viên tiếp nhận, tạo mới và chỉnh sửa đơn qua điện thoại." },
      { title: "Vai trò giám sát (Supervisor)", body: "Theo dõi hàng đợi đơn đang mở, các ca cần hỗ trợ và hiệu suất từng nhân viên trên một màn hình." },
      { title: "Phục vụ đa chi nhánh từ 1 bàn trực", body: "Điều phối đơn gọi tới bất kỳ chi nhánh nào trên nhiều thành phố mà không cần chuyển công cụ." },
      { title: "Lưu vết toàn bộ lịch sử đơn", body: "Mọi đơn tổng đài đều gắn với hồ sơ khách hàng, giao dịch thanh toán và báo cáo doanh thu chi nhánh." },
    ],
  },
  related: {
    title: "Các kênh đặt hàng khác cho khách của bạn.",
    items: [
      { label: "Xây dựng", title: "Website đặt hàng", body: "Website nhãn trắng chạy trên tên miền riêng của bạn.", href: "/platform/ordering-web" },
      { label: "Xây dựng", title: "Ứng dụng đặt hàng", body: "App iOS và Android mang thương hiệu riêng.", href: "/platform/ordering-apps" },
      { label: "Xây dựng", title: "Kiosk tự phục vụ", body: "Tự gọi món tại quán trên cùng bộ thực đơn.", href: "/platform/ordering-kiosk" },
      { label: "Xây dựng", title: "Đặt hàng đa chi nhánh", body: "Một điểm vào duy nhất cho toàn bộ chuỗi cửa hàng.", href: "/platform/multi-store-ordering" },
    ],
  },
  closingCta: {
    title: "Đưa đơn đặt qua điện thoại lên cùng một đường ray vận hành.",
    body: "Trải nghiệm trực tiếp luồng tổng đài chốt đơn từ đầu đến cuối trên đúng thực đơn, chi nhánh và vùng giao của bạn.",
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Tổng đài đặt hàng · Demo hướng dẫn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const MULTI_STORE_ORDERING_SPEC_VI: PlatformPageSpec = {
  slug: "multi-store-ordering",
  template: "showcase",
  metaTitle: "Đặt hàng đa chi nhánh",
  metaDescription:
    "Giúp khách tìm đúng chi nhánh gần nhất, xem thực đơn, giá bán, giờ mở cửa và vùng giao của cửa hàng đó rồi hoàn tất đơn trong một hành trình liền mạch.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Xây dựng", href: "/products#build" },
      { label: "Đặt hàng đa chi nhánh" },
    ],
    title: "Giúp mọi khách hàng tìm đúng chi nhánh và đặt món ngay.",
    lede: "Trải nghiệm đặt hàng cho chuỗi bắt đầu từ một câu hỏi đơn giản: chi nhánh nào phục vụ đơn này? Ngay sau khi chọn, thực đơn, giá bán, giờ hoạt động, phương thức nhận và thanh toán đều phản ánh chính xác cửa hàng đó.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Một điểm vào cho mọi chi nhánh" },
      { text: "Chọn chi nhánh trước khi đặt món" },
      { text: "Thực đơn & khung giờ chuẩn từng điểm bán" },
    ],
  },
  pillars: {
    eyebrow: "Đặt hàng đa chi nhánh",
    title: "Một hành trình đặt hàng chung, rõ ràng từng chi nhánh.",
    numbered: true,
    items: [
      { label: "01", title: "Một kênh bán, mọi cửa hàng", body: "Dẫn khách mượt mà từ một địa chỉ truy cập chung đến đúng chi nhánh sẽ chế biến và giao đơn." },
      { label: "02", title: "Tự động gợi ý đúng cửa hàng", body: "Cho phép khách chọn cửa hàng thủ công hoặc nhập địa chỉ/GPS để lọc ngay các điểm bán phục vụ được." },
      { label: "03", title: "Thực đơn riêng từng quán, một thương hiệu", body: "Hiển thị chính xác thực đơn, giá, giờ mở cửa, tồn kho và hình thức giao/nhận của chi nhánh khách đã chọn." },
      { label: "04", title: "Ngữ cảnh chi nhánh đi theo suốt đơn", body: "Gắn chặt mã chi nhánh vào hồ sơ đơn hàng để khâu tiếp nhận, bếp và giao vận bàn giao không sai sót." },
    ],
  },
  features: {
    title: "Những yếu tố định hình hành trình đặt hàng đa điểm bán.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      { title: "Bộ tìm kiếm chi nhánh (Store finder)", body: "Hỗ trợ tìm theo địa chỉ, định vị GPS, danh sách chi nhánh hoặc kết hợp linh hoạt theo đặc thù chuỗi." },
      { title: "Thực đơn & giá bán theo chi nhánh", body: "Kết nối cửa hàng đã chọn với đúng thực đơn, tình trạng còn món và bảng giá áp dụng riêng cho điểm bán đó." },
      { title: "Giờ mở cửa & vùng giao hàng", body: "Hiển thị minh bạch khung giờ phục vụ, bán kính giao và tùy chọn mang về trước khi khách mất thời gian chọn món." },
      { title: "Quy tắc giỏ hàng chuỗi", body: "Cấu hình linh hoạt giỏ hàng gắn 1 chi nhánh hoặc cho phép đặt gộp đa gian hàng nếu mô hình yêu cầu." },
      { title: "Tùy biến theo thị trường", body: "Nếu chuỗi hoạt động ở nhiều khu vực/quốc gia, tự động áp dụng ngôn ngữ, tiền tệ và quy tắc chi nhánh tương ứng." },
      { title: "Trang riêng cho từng điểm bán", body: "Cung cấp đường dẫn và trang thông tin riêng cho khách truy cập trực tiếp vào một chi nhánh cụ thể." },
    ],
  },
  stepsSplit: {
    id: "finder",
    eyebrow: "Tìm kiếm chi nhánh",
    title: "Cách khách hàng tìm đúng cửa hàng phục vụ mình.",
    lead: "Bộ tìm kiếm chi nhánh giải đáp ngay câu hỏi thực tế nhất: khách đặt ở đâu được? Thông tin chi nhánh luôn hiển thị rõ xuyên suốt lúc xem thực đơn tới thanh toán.",
    steps: [
      { num: "01", title: "Nhập địa chỉ hoặc chia sẻ vị trí", body: "Khách nhập địa chỉ giao, bật định vị GPS hoặc chọn trực tiếp tên chi nhánh mong muốn." },
      { num: "02", title: "Xem các chi nhánh có thể phục vụ", body: "Hiển thị danh sách cửa hàng phù hợp kèm khoảng cách, giờ mở cửa hiện tại và hình thức giao/mang về." },
      { num: "03", title: "Mở thực đơn của chi nhánh đó", body: "Tải đúng danh mục món, giá bán và tình trạng tồn kho thực tế của điểm bán đã chọn." },
      { num: "04", title: "Đơn hàng định tuyến thẳng về đúng quán", body: "Giữ nguyên chi nhánh xuyên suốt bước thanh toán và đẩy đơn thẳng tới bếp phụ trách." },
      { num: "05", title: "Khách nhận xác nhận đầy đủ thông tin", body: "Gửi tin nhắn hoặc email xác nhận gồm địa chỉ cửa hàng, số điện thoại liên hệ và thời gian giao/nhận dự kiến." },
    ],
  },
  scopeNotes: [
    {
      id: "food-court-ordering",
      title: "Chọn đúng luồng đặt hàng cho mô hình khu ẩm thực (Food court).",
      lead: "Dùng luồng chọn chi nhánh khi khách đặt tại một điểm bán. Khi khách cần mua từ nhiều gian hàng độc lập trong cùng một lần thanh toán, hãy cân nhắc chế độ giỏ hàng đa gian hàng.",
      paragraphs: [
        "Với luồng chọn chi nhánh tiêu chuẩn, khách chọn một cửa hàng để xem thực đơn, tình trạng món và phương thức phục vụ. Cửa hàng đó tiếp nhận và chế biến toàn bộ đơn.",
        "Với chế độ đa gian hàng cấu hình trên Website hoặc Marketplace App, khách có thể chọn món từ nhiều bếp tham gia trong một lần thanh toán. Mỗi gian hàng vẫn quản lý phần đơn và hướng dẫn nhận/giao độc lập sau khi xác nhận.",
      ],
    },
  ],
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Gian hàng trực tuyến chỉ là bề mặt của mô hình vận hành chuỗi.",
    body: "Trải nghiệm khách hàng chỉ trơn tru khi chi nhánh, thực đơn, phương thức giao và điểm nhận đơn đồng nhất dữ liệu. Toàn bộ được kết nối xuyên suốt mọi kênh bạn bật.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Định tuyến chi nhánh & đồng bộ thực đơn theo vị trí",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Trải nghiệm khách hàng thấy",
    title: "Thương hiệu đồng nhất, dữ liệu từng chi nhánh luôn chuẩn xác.",
    body: "Khách tin tưởng kênh đặt hàng của chuỗi khi nhận diện thương hiệu thống nhất và từng cửa hàng luôn hiển thị đúng món còn, giờ mở và phí giao thực tế.",
    cards: [
      { title: "Thực đơn chuẩn tập trung", body: "Quản lý danh mục và món chung toàn chuỗi từ trụ sở, đồng thời cho phép chi nhánh tùy biến trong phạm vi duyệt." },
      { title: "Cấu hình riêng từng chi nhánh", body: "Kiểm soát giờ mở cửa, vùng giao, phí ship và trạng thái món độc lập cho từng điểm bán." },
      { title: "Phân quyền theo cấp bậc", body: "Cấp đúng phạm vi thao tác cho trụ sở chính, quản lý khu vực và quản lý cửa hàng." },
      { title: "Một màn hình nhìn toàn chuỗi", body: "Theo dõi đơn hàng, tình trạng hoạt động và hiệu quả kinh doanh của tất cả chi nhánh trên một Dashboard." },
    ],
  },
  related: {
    title: "Các kênh đặt hàng khác và hệ thống quản trị phía sau.",
    items: [
      { label: "Xây dựng", title: "Website đặt hàng", body: "Website nhãn trắng chạy trên tên miền riêng của bạn.", href: "/platform/ordering-web" },
      { label: "Xây dựng", title: "Ứng dụng đặt hàng", body: "App iOS và Android mang thương hiệu riêng.", href: "/platform/ordering-apps" },
      { label: "Xây dựng", title: "Kiosk tự phục vụ", body: "Tự gọi món tại quán trên cùng bộ thực đơn.", href: "/platform/ordering-kiosk" },
      { label: "Xây dựng", title: "AI Ordering Agents", body: "Trải nghiệm đặt món qua hội thoại tự động trên các kênh nhắn tin và web.", href: "/platform/ai-ordering-agents" },
      { label: "Vận hành", title: "Vận hành đa chi nhánh", body: "Hệ thống quản trị hậu cần phía sau: góc nhìn chuỗi, phân quyền và quản trị thực đơn theo chi nhánh.", href: "/platform/multi-location-operations" },
      { label: "Giải pháp", title: "Chuỗi nhượng quyền", body: "Cách mạng lưới nhượng quyền giữ chuẩn thương hiệu mà vẫn trao quyền cho từng đại lý.", href: "/solutions/franchises" },
    ],
  },
  closingCta: {
    title: "Một điểm chạm đặt hàng cho toàn bộ mạng lưới.",
    body: "Cùng rà soát mô hình chi nhánh, quy tắc giao vận và hành trình khách hàng để thiết kế luồng chọn cửa hàng tối ưu nhất.",
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Đặt hàng đa chi nhánh · Demo hướng dẫn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const AI_ORDERING_AGENTS_SPEC_VI: PlatformPageSpec = {
  slug: "ai-ordering-agents",
  template: "showcase",
  metaTitle: "AI Ordering Agents — Trợ lý AI chốt đơn",
  metaDescription:
    "AI Ordering Agents dẫn dắt khách đặt món qua giọng nói, nhắn tin, chat và web dựa trên thực đơn, chi nhánh và quy tắc giao vận bạn cấu hình.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Xây dựng", href: "/products#build" },
      { label: "AI Ordering Agents" },
    ],
    title: "Biến mọi cuộc hội thoại của khách thành luồng đơn hàng vận hành được ngay.",
    lede: "AI Ordering Agents hướng dẫn khách đặt món qua thoại, tin nhắn, khung chat và website dựa trên đúng thực đơn, chi nhánh và điều kiện giao hàng bạn thiết lập — tự động thu thập đủ thông tin đơn và bàn giao cho nhân viên khi cần.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "THOẠI, NHẮN TIN, CHAT VÀ WEB", pill: true },
      { text: "Hiểu đúng thực đơn & chi nhánh" },
      { text: "Quy tắc chuyển tiếp nhân viên rõ ràng" },
    ],
    mockupCaption: "Hội thoại đặt món minh họa",
  },
  pillars: {
    eyebrow: "AI Ordering Agents",
    title: "Bật trợ lý AI trên đúng các kênh hội thoại khách hàng đang dùng.",
    numbered: true,
    items: [
      { label: "01", title: "Giọng nói (Voice)", body: "Trợ lý AI tiếp nhận và dẫn dắt khách đặt món qua cuộc gọi thoại, bám sát chi nhánh và quy tắc phục vụ bạn cấu hình." },
      { label: "02", title: "Nhắn tin (WhatsApp / Zalo)", body: "Dẫn dắt hội thoại đặt món tự nhiên ngay trên ứng dụng nhắn tin quen thuộc hằng ngày của khách." },
      { label: "03", title: "Khung chat trực tiếp", body: "Luồng chat thông minh tư vấn thực đơn, gợi ý món và thu thập đầy đủ yêu cầu giao nhận." },
      { label: "04", title: "Website", body: "Điểm chạm hội thoại ngay trên website giúp khách nói điều họ muốn ăn thay vì phải tự tìm trong thực đơn dài." },
    ],
  },
  features: {
    title: "Xây dựng trên đúng ngữ cảnh vận hành mà một trợ lý AI cần.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      { title: "Dùng chung thực đơn sống", body: "AI đọc trực tiếp thực đơn, danh mục, tùy chọn topping và giá bán đang áp dụng tại từng chi nhánh." },
      { title: "Chọn đúng chi nhánh phục vụ", body: "Tự động đối chiếu địa chỉ giao hoặc chi nhánh mang về để khớp đúng cửa hàng phụ trách." },
      { title: "Bàn giao thanh toán rõ ràng", body: "Gửi đúng link thanh toán hoặc dẫn khách sang bước xác nhận phù hợp với từng kênh." },
      { title: "Giao hàng như mọi đơn khác", body: "Thu thập đủ thông tin giao nhận để đơn đi thẳng vào quy trình giao hàng hoặc mang về tiêu chuẩn của quán." },
      { title: "Hỗ trợ đa ngôn ngữ", body: "Thiết lập linh hoạt các ngôn ngữ mà AI hỗ trợ giao tiếp phù hợp tập khách hàng của bạn." },
      { title: "Chuyển tiếp cho nhân viên thật", body: "Cấu hình sẵn các tình huống phức tạp để AI tự động bàn giao hội thoại cho đội ngũ chăm sóc khách hàng." },
    ],
  },
  stepsSplit: {
    id: "how",
    eyebrow: "Từ hội thoại thành đơn hàng",
    title: "Thiết kế luồng hội thoại đi thẳng vào hệ thống vận hành.",
    lead: "AI dẫn dắt khách qua đúng các bước nghiệp vụ quán cần: chọn món, chọn chi nhánh/giao hàng, thanh toán và chuyển nhân viên khi có ngoại lệ.",
    steps: [
      { num: "01", title: "Khách nhắn tin hoặc gọi điện", body: "Chọn các kênh hội thoại nơi khách bắt đầu yêu cầu đặt món." },
      { num: "02", title: "AI tra cứu thực đơn và chi nhánh của bạn", body: "Dựa vào thực đơn, tồn kho và quy tắc giao hàng đã cấu hình để tư vấn và chốt món chính xác." },
      { num: "03", title: "Hoàn tất bước thanh toán", body: "Dẫn khách tới liên kết thanh toán hoặc bước xác nhận phù hợp với kênh đang trò chuyện." },
      { num: "04", title: "Đơn đổ về luồng vận hành cửa hàng", body: "Thông tin đơn đầy đủ được đẩy thẳng về App Cửa hàng và POS để bếp chế biến và giao hàng." },
      { num: "05", title: "Nhân viên tiếp quản khi cần thiết", body: "Kích hoạt quy tắc chuyển tiếp khi khách có yêu cầu đặc biệt cần con người hỗ trợ trực tiếp." },
    ],
  },
  scopeNotes: [
    {
      id: "ai-channel-scope",
      title: "Phân biệt rõ tổng đài thoại, tin nhắn và âm thanh làn drive-thru.",
      lead: "Mỗi kênh hội thoại có yêu cầu khác nhau về độ trễ, hạ tầng viễn thông và bàn giao nhân viên. Hãy thống nhất phạm vi kênh cụ thể trước khi triển khai.",
      paragraphs: [
        "Web AI Ordering và WhatsApp AI Ordering vận hành trên các kênh nhắn tin và web tiêu chuẩn, kết nối trực tiếp vào thực đơn và luồng đơn của chi nhánh.",
        "Đặt hàng qua tổng đài thoại (telephony), luồng SMS hoặc hệ thống âm thanh làn drive-thru có yêu cầu riêng về phần cứng, nhà mạng và xử lý âm học — sẽ được đánh giá phạm vi kỹ thuật riêng cùng đội ngũ kỹ sư.",
      ],
      links: [
        { label: "Xem giải pháp Tổng đài đặt hàng", href: "/platform/ordering-call-center" },
        { label: "Trải nghiệm demo AI Agents", href: "/demo#ai-agents" },
      ],
    },
  ],
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Đưa hội thoại AI trở thành một phần của hệ thống vận hành đồng nhất.",
    body: "AI Ordering Agents dùng chung chi nhánh, thực đơn, giá bán, thanh toán và quy tắc giao hàng với website, app, kiosk và tổng đài.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Đồng bộ thực đơn, chi nhánh & giao vận qua API & MCP",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Quy tắc do bạn kiểm soát",
    title: "Chủ động quyết định vai trò của AI trong vận hành.",
    body: "Cấu hình ngôn ngữ, phạm vi chi nhánh, điều kiện chuyển nhân viên và theo dõi nhật ký hội thoại trước khi bật kênh tự động.",
    cards: [
      { title: "Ngôn ngữ tùy chọn", body: "Quy định chính xác ngôn ngữ AI dùng để phản hồi khách trên web, chat và ứng dụng nhắn tin." },
      { title: "Quy tắc bàn giao nhân viên", body: "Thiết lập rõ điều kiện chuyển tiếp hội thoại sang tổng đài viên hoặc quản lý ca." },
      { title: "Giới hạn theo chi nhánh", body: "Bật AI đặt món cho từng nhóm cửa hàng, thực đơn hoặc khung giờ hoạt động mong muốn." },
      { title: "Giám sát vận hành minh bạch", body: "Xem lại lịch sử hội thoại, các lần chuyển tiếp và đơn hàng đã xác nhận ngay trên Dashboard." },
    ],
  },
  related: {
    title: "Các kênh đặt hàng khác cho khách của bạn.",
    items: [
      { label: "Xây dựng", title: "Tổng đài đặt hàng", body: "Đội ngũ nhân viên nhận đơn qua điện thoại trên cùng một hệ thống.", href: "/platform/ordering-call-center" },
      { label: "Xây dựng", title: "Website đặt hàng", body: "Website nhãn trắng chạy trên tên miền riêng của bạn.", href: "/platform/ordering-web" },
      { label: "Xây dựng", title: "Ứng dụng đặt hàng", body: "App iOS và Android mang thương hiệu riêng.", href: "/platform/ordering-apps" },
      { label: "Vận hành", title: "App Cửa hàng", body: "Tiếp nhận, xác nhận và điều phối chế biến đơn tại chi nhánh.", href: "/platform/ordering-merchant" },
    ],
  },
  closingCta: {
    title: "Đánh giá luồng đặt món bằng AI cho mô hình của bạn.",
    body: "Chia sẻ kịch bản đặt hàng, kênh giao tiếp và quy tắc chuyển tiếp bạn mong muốn — chúng tôi sẽ demo trực tiếp cách vận hành phù hợp.",
    docGuide: { label: "Tài liệu AI Dashboard", href: "/demo#ai-agents" },
    primaryCta: { label: "Đặt lịch demo", modalTopic: "AI Ordering Agents · Demo hướng dẫn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
  bottomUtilityStrip: {
    text: "Ước tính doanh thu trực tiếp và mức tiết kiệm theo số liệu của chính bạn:",
    linkLabel: "Xem bảng giá & phạm vi gói",
    href: "/pricing",
  },
};
