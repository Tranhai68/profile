import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: 'Growth Strategy & Market Planning',
    description:
      'Nghiên cứu thị trường, định vị thương hiệu và hoạch định chiến lược kinh doanh - marketing tổng thể theo quý/năm. Thiết lập mô hình tăng trưởng bền vững dựa trên mục tiêu doanh số.',
  },
  {
    number: '02',
    name: 'Branding & Performance Marketing',
    description:
      'Giao thoa giữa xây dựng sức mạnh nhận diện thương hiệu dài hạn và tối ưu hóa chuyển đổi ngắn hạn trên Meta, TikTok, Google. Đảm bảo từng đồng ngân sách chi ra đều đem lại ROI và khách hàng trung thành.',
  },
  {
    number: '03',
    name: 'Event & Viral Mega Campaigns',
    description:
      'Khởi tạo và thực thi các chiến dịch bùng nổ truyền thông, show diễn thời trang, đại sự kiện khai trương, kết nối mạng lưới nghệ sĩ & KOLs hàng đầu đạt hàng chục đến hàng trăm triệu view.',
  },
  {
    number: '04',
    name: 'Marketing Automation & CRM',
    description:
      'Thiết kế phễu bán hàng đa điểm chạm, triển khai hệ thống chăm sóc tự động qua Email, SMS, Zalo ZNS và CRM nhằm nuôi dưỡng tệp dữ liệu, giảm tỷ lệ churn và tối đa hóa giá trị trọn đời (LTV).',
  },
  {
    number: '05',
    name: 'CRO & Data Metrics System',
    description:
      'Xây dựng Data Warehouse & Dashboard chỉ số thời gian thực (CAC, ROAS, CIR, AOV). Liên tục thử nghiệm A/B Testing giao diện và quy trình bán hàng để tối đa hóa tỷ lệ chuyển đổi cho website và sàn TMĐT.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 md:gap-10 transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-xl">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] tracking-tighter leading-none select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 9vw, 130px)' }}
                >
                  {service.number}
                </div>

                {/* Name & Description stacked on right */}
                <div className="flex flex-col gap-2 md:gap-3 flex-grow max-w-2xl">
                  <h3
                    className="font-semibold uppercase tracking-tight text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C]/70 leading-relaxed"
                    style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
