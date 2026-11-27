import type { PlatformPageSpec } from "./platform-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const ORDERING_MERCHANT_SPEC_VI: PlatformPageSpec = {
  slug: "ordering-merchant",
  template: "showcase",
  metaTitle: "Ordering Merchant — Ứng dụng nhận đơn cửa hàng",
  metaDescription:
    "Ordering Merchant gom luồng xử lý đơn hàng, đẩy phiếu bếp và quyền điều khiển chi nhánh vào một không gian vận hành duy nhất trên Web, iOS và Android.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Vận hành", href: "/products#operate" },
      { label: "Ứng dụng nhận đơn cửa hàng" },
    ],
    title: "Mọi đơn hàng trên một hàng đợi, từ lúc nhận đến khi giao xong.",
    lede: "Ordering Merchant mang đến cho đội ngũ tại quán một không gian vận hành duy nhất cho mọi đơn đến. Luồng xử lý đi xuyên suốt từ xác nhận, chế biến, sẵn sàng đến bàn giao giao hàng, trong khi in bếp và điều khiển cửa hàng luôn nằm ngay trong tầm tay ca trực.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Web, iOS và Android" },
      { text: "In phiếu & màn hình bếp (KDS)" },
      { text: "Bật / tắt nhận đơn trong 1 chạm" },
    ],
  },
  pageIndex: [
    { label: "Tổng quan", href: "#pillars" },
    { label: "Tính năng", href: "#features" },
    { label: "Quản lý đơn hàng", href: "#order-management" },
    { label: "Bên trong ứng dụng", href: "#screens" },
    { label: "Trên mọi thiết bị", href: "#capabilities" },
    { label: "Hàng đợi đơn", href: "#order-queue" },
    { label: "Lọc & xuất dữ liệu", href: "#find-and-report" },
    { label: "Liên lạc trong đơn", href: "#stay-in-touch" },
    { label: "In phiếu bếp", href: "#printing" },
    { label: "Máy in tương thích", href: "#printers" },
    { label: "Điều khiển chi nhánh", href: "#store-controls" },
    { label: "Kết nối", href: "#connected" },
    { label: "Giao hàng & phân quyền", href: "#control" },
  ],
  pillars: {
    eyebrow: "Ứng dụng nhận đơn cửa hàng",
    title: "Một ứng dụng cho đúng những công việc cửa hàng thực sự làm.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Một hàng đợi, mọi kênh bán",
        body: "Đơn từ các kênh trực tiếp và kênh kết nối đổ về chung một hàng đợi vận hành, nhân viên không phải nhảy qua lại nhiều màn hình.",
      },
      {
        label: "02",
        title: "Trạng thái rõ ràng cho cả khách hàng",
        body: "Trình tự minh bạch — đã nhận, đang chế biến, sẵn sàng và đã giao — giúp toàn ca trực nắm đúng tiến độ từng đơn.",
      },
      {
        label: "03",
        title: "In phiếu bếp & màn hình KDS",
        body: "Chuyển thông tin đơn ra máy in hóa đơn, màn hình hiển thị bếp (KDS) hoặc cả hai tùy quy trình bếp của quán.",
      },
      {
        label: "04",
        title: "Chi nhánh chủ động kiểm soát",
        body: "Quản lý thực đơn, giờ mở cửa, tình trạng món và trạng thái mở/đóng quán ngay cạnh màn hình nhận đơn.",
      },
    ],
  },
  features: {
    title: "Những gì cửa hàng cần xuyên suốt ca trực.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Nhận, từ chối và hẹn giờ chế biến",
        body: "Chấp nhận đơn kèm thời gian chuẩn bị dự kiến, hoặc ghi nhận lý do từ chối khi quán quá tải.",
      },
      {
        title: "Quản lý trạng thái đơn xuyên suốt",
        body: "Chuyển đơn mượt mà từ đã nhận sang đang làm, sẵn sàng và bàn giao theo đúng quy trình vận hành.",
      },
      {
        title: "In phiếu tự động",
        body: "Tự động in phiếu ngay khi xác nhận đơn hoặc in lại theo yêu cầu tại đúng quầy bếp đang dùng.",
      },
      {
        title: "Màn hình hiển thị bếp (KDS)",
        body: "Đẩy đơn đã xác nhận thẳng lên màn hình KDS để bếp theo dõi hàng đợi không cần giấy.",
      },
      {
        title: "Thông báo đơn mới tức thì",
        body: "Chuông báo và thông báo đẩy cho đơn mới hoặc thay đổi trạng thái trên toàn bộ thiết bị vận hành.",
      },
      {
        title: "Bàn giao tài xế liền mạch",
        body: "Chuyển đơn giao hàng đã sẵn sàng sang quy trình điều phối tài xế ngay từ cùng một hồ sơ đơn.",
      },
    ],
  },
  stepsSplit: {
    id: "order-management",
    eyebrow: "Quản lý đơn hàng",
    title: "Nhận đơn, chế biến, sẵn sàng, bàn giao.",
    lead: "Hàng đợi tạo ra nhịp làm việc chuẩn xác cho cả ca trực. Nhân viên cập nhật trạng thái từng đơn và đẩy phiếu xuống bếp theo đúng định dạng của cửa hàng.",
    steps: [
      {
        num: "01",
        title: "Nhận đơn",
        body: "Cửa hàng xem chi tiết đơn và xác nhận kèm thời gian chuẩn bị, hoặc ghi nhận từ chối nếu không thể phục vụ.",
        tag: "Thao tác quán: xác nhận đơn",
      },
      {
        num: "02",
        title: "Chế biến",
        body: "Đơn được đẩy ra máy in bếp, màn hình KDS hoặc cả hai trong lúc bếp bắt đầu chế biến.",
        tag: "Thao tác quán: bắt đầu làm món",
      },
      {
        num: "03",
        title: "Sẵn sàng",
        body: "Đánh dấu đơn đã hoàn thành chế biến, tách biệt rõ khâu bếp với khâu đóng gói và bàn giao.",
        tag: "Thao tác quán: chuẩn bị giao nhận",
      },
      {
        num: "04",
        title: "Điều phối giao hàng",
        body: "Với đơn giao tận nơi, chuyển đơn sang đội tài xế nội bộ hoặc đối tác giao vận đã cấu hình.",
        tag: "Thao tác quán: bàn giao giao hàng",
      },
    ],
  },
  preWalkthroughCapabilitiesList: {
    id: "connected-channel-scope",
    eyebrow: "Kênh kết nối",
    title: `Tập trung toàn bộ đơn hàng đổ về ${BRAND}.`,
    items: [
      {
        title: "Những đơn hàng nào được gom chung",
        body: `Đơn phát sinh trên ${BRAND} từ website, app di động, Zalo Mini App, kiosk hoặc kênh sở hữu khác, cộng thêm đơn từ các kết nối sàn đã kích hoạt. Luôn kiểm thử nhận đơn, xác nhận và cập nhật trạng thái cho từng kênh.`,
      },
      {
        title: "So sánh doanh thu theo kênh",
        body: "Trong Dashboard, vào Báo cáo → Báo cáo kinh doanh. Lọc theo Kênh bán và giữ thống nhất khung thời gian, múi giờ và chi nhánh khi đối chiếu.",
      },
      {
        title: "Phạm vi nằm ngoài hệ thống",
        body: `Các đơn không đẩy về ${BRAND}, kết nối lỗi hoặc đơn tại quầy chưa đồng bộ sẽ không hiển thị ở đây. Việc đối soát quyết toán, phí sàn, hoàn tiền và thuế vẫn cần đối chiếu thêm với bảng kê của đối tác.`,
      },
    ],
  },
  screensWalkthrough: {
    id: "screens",
    eyebrow: "Bên trong ứng dụng",
    title: "Một đơn hàng, từ tiếng chuông đầu tiên đến thao tác hoàn tất.",
    lead: "Giao diện trực quan cho máy tính bảng đặt tại quầy hoặc điện thoại trong túi quản lý trong suốt ca bán.",
    caption: "Màn hình ứng dụng minh họa với cửa hàng và thực đơn mẫu.",
    items: [
      {
        title: "Đơn mới đến kèm thông báo ngay lập tức",
        body: "Hiển thị nổi bật trên tablet quầy hoặc điện thoại kèm nguồn kênh, danh sách món và khung giờ chế biến.",
      },
      {
        title: "Nhận đơn, từ chối hoặc gán tài xế trong vài chạm",
        body: "Xác nhận thời gian chuẩn bị, từ chối khi hết món hoặc đẩy thẳng đơn sẵn sàng sang điều phối giao vận.",
      },
      {
        title: "Giữ khách hàng và tài xế luôn nắm thông tin",
        body: "Mọi cập nhật trạng thái và tin nhắn đều gắn liền lịch sử đơn để khách và tài xế nắm đúng tiến độ.",
      },
      {
        title: "Điều chỉnh món & danh mục ngay khi hết hàng",
        body: "Tạm tắt từng món hoặc cả danh mục khi nguyên liệu hết giữa ca, và bật lại ngay khi bếp bổ sung.",
      },
    ],
  },
  preBandsCapabilitiesLists: [
    {
      id: "capabilities",
      eyebrow: "Trên mọi thiết bị",
      title: "Điều hành quán ngay tại quầy hoặc từ xa mọi lúc.",
      items: [
        {
          title: "Trên điện thoại",
          body: "Ứng dụng di động gọn nhẹ giúp quản lý luôn kiểm soát luồng đơn trong túi áo thay vì phải ngồi trước màn hình máy tính.",
        },
        {
          title: "Hiển thị đầy đủ trên máy tính bảng",
          body: "Chế độ màn hình ngang chữ lớn, dễ nhìn khi gắn cố định tại quầy thu ngân — không bỏ sót đơn vào giờ cao điểm.",
        },
        {
          title: "Mang thương hiệu riêng của bạn",
          body: "Gắn logo và nhận diện của chuỗi lên ứng dụng cửa hàng để đội ngũ vận hành trong một môi trường đồng nhất.",
        },
        {
          title: "Quản lý từ xa trên iOS & Android",
          body: "Chủ quán và quản lý khu vực theo dõi tình hình hoạt động trực tiếp trên điện thoại cá nhân mọi lúc mọi nơi.",
        },
        {
          title: "Đa chi nhánh & phân quyền",
          body: "Phối hợp nhiều điểm bán và thiết lập vai trò, quyền truy cập rõ ràng cho từng nhóm nhân sự.",
        },
        {
          title: "Mỗi cửa hàng một công tắc bật/tắt",
          body: "Xem toàn bộ chi nhánh bạn quản lý trên app, bật/tắt trạng thái mở cửa và lọc danh sách đơn theo trạng thái ngay lập tức.",
        },
      ],
    },
  ],
  capabilityBands: [
    {
      id: "order-queue",
      eyebrow: "Hàng đợi đơn hàng",
      title: "Tiếp nhận, theo dõi và xử lý trọn vẹn mọi đơn.",
      body: "Xem đầy đủ thông tin khách hàng, chi tiết từng món, tài xế phụ trách và chuyển trạng thái trên một màn hình duy nhất.",
      where: "Dashboard và ứng dụng Ordering Merchant",
      columns: [
        {
          title: "Từ tiếp nhận đến hoàn thành",
          items: [
            {
              body: "Chấp nhận hoặc từ chối đơn đến, thiết lập thời gian chuẩn bị và chuyển trạng thái rõ ràng qua đang làm, sẵn sàng và hoàn tất.",
            },
          ],
        },
        {
          title: "Đầy đủ thông tin trên một màn hình",
          items: [
            {
              title: "Ngữ cảnh đơn trọn vẹn",
              body: "Thông tin chi nhánh, liên hệ khách hàng, tài xế, phương thức thanh toán và ghi chú món nằm gọn trong một bảng chi tiết.",
            },
            {
              title: "Lợi ích vận hành",
              body: "Đội ngũ giải đáp thắc mắc và bàn giao phiếu nhanh mà không cần chuyển app hay dò lại hóa đơn giấy.",
            },
          ],
        },
      ],
    },
    {
      id: "find-and-report",
      eyebrow: "Tìm kiếm, xuất file & số liệu trong ngày",
      title: "Lọc hàng đợi, xuất CSV hoặc xem nhanh doanh số hôm nay.",
      body: "Lọc đơn trực tiếp và lịch sử theo chi nhánh, nhóm tài xế, trạng thái, hình thức giao, phương thức thanh toán, ngày hoặc tiền tệ — sau đó xuất chính xác danh sách ra CSV.",
      where: "Dashboard",
      subtle: true,
      columns: [
        {
          title: "Tiêu chí lọc linh hoạt",
          items: [
            {
              body: "Lọc theo nhóm tài xế, cửa hàng, thành phố, loại giao hàng, khoảng ngày, tài xế, trạng thái, phương thức thanh toán và tiền tệ.",
            },
          ],
        },
        {
          title: "Xuất dữ liệu & số liệu ca trực",
          items: [
            {
              title: "Xuất CSV toàn bộ hoặc theo bộ lọc",
              body: "Xuất toàn bộ đơn hàng hoặc chỉ tập đơn đang lọc để phục vụ kế toán, vận hành và đối soát cửa hàng.",
            },
            {
              title: "Lợi ích vận hành",
              body: "Quản lý phát hiện ngay điểm nghẽn trong ca và chia sẻ bảng dữ liệu sạch mà không phải tổng hợp thủ công.",
            },
          ],
        },
      ],
    },
    {
      id: "stay-in-touch",
      eyebrow: "Liên lạc với khách hàng & tài xế",
      title: "Trao đổi ngay với khách hoặc tài xế mà không rời màn hình đơn.",
      body: "Mỗi đơn hàng có luồng tin nhắn và thông báo riêng giúp nhân viên xử lý nhanh việc đổi món, thời gian chờ hoặc bàn giao.",
      where: "Dashboard và ứng dụng Ordering Merchant",
      columns: [
        {
          title: "Tin nhắn lưu vết theo từng đơn",
          items: [
            {
              body: "Cập nhật trạng thái tự động và tin nhắn trực tiếp giữa cửa hàng, khách và tài xế đều được lưu lại trong hồ sơ đơn.",
            },
            {
              title: "Gọi nhanh khi cần trao đổi gấp",
              body: "Xem ngay số liên hệ khách và tài xế trong màn hình chi tiết đơn khi có tình huống khẩn cấp cần gọi trực tiếp.",
            },
          ],
        },
        {
          title: "Cảnh báo đơn mới tức thời",
          items: [
            {
              body: "Thông báo thời gian thực trên web và di động kèm mã đơn đảm bảo không có đơn nào bị bỏ quên.",
            },
            {
              title: "Lợi ích vận hành",
              body: "Phản hồi kịp thời giúp giảm sai sót món, hạn chế chờ đợi và tránh hủy đơn đáng tiếc.",
            },
          ],
        },
      ],
    },
    {
      id: "printing",
      eyebrow: "In phiếu & bàn giao bếp",
      title: "In phiếu đơn đến đúng vị trí cần xử lý.",
      body: "In phiếu chuẩn bố cục gồm thông tin khách, cửa hàng, chi tiết món/topping và tổng tiền ra máy in nhiệt hoặc trạm bếp.",
      where: "Dashboard và ứng dụng Ordering Merchant",
      subtle: true,
      columns: [
        {
          title: "Nội dung hiển thị đầy đủ trên phiếu",
          items: [
            {
              body: "Tùy chỉnh máy in và khổ giấy để in rõ thông tin khách, cửa hàng, từng món kèm ghi chú, tạm tính, phí giao, tip, phí dịch vụ và tổng thanh toán.",
            },
          ],
        },
        {
          title: "In từ mọi điểm xử lý đơn",
          items: [
            {
              body: "Tự động in khi bấm nhận đơn hoặc in thủ công từ Dashboard web và ứng dụng Merchant trên tablet/điện thoại.",
            },
            {
              title: "Lợi ích vận hành",
              body: "Khu bếp và khu đóng gói nhận đúng mẫu phiếu quen thuộc, giảm tối đa nhầm lẫn giờ cao điểm.",
            },
          ],
        },
      ],
    },
  ],
  postBandsCapabilitiesList: {
    id: "printers",
    eyebrow: "Phần cứng tương thích",
    title: "Kết nối ngay với máy in nhà bếp đang sử dụng.",
    items: [
      {
        title: "Máy in nhiệt Sunmi",
        body: "Kết hợp máy in nhiệt và quét mã vạch trong cùng thiết bị cầm tay hoặc để bàn, in nhanh, pin lớn và hỗ trợ kết nối 4G.",
      },
      {
        title: "Star TSP650II",
        body: "Máy in hóa đơn nhiệt tốc độ 300 mm/s, độ phân giải 203 dpi, hỗ trợ POS truyền thống lẫn tablet/web, in mã vạch 2D và dao cắt giấy tự động.",
      },
      {
        title: "Star TSP654IISK",
        body: "Máy in tem dán nhiệt không đế dành cho nhà hàng, quán cà phê và đồ mang về — in nhãn món, nhãn dị ứng và tem niêm phong túi giao hàng.",
      },
      {
        title: "Star TSP143III",
        body: "Dòng máy in POS linh hoạt với các tùy chọn kết nối WLAN, LAN, Bluetooth hoặc USB.",
      },
      {
        title: "GT Printers",
        body: "Hỗ trợ các dòng GT5000, GT5000S, GT5000W, GT6000S, GT6000SW, GT6000GW tích hợp NFC, hỗ trợ máy quét mã vạch và in đa ngôn ngữ.",
      },
      {
        title: "Kết nối từ xa GPRS/SMS",
        body: `Phù hợp chi nhánh có đường truyền internet không ổn định: thiết bị đầu cuối phát tín hiệu báo đơn mới để quán bấm xác nhận hoặc từ chối trực tiếp. ${BRAND} cũng hỗ trợ tích hợp dòng máy in riêng bạn đang có.`,
      },
    ],
  },
  extraCardGrid: {
    id: "store-controls",
    eyebrow: "Thực đơn, giờ mở cửa & tồn kho",
    title: "Cửa hàng chủ động cập nhật đúng tình hình thực tế.",
    lead: "Các công cụ điều chỉnh cấp cửa hàng đặt ngay cạnh hàng đợi đơn, giúp quản lý giữ thực đơn, khung giờ và tình trạng nhận đơn luôn sát với năng lực bếp.",
    items: [
      {
        title: "Chỉnh sửa thực đơn",
        body: "Cập nhật món ăn, tùy chọn và mô tả trực tiếp ở cấp cửa hàng.",
      },
      {
        title: "Thiết lập khung giờ",
        body: "Cài đặt giờ mở cửa và lịch phục vụ riêng cho giao hàng, mang về và ăn tại bàn theo từng điểm bán.",
      },
      {
        title: "Cập nhật tình trạng món",
        body: "Tạm ẩn món hoặc topping hết trong buổi tối và bật lại ngay khi bếp bổ sung.",
      },
      {
        title: "Bật / tắt nhận đơn quán",
        body: "Tạm dừng hoặc mở lại trạng thái nhận đơn chỉ bằng một chạm khi bếp cần giãn tải.",
      },
      {
        title: "Tài khoản nhân sự theo điểm bán",
        body: "Phân quyền truy cập theo từng chi nhánh cho đúng nhân sự làm việc trong ca.",
      },
      {
        title: "Thông báo vận hành",
        body: "Đảm bảo mọi thay đổi đơn hàng và cảnh báo luôn hiển thị rõ cho đội ngũ phụ trách.",
      },
    ],
  },
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Cửa hàng là mắt xích trung tâm của cùng một đơn hàng.",
    body: "Ordering Merchant nằm trong cùng nền tảng với mọi kênh đặt hàng và luồng giao vận, giúp cửa hàng theo sát đơn từ lúc khách đặt qua khâu bếp tới khi tài xế giao xong.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Tiếp nhận đơn, đẩy bếp & điều phối giao hàng thống nhất",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Điều phối giao hàng",
    title: "Tài xế nội bộ hay đối tác giao vận — xử lý trên cùng một màn hình.",
    body: "Khi đơn giao hàng đã sẵn sàng, cửa hàng chuyển tiếp ngay sang quy trình giao vận đã cấu hình: đội xe riêng, đối tác 3PL hoặc kết hợp linh hoạt.",
    cards: [
      {
        title: "Chuyển sang App Tài xế",
        body: "Đẩy trực tiếp đơn hàng tới ứng dụng tài xế cho mô hình giao hàng bằng đội ngũ nội bộ.",
      },
      {
        title: "Giao hàng bên thứ ba (3PL)",
        body: "Kích hoạt đối tác giao vận đã liên kết đối với các chi nhánh sử dụng mạng lưới tài xế ngoài.",
      },
      {
        title: "Web, iOS và Android",
        body: "Cung cấp không gian làm việc đồng bộ trên trình duyệt, máy tính bảng và điện thoại.",
      },
      {
        title: "Tài khoản theo chi nhánh",
        body: "Quản lý đăng nhập và phạm vi truy cập riêng biệt cho từng đội ngũ cửa hàng.",
      },
    ],
  },
  related: {
    title: "Các thành phần vận hành liên quan.",
    items: [
      {
        label: "Vận hành",
        title: "Vận hành đa chi nhánh",
        body: "Điều phối toàn bộ chuỗi từ một nơi với cấu hình riêng cho từng điểm bán.",
        href: "/platform/multi-location-operations",
      },
      {
        label: "Xây dựng",
        title: "Tổng đài đặt hàng",
        body: "Đội tổng đài nhận đơn qua điện thoại, đơn đổ thẳng về đúng cửa hàng.",
        href: "/platform/ordering-call-center",
      },
      {
        label: "Tích hợp",
        title: "Giao hàng bên thứ ba",
        body: "Kết hợp linh hoạt tài xế riêng và đối tác giao vận ngoài.",
        href: "/platform/third-party-delivery",
      },
      {
        label: "Tích hợp",
        title: "Tích hợp POS",
        body: "Đẩy đơn đã xác nhận thẳng vào hệ thống máy tính tiền POS.",
        href: "/integrations/pos",
      },
    ],
  },
  closingCta: {
    title: "Trải nghiệm hàng đợi đơn ngay trên thực đơn của bạn.",
    body: "Khám phá cách đội ngũ cửa hàng nhận đơn, in bếp và bàn giao giao hàng chỉ trên một ứng dụng.",
    docGuide: { label: "Tổng quan App Cửa hàng", href: "/demo" },
    primaryCta: { label: "Đặt lịch demo", modalTopic: "App Cửa hàng · Demo hướng dẫn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const DASHBOARD_SPEC_VI: PlatformPageSpec = {
  slug: "dashboard",
  template: "catalog",
  metaTitle: "Bảng điều khiển Quản trị Đặt hàng & Giao vận (Dashboard)",
  metaDescription:
    "Cấu hình chi nhánh, thực đơn, đơn hàng, giao vận, marketing, báo cáo và phân quyền nhân sự tập trung trên một bảng điều khiển OPERO Dashboard.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Bảng điều khiển (Dashboard)" },
    ],
    title: "Quản trị chi nhánh, thực đơn, đơn hàng và báo cáo trên một bảng điều khiển.",
    lede: "Dashboard là trung tâm cấu hình toàn bộ nền tảng và theo dõi hoạt động kinh doanh: cửa hàng và thương hiệu, thực đơn, đơn hàng, giao vận, khuyến mãi, báo cáo, nhân sự và tin nhắn.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Chi nhánh, thực đơn & đơn hàng" },
      { text: "Giao vận & marketing" },
      { text: "Báo cáo & phân quyền" },
    ],
  },
  pageIndex: [
    { label: "Tổng quan", href: "#pillars" },
    { label: "Tính năng", href: "#features" },
    { label: "Các phân hệ", href: "#tour" },
    { label: "Vận hành hằng ngày", href: "#capabilities" },
    { label: "Tài liệu", href: "#resources" },
    { label: "Sản phẩm liên quan", href: "#related" },
  ],
  pillars: {
    title: "Những gì đội ngũ của bạn quản trị trong Dashboard.",
    items: [
      {
        title: "Chi nhánh & thương hiệu",
        body: "Quản trị đa chi nhánh, đa thương hiệu, vùng giao hàng, thành phố và hình thức phục vụ từng cửa hàng.",
      },
      {
        title: "Thực đơn & danh mục",
        body: "Không giới hạn số món, tùy chọn theo điều kiện, thực đơn theo lịch, thực đơn dùng chung và quản lý tồn kho.",
      },
      {
        title: "Đơn hàng & giao vận",
        body: "Đơn trực tuyến và đơn nhập tay, điều phối tài xế, quy tắc giao hàng tự động và đối tác giao vận 3PL.",
      },
      {
        title: "Tăng trưởng & báo cáo",
        body: "Mã giảm giá, chương trình ưu đãi nâng cao, kéo lại giỏ bỏ quên, loyalty, báo cáo kinh doanh và xuất dữ liệu.",
      },
    ],
  },
  featureCatalog: {
    title: "88 tính năng, tích hợp sẵn trong mọi gói.",
    categories: [
      {
        category: "Trải nghiệm đặt hàng",
        items: [
          { title: "Đặt bàn trực tuyến", description: "Cấu hình khung giờ giữ bàn và sức chứa song song với luồng đặt món.", href: "/demo" },
          { title: "Đặt suất ăn học đường", description: "Tổ chức quy trình đặt bữa ăn theo lịch riêng cho hệ thống trường học.", href: "/demo" },
          { title: "Đặt hàng B2B", description: "Hỗ trợ danh mục đặt sỉ và đơn định kỳ cho khách hàng doanh nghiệp.", href: "/demo" },
        ],
      },
      {
        category: "Thực đơn & danh mục",
        items: [
          { title: "Không giới hạn sản phẩm & danh mục", description: "Tạo số lượng nhóm món, món ăn và biến thể tùy theo nhu cầu từng quán.", href: "/demo" },
          { title: "Quản lý thực đơn tập trung", description: "Tạo, chỉnh sửa và phát hành thực đơn cho nhiều chi nhánh trên một màn hình.", href: "/demo" },
          { title: "Danh mục cha – con", description: "Nhóm các danh mục lớn khoa học giúp thực đơn nhiều món vẫn dễ duyệt.", href: "/demo" },
          { title: "Tùy chọn món & điều kiện", description: "Thiết lập lựa chọn bắt buộc, topping thêm và logic hiển thị theo điều kiện.", href: "/demo" },
          { title: "Giới hạn số lượng", description: "Đặt mức tối thiểu và tối đa cho từng món hoặc từng nhóm tùy chọn.", href: "/demo" },
          { title: "Nhiều thực đơn trên một quán", description: "Chạy riêng thực đơn sáng, trưa, tối hoặc thực đơn theo mùa cho từng chi nhánh.", href: "/demo" },
          { title: "Thực đơn theo lịch tự động", description: "Tự động bật/tắt thực đơn theo thứ trong tuần và khung giờ cài sẵn.", href: "/demo" },
          { title: "Thực đơn theo hình thức đặt", description: "Tùy chỉnh danh sách món và giá bán riêng cho giao hàng, mang về hay ăn tại bàn.", href: "/demo" },
          { title: "Thực đơn theo kênh bán", description: "Hiển thị danh mục riêng biệt cho website, app, Zalo Mini App, kiosk và tổng đài.", href: "/demo" },
          { title: "Thực đơn dùng chung toàn chuỗi", description: "Duy trì một thực đơn chuẩn cho nhiều cửa hàng kèm quyền tùy biến có kiểm soát.", href: "/demo" },
          { title: "Quản lý tồn kho", description: "Theo dõi số lượng tồn và tự động chặn đặt khi món đã bán hết.", href: "/demo" },
          { title: "Tắt món nhanh 1 chạm", description: "Tạm ngưng bất kỳ món ăn hoặc topping nào ngay trong giờ cao điểm.", href: "/demo" },
          { title: "Chế độ nghỉ lễ & tạm dừng", description: "Tạm đóng cửa hàng hoặc lên lịch nghỉ lễ từ trước.", href: "/demo" },
          { title: "Chi tiết sản phẩm đầy đủ", description: "Gắn mô tả, nhãn, thông tin dị ứng, hình ảnh và thuộc tính cho từng món.", href: "/demo" },
          { title: "Định giá theo trọng lượng", description: "Tính giá linh hoạt theo kg/gram cho thực phẩm tươi sống và đồ đặc sản.", href: "/demo" },
          { title: "Theo dõi giá vốn món", description: "Ghi nhận giá vốn từng món để giám sát biên lợi nhuận theo chi nhánh và kênh bán.", href: "/demo" },
          { title: "Kiểm soát ghi chú đặc biệt", description: "Bật hoặc giới hạn ô ghi chú tự do của khách theo từng món hoặc cửa hàng.", href: "/demo" },
          { title: "Nhập danh mục hàng loạt", description: "Import và cập nhật hàng loạt thực đơn lớn qua file bảng tính.", href: "/demo" },
        ],
      },
      {
        category: "Giỏ hàng, thanh toán & thuế phí",
        items: [
          { title: "Tính thuế tự động", description: "Áp dụng thuế tự động theo chi nhánh, khu vực hoặc từng nhóm món lúc thanh toán.", href: "/demo" },
          { title: "Phí giao hàng theo vùng", description: "Cài phí ship theo khoảng cách, bán kính hoặc vùng đa giác vẽ trên bản đồ.", href: "/demo" },
          { title: "Phí dịch vụ", description: "Thiết lập phí dịch vụ cố định hoặc theo phần trăm cho từng quán hay loại đơn.", href: "/demo" },
          { title: "Phí nền tảng", description: "Cấu hình rõ quy tắc phí sàn hoặc hoa hồng ngay trong tổng thanh toán.", href: "/demo" },
          { title: "Phương thức thanh toán theo kênh", description: "Chọn chính xác cổng thanh toán và tiền mặt/thẻ hiển thị cho từng kênh và loại đơn.", href: "/demo" },
          { title: "Tách dòng tiền (Split payments)", description: "Hỗ trợ chia doanh thu và đối soát tự động nhiều bên khi cấu hình.", href: "/demo" },
        ],
      },
      {
        category: "Quản lý đơn hàng",
        items: [
          { title: "Quản lý đơn thời gian thực", description: "Theo dõi trực tiếp mọi đơn hàng mới từ lúc đặt tới khi giao xong.", href: "/platform/ordering-merchant#order-management" },
          { title: "Tạo đơn thủ công", description: "Lên đơn đặt qua điện thoại, khách tại quầy hoặc đơn hỗ trợ ngay trong Dashboard.", href: "/platform/ordering-call-center" },
          { title: "In phiếu đơn", description: "In phiếu bếp và hóa đơn trực tiếp từ màn hình chi tiết đơn.", href: "/platform/ordering-merchant#printing" },
          { title: "Thời gian chế biến & giao hàng", description: "Cài đặt thời gian chuẩn bị tiêu chuẩn và điều chỉnh linh hoạt giờ cao điểm.", href: "/platform/ordering-merchant" },
          { title: "Cảnh báo mục tiêu thời gian (SLA)", description: "Theo dõi bộ đếm SLA giúp đơn có nguy cơ trễ nổi bật ngay để xử lý kịp thời.", href: "/platform/ordering-merchant" },
          { title: "Hủy đơn & hoàn tiền", description: "Xử lý hủy toàn phần/một phần và ghi nhận hoàn tiền ngay trên đơn.", href: "/demo" },
          { title: "Kiểm duyệt đơn & cảnh báo gian lận", description: "Gắn cờ các đơn bất thường để rà soát thủ công trước khi chế biến.", href: "/demo" },
          { title: "Bộ lọc đơn chuyên sâu", description: "Lọc nhanh theo chi nhánh, trạng thái, tài xế, thanh toán, ngày và thành phố.", href: "/platform/ordering-merchant#find-and-report" },
          { title: "Chat trực tiếp trong đơn", description: "Nhắn tin với khách hàng và tài xế trong luồng hội thoại lưu vết gắn kèm đơn.", href: "/platform/ordering-merchant#stay-in-touch" },
          { title: "Phiếu hỗ trợ (Support tickets)", description: "Theo dõi và giải quyết tập trung các yêu cầu hỗ trợ phát sinh từ đơn hàng.", href: "/demo" },
        ],
      },
      {
        category: "Cửa hàng & chi nhánh",
        items: [
          { title: "Quản lý đa chi nhánh", description: "Vận hành từ 1 quán lẻ, chuỗi khu vực đến hàng trăm điểm bán trên cùng hệ thống.", href: "/platform/multi-location-operations" },
          { title: "Thiết lập hồ sơ cửa hàng", description: "Cấu hình địa chỉ, giờ mở cửa, liên hệ, hình ảnh và quy tắc riêng từng quán.", href: "/platform/multi-location-operations" },
          { title: "Chủ sở hữu đa điểm bán", description: "Gán chủ nhượng quyền hoặc quản lý vùng phụ trách đúng nhóm chi nhánh của họ.", href: "/platform/multi-location-operations" },
          { title: "Quản trị đa thương hiệu", description: "Nhóm các điểm bán dưới nhiều thương hiệu con với bộ nhận diện riêng.", href: "/platform/multi-location-operations" },
          { title: "Vùng giao hàng", description: "Vẽ vùng giao theo đa giác, bán kính hoặc mã bưu chính cho từng chi nhánh.", href: "/platform/ordering-delivery" },
          { title: "Vùng giao hàng dùng chung", description: "Tái sử dụng khu vực giao hàng chuẩn hóa cho các chi nhánh lân cận.", href: "/platform/ordering-delivery" },
          { title: "Phân nhóm theo thành phố", description: "Tổ chức chi nhánh, vùng giao và đội ngũ vận hành theo từng tỉnh/thành phố.", href: "/platform/multi-location-operations" },
          { title: "Hình thức phục vụ theo quán", description: "Bật/tắt độc lập giao hàng, mang về, nhận ngoài lề hay ăn tại bàn cho từng quán.", href: "/demo" },
          { title: "Đăng ký & duyệt đối tác mới", description: "Quy trình đăng ký và phê duyệt gian hàng mới cho mô hình đa nhà bán.", href: "/solutions#marketplaces" },
          { title: "Hóa đơn & bảng kê cửa hàng", description: "Tổng hợp sao kê định kỳ và hóa đơn đối soát cho từng cửa hàng tham gia.", href: "/demo" },
          { title: "Quản lý Kiosk", description: "Cấu hình và giám sát hệ thống kiosk tự phục vụ tại quán từ Dashboard.", href: "/platform/ordering-kiosk" },
        ],
      },
      {
        category: "Giao hàng & tài xế",
        items: [
          { title: "Bản đồ điều phối giao hàng", description: "Theo dõi đơn đang giao, vị trí tài xế và vùng phủ trực tiếp trên một bản đồ.", href: "/platform/ordering-delivery" },
          { title: "Không giới hạn tài xế", description: "Thêm bao nhiêu tài xế nội bộ hoặc cộng tác viên tùy nhu cầu vận hành.", href: "/platform/driver-app" },
          { title: "Quản lý hồ sơ tài xế", description: "Lưu hồ sơ, phương tiện, giấy tờ và trạng thái hoạt động của từng tài xế.", href: "/platform/driver-app" },
          { title: "Nhóm tài xế", description: "Phân nhóm tài xế theo cửa hàng, thành phố hoặc vùng để điều phối chính xác.", href: "/platform/ordering-delivery" },
          { title: "Gán đơn thủ công", description: "Chủ động gán hoặc đổi tài xế cho đơn bất kỳ khi có tình huống phát sinh.", href: "/platform/ordering-delivery" },
          { title: "Tự động điều phối", description: "Tự động gán đơn sẵn sàng dựa trên khoảng cách, số đơn đang cầm và ca trực.", href: "/platform/ordering-delivery" },
          { title: "Gom đơn theo tuyến (Batching)", description: "Gộp các đơn gần nhau vào cùng một chuyến để giao nhanh và tiết kiệm chi phí.", href: "/platform/ordering-delivery" },
          { title: "Lịch sử hành trình tài xế", description: "Xem lại lộ trình và nhật ký GPS của các chuyến giao đã hoàn tất.", href: "/platform/driver-app" },
          { title: "Cấu hình App Tài xế", description: "Thiết lập quy tắc bằng chứng giao hàng, kiểm tra vị trí và quyền trên app.", href: "/platform/driver-app" },
          { title: "Lịch trực tài xế", description: "Sắp xếp khung giờ hoạt động của từng tài xế và đội xe.", href: "/platform/driver-app" },
          { title: "Trạng thái sẵn sàng tài xế", description: "Nắm bắt trực tiếp ai đang online, đang đi giao hay đã kết ca.", href: "/platform/ordering-delivery" },
          { title: "Giao hàng bên thứ ba (3PL)", description: "Kết nối mạng lưới giao vận ngoài với chọn báo giá và dự phòng tự động.", href: "/platform/third-party-delivery" },
          { title: "Quản lý đối tác giao vận", description: "Quản trị các công ty giao hàng đối tác và khu vực phụ trách tương ứng.", href: "/platform/third-party-delivery" },
          { title: "Bảng kê thu nhập tài xế", description: "Tổng hợp chi phí giao hàng và đối soát thanh toán cho tài xế.", href: "/platform/ordering-delivery" },
        ],
      },
      {
        category: "Marketing & khách hàng thân thiết",
        items: [
          { title: "Mã giảm giá & coupon", description: "Tạo mã khuyến mãi kèm giới hạn lượt dùng, thời hạn và phạm vi cửa hàng.", href: "/demo" },
          { title: "Chương trình ưu đãi nâng cao", description: "Chạy khuyến mãi theo %, giảm tiền cố định, mua 1 tặng 1 và đơn tối thiểu.", href: "/demo" },
          { title: "Kéo lại giỏ hàng bỏ quên", description: "Nhắc nhở tự động khách chưa hoàn tất thanh toán quay lại chốt đơn.", href: "/demo" },
          { title: "Theo dõi giỏ hàng đang mở", description: "Xem các giỏ đang chọn món để hiểu điểm rơi và tối ưu tỷ lệ chuyển đổi.", href: "/demo" },
          { title: "Ví tiền mặt & hoàn tiền", description: "Cấp số dư ví và hoàn tiền trực tiếp để khách tiêu dùng ở lần đặt sau.", href: "/demo" },
          { title: "Ví tích điểm", description: "Tự động cộng điểm thưởng theo giá trị đơn để đổi quà hoặc trừ tiền.", href: "/demo" },
          { title: "Hạng thành viên (Loyalty levels)", description: "Thiết lập phân hạng thành viên mở khóa đặc quyền cho khách quen.", href: "/demo" },
          { title: "Thẻ quà tặng (Gift cards)", description: "Phát hành và đổi thẻ quà tặng điện tử xuyên suốt các kênh đặt hàng.", href: "/demo" },
          { title: "Tự động hóa marketing", description: "Kích hoạt tin nhắn và ưu đãi tự động theo hành vi đặt món của khách.", href: "/demo" },
          { title: "Công cụ tăng trưởng khách hàng", description: "Chạy chiến dịch tăng tần suất quay lại và giá trị trung bình mỗi đơn.", href: "/demo" },
          { title: "Giới thiệu bạn bè", description: "Thưởng điểm hoặc voucher cho khách cũ khi bạn bè được mời đặt đơn đầu tiên.", href: "/demo" },
          { title: "Hồ sơ khách hàng 360°", description: "Tra cứu đầy đủ lịch sử đơn, địa chỉ, số dư ví và sở thích của từng khách.", href: "/demo" },
        ],
      },
      {
        category: "Báo cáo & đánh giá",
        items: [
          { title: "Báo cáo kinh doanh", description: "Theo dõi doanh thu, sản lượng đơn, hiệu quả từng kênh và xu hướng theo chi nhánh.", href: "/demo" },
          { title: "Báo cáo chốt ca cuối ngày", description: "Tổng kết doanh thu cuối ngày rõ ràng theo phương thức thanh toán, thuế và số đơn.", href: "/demo" },
          { title: "Bộ lọc báo cáo nâng cao", description: "Phân tích sâu theo khoảng thời gian, thương hiệu, điểm bán và kênh bán.", href: "/demo" },
          { title: "Báo cáo hiệu suất tài xế", description: "Đo thời gian giao trung bình, tỷ lệ giao thành công và hiệu quả đội xe.", href: "/platform/ordering-delivery" },
          { title: "Xuất dữ liệu CSV", description: "Xuất nhanh bảng đơn hàng, doanh thu và danh sách khách hàng theo bộ lọc.", href: "/demo" },
          { title: "Đánh giá & xếp hạng", description: "Thu thập, kiểm duyệt và phản hồi đánh giá khách hàng cho từng quán và tài xế.", href: "/demo" },
          { title: "Nhật ký hoạt động (Activity logs)", description: "Lưu vết mọi thay đổi cấu hình và thao tác vận hành của từng tài khoản nhân sự.", href: "/demo" },
        ],
      },
      {
        category: "Quản trị & bảo mật",
        items: [
          { title: "Admin Dashboard tập trung", description: "Mặt phẳng điều khiển trung tâm cho đội ngũ vận hành nền tảng và trụ sở chính.", href: "/platform/dashboard" },
          { title: "Dashboard mang thương hiệu riêng", description: "Tùy chỉnh logo và màu sắc nhận diện cho giao diện quản trị nội bộ.", href: "/demo" },
          { title: "Phân quyền người dùng chi tiết", description: "Thiết lập quyền riêng cho quản trị viên, quản lý vùng, chủ quán và tổng đài viên.", href: "/platform/multi-location-operations" },
          { title: "Cấu hình hệ thống chung", description: "Thiết lập mặc định cho quy trình thanh toán, ngôn ngữ, tiền tệ và vận hành.", href: "/demo" },
          { title: "Quản lý phiên đăng nhập", description: "Giám sát và thu hồi các phiên đăng nhập đang hoạt động để tăng bảo mật.", href: "/demo" },
        ],
      },
      {
        category: "Tích hợp & công cụ mở rộng",
        items: [
          { title: "Ordering Connect", description: "Kết nối POS, cổng thanh toán, mạng lưới giao hàng và ứng dụng CRM.", href: "/integrations" },
          { title: "Tích hợp kênh sàn", description: "Đưa đơn hàng từ các kênh đối tác được hỗ trợ về chung luồng vận hành.", href: "/integrations" },
        ],
      },
    ],
    footnote: "Cùng 10+ tính năng lõi hoạt động xuyên suốt toàn bộ nền tảng. Xem danh sách đầy đủ trong mục tính năng.",
    cta: { label: "Xem toàn bộ danh mục tính năng", href: "/pricing#pricing-features" },
  },
  screensWalkthrough: {
    id: "tour",
    eyebrow: "Các phân hệ Dashboard",
    title: "Khám phá từng màn hình làm việc của đội ngũ bạn.",
    lead: "Mỗi phân hệ tập trung vào một mảng vận hành rõ ràng, từ hàng đợi đơn mới đến cấu hình lõi của toàn hệ thống.",
    caption: "Màn hình Dashboard minh họa với cửa hàng và dữ liệu mẫu.",
    items: [
      {
        title: "Đơn hàng: kiểm soát mọi đơn đến",
        body: "Theo dõi đơn thời gian thực với cột trạng thái, cửa hàng, khách hàng, tài xế cùng bộ đếm SLA và bộ lọc tức thì.",
      },
      {
        title: "Tin nhắn: liên hệ ngay trong vài click",
        body: "Mở bất kỳ hội thoại đơn hàng nào ngay trong phân hệ Tin nhắn để phối hợp với khách, cửa hàng hoặc tài xế.",
      },
      {
        title: "Cửa hàng: quản trị toàn bộ chi nhánh trên 1 màn hình",
        body: "Cập nhật hình ảnh, danh mục, thực đơn, vùng giao hàng và bật/tắt cửa hàng từ một danh bạ duy nhất.",
      },
      {
        title: "Người dùng: tệp khách hàng & phân quyền đội ngũ",
        body: "Tra cứu hồ sơ khách, lịch sử mua hàng và phân quyền cho trụ sở chính, quản lý và nhân sự điểm bán.",
      },
      {
        title: "Phân tích kinh doanh (BI): số liệu cho quyết định tiếp theo",
        body: "Xem bản đồ đơn trực tiếp, biểu đồ doanh thu, so sánh kênh bán và báo cáo nâng cao.",
      },
      {
        title: "Giao vận: tài xế, điều phối, nhóm xe & đối tác",
        body: "Thiết lập trạng thái tài xế, đội xe theo khu vực, luật điều phối tự động và kết nối đơn vị giao hàng ngoài.",
      },
      {
        title: "Cài đặt: quy tắc lõi của cả nền tảng",
        body: "Kiểm soát hành vi thanh toán, ngôn ngữ, tiền tệ, thông báo và cấu hình bảo mật toàn hệ thống.",
      },
    ],
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Vận hành hằng ngày",
    title: "Chủ động trước tình trạng hết món và thay đổi đơn.",
    items: [
      {
        title: "Cảnh báo sắp hết hàng",
        body: "Nhận cảnh báo sớm khi món sắp hết hoặc hết hàng thay vì để khách đặt phải món không còn.",
      },
      {
        title: "Chỉnh sửa đơn đã đặt",
        body: "Cập nhật trực tiếp món trong đơn ngay tại phân hệ Đơn hàng thay vì phải hủy đi đặt lại từ đầu.",
      },
    ],
  },
  extraCardGrid: {
    id: "resources",
    title: "Tìm hiểu thêm về Dashboard",
    items: [
      {
        title: "Hướng dẫn sử dụng Ordering Dashboard",
        body: "Mọi chi tiết từng phân hệ trong Dashboard được trình bày rõ ràng trong tài liệu hướng dẫn.",
        href: "/demo",
      },
    ],
  },
  related: {
    title: "Các sản phẩm vận hành khác",
    items: [
      {
        title: "App Cửa hàng (Merchant App)",
        body: "Đội ngũ cửa hàng tiếp nhận và xử lý đơn trên máy tính bảng hoặc điện thoại.",
        href: "/platform/ordering-merchant",
      },
      {
        title: "App Tài xế (Driver App)",
        body: "Tài xế nhận chuyến, dẫn đường và xác nhận hoàn tất giao hàng.",
        href: "/platform/driver-app",
      },
    ],
  },
  closingCta: {
    title: "Xem Dashboard vận hành thực tế cùng quy trình của bạn.",
    body: "Chia sẻ cách bạn đang bán và giao hàng để đội ngũ cùng demo đúng các phân hệ phù hợp.",
    docGuide: { label: "Dashboard", href: "/demo" },
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Dashboard · Demo hướng dẫn" },
    secondaryCta: { label: "Xem bảng giá", href: "/pricing" },
  },
};

export const MULTI_LOCATION_OPERATIONS_SPEC_VI: PlatformPageSpec = {
  slug: "multi-location-operations",
  template: "showcase",
  metaTitle: "Vận hành đa chi nhánh",
  metaDescription:
    "Điều hành mạng lưới nhiều điểm bán với góc nhìn trụ sở, khu vực và cửa hàng, thực đơn chuẩn kèm tùy biến địa phương và phân quyền theo từng nhóm.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Vận hành", href: "/products#operate" },
      { label: "Vận hành đa chi nhánh" },
    ],
    title: "Điều hành mọi chi nhánh trên góc nhìn thiết kế đúng phạm vi phụ trách.",
    lede: "Vận hành chuỗi cần nhiều hơn một danh sách cửa hàng. Dù là chuỗi sở hữu trực tiếp, tập đoàn đa thương hiệu hay mạng lưới nhượng quyền, trụ sở chính, quản lý khu vực và cửa hàng đều cần góc nhìn rõ phạm vi mình phụ trách, thực đơn chuẩn dùng chung và quy tắc chỉnh sửa minh bạch.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Góc nhìn mạng lưới theo cấp độ" },
      { text: "Thực đơn chuẩn & tùy biến điểm bán" },
      { text: "Phân quyền theo chi nhánh & vai trò" },
    ],
  },
  pillars: {
    eyebrow: "Vận hành đa chi nhánh",
    title: "Bốn bài toán vận hành mà mọi chuỗi cần giải quyết rõ ràng.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Một góc nhìn toàn mạng lưới",
        body: "Giúp từng vai trò theo dõi chính xác nhóm chi nhánh mình phụ trách và các đơn hàng cần chú ý.",
      },
      {
        label: "02",
        title: "Thực đơn chuẩn, tùy biến địa phương",
        body: "Thiết lập cấu trúc thực đơn tập trung, đồng thời quy định rõ những gì chi nhánh được điều chỉnh về tồn kho, giá hay giờ bán.",
      },
      {
        label: "03",
        title: "Vai trò & phân quyền chuẩn xác",
        body: "Khớp quyền truy cập với trách nhiệm: cửa hàng quản lý điểm bán của mình, quản lý vùng nắm khu vực và trụ sở giám sát toàn chuỗi.",
      },
      {
        label: "04",
        title: "Cập nhật hàng loạt có kiểm soát",
        body: "Đồng bộ thay đổi cho một nhóm chi nhánh cùng lúc kèm bước phê duyệt rõ ràng trước khi áp dụng.",
      },
    ],
  },
  features: {
    title: "Thiết kế góc nhìn chuỗi xoay quanh các quyết định vận hành.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Góc nhìn mạng lưới cho trụ sở chính",
        body: "Cung cấp bức tranh súc tích về trạng thái hoạt động của từng điểm bán và các đầu việc cần quyết định ở cấp chuỗi.",
      },
      {
        title: "Góc nhìn quản lý khu vực",
        body: "Cùng một giao diện quản trị quen thuộc nhưng lọc gọn đúng danh sách cửa hàng trong khu vực phụ trách.",
      },
      {
        title: "Bộ lọc chi nhánh, khu vực & thương hiệu",
        body: "Phản ánh chính xác cấu trúc tổ chức thực tế của doanh nghiệp theo điểm bán, vùng địa lý và thương hiệu con.",
      },
      {
        title: "Thực đơn chuẩn (Master catalog)",
        body: "Nơi đội ngũ trung tâm xây dựng danh mục, món ăn và tùy chọn làm chuẩn chung cho toàn chuỗi.",
      },
      {
        title: "Tùy biến cục bộ theo chi nhánh",
        body: "Quy định rõ phần thông tin đặc thù tại quán như tình trạng món, giờ mở cửa, vùng giao và giới hạn cho phép.",
      },
      {
        title: "Đẩy thay đổi đồng loạt nhiều cửa hàng",
        body: "Tạo luồng cập nhật lặp lại được cho nhóm cửa hàng đã chọn từ khâu rà soát tới áp dụng.",
      },
      {
        title: "Tồn kho độc lập theo điểm bán",
        body: "Quản lý tồn kho riêng của từng quán ngay trên thực đơn chung để tránh bán nhầm món đã hết tại một chi nhánh.",
      },
    ],
  },
  stepsSplit: {
    id: "permissions",
    eyebrow: "Vai trò & phân quyền",
    title: "Trao cho mỗi vai trò vận hành một phạm vi rõ ràng.",
    lead: "Đội ngũ tại điểm bán, quản lý vùng và trụ sở chính cần biết chính xác phạm vi dữ liệu mình thấy, thay đổi được phép làm và báo cáo cần theo dõi — dù là chi nhánh tự vận hành hay nhượng quyền.",
    sideCards: [
      {
        title: "Cấp mạng lưới",
        body: "Trụ sở chính và quản lý khu vực quản trị tiêu chuẩn thực đơn, đợt triển khai đồng loạt và đánh giá toàn vùng.",
      },
      {
        title: "Cấp điểm bán",
        body: "Quản lý cửa hàng và chủ nhượng quyền chủ động tình trạng món hằng ngày, giờ mở ca và xử lý đơn trực tiếp.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Phân phạm vi theo chi nhánh",
        body: "Gắn mỗi vai trò với đúng cửa hàng, khu vực hoặc thương hiệu phụ trách để màn hình mở ra đúng ngữ cảnh.",
      },
      {
        num: "02",
        title: "Phân phạm vi theo cấu hình",
        body: "Tách bạch rõ thiết lập nào do trung tâm quyết định và thiết lập nào điểm bán được tự điều chỉnh.",
      },
      {
        num: "03",
        title: "Phân phạm vi theo báo cáo",
        body: "Đồng bộ quyền xem báo cáo với phạm vi vận hành để số liệu đến đúng người ra quyết định.",
      },
    ],
  },
  secondaryStepsSplit: {
    id: "reports",
    eyebrow: "Báo cáo đa cấp",
    title: "Đánh giá chuỗi ở đúng cấp độ ra quyết định.",
    lead: "Mỗi cấp quản lý — cửa hàng, khu vực và toàn chuỗi — cần trả lời những câu hỏi khác nhau với góc nhìn dữ liệu tương ứng.",
    steps: [
      {
        num: "01",
        title: "Theo từng chi nhánh",
        body: "Giúp quản lý cửa hàng tập trung vào sản lượng đơn, hiệu suất chế biến và vấn đề cần xử lý ngay tại quán.",
      },
      {
        num: "02",
        title: "Theo khu vực",
        body: "Giúp quản lý vùng so sánh hiệu quả giữa các cửa hàng cùng khu vực địa lý hoặc cùng mô hình.",
      },
      {
        num: "03",
        title: "Theo thương hiệu",
        body: "Giúp tập đoàn đa thương hiệu theo dõi tính đồng nhất và tăng trưởng riêng của từng nhãn hàng.",
      },
      {
        num: "04",
        title: "Theo kênh bán & kỳ báo cáo",
        body: "Đối chiếu kết quả giữa website, app, Zalo Mini App, tổng đài theo ngày, tuần, tháng theo nhịp vận hành của bạn.",
      },
    ],
  },
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Minh bạch hóa mô hình vận hành trên toàn bộ mạng lưới.",
    body: "Một hệ thống đồng bộ kết nối chặt kênh đặt hàng, phạm vi cửa hàng, thực đơn chuẩn, quy tắc giao vận và đúng nhân sự hành động.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Phạm vi chuỗi, thực đơn chuẩn & phân quyền từng quán",
    bottomRow: ["Góc nhìn chuỗi", "App Cửa hàng", "POS", "Báo cáo"],
  },
  control: {
    eyebrow: "Trung tâm & chi nhánh",
    title: "Thiết lập chuẩn một lần ở trụ sở. Để mỗi quán vận hành mượt mỗi ngày.",
    body: "Đội trung tâm nắm giữ các chuẩn mực cần đồng nhất; đội cửa hàng làm chủ thông tin biến động theo ca trực. Thống nhất ranh giới đó trước khi nhân rộng.",
    cards: [
      {
        title: "Cập nhật hàng loạt",
        body: "Xác định rõ thay đổi nào áp dụng cho nhóm cửa hàng nào cùng quy trình rà soát trước khi áp dụng.",
      },
      {
        title: "Thực đơn chuẩn",
        body: "Duy trì cấu trúc món chung rõ ràng trong khi ghi nhận cụ thể các mục được phép tùy biến tại quán.",
      },
      {
        title: "Vai trò & phân quyền",
        body: "Ánh xạ chính xác trách nhiệm của chi nhánh, khu vực và trụ sở vào đúng quyền trên hệ thống.",
      },
      {
        title: "Một góc nhìn toàn mạng lưới",
        body: "Tổng hợp bức tranh cấp cửa hàng, khu vực và thương hiệu giúp ra quyết định nhanh dựa trên dữ liệu thực.",
      },
    ],
  },
  related: {
    title: "Các giải pháp liên quan cho hệ thống chuỗi.",
    items: [
      {
        label: "Xây dựng",
        title: "Đặt hàng đa chi nhánh",
        body: "Cách khách tìm đúng chi nhánh và đặt từ thực đơn, giá, giờ bán của cửa hàng đó.",
        href: "/platform/multi-store-ordering",
      },
      {
        label: "Giải pháp",
        title: "Chuỗi nhượng quyền",
        body: "Cách trụ sở giữ chuẩn thương hiệu và trao quyền cho từng đại lý nhượng quyền.",
        href: "/solutions/franchises",
      },
      {
        label: "Vận hành",
        title: "App Cửa hàng",
        body: "Nơi từng chi nhánh tiếp nhận và xử lý trực tiếp đơn hàng của mình.",
        href: "/platform/ordering-merchant",
      },
      {
        label: "Giải pháp",
        title: "Doanh nghiệp lớn (Enterprise)",
        body: "Lộ trình triển khai, tích hợp chuyên sâu và hỗ trợ cho mạng lưới quy mô lớn.",
        href: "/solutions/enterprise",
      },
    ],
  },
  closingCta: {
    title: "Nhìn toàn bộ mạng lưới chuỗi của bạn trên một màn hình.",
    body: "Chia sẻ cơ cấu chi nhánh, các ngoại lệ địa phương và phân quyền nhân sự để cùng thiết kế mô hình vận hành chuẩn trước khi rollout.",
    primaryCta: { label: `Trao đổi với ${BRAND}`, modalTopic: "Vận hành đa chi nhánh · Buổi tư vấn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const ORDERING_DELIVERY_SPEC_VI: PlatformPageSpec = {
  slug: "ordering-delivery",
  template: "showcase",
  metaTitle: "Ordering Delivery — Quản lý giao hàng & điều phối",
  metaDescription:
    "Ordering Delivery đưa vùng giao hàng, biểu phí, trạng thái tài xế và điều phối tự động vào chung một quy trình vận hành đơn hàng.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Vận hành", href: "/products#operate" },
      { label: "Quản lý giao hàng" },
    ],
    title: "Hệ thống giao hàng do bạn tự cấu hình, không phải đi thuê ngoài phụ thuộc.",
    lede: "Ordering Delivery hợp nhất vùng giao hàng, quy tắc tính phí và trạng thái tài xế trên một quy trình duy nhất. Chủ động vận hành đội xe nội bộ, kết nối đối tác giao hàng hoặc chạy mô hình lai mà mọi bước đều gắn liền với đơn hàng.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Tự động điều phối" },
      { text: "Đội xe riêng, đối tác 3PL hoặc kết hợp" },
    ],
  },
  pageIndex: [
    { label: "Tổng quan", href: "#pillars" },
    { label: "Tính năng", href: "#features" },
    { label: "Điều phối", href: "#dispatch-rules" },
    { label: "Bảng điều phối giao hàng", href: "#dashboards" },
    { label: "Theo dõi & bằng chứng giao", href: "#capabilities" },
    { label: "Trước khi cấu hình", href: "#questions" },
    { label: "Giao không tiếp xúc", href: "#contactless" },
    { label: "Mô hình đội xe", href: "#models" },
    { label: "Kết nối", href: "#connected" },
    { label: "Kiểm soát", href: "#control" },
  ],
  pillars: {
    eyebrow: "Quản lý giao hàng",
    title: "Bốn nhóm thiết lập vận hành trọn vẹn chặng giao cuối.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Vùng giao & biểu phí",
        body: "Xác định phạm vi phục vụ và quy tắc phí giao riêng cho từng cửa hàng theo khu vực và khung giờ.",
      },
      {
        label: "02",
        title: "Luật điều phối tự động",
        body: "Dùng quy tắc gán chuyến và phương án dự phòng để đẩy đơn tới đúng đội xe hoặc đối tác phù hợp.",
      },
      {
        label: "03",
        title: "App Tài xế (Driver App)",
        body: "Tài xế nhận điểm lấy hàng, lộ trình dẫn đường, thông tin khách và ghi nhận bằng chứng giao trên iOS & Android.",
      },
      {
        label: "04",
        title: "Theo dõi trực tiếp",
        body: "Giữ trạng thái giao vận gắn liền với hồ sơ đơn từ lúc rời bếp đến khi trao tận tay khách.",
      },
    ],
  },
  features: {
    title: "Những gì bạn có thể tùy chỉnh theo từng quán và từng vùng.",
    actionLink: { label: "Tất cả tính năng", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Vùng giao hàng linh hoạt",
        body: "Vẽ phạm vi phục vụ riêng cho từng cửa hàng kèm quy tắc tính phí và thời gian giao tương ứng.",
      },
      {
        title: "Biểu phí & giá trị đơn tối thiểu",
        body: "Thiết lập phí giao hàng, miễn phí theo ngưỡng đơn và đơn tối thiểu ngay trong cấu hình vùng.",
      },
      {
        title: "Lịch hoạt động & đơn hẹn trước",
        body: "Đồng bộ lịch mở cửa và thời gian chuẩn bị bếp với khung giờ điều phối giao hàng.",
      },
      {
        title: "Nhóm tài xế & ca trực",
        body: "Phân bổ tài xế theo chi nhánh hoặc khu vực và lấy trạng thái sẵn sàng làm dữ liệu điều phối.",
        href: "/platform/driver-app",
      },
      {
        title: "Đối soát thu hộ & thanh toán",
        body: "Gắn kết dòng tiền thu hộ (COD) và công giao hàng trực tiếp với hồ sơ tài xế và đơn hàng.",
      },
      {
        title: "Đo lường hiệu suất giao",
        body: "Theo dõi thời gian giao và tỷ lệ hoàn tất theo từng tài xế, chi nhánh và khu vực.",
      },
    ],
  },
  stepsSplit: {
    id: "dispatch-rules",
    eyebrow: "Quy tắc điều phối",
    title: "Từ hàng đợi bếp tới tận cửa nhà khách, không cần gọi điện điều xe thủ công.",
    lead: "Hệ thống chuyển hóa đơn sẵn sàng thành chuyến giao dựa trên vùng phủ, biểu phí và trạng thái tài xế trước khi gán nội bộ hay chuyển đối tác.",
    steps: [
      {
        num: "01",
        title: "Đơn đi vào hàng đợi",
        body: "Đơn giao hàng được tiếp nhận kèm đầy đủ thông tin chi nhánh, địa chỉ và thời gian hẹn.",
      },
      {
        num: "02",
        title: "Xác định vùng & phí giao",
        body: "Đối chiếu vùng phủ và quy tắc cửa hàng để xác định phương án giao hàng phù hợp.",
        tag: "Vùng phủ & quy tắc",
      },
      {
        num: "03",
        title: "Tự động gán tài xế",
        body: "Gán chuyến tự động cho tài xế nội bộ đang trực dựa trên khoảng cách, tải đơn và ca làm việc.",
        tag: "Đội xe nội bộ",
      },
      {
        num: "04",
        title: "Dự phòng sang đối tác 3PL",
        body: "Tự động chuyển sang mạng lưới giao vận đối tác khi đội xe nội bộ quá tải hoặc ngoài phạm vi.",
        tag: "Mạng lưới đối tác",
      },
      {
        num: "05",
        title: "Khách theo dõi trực tiếp",
        body: "Tiến độ giao hàng cập nhật liên tục ngay trên link theo dõi đơn mang thương hiệu của bạn.",
        tag: "Giữ trọn ngữ cảnh đơn",
      },
    ],
  },
  screensWalkthrough: {
    id: "dashboards",
    eyebrow: "Bảng điều phối giao hàng",
    title: "Bốn góc nhìn trên cùng một hoạt động giao vận.",
    lead: "Mỗi màn hình phục vụ đúng một nhu cầu điều hành — từ danh sách đơn, bản đồ vùng giao đến theo dõi toàn đội xe đang di chuyển.",
    caption: "Màn hình minh họa với cửa hàng và đơn hàng mẫu.",
    items: [
      {
        title: "Bảng điều phối giao hàng: danh sách đơn & bản đồ vùng phủ",
        body: "Xem danh sách đơn cần giao ngay cạnh bản đồ trực tiếp hiển thị các vùng giao hàng đã cấu hình.",
      },
      {
        title: "Bảng tiến độ đơn giao: từ chờ nhận tới hoàn tất",
        body: "Theo dõi từng mốc trạng thái của mỗi đơn giao hàng xuyên suốt từ lúc xác nhận tới khi trao khách.",
      },
      {
        title: "Bảng điều phối tổng hợp: đơn hàng, tài xế & bản đồ trên 1 màn hình",
        body: "Kết hợp quản lý đơn, trạng thái tài xế sẵn sàng và ghim vị trí thời gian thực để điều phối tức thì.",
      },
      {
        title: "Bảng theo dõi đội xe: toàn bộ tài xế trực tuyến",
        body: "Nắm vị trí mọi tài xế đang hoạt động trong khu vực và cân bằng số đơn giữa các chuyến nhanh chóng.",
      },
    ],
  },
  preBandsCapabilitiesLists: [
    {
      id: "capabilities",
      eyebrow: "Theo dõi, cảnh báo & bằng chứng giao",
      title: "Những gì bảng điều phối giúp đội ngũ bạn nhìn thấy và xử lý.",
      items: [
        {
          title: "Theo dõi GPS thời gian thực",
          body: "Xem vị trí hiện tại của từng phương tiện và thời gian đến dự kiến (ETA). Tài xế dùng GPS dẫn đường tránh kẹt xe và giao đúng hẹn.",
        },
        {
          title: "Tổng quan trạng thái đơn",
          body: "Tóm tắt trực quan các đơn chờ gán, đang giao, đã hoàn tất hoặc có nguy cơ trễ ngay trên dashboard.",
        },
        {
          title: "Quản lý & ưu tiên đơn giao",
          body: "Tạo, chỉnh sửa đơn giao hàng, điều chỉnh tài xế phụ trách và gắn mức độ ưu tiên khi cần.",
        },
        {
          title: "Gom tuyến theo tình hình giao thông",
          body: "Tích hợp Google Maps tính toán mật độ giao thông để ước lượng giờ giao chuẩn và gom đơn cùng chiều.",
        },
        {
          title: "Cảnh báo sự kiện quan trọng",
          body: "Thiết lập cảnh báo tức thì khi đơn bị giao trễ, không có tài xế nhận hoặc bị hủy.",
        },
        {
          title: "Ghi chú giao hàng chi tiết",
          body: "Hiển thị rõ yêu cầu riêng của khách, khung giờ hẹn và lưu ý bảo quản món ngay trên app tài xế.",
        },
        {
          title: "Bằng chứng giao hàng (POD)",
          body: "Tài xế xác nhận giao xong bằng mã PIN, ảnh chụp, video hoặc chữ ký khách hàng — minh bạch và giảm tranh chấp.",
        },
        {
          title: "Khóa đổi trạng thái theo vị trí GPS",
          body: "Chỉ cho phép tài xế bấm đã lấy món khi đang ở gần quán và bấm đã giao khi tới gần địa chỉ khách theo bán kính mét bạn cài đặt.",
        },
        {
          title: "Công cụ liên lạc tích hợp",
          body: "Điều phối viên, tài xế và khách hàng trao đổi trực tiếp ngay trong hệ thống khi kích hoạt.",
        },
        {
          title: "Chỉ số hiệu suất giao vận",
          body: "Theo dõi tỷ lệ giao thành công, thời gian giao trung bình, chi phí giao mỗi đơn và mức độ hài lòng của khách.",
        },
        {
          title: "Phản hồi khách hàng gắn kèm chuyến",
          body: "Đánh giá và góp ý của khách hiển thị ngay cạnh dữ liệu chuyến giao để kịp thời cải thiện chất lượng.",
        },
      ],
    },
    {
      id: "questions",
      eyebrow: "Trước khi cấu hình",
      title: "Những câu hỏi nên thống nhất cùng đội giao vận & chăm sóc khách hàng.",
      items: [
        { title: "Sự kiện nào cần bắn cảnh báo và bộ phận nào sẽ tiếp nhận?" },
        { title: "Đội ngũ cần theo dõi những chỉ số hiệu suất nào và theo tần suất nào?" },
        { title: "Phản hồi của khách nên hiển thị trực tiếp trên dashboard hay xử lý ở kênh riêng?" },
        { title: "Loại đơn giao nào cần điều phối viên gán thủ công?" },
        { title: "Tài xế cần ở trong bán kính bao nhiêu mét so với quán/khách để được đổi trạng thái?" },
        { title: "Tài xế được cấp những kênh liên lạc nào với cửa hàng và khách hàng?" },
      ],
    },
  ],
  capabilityBands: [
    {
      id: "contactless",
      eyebrow: "Tùy chọn bàn giao",
      title: "Hỗ trợ khách chọn giao hàng không tiếp xúc.",
      body: "Khách chọn để đồ trước cửa ngay lúc thanh toán và ghi chú giao nhận được chuyển thẳng xuống App Tài xế.",
      where: "Màn hình thanh toán & App Tài xế",
      columns: [
        {
          title: "Cách hoạt động",
          items: [
            {
              body: "Khi bật tính năng, khách chọn giao không tiếp xúc kèm hướng dẫn đặt đồ; tài xế thấy rõ yêu cầu trên đơn và chụp ảnh xác nhận lúc hoàn tất.",
            },
          ],
        },
        {
          title: "Lợi ích mang lại",
          items: [
            {
              body: "Tiện lợi cho khách hàng đồng thời lưu đủ bằng chứng giao nhận minh bạch cho bộ phận hỗ trợ.",
            },
          ],
        },
      ],
    },
  ],
  extraCardGrid: {
    id: "models",
    eyebrow: "Mô hình đội xe",
    title: "Đội xe riêng, đối tác 3PL hoặc kết hợp cả hai.",
    lead: "Chọn mô hình giao hàng phù hợp nhân sự từng chi nhánh trên cùng một nền tảng điều hành.",
    actionLink: { label: "Tự vận hành giao hàng", href: "/solutions#marketplaces" },
    items: [
      {
        title: "Đội xe nội bộ",
        body: "Điều phối đội tài xế riêng qua App Tài xế theo đúng vùng giao và quy tắc từng chi nhánh.",
      },
      {
        title: "Mô hình kết hợp (Hybrid)",
        body: "Ưu tiên tài xế nội bộ và tự động gọi đối tác giao hàng ngoài khi cao điểm hoặc vượt bán kính.",
      },
      {
        title: "Thuần đối tác 3PL",
        body: "Kết nối mạng lưới giao vận bên thứ ba cho các chi nhánh không duy trì đội tài xế riêng.",
      },
    ],
  },
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Giao hàng là một chặng của đơn hàng, không phải hệ thống tách rời.",
    body: "Ordering Delivery kết nối trực tiếp khâu giao vận với kênh đặt món và vận hành tại quán để đơn đi liền mạch từ bếp đến tận tay khách.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Vùng giao, luật điều phối, đội xe riêng & dự phòng 3PL",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Toàn quyền kiểm soát",
    title: "Mọi quy tắc giao hàng đều là cấu hình chủ động của bạn.",
    body: "Tổ chức cài đặt xoay quanh đúng các quyết định vận hành thực tế: phạm vi phủ, biểu phí, cách gán tài xế và luồng dự phòng.",
    cards: [
      {
        title: "Quy tắc theo từng cửa hàng",
        body: "Thiết lập phạm vi và phương án giao riêng biệt ở cấp chi nhánh.",
      },
      {
        title: "Can thiệp thủ công bất cứ lúc nào",
        body: "Quản lý luôn có thể điều chuyển tài xế thủ công khi phát sinh đơn gấp hoặc ngoại lệ.",
      },
      {
        title: "Vùng giao theo điểm bán",
        body: "Định nghĩa chính xác khu vực mỗi chi nhánh đảm bảo giao nóng và đúng giờ.",
      },
      {
        title: "Dự phòng đối tác 3PL",
        body: "Kích hoạt luồng đối tác giao hàng ngoài mỗi khi cần bổ sung công suất.",
      },
    ],
  },
  related: {
    title: "Các công cụ khác cho chặng giao cuối.",
    items: [
      {
        label: "Vận hành",
        title: "App Tài xế (Driver App)",
        body: "Giao diện làm việc hằng ngày của tài xế trên đường giao hàng.",
        href: "/platform/driver-app",
      },
      {
        label: "Kết nối",
        title: "Giao hàng bên thứ ba (3PL)",
        body: "Chuyển đơn sang mạng lưới đối tác mà vẫn giữ trải nghiệm thương hiệu bạn.",
        href: "/platform/third-party-delivery",
      },
      {
        label: "Kết nối",
        title: "Mạng lưới giao hàng",
        body: "Danh sách các đối tác giao vận hỗ trợ kết nối trực tiếp.",
        href: "/integrations/delivery",
      },
      {
        label: "Theo mục tiêu",
        title: "Tự vận hành giao hàng",
        body: "Lợi thế khi doanh nghiệp chủ động làm chủ đội ngũ giao vận.",
        href: "/solutions#marketplaces",
      },
    ],
  },
  closingCta: {
    title: "Thiết lập vùng giao và điều phối thử một đơn hàng.",
    body: "Khám phá cách vùng phủ, trạng thái tài xế và quy tắc điều phối vận hành cho chuỗi chi nhánh của bạn.",
    docGuide: { label: "Tổng quan Giao vận", href: "/demo" },
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Quản lý giao hàng · Demo hướng dẫn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};

export const DRIVER_APP_SPEC_VI: PlatformPageSpec = {
  slug: "driver-app",
  template: "showcase",
  metaTitle: "App Tài xế & Điều phối (Driver App)",
  metaDescription:
    "App Tài xế gom điểm lấy hàng, chỉ đường, liên lạc, bằng chứng giao hàng và quản lý ca trực vào một ứng dụng iOS & Android duy nhất.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Vận hành", href: "/products#operate" },
      { label: "App Tài xế & điều phối" },
    ],
    title: "Ứng dụng tài xế của bạn làm việc mỗi ngày, cùng bộ điều phối phía sau.",
    lede: "Driver App kết nối chặng đường từ lúc món sẵn sàng tại quán tới tận tay khách. Tài xế nhận chuyến, bật dẫn đường, trao đổi với cửa hàng hoặc khách hàng và lưu bằng chứng giao ngay trong một quy trình khép kín.",
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "iOS và Android" },
      { text: "Gán đơn tự động hoặc thủ công" },
      { text: "Xác nhận bằng chứng giao hàng" },
    ],
  },
  pillars: {
    eyebrow: "App Tài xế",
    title: "Bốn công cụ tài xế cần, gói gọn trong một ứng dụng.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Lộ trình & dẫn đường",
        body: "Hiển thị thứ tự điểm giao và chặng tiếp theo rõ ràng ngay trong luồng nhận đơn thay vì phải tự sắp xếp.",
      },
      {
        label: "02",
        title: "Bằng chứng giao hàng",
        body: "Lưu ảnh chụp, video, chữ ký hoặc mã PIN xác nhận bàn giao gắn trực tiếp vào hồ sơ đơn.",
      },
      {
        label: "03",
        title: "Liên lạc với quán & khách hàng",
        body: "Hội thoại gắn liền với từng đơn giúp tài xế hỏi nhanh chi nhánh hoặc khách lúc giao nhận.",
      },
      {
        label: "04",
        title: "Ca trực & trạng thái sẵn sàng",
        body: "Bật/tắt trạng thái trực tuyến theo cửa hàng hoặc khu vực để hệ thống điều phối gán chuyến chính xác.",
      },
    ],
  },
  features: {
    title: "Những gì ứng dụng hỗ trợ từ quầy quán đến cửa nhà khách.",
    actionLink: { label: "Xem chi tiết Quản lý giao hàng", href: "/platform/ordering-delivery" },
    items: [
      {
        title: "Sắp thứ tự đơn ghép chuyến",
        body: "Hiển thị rõ thứ tự lấy và giao từng điểm dừng khi tài xế chạy nhiều đơn cùng tuyến.",
      },
      {
        title: "Mở bản đồ chỉ đường 1 chạm",
        body: "Mở thẳng điểm dừng tiếp theo trên Google Maps hoặc Waze chỉ với một chạm.",
      },
      {
        title: "Chat trực tiếp với quán và khách",
        body: "Mỗi đơn có luồng chat chung giữa khách hàng, cửa hàng và điều phối viên để xử lý nhanh mọi tình huống.",
      },
      {
        title: "Xác nhận giao tại cửa",
        body: "Thu thập đúng loại bằng chứng giao đã cài đặt: ảnh chụp, video, chữ ký điện tử hoặc mã PIN.",
      },
      {
        title: "Đồng bộ ngữ cảnh ca trực",
        body: "Mọi chuyến đi đang thực hiện luôn cập nhật tức thời về màn hình điều phối của chi nhánh.",
      },
      {
        title: "Trực tuyến theo từng cửa hàng",
        body: "Cho phép tài xế bật sẵn sàng nhận đơn theo đúng chi nhánh hoặc vùng giao phụ trách.",
      },
    ],
  },
  stepsSplit: {
    id: "journey",
    eyebrow: "Một chuyến giao hàng",
    title: "Hành trình một đơn giao, từ lúc gán chuyến tới tận cửa.",
    lead: "Kết nối chặt chẽ giữa món vừa xong tại bếp và tài xế giao nhận, giữ trọn ngữ cảnh xuyên suốt mọi điểm chạm.",
    steps: [
      {
        num: "01",
        title: "Điều phối gán chuyến",
        body: "Hệ thống tự động gán đơn theo quy tắc hoặc điều phối viên chỉ định trực tiếp tài xế phù hợp.",
      },
      {
        num: "02",
        title: "Tài xế nhận đơn",
        body: "Tài xế mở chuyến được gán ngay trên app kèm đầy đủ thông tin lộ trình và ghi chú giao nhận.",
      },
      {
        num: "03",
        title: "Lấy hàng tại cửa hàng",
        body: "Khi đến quán, tài xế đối chiếu mã đơn và nhắn nhanh cho nhân viên bếp nếu cần phối hợp.",
      },
      {
        num: "04",
        title: "Dẫn đường & trao đổi",
        body: "Mở bản đồ dẫn đường tới địa chỉ khách và liên hệ ngay trong app khi cần hướng dẫn vào cổng.",
      },
      {
        num: "05",
        title: "Lưu bằng chứng giao hàng",
        body: "Hoàn tất xác nhận giao bằng ảnh, video, chữ ký hoặc mã PIN theo quy định của quán.",
      },
      {
        num: "06",
        title: "Lưu hồ sơ chuyến giao",
        body: "Dữ liệu chuyến hoàn thành gắn liền với đơn hàng phục vụ đối soát và chăm sóc khách hàng sau đó.",
      },
    ],
  },
  capabilityBands: [
    {
      id: "pickup-and-tracking",
      eyebrow: "Lấy hàng & theo dõi giao",
      title: "Từ lúc bấm nhận đơn đến khi giao tận tay khách.",
      body: "Tài xế nhận chuyến, mở chỉ đường từng chặng và cập nhật trạng thái trực tiếp để cả khách hàng lẫn điều phối viên nắm rõ tiến độ.",
      where: "App Tài xế",
      columns: [
        {
          title: "Nhận đơn & lên đường ngay",
          items: [
            {
              body: "Xem nhanh điểm lấy, địa chỉ giao và ghi chú đơn chỉ trong một chạm trước khi di chuyển.",
            },
            {
              title: "Di chuyển tối ưu",
              body: "Mở trực tiếp Google Maps hoặc Waze từ chặng hiện tại để tránh tắc đường và đi đúng thứ tự đơn ghép.",
            },
          ],
        },
        {
          title: "Cập nhật tự động cho khách",
          items: [
            {
              body: "Mỗi lần tài xế đổi trạng thái sẽ tự động cập nhật hồ sơ đơn và link theo dõi trực tiếp của khách.",
            },
            {
              title: "Lợi ích vận hành",
              body: "Giảm hẳn cuộc gọi hỏi thăm tình trạng đơn về quán và minh bạch trách nhiệm suốt quá trình giao.",
            },
          ],
        },
      ],
    },
    {
      id: "messaging",
      eyebrow: "Tin nhắn tích hợp",
      title: "Kết nối thông suốt giữa tài xế, cửa hàng và khách hàng.",
      body: "Khung chat ngay trong đơn giúp lưu lại toàn bộ trao đổi mà không cần chia sẻ số điện thoại cá nhân.",
      where: "App Tài xế",
      subtle: true,
      columns: [
        {
          title: "Nhắn tin với cửa hàng",
          items: [
            {
              body: "Tài xế xác nhận món đã sẵn sàng, báo thiếu đồ hoặc hỏi chỗ đậu xe trực tiếp với nhân viên quán.",
            },
            {
              title: "Khách nhắn trực tiếp cho tài xế",
              body: "Khách gửi mã cổng, chỉ dẫn gửi lễ tân hoặc ghi chú nhận đồ ngay trong cùng hội thoại đơn.",
            },
          ],
        },
        {
          title: "Lợi ích vận hành",
          items: [
            {
              body: "Giữ nhịp giao hàng thông suốt và lưu đầy đủ lịch sử trao đổi nếu đội hỗ trợ cần tra cứu về sau.",
            },
          ],
        },
      ],
    },
  ],
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Tài xế là một phần trực tiếp của hệ thống vận hành.",
    body: "App Tài xế nằm ngay trong lõi quy trình giao vận — đồng bộ từ khâu chuẩn bị tại bếp, điều phối chuyến đến xác nhận bàn giao.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Điều phối trực tiếp, dẫn đường & bằng chứng giao hàng",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Kiểm soát đội ngũ",
    title: "Tổ chức hoạt động giao vận xoay quanh đội ngũ thực thi.",
    body: "Tài xế có thể tự đăng ký hoặc do quản trị viên tạo tài khoản. Nhóm tài xế và ca trực giúp điều phối đúng người cho đúng chi nhánh.",
    cards: [
      {
        title: "Nhóm tài xế (Driver groups)",
        body: "Phân nhóm tài xế theo từng chi nhánh hoặc khu vực giao hàng họ phụ trách.",
      },
      {
        title: "Ca trực & sẵn sàng",
        body: "Dùng trạng thái trực tuyến làm cơ sở phân bổ chuyến công bằng và kịp thời.",
      },
      {
        title: "Chuẩn hóa bàn giao",
        body: "Gắn kết đầy đủ bước lấy món, di chuyển và bằng chứng giao trong cùng luồng app.",
      },
      {
        title: "Lưu vết lịch sử giao",
        body: "Mọi chuyến hoàn tất đều lưu cùng hồ sơ đơn phục vụ đối soát và đánh giá hiệu suất.",
      },
    ],
  },
  related: {
    title: "Các công cụ giao vận liên quan.",
    items: [
      {
        label: "Vận hành",
        title: "Quản lý giao hàng",
        body: "Vùng giao, biểu phí, luật điều phối và theo dõi trực tiếp.",
        href: "/platform/ordering-delivery",
      },
      {
        label: "Theo mục tiêu",
        title: "Tự vận hành giao hàng",
        body: "Đội tài xế của bạn, vùng giao của bạn, quy tắc của bạn.",
        href: "/solutions#marketplaces",
      },
      {
        label: "Kết nối",
        title: "Giao hàng bên thứ ba (3PL)",
        body: "Mạng lưới đối tác hỗ trợ mỗi khi đội xe nội bộ quá tải.",
        href: "/platform/third-party-delivery",
      },
      {
        label: "Vận hành",
        title: "App Cửa hàng",
        body: "Màn hình cửa hàng theo dõi trong lúc tài xế đang trên đường giao.",
        href: "/platform/ordering-merchant",
      },
      {
        label: "Tính năng",
        title: "Nhóm tài xế",
        body: "Cách các chi nhánh và vùng giao phân bổ đúng đội tài xế phụ trách.",
        href: "/platform/ordering-delivery",
      },
      {
        label: "Kết nối",
        title: "Thiết lập App Tài xế",
        body: "Hoạch định tài khoản tài xế, nhóm xe và quy tắc điều phối cho dự án của bạn.",
        href: "/demo",
      },
    ],
  },
  closingCta: {
    title: "Đưa toàn bộ đội ngũ giao hàng lên một ứng dụng duy nhất.",
    body: "Trải nghiệm cách App Tài xế dẫn dắt trọn vẹn một chuyến giao từ lúc lấy hàng đến khi xác nhận tại cửa.",
    docGuide: { label: "App Tài xế", href: "/demo" },
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
  },
};

export const THIRD_PARTY_DELIVERY_SPEC_VI: PlatformPageSpec = {
  slug: "third-party-delivery",
  template: "showcase",
  metaTitle: "Tích hợp Giao hàng Bên thứ ba (3PL)",
  metaDescription:
    "Kết nối đối tác giao hàng bên thứ ba vào chính luồng đơn hàng đội ngũ bạn đang chạy — tùy chọn đối tác theo chi nhánh và theo dõi trạng thái tập trung.",
  hero: {
    breadcrumbs: [
      { label: "Nền tảng", href: "/products" },
      { label: "Vận hành", href: "/products#operate" },
      { label: "Giao hàng bên thứ ba (3PL)" },
    ],
    title: "Đưa giao hàng bên thứ ba vào ngay luồng đơn hàng bạn đang vận hành.",
    lede: `Khi đơn hàng đã sẵn sàng, ${BRAND} gửi yêu cầu giao tới các đối tác giao vận đã kết nối cho chi nhánh đó. Quy tắc do bạn cài đặt sẽ tự chọn đối tác phù hợp nhất hoặc chuyển sang đối tác kế tiếp nếu hãng đầu tiên từ chối — mọi trạng thái vẫn gắn chặt vào đơn gốc.`,
    primaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
    secondaryCta: { label: `Trao đổi với ${BRAND}`, openChat: true },
    meta: [
      { text: "Kết nối đa đối tác giao vận" },
      { text: "Quy tắc chọn hãng theo chi nhánh" },
      { text: "Trạng thái giao đồng bộ ngay trên đơn" },
    ],
  },
  pillars: {
    eyebrow: "Giao hàng bên thứ ba",
    title: "Sử dụng mạng lưới giao vận ngoài mà không đứt gãy luồng đơn.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Lấy báo giá từ từng hãng",
        body: "Yêu cầu giao vận khởi tạo ngay từ đơn bếp đang làm, tự động truyền đủ địa chỉ quán, khách hàng và ghi chú món.",
      },
      {
        label: "02",
        title: "Dự phòng giữa các mạng lưới",
        body: "Thiết lập đối tác ưu tiên và phương án chuyển tiếp tự động nếu hãng đầu tiên không có tài xế hoặc từ chối nhận.",
      },
      {
        label: "03",
        title: "Chọn mô hình theo từng chi nhánh",
        body: "Dùng hoàn toàn 3PL, kết hợp cùng đội xe nội bộ hoặc chỉ gọi 3PL vào các khung giờ cao điểm định sẵn.",
      },
      {
        label: "04",
        title: "Giữ trọn dữ liệu trên một đơn gốc",
        body: "Quá trình bàn giao đối tác luôn gắn liền với đơn hàng ban đầu, giúp cửa hàng theo dõi tập trung tại một chỗ.",
      },
    ],
  },
  features: {
    title: "Những lợi ích luồng bàn giao 3PL tự động mang lại.",
    actionLink: { label: "Xem tất cả mạng lưới giao hàng", href: "/integrations/delivery" },
    items: [
      {
        title: "Gọi tài xế ngay từ đơn đã nhận",
        body: "Đơn đã xác nhận tự động chuyển thành yêu cầu giao vận — nhân viên quán không phải gõ lại địa chỉ trên app hãng ngoài.",
      },
      {
        title: "Chọn báo giá tốt nhất hoặc theo luật riêng",
        body: "Tự động chọn hãng có mức phí/thời gian tốt nhất hoặc ưu tiên đối tác cố định theo từng chi nhánh.",
      },
      {
        title: "Tự động chuyển hãng khi bị từ chối",
        body: "Quy tắc dự phòng đảm bảo đơn lập tức có hãng kế tiếp tiếp nhận nếu đối tác đầu không đáp ứng.",
      },
      {
        title: "Hoạch định vùng phủ theo đối tác khả dụng",
        body: "Rà soát chính xác hãng giao vận nào hoạt động mạnh tại từng quận/thành phố trước khi bật cho chi nhánh.",
      },
      {
        title: "Chủ động biểu phí hiển thị cho khách",
        body: "Tùy chỉnh cách hiển thị phí giao và vùng phục vụ trên kênh đặt hàng của từng điểm bán.",
      },
      {
        title: "Can thiệp thủ công từ App Cửa hàng",
        body: "Đội vận hành luôn có thể rà soát và xử lý trực tiếp ngay trên Ordering Merchant khi có tình huống ngoại lệ.",
      },
    ],
  },
  stepsSplit: {
    id: "flow",
    eyebrow: "Cách vận hành",
    title: "Quy trình một đơn giao qua đối tác 3PL.",
    lead: "Toàn bộ khâu gọi xe sử dụng chung dữ liệu đơn hàng tại quán: sẵn sàng, vị trí, luật chọn hãng và cập nhật trạng thái đều nằm trên một dòng chảy.",
    steps: [
      {
        num: "01",
        title: "Đơn hàng sẵn sàng tại quán",
        body: "Cửa hàng chế biến đơn theo quy trình thông thường trước khi kích hoạt bàn giao giao vận.",
        tag: "Trên hàng đợi quán",
      },
      {
        num: "02",
        title: "Gửi yêu cầu lấy báo giá",
        body: "Hệ thống gửi yêu cầu tới các đối tác 3PL đã kết nối theo cấu hình của chi nhánh.",
        tag: "Đồng loạt các mạng lưới",
      },
      {
        num: "03",
        title: "Chọn hãng theo quy tắc đã cài",
        body: "Áp dụng tiêu chí giá tốt nhất, thời gian nhanh nhất hoặc thứ tự ưu tiên do bạn thiết lập.",
        tag: "Theo luật của bạn",
      },
      {
        num: "04",
        title: "Điều tài xế & theo dõi trực tiếp",
        body: "Đối tác được chọn điều tài xế đến lấy món; tiến độ giao hiển thị đồng bộ trên link theo dõi mang thương hiệu bạn.",
        tag: "Dưới thương hiệu của bạn",
      },
      {
        num: "05",
        title: "Giao xong, đồng bộ trạng thái về đơn",
        body: "Kết quả giao hàng và bằng chứng bàn giao được ghi nhận ngay vào hồ sơ đơn cho vận hành và CSKH.",
        tag: "Một hồ sơ duy nhất",
      },
    ],
  },
  midScopeNotes: [
    {
      id: "quote-scope",
      title: "Báo giá giao hàng phụ thuộc vào điều kiện thực tế của từng hãng",
      lead: "Báo giá trả về từ đối tác kết nối phụ thuộc vào chi nhánh, địa chỉ giao, khung giờ, chi tiết đơn và điều khoản tài khoản doanh nghiệp. Hãy sử dụng báo giá trong luồng đặt đơn thực tế và kiểm tra thời hạn hiệu lực, phụ phí giờ cao điểm cũng như phạm vi phục vụ của từng hãng.",
      paragraphs: [
        "Đơn hẹn giờ đặt lịch giao cho một thời điểm tương lai. Các chương trình giao định kỳ lặp lại cần có quy tắc xử lý thay đổi, hủy đơn, thanh toán và tình trạng món riêng cho từng kỳ giao — cần rà soát kỹ theo từng đối tác và khu vực hoạt động cụ thể.",
      ],
      links: [
        { label: "Chọn đối tác theo khu vực & sản lượng", href: "/integrations" },
        { label: "So sánh đội xe riêng và đối tác 3PL", href: "/platform/ordering-delivery" },
        { label: "Cấu hình dịch vụ giao hàng", href: "/demo" },
      ],
    },
  ],
  extraCardGrid: {
    id: "models",
    eyebrow: "Phạm vi phủ sóng",
    title: "Đội xe riêng, mô hình lai hay thuần mạng lưới 3PL.",
    lead: "Giao hàng bên thứ ba có thể đóng vai trò kênh chính hoặc kênh dự phòng tùy theo quy mô nhân sự và giờ cao điểm từng chi nhánh.",
    actionLink: { label: "Quản lý giao hàng", href: "/platform/ordering-delivery" },
    items: [
      {
        title: "Thuần mạng lưới 3PL",
        body: "Chi nhánh dùng các đối tác giao hàng kết nối làm phương án giao chính mà không cần nuôi đội xe nội bộ.",
      },
      {
        title: "Mô hình kết hợp (Hybrid)",
        body: "Kết hợp đội tài xế riêng với đối tác 3PL để mở rộng bán kính giao hoặc chia tải vào khung giờ đông khách.",
      },
    ],
  },
  connected: {
    eyebrow: "Một hạ tầng duy nhất",
    title: "Coi giao hàng là một phần của đơn, không phải thao tác rời rạc.",
    body: "Cấu hình 3PL kết nối thẳng với thực đơn, chi nhánh, thông tin khách hàng và trạng thái bếp để cửa hàng quản lý tập trung tại một nơi.",
    topRow: ["Website", "App / Mini App", "Kiosk", "Tổng đài", "AI Agent"],
    hubNote: "Lấy báo giá đa hãng, tự động dự phòng & theo dõi mang thương hiệu riêng",
    bottomRow: ["App Cửa hàng", "POS", "Tài xế", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Chủ động điều tiết",
    title: "Khi nào gọi đối tác 3PL hoàn toàn do bạn quyết định.",
    body: "Thiết lập rõ hãng đối tác, phạm vi địa lý, quy tắc lựa chọn và phương án xử lý ngoại lệ cho từng chi nhánh trước khi vận hành.",
    cards: [
      {
        title: "Quy tắc theo từng chi nhánh",
        body: "Chọn riêng danh sách hãng giao vận và thứ tự ưu tiên cho từng điểm bán.",
      },
      {
        title: "Quy tắc theo khung giờ",
        body: "Tự động kích hoạt gọi đối tác 3PL vào các khung giờ cao điểm hoặc ngoài ca trực đội xe riêng.",
      },
      {
        title: "Đơn ngoài vùng giao nội bộ",
        body: "Định tuyến các đơn xa bán kính đội xe quán sang mạng lưới 3PL để không bỏ lỡ doanh thu.",
      },
      {
        title: "Chính sách tối ưu chi phí giao",
        body: "Áp dụng ngưỡng phí và điều kiện đơn rõ ràng khi tự động chọn phương án giao hàng.",
      },
    ],
  },
  related: {
    title: "Các công cụ khác cho chặng giao cuối.",
    items: [
      {
        label: "Kết nối",
        title: "Mạng lưới giao hàng",
        body: "Xem các đối tác giao vận hỗ trợ kết nối theo từng thị trường.",
        href: "/integrations/delivery",
      },
      {
        label: "Vận hành",
        title: "Quản lý giao hàng",
        body: "Vùng giao, biểu phí, luật điều phối và ca trực đội xe.",
        href: "/platform/ordering-delivery",
      },
      {
        label: "Vận hành",
        title: "App Tài xế (Driver App)",
        body: "Giao diện làm việc dành cho đội tài xế nội bộ của bạn.",
        href: "/platform/driver-app",
      },
      {
        label: "Theo mô hình",
        title: "Đơn vị giao hàng",
        body: "Giải pháp dành cho doanh nghiệp vận hành đội xe giao hộ nhiều đối tác.",
        href: "/solutions/delivery-companies",
      },
    ],
  },
  closingCta: {
    title: "Thiết kế luồng bàn giao 3PL phù hợp cho chuỗi của bạn.",
    body: "Chia sẻ chi nhánh mẫu, khu vực giao hàng và tình huống cao điểm để cùng đánh giá quy tắc chọn đối tác và xử lý ngoại lệ.",
    docGuide: { label: "Tổng quan Dịch vụ giao hàng", href: "/demo" },
    primaryCta: { label: "Đặt lịch demo", modalTopic: "Giao hàng bên thứ ba · Demo hướng dẫn" },
    secondaryCta: { label: "Xem demo trực tiếp", href: "/demo" },
  },
};
