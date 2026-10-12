export interface ProjectTile {
  src: string;
  tag: string;
  title: string;
}

export interface ExperienceItem {
  company: string;
  brand: string;
  role: string;
  category: 'beauty' | 'fashion';
  description: string;
  badge: string;
}

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  description: string;
  link: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export interface PortfolioData {
  hero: {
    bgImage: string;
    roleTag: string;
    heading: string;
    subtext: string;
  };
  marquee: {
    sectionSub: string;
    sectionTitle: string;
    row1: ProjectTile[];
    row2: ProjectTile[];
  };
  about: {
    bio: string;
    stats: { value: string; label: string }[];
    experiences: ExperienceItem[];
  };
  projects: ProjectItem[];
  contact: {
    email: string;
    phone: string;
    zaloUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    githubUrl: string;
  };
}

export const initialPortfolioData: PortfolioData = {
  hero: {
    bgImage: './images/hero-banner.png',
    roleTag: 'Marketing Manager • CMO',
    heading: "Hi, i'm Hải",
    subtext: 'MARKETING MANAGER / CMO DRIVEN BY STRATEGY, DATA & VIRAL GROWTH CAMPAIGNS',
  },
  marquee: {
    sectionSub: 'Real Projects • Fashion & Beauty Portfolio',
    sectionTitle: 'Các Chiến Dịch & Sản Phẩm Tiêu Biểu',
    row1: [
      {
        src: './images/Project-1.jpg',
        tag: 'DEZUS Fashion',
        title: 'Brand Campaign Strategy',
      },
      {
        src: './images/product-1.jpg',
        tag: 'Collection 2025',
        title: 'Signature Outerwear Line',
      },
      {
        src: './images/project-2.jpg',
        tag: 'Montsand',
        title: 'Retail Performance Growth',
      },
      {
        src: './images/product-2.jpg',
        tag: 'Product Lookbook',
        title: 'Visual Merchandising',
      },
      {
        src: './images/Project-3.jpg',
        tag: 'Fashion Runway',
        title: 'Show 5 Châu Production',
      },
      {
        src: './images/product-3.jpg',
        tag: 'E-Commerce',
        title: 'High-Converting Catalog',
      },
      {
        src: 'https://kenh14cdn.com/203336854389633024/2025/6/4/photo-1-17490278404151445511525-1749027908061-17490279082361023750596-1749029969498-17490299696751601757879.jpg',
        tag: 'Press & PR',
        title: 'Kênh14 Viral Coverage',
      },
    ],
    row2: [
      {
        src: './images/project-4.jpg',
        tag: 'Grand Opening',
        title: 'Showroom Đà Nẵng Launch',
      },
      {
        src: './images/product-4.jpg',
        tag: 'Guno Apparel',
        title: 'Streetwear Growth Series',
      },
      {
        src: './images/project-5.jpg',
        tag: 'Mega Event',
        title: '20M+ Views Across Channels',
      },
      {
        src: './images/product-5.jpg',
        tag: 'Editorial',
        title: 'Premium Styling Direction',
      },
      {
        src: './images/Product-6.jpg',
        tag: 'Shynh & Fashion',
        title: 'Omnichannel Retargeting',
      },
      {
        src: './images/personal-photo.jpg',
        tag: 'CMO Leadership',
        title: 'Team & Agency Direction',
      },
      {
        src: './images/hero-banner.png',
        tag: 'Revenue Metric',
        title: '3X Growth Benchmark 2025',
      },
    ],
  },
  about: {
    bio: 'Với hơn 10 năm kinh nghiệm trong ngành Marketing và 6 năm ở cương vị Marketing Manager / CMO, tôi chuyên sâu về Branding & Performance Marketing, Data Metrics, và tối ưu hệ thống tăng trưởng tự động. Tôi biến mọi chiến lược thành doanh thu thực tế và những chiến dịch viral lan tỏa mạnh mẽ!',
    stats: [
      { value: '10+', label: 'Năm Trong Ngành MKT' },
      { value: '06', label: 'Năm Quản Lý / CMO' },
      { value: '50+', label: 'Dự Án Hoàn Thành' },
      { value: '100%', label: 'Cam Kết Tăng Trưởng' },
    ],
    experiences: [
      {
        company: 'CÔNG TY TNHH SHYNH BEAUTY',
        brand: 'Shynh Premium',
        role: 'Leader Marketing tại Shynh Premium',
        category: 'beauty',
        badge: 'Mảng Beauty & Thẩm Mỹ',
        description:
          'Dẫn dắt các chiến dịch truyền thông và định vị thương hiệu cho Viện thẩm mỹ công nghệ cao Shynh Premium. Tiếp cận và chuyển đổi tệp khách hàng phân khúc cao cấp.',
      },
      {
        company: 'CÔNG TY TNHH GUNO',
        brand: 'Thời trang Guno',
        role: 'Head Of Marketing',
        category: 'fashion',
        badge: 'Mảng Thời Trang',
        description:
          'Chỉ đạo toàn diện chiến lược tiếp thị, sáng tạo nội dung và hợp tác cùng các nghệ sĩ hàng đầu (Ngọc Trinh, Quốc Trường) tạo nên chiến dịch bùng nổ 500M+ views.',
      },
      {
        company: 'CÔNG TY CỔ PHẦN DHARMA VIỆT NAM',
        brand: 'Thời trang DEZUS',
        role: 'Head Of Marketing',
        category: 'fashion',
        badge: 'Mảng Thời Trang',
        description:
          'Xây dựng hệ thống Kinh Doanh & Marketing đa kênh, đưa doanh thu DEZUS tăng gấp 3 lần năm 2025. Trực tiếp tổ chức Fashion Show "5 Châu" và chuỗi khai trương showroom lớn.',
      },
      {
        company: 'CÔNG TY TNHH GOBROSS',
        brand: 'Thời trang Montsand',
        role: 'Leader Marketing',
        category: 'fashion',
        badge: 'Mảng Thời Trang',
        description:
          'Hoạch định chiến lược tăng trưởng khách hàng, tối ưu hóa tỷ lệ chuyển đổi cho hệ thống bán lẻ và kênh online cho thương hiệu thời trang Montsand.',
      },
    ],
  },
  projects: [
    {
      number: '01',
      name: 'Guno x Ngọc Trinh - Quốc Trường (2026)',
      category: 'Mega Campaign • 500M+ Views',
      description:
        'Chiến dịch bùng nổ truyền thông thương hiệu Guno hợp tác cùng nghệ sĩ Ngọc Trinh & Quốc Trường, tạo làn sóng viral mạnh mẽ, đạt hơn 500 triệu lượt xem trên toàn bộ các nền tảng MXH.',
      link: 'https://www.facebook.com/tranhai68.rell',
      col1Img1:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Img2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2Img:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
    {
      number: '02',
      name: 'Marketing Metric DEZUS (2025)',
      category: 'Marketing Metric • x3 Revenue',
      description:
        'Triển khai toàn diện chiến lược Kinh Doanh và Marketing cho thương hiệu thời trang DEZUS, tối ưu hóa hệ thống phễu và chỉ số chuyển đổi, đưa doanh thu năm 2025 tăng gấp 3 lần.',
      link: 'https://docs.google.com/spreadsheets/d/1B4BnhDkmGx5Dzy7TMEacQdRUnAp2-K2dXuFYtXUNdL4/edit?gid=1020694091#gid=1020694091',
      col1Img1:
        'https://kenh14cdn.com/203336854389633024/2025/6/4/photo-1-17490278404151445511525-1749027908061-17490279082361023750596-1749029969498-17490299696751601757879.jpg',
      col1Img2: './images/product-2.jpg',
      col2Img: './images/product-1.jpg',
    },
    {
      number: '03',
      name: 'DEZUS Fashion Show 2025 | 5 Châu',
      category: 'Fashion & Branding • 20M+ Views',
      description:
        'Khởi tạo và thực thi thành công sự kiện thời trang quy mô lớn "5 Châu", thu hút sự quan tâm của giới mộ điệu thời trang và đạt hơn 20 triệu lượt tiếp cận trên các nền tảng số.',
      link: 'https://drive.google.com/drive/folders/1cMkbjeJWIzwpQvrdGEGAGAY0iX-45Fdf?usp=sharing',
      col1Img1:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Img2: './images/product-3.jpg',
      col2Img:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
    {
      number: '04',
      name: 'Khai Trương Showroom Đà Nẵng',
      category: 'Grand Opening • 50M+ Views',
      description:
        'Lên kế hoạch và dẫn dắt chương trình khai trương showroom mới của thương hiệu tại Đà Nẵng với sự tham gia của 5 nghệ sĩ nổi tiếng cùng hàng trăm khách mời, viral 50 triệu view.',
      link: 'https://drive.google.com/drive/folders/1zPVbwKPe2Rhu7Y9yz0CyHuT3nDBKCJ6z?usp=sharing',
      col1Img1: './images/product-4.jpg',
      col1Img2: './images/product-5.jpg',
      col2Img:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  ],
  contact: {
    email: 'tranhai68.home@gmail.com',
    phone: '+84868258686',
    zaloUrl: 'https://zalo.me/0868258686',
    facebookUrl: 'https://www.facebook.com/tranhai68.rell',
    instagramUrl: 'https://www.instagram.com/tranhai68.rell',
    githubUrl: 'https://tranhai68.github.io',
  },
};

const STORAGE_KEY = 'portfolio_custom_data_v1';

export function getStoredPortfolioData(): PortfolioData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...initialPortfolioData, ...parsed };
    }
  } catch (err) {
    console.warn('Failed to load portfolio data from localStorage', err);
  }
  return initialPortfolioData;
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('portfolio_data_updated'));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }
}

export function resetStoredPortfolioData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('portfolio_data_updated'));
  } catch (err) {
    console.error('Failed to reset localStorage', err);
  }
}
