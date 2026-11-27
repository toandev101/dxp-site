import type { SolutionPageSpec } from "./solution-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const RESTAURANTS_SPEC_VI: SolutionPageSpec = {
  slug: "restaurants",
  metaTitle: "Đặt hàng trực tuyến cho nhà hàng",
  metaDescription:
    "Triển khai kênh đặt hàng trực tuyến mang thương hiệu riêng cho nhà hàng: website, app, Zalo Mini App, thực đơn dễ vận hành và giao hàng linh hoạt.",
  hero: {
    breadcrumbLabel: "Nhà hàng",
    title: "Triển khai và vận hành đặt hàng trực tuyến cho nhà hàng của bạn.",
    lede: "Dành cho nhà hàng độc lập và chuỗi nhỏ: mang đến website, app hoặc Zalo Mini App mang thương hiệu riêng, giữ thực đơn đồng bộ sát với luồng nhận đơn, quản lý ca làm việc và bàn giao giao hàng trên một nền tảng thống nhất.",
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Nhà hàng · Tư vấn & demo" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
    meta: [
      "Website & app mang thương hiệu riêng",
      "Quản lý thực đơn và đơn hàng",
      "Mang về và giao tận nơi",
    ],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "offer",
      eyebrow: "Những gì bạn vận hành",
      title: "Thiết lập trọn vẹn trải nghiệm khách hàng và quy trình phía sau mỗi đơn.",
      columns: 4,
      items: [
        {
          label: "01",
          title: "Kênh đặt hàng của riêng bạn",
          body: "Cung cấp website, app hoặc Zalo Mini App mang thương hiệu nhà hàng để khách dễ dàng xem thực đơn và đặt món trực tiếp.",
        },
        {
          label: "02",
          title: "Thực đơn đội ngũ dễ vận hành",
          body: "Đồng bộ món ăn, tùy chọn topping, tình trạng còn/hết và giờ mở cửa theo ca làm việc để mọi thay đổi hiển thị ngay trên kênh đặt hàng.",
        },
        {
          label: "03",
          title: "Một nơi duy nhất cho cả ca",
          body: "Ứng dụng nhận đơn cửa hàng gom toàn bộ đơn từ các kênh hỗ trợ về cùng một hàng đợi vận hành cho đội ngũ quán.",
        },
        {
          label: "04",
          title: "Giao hàng linh hoạt",
          body: "Chủ động lựa chọn đội tài xế nội bộ, kết nối đơn vị giao hàng bên thứ ba hoặc kết hợp cả hai theo mô hình thực tế của nhà hàng.",
        },
      ],
    },
    {
      type: "calloutBanner",
      id: "commission",
      eyebrow: "Chiết khấu sàn giao hàng",
      title: "Bạn vẫn đang trả hoa hồng sàn cho các đơn khách quen đặt lại?",
      body: "Sàn giao hàng và kênh trực tiếp có vai trò khác nhau: sàn giúp khách mới tìm thấy quán, còn website/app riêng là nơi giữ chân khách quen đặt lại mang đúng thương hiệu của bạn với 0% hoa hồng.",
      cta: { label: "Xem bảng giá & gói 0% hoa hồng", href: "/pricing" },
    },
    {
      type: "stepsSplit",
      id: "launch",
      eyebrow: "Lập kế hoạch triển khai",
      title: "Bắt đầu từ những quyết định định hình trải nghiệm khách hàng.",
      lead: "Một hệ thống đặt hàng hiệu quả bắt đầu bằng việc thống nhất thực đơn, hình thức phục vụ, quy trình vận hành và kênh bán trước khi mở cho khách đặt.",
      steps: [
        {
          num: "01",
          title: "Xác định mô hình phục vụ",
          body: "Chọn các hình thức nhận đơn nhà hàng hỗ trợ (giao hàng, mang về, ăn tại bàn) và phân rõ người phụ trách từng bước bàn giao.",
        },
        {
          num: "02",
          title: "Chuẩn hóa thực đơn",
          body: "Sắp xếp danh mục, món ăn, tùy chọn thêm, tình trạng tồn kho và thông tin giúp khách chọn món nhanh chóng.",
        },
        {
          num: "03",
          title: "Kết nối vận hành",
          body: "Thiết lập công cụ nhận đơn, cổng thanh toán, tích hợp POS và đối tác giao hàng phù hợp với nhà hàng.",
        },
        {
          num: "04",
          title: "Kiểm thử hành trình khách đặt",
          body: "Chạy thử toàn bộ luồng đặt món cùng đội ngũ vận hành trước khi chính thức giới thiệu kênh mới tới khách hàng.",
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "Nền tảng vận hành",
      title: "Kết nối liền mạch từ kênh khách đặt tới đội ngũ tại quán.",
      body: "Website đặt hàng, app di động, Zalo Mini App, kiosk và các kênh khác đều vận hành chung một dữ liệu nhà hàng. Quan trọng nhất là mỗi đơn đều đi thẳng vào quy trình bếp và bàn giao giao hàng trơn tru.",
      topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài"],
      hubNote: "Đồng bộ thực đơn, đơn hàng và thanh toán của nhà hàng",
      bottomRow: ["App Cửa hàng", "POS", "Giao hàng"],
    },
    {
      type: "commercialScope",
      id: "pricing",
      eyebrow: "Phạm vi chi phí",
      title: "Đầu tư đúng với cấu hình nhà hàng bạn thực sự cần.",
      body: "Cuộc trao đổi bắt đầu từ số lượng chi nhánh, kênh bán, tích hợp sẵn có và nhu cầu giao vận. Tham khảo bảng giá minh bạch và xác nhận gói phù hợp với nhà hàng của bạn trước khi quyết định.",
      panelEyebrow: "Thông tin cần chuẩn bị",
      panelTitle: "Các yếu tố định hình gói triển khai",
      bullets: [
        "Số lượng chi nhánh và khu vực phục vụ",
        "Các kênh đặt hàng cho khách",
        "Quy trình thực đơn và vận hành tại quán",
        "Nhu cầu giao vận và tích hợp POS/thanh toán",
      ],
      primaryCta: { label: "Xem bảng giá", href: "/pricing" },
      secondaryCta: { label: "Đặt lịch demo", modalTopic: "Nhà hàng · Tư vấn gói triển khai" },
    },
    {
      type: "comparisonTable",
      id: "restaurant-management-scope",
      title: "Phân tách rõ quản lý đơn hàng và các hệ thống xung quanh.",
      lead: `Sử dụng ${BRAND} cho hành trình đặt hàng và vận hành cửa hàng, đồng thời xác định rõ phần nghiệp vụ giữ lại ở POS hoặc phần mềm kế toán.`,
      headers: ["Hạng mục", "Nơi vận hành", "Phạm vi phối hợp"],
      rows: [
        [
          "Thực đơn & đơn hàng",
          BRAND,
          "Quản lý danh mục món, tình trạng còn hàng, đơn đặt đến và quy trình xử lý của cửa hàng.",
        ],
        [
          "Tồn kho",
          `${BRAND} hoặc hệ thống kết nối`,
          "Cập nhật tình trạng món ngay trong công cụ đặt hàng; nếu hệ thống khác giữ dữ liệu kho, hai bên thống nhất chiều đồng bộ và cơ chế kết nối.",
        ],
        [
          "POS",
          "Kết nối theo từng hãng POS",
          "Rà soát thực tế luồng đồng bộ thực đơn và đẩy đơn với POS đang dùng để đảm bảo khớp quy trình bếp.",
        ],
        [
          "Đặt bàn",
          "Luồng đặt bàn cấu hình sẵn",
          "Khách có thể đặt bàn trước hoặc đặt bàn kèm đặt món trước. Rà soát quy trình xác nhận và tiếp đón tại quán.",
        ],
        [
          "Kế toán & tài chính",
          "Phần mềm kế toán của doanh nghiệp",
          "Dữ liệu đơn hàng và thanh toán không thay thế nghiệp vụ sổ sách, tính lương hay khai báo thuế. Xuất dữ liệu hoặc tích hợp sẽ được xác định riêng.",
        ],
      ],
      links: [
        { label: "Xem quy trình xử lý đơn tại quán", href: "/platform/ordering-merchant" },
        { label: "Khám phá tích hợp POS", href: "/integrations/pos" },
      ],
    },
    {
      type: "scopeNotes",
      id: "restaurant-reservation-notes",
      notes: [
        {
          id: "restaurant-reservation-order",
          title: "Kết nối đặt bàn với đơn gọi món bạn dự định phục vụ.",
          lead: "Đặt bàn và đặt món là hai quy trình tách biệt, ngay cả khi khách thực hiện cả hai cùng lúc.",
          paragraphs: [
            "Khách chọn chi nhánh và gửi yêu cầu giữ bàn; khi quán bật tính năng đặt bàn kèm đặt món trước, khách có thể chọn luôn thực đơn trước giờ đến. Cửa hàng nhận thông tin ngay trên công cụ vận hành để chủ động chuẩn bị bếp đúng giờ.",
            "Cần rà soát rõ số khách, khung giờ, bước thanh toán/đặt cọc và xác nhận từ phía nhà hàng. Thời gian hiển thị trên form không tự động đồng nghĩa đã giữ chỗ — hãy kiểm thử trọn vẹn luồng duyệt đặt bàn và đẩy đơn xuống bếp trước khi chạy thực tế.",
          ],
          links: [
            { label: "Khám phá tính năng website nhà hàng", href: "/platform/restaurant-website" },
            { label: "Xem bản demo trực tiếp", href: "/demo" },
          ],
        },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Hoạch định bước mở rộng tiếp theo cho vận hành.",
      items: [
        {
          label: "Giải pháp",
          title: "Chuỗi nhượng quyền",
          body: "Phối hợp tiêu chuẩn thương hiệu chung và quyền vận hành linh hoạt cho từng chi nhánh.",
          href: "/solutions/franchises",
        },
        {
          label: "Nền tảng",
          title: "Website nhà hàng",
          body: "Website đặt hàng mang thương hiệu riêng cho nhà hàng độc lập hoặc chuỗi nhỏ.",
          href: "/platform/restaurant-website",
        },
        {
          label: "Vận hành",
          title: "Quản lý giao hàng",
          body: "Tìm hiểu các phương án vận hành đội giao hàng riêng và đối tác 3PL cho nhà hàng.",
          href: "/platform/ordering-delivery",
        },
        {
          label: "Giải pháp",
          title: "Chuyển đổi sang OPERO",
          body: "Lập kế hoạch chuyển đổi mượt mà từ nền tảng đặt hàng hiện tại.",
          href: "/#migration",
        },
      ],
    },
  ],
  closingCta: {
    title: "Trải nghiệm cách đặt hàng trực tuyến vận hành ngay tại nhà hàng bạn.",
    body: "Chia sẻ thực đơn, số lượng chi nhánh và mô hình phục vụ để đội ngũ cùng tư vấn phương án phù hợp.",
    docGuide: { label: "Xem trải nghiệm đặt món & đặt bàn", href: "/demo" },
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Nhà hàng · Trao đổi triển khai" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const FRANCHISES_SPEC_VI: SolutionPageSpec = {
  slug: "franchises",
  metaTitle: "Đặt hàng trực tuyến cho chuỗi nhượng quyền",
  metaDescription:
    "Thiết lập tiêu chuẩn thương hiệu chung cho toàn chuỗi nhượng quyền, trao quyền vận hành ca cho từng đại lý và mở điểm bán mới trên cùng một hệ thống.",
  hero: {
    breadcrumbLabel: "Chuỗi nhượng quyền",
    title: "Thiết lập chuẩn thương hiệu một lần. Để từng chi nhánh chủ động vận hành ca.",
    lede: `Chuỗi nhượng quyền cần sự đồng nhất mà không biến mọi xử lý tại điểm bán thành việc của trụ sở chính. Với ${BRAND}, bên nhượng quyền quy định tiêu chuẩn chung của thương hiệu, từng đối tác nhượng quyền quản lý vận hành chi nhánh của mình, và mỗi điểm bán mới đều hòa nhập ngay vào cùng kênh bán và mô hình vận hành.`,
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Tư vấn chuỗi nhượng quyền" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
    meta: [
      "Chuẩn thương hiệu do trụ sở quản trị",
      "Từng chi nhánh chủ động vận hành ca",
      "Điểm bán mới hòa nhập cùng mô hình",
    ],
    bottomStrip: {
      lead: "Được tin dùng bởi các thương hiệu đa chi nhánh và tập đoàn nhượng quyền.",
      logos: ["Domino's", "KFC", "Starbucks", "Burger King", "Alsea"],
    },
  },
  sections: [
    {
      type: "cardsGrid",
      id: "problem",
      eyebrow: "Cấu trúc chuỗi nhượng quyền",
      title: "Một mạng lưới nhượng quyền vận hành hiệu quả nhờ phân quyền quyết định rõ ràng.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "Thương hiệu có đầu mối quản trị rõ ràng",
          body: "Hệ thống cần phân định rõ cấu trúc thực đơn nào thuộc quyền trụ sở chính và hạng mục nào đại lý nhượng quyền được phép điều chỉnh theo điểm bán.",
        },
        {
          label: "02",
          title: "Mỗi cấp chỉ thấy đúng phạm vi phụ trách",
          body: "Chủ nhượng quyền, quản lý khu vực và trụ sở chính truy cập đúng danh sách chi nhánh, cấu hình và báo cáo thuộc trách nhiệm của mình.",
        },
        {
          label: "03",
          title: "Cập nhật theo đúng cấp độ mạng lưới",
          body: "Khi thay đổi chính sách, cấu trúc thực đơn hay cấu hình, hệ thống xác định rõ phạm vi áp dụng cho 1 đại lý, 1 khu vực hay toàn chuỗi.",
        },
      ],
    },
    {
      type: "twoColumnLists",
      id: "control",
      eyebrow: "Trụ sở chính và đối tác nhượng quyền",
      title: "Trụ sở đặt ra tiêu chuẩn. Chi nhánh vận hành linh hoạt trong khuôn khổ đó.",
      lead: "Tách bạch rõ các quyết định thương hiệu phải đồng nhất toàn hệ thống khỏi các thao tác điều chỉnh hằng ngày trong ca tại từng cửa hàng.",
      panels: [
        {
          eyebrow: "Trụ sở chính quy định",
          title: "Tiêu chuẩn toàn chuỗi",
          bullets: [
            "Cấu trúc danh mục & thực đơn chuẩn",
            "Giới hạn các trường chi nhánh được phép sửa",
            "Vai trò và phạm vi phân quyền",
            "Cấu hình chung cấp toàn mạng lưới",
          ],
        },
        {
          eyebrow: "Từng chi nhánh vận hành",
          title: "Hoạt động trong ca tại điểm bán",
          bullets: [
            "Giờ mở cửa và tạm ngưng nhận đơn",
            "Bật/tắt tình trạng còn món theo thực tế",
            "Các điều chỉnh nội bộ đã được phê duyệt",
            "Tài khoản nhân sự cửa hàng và bàn giao đơn",
          ],
        },
      ],
      steps: [
        {
          num: "01",
          title: "Giữ chuẩn thương hiệu nhưng vẫn linh hoạt địa phương",
          body: "Phát hành cấu trúc thực đơn dùng chung đồng thời quy định rõ những trường thông tin đại lý có thể tùy biến cho chi nhánh.",
        },
        {
          num: "02",
          title: "Phân quyền khớp thỏa thuận nhượng quyền",
          body: "Gán quyền cho từng chủ điểm bán, đội quản lý vùng và trụ sở chính đúng theo các cửa hàng, khu vực hoặc thương hiệu họ phụ trách.",
        },
        {
          num: "03",
          title: "Đẩy cập nhật đồng loạt theo nhóm chi nhánh",
          body: "Áp dụng thay đổi cho cả nhóm điểm bán đã chọn thay vì phải lặp lại thao tác thủ công từng cửa hàng một.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "channels",
      eyebrow: "Kênh khách hàng",
      title: "Mọi kênh đặt hàng đều vận hành theo chung một mô hình mạng lưới.",
      lead: "Trên website, app và Zalo Mini App, khách chọn đúng chi nhánh phục vụ khu vực của mình trước khi tạo giỏ hàng.",
      columns: 4,
      actionLink: { label: "Khám phá đặt hàng đa chi nhánh", href: "/platform/multi-store-ordering" },
      items: [
        {
          label: "01",
          title: "Website, App & Mini App",
          body: "Thiết kế kênh đặt hàng tập trung kết nối toàn bộ chi nhánh, thực đơn chung và quy tắc vận hành riêng của từng điểm bán.",
        },
        {
          label: "02",
          title: "Kiosk tự phục vụ",
          body: "Triển khai kiosk tại những chi nhánh phù hợp mô hình tự phục vụ, dùng chung dữ liệu thực đơn và luồng đơn toàn hệ thống.",
        },
        {
          label: "03",
          title: "Tổng đài đặt hàng",
          body: "Định tuyến đơn đặt qua điện thoại về đúng chi nhánh phụ trách khu vực khách hàng để xử lý nhanh nhất.",
        },
        {
          label: "04",
          title: "Vận hành tại điểm bán",
          body: "Đảm bảo mọi kênh đặt hàng đều đổ về quy trình tiếp nhận và chế biến thống nhất của đội ngũ chi nhánh.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "operations",
      eyebrow: "Vận hành đa cấp",
      title: "Mỗi cấp quản lý trong chuỗi đều có góc nhìn đúng với công việc của mình.",
      lead: "Mô hình đa điểm bán tổ chức cửa hàng theo chi nhánh, khu vực và thương hiệu, giúp chủ điểm bán, quản lý vùng và trụ sở làm việc trên góc nhìn tương ứng.",
      steps: [
        {
          num: "01",
          title: "Góc nhìn chi nhánh (Franchisee)",
          body: "Đội ngũ tại cửa hàng tập trung xử lý đơn hàng, tình trạng món và vận hành ca của riêng chi nhánh mình.",
        },
        {
          num: "02",
          title: "Góc nhìn khu vực (Regional)",
          body: "Quản lý vùng theo dõi và điều phối nhóm cửa hàng thuộc phạm vi phụ trách mà không bị nhiễu dữ liệu toàn chuỗi.",
        },
        {
          num: "03",
          title: "Góc nhìn trụ sở chính (Franchisor)",
          body: "Trụ sở quản trị thực đơn chuẩn, phân quyền hệ thống và triển khai thay đổi đồng loạt ở cấp mạng lưới.",
        },
        {
          num: "04",
          title: "Hoạch định giao vận theo điểm bán",
          body: "Xác định mô hình giao hàng cho từng cửa hàng và kiểm tra đội tài xế nội bộ hoặc đối tác giao vận trước khi khai trương.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "integrations",
      eyebrow: "Kết nối hệ thống",
      title: "Đồng bộ các hệ thống mà từng chi nhánh đang sử dụng.",
      lead: "Kế hoạch mở rộng chuỗi cần rà soát trước các kết nối POS, thanh toán, giao hàng, loyalty và báo cáo theo từng chi nhánh hoặc khu vực.",
      columns: 4,
      items: [
        {
          label: "POS",
          title: "Hệ thống POS",
          body: "Xác nhận luồng kết nối POS và vai trò của POS trong tiếp nhận đơn và vận hành bếp tại điểm bán.",
          href: "/integrations/pos",
        },
        {
          label: "Thanh toán",
          title: "Cổng thanh toán",
          body: "Xác nhận phương thức thanh toán, đối soát giữa trụ sở/đại lý và cổng thanh toán phù hợp từng khu vực.",
          href: "/integrations/payments",
        },
        {
          label: "Giao vận",
          title: "Dịch vụ giao hàng",
          body: "Thiết lập mô hình đội xe tự vận hành hoặc kết nối đối tác giao hàng cho từng chi nhánh có giao tận nơi.",
          href: "/integrations/delivery",
        },
        {
          label: "Mở rộng",
          title: "Hệ thống khác",
          body: "Rà soát CRM, ERP, Loyalty và các hệ thống cần kết nối trước khi chính thức đưa mạng lưới vào vận hành.",
          href: "/integrations",
        },
      ],
    },
    {
      type: "controlBand",
      id: "extend",
      eyebrow: "Nền tảng hoạch định",
      title: "Chuẩn hóa mô hình nhượng quyền trước khi nhân rộng toàn chuỗi.",
      body: "Một kế hoạch triển khai vững chắc sẽ làm rõ danh sách điểm bán, đối tác nhượng quyền, phân quyền, kênh bán, tích hợp và ngoại lệ địa phương trước khi lập tiến độ mở rộng.",
      tiles: [
        { title: "Bản đồ mạng lưới", body: "Chi nhánh, khu vực, thương hiệu và ranh giới trách nhiệm." },
        { title: "Mô hình thực đơn", body: "Phần dữ liệu chuẩn hóa chung và phần được phép tùy biến theo điểm bán." },
        { title: "Kế hoạch kênh bán", body: "Xác định kênh đặt hàng nào áp dụng cho nhóm chi nhánh nào." },
        { title: "Bản đồ tích hợp", body: "Các hệ thống POS, thanh toán và đối tác cần kiểm thử kết nối." },
      ],
    },
    {
      type: "cardsGrid",
      id: "rollout",
      eyebrow: "Mở điểm bán & đại lý mới",
      title: "Đưa từng chi nhánh mới vào mạng lưới theo từng giai đoạn rõ ràng.",
      columns: 3,
      items: [
        {
          label: "01 · Lập bản đồ",
          title: "Định hình mạng lưới",
          body: "Tổng hợp chi nhánh, đối tác nhượng quyền, phân quyền, kênh bán, quy tắc vận hành và hệ thống đang dùng.",
        },
        {
          label: "02 · Kiểm chứng",
          title: "Thử nghiệm mô hình vận hành",
          body: "Chạy thử trọn vẹn luồng thực đơn, nhận đơn, xử lý bếp và giao hàng cùng đội ngũ trực tiếp phụ trách.",
        },
        {
          label: "03 · Nhân rộng",
          title: "Áp dụng mô hình đã chuẩn hóa",
          body: "Tiếp tục đưa thêm chi nhánh và đại lý mới vào hệ thống sau khi đã nắm rõ các yêu cầu đặc thù địa phương.",
        },
      ],
    },
    {
      type: "commercialScope",
      id: "pricing",
      eyebrow: "Phạm vi thương mại",
      title: "Xây dựng gói triển khai sát với quy mô chuỗi của bạn.",
      body: "Chi phí và điều khoản phụ thuộc vào cấu trúc hệ thống thực tế. Hãy bắt đầu từ số lượng điểm bán, kênh khách hàng, tích hợp và phạm vi vận hành của chuỗi.",
      panelEyebrow: "Chuỗi nhượng quyền",
      panelTitle: "Cùng rà soát mô hình vận hành của bạn.",
      kvRows: [
        { label: "Số điểm bán & khu vực", value: "xác nhận phạm vi" },
        { label: "Các kênh đặt hàng", value: "xác nhận phạm vi" },
        { label: "Tích hợp vận hành (POS/ERP)", value: "xác nhận phạm vi" },
        { label: "Mô hình giao hàng", value: "xác nhận phạm vi" },
      ],
      primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Rà soát phạm vi chuỗi nhượng quyền" },
      secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
    },
  ],
  closingCta: {
    title: "Xem mô hình OPERO vận hành cho chuỗi nhượng quyền của bạn.",
    body: "Bắt đầu từ số lượng chi nhánh, cấu trúc đại lý và những quy trình bạn cần đồng bộ.",
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Demo cho chuỗi nhượng quyền" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
  },
};

export const ENTERPRISE_SPEC_VI: SolutionPageSpec = {
  slug: "enterprise",
  metaTitle: "Nền tảng đặt hàng trực tuyến cho doanh nghiệp lớn",
  metaDescription:
    "Hoạch định kiến trúc đặt hàng cho hệ thống chuỗi quy mô lớn: phạm vi mạng lưới, đa kênh, phân quyền vận hành, tích hợp chuyên sâu và lộ trình triển khai.",
  hero: {
    breadcrumbLabel: "Doanh nghiệp lớn",
    eyebrow: "Lộ trình hoạch định",
    title: "Thiết kế mô hình đặt hàng cho mạng lưới nhà hàng quy mô lớn.",
    lede: `Hệ thống quy mô lớn cần nhiều hơn một danh sách tính năng. Doanh nghiệp cần góc nhìn rõ ràng về mạng lưới chi nhánh, đa kênh, phân quyền, tích hợp hệ thống và bàn giao vận hành giữa các bộ phận. Hãy lấy mô hình đó làm nền tảng làm việc cùng ${BRAND}.`,
    primaryCta: { label: "Liên hệ tư vấn Enterprise", modalTopic: "Tư vấn giải pháp Enterprise" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    meta: [
      "Quy mô mạng lưới & đa thương hiệu",
      "Phân quyền & bàn giao vận hành",
      "Lộ trình tích hợp & nhân rộng",
    ],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "offer",
      eyebrow: "Hoạch định cấp doanh nghiệp",
      title: "Bắt đầu từ những quyết định cốt lõi định hình mô hình vận hành.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "Phạm vi mạng lưới",
          body: "Lập bản đồ toàn bộ chi nhánh, khu vực, thương hiệu con và mô hình phục vụ cần hoạt động đồng bộ.",
        },
        {
          label: "02",
          title: "Phạm vi kênh bán",
          body: "Xác định rõ website, app di động, Zalo Mini App, kiosk, tổng đài và các luồng giao vận phù hợp từng thương hiệu.",
        },
        {
          label: "03",
          title: "Phạm vi phân quyền",
          body: "Quy định rõ quyền xem và quyền chỉnh sửa cho trụ sở chính, quản lý vùng, đại lý nhượng quyền và đội ngũ tại điểm bán.",
        },
        {
          label: "04",
          title: "Phạm vi tích hợp",
          body: "Liệt kê chi tiết các hệ thống POS, thanh toán, giao hàng, loyalty, ERP và báo cáo cần kết nối kiểm chứng.",
        },
        {
          label: "05",
          title: "Lộ trình triển khai",
          body: "Chọn trình tự rollout theo giai đoạn để đội ngũ phụ trách từng khu vực trực tiếp kiểm thử trước khi mở rộng.",
        },
        {
          label: "06",
          title: "Phạm vi thương mại",
          body: "Thống nhất rõ cấu phần sản phẩm, dịch vụ triển khai, SLA, điều khoản và trách nhiệm của từng bên.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "rollout",
      eyebrow: "Triển khai theo giai đoạn",
      title: "Làm rõ mọi phụ thuộc vận hành trước khi mở rộng toàn mạng lưới.",
      lead: "Một kế hoạch triển khai hiệu quả chuyển hóa dự án lớn thành các hạng mục có thể kiểm chứng thực tế tại từng điểm bán: thực đơn, luồng đặt món, quy trình cửa hàng, tích hợp và nhân sự phụ trách.",
      steps: [
        {
          num: "01",
          title: "Khảo sát & lập bản đồ",
          body: "Tổng hợp chi nhánh, thị trường, kênh bán, quy trình cửa hàng và toàn bộ hệ thống nằm trong phạm vi dự án.",
        },
        {
          num: "02",
          title: "Thiết kế mô hình",
          body: "Định nghĩa quyền sở hữu thực đơn, giới hạn tùy biến chi nhánh, phân quyền và các điểm bàn giao từ khách đặt tới vận hành quán.",
        },
        {
          num: "03",
          title: "Kiểm thử & xác nhận",
          body: "Chạy thử trọn vẹn các kịch bản thực tế cùng đội vận hành, kỹ thuật và các đối tác trực tiếp sử dụng hệ thống.",
        },
        {
          num: "04",
          title: "Nhân rộng theo đợt",
          body: "Dùng mô hình đã kiểm chứng làm chuẩn để tiếp tục triển khai nhanh cho nhóm chi nhánh và thương hiệu tiếp theo.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "reliability",
      eyebrow: "Yêu cầu vận hành",
      title: "Đưa mọi yêu cầu ảnh hưởng đến vận hành vào phạm vi cam kết rõ ràng.",
      lead: "Mức độ sẵn sàng hệ thống, phạm vi hỗ trợ, quy trình xử lý sự cố, trách nhiệm dữ liệu và yêu cầu tuân thủ địa phương là những quyết định trọng yếu ở quy mô Enterprise — cần được xác định cụ thể trong phạm vi dự án.",
      footnote: "Xác nhận chi tiết phạm vi kỹ thuật, trách nhiệm và các cam kết SLA trong buổi đánh giá thương mại & kỹ thuật.",
      columns: 3,
      items: [
        {
          title: "Hỗ trợ & phân cấp xử lý",
          body: "Quy định rõ đầu mối tiếp nhận, kênh liên hệ ưu tiên và quy trình phối hợp cùng đội vận hành nội bộ.",
        },
        {
          title: "Cam kết chất lượng dịch vụ",
          body: "Xác định yêu cầu về độ ổn định, hiệu năng chịu tải giờ cao điểm gắn sát với mô hình vận hành chuỗi.",
        },
        {
          title: "Quy trình thông báo sự cố",
          body: "Thống nhất trước danh sách liên hệ, luồng cập nhật trạng thái và quy trình khắc phục sau sự cố trước khi go-live.",
        },
      ],
      extraCallout: {
        title: `Triển khai ${BRAND} trên hạ tầng cloud riêng của bạn.`,
        bullets: [
          "Toàn bộ backend: API, webhooks và xử lý thời gian thực trên hạ tầng riêng.",
          "Một hợp đồng chi phí cố định, không tính phí theo từng cửa hàng hay theo sản lượng giao dịch.",
        ],
      },
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "Một mô hình vận hành thống nhất",
      title: "Truy vết rõ ràng từ mọi kênh khách đặt tới đội ngũ xử lý.",
      body: `Một kiến trúc mạng lưới tốt giúp minh bạch hóa toàn bộ luồng từ lúc khách đặt món đến khi cửa hàng hoàn tất phục vụ. Các mô-đun của ${BRAND} kết nối xuyên suốt kênh bán và tầng vận hành.`,
      topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài"],
      hubNote: "Quản trị tập trung, giám sát khu vực và thực thi tại điểm bán",
      bottomRow: ["App Cửa hàng", "POS", "Giao hàng", "Báo cáo"],
    },
    {
      type: "controlBand",
      id: "agreement",
      eyebrow: "Đánh giá thương mại & kỹ thuật",
      title: "Chuyển hóa yêu cầu mạng lưới thành phạm vi triển khai cụ thể.",
      body: "Cùng thảo luận trực tiếp các quyết định về phân định trách nhiệm, kiến trúc tích hợp và điều khoản thương mại để bản thiết kế sát nhất với hệ thống bạn đang vận hành.",
      tiles: [
        { title: "Mô hình mạng lưới", body: "Chi nhánh, khu vực, đa thương hiệu và vai trò vận hành." },
        { title: "Mô hình kênh bán", body: "Hành trình khách hàng và luồng bàn giao về cửa hàng trong phạm vi." },
        { title: "Mô hình hệ thống", body: "Các tích hợp POS, ERP, thanh toán và phụ thuộc cần kiểm chứng." },
        { title: "Mô hình thương mại", body: "Cấu phần sản phẩm, dịch vụ triển khai, SLA và điều khoản hợp đồng." },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Khám phá các hạng mục vận hành liên quan.",
      items: [
        {
          label: "Giải pháp",
          title: "Chuỗi nhượng quyền",
          body: "Phối hợp tiêu chuẩn thương hiệu chung và vận hành địa phương cho mạng lưới nhượng quyền.",
          href: "/solutions/franchises",
        },
        {
          label: "Nền tảng",
          title: "Vận hành đa chi nhánh",
          body: "Xem cách tổ chức thực đơn, phân quyền và góc nhìn quản trị cho mạng lưới nhiều điểm bán.",
          href: "/platform/multi-location-operations",
        },
        {
          label: "Giải pháp",
          title: "Dự án tùy biến riêng",
          body: "Trao đổi phạm vi cho các yêu cầu kỹ thuật hoặc nghiệp vụ đặc thù ngoài cấu hình tiêu chuẩn.",
          href: "/solutions/custom-projects",
        },
        {
          label: "Giải pháp",
          title: "Chuyển đổi sang OPERO",
          body: "Hoạch định lộ trình chuyển đổi an toàn từ nhà cung cấp hiện tại.",
          href: "/#migration",
        },
      ],
    },
  ],
  closingCta: {
    title: "Cùng trao đổi kiến trúc cho mạng lưới của bạn.",
    body: "Bắt đầu từ số lượng điểm bán, đội ngũ vận hành, kênh khách hàng và các hệ thống cần kết nối đồng bộ.",
    primaryCta: { label: "Liên hệ tư vấn Enterprise", modalTopic: "Đánh giá kiến trúc mạng lưới Enterprise" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};
