# 🚀 Portfolio Auto-Sync System
## Hướng dẫn sử dụng

---

## ✅ Cách hoạt động

Khi bạn chỉnh sửa nội dung trong **Admin Panel** và nhấn **Save**:

1. **Tự động lưu vào `data.json`** - File dữ liệu chính
2. **Tự động cập nhật `index.html`** - Website hiển thị
3. **(Tùy chọn) Tự động push lên GitHub** - Nhấn nút "🚀 Save & Push to GitHub"

---

## 🛠️ Cách sử dụng

### Bước 1: Khởi động server

```bash
cd C:\Users\ADMIN\.gemini\antigravity\scratch\portfolio-website\portfolio-website
node server.js
```

### Bước 2: Mở Admin Panel

Truy cập: **http://localhost:3001/admin.html**

### Bước 3: Chỉnh sửa và Save

- Sửa bất kỳ nội dung nào trong Admin
- Nhấn **"💾 Save All Changes"** → Lưu vào index.html
- Nhấn **"🚀 Save & Push to GitHub"** → Lưu + Push lên GitHub

---

## 📁 Cấu trúc files

| File | Mô tả |
|------|-------|
| `server.js` | Node.js server xử lý auto-sync |
| `data.json` | Lưu trữ tất cả dữ liệu portfolio |
| `admin.html` | Giao diện Admin Panel |
| `admin.js` | Logic xử lý Admin + API calls |
| `index.html` | Website portfolio (tự động cập nhật) |

---

## ⚠️ Lưu ý quan trọng

1. **Server phải chạy** để tính năng auto-sync hoạt động
2. Nếu server không chạy, changes chỉ lưu vào localStorage
3. Đảm bảo Git đã được cấu hình đúng để push tự động

---

## 🔧 Troubleshooting

### Server không chạy được?
- Đảm bảo đã cài Node.js
- Chạy: `node --version` để kiểm tra

### Push GitHub không hoạt động?
- Kiểm tra Git credentials
- Chạy: `git status` trong thư mục portfolio

---

**Được tạo bởi Antigravity AI** ✨
