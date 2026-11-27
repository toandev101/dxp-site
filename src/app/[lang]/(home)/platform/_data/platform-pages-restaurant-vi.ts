import type { PlatformFeatureCategory, PlatformPageSpec } from "./platform-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

const RESTAURANT_WEBSITE_CATEGORIES_VI: PlatformFeatureCategory[] = [
  {
    category: "Trải nghiệm đặt hàng",
    items: [
      { title: "Website đặt hàng thương hiệu riêng", description: "Website đặt món mang thương hiệu của bạn trên chính tên miền riêng.", href: "/platform/ordering-web" },
      { title: "Ứng dụng web tiến bộ (PWA)", description: "Khách thêm website đặt hàng vào màn hình chính điện thoại để đặt lại nhanh.", href: "/platform/ordering-web" },
      { title: "Đặt món qua mã QR", description: "Khách quét mã QR để gọi món ngay tại bàn, tại quầy hoặc nhận ngoài lề.", href: "/products#build" },
      { title: "Đa hình thức đặt món", description: "Giao hàng, mang về, ăn tại bàn, nhận ngoài lề và drive-thru — cấu hình theo từng chi nhánh.", href: "/products#build" },
      { title: "Đặt ngay & đặt lịch trước", description: "Khách đặt giao sớm nhất có thể hoặc chọn chính xác ngày giờ mong muốn.", href: "/platform/ordering-web#website-future-orders" },
      { title: "Đơn tiệc & số lượng lớn", description: "Tiếp nhận các đơn hàng lớn và đặt trước theo quy trình phục vụ tiệc.", href: "/products#build" },
      { title: "Đặt bàn trực tuyến", description: "Khách đặt bàn trước và thông tin được gửi thẳng đến đội ngũ nhà hàng.", href: "/products#build" },
      { title: "Đặt lịch hẹn & dịch vụ", description: "Bán các dịch vụ cho phép khách đặt theo khung giờ cố định.", href: "/products#build" },
      { title: "Đặt suất ăn học đường", description: "Phụ huynh đặt bữa ăn cho từng học sinh với bộ lọc dị ứng và chế độ dinh dưỡng.", href: "/products#build" },
      { title: "Đặt hàng B2B", description: "Bán sỉ và bán lẻ trực tiếp từ cùng một bảng điều khiển và gian hàng.", href: "/solutions#franchises" },
      { title: "Widget đặt hàng nhúng web", description: "Nhúng nút và thực đơn đặt món trực tiếp vào website có sẵn của nhà hàng.", href: "/platform/ordering-web#widget" },
      { title: "Bán hàng trên mạng xã hội", description: "Chia sẻ đường dẫn đặt hàng trực tiếp trên Facebook, Instagram, TikTok và các kênh khác.", href: "/products#build" },
      { title: "Đặt món từ Google", description: "Kết nối Google Business Profile để khách bắt đầu đặt hàng ngay từ kết quả tìm kiếm.", href: "/integrations" },
      { title: "Tài khoản khách hàng", description: "Mỗi khách có tài khoản riêng lưu địa chỉ, thẻ thanh toán và lịch sử đơn hàng.", href: "/products#build" },
      { title: "Tùy chọn đăng nhập linh hoạt", description: "Đăng nhập bằng email/số điện thoại và mật khẩu, hoặc mã OTP qua email/SMS.", href: "/products#build" },
      { title: "Đăng nhập mạng xã hội", description: "Khách đăng ký và đăng nhập nhanh bằng Facebook, Google hoặc Apple.", href: "/integrations" },
      { title: "Trang chủ cá nhân hóa", description: "Hiển thị banner ưu đãi, đơn đang xử lý và các chi nhánh phục vụ địa chỉ của khách.", href: "/products#build" },
      { title: "Tìm kiếm & bộ lọc", description: "Tìm nhanh theo món ăn, chi nhánh, danh mục cùng bộ lọc theo mức giá.", href: "/products#build" },
      { title: "Liên kết trực tiếp tới chi nhánh", description: "Chia sẻ đường dẫn mở thẳng trang thực đơn của một chi nhánh cụ thể.", href: "/platform/multi-store-ordering" },
      { title: "Món & chi nhánh yêu thích", description: "Khách lưu lại đơn hàng, món ăn và cửa hàng yêu thích để gọi lại nhanh.", href: "/products#build" },
      { title: "Đặt lại nhanh", description: "Lặp lại đơn hàng cũ chỉ trong vài chạm từ lịch sử đặt món.", href: "/products#build" },
      { title: "Gợi ý cá nhân hóa", description: "Đề xuất món ăn dựa trên thói quen và các đơn trước đó của từng khách.", href: "/products#build" },
      { title: "Đặt hàng đa ngôn ngữ", description: "Dịch giao diện, thông tin chi nhánh và thực đơn sang nhiều ngôn ngữ.", href: "/products#build" },
      { title: "Giao nhận không tiếp xúc", description: "Hỗ trợ giao hàng không tiếp xúc và nhận đồ nhanh ngoài lề.", href: "/products#operate" },
      { title: "Theo dõi đơn thời gian thực", description: "Khách theo dõi trạng thái chế biến và vị trí tài xế trực tiếp trên bản đồ.", href: "/products#operate" },
      { title: "Chia sẻ xác nhận đơn hàng", description: "Gửi liên kết theo dõi trạng thái đơn cho người nhận hoặc bạn bè.", href: "/products#build" },
      { title: "Mục trợ giúp tích hợp", description: "Hướng dẫn sẵn ngay trên kênh đặt hàng giúp khách thao tác dễ dàng.", href: "/platform/ordering-web#help-section" },
    ],
  },
  {
    category: "Thực đơn & danh mục",
    items: [
      { title: "Danh mục cha – con", description: "Nhóm các danh mục món ăn khoa học để quản lý thực đơn lớn gọn gàng.", href: "/products#operate" },
      { title: "Bộ sưu tập ảnh món ăn", description: "Hiển thị nhiều hình ảnh trực quan cho từng món.", href: "/products#operate" },
      { title: "Video món ăn", description: "Chèn video ngắn sinh động trực tiếp vào trang chi tiết sản phẩm.", href: "/products#operate" },
      { title: "Món nổi bật", description: "Ghim các món bán chạy hoặc món mới lên đầu danh sách.", href: "/products#operate" },
      { title: "Nhãn & huy hiệu sản phẩm", description: "Gắn nhãn mới, đang giảm giá, sắp hết hoặc tạm hết hàng.", href: "/products#operate" },
      { title: "Tối ưu ảnh WebP", description: "Tự động phân phối hình ảnh định dạng WebP nhẹ giúp tải trang cực nhanh.", href: "/products#build" },
    ],
  },
  {
    category: "Giỏ hàng, thanh toán & đối soát",
    items: [
      { title: "Đặt hàng không cần tài khoản", description: "Cho phép khách hoàn tất đơn ngay mà không bắt buộc đăng ký.", href: "/products#build" },
      { title: "Thanh toán trên một màn hình", description: "Trang xác nhận và thanh toán tinh gọn giúp chốt đơn chỉ trong một màn hình.", href: "/platform/ordering-web#cart-and-checkout" },
      { title: "Chỉnh sửa giỏ hàng nhanh", description: "Thay đổi số lượng, topping, xóa món hoặc làm trống giỏ chỉ với vài thao tác.", href: "/products#build" },
      { title: "Đồng bộ giỏ hàng đa kênh", description: "Giỏ hàng tự động đồng bộ khi khách chuyển đổi giữa website và ứng dụng.", href: "/platform/restaurant-app" },
      { title: "Kiểm tra giỏ hàng thời gian thực", description: "Tự động kiểm tra tồn kho, thay đổi địa chỉ và điều kiện khuyến mãi trước khi chốt đơn.", href: "/products#build" },
      { title: "Lưu nhiều địa chỉ giao hàng", description: "Khách lưu sẵn nhiều địa chỉ nhà, văn phòng và chọn nhanh khi thanh toán.", href: "/products#build" },
      { title: "Cảnh báo địa chỉ ngoài vùng giao", description: "Thông báo ngay khi địa chỉ khách nhập nằm ngoài phạm vi giao hàng của chi nhánh.", href: "/platform/multi-store-ordering" },
      { title: "Tiền thưởng tài xế (Tip)", description: "Hỗ trợ chọn nhanh mức tip theo phần trăm, số tiền cố định hoặc tự nhập.", href: "/products#operate" },
      { title: "Thanh toán thẻ trực tuyến", description: "Chấp nhận thanh toán thẻ qua Stripe và các cổng thanh toán được hỗ trợ.", href: "/integrations" },
      { title: "Lưu thẻ thanh toán", description: "Khách lưu thẻ an toàn để thanh toán một chạm ở các lần đặt sau.", href: "/integrations" },
      { title: "Trường thông tin tùy chỉnh", description: "Thu thập thêm ghi chú, yêu cầu chế biến hoặc thông tin xuất hóa đơn lúc thanh toán.", href: "/products#build" },
      { title: "Apple Pay & Google Pay", description: "Thanh toán nhanh bằng ví điện tử tích hợp qua Stripe.", href: "/integrations" },
      { title: "PayPal", description: "Cho phép khách hàng thanh toán tiện lợi bằng tài khoản PayPal.", href: "/integrations" },
      { title: "Phương thức thanh toán nội địa", description: "Hỗ trợ các cổng thanh toán và phương thức chuyển hướng địa phương.", href: "/integrations" },
      { title: "Tiền mặt & quẹt thẻ khi nhận hàng", description: "Nhận thanh toán tiền mặt hoặc quẹt thẻ lúc giao hàng hay nhận tại quầy.", href: "/integrations" },
    ],
  },
  {
    category: "Quản lý đơn hàng",
    items: [
      { title: "Thông báo trạng thái đơn", description: "Tự động gửi email và thông báo đẩy cập nhật tiến độ đơn cho khách.", href: "/products#operate" },
      { title: "Chat trực tiếp trong đơn hàng", description: "Khách hàng, cửa hàng, tài xế và quản trị viên trao đổi ngay trong từng đơn.", href: "/products#operate" },
    ],
  },
  {
    category: "Cửa hàng & chi nhánh",
    items: [
      { title: "Tùy chỉnh bố cục trang cửa hàng", description: "Lựa chọn bố cục hiển thị phù hợp cho từng trang chi nhánh.", href: "/platform/multi-store-ordering" },
      { title: "SEO & mạng xã hội theo chi nhánh", description: "Thiết lập thẻ SEO và liên kết mạng xã hội riêng cho từng cửa hàng.", href: "/platform/ordering-web#seo" },
      { title: "Kênh riêng cho từng thương hiệu/chi nhánh", description: "Cấp website và app riêng cho từng điểm bán hoặc thương hiệu nhượng quyền.", href: "/platform/multi-store-ordering" },
      { title: "Nền tảng đa quốc gia", description: "Tên miền theo quốc gia tự động điều hướng khách tới đúng trang khu vực.", href: "/solutions#franchises" },
    ],
  },
  {
    category: "Giao hàng & tài xế",
    items: [
      { title: "Ước tính thời gian giao nâng cao", description: "Hiển thị thời gian giao hàng dự kiến sát thực tế hơn cho khách.", href: "/products#operate" },
    ],
  },
  {
    category: "Marketing & khách hàng thân thiết",
    items: [
      { title: "Banner quảng bá", description: "Hiển thị banner chương trình ưu đãi ngay trên các kênh đặt hàng.", href: "/products#build" },
      { title: "Gợi ý bán thêm (Upsell)", description: "Đề xuất món ăn kèm và đồ uống ngay trước bước thanh toán.", href: "/products#build" },
      { title: "Ví tiền mặt & hoàn tiền", description: "Khách giữ số dư ví và nhận hoàn tiền quản lý trực tiếp từ Dashboard.", href: "/products#operate" },
      { title: "Ví tích điểm", description: "Khách tích lũy và tiêu điểm thưởng cho các lần đặt tiếp theo.", href: "/products#operate" },
      { title: "Phân hạng thành viên", description: "Chương trình hạng thành viên tự động tri ân khách hàng quay lại.", href: "/products#operate" },
      { title: "Thẻ quà tặng (Gift cards)", description: "Bán thẻ quà tặng để khách sử dụng hoặc tặng bạn bè đổi đơn.", href: "/products#operate" },
      { title: "Giới thiệu bạn bè", description: "Khách chia sẻ link giới thiệu; khi bạn bè đặt đơn, cả hai cùng nhận điểm hoặc ưu đãi.", href: "/products#operate" },
      { title: "Thiết lập SEO chuẩn", description: "Tùy chỉnh tiêu đề, mô tả và đường dẫn URL cho toàn trang, món ăn và danh mục.", href: "/platform/ordering-web#seo" },
    ],
  },
  {
    category: "Báo cáo & đánh giá",
    items: [
      { title: "Đánh giá & xếp hạng", description: "Khách đánh giá cửa hàng, món ăn và tài xế; quản trị viên theo dõi chất lượng dịch vụ.", href: "/products#operate" },
    ],
  },
  {
    category: "Quản trị & bảo mật",
    items: [
      { title: "Giao diện & nhận diện thương hiệu", description: "Tùy chỉnh màu sắc, logo và phong cách các kênh đặt hàng theo thương hiệu.", href: "/#control" },
      { title: "Quản lý nội dung (CMS)", description: "Chỉnh sửa trang nội dung, trang chủ, chân trang và mục trợ giúp ngay trên CMS tích hợp.", href: "/products#operate" },
      { title: "Tên miền riêng & chứng chỉ SSL", description: "Chạy trên chính tên miền của bạn với chứng chỉ bảo mật SSL.", href: "/#control" },
      { title: "Chống bot tự động", description: "Tích hợp reCAPTCHA bảo vệ trang đăng ký và đăng nhập khỏi spam/bot.", href: "/integrations" },
      { title: "Xác thực đăng ký", description: "Yêu cầu xác minh email hoặc số điện thoại sau khi tạo tài khoản.", href: "/integrations" },
    ],
  },
  {
    category: "Tích hợp & công cụ phân tích",
    items: [
      { title: "Phân tích & đo lường chuyển đổi", description: "Kết nối Google Analytics thương mại điện tử, Meta Pixel và Segment.", href: "/integrations" },
    ],
  },
];

const WEBSITE_ONLY_TITLES_VI = new Set([
  "Website đặt hàng thương hiệu riêng",
  "Ứng dụng web tiến bộ (PWA)",
  "Đặt món qua mã QR",
  "Đặt hàng B2B",
  "Widget đặt hàng nhúng web",
  "Bán hàng trên mạng xã hội",
  "Đặt món từ Google",
  "Liên kết trực tiếp tới chi nhánh",
  "SEO & mạng xã hội theo chi nhánh",
  "Nền tảng đa quốc gia",
  "Thiết lập SEO chuẩn",
  "Quản lý nội dung (CMS)",
  "Tên miền riêng & chứng chỉ SSL",
]);

const RESTAURANT_APP_CATEGORIES_VI: PlatformFeatureCategory[] = RESTAURANT_WEBSITE_CATEGORIES_VI.map((cat) => {
  const filtered = cat.items.filter((item) => !WEBSITE_ONLY_TITLES_VI.has(item.title));
  if (cat.category === "Trải nghiệm đặt hàng") {
    return {
      category: cat.category,
      items: [
        {
          title: "Ứng dụng di động thương hiệu riêng",
          description: "App đặt hàng iOS và Android mang thương hiệu của bạn, phát hành trên chính tài khoản developer riêng.",
          href: "/platform/ordering-apps",
        },
        ...filtered,
      ],
    };
  }
  return { category: cat.category, items: filtered };
});

const ZALO_EXCLUDED_TITLES_VI = new Set([
  "Website đặt hàng thương hiệu riêng",
  "Ứng dụng web tiến bộ (PWA)",
  "Đặt món qua mã QR",
  "Đặt hàng B2B",
  "Widget đặt hàng nhúng web",
  "Bán hàng trên mạng xã hội",
  "Đặt món từ Google",
  "Tùy chọn đăng nhập linh hoạt",
  "Đăng nhập mạng xã hội",
  "Đặt suất ăn học đường",
  "Đặt lịch hẹn & dịch vụ",
  "Đặt hàng không cần tài khoản",
  "Apple Pay & Google Pay",
  "PayPal",
  "Phương thức thanh toán nội địa",
  "Lưu thẻ thanh toán",
  "Thông báo trạng thái đơn",
  "SEO & mạng xã hội theo chi nhánh",
  "Nền tảng đa quốc gia",
  "Phân hạng thành viên",
  "Thiết lập SEO chuẩn",
  "Quản lý nội dung (CMS)",
  "Tên miền riêng & chứng chỉ SSL",
  "Chống bot tự động",
  "Xác thực đăng ký",
  "Phân tích & đo lường chuyển đổi",
]);

const RESTAURANT_ZALO_MINI_APP_CATEGORIES_VI: PlatformFeatureCategory[] = RESTAURANT_WEBSITE_CATEGORIES_VI.map((cat) => {
  const filtered = cat.items.filter((item) => !ZALO_EXCLUDED_TITLES_VI.has(item.title));

  if (cat.category === "Trải nghiệm đặt hàng") {
    return {
      category: cat.category,
      items: [
        {
          title: "Zalo Mini App thương hiệu riêng",
          description: "Ứng dụng đặt món gọn nhẹ mang thương hiệu của bạn chạy trực tiếp trong Zalo, tải tức thì và không cần cài đặt.",
          href: "/platform/restaurant-zalo-mini-app",
        },
        {
          title: "Điểm chạm từ Zalo OA & mã QR",
          description: "Mở Mini App chỉ với một chạm từ menu Zalo Official Account, tin nhắn broadcast, link chia sẻ hoặc mã QR.",
          href: "/platform/restaurant-zalo-mini-app",
        },
        {
          title: "Quét QR gọi món tại bàn",
          description: "Gắn mã QR riêng cho từng bàn ăn để khách quét, chọn món và đẩy phiếu chế biến thẳng xuống bếp.",
          href: "/products#build",
        },
        {
          title: "Đăng nhập Zalo 1 chạm & xin quyền SĐT",
          description: "Định danh khách tự động qua tài khoản Zalo và số điện thoại đã xác thực — không cần mật khẩu hay nhập form thủ công.",
          href: "/platform/restaurant-zalo-mini-app",
        },
        {
          title: "Chia sẻ nhanh trong mạng lưới Zalo",
          description: "Khách chia sẻ món ngon, chi nhánh hoặc mã ưu đãi giới thiệu trực tiếp vào nhóm chat và bạn bè trên Zalo.",
          href: "/products#build",
        },
        ...filtered,
      ],
    };
  }

  if (cat.category === "Giỏ hàng, thanh toán & đối soát") {
    return {
      category: cat.category,
      items: [
        {
          title: "Thanh toán ZaloPay ngay trong Mini App",
          description: "Thanh toán một chạm qua ZaloPay Checkout SDK bằng ví ZaloPay hoặc thẻ ngân hàng liên kết mà không rời khỏi Zalo.",
          href: "/integrations/payments",
        },
        {
          title: "VietQR & chuyển khoản ngân hàng nội địa",
          description: "Thanh toán chuyển khoản quét mã VietQR và thẻ ATM/Napas với xác nhận tự động cho đơn giao, mang về và tại bàn.",
          href: "/integrations/payments",
        },
        ...filtered.map((item) =>
          item.title === "Đồng bộ giỏ hàng đa kênh"
            ? {
                ...item,
                description: "Giỏ hàng tự động đồng bộ khi khách chuyển qua lại giữa Zalo Mini App, website và app di động.",
              }
            : item
        ),
      ],
    };
  }

  if (cat.category === "Quản lý đơn hàng") {
    return {
      category: cat.category,
      items: [
        {
          title: "Thông báo giao dịch tự động qua ZNS",
          description: "Gửi tự động tin nhắn xác nhận đơn, trạng thái bếp, giao hàng và thông báo cộng điểm qua kênh Zalo ZNS chính thức.",
          href: "/integrations/loyalty",
        },
        {
          title: "Chăm sóc khách hàng trực tiếp qua Zalo OA",
          description: "Kết nối khách từ ngay trong Mini App tới khung chat Zalo Official Account để hỗ trợ nhanh mọi thắc mắc.",
          href: "/integrations/loyalty",
        },
        ...filtered,
      ],
    };
  }

  if (cat.category === "Cửa hàng & chi nhánh") {
    return {
      category: cat.category,
      items: [
        {
          title: "Tự động tìm chi nhánh gần nhất qua Zalo GPS",
          description: "Sử dụng API định vị gốc của Zalo để tự động gợi ý chi nhánh gần nhất đang mở cửa phục vụ khách.",
          href: "/platform/multi-store-ordering",
        },
        ...filtered,
      ],
    };
  }

  if (cat.category === "Marketing & khách hàng thân thiết") {
    return {
      category: cat.category,
      items: [
        {
          title: "Thẻ thành viên điện tử & phân hạng",
          description: "Thẻ thành viên gắn liền Zalo ID, tự động nâng hạng Bạc, Vàng, VIP dựa trên mức chi tiêu tích lũy.",
          href: "/integrations/loyalty",
        },
        {
          title: "Widget quan tâm Zalo OA",
          description: "Mời khách bấm Quan tâm Zalo Official Account chỉ với một chạm ngay khi mở app hoặc đặt đơn xong.",
          href: "/integrations/loyalty",
        },
        {
          title: "Gamification & chiến dịch săn voucher",
          description: "Tổ chức vòng quay may mắn, điểm danh nhận quà và tặng ưu đãi sinh nhật ngay trong Zalo để tăng tần suất quay lại.",
          href: "/integrations/loyalty",
        },
        ...filtered,
      ],
    };
  }

  if (cat.category === "Quản trị & bảo mật") {
    return {
      category: cat.category,
      items: [
        ...filtered,
        {
          title: "Phát hành & cập nhật chuẩn Zalo Mini App",
          description: "Quy trình build và phát hành phiên bản tuân thủ đầy đủ tiêu chuẩn thiết kế và xét duyệt của Zalo Mini App Studio.",
          href: "/#control",
        },
        {
          title: "Quản lý cấp quyền chuẩn Zalo",
          description: "Xin phép minh bạch quyền truy cập số điện thoại, hồ sơ và vị trí GPS thông qua bộ API chính thức của Zalo.",
          href: "/integrations/login-security",
        },
      ],
    };
  }

  if (cat.category === "Tích hợp & công cụ phân tích") {
    return {
      category: cat.category,
      items: [
        {
          title: "Đồng bộ POS, CRM & CDP",
          description: "Đồng bộ thời gian thực thực đơn, đơn hàng, tồn kho và hồ sơ thành viên với hệ thống POS, CRM hoặc ERP qua API mở.",
          href: "/integrations/pos",
        },
        {
          title: "Đo lường kênh & chiến dịch",
          description: "Theo dõi lượt quét QR, tỷ lệ chuyển đổi từ Zalo OA, lượt đổi voucher và tỷ lệ khách quay lại trên một dashboard.",
          href: "/integrations/analytics",
        },
      ],
    };
  }

  return { category: cat.category, items: filtered };
});

const RESTAURANT_WEBSITE_FEATURE_COUNT_VI = RESTAURANT_WEBSITE_CATEGORIES_VI.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);
const RESTAURANT_APP_FEATURE_COUNT_VI = RESTAURANT_APP_CATEGORIES_VI.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);
const RESTAURANT_ZALO_MINI_APP_FEATURE_COUNT_VI = RESTAURANT_ZALO_MINI_APP_CATEGORIES_VI.reduce(
  (sum, cat) => sum + cat.items.length,
  0
);

export const RESTAURANT_WEBSITE_SPEC_VI: PlatformPageSpec = {
  slug: "restaurant-website",
  template: "catalog",
  metaTitle: "Website đặt hàng trực tuyến cho nhà hàng",
  metaDescription:
    "Website đặt món trực tuyến mang thương hiệu riêng trên tên miền của nhà hàng, kết nối đồng bộ thực đơn, thanh toán và đơn hàng.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Website đặt hàng nhà hàng" },
    ],
    title: "Website đặt hàng của riêng nhà hàng bạn, trên chính tên miền của bạn.",
    lede: "Khách đặt giao hàng, mang về, ăn tại bàn, nhận ngoài lề hoặc drive-thru ngay trên website mang thương hiệu riêng. Thực đơn, thanh toán và đơn hàng luôn đồng bộ chặt chẽ với Dashboard và App Cửa hàng mà đội ngũ bạn sử dụng.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo#restaurant" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Thương hiệu & tên miền riêng" },
      { text: "Đủ mọi hình thức đặt món" },
      { text: "Có sẵn ở mọi gói dịch vụ" },
    ],
  },
  pillars: {
    title: "Những gì website mang lại cho khách hàng của bạn.",
    numbered: false,
    items: [
      { title: "Thương hiệu bạn, tên miền của bạn", body: "Chạy trên tên miền riêng kèm chứng chỉ SSL, dễ dàng tùy biến màu sắc và nội dung bằng bộ giao diện & CMS tích hợp." },
      { title: "Đủ mọi cách đặt món", body: "Giao tận nơi, mang về, ăn tại bàn, nhận ngoài lề, drive-thru và quét QR — đặt ngay hoặc hẹn lịch trước." },
      { title: "Chốt đơn siêu nhanh", body: "Đặt hàng không cần đăng ký, lưu thẻ, Apple Pay/Google Pay và tự động kiểm tra tồn kho cùng ưu đãi theo thời gian thực." },
      { title: "Lý do để khách quay lại", body: "Tài khoản thành viên, đặt lại 1 chạm, món yêu thích, ví tích điểm và các hạng thành viên." },
    ],
  },
  featureCatalog: {
    title: `${RESTAURANT_WEBSITE_FEATURE_COUNT_VI} tính năng, tích hợp sẵn trong mọi gói.`,
    categories: RESTAURANT_WEBSITE_CATEGORIES_VI,
    footnote: "Cùng 10+ tính năng lõi hoạt động xuyên suốt toàn bộ nền tảng. Xem danh sách đầy đủ trong mục tính năng.",
    cta: { label: "Xem toàn bộ danh mục tính năng", href: "/pricing#pricing-features" },
  },
  related: {
    title: "Các kênh đặt hàng khác trên nền tảng",
    items: [
      { title: "Zalo Mini App nhà hàng", body: "Ứng dụng đặt món & tích điểm không cần tải app chạy ngay trong Zalo.", href: "/platform/restaurant-zalo-mini-app" },
      { title: "App di động nhà hàng", body: "Ứng dụng iOS và Android mang thương hiệu riêng cho nhà hàng.", href: "/platform/restaurant-app" },
      { title: "Website sàn giao hàng", body: "Website đặt hàng đa cửa hàng cho mô hình marketplace.", href: "/platform/ordering-web" },
      { title: "App sàn giao hàng", body: "Ứng dụng marketplace đa nhà bán trên iOS và Android.", href: "/platform/ordering-apps" },
      { title: "Kiosk tự phục vụ", body: "Màn hình tự gọi món đặt trực tiếp trong nhà hàng.", href: "/platform/ordering-kiosk" },
      { title: "Tổng đài đặt hàng", body: "Phần mềm hỗ trợ nhân viên tiếp nhận đơn đặt qua điện thoại.", href: "/platform/ordering-call-center" },
      { label: "Mới", title: "Web AI Ordering", body: "Khách đặt món qua hội thoại thông minh ngay trên kênh đặt hàng web.", href: "/platform/ai-ordering-agents" },
      { label: "Mới", title: "WhatsApp AI Ordering", body: "Khách đặt món trực tiếp qua tin nhắn WhatsApp tự động.", href: "/platform/ai-ordering-agents" },
    ],
  },
  closingCta: {
    title: "Xem website vận hành thực tế cùng quy trình quán bạn.",
    body: "Chia sẻ cách nhà hàng bạn đang bán và giao hàng, đội ngũ sẽ tư vấn cấu hình phù hợp nhất.",
    docGuide: { label: "Tổng quan Website đặt hàng", href: "/demo#restaurant" },
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Website nhà hàng · Demo hướng dẫn" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
  },
};

export const RESTAURANT_APP_SPEC_VI: PlatformPageSpec = {
  slug: "restaurant-app",
  template: "catalog",
  metaTitle: "App di động đặt hàng cho nhà hàng",
  metaDescription:
    "Ứng dụng đặt món iOS và Android mang thương hiệu riêng cho nhà hàng, đồng bộ chung thực đơn, giỏ hàng, thanh toán và đơn hàng với website.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "App di động nhà hàng" },
    ],
    title: "Ứng dụng đặt hàng của riêng nhà hàng trên iOS và Android.",
    lede: "Ứng dụng đặt món mang thương hiệu riêng, phát hành trên chính tài khoản Apple và Google Developer của bạn. Dùng chung thực đơn, giỏ hàng, thanh toán và đơn hàng với website.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo#restaurant" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "iOS và Android" },
      { text: "Phát hành trên tài khoản của bạn" },
      { text: "Có sẵn ở mọi gói dịch vụ" },
    ],
  },
  pillars: {
    title: "Những gì ứng dụng di động mang lại cho khách hàng.",
    numbered: false,
    items: [
      { title: "Thương hiệu của bạn trên App Store & Google Play", body: "Ứng dụng mang trọn tên tuổi và nhận diện của bạn, phát hành trên tài khoản riêng. Bản cập nhật mới được build và gửi duyệt nhanh chóng." },
      { title: "Một thực đơn, một giỏ hàng", body: "Thực đơn, giá bán và giỏ hàng đồng bộ thời gian thực với website và Zalo Mini App để khách chuyển kênh liền mạch." },
      { title: "Theo dõi trọn vẹn từng đơn hàng", body: "Thông báo đẩy từng bước, theo dõi tài xế trực tiếp trên bản đồ và chat ngay trong từng đơn hàng." },
      { title: "Tối ưu cho đơn đặt lại", body: "Đặt lại 1 chạm, danh sách yêu thích, gợi ý món cá nhân hóa, ví tích điểm và hạng thành viên." },
    ],
    footnote: "Chi tiết tài khoản developer và phí kho ứng dụng được liệt kê rõ tại trang Bảng giá.",
  },
  featureCatalog: {
    title: `${RESTAURANT_APP_FEATURE_COUNT_VI} tính năng, tích hợp sẵn trong mọi gói.`,
    categories: RESTAURANT_APP_CATEGORIES_VI,
    footnote: "Cùng 10+ tính năng lõi hoạt động xuyên suốt toàn bộ nền tảng. Xem danh sách đầy đủ trong mục tính năng.",
    cta: { label: "Xem toàn bộ danh mục tính năng", href: "/pricing#pricing-features" },
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Giữ kết nối sau đơn hàng",
    title: "Kéo khách quay lại đặt món thường xuyên hơn.",
    items: [
      { title: "Thông báo đẩy (Push notifications)", body: "Gửi thông báo đẩy đúng thời điểm sau đơn hàng kèm ưu đãi để khuyến khích khách đặt lần tiếp theo." },
      { title: "Giờ mở cửa, địa chỉ & liên hệ ngay trong app", body: "Hiển thị đầy đủ giờ phục vụ, bản đồ chỉ đường và thông tin liên hệ để khách tìm thấy ngay không cần tra cứu nơi khác." },
    ],
  },
  related: {
    title: "Các kênh đặt hàng khác trên nền tảng",
    items: [
      { title: "Zalo Mini App nhà hàng", body: "Ứng dụng đặt món & tích điểm không cần tải app chạy ngay trong Zalo.", href: "/platform/restaurant-zalo-mini-app" },
      { title: "Website đặt hàng nhà hàng", body: "Website đặt hàng mang thương hiệu riêng trên tên miền của bạn.", href: "/platform/restaurant-website" },
      { title: "Website sàn giao hàng", body: "Website đặt hàng đa cửa hàng cho mô hình marketplace.", href: "/platform/ordering-web" },
      { title: "App sàn giao hàng", body: "Ứng dụng marketplace đa nhà bán trên iOS và Android.", href: "/platform/ordering-apps" },
      { title: "Kiosk tự phục vụ", body: "Màn hình tự gọi món đặt trực tiếp trong nhà hàng.", href: "/platform/ordering-kiosk" },
      { title: "Tổng đài đặt hàng", body: "Phần mềm hỗ trợ nhân viên tiếp nhận đơn đặt qua điện thoại.", href: "/platform/ordering-call-center" },
      { label: "Mới", title: "Web AI Ordering", body: "Khách đặt món qua hội thoại thông minh ngay trên kênh đặt hàng web.", href: "/platform/ai-ordering-agents" },
      { label: "Mới", title: "WhatsApp AI Ordering", body: "Khách đặt món trực tiếp qua tin nhắn WhatsApp tự động.", href: "/platform/ai-ordering-agents" },
    ],
  },
  closingCta: {
    title: "Xem ứng dụng vận hành thực tế cùng quy trình quán bạn.",
    body: "Chia sẻ cách nhà hàng bạn đang bán và giao hàng, đội ngũ sẽ tư vấn cấu hình phù hợp nhất.",
    docGuide: { label: "Tổng quan App khách hàng", href: "/demo#restaurant" },
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "App di động nhà hàng · Demo hướng dẫn" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
  },
};

export const RESTAURANT_ZALO_MINI_APP_SPEC_VI: PlatformPageSpec = {
  slug: "restaurant-zalo-mini-app",
  template: "catalog",
  metaTitle: "Zalo Mini App đặt hàng cho nhà hàng",
  metaDescription:
    "Ứng dụng đặt món và tích điểm mang thương hiệu nhà hàng chạy ngay trong Zalo — không cần tải app, kết nối sẵn Zalo OA, ZNS, ZaloPay và vận hành cửa hàng.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Zalo Mini App nhà hàng" },
    ],
    title: "Ứng dụng đặt món của nhà hàng bạn, chạy ngay trong Zalo.",
    lede: "Khách chỉ cần quét mã QR hoặc chạm vào Zalo OA để xem thực đơn, đặt giao hàng, mang về hay gọi món tại bàn, tích điểm thành viên và thanh toán ZaloPay — hoàn toàn không cần tải app. Thực đơn, đơn hàng và dữ liệu thành viên đồng bộ thời gian thực với Dashboard và App Cửa hàng.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo#restaurant" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Chạy gốc ngay trong Zalo" },
      { text: "Không cần tải từ kho ứng dụng" },
      { text: "Sẵn sàng OA · ZNS · ZaloPay" },
    ],
  },
  pillars: {
    title: "Những gì Zalo Mini App mang lại cho khách hàng của bạn.",
    numbered: false,
    items: [
      {
        title: "Truy cập tức thì, không cần cài app",
        body: "Tiếp cận 75M+ người dùng Zalo mà không bắt khách tải thêm ứng dụng. Khách mở gian hàng chỉ với 1 chạm từ Zalo OA, tin nhắn chia sẻ hoặc quét QR tại bàn, quầy và bao bì.",
      },
      {
        title: "Đăng nhập Zalo 1 chạm & quét QR gọi món",
        body: "Định danh khách tự động qua hồ sơ và số điện thoại Zalo có xác nhận minh bạch. Hỗ trợ giao hàng, mang về và quét mã QR theo từng bàn đẩy thẳng xuống bếp.",
      },
      {
        title: "Tích hợp E-Membership, voucher & ZNS",
        body: "Phát hành thẻ thành viên điện tử, tích điểm phân hạng và mini-game săn voucher ngay trong Zalo. Giữ khách quay lại bằng thông báo ZNS chính chủ và chat Zalo OA.",
      },
      {
        title: "ZaloPay & đồng bộ vận hành đa kênh",
        body: "Chấp nhận ZaloPay, chuyển khoản VietQR, thẻ ngân hàng nội địa và tiền mặt trong một màn hình — đồng bộ thực đơn, giỏ hàng và đơn hàng thời gian thực với POS, Website và App.",
      },
    ],
    footnote:
      "Phí xác thực Zalo Official Account (OA) và phí gửi tin ZNS được Zalo tính trực tiếp theo gói tài khoản của doanh nghiệp.",
  },
  featureCatalog: {
    title: `${RESTAURANT_ZALO_MINI_APP_FEATURE_COUNT_VI} tính năng, thiết kế chuẩn cho hệ sinh thái Zalo.`,
    categories: RESTAURANT_ZALO_MINI_APP_CATEGORIES_VI,
    footnote: "Cùng 10+ tính năng lõi hoạt động xuyên suốt toàn bộ nền tảng. Xem danh sách đầy đủ trong mục tính năng.",
    cta: { label: "Xem toàn bộ danh mục tính năng", href: "/pricing#pricing-features" },
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Hệ sinh thái Zalo",
    title: "Biến mọi điểm chạm trên Zalo thành đơn hàng lặp lại.",
    lead: "Kết hợp Mini App, Zalo OA, ZNS và ZaloPay thành một vòng khép kín đặt món – chăm sóc – giữ chân khách hàng với 0% hoa hồng đơn.",
    items: [
      {
        title: "Chăm sóc & kéo khách quay lại qua ZNS và Zalo OA",
        body: "Tự động gửi tin ZNS xác nhận đơn, báo món sẵn sàng, cộng điểm tích lũy và nhắc voucher sắp hết hạn trực tiếp vào hộp thư Zalo của khách.",
      },
      {
        title: "Thu hút thành viên từ QR tại bàn, hóa đơn & túi mang về",
        body: "Đặt mã QR Mini App trên bàn ăn, biên lai và bao bì giao hàng để chuyển đổi khách vãng lai và khách từ sàn giao hàng thành khách quen 0% hoa hồng.",
      },
      {
        title: "Ra mắt nhanh và tối ưu chi phí hơn app độc lập",
        body: "Vận hành mượt trên cả iOS lẫn Android ngay trong Zalo mà không cần duy trì riêng bản phát hành App Store & Google Play, vẫn dùng chung lõi thực đơn với Web và App.",
      },
    ],
  },
  related: {
    title: "Các kênh đặt hàng khác trên nền tảng",
    items: [
      { title: "App di động nhà hàng", body: "Ứng dụng iOS và Android mang thương hiệu riêng cho nhà hàng.", href: "/platform/restaurant-app" },
      { title: "Website đặt hàng nhà hàng", body: "Website đặt hàng mang thương hiệu riêng trên tên miền của bạn.", href: "/platform/restaurant-website" },
      { title: "Website sàn giao hàng", body: "Website đặt hàng đa cửa hàng cho mô hình marketplace.", href: "/platform/ordering-web" },
      { title: "App sàn giao hàng", body: "Ứng dụng marketplace đa nhà bán trên iOS và Android.", href: "/platform/ordering-apps" },
      { title: "Kiosk tự phục vụ", body: "Màn hình tự gọi món đặt trực tiếp trong nhà hàng.", href: "/platform/ordering-kiosk" },
      { title: "Tổng đài đặt hàng", body: "Phần mềm hỗ trợ nhân viên tiếp nhận đơn đặt qua điện thoại.", href: "/platform/ordering-call-center" },
      { label: "Mới", title: "Web AI Ordering", body: "Khách đặt món qua hội thoại thông minh ngay trên kênh đặt hàng web.", href: "/platform/ai-ordering-agents" },
      { label: "Mới", title: "WhatsApp AI Ordering", body: "Khách đặt món trực tiếp qua tin nhắn WhatsApp tự động.", href: "/platform/ai-ordering-agents" },
    ],
  },
  closingCta: {
    title: "Xem Zalo Mini App vận hành thực tế cùng quy trình quán bạn.",
    body: "Chia sẻ cách nhà hàng bạn bán hàng, giao vận và chăm sóc khách trên Zalo — đội ngũ sẽ tư vấn thiết lập Mini App, luồng ZNS và tích hợp POS phù hợp.",
    docGuide: { label: "Tổng quan Zalo Mini App", href: "/demo#restaurant" },
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Zalo Mini App nhà hàng · Demo hướng dẫn" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
  },
};
