---
version: 1.1-draft
name: OPERO
description: >-
  Ngôn ngữ thiết kế của OPERO, nền tảng vận hành số cho thương hiệu F&B tại Việt Nam (Website, Mobile App,
  Zalo Mini App, Loyalty, CDP, tích hợp POS/ERP). Hệ thống xây quanh logo D01 "Orbit": chữ O là một vòng hở màu
  đỏ với một chấm xanh, nghĩa là một đơn hàng được kết nối. Đỏ OPERO là màu thương hiệu, mực gần đen là màu làm
  việc, xanh lá chỉ là điểm nhấn. Một họ chữ duy nhất: font hệ thống của Apple (SF Pro) cho cả tiêu đề, giao diện và số.
  Có bốn bề mặt: website marketing, Merchant Console, ứng dụng đặt món white-label và POS/KDS.

colors:
  # Brand
  brand-red: "#D91842"
  brand-red-hover: "#B8123A"
  brand-red-press: "#94102F"
  brand-red-50: "#FDECEF"
  brand-red-100: "#F9D0D8"
  brand-green: "#5E9B2E"
  brand-green-text: "#3F7A1C"
  brand-green-50: "#EEF6E8"
  # Ink and neutrals
  ink: "#151417"
  ink-2: "#3A393F"
  ink-mute: "#6E6D75"
  ink-faint: "#9A99A1"
  line: "#D9D9DD"
  line-soft: "#EBEBED"
  canvas: "#FFFFFF"
  canvas-soft: "#F5F5F6"
  # Dark
  night: "#111013"
  night-surface: "#1B1A1F"
  night-line: "#2A2A2E"
  on-dark: "#FFFFFF"
  on-dark-mute: "#A9A8AF"
  # Semantic (app surfaces)
  success: "#3F7A1C"
  success-bg: "#EEF6E8"
  warning: "#9A5B00"
  warning-bg: "#FFF4E0"
  danger: "#B8123A"
  danger-bg: "#FDECEF"
  info: "#1F5FBF"
  info-bg: "#EAF1FC"

typography:
  display-xl:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.6px
  display-lg:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.8px
  heading:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  ui:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  ui-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  figure:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.4px
    fontFeature: tnum
  table:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: tnum
  small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  sm: 8px
  lg: 20px
  tile: 23%
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section-sm: 64px
  section: 96px
  section-lg: 128px

components:
  button-brand:
    backgroundColor: "{colors.brand-red}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-brand-hover:
    backgroundColor: "{colors.brand-red-hover}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-primary-app:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.canvas}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  panel-dark:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  status-chip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  nav-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: 16px 32px
  sidebar-app:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-2}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: 16px 12px
  hero:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.lg}"
    padding: 72px 64px 80px
  order-orbit:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: 0px
---

# OPERO: DESIGN.md

> Tài liệu nguồn cho mọi giao diện của OPERO. AI agent và designer đọc file này trước khi dựng trang hoặc màn hình.
> Nhận diện thương hiệu (logo, giọng văn, phong thủy) nằm ở [brand/BRAND.md](brand/BRAND.md). Logo gốc: [D01/](D01/).

## 1. Overview

OPERO bán **sự vận hành trơn tru** cho chủ chuỗi F&B: đơn hàng từ mọi kênh về một chỗ, khách quay lại nhờ loyalty,
dữ liệu khách nằm trong tay thương hiệu. Giao diện phải cho cảm giác **chắc chắn, gọn, nhanh tay**, giống một ca bếp chạy
đúng giờ, không giống một trang quảng cáo công nghệ.

**Ý tưởng xuyên suốt: Orbit.** Logo là một vòng hở và một chấm: một đơn hàng đang đi trên quỹ đạo vận hành. Vòng và
chấm trở thành ngôn ngữ của sản phẩm:
- Trạng thái đơn hàng hiển thị như một vòng tiến trình, chấm là bước hiện tại (`order-orbit`).
- Website dùng một vòng đỏ rất lớn, bị cắt ở mép khung, làm hình nền của một hoặc hai khoảnh khắc chính.
- Chấm xanh chỉ xuất hiện khi có điều thật sự mới hoặc đang hoạt động (đơn mới, kết nối thành công).

**Đặc điểm chính:**
- Đỏ OPERO (`{colors.brand-red}`) là màu thương hiệu, không phải màu trang trí. Mỗi màn hình có rất ít đỏ.
- Mực gần đen (`{colors.ink}`) là màu làm việc: chữ, nút chính trong app, nền tối của khoảnh khắc lớn.
- Xanh lá (`{colors.brand-green}`) chỉ là điểm nhấn nhỏ và trạng thái thành công, không bao giờ là mảng lớn.
- Chữ đậm, ít cỡ, cách xa nhau. Mọi con số (giá, đơn, doanh thu) dùng tabular figures.
- Hình dạng: nút và chip bo tròn hẳn (pill, gợi vòng Orbit); khung và panel bo lớn 20px; không có mức bo trung bình chung chung.
- Ảnh thật của món ăn, quầy, bếp và giao diện thật của sản phẩm. Không ảnh stock văn phòng, không dashboard giả.

### Bốn bề mặt

| Bề mặt | Người dùng | Nền mặc định | Nút chính | Mật độ |
|---|---|---|---|---|
| Website marketing (opero.vn) | Chủ chuỗi, quản lý vận hành | Trắng, xen mảng tối `night` | `button-brand` (đỏ) | Thoáng |
| Merchant Console (web app) | Quản lý cửa hàng, marketing, kế toán | Trắng + sidebar `canvas-soft` | `button-primary-app` (mực) | Dày |
| Ứng dụng đặt món white-label (Web, App, Zalo Mini App) | Thực khách | Theo theme của merchant | Màu chính của merchant | Vừa |
| POS / KDS (màn hình bếp) | Thu ngân, bếp | Sáng (POS), tối (KDS) | Mực (POS), trắng trên tối (KDS) | Chạm lớn |

## 2. Colors

### Brand
- **Đỏ OPERO** (`{colors.brand-red}` #D91842): logo, nút CTA trên website, khoảnh khắc thương hiệu. Tương phản trên trắng 5.0:1 (đạt AA cho chữ).
- **Đỏ hover / press** (`{colors.brand-red-hover}` #B8123A, `{colors.brand-red-press}` #94102F).
- **Đỏ nhạt** (`{colors.brand-red-50}`, `{colors.brand-red-100}`): nền rất nhẹ cho vùng chọn hoặc thông báo thương hiệu.
- **Xanh OPERO** (`{colors.brand-green}` #5E9B2E): chấm trong logo, điểm nhấn, đồ họa. Tương phản trên trắng 3.4:1, **không dùng cho chữ thường**.
- **Xanh chữ** (`{colors.brand-green-text}` #3F7A1C): khi cần chữ xanh (5.2:1 trên trắng).

### Mực và trung tính
- `{colors.ink}` #151417: chữ chính, nút chính trong app, nền khoảnh khắc tối. Không dùng đen thuần #000.
- `{colors.ink-2}` #3A393F: chữ phụ. `{colors.ink-mute}` #6E6D75: nhãn, chú thích (≈5:1). `{colors.ink-faint}` #9A99A1: placeholder, trạng thái tắt.
- `{colors.line}` / `{colors.line-soft}`: viền ô nhập liệu và đường chia trong bảng của app. Website không dùng đường kẻ mảnh làm trang trí.
- `{colors.canvas}` trắng; `{colors.canvas-soft}` #F5F5F6: mảng nền phụ, sidebar, nút phụ.

### Tối
- `{colors.night}` #111013 và `{colors.night-surface}` #1B1A1F: khoảnh khắc tối trên website, KDS, chế độ tối của Console.
- Trên nền tối, logo dùng vòng đỏ và chữ trắng (xem BRAND.md).

### Semantic (chỉ trong app)
| Vai trò | Chữ / biểu tượng | Nền |
|---|---|---|
| Thành công | `{colors.success}` #3F7A1C | `{colors.success-bg}` |
| Cảnh báo | `{colors.warning}` #9A5B00 | `{colors.warning-bg}` |
| Lỗi / hủy | `{colors.danger}` #B8123A | `{colors.danger-bg}` |
| Thông tin | `{colors.info}` #1F5FBF | `{colors.info-bg}` |

**Quy tắc đỏ trong app:** vì đỏ thương hiệu gần với màu lỗi, Merchant Console và POS **không dùng đỏ cho nút chính**.
Nút chính là mực. Đỏ trong app chỉ có ở logo và các hành động phá hủy hoặc lỗi, luôn đi kèm chữ và biểu tượng để không
phụ thuộc vào màu.

### Tỷ lệ màu
- Website: khoảng 70% trắng, 20% mực/tối, 8% đỏ, 2% xanh.
- App: khoảng 90% trắng và trung tính, đỏ và xanh dưới 3%.
- Biểu đồ: một màu cho dữ liệu chính (mực hoặc đỏ cho kỳ hiện tại), các kỳ so sánh màu xám. Không dùng bảng màu cầu vồng.

## 3. Typography

### Font
- **Một họ chữ duy nhất: font hệ thống của Apple (SF Pro)** cho tiêu đề, giao diện, bảng và số. Stack khai báo trong token:
  `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif`.
- SF Pro hỗ trợ đầy đủ dấu tiếng Việt và có chữ số đều cột (`tnum`), phù hợp bảng giá và số liệu.
- **Giới hạn giấy phép:** Apple không cho đưa SF Pro lên web làm file font, nên giao diện chỉ gọi font hệ thống. Trên Mac, iPhone, iPad
  người dùng thấy đúng SF Pro; trên Windows và Android trình duyệt tự dùng Segoe UI hoặc Roboto thay thế. Chấp nhận khác biệt này, không nhúng SF Pro lên web.
  Muốn SF Pro đồng nhất trên mọi nền tảng, cần xem lại giấy phép của Apple trước.
- Không dùng font monospace làm giọng "công nghệ". Thử mọi bố cục bằng chuỗi có nhiều dấu: *"Quản lý đơn hàng, khách hàng thân thiết và doanh thu ở một nơi"*.
- Logo (wordmark OPERO) là hình vẽ, không phải chữ gõ. Không gõ lại logo bằng font.
- Lịch sử: Poppins (mockup đầu) → Be Vietnam Pro + Inter → SF Pro hệ thống (hiện tại, theo bản demo được chọn).

### Thang chữ: website (5 cỡ, cách xa nhau)
| Token | Cỡ | Đậm | Dùng cho |
|---|---|---|---|
| `{typography.display-xl}` | 64 → 40 (mobile) | 700 | Tiêu đề hero, tối đa 2 dòng (~32 ký tự) |
| `{typography.display-lg}` | 40 → 30 | 700 | Tiêu đề section |
| `{typography.heading}` | 24 → 20 | 600 | Tiêu đề khối, tên gói |
| `{typography.lead}` | 18 → 16 | 400 | Câu giải thích dưới tiêu đề |
| `{typography.body}` | 15 | 400 | Nội dung |

### Thang chữ: app
| Token | Cỡ | Đậm | Dùng cho |
|---|---|---|---|
| `{typography.ui-title}` | 22 | 600 | H1 của màn hình (một h1 mỗi màn hình, là danh từ: "Đơn hàng", "Khách hàng") |
| `{typography.figure}` | 28 | 600 | Con số trả lời câu hỏi chính (doanh thu hôm nay) |
| `{typography.ui}` | 14 | 500 | Nhãn, nút, menu |
| `{typography.table}` | 14 | 400 | Bảng, danh sách (`tnum`) |
| `{typography.small}` | 12 | 400 | Chú thích, thời gian. Không nhỏ hơn 12px |

### Quy tắc
- Câu viết hoa kiểu câu (sentence case). Không dùng chữ in hoa giãn cách nhỏ làm nhãn trang trí.
- Mọi giá, số lượng, phần trăm: `font-feature-settings: "tnum"`, căn phải trong bảng.
- Không đổi màu hay in nghiêng một từ trong tiêu đề để "nhấn". Một tiêu đề, một màu.

## 4. Định dạng nội dung Việt Nam
- **Tiền:** `125.000 ₫` (dấu chấm ngăn nghìn, ký hiệu ₫ sau số, có khoảng trắng). Gọn: `1,25 tr ₫` chỉ trong biểu đồ. Dùng `Intl.NumberFormat('vi-VN', {style:'currency', currency:'VND'})`.
- **Ngày giờ:** `23/10/2026`, `14:05` (24 giờ). Tương đối: "5 phút trước", "hôm qua lúc 21:40".
- **Số điện thoại:** `0975 244 131`. **Địa chỉ:** số nhà, đường, phường/xã, quận/huyện, tỉnh/thành.
- **Kênh phổ biến:** Zalo, Facebook, GrabFood, ShopeeFood, tại quầy, website, app. Dùng đúng tên thương hiệu của kênh.
- **Thanh toán:** tiền mặt, chuyển khoản / VietQR, ví điện tử, thẻ.

## 5. Layout

### Spacing
- Đơn vị 4px. Token: 4, 8, 12, 16, 24, 32 và các bước section 64 / 96 / 128.
- Website: section cách nhau 96–128px (desktop), 64px (mobile). Một gutter duy nhất cho mỗi lưới.
- App: một gap duy nhất 16 hoặc 24px cho cả chiều ngang và dọc. Lề canvas 24–32px.

### Lưới
- Website: khung 1200px, 12 cột, gutter 24px. Lề mobile 16–20px, không có cuộn ngang.
- Bố cục bám lề trái, chỉ một khoảnh khắc canh giữa mỗi trang. Mỗi section dùng một bố cục khác section liền kề.
- Console: sidebar 232px có nhãn, canvas co giãn, cột phải 320px khi cần chi tiết đơn.

## 6. Elevation & Depth
- Chiều sâu đến từ **bước tông** (trắng trên `canvas-soft`, `night-surface` trên `night`), không phải bóng đổ.
- Bóng chỉ cho lớp nổi thật: menu thả xuống, popover, dialog: `0 8px 24px rgba(21,20,23,0.12)`.
- Không bóng xám dưới mọi card, không glassmorphism, không glow, không gradient trên nút hay chữ.

## 7. Shapes
| Token | Giá trị | Dùng cho |
|---|---|---|
| `{rounded.pill}` | 9999px | Nút, chip, segmented control, avatar, thanh tiến trình. Gợi vòng Orbit |
| `{rounded.lg}` | 20px | Panel, dialog, khung ảnh, khung giao diện trên website, khối hero |
| `{rounded.sm}` | 8px | Ô nhập liệu, ô trong bảng, thumbnail nhỏ |
| `{rounded.tile}` | 23% | App icon, avatar thương hiệu merchant |

Hình học đồ họa: vòng tròn và vòng hở với độ dày bằng 40/256 đường kính ngoài (giống logo), chấm tròn. Không dùng
hình lá, quả táo hay sóng nước (đó là logo cũ, đã bỏ).

## 8. Components

### Nút
- **`button-brand`**: CTA trên website. Đỏ, chữ trắng, pill, cao 48px. Tối đa một nút đỏ mỗi màn hình đầu và mỗi section.
- **`button-primary-app`**: hành động chính trong Console và POS. Mực, chữ trắng, pill, cao 36px (Console) hoặc 56px (POS).
- **`button-secondary`**: nền `canvas-soft`, chữ mực. Không viền.
- **`button-danger`**: chỉ cho hành động phá hủy (hủy đơn, xóa). Luôn có hộp xác nhận nêu rõ hậu quả.
- **Nhãn nút gọi tên hành động:** "Đặt lịch demo", "Xem bảng giá", "Nhận đơn", "Hoàn tiền 125.000 ₫". Không dùng "Tìm hiểu thêm", "Bắt đầu ngay".
- Trạng thái: hover tối hơn một bước, focus vòng 2px `{colors.ink}` cách 2px, disabled `ink-faint` trên `canvas-soft`.

### Form
- **`input`**: cao 40px (Console), 48px (thực khách, POS), viền 1px `{colors.line}`, focus viền `{colors.ink}`.
- Nhãn ở trên ô, kiểu câu. Lỗi ở dưới ô, màu `danger`, kèm cách sửa ("Số điện thoại cần 10 chữ số").
- Ô số điện thoại tự định dạng `0975 244 131`. Ô tiền hiển thị `₫` cố định, nhập số thuần.

### Panel và bảng (app)
- **`panel`**: nền trắng trên `canvas-soft`, bo 20px, đệm 24px. Không icon trong ô vuông màu.
- Bảng: không có dải màu ở header, header chữ `ink-mute` 12–13px, hàng cao 44px, đường chia `line-soft`. Số căn phải, `tnum`.
- Trạng thái trống dùng ngôn ngữ nghề: "Chưa có đơn nào hôm nay. Đơn mới sẽ hiện ở đây kèm tiếng báo."

### Chip trạng thái
- **`status-chip`**: pill nhỏ, chữ và nền theo semantic. Trạng thái đơn: Mới, Đã nhận, Đang làm, Sẵn sàng, Đang giao, Hoàn tất, Đã hủy.

### Điều hướng
- **`nav-marketing`**: thanh ngang đơn giản, logo trái, 4–5 mục, nút "Đặt lịch demo" phải. Không nổi, không blur.
- **`sidebar-app`**: logo OPERO và tên chuỗi/cửa hàng đang chọn ở trên cùng (có bộ chuyển cửa hàng). Nhóm: Bán hàng (Đơn hàng, Menu,
  Kênh bán), Khách hàng (Khách hàng, Loyalty, Chiến dịch), Báo cáo, Cài đặt. Mục đang chọn: pill xám, không đổi màu chữ.
  Số đếm chỉ trên hàng đợi cần xử lý (ví dụ "Đơn hàng 3").

### Thành phần riêng của OPERO

**`order-orbit`: vòng trạng thái đơn hàng.** Vòng hở cùng hình học với logo; cung đã đi tô `ink` (hoặc màu merchant),
cung còn lại `line-soft`; chấm nằm ở bước hiện tại, màu `brand-green` khi đang chạy, `danger` khi có vấn đề. Bên cạnh vòng
luôn có chữ trạng thái và thời gian ("Đang làm · còn khoảng 8 phút"). Dùng trong chi tiết đơn, theo dõi đơn của thực khách,
và thẻ đơn trên KDS. Không dùng làm trang trí và không cho nhấp nháy liên tục.

**Hero website (theo bản demo).** Khối nền `night` bo `{rounded.lg}` 20px, rộng bằng khung nội dung 1200px, cách thanh menu 16px.
Hai cột: chữ bên trái (tiêu đề 60px, tối đa 2 dòng, đoạn dẫn 18px rộng khoảng 46 ký tự, hai nút cách nhau 12px), vòng Orbit bên phải
rộng tối đa 380px, nằm trọn trong khối và thấy đủ chấm xanh. Lề trong `clamp(24px, 5vw, 64px)`, đệm dọc 72px trên và 80px dưới.
Dưới 900px: một cột, vòng thu còn 140px và đặt phía trên chữ, đệm dọc 48px và 56px.

**Vòng lớn trên website.** Ngoài hero, vòng đỏ có thể phóng lớn cắt ở mép khung ở một khối khác (ví dụ CTA cuối). Độ dày theo tỷ lệ logo. Tối đa hai lần
trên một trang (ví dụ hero hoặc khối CTA cuối). Không đặt chữ đè lên phần đỏ.

**Mảnh giao diện thật.** Website minh họa bằng màn hình thật của Console và app đặt món, dữ liệu tiếng Việt hợp lý
(món, giá, giờ, kênh), các tổng cộng khớp nhau. Cắt cận vào phần chứng minh luận điểm, không chụp nguyên màn hình nhỏ xíu.

## 9. UX principles

1. **Một màn hình, một câu hỏi.** Mỗi màn hình trả lời một câu (ví dụ "Hôm nay đang bán thế nào?") bằng khối lớn nhất. Câu trả lời đặt cạnh bằng chứng.
2. **Việc thường làm nhất cách một chạm.** Nhận đơn, báo hết món, in hóa đơn, gửi voucher.
3. **Không để đơn bị lỡ.** Đơn mới có âm thanh, chip "Mới", và chấm xanh Orbit trên mục Đơn hàng. Hết hạn xác nhận thì chuyển sang cảnh báo, không lặng lẽ.
4. **Màu nói tốt hay xấu, không nói lên hay xuống.** Doanh thu tăng là xanh; thời gian chờ tăng là đỏ. Thay đổi bằng 0 là xám. Mọi so sánh ghi rõ mốc ("so với thứ Năm tuần trước").
5. **Ngôn ngữ của nghề F&B.** "Hết món", "Món kèm", "Ca sáng", "Chốt ca", "Phí ship", không dùng thuật ngữ phần mềm khi có từ nghề.
6. **Chạm được bằng ngón tay đang bận.** POS và KDS: vùng chạm tối thiểu 48px, hành động chính 56px, không thao tác kéo thả bắt buộc.
7. **Mạng yếu vẫn bán được.** POS lưu đơn offline, hiển thị rõ "Chưa đồng bộ (3 đơn)" và tự đồng bộ lại.
8. **Thực khách đi nhanh.** Ứng dụng đặt món: từ mở đến đặt xong dưới 60 giây; đăng nhập bằng số điện thoại / Zalo; giỏ hàng luôn thấy tổng tiền.
9. **Dữ liệu thật, không phô trương.** Không có số liệu ảo, logo khách hàng hay lời chứng thực chưa được phép.

### Trạng thái bắt buộc cho mỗi màn hình app
Đang tải (skeleton theo hình dạng thật), trống (câu hướng dẫn + một hành động), lỗi (nói chuyện gì xảy ra và làm gì tiếp),
mất kết nối, không có quyền, và đầy dữ liệu (kiểm tra với 1.000+ đơn, tên món dài, tên tiếng Việt có dấu dài).

## 10. White-label theme (ứng dụng đặt món của merchant)
Ứng dụng của thực khách mang thương hiệu của merchant, không phải của OPERO.
- Merchant cung cấp: logo, `merchant-primary`, `merchant-on-primary`, ảnh bìa, font (tùy chọn, phải có dấu tiếng Việt).
- Hệ thống kiểm tra tương phản: `merchant-primary` với `merchant-on-primary` ≥ 4.5:1; nếu không đạt thì tự đổi chữ sang trắng hoặc mực.
- Các token còn lại (spacing, bo góc, thang chữ, semantic, `order-orbit`) giữ nguyên để chất lượng đồng đều.
- OPERO chỉ xuất hiện nhỏ ở chân trang: "Vận hành bởi OPERO".
- Zalo Mini App: tuân theo hướng dẫn giao diện và kiểm duyệt của Zalo Mini App; dùng các token này cho phần nội dung bên trong.

## 11. Imagery & Iconography
- **Ảnh:** món ăn, đồ uống, quầy, bếp, shipper, người chủ quán Việt Nam thật; ánh sáng tự nhiên, màu ấm vừa phải. Ảnh của merchant chỉ dùng khi có cho phép.
- Không ảnh stock văn phòng, bắt tay, người cầm điện thoại cười. Không minh họa 3D bóng bẩy, không dashboard giả bằng thanh xám.
- **Icon:** một bộ nét duy nhất (ví dụ Lucide), nét 1.75px ở 24px, đầu nét tròn, màu `ink` hoặc `ink-mute`. Không đặt icon trong ô vuông màu, không dùng emoji.
- Biểu tượng riêng có thể dựng từ vòng và chấm (kênh bán, kết nối, đồng bộ).

## 12. Motion
- Nhanh và có chức năng: 150ms cho hover và nhấn, 220ms cho panel và dialog, easing `cubic-bezier(0.2, 0, 0, 1)`.
- Một chuyển động thương hiệu: chấm chạy trên vòng Orbit khi đơn chuyển bước (300ms), và vòng logo tự khép khi trang tải lần đầu trên website.
- Không fade-up cho mọi section, không bounce, không vòng lặp vô nghĩa. Tôn trọng `prefers-reduced-motion`.

## 13. Copy (website)
- Tiêu đề ngắn, khoảng 5–7 từ, tối đa 2 dòng. Câu giải thích ngay bên dưới nói rõ OPERO là gì.
- Tránh từ sáo: "giải pháp toàn diện", "đột phá", "tối ưu hóa vượt trội", "hệ sinh thái 4.0", "liền mạch". Nói việc cụ thể: "Đơn từ Grab, Shopee và Zalo về một màn hình."
- Thứ tự trang theo lập luận, không theo khuôn hero, logo, ba tính năng, testimonial, bảng giá, CTA.
- Chi tiết giọng văn: [brand/BRAND.md](brand/BRAND.md) §5.

## 14. Do's and Don'ts

### Do
- Dùng đỏ ít và có chủ đích: logo, một CTA, vòng lớn.
- Dùng mực làm nút chính trong app.
- Dùng `tnum` và định dạng `125.000 ₫` cho mọi giá.
- Dùng ảnh thật và giao diện thật với dữ liệu tiếng Việt.
- Thử mọi màn hình với tên món dài có dấu và ở bề rộng 375px.

### Don't
- Không dùng gradient, glow, glassmorphism, bóng dưới mọi card.
- Không đặt nhãn in hoa nhỏ phía trên mọi tiêu đề, không đánh số section kiểu 01 / 02 / 03, không chữ monospace.
- Không làm ba card tính năng giống nhau có icon trong ô vuông màu.
- Không dùng xanh lá cho mảng lớn hoặc cho chữ thường (dùng `brand-green-text`).
- Không dùng đỏ cho nút chính trong Console và POS.
- Không gõ lại logo bằng font, không dùng logo quả táo cũ, không thêm ".VN" vào logo.
- Không bịa số liệu, logo khách hàng hay lời chứng thực.

## 15. Responsive
| Tên | Rộng | Thay đổi chính |
|---|---|---|
| Wide | ≥ 1440 | Khung 1200, vòng lớn tràn mép |
| Desktop | 1024–1439 | Mặc định; Console có sidebar đầy đủ |
| Tablet | 768–1023 | Sidebar thu thành icon + tooltip; POS dạng ngang |
| Mobile | < 768 | Hero 40px; menu hamburger; bảng chuyển thành danh sách thẻ; nút chính cố định đáy màn hình trong app đặt món |

- Vùng chạm tối thiểu 44px (web), 48px (POS/KDS). Ô nhập 16px trên mobile để iOS không phóng to.

## 16. Accessibility
- Chữ thường ≥ 4.5:1, chữ lớn và đồ họa ≥ 3:1. Các cặp đã kiểm tra: `brand-red` trên trắng 5.0:1, `brand-green-text` trên trắng 5.2:1, `brand-green` trên trắng 3.4:1 (chỉ đồ họa).
- Không truyền đạt chỉ bằng màu: trạng thái luôn có chữ. Đỏ và xanh lá khó phân biệt với người mù màu đỏ-lục.
- Focus nhìn thấy được trên mọi phần tử tương tác. Nhãn `aria` bằng tiếng Việt.

## 17. Iteration Guide
1. Làm một component mỗi lần, gọi đúng tên token (`{colors.brand-red}`, `button-primary-app`, `order-orbit`).
2. Xác định bề mặt trước (website, Console, đặt món, POS) vì quy tắc nút chính khác nhau.
3. Website: chạy quy trình của skill `design-taste-frontend` với `--keep palette,type` để giữ màu và chữ của OPERO.
4. App: theo `references/app-screens.md` của skill đó, `draw.mjs --app --keep palette,type`.
5. Kiểm tra lint: `npx @google/design.md lint DESIGN.md` (cần Node.js).
6. Thêm biến thể mới thành mục riêng trong `components`, không sửa ngầm token cũ.

## 18. Open items
- Phong thủy: chờ năm sinh chủ sở hữu hoặc ngày thành lập để kiểm tra màu theo Ngũ hành (BRAND.md §7). Bảng màu có thể chỉnh.
- Logo D01: tinh chỉnh chữ P/E/R, bản nhỏ 16px với chấm lớn hơn, xuất bộ file đầy đủ.
- Kiểm tra lại tên kênh, phương thức thanh toán và luồng Zalo Mini App với sản phẩm thật.
