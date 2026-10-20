import asyncio
import os
import sys
import base64
from playwright.async_api import async_playwright

if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def get_base64_image(file_path):
    if os.path.exists(file_path):
        ext = os.path.splitext(file_path)[1].lower()
        mime = "image/png" if ext == ".png" else "image/jpeg"
        with open(file_path, "rb") as f:
            encoded = base64.b64encode(f.read()).decode("utf-8")
            return f"data:{mime};base64,{encoded}"
    return ""

html_content = f"""<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trần Hải — Executive Portfolio & CV</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: #0B0F17;
      color: #E2E8F0;
      font-size: 13px;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}
    .page {{
      width: 210mm;
      height: 297mm;
      padding: 16mm 18mm;
      margin: 0 auto;
      background: #0B0F17;
      position: relative;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }}
    .page-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding-bottom: 10px;
      margin-bottom: 16px;
    }}
    .header-logo {{
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #14B8A6;
      text-transform: uppercase;
    }}
    .header-tag {{
      font-size: 10px;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }}
    .page-footer {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 10px;
      margin-top: 16px;
      font-size: 10px;
      color: #64748B;
    }}
    .content {{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }}

    /* Card styling */
    .card {{
      background: #111827;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      padding: 14px 16px;
    }}
    .card-title {{
      font-size: 13px;
      font-weight: 700;
      color: #F8FAFC;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .card-title::before {{
      content: "";
      display: inline-block;
      width: 4px;
      height: 12px;
      background: #14B8A6;
      border-radius: 2px;
    }}

    /* Hero header */
    .profile-hero {{
      display: flex;
      gap: 20px;
      align-items: center;
      background: linear-gradient(135deg, rgba(20, 184, 166, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%);
      border: 1px solid rgba(20, 184, 166, 0.25);
      border-radius: 16px;
      padding: 18px 22px;
    }}
    .avatar {{
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #14B8A6;
      box-shadow: 0 4px 20px rgba(20, 184, 166, 0.3);
    }}
    .hero-info h1 {{
      font-size: 26px;
      font-weight: 900;
      color: #FFFFFF;
      letter-spacing: -0.5px;
    }}
    .hero-role {{
      font-size: 14px;
      color: #2DD4BF;
      font-weight: 700;
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .hero-meta {{
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
      font-size: 11px;
      color: #94A3B8;
    }}
    .hero-meta span {{
      display: flex;
      align-items: center;
      gap: 4px;
    }}

    /* Stats Grid */
    .stats-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }}
    .stat-card {{
      background: #131B26;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 12px 14px;
      text-align: center;
    }}
    .stat-val {{
      font-size: 24px;
      font-weight: 900;
      color: #14B8A6;
      line-height: 1;
    }}
    .stat-lbl {{
      font-size: 10px;
      color: #94A3B8;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 6px;
      letter-spacing: 0.5px;
    }}

    /* Timeline item */
    .timeline-item {{
      background: #131B26;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 14px 16px;
      position: relative;
      margin-bottom: 12px;
    }}
    .timeline-header {{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 6px;
    }}
    .timeline-role {{
      font-size: 15px;
      font-weight: 800;
      color: #FFFFFF;
    }}
    .timeline-company {{
      font-size: 12px;
      color: #2DD4BF;
      font-weight: 600;
      margin-top: 2px;
    }}
    .badge {{
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .badge-teal {{
      background: rgba(20, 184, 166, 0.15);
      color: #2DD4BF;
      border: 1px solid rgba(20, 184, 166, 0.3);
    }}
    .badge-purple {{
      background: rgba(168, 85, 247, 0.15);
      color: #C084FC;
      border: 1px solid rgba(168, 85, 247, 0.3);
    }}
    .timeline-desc {{
      font-size: 11px;
      color: #94A3B8;
      line-height: 1.5;
      margin-bottom: 8px;
    }}
    .timeline-bullet {{
      list-style: none;
      font-size: 11px;
      color: #CBD5E1;
      line-height: 1.4;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }}
    .timeline-bullet li {{
      position: relative;
      padding-left: 14px;
    }}
    .timeline-bullet li::before {{
      content: "•";
      position: absolute;
      left: 0;
      color: #14B8A6;
      font-size: 16px;
      line-height: 12px;
    }}

    /* Project Showcase */
    .project-card {{
      background: #131B26;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 14px;
    }}
    .project-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }}
    .project-title {{
      font-size: 15px;
      font-weight: 800;
      color: #FFFFFF;
    }}
    .project-metrics {{
      font-size: 11px;
      font-weight: 700;
      color: #F59E0B;
      background: rgba(245, 158, 11, 0.12);
      padding: 3px 8px;
      border-radius: 6px;
      border: 1px solid rgba(245, 158, 11, 0.25);
    }}
    .project-desc {{
      font-size: 11px;
      color: #94A3B8;
      margin-bottom: 10px;
    }}
    .img-grid-3 {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }}
    .img-grid-3 img {{
      width: 100%;
      height: 110px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.1);
    }}
    .img-grid-2 {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }}
    .img-grid-2 img {{
      width: 100%;
      height: 110px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.1);
    }}

    /* Skills list */
    .skills-grid {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }}
    .skill-box {{
      background: #131B26;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 8px;
      padding: 10px 12px;
    }}
    .skill-title {{
      font-size: 11px;
      font-weight: 700;
      color: #E2E8F0;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }}
    .progress-bar {{
      width: 100%;
      height: 5px;
      background: #1E293B;
      border-radius: 3px;
      overflow: hidden;
    }}
    .progress-fill {{
      height: 100%;
      background: linear-gradient(90deg, #14B8A6, #2DD4BF);
      border-radius: 3px;
    }}
  </style>
</head>
<body>

  <!-- ================= PAGE 1: EXECUTIVE PROFILE & METRICS ================= -->
  <div class="page">
    <div class="page-header">
      <div class="header-logo">TRAN HAI • EXECUTIVE PORTFOLIO</div>
      <div class="header-tag">MARKETING MANAGER & STRATEGIC CMO</div>
    </div>

    <div class="content">
      <!-- Profile Hero -->
      <div class="profile-hero">
        <img class="avatar" src="{get_base64_image('public/images/personal-photo.jpg')}" alt="Trần Hải">
        <div class="hero-info">
          <h1>TRẦN HẢI</h1>
          <div class="hero-role">Marketing Manager • Strategic CMO</div>
          <div class="hero-meta">
            <span>📞 +84 868 258 686</span>
            <span>✉️ tranhai68.home@gmail.com</span>
            <span>🌐 tranhai68.github.io/profile</span>
            <span>📍 Hà Nội / Toàn Quốc</span>
          </div>
        </div>
      </div>

      <!-- Core KPIs Grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val">10+</div>
          <div class="stat-lbl">Năm Trong Ngành MKT</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">06</div>
          <div class="stat-lbl">Năm Quản Lý Cấp Cao</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">500M+</div>
          <div class="stat-lbl">Lượt Xem Chiến Dịch</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">x3</div>
          <div class="stat-lbl">Tăng Trưởng Doanh Thu</div>
        </div>
      </div>

      <!-- Executive Summary -->
      <div class="card">
        <div class="card-title">Tóm Tắt Năng Lực Cốt Lõi</div>
        <p style="font-size: 11.5px; color: #CBD5E1; line-height: 1.6;">
          Hơn 10 năm kinh nghiệm thực chiến trong ngành Marketing và 6 năm đảm nhiệm cương vị Trưởng Phòng Marketing / CMO. Chuyên sâu về kết nối chiến lược <strong>Kinh Doanh – Marketing – Dữ Liệu – Công Nghệ</strong>. 
          Có thế mạnh vượt trội trong xây dựng thương hiệu (Branding), chỉ đạo các siêu chiến dịch Mega Campaign viral toàn quốc (500M+ views), thiết lập mô hình Marketing Metric đo lường P&L tăng trưởng doanh thu x3, và tối ưu hệ thống chuỗi bán lẻ đa kênh (Omnichannel Retail & E-Commerce).
        </p>
      </div>

      <!-- Strategic Competencies -->
      <div class="card">
        <div class="card-title">Năng Lực Lãnh Đạo & Chuyên Môn</div>
        <div class="skills-grid">
          <div class="skill-box">
            <div class="skill-title">
              <span>Brand Strategy & Architecture</span>
              <span style="color: #14B8A6;">96%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 96%;"></div></div>
          </div>
          <div class="skill-box">
            <div class="skill-title">
              <span>Viral Mega Campaign & Media</span>
              <span style="color: #14B8A6;">98%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 98%;"></div></div>
          </div>
          <div class="skill-box">
            <div class="skill-title">
              <span>P&L Budgeting & Metric Optimization</span>
              <span style="color: #14B8A6;">92%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 92%;"></div></div>
          </div>
          <div class="skill-box">
            <div class="skill-title">
              <span>Omnichannel Retail & Live Commerce</span>
              <span style="color: #14B8A6;">95%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 95%;"></div></div>
          </div>
          <div class="skill-box">
            <div class="skill-title">
              <span>Team Leadership & Agency Management</span>
              <span style="color: #14B8A6;">94%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 94%;"></div></div>
          </div>
          <div class="skill-box">
            <div class="skill-title">
              <span>AI-Powered Marketing Workflows</span>
              <span style="color: #14B8A6;">90%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: 90%;"></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Trần Hải — Executive Dossier</span>
      <span>Trang 1 / 4</span>
    </div>
  </div>

  <!-- ================= PAGE 2: CAREER TIMELINE ================= -->
  <div class="page">
    <div class="page-header">
      <div class="header-logo">HÀNH TRÌNH SỰ NGHIỆP • CAREER TIMELINE</div>
      <div class="header-tag">Kinh Nghiệm Quản Trị Cấp Cao</div>
    </div>

    <div class="content">
      <!-- 1. GUNO -->
      <div class="timeline-item" style="border-left: 3px solid #14B8A6;">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">Head Of Marketing</div>
            <div class="timeline-company">CÔNG TY TNHH GUNO — Thời Trang GUNO</div>
          </div>
          <div class="badge badge-teal">2026 — HIỆN TẠI</div>
        </div>
        <div class="timeline-desc">
          Chỉ đạo toàn diện chiến lược tiếp thị, phân bổ ngân sách và hợp tác nghệ sĩ hàng đầu. Dẫn dắt chiến dịch viral 500M+ views và phát triển mạnh mẽ kênh TikTok Shop & Livestream.
        </div>
        <ul class="timeline-bullet">
          <li>Đạo diễn thành công siêu chiến dịch <strong>Guno x Ngọc Trinh - Quốc Trường</strong> đạt kỷ lục hơn 500 triệu lượt tiếp cận toàn diện.</li>
          <li>Xây dựng hệ thống Livestream Commerce đưa Guno dẫn đầu xu hướng thời trang Gen Z.</li>
        </ul>
      </div>

      <!-- 2. MONTSAND -->
      <div class="timeline-item" style="border-left: 3px solid #C084FC;">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">Leader Marketing</div>
            <div class="timeline-company">CÔNG TY TNHH GOBROSS — Thời Trang Montsand</div>
          </div>
          <div class="badge badge-purple">2025 — 2026</div>
        </div>
        <div class="timeline-desc">
          Hoạch định chiến lược tăng trưởng khách hàng, tối ưu hóa tỷ lệ chuyển đổi cho hệ thống bán lẻ và kênh online cho thương hiệu thời trang cao cấp Montsand.
        </div>
        <ul class="timeline-bullet">
          <li>Quảng bá thành công BST Xuân Hè 2025 (Lily Of The Valley Gown) trên các tạp chí thời trang uy tín (Style-Republik).</li>
          <li>Mở rộng độ phủ showroom bán lẻ và duy trì mức tăng trưởng ấn tượng qua các chiến dịch kích cầu theo mùa.</li>
        </ul>
      </div>

      <!-- 3. DEZUS -->
      <div class="timeline-item" style="border-left: 3px solid #F59E0B;">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">Head Of Marketing</div>
            <div class="timeline-company">CÔNG TY CỔ PHẦN DHARMA VIỆT NAM — Thời Trang DEZUS</div>
          </div>
          <div class="badge badge-teal" style="background: rgba(245, 158, 11, 0.15); color: #FBBF24; border-color: rgba(245, 158, 11, 0.3);">2022 — 2025</div>
        </div>
        <div class="timeline-desc">
          Xây dựng và tái cơ cấu toàn diện hệ thống Kinh Doanh & Marketing đa kênh, đưa doanh thu DEZUS tăng gấp 3 lần năm 2025.
        </div>
        <ul class="timeline-bullet">
          <li>Tổng đạo diễn Fashion Show "5 Châu" quy tụ hàng trăm khách mời VIP, viral hơn 20 triệu lượt xem.</li>
          <li>Dẫn dắt chuỗi khai trương các showroom lớn tại Đà Nẵng, Hà Nội, TP.HCM với sự tham gia của 5 nghệ sĩ nổi tiếng (50M+ views).</li>
        </ul>
      </div>

      <!-- 4. SHYNH PREMIUM -->
      <div class="timeline-item" style="border-left: 3px solid #EC4899;">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">Leader Marketing tại Shynh Premium</div>
            <div class="timeline-company">CÔNG TY TNHH SHYNH BEAUTY — Viện Thẩm Mỹ Shynh Premium</div>
          </div>
          <div class="badge badge-purple" style="background: rgba(236, 72, 153, 0.15); color: #F472B6; border-color: rgba(236, 72, 153, 0.3);">2019 — 2021</div>
        </div>
        <div class="timeline-desc">
          Dẫn dắt các chiến dịch truyền thông định vị thương hiệu phân khúc làm đẹp & thẩm mỹ công nghệ cao, tiếp cận tệp khách hàng VIP / HNWI.
        </div>
        <ul class="timeline-bullet">
          <li>Tăng 45% tỷ lệ khách hàng VIP đăng ký gói liệu trình thẩm mỹ công nghệ cao.</li>
          <li>Định vị vững chắc Shynh Premium là viện thẩm mỹ công nghệ cao hàng đầu tại thị trường Việt Nam.</li>
        </ul>
      </div>
    </div>

    <div class="page-footer">
      <span>Trần Hải — Executive Dossier</span>
      <span>Trang 2 / 4</span>
    </div>
  </div>

  <!-- ================= PAGE 3: FEATURED CASE STUDIES (PART 1) ================= -->
  <div class="page">
    <div class="page-header">
      <div class="header-logo">DỰ ÁN TIÊU BIỂU • CASE STUDY 01 & 02</div>
      <div class="header-tag">Chứng Minh Hiệu Quả Bằng Số Liệu & Hình Ảnh Thực Tế</div>
    </div>

    <div class="content">
      <!-- Project 01: Guno -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title">01. Guno x Ngọc Trinh - Quốc Trường (2026)</div>
          <div class="project-metrics">500M+ VIEWS • VIRAL NATIONWIDE</div>
        </div>
        <div class="project-desc">
          Chiến dịch bùng nổ truyền thông thương hiệu Guno hợp tác cùng nghệ sĩ Ngọc Trinh & Quốc Trường, tạo làn sóng viral mạnh mẽ, đạt hơn 500 triệu lượt xem trên toàn bộ các nền tảng MXH.
        </div>
        <div class="img-grid-3">
          <img src="{get_base64_image('public/images/guno-nt-qt-1.png')}" alt="Guno Showcase 1">
          <img src="{get_base64_image('public/images/guno-nt-qt-2.png')}" alt="Guno Showcase 2">
          <img src="{get_base64_image('public/images/guno-nt-qt-5.jpg')}" alt="Guno Showcase 3">
        </div>
      </div>

      <!-- Project 02: Metric DEZUS -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title">02. Marketing Metric DEZUS (2025)</div>
          <div class="project-metrics">x3 DOANH THU • P&L DATA DASHBOARD</div>
        </div>
        <div class="project-desc">
          Triển khai toàn diện chiến lược Kinh Doanh và Marketing theo dữ liệu P&L, tối ưu hóa hệ thống phễu và chỉ số chuyển đổi đa kênh, đưa doanh thu năm 2025 tăng gấp 3 lần so với cùng kỳ.
        </div>
        <div class="img-grid-2">
          <img src="{get_base64_image('public/images/product-2.jpg')}" alt="Metric 1">
          <img src="{get_base64_image('public/images/product-1.jpg')}" alt="Metric 2">
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Trần Hải — Executive Dossier</span>
      <span>Trang 3 / 4</span>
    </div>
  </div>

  <!-- ================= PAGE 4: FEATURED CASE STUDIES (PART 2) ================= -->
  <div class="page">
    <div class="page-header">
      <div class="header-logo">DỰ ÁN TIÊU BIỂU • CASE STUDY 03 & 04 & MONTSAND</div>
      <div class="header-tag">Sự Kiện Thời Trang & Khai Trương Showroom Lớn</div>
    </div>

    <div class="content">
      <!-- Project 03: DEZUS Fashion Show 5 Châu -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title">03. DEZUS Fashion Show 2025 | 5 Châu</div>
          <div class="project-metrics">20M+ VIEWS • RUNWAY SPOTLIGHT</div>
        </div>
        <div class="project-desc">
          Khởi tạo và thực thi thành công sự kiện thời trang quy mô lớn "5 Châu", thu hút sự quan tâm của giới mộ điệu thời trang và đạt hơn 20 triệu lượt tiếp cận trên các nền tảng số.
        </div>
        <div class="img-grid-3">
          <img src="{get_base64_image('public/images/dezus-show-1.png')}" alt="Runway Model">
          <img src="{get_base64_image('public/images/dezus-show-3.png')}" alt="Runway Line">
          <img src="{get_base64_image('public/images/dezus-show-2.png')}" alt="Runway Backstage">
        </div>
      </div>

      <!-- Project 04: Khai Trương Showroom Đà Nẵng & Montsand -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title">04. Khai Trương Showroom Đà Nẵng & BST Montsand</div>
          <div class="project-metrics">50M+ VIEWS • GRAND OPENING</div>
        </div>
        <div class="project-desc">
          Chỉ đạo sự kiện khai trương showroom Đà Nẵng với 5 nghệ sĩ nổi tiếng cùng hàng trăm khách mời; kết hợp quảng bá thiết kế Lily Of The Valley Gown (Montsand 2025).
        </div>
        <div class="img-grid-3">
          <img src="{get_base64_image('public/images/dezus-danang-1.jpg')}" alt="Đà Nẵng Night Crowd">
          <img src="{get_base64_image('public/images/dezus-danang-2.png')}" alt="Artists Inside">
          <img src="{get_base64_image('public/images/montsand-editorial.png')}" alt="Montsand Editorial">
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Trần Hải — Executive Dossier</span>
      <span>Trang 4 / 4</span>
    </div>
  </div>

</body>
</html>
"""

with open("pdf-export.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("✅ pdf-export.html written successfully.")

async def compile_pdf():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        file_url = "file:///" + os.path.abspath("pdf-export.html").replace("\\\\", "/")
        await page.goto(file_url, wait_until="networkidle")
        await page.wait_for_timeout(1000)
        
        pdf_path = "public/Tran-Hai-Executive-Portfolio.pdf"
        await page.pdf(
            path=pdf_path,
            format="A4",
            print_background=True,
            margin={"top": "0mm", "bottom": "0mm", "left": "0mm", "right": "0mm"}
        )
        
        # Also copy to root
        import shutil
        shutil.copyfile(pdf_path, "Tran-Hai-Executive-Portfolio.pdf")
        print(f"✅ Generated {pdf_path} and Tran-Hai-Executive-Portfolio.pdf")
        await browser.close()

asyncio.run(compile_pdf())
