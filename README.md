# Cloud-Safe / Sentinel Dashboard

Một hệ thống Giám sát Thiết bị & Bảng điều khiển (Dashboard) cao cấp được xây dựng bằng **Next.js**. Dự án này mang phong cách thiết kế "Dark Neon" tuyệt đẹp, ứng dụng kỹ thuật Glassmorphism (giao diện kính), bố cục responsive và các hiệu ứng chuyển động mượt mà.

## 🚀 Tính năng nổi bật

- **Công nghệ Hiện đại**: Xây dựng với Next.js (App Router) và React.
- **UI/UX Cao cấp**: Phong cách "Dark Neon" với hiệu ứng Glassmorphism tiên tiến (làm mờ phông nền, viền phát sáng, các lớp bán trong suốt).
- **Hiệu ứng mượt mà**: Chuyển trang và tương tác (micro-interactions) được xử lý vô cùng mượt mà bởi thư viện `framer-motion`.
- **Trực quan hóa Dữ liệu**: Biểu đồ tương tác hiển thị số liệu hệ thống sử dụng `recharts`.
- **Luồng Xác thực Hoàn chỉnh**: Giao diện Đăng nhập (Login) và Đăng ký (Register) được thiết kế tinh tế với trải nghiệm người dùng liền mạch.
- **Hệ sinh thái Dashboard**: Bao gồm các trang chuyên biệt cho Tổng quan (Dashboard), Quản lý Thiết bị (Devices), Cảnh báo (Alerts), Phân tích (Analytics) và Cài đặt (Settings).
- **Kiến trúc Clean Code**: Các component React được phân chia rõ ràng (modular), mã nguồn tối ưu và gọn gàng, không có code thừa.

## 🛠️ Công nghệ sử dụng

- **Framework**: [Next.js](https://nextjs.org/)
- **UI & Styling**: CSS thuần (Global CSS) kết hợp với các class tiện ích tự định nghĩa (utility classes) & biến CSS (CSS variables).
- **Hiệu ứng (Animations)**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Biểu đồ (Charts)**: [Recharts](https://recharts.org/)

## 📂 Cấu trúc Dự án

```text
.
├── app/
│   ├── alerts/          # Trang theo dõi cảnh báo hệ thống
│   ├── analytics/       # Trang biểu đồ và phân tích chuyên sâu
│   ├── dashboard/       # Bảng tổng quan chính (Trang chủ)
│   ├── devices/         # Trang quản lý tình trạng thiết bị
│   ├── login/           # Trang Đăng nhập
│   ├── register/        # Trang Đăng ký tài khoản
│   ├── settings/        # Cài đặt người dùng và tùy chỉnh hệ thống
│   ├── globals.css      # Style toàn cục, hệ thống thiết kế & class tiện ích
│   └── layout.js        # Layout gốc của toàn bộ ứng dụng
└── components/
    ├── AlertsTable.js   # Component bảng cho các cảnh báo
    ├── AnalyticsChart.js# Component biểu đồ tương tác (AreaChart)
    ├── LayoutWrapper.js # Khung giao diện bọc ngoài chứa Sidebar & TopNav
    ├── Sidebar.js       # Menu điều hướng chính bên trái
    ├── StatsCard.js     # Các thẻ hiển thị chỉ số tổng quan (KPI)
    └── TopNav.js        # Thanh công cụ phía trên chứa thông tin user & hành động
```

## 🚦 Hướng dẫn Cài đặt

Đầu tiên, hãy cài đặt các thư viện phụ thuộc:

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

Sau đó, khởi chạy server ở chế độ development:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để trải nghiệm ứng dụng.

## 🎨 Hệ thống Thiết kế (Design System)

Ứng dụng sử dụng một hệ thống thiết kế tùy chỉnh được xây dựng chi tiết trong `globals.css`, tập trung vào việc kiểm soát tuyệt đối hình ảnh và giao diện:
- **Màu sắc**: Sử dụng nền màu tối (slate: `#0b0e14`, `#10141d`) kết hợp với điểm nhấn màu Cyan rực rỡ (`#00c2ff`) và các màu trạng thái (xanh lá, đỏ, vàng).
- **Glassmorphism**: Sử dụng triệt để thuộc tính `backdrop-filter: blur()`, các dải màu gradient bán trong suốt và hiệu ứng phát sáng nhẹ để tạo chiều sâu đa lớp cho thẻ (card) và các thành phần giao diện.
- **Typography**: Sử dụng font chữ `Inter` mang phong cách công nghệ, hiện đại và rõ ràng.

## 📝 Giấy phép (License)

Dự án này được phân phối dưới Giấy phép MIT.
