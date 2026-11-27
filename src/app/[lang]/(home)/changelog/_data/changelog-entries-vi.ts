import { siteConfig } from "@/lib/site-config";
import {
  CHANGELOG_ENTRIES,
  CHANGELOG_PRODUCT_AREAS,
  type ChangelogEntry,
  type ChangelogProductArea,
  type ChangelogProductKey,
} from "./changelog-entries";

const BRAND = siteConfig.name;

export const CHANGELOG_PRODUCT_AREAS_VI: ChangelogProductArea[] = [
  { num: "01", key: "api", label: "API", href: "/developers" },
  { num: "02", key: "website", label: `Website ${BRAND}`, href: "/platform/ordering-web" },
  { num: "03", key: "app", label: `Ứng dụng ${BRAND}`, href: "/platform/ordering-apps" },
  { num: "04", key: "business", label: "Ứng dụng Cửa hàng", href: "/platform/ordering-merchant" },
  { num: "05", key: "driver", label: "Ứng dụng Tài xế", href: "/platform/driver-app" },
  { num: "06", key: "franchise-website", label: "Website Chuỗi nhượng quyền", href: "/solutions/franchises" },
  { num: "07", key: "franchise-app", label: "Ứng dụng Chuỗi nhượng quyền", href: "/solutions/franchises" },
  { num: "08", key: "dashboard", label: "Bảng điều khiển", href: "/platform/dashboard" },
  { num: "09", key: "dashboard-ai", label: "Bảng điều khiển AI", href: "/platform/ai-ordering-agents" },
];

const PRODUCT_LABEL_MAP_VI: Record<ChangelogProductKey, string> = Object.fromEntries(
  CHANGELOG_PRODUCT_AREAS_VI.map((a) => [a.key, a.label])
) as Record<ChangelogProductKey, string>;

const MONTH_MAP_VI: Record<string, string> = {
  "November 2026": "Tháng 11, 2026",
  "October 2026": "Tháng 10, 2026",
  "September 2026": "Tháng 9, 2026",
  "August 2026": "Tháng 8, 2026",
  "July 2026": "Tháng 7, 2026",
  "June 2026": "Tháng 6, 2026",
  "May 2026": "Tháng 5, 2026",
  "April 2026": "Tháng 4, 2026",
  "March 2026": "Tháng 3, 2026",
  "February 2026": "Tháng 2, 2026",
  "January 2026": "Tháng 1, 2026",
  "December 2025": "Tháng 12, 2025",
  "November 2025": "Tháng 11, 2025",
  "October 2025": "Tháng 10, 2025",
  "September 2025": "Tháng 9, 2025",
  "August 2025": "Tháng 8, 2025",
  "July 2025": "Tháng 7, 2025",
  "June 2025": "Tháng 6, 2025",
  "May 2025": "Tháng 5, 2025",
  "April 2025": "Tháng 4, 2025",
  "March 2025": "Tháng 3, 2025",
  "February 2025": "Tháng 2, 2025",
  "January 2025": "Tháng 1, 2025",
};

function formatViDate(datetime: string): string {
  const [, month, day] = datetime.split("-");
  return `${Number(day)}/${Number(month)}`;
}

// Ordered 1-to-1 with CHANGELOG_ENTRIES: [title, body]
const VI_TRANSLATIONS: Array<[title: string, body: string]> = [
  // November 2026 (29 entries)
  [
    "Website thương hiệu hoàn chỉnh + Đặt món trực tuyến",
    "Website nay có thể mở trực tiếp bằng trang chủ xây dựng từ thông tin cửa hàng (ảnh bìa, món nổi bật, câu chuyện thương hiệu, thư viện ảnh, đánh giá, giờ mở cửa kèm bản đồ và ứng dụng), đi kèm trang đặt món tại /order. Hỗ trợ mô hình Một cửa hàng, Chuỗi nhượng quyền và Sàn giao dịch; các mục có thể sắp xếp lại hoặc bật/tắt trong giao diện.",
  ],
  [
    "Nhiều mẫu trang cửa hàng và cửa sổ sản phẩm gọn gàng hơn",
    "Trang cửa hàng hỗ trợ các bố cục Thực đơn trực tiếp, Ảnh bìa & tab, Trưng bày trực quan hoặc Thực đơn không cột giỏ hàng, kèm thẻ Đã đóng cửa và Đặt lịch giao sau rõ ràng. Trên điện thoại, cửa sổ món ăn hiển thị ảnh lớn ở trên cùng và vuốt xuống để đóng; trên máy tính, giỏ hàng gộp thành một nút Thanh toán duy nhất kèm tổng tiền.",
  ],
  [
    "Chế độ Website và Thiết kế màn hình trong Builder",
    "Trong phần Cài đặt Website của Builder, bạn có thể chọn giữa Website thương hiệu + Đặt món trực tuyến hoặc Chỉ đặt món trực tuyến. Mục Thiết kế màn hình cho phép tùy chỉnh trang cửa hàng, cửa sổ sản phẩm, thanh đầu trang, danh sách cửa hàng và lời mời tạo tài khoản, còn mục Trang dùng để sắp xếp các khối trang chủ.",
  ],
  [
    "Nhóm tùy chọn nhân bản không còn tự gán hàng loạt",
    "Khi nhân bản một nhóm tùy chọn món ăn, bản sao sẽ ở trạng thái chưa gán thay vì tự động gắn vào toàn bộ món đang dùng nhóm gốc, đồng thời chặn yêu cầu trùng lặp trong lúc đang sao chép.",
  ],
  [
    "Khách vãng lai thanh toán bằng email hoặc số điện thoại đã đăng ký",
    "Khách vãng lai có thể thanh toán bằng email hoặc số điện thoại thuộc tài khoản đã tồn tại mà không nhận email bị che ký tự. Khách tạo tài khoản sau khi đặt hàng có thể đăng ký bằng chính email và số điện thoại vừa dùng.",
  ],
  [
    "Nhóm đối tượng chiến dịch theo cửa hàng và khoảng thời gian tương đối",
    "Tệp đối tượng chiến dịch marketing hỗ trợ bao gồm hoặc loại trừ danh sách cửa hàng, lọc theo mốc thời gian tương đối như 60 ngày gần nhất, chỉ tính đơn thật và thống kê số đơn lẫn doanh thu theo từng cửa hàng.",
  ],
  [
    "Thiết kế lại website đặt món đồng bộ theo giao diện cửa hàng",
    "Mọi thành phần khách nhìn thấy trên website đặt món nay tuân theo chủ đề của cửa hàng, từ cửa sổ sản phẩm, danh sách chi nhánh đến giỏ hàng, thanh toán, đơn hàng và hồ sơ. Cải thiện điều hướng bàn phím, độ tương phản và hỗ trợ ngôn ngữ viết từ phải sang trái (RTL) như tiếng Ả Rập.",
  ],
  [
    "Trình tạo tệp đối tượng cho chiến dịch marketing",
    "Tạo chiến dịch dễ dàng hơn với trình dựng điều kiện theo câu tự nhiên, hiển thị số lượng khách hàng tiếp cận theo thời gian thực, tùy chọn giới hạn thời gian và lọc bao gồm/loại trừ chi nhánh. Báo cáo chiến dịch tách riêng đơn và doanh thu theo từng cửa hàng.",
  ],
  [
    "Kiểm tra vùng giao hàng nhanh hơn",
    "Tối ưu tốc độ kiểm tra địa chỉ theo vùng giao hàng và danh sách cửa hàng bằng cách giảm số vùng ứng viên và chỉ tải dữ liệu vùng khi cần. Vùng đa giác nay kiểm tra theo cạnh thẳng trên kinh độ/vĩ độ để đảm bảo nhất quán.",
  ],
  [
    "Dùng giờ khách yêu cầu làm ETA cho đơn đặt trước",
    "Bổ sung thiết lập dự án (mặc định tắt) cho phép email xác nhận đơn đặt trước hiển thị đúng khung giờ khách chọn làm thời gian dự kiến thay vì cộng thêm thời gian chuẩn bị lên trên.",
  ],
  [
    "Thanh toán thẻ tương thích phiên bản API Stripe mới",
    "Hỗ trợ thanh toán thẻ ổn định trên các tài khoản Stripe mở theo phiên bản API mới (vốn từ chối một tham số cũ). Các tài khoản khác vẫn giữ luồng gửi một yêu cầu duy nhất và không tự thử lại thẻ bị từ chối.",
  ],
  [
    "Hiển thị ETA đơn đặt trước theo giờ khách chọn trên Bảng điều khiển",
    "Khi bật thiết lập dự án mới, thời gian dự kiến và đồng hồ đếm ngược của đơn đặt trước trên Bảng điều khiển sẽ tính trực tiếp theo giờ khách yêu cầu.",
  ],
  [
    "Xử lý món hết hàng và giới hạn tùy chọn khi nhập thực đơn",
    "Công cụ nhập thực đơn Uber Eats tự động tắt các món và tùy chọn đang hết hàng, giữ phụ đề làm mô tả và hiểu trường giới hạn trống là không giới hạn. Nhập từ DoorDash, Uber Eats và OPERO chuyển mức tối đa 0 thành giới hạn hợp lệ thay vì báo lỗi nhóm.",
  ],
  [
    "Giới hạn quyền chỉnh sửa vùng giao trong đúng nhóm tài xế",
    "Chỉnh sửa hoặc xóa vùng giao hàng qua endpoint của nhóm tài xế nay chỉ tác động đến vùng thuộc nhóm đó, ngăn thay đổi nhầm vùng của nhóm khác hoặc của cửa hàng.",
  ],
  [
    "Tùy chọn lấy toàn bộ thực đơn ngoài khung giờ phục vụ",
    "Các endpoint cửa hàng và sản phẩm v2 bổ sung tham số tùy chọn ignore_menu_schedule để trả về đầy đủ thực đơn kể cả ngoài giờ bán kèm cờ schedule_available cho từng món. Giỏ hàng vẫn từ chối các món ngoài khung giờ.",
  ],
  [
    "Đăng nhập Google và Apple với email từng sử dụng trước đó",
    "Đăng nhập qua Google hoặc Apple nay hoạt động bình thường khi nhà cung cấp đã xác minh email, ngay cả khi email đó từng gắn với tài khoản đã xóa. Hai lượt đăng nhập đồng thời sẽ vào cùng một tài khoản thay vì lỗi.",
  ],
  [
    "Tăng độ tương phản cho các thành phần điều khiển",
    "Nút phụ, nút gạt, thẻ lọc đang chọn và mốc thời gian có viền rõ nét hơn; chữ gợi ý và chữ cấp ba tối hơn để dễ đọc. Ô chọn, radio và công tắc theo màu chủ đạo dự án hiển thị dấu chọn màu trắng nổi bật.",
  ],
  [
    "Hiển thị đầy đủ nhật ký tích hợp POS",
    "Hộp thoại Nhật ký (Logs) của tích hợp POS hiển thị đầy đủ mọi dòng sự kiện (kể cả khi cửa hàng chỉ có một bản ghi duy nhất) và giữ hai cột sự kiện, thời gian hiển thị trọn vẹn.",
  ],
  [
    "Sitemap xuất theo đúng tên miền website",
    "Sitemap tự động liệt kê URL theo đúng tên miền đang truy cập, trỏ mục cửa hàng, danh mục và sản phẩm về trang cửa hàng, đồng thời loại bỏ các trang đăng nhập, đăng ký, đặt lại mật khẩu và hồ sơ.",
  ],
  [
    "Chỉ yêu cầu địa chỉ với đơn giao hàng",
    "Giỏ hàng và đơn hàng nay chỉ bắt buộc nhập địa chỉ khách cho đơn giao hàng và giao tiệc. Các hình thức tự đến lấy, ăn tại chỗ, nhận tại lề đường, drive-thru và giao tại ghế không còn yêu cầu địa chỉ.",
  ],
  [
    "Đồng nhất quy tắc kiểm tra vùng giao hàng",
    "Giỏ hàng, tìm kiếm, danh sách cửa hàng và bước kiểm tra điều kiện nay dùng chung một quy tắc xác định địa chỉ trong vùng giao. Dữ liệu tọa độ vùng luôn đồng bộ ngay khi chỉnh sửa hình dạng vùng.",
  ],
  [
    "Chỉnh sửa tin nhắn bot WhatsApp kèm khung xem trước",
    "Mục bot WhatsApp trong Connect cho phép chỉnh sửa kịch bản tin nhắn theo từng nhóm ngay cạnh khung xem trước giao diện điện thoại có bộ đếm ký tự, tự mở tab chứa trường lỗi và cho phép xóa/thay access token.",
  ],
  [
    "Thống kê đơn hàng và doanh thu theo từng chiến dịch",
    "Chiến dịch email và thông báo đẩy hiển thị số đơn và doanh thu ngay trong danh sách và chi tiết chiến dịch; hỗ trợ tạo chiến dịch push cho dự án dùng Firebase và báo rõ trường bắt buộc còn thiếu.",
  ],
  [
    "Theo dõi hiệu quả khôi phục giỏ hàng và hủy đăng ký",
    "Quy tắc khôi phục giỏ hàng bị bỏ quên nay báo cáo số tin đã gửi, giỏ hàng đã khôi phục và doanh thu mang lại; email có liên kết gắn thẻ theo dõi và nút hủy đăng ký một chạm. Quy tắc đã tắt sẽ ngừng gửi tới các giỏ đã lên lịch.",
  ],
  [
    "Cài đặt bản build ứng dụng qua mã QR tạm thời",
    "Các bản build Android APK và iOS ad hoc thành công trong Builder và Sản phẩm của tôi có thể cài trực tiếp lên điện thoại bằng mã QR hết hạn sau 24 giờ, kèm phân tab theo định dạng tệp tải về.",
  ],
  [
    "Ra mắt Bảng điều khiển phiên bản mới",
    "Bảng điều khiển chính thức chuyển sang giao diện thiết kế mới, đồng thời giữ bản cũ ở một địa chỉ riêng trong giai đoạn chuyển đổi đến 09/12/2026 để quản trị viên dễ dàng đối chiếu.",
  ],
  [
    "Đăng nhập một lần bằng mã tạm từ Bảng điều khiển sang AI Agents",
    "Khi mở AI Agents từ Bảng điều khiển, hệ thống truyền mã dùng một lần thay vì session token trên URL và tự xóa thông tin đăng nhập khỏi địa chỉ trước khi kích hoạt phân tích hoặc báo lỗi.",
  ],
  [
    "Đăng ký và khôi phục tài khoản an toàn hơn",
    "Đăng ký mới bằng email của tài khoản không mật khẩu sẽ không còn chiếm quyền tài khoản đó; chủ sở hữu có thể đặt mật khẩu qua luồng khôi phục. Yêu cầu khôi phục trả về phản hồi nhất quán để tránh lộ trạng thái tài khoản.",
  ],
  [
    "Tùy chọn các mục hiển thị trên phiếu in đơn hàng",
    "Tính năng in phiếu cho phép bật/tắt mã đơn, thông tin khách hàng, cửa hàng và danh sách món trong khi vẫn giữ tổng tiền; tùy chọn lưu trên trình duyệt đến khi đăng xuất và bản in thường dùng chữ đen đậm rõ nét.",
  ],
  [
    "Duyệt cửa hàng tự đến lấy theo thành phố không cần nhập địa chỉ",
    "Khi bật chế độ nhận tại cửa hàng không cần địa chỉ, khách có thể vào thẳng danh sách cửa hàng và lọc theo thành phố trước khi thêm địa chỉ, vẫn tuân thủ vị trí mặc định và bán kính nhận hàng của dự án.",
  ],
  [
    "Ký số cho integration hooks và webhooks",
    "Khi bật ký số, plugin hooks, webhook dự án/cửa hàng và hook giao hàng đều đính kèm chữ ký số để hệ thống nhận xác thực bằng khóa công khai. Chữ ký nhận diện đúng dự án ngay cả khi gọi theo tên miền.",
  ],

  // October 2026 (17 entries)
  [
    "Nhập thực đơn từ sàn giao đồ ăn ổn định hơn",
    "Công cụ nhập thực đơn chấp nhận liên kết Uber Eats và DoorDash dán thiếu https://, xử lý các nhóm tùy chọn lồng sâu vượt giới hạn định danh và kiểm tra phiên OPERO đúng theo đường dẫn API dự án.",
  ],
  [
    "Hỗ trợ Mapbox token riêng theo từng dự án",
    "Dự án có thể cấu hình danh sách Mapbox public token riêng cho tìm kiếm địa chỉ. API tự động chọn một token mỗi ngày UTC và dự phòng sang token nền tảng nếu dự án chưa thiết lập.",
  ],
  [
    "Hiển thị mã PIN xác nhận giao hàng trong chi tiết đơn (Website chuỗi)",
    "Đơn giao hàng đang thực hiện hiển thị mã PIN của khách khi cần xác nhận (nếu dự án bật mã PIN giao hàng). Mã tự ẩn sau khi xác thực hoặc khi đơn hoàn tất.",
  ],
  [
    "Hiển thị mã PIN xác nhận giao hàng trong chi tiết đơn (Ứng dụng chuỗi)",
    "Đơn giao hàng đang thực hiện hiển thị mã PIN của khách khi cần xác nhận (nếu dự án bật mã PIN giao hàng). Mã tự ẩn sau khi xác thực hoặc khi đơn hoàn tất.",
  ],
  [
    "Tùy chỉnh mã PIN xác nhận giao hàng",
    "Khi bật mã PIN giao hàng, mỗi đơn mới tạo một mã 4 chữ số để khách đọc cho tài xế. Hệ thống kiểm tra mã khi tài xế hoàn tất đơn, áp dụng thời gian chờ nếu nhập sai và ẩn mã khỏi phản hồi phía tài xế.",
  ],
  [
    "Nhắc nhập mã PIN giao hàng theo đúng trạng thái đơn",
    "Khi dự án bật mã PIN giao hàng, ứng dụng tài xế nhận diện đơn đang chờ xác nhận PIN và nhắc tài xế nhập mã từ khách, không hỏi lại với đơn đã xác thực.",
  ],
  [
    "Giữ giỏ hàng không hợp lệ hiển thị rõ lý do",
    "Giỏ hàng có món hết hàng, địa chỉ sai hoặc khung giờ không hợp lệ vẫn hiển thị kèm giải thích rõ ràng. Nút thanh toán bị khóa đến khi giỏ hợp lệ và không tính vào tổng thanh toán gộp.",
  ],
  [
    "Khung chat đơn hàng luôn hiển thị phía trên bàn phím",
    "Màn hình chat đơn hàng trên Ứng dụng Cửa hàng tự điều chỉnh bố cục khi bàn phím mở để ô nhập tin luôn nằm trong tầm nhìn và khôi phục khoảng cách khi đóng bàn phím.",
  ],
  [
    "Tìm kiếm địa chỉ hỗ trợ Google Places API (New)",
    "Tính năng gợi ý và chọn địa chỉ trên ứng dụng nay hỗ trợ Places API (New), đồng thời tự động dự phòng về API cũ nếu khóa Google của dự án chỉ bật phiên bản legacy.",
  ],
  [
    "Xem lộ trình tài xế theo từng đơn hàng",
    "Quản trị viên có thể tra cứu đơn trong báo cáo giao hàng để xem các mốc vị trí của tài xế trên bản đồ và xuất bảng trạng thái (yêu cầu lịch sử vị trí tài xế và khóa Google Maps).",
  ],
  [
    "Tài liệu REST API và MCP cho phát triển có hỗ trợ AI",
    "Ra mắt bộ hướng dẫn công khai về xác thực REST API v400, lấy danh sách đơn, phân trang, cùng hướng dẫn cài đặt MCP, làm mới khóa và phân quyền đọc/ghi; kèm chỉ mục tài liệu tối ưu cho công cụ như Context7.",
  ],
  [
    "Cài đặt POS một chạm ngay từ mục Connect",
    "Dự án có thể cài đặt Square, Clover, Simphony hoặc Wansoft trực tiếp trong Connect > POS & Menu Sync chỉ với một bước; cửa hàng tự kết nối sau khi plugin hoàn tất cấu hình.",
  ],
  [
    "Mở giỏ hàng đa cửa hàng từ mọi điểm chạm",
    "Khi bật thanh toán đa cửa hàng và khách có giỏ từ hai cửa hàng trở lên, các nút Xem đơn hàng, biểu tượng giỏ trên header và Đặt lại đều mở giỏ gộp, hiển thị tách bạch thuế, phí giao và tiền boa từng cửa hàng.",
  ],
  [
    "Sao chép cấu hình MCP nhanh sang trợ lý AI",
    "Hướng dẫn MCP bổ sung nút Copy to LLM tạo prompt cài đặt hoàn chỉnh cho Claude Code hoặc Codex theo endpoint MCP của dự án mà không bao giờ chứa khóa bí mật hay phiên đăng nhập.",
  ],
  [
    "Quản lý tùy chọn món ăn ngay trong Ứng dụng Cửa hàng",
    "Nhân viên cửa hàng có thể mở sản phẩm trong Ứng dụng Cửa hàng để xem toàn bộ nhóm tùy chọn, gắn hoặc gỡ nhóm và bật/tắt từng tùy chọn con tương tự trên Bảng điều khiển.",
  ],
  [
    "Tìm kiếm nhanh bằng Command Palette (⌘K / Ctrl+K)",
    "Nhấn ⌘K hoặc Ctrl+K (hoặc bấm Tìm kiếm trên thanh bên) để nhảy nhanh tới trang, cài đặt, cửa hàng, tích hợp, biểu mẫu tạo mới hoặc tra cứu đơn hàng và người dùng theo đúng phân quyền.",
  ],
  [
    "Thanh tiến độ miễn phí giao hàng tại cửa hàng và giỏ hàng",
    "Khi cửa hàng có ưu đãi miễn phí giao hàng, trang cửa hàng và giỏ hàng hiển thị giá trị đơn tối thiểu, số tiền còn thiếu để đạt ưu đãi và thông báo khi đã đủ điều kiện.",
  ],

  // September 2026 (11 entries)
  [
    "Mở AI Agents trực tiếp bằng phiên đăng nhập hiện tại",
    "Nút AI Agents trên thanh bên quản trị mở thẳng không gian làm việc AI Agents với phiên và dự án OPERO hiện tại, không cần đăng nhập lại.",
  ],
  [
    "Quản lý khóa MCP và hướng dẫn cài đặt",
    "Quản trị viên có thể tạo, xem và thu hồi khóa MCP ngay trong mục Cài đặt kèm hướng dẫn kết nối Claude Code và Codex.",
  ],
  [
    "Ra mắt máy chủ OPERO MCP cho các ứng dụng AI",
    "Bổ sung máy chủ OPERO MCP cho phép các client AI xác thực bằng MCP token, tra cứu danh mục API và thực thi các thao tác đọc/ghi được cấp phép.",
  ],
  [
    "Thông báo đẩy trình duyệt qua Firebase",
    "Website đặt món hỗ trợ đăng ký nhận thông báo đẩy trình duyệt qua Firebase Cloud Messaging, bấm vào thông báo sẽ mở thẳng đơn hàng tương ứng; dự án chưa cấu hình Firebase vẫn dùng OneSignal như cũ.",
  ],
  [
    "Thông báo đẩy Firebase trên Ứng dụng Tài xế",
    "Ứng dụng Tài xế hỗ trợ nhận thông báo đẩy qua Firebase Cloud Messaging và mở thẳng đơn được gán khi chạm vào thông báo.",
  ],
  [
    "Giám sát và giới hạn mức sử dụng API",
    "Bổ sung đo lường tài nguyên và lưu lượng API theo từng dự án, thiết lập hạn mức sử dụng, hiển thị hạn mức công khai và gửi cảnh báo cho chủ dự án và quản trị viên.",
  ],
  [
    "Trung tâm Cài đặt hợp nhất",
    "Toàn bộ cài đặt dự án được gom vào một trung tâm Cài đặt hỗ trợ tìm kiếm kèm tác vụ gợi ý; các liên kết cài đặt cũ tự động chuyển hướng sang giao diện mới.",
  ],
  [
    "Tài liệu tham chiếu API song ngữ",
    "Hoàn thiện bộ tài liệu tham chiếu API công khai với quy trình xuất bản song ngữ, giúp đội ngũ kỹ thuật tra cứu endpoint và triển khai nhanh hơn.",
  ],
  [
    "Cải thiện trợ năng và khôi phục lưu trên Dashboard AI",
    "Không gian làm việc AI nâng cấp điều hướng bàn phím, bố cục đáp ứng, giao diện sáng/tối và cho phép thử lưu lại nếu thao tác lưu trước đó bị gián đoạn.",
  ],
  [
    "Ổn định thanh toán Stripe trên Android",
    "Thanh toán Stripe trên Ứng dụng Chuỗi dùng thành phần nhập thẻ mới khắc phục lỗi văng ứng dụng trên Android, vẫn giữ nguyên chọn thẻ đã lưu và nút Thêm thẻ.",
  ],
  [
    "Tùy chọn ẩn/hiện tính năng gán tài xế thủ công",
    "Nút gán tài xế thủ công trên Ứng dụng Cửa hàng chỉ hiển thị khi dự án bật tính năng này, giữ quy trình vận hành gọn gàng theo đúng mô hình giao hàng.",
  ],

  // August 2026 (7 entries)
  [
    "Liên kết sâu tới cửa hàng và đơn hàng ổn định hơn",
    "Các liên kết mở trực tiếp cửa hàng, giỏ hàng và đơn hàng chờ trạng thái ứng dụng sẵn sàng trước khi điều hướng tới màn hình đích.",
  ],
  [
    "Thao tác xử lý đơn hàng tin cậy hơn",
    "Cải thiện mở đơn chờ duyệt từ thông báo đẩy, lưu lại thao tác thất bại khi mất mạng để thử lại và chặn gửi trùng lệnh nhận, từ chối hay cập nhật nhóm trạng thái.",
  ],
  [
    "Theo dõi vị trí tài xế an toàn hơn",
    "Đồng bộ cập nhật vị trí giữa luồng thông báo và chạy nền, không theo dõi khi chưa có quyền hệ điều hành và tự dừng theo dõi nền khi ca làm việc của tài xế bị khóa.",
  ],
  [
    "Thanh toán Square sau khi trừ số dư ví",
    "Bước thanh toán Square tự động tính đúng số tiền còn lại của giỏ hàng sau khi khách áp dụng số dư ví tiền mặt.",
  ],
  [
    "Chọn ưu đãi đã lưu ngay trong giỏ hàng",
    "Khách hàng có thể chọn trực tiếp mã giảm giá đủ điều kiện đã lưu ngay trong giỏ hàng trước khi chuyển sang bước thanh toán.",
  ],
  [
    "Xác nhận giao hàng an toàn bằng mã PIN",
    "Bổ sung xác thực mã PIN khi bàn giao đơn và ẩn mã đơn nội bộ khỏi màn hình tài xế ở những bước không cần thiết.",
  ],
  [
    "Hiển thị đơn vị tiền tệ theo cấu hình dự án",
    "Chi tiết đơn hàng và các khoản tổng trên Ứng dụng Cửa hàng tự động hiển thị đúng đơn vị tiền tệ của dự án thay vì ký hiệu cố định.",
  ],

  // July 2026 (5 entries)
  [
    "Cấu hình phân tích thương mại điện tử GA4",
    "Các dự án có mã đo lường Google Analytics có thể theo dõi đầy đủ sự kiện xem gian hàng, giỏ hàng, thanh toán và xác nhận mua hàng trong GA4.",
  ],
  [
    "Hỗ trợ tùy chọn và phần nửa món khi nhập thực đơn GloriaFood",
    "Trình nhập GloriaFood hỗ trợ lấy thực đơn bằng restaurant key, cải thiện ánh xạ tùy chọn bổ sung, xử lý trùng lặp và giá món chia nửa phần.",
  ],
  [
    "Bộ chọn ngày giờ cho đặt bàn",
    "Mở rộng luồng đặt bàn trên ứng dụng với bộ chọn ngày giờ chuyên biệt và kiểm tra hợp lệ rõ ràng hơn.",
  ],
  [
    "Hỗ trợ máy in nhiệt Epson",
    "Bổ sung hỗ trợ máy in hóa đơn nhiệt Epson song song với luồng in hiện có, cho phép chọn trình điều khiển theo từng thiết bị đã cấu hình.",
  ],
  [
    "Website đặt món tải nhanh và mượt hơn",
    "Giảm dung lượng gói tải ban đầu, loại bỏ các lời gọi chặn khởi động và tối ưu cửa sổ bật lên, thanh hành động ghim và khung nhìn trên di động.",
  ],

  // June 2026 (6 entries)
  [
    "API danh sách ưu đãi đã lưu tại checkout",
    "Bổ sung đường dẫn API liệt kê các mã giảm giá khả dụng cho giỏ hàng, giúp khách chọn ưu đãi đã lưu ngay khi thanh toán.",
  ],
  [
    "Quản lý phương thức thanh toán đã lưu trên Website",
    "Ra mắt mục quản lý thẻ đã lưu chuyên biệt cùng trải nghiệm thanh toán thẻ rõ ràng hơn trên website.",
  ],
  [
    "Quản lý phương thức thanh toán đã lưu trên Ứng dụng",
    "Bổ sung khu vực thẻ đã lưu ngay trong ứng dụng khách hàng và gắn vào thanh điều hướng chính.",
  ],
  [
    "Nền tảng đặt suất ăn học đường",
    "Bổ sung phân hệ đặt món trường học tích hợp đầy đủ khối lớp, phòng học, học sinh, suất ăn và báo cáo tập trung.",
  ],
  [
    "Tùy biến tiêu đề và tham số cho webhooks",
    "Cho phép thêm custom header và query parameter cho webhook, kèm lưu trữ mã hóa cho các giá trị header nhạy cảm.",
  ],
  [
    "Theo dõi vị trí tài xế bên thứ ba theo thời gian thực",
    "Bổ sung endpoint cập nhật tọa độ tài xế ngoài kèm phát sự kiện socket thời gian thực giúp đồng bộ trạng thái giao hàng xuyên suốt hệ thống.",
  ],

  // May 2026 (4 entries)
  [
    "Cảnh báo đơn giao mới mạnh mẽ hơn",
    "Bổ sung âm báo chuyên biệt và cơ chế xử lý thông báo cho đơn giao mới trên cả Android và iOS.",
  ],
  [
    "Hỗ trợ loại đơn Đặt bàn trên Website",
    "Bổ sung Đặt bàn (Reservation) như một loại đơn chính thức kèm chọn ngày giờ, kiểm tra khung giờ và xác nhận tại checkout.",
  ],
  [
    "Hoàn tiền chi tiết theo từng món",
    "Bổ sung luồng hoàn tiền theo từng sản phẩm và các hook cổng thanh toán mở rộng giúp tích hợp thanh toán tham gia xử lý hoàn tiền linh hoạt hơn.",
  ],
  [
    "Tên miền tùy chỉnh qua Cloudflare",
    "Hỗ trợ Cloudflare Custom Hostname cho website cửa hàng và chuỗi nhượng quyền, bao gồm tự động định tuyến theo tên miền khách truy cập.",
  ],

  // April 2026 (4 entries)
  [
    "Mở rộng hiển thị lựa chọn thanh toán",
    "Nâng cấp giao diện lựa chọn Apple Pay, Google Pay và PayPal tại bước thanh toán theo nhà cung cấp dự án đã bật.",
  ],
  [
    "Phí khách hàng có cấu trúc và thuế cấp đơn hàng",
    "Bổ sung hệ thống phí khách hàng có cấu trúc kèm hỗ trợ thuế cấp đơn để biểu diễn minh bạch nhiều mô hình tính giá tại checkout.",
  ],
  [
    "Quản lý mẫu tin nhắn WhatsApp",
    "Các trợ lý WhatsApp có thể duyệt và đồng bộ mẫu tin nhắn; mẫu marketing đã duyệt đi kèm biểu mẫu gửi kèm thông tin người nhận và khung xem trước.",
  ],
  [
    "Màn hình quản lý quy tắc khôi phục giỏ hàng",
    "Bổ sung giao diện tạo, chỉnh sửa quy tắc khôi phục giỏ hàng và thiết lập kênh gửi ngay trong không gian làm việc AI.",
  ],

  // March 2026 (6 entries)
  [
    "Tích hợp đối tác giao hàng Shipday",
    "Bổ sung Shipday vào danh sách công ty giao hàng được hỗ trợ cho các dự án vận hành giao nhận qua Shipday.",
  ],
  [
    "Hiển thị thứ tự giao hàng cho tài xế chạy ghép đơn",
    "Đơn hàng có thể hiển thị vị trí trong hàng đợi giao của tài xế để khách và điều phối viên biết điểm dừng khi tài xế giao nhiều đơn cùng lúc.",
  ],
  [
    "Tích hợp Clover POS",
    "Bổ sung Clover vào danh sách tích hợp POS bên thứ ba cho các dự án kết nối OPERO với Clover.",
  ],
  [
    "Kiểm tra gian lận Forter tại bước thanh toán",
    "Tích hợp thu thập mã thông báo Forter vào checkout đơn và checkout đa cửa hàng để truyền tín hiệu chống gian lận kèm đơn hàng.",
  ],
  [
    "Hướng dẫn thiết lập thanh toán Stripe Connect",
    "Trang cài đặt thanh toán trực tuyến hướng dẫn từng bước kết nối Stripe Connect, kích hoạt phương thức và bật chế độ thử nghiệm (sandbox) khi cần.",
  ],
  [
    "Kiểm soát đồng ý cookie trên Ứng dụng",
    "Bổ sung hộp thoại đồng ý cookie ở các luồng đăng nhập, đăng ký và hồ sơ để hoạt động đo lường tuân thủ lựa chọn của khách hàng.",
  ],

  // February 2026 (6 entries)
  [
    "Theo dõi tài xế trực tiếp mượt mà hơn",
    "Biểu tượng tài xế chuyển động mượt với nội suy vị trí giúp bản đồ theo dõi ổn định hơn, đồng thời hỗ trợ tải thêm danh sách đơn đang hoạt động.",
  ],
  [
    "Xác thực mã OTP qua WhatsApp",
    "Luồng đăng nhập và đăng ký trên website hỗ trợ gửi mã xác thực một lần qua WhatsApp bên cạnh các kênh hiện có.",
  ],
  [
    "Hỗ trợ thanh toán Braintree tại checkout",
    "Bổ sung Braintree vào danh sách phương thức thanh toán bên cạnh các luồng thẻ sẵn có theo cấu hình dự án.",
  ],
  [
    "Tài khoản thanh toán và hóa đơn cửa hàng qua API",
    "Bổ sung tài khoản thanh toán cửa hàng, xuất hóa đơn và báo cáo liên quan giúp quản lý đối soát và thanh toán merchant qua API.",
  ],
  [
    "Báo cáo thanh toán cửa hàng trên Bảng điều khiển",
    "Ra mắt màn hình báo cáo thanh toán chuyên biệt trên Bảng điều khiển dành cho quản trị viên và chủ cửa hàng được phân quyền.",
  ],
  [
    "Quy tắc tăng giá thực đơn (Menu markup)",
    "Bổ sung cấu hình chênh lệch giá theo cửa hàng và loại giao nhận, hiển thị rõ mức tính trong tóm tắt giỏ hàng và đơn hàng khi bật.",
  ],

  // January 2026 (3 entries)
  [
    "Kiểm tra vị trí tài xế khi đổi trạng thái đơn",
    "Cho phép yêu cầu tài xế phải ở gần vị trí dự kiến trước khi được phép cập nhật một số trạng thái đơn nhất định, cấu hình linh hoạt theo từng trạng thái.",
  ],
  [
    "Duyệt website chuỗi không cần nhập địa chỉ trước",
    "Các loại đơn được cấu hình cho phép khách hàng xem thực đơn trên website nhượng quyền trước khi cần cung cấp địa chỉ giao hàng.",
  ],
  [
    "Màn hình quản lý chiến dịch trên Dashboard AI",
    "Khi bật tính năng chiến dịch, đội ngũ vận hành có thể tạo, chỉnh sửa chiến dịch, chọn ngày chạy và theo dõi chi tiết ngay trong không gian làm việc.",
  ],

  // December 2025 (4 entries)
  [
    "Thiết lập tiện ích chat bật lên (Popup chat widget)",
    "Trình cấu hình widget tạo đoạn mã nhúng mở cửa sổ chat từ nút bấm hoặc bất kỳ phần tử nào bạn chọn trên website.",
  ],
  [
    "Nhập thực đơn hàng loạt và đồng bộ thực đơn V2",
    "Nâng cấp đồng bộ thực đơn với công cụ tắt hàng loạt, nhập nhanh và luồng đồng bộ V2 dạng phẳng cho thực đơn, danh mục, món và tùy chọn kèm chống trùng lặp khi nối POS.",
  ],
  [
    "Tích hợp Wansoft POS",
    "Bổ sung Wansoft làm tùy chọn tích hợp POS bên thứ ba cho các dự án sử dụng hệ thống này.",
  ],
  [
    "Tự động khôi phục ứng dụng sau khi mất kết nối",
    "Ứng dụng theo dõi trạng thái mạng và tự khởi động lại nếu mất kết nối kéo dài; bộ đếm khôi phục tự hủy ngay khi có mạng trở lại.",
  ],

  // November 2025 (4 entries)
  [
    "Gợi ý mua thêm (Upsell) từ màn hình tóm tắt thanh toán",
    "Màn hình tóm tắt checkout cho phép chuyển sang luồng gợi ý sản phẩm đi kèm giúp khách dễ dàng thêm món trước khi trả tiền.",
  ],
  [
    "Thanh toán thẻ Cybersource trên Ứng dụng chuỗi",
    "Cấu hình thanh toán Cybersource hỗ trợ nhập thẻ bảo mật và xử lý card token trả về ngay trong ứng dụng.",
  ],
  [
    "Nhập thẻ Cybersource trên Website chuỗi",
    "Checkout nhượng quyền hỗ trợ nhập thẻ Cybersource được lưu trữ và xác thực card token khi nhà cung cấp được kích hoạt.",
  ],
  [
    "Mẫu email gửi mã xác thực OTP",
    "Mã xác thực một lần có thể gửi qua mẫu email riêng biệt, mở rộng lựa chọn OTP khi dự án bật xác minh qua email.",
  ],

  // October 2025 (3 entries)
  [
    "Tích hợp kênh bán Uber Eats",
    "Bổ sung Uber Eats làm kênh tích hợp bên thứ ba cho các dự án nhận đơn từ sàn giao đồ ăn này.",
  ],
  [
    "Tích hợp kênh bán Rappi",
    "Bổ sung Rappi làm kênh tích hợp bên thứ ba cho các dự án bán hàng qua sàn Rappi.",
  ],
  [
    "Mở thẳng đơn hàng từ thông báo đẩy",
    "Chạm vào thông báo đơn chờ xử lý hoặc thanh toán trên ứng dụng sẽ mở trực tiếp màn hình đơn hàng tương ứng thay vì về trang chủ.",
  ],

  // September 2025 (4 entries)
  [
    "Đối tác giao hàng Uber Direct",
    "Bổ sung Uber Direct vào danh sách công ty giao hàng cho các dự án điều phối giao nhận qua kết nối này.",
  ],
  [
    "Tính chính xác giá tùy chọn nửa phần",
    "Tổng tiền món và chi tiết tùy chọn sử dụng đúng giá nửa phần cho tùy chọn trái/phải, tự động dùng giá toàn phần nếu chưa đặt giá riêng.",
  ],
  [
    "Thanh toán thẻ GlobalPay trên Website chuỗi",
    "Cấu hình checkout GlobalPay hỗ trợ nhập thẻ bảo mật, chọn thẻ đã lưu và kiểm tra hợp lệ thông tin thanh toán.",
  ],
  [
    "Khám phá cửa hàng gần đây qua bản đồ Đặt ngay",
    "Khách hàng tìm kiếm cửa hàng lân cận qua trải nghiệm bản đồ Đặt ngay với chỉ dẫn vị trí và tìm kiếm rõ ràng hơn.",
  ],

  // August 2025 (3 entries)
  [
    "Đăng nhập Google dành cho iOS",
    "Dự án có thể cấu hình riêng Google login client ID cho iOS để bật đăng nhập Google trên ứng dụng di động.",
  ],
  [
    "Chụp ảnh trực tiếp từ camera cho hồ sơ và xác minh giao hàng",
    "Tài xế có thể chụp ảnh mới ngay từ camera điện thoại để cập nhật ảnh hồ sơ và gửi ảnh bằng chứng giao hàng.",
  ],
  [
    "Thanh toán thẻ GlobalPay trên Ứng dụng chuỗi",
    "Hỗ trợ nhập và chọn thẻ GlobalPay kèm kiểm tra hợp lệ trước khi ứng dụng gửi thông tin thanh toán.",
  ],

  // July 2025 (3 entries)
  [
    "Thuế suất tùy chỉnh theo từng cửa hàng",
    "Giỏ hàng và đơn hàng hỗ trợ áp dụng quy tắc thuế riêng theo mã thuế và loại đơn hàng để tính tổng chính xác hơn.",
  ],
  [
    "Thẻ quà tặng trên Ứng dụng",
    "Khách hàng có thể xem, mua và sử dụng thẻ quà tặng ngay trong ứng dụng khi tính năng này được kích hoạt.",
  ],
  [
    "Ví tiền mặt và điểm thưởng trên Ứng dụng",
    "Khách hàng mở xem số dư ví tiền mặt và điểm thành viên trực tiếp từ trang hồ sơ khi dự án bật tính năng ví.",
  ],

  // June 2025 (3 entries)
  [
    "API quản lý phương thức thanh toán đã lưu của khách",
    "Bổ sung các endpoint đăng ký, liệt kê và xóa thẻ đã lưu của khách hàng, bao gồm phạm vi theo từng cửa hàng.",
  ],
  [
    "Ảnh xác minh giao hàng theo từng trạng thái",
    "Cho phép yêu cầu bắt buộc ảnh xác minh trước khi chuyển sang một số trạng thái đơn nhất định, tăng độ tin cậy cho bằng chứng giao hàng.",
  ],
  [
    "Tích hợp Simphony POS",
    "Bổ sung Oracle Simphony vào danh sách tùy chọn tích hợp POS bên thứ ba.",
  ],

  // May 2025 (3 entries)
  [
    "Gán nhóm tài xế theo tài khoản người dùng",
    "Quản trị viên có thể phân bổ tài xế vào các nhóm tài xế thông qua endpoint người dùng chuyên biệt để đồng bộ phạm vi giao hàng.",
  ],
  [
    "Quản lý lựa chọn website nhượng quyền",
    "Mục quản lý website hỗ trợ chọn giữa các ứng dụng website nhượng quyền thuộc cùng một dự án.",
  ],
  [
    "Hỗ trợ thanh toán Izipay trên Website chuỗi",
    "Cấu hình thanh toán Izipay hỗ trợ chuyển hướng checkout, liên kết quay lại và thông tin thẻ nhà cung cấp trên gian hàng nhượng quyền.",
  ],

  // April 2025 (3 entries)
  [
    "Kênh bán hàng trong mục Connect",
    "Quản trị viên có thể truy cập và cấu hình các kênh bán hàng trực tiếp từ mục Connect khi tính năng được bật.",
  ],
  [
    "Danh mục quản lý tích hợp bên thứ ba",
    "Cửa hàng và dự án có thể quản lý tập trung các tích hợp bên thứ ba thông qua controller và model API chuyên dụng cho kênh bán và đối tác POS.",
  ],
  [
    "Đồng bộ thực đơn và cửa hàng với POS",
    "Bổ sung các endpoint đồng bộ thực đơn, danh mục, sản phẩm và cửa hàng kèm mã đồng bộ và kiểm tra hợp lệ cho các hệ thống POS kết nối.",
  ],

  // March 2025 (3 entries)
  [
    "Phương thức thanh toán tự động cho Stripe Direct",
    "Stripe Direct hỗ trợ đăng ký phương thức thanh toán tự động, đơn giản hóa quy trình thiết lập lưu thẻ và thanh toán nhanh.",
  ],
  [
    "Hỗ trợ thanh toán Izipay trên Website",
    "Bước thanh toán nhận diện luồng chuyển hướng Izipay và tự điều chỉnh tính năng lưu thẻ theo khả năng của nhà cung cấp.",
  ],
  [
    "Mẫu dữ liệu phương thức thanh toán",
    "Phương thức thanh toán hỗ trợ mẫu dữ liệu cấu hình linh hoạt giúp định nghĩa cách thu thập và lưu trữ trường thông tin đặc thù từng cổng.",
  ],

  // February 2025 (4 entries)
  [
    "Chi tiết thanh toán ví trên giỏ hàng đa cửa hàng",
    "Checkout đa cửa hàng truyền thông tin ví của từng giỏ đủ điều kiện sang bước chọn thanh toán và hiển thị rõ khoản khấu trừ ví trong tóm tắt đơn.",
  ],
  [
    "Chi tiết cửa hàng nhận món tại checkout (Website chuỗi)",
    "Khách hàng có thể mở xem địa chỉ và thông tin chi tiết của chi nhánh tự đến lấy ngay tại bước thanh toán.",
  ],
  [
    "Chi tiết cửa hàng nhận món tại checkout (Ứng dụng chuỗi)",
    "Checkout tự đến lấy cho phép khách kiểm tra địa chỉ và thông tin chi nhánh đã chọn trước khi đặt đơn.",
  ],
  [
    "Hỗ trợ thanh toán Interswitch trên Ứng dụng chuỗi",
    "Khách hàng có thể chuyển tiếp thanh toán qua Interswitch ngay từ bước checkout trên ứng dụng khi cửa hàng đã cấu hình.",
  ],

  // January 2025 (5 entries)
  [
    "Cập nhật hàng loạt đơn hàng qua API",
    "Đội ngũ vận hành có thể cập nhật nhiều đơn hàng trong một yêu cầu API duy nhất, giảm thao tác lặp lại trong khung giờ cao điểm.",
  ],
  [
    "Delivery Service Connect và đối tác DoorDash",
    "Bổ sung luồng công ty giao hàng Delivery Service Connect và tùy chọn đối tác DoorDash cho các dự án điều phối giao nhận qua kết nối này.",
  ],
  [
    "Xác thực thẻ Stripe trong thanh toán đa cửa hàng",
    "Checkout đa cửa hàng xử lý xác thực thẻ Stripe bằng thông tin giao dịch chờ duyệt và tự mở nhóm đơn tương ứng sau khi xác nhận.",
  ],
  [
    "Thu gọn/mở rộng thông tin chi tiết đơn giao",
    "Tài xế có thể mở rộng hoặc thu gọn thông tin cửa hàng và khách hàng trên mỗi đơn để màn hình gọn gàng và dễ tập trung.",
  ],
  [
    "Mở xác nhận đơn sau thanh toán đa cửa hàng",
    "Checkout đa cửa hàng tự động mở màn hình nhóm đơn hoàn tất ngay khi trạng thái giỏ hàng cập nhật, giữ trải nghiệm liền mạch cho khách.",
  ],
];

export const CHANGELOG_ENTRIES_VI: ChangelogEntry[] = CHANGELOG_ENTRIES.map((entry, idx) => {
  const translated = VI_TRANSLATIONS[idx];
  return {
    ...entry,
    month: MONTH_MAP_VI[entry.month] ?? entry.month,
    date: formatViDate(entry.datetime),
    productLabel: PRODUCT_LABEL_MAP_VI[entry.product],
    title: translated ? translated[0] : entry.title,
    body: translated ? translated[1] : entry.body,
  };
});

export function getChangelogProductAreas(isVi: boolean): ChangelogProductArea[] {
  return isVi ? CHANGELOG_PRODUCT_AREAS_VI : CHANGELOG_PRODUCT_AREAS;
}

export function getChangelogEntries(isVi: boolean): ChangelogEntry[] {
  return isVi ? CHANGELOG_ENTRIES_VI : CHANGELOG_ENTRIES;
}
