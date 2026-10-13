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

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    tag: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  description: string;
  badge: string;
  highlights: string[];
}

export interface ServiceDetail {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  category: string;
  date: string;
  description: string;
  verifiedBadge: string;
  link?: string;
}

export interface SystemMetric {
  key: string;
  name: string;
  subName: string;
  value: string;
  unit: string;
  status: 'normal' | 'optimal' | 'warning';
  subStats: { label: string; value: string }[];
  historyValues: number[];
  color: string;
}

export interface HeroData {
  bgImage: string;
  roleTag: string;
  greetingPrefix: string;
  heading: string;
  subtext: string;
  watermarkText: string;
  systemVersion: string;
  windowTitle: string;
  windowSub: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  statusBadgeText: string;
  tasksTitle: string;
  windowTasks: string[];
  upcomingTitle: string;
  upcomingTasks: string[];
  locationText: string;
  ctaButtonText: string;
  bottomNotice: string;
  cvUrl: string;
  cvButtonText: string;
  exploreButtonText: string;
  menuHomeText?: string;
  menuWorksText?: string;
  menuAboutText?: string;
  menuResumeText?: string;
  interactiveModeText?: string;
}

export interface LaunchpadWidgetData {
  title: string;
  viewAllText: string;
  bottomNote: string;
  verifyButtonText: string;
}

export interface OverviewMetricsData {
  coreExp: {
    title: string;
    value: string;
    unit: string;
    subLabel: string;
    sub: string;
    peakLabel: string;
    peak: string;
    domainLabel: string;
    domain: string;
    activePercent: number;
  };
  reach: {
    title: string;
    badge: string;
    value: string;
    unit: string;
    sub: string;
    videoLabel: string;
    video: string;
    pressLabel: string;
    press: string;
    eventLabel: string;
    event: string;
    activePercent: number;
  };
  revenue: {
    title: string;
    value: string;
    unit: string;
    subLabel: string;
    sub: string;
    roasLabel: string;
    roas: string;
    profitLabel: string;
    profit: string;
    activePercent: number;
  };
  projectsCount: {
    title: string;
    value: string;
    unit: string;
    sub: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    activePercent: number;
  };
  stream: {
    title: string;
    value: string;
    unit: string;
    sub: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    activePercent: number;
  };
  operations: {
    title: string;
    value: string;
    unit: string;
    sub: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    activePercent: number;
  };
}

export interface CompetencyDonutItem {
  name: string;
  percent: number;
  color: string;
}

export interface CompetencyDonutData {
  title: string;
  badge: string;
  centerTitle: string;
  centerSub: string;
  items: CompetencyDonutItem[];
}

export interface ChannelEfficiencyItem {
  name: string;
  percent: number;
  color: string;
}

export interface ChannelEfficiencyData {
  title: string;
  subtitle: string;
  modelTag: string;
  channels: ChannelEfficiencyItem[];
}

export interface ExecutiveBannerData {
  badge: string;
  title: string;
  description: string;
  cvUrl: string;
  cvButtonText: string;
  contactButtonText: string;
}

export interface SystemInfoData {
  hostName: string;
  osName: string;
  osVersion: string;
  profileName: string;
  profileTitle: string;
  profilePhoto: string;
}

export interface PortfolioData {
  hero: HeroData;
  overviewMetrics: OverviewMetricsData;
  competencyDonut: CompetencyDonutData;
  channelEfficiency: ChannelEfficiencyData;
  executiveBanner: ExecutiveBannerData;
  systemInfo: SystemInfoData;
  launchpadWidget: LaunchpadWidgetData;
  marquee: {
    sectionSub: string;
    sectionTitle: string;
    row1: ProjectTile[];
    row2: ProjectTile[];
  };
  about: {
    photo: string;
    bio: string;
    stats: { value: string; label: string }[];
    experiences: ExperienceItem[];
  };
  skillsData: SkillCategory[];
  education: EducationItem[];
  servicesList: ServiceDetail[];
  achievements: AchievementItem[];
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
    bgImage: './images/future-3d-hero.jpg',
    roleTag: 'Marketing Manager • CMO',
    greetingPrefix: "Hi, I'm",
    heading: 'Trần Hải',
    subtext: 'A Strategic Marketing Manager & CMO experienced in driving 500M+ views, building viral campaigns, and scaling brand revenue.',
    watermarkText: 'MARKETING • GROWTH • BRANDING • AI',
    systemVersion: 'TRANHAI-CORE // OS_v2.6',
    windowTitle: 'Hello There, Visitor 👋',
    windowSub: 'Trưởng Phòng Marketing & CMO Thực Chiến',
    metric1Label: 'TOTAL VIEWS',
    metric1Value: '500M+ Views',
    metric2Label: 'BENCHMARK',
    metric2Value: 'x3 Revenue',
    statusBadgeText: 'Sẵn sàng cho vai trò Quản lý / CMO',
    tasksTitle: 'TODAY • TRỌNG TÂM',
    windowTasks: [
      'Brand Strategy & P&L',
      'Viral 500M+ Views',
      'Omnichannel Retail Scale',
      'AI-Powered Marketing Workflows',
    ],
    upcomingTitle: 'UPCOMING • DỰ ÁN',
    upcomingTasks: [
      'DEZUS Fashion Show 5 Châu',
      'Guno x Ngọc Trinh - Quốc Trường',
    ],
    locationText: '📍 TP. Hồ Chí Minh • Tư vấn chiến lược toàn quốc',
    ctaButtonText: 'Xem Control Panel',
    bottomNotice: 'Hệ thống Dashboard điều khiển 10 mục quản trị sẵn sàng bên dưới',
    cvUrl: 'https://drive.google.com/file/d/1Z_u10aD60H39eBvEGB8l0rV3Z57l87oT/view',
    cvButtonText: 'Tải CV (PDF)',
    exploreButtonText: 'Khám Phá System Dashboard',
    menuHomeText: 'Home',
    menuWorksText: 'Works',
    menuAboutText: 'About me',
    menuResumeText: 'Resume',
    interactiveModeText: 'Interactive Mode',
  },
  overviewMetrics: {
    coreExp: {
      title: 'Marketing Core',
      value: '10+',
      unit: 'Năm KN',
      subLabel: 'Quản Lý / CMO',
      sub: '06 Năm',
      peakLabel: 'Hiệu Suất',
      peak: '98% Peak',
      domainLabel: 'Mảng Chính',
      domain: 'Fashion/Beauty',
      activePercent: 65,
    },
    reach: {
      title: 'Campaign Reach',
      badge: '✓ Normal',
      value: '500M+',
      unit: 'Views',
      sub: 'Toàn bộ nền tảng MXH',
      videoLabel: 'Video Viral',
      video: '340M+',
      pressLabel: 'Báo Chí PR',
      press: '90M+',
      eventLabel: 'Khai Trương',
      event: '70M+',
      activePercent: 75,
    },
    revenue: {
      title: 'Revenue Benchmark',
      value: 'x3',
      unit: 'Doanh Thu 2025',
      subLabel: 'Thương hiệu',
      sub: 'DEZUS Fashion',
      roasLabel: 'ROAS Peak',
      roas: '6.8x',
      profitLabel: 'Net Profit',
      profit: '+180%',
      activePercent: 82,
    },
    projectsCount: {
      title: 'Projects Executed',
      value: '50+',
      unit: 'Dự án lớn',
      sub: 'Đã bàn giao & vận hành',
      stat1Label: 'Thời Trang',
      stat1Val: '26 Dự án',
      stat2Label: 'Beauty & Clinic',
      stat2Val: '14 Dự án',
      stat3Label: 'Showroom',
      stat3Val: '10 Điểm',
      activePercent: 60,
    },
    stream: {
      title: 'Omnichannel Stream',
      value: '24.3',
      unit: 'M/Tháng',
      sub: 'Lưu lượng đa kênh',
      stat1Label: 'TikTok Shop',
      stat1Val: '12.8M',
      stat2Label: 'Meta / Reels',
      stat2Val: '7.2M',
      stat3Label: 'Showroom',
      stat3Val: '4.3M',
      activePercent: 70,
    },
    operations: {
      title: 'Vận Hành & Nhân Sự',
      value: '240+',
      unit: 'Assets/Tháng',
      sub: 'Nguồn lực sẵn sàng',
      stat1Label: 'Nhân Sự Led',
      stat1Val: '20+ Marketers',
      stat2Label: 'Agency Mạng Lưới',
      stat2Val: '50+ Đối tác',
      stat3Label: 'Tự Động Hóa AI',
      stat3Val: '70% Speed',
      activePercent: 88,
    },
  },
  competencyDonut: {
    title: 'Phân Bổ Năng Lực Cốt Lõi',
    badge: '100% Balanced',
    centerTitle: 'CMO',
    centerSub: 'Executive',
    items: [
      { name: 'Brand Strategy', percent: 35, color: '#008080' },
      { name: 'Growth & Ads', percent: 30, color: '#F59E0B' },
      { name: 'Omnichannel', percent: 20, color: '#3B82F6' },
      { name: 'Creative & Events', percent: 15, color: '#EC4899' },
    ],
  },
  channelEfficiency: {
    title: 'Hiệu Suất Kênh Tiếp Thị (ROI)',
    subtitle: 'Benchmark 2025-2026',
    modelTag: 'Omnichannel Attribution',
    channels: [
      { name: 'TikTok Shop & Viral Short', percent: 42, color: 'teal' },
      { name: 'Meta Ads & Retargeting Phễu', percent: 28, color: 'blue' },
      { name: 'Fashion Show & Grand Opening', percent: 18, color: 'amber' },
      { name: 'Kênh14, PR & Celebrity Influence', percent: 12, color: 'purple' },
    ],
  },
  executiveBanner: {
    badge: 'Sẵn Sàng Hợp Tác • Quý 4/2026',
    title: 'Bạn Đang Tìm Kiếm Giám Đốc Marketing (CMO) Hoặc Cố Vấn Tăng Trưởng?',
    description: 'Sẵn sàng mang đến những chiến dịch đột phá triệu view, tối ưu hóa ngân sách P&L và nhân bội doanh số bán lẻ thời trang & làm đẹp.',
    cvUrl: 'https://drive.google.com/file/d/1Z_u10aD60H39eBvEGB8l0rV3Z57l87oT/view',
    cvButtonText: 'Tải CV Bản Đầy Đủ',
    contactButtonText: 'Liên Hệ Ngay',
  },
  systemInfo: {
    hostName: 'DESKTOP-TRANHAI-OS',
    osName: 'Trần Hải OS',
    osVersion: 'CMO CONTROL v2.6',
    profileName: 'Trần Hải',
    profileTitle: 'CMO / Marketing Director',
    profilePhoto: './images/personal-photo.jpg',
  },
  launchpadWidget: {
    title: 'Dự Án Tiêu Biểu Nhanh',
    viewAllText: 'Xem tất cả',
    bottomNote: 'Xác thực số liệu minh bạch',
    verifyButtonText: 'Thành tựu xác thực',
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
    photo: './images/personal-photo.jpg',
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
  skillsData: [
    {
      id: 'professional',
      name: 'Kỹ Năng Chuyên Môn (Professional Skills)',
      description: 'Năng lực cốt lõi trong việc hoạch định chiến lược tiếp thị, phân tích thị trường và quản trị tăng trưởng.',
      skills: [
        { name: 'Chiến Lược Thương Hiệu & Định Vị (Brand Architecture)', level: 96, tag: 'Master', icon: 'Target' },
        { name: 'Growth Marketing & Tối Ưu Phễu Chuyển Đổi', level: 94, tag: 'Master', icon: 'TrendingUp' },
        { name: 'Quản Lý Ngân Sách P&L & Dự Báo Doanh Thu', level: 90, tag: 'Expert', icon: 'PieChart' },
        { name: 'Nghiên Cứu Thị Trường & Consumer Insight', level: 92, tag: 'Master', icon: 'Search' },
        { name: 'Vận Hành Chuỗi Bán Lẻ & Tiếp Thị Đa Kênh (Omnichannel)', level: 95, tag: 'Master', icon: 'Store' },
      ],
    },
    {
      id: 'creative',
      name: 'Kỹ Năng Sáng Tạo (Creative Skills)',
      description: 'Sáng tạo nội dung viral, định hướng concept nghệ thuật và sản xuất sự kiện thời trang/làm đẹp.',
      skills: [
        { name: 'Creative Direction & Concept Phát Triển Sản Phẩm', level: 95, tag: 'Master', icon: 'Palette' },
        { name: 'Sáng Tạo Kịch Bản Viral & Video Triệu View', level: 98, tag: 'Elite', icon: 'Video' },
        { name: 'Chỉ Đạo Hình Ảnh Lookbook & Visual Merchandising', level: 92, tag: 'Expert', icon: 'Camera' },
        { name: 'Đạo Diễn & Tổ Chức Fashion Show / Grand Opening', level: 96, tag: 'Master', icon: 'Sparkles' },
        { name: 'Xử Lý Khủng Hoảng Truyền Thông & Quan Hệ Báo Chí (PR)', level: 90, tag: 'Expert', icon: 'Megaphone' },
      ],
    },
    {
      id: 'tools',
      name: 'Công Cụ & Nền Tảng (Software & Tools)',
      description: 'Thành thạo các nền tảng quảng cáo số, công cụ đo lường và hệ thống quản trị bán lẻ hàng đầu.',
      skills: [
        { name: 'Meta Ads Manager (Facebook/Instagram Ads)', level: 95, tag: 'Master', icon: 'Share2' },
        { name: 'TikTok Ads Manager & TikTok Shop GMV Partner', level: 98, tag: 'Elite', icon: 'Play' },
        { name: 'Google Analytics 4 & Data Looker Studio', level: 90, tag: 'Expert', icon: 'BarChart3' },
        { name: 'Figma UI/UX & Creative Prototyping', level: 85, tag: 'Advanced', icon: 'Figma' },
        { name: 'CapCut Pro, Premiere & Motion Graphic Tools', level: 92, tag: 'Expert', icon: 'Film' },
        { name: 'Haravan, Sapo, KiotViet & ERP Bán Lẻ', level: 90, tag: 'Expert', icon: 'Database' },
      ],
    },
    {
      id: 'ai_tech',
      name: 'Công Nghệ & AI (AI & Automation)',
      description: 'Ứng dụng các giải pháp Trí Tuệ Nhân Tạo để tự động hóa quy trình sản xuất nội dung và phân tích dữ liệu.',
      skills: [
        { name: 'Midjourney & ComfyUI Prompt Engineering Cho Visual MKT', level: 94, tag: 'Master', icon: 'Cpu' },
        { name: 'LLM Agentic Workflows (Claude / ChatGPT / Gemini)', level: 95, tag: 'Master', icon: 'Bot' },
        { name: 'Tự Động Hóa Tiếp Thị với n8n / Make / Zapier', level: 88, tag: 'Advanced', icon: 'Zap' },
        { name: 'AI Voice Cloning & Generative Video Pipeline', level: 86, tag: 'Advanced', icon: 'Volume2' },
      ],
    },
    {
      id: 'soft_skills',
      name: 'Kỹ Năng Mềm (Soft Skills)',
      description: 'Khả năng giao tiếp tinh tế, truyền cảm hứng và giải quyết các bài toán hóc búa dưới áp lực cao.',
      skills: [
        { name: 'Thuyết Trình & Truyền Cảm Hứng Ban Lãnh Đạo', level: 95, tag: 'Master', icon: 'Mic' },
        { name: 'Đàm Phán Cấp Cao Với Đối Tác & Nghệ Sĩ Lớn', level: 94, tag: 'Master', icon: 'Handshake' },
        { name: 'Tư Duy Phản Biện & Ra Quyết Định Chớp Nhoáng', level: 92, tag: 'Expert', icon: 'Compass' },
        { name: 'Trí Tuệ Cảm Xúc (EQ) & Quản Trị Mối Quan Hệ', level: 90, tag: 'Expert', icon: 'Heart' },
      ],
    },
    {
      id: 'management',
      name: 'Kỹ Năng Quản Lý (Management Skills)',
      description: 'Lãnh đạo đội ngũ tiếp thị tinh nhuệ và điều phối hiệu quả mạng lưới đối tác rộng khắp.',
      skills: [
        { name: 'Xây Dựng & Dẫn Dắt Đội Ngũ Marketing 20+ Nhân Sự', level: 96, tag: 'Master', icon: 'Users' },
        { name: 'Thiết Lập Hệ Thống Đo Lường KPI & OKRs', level: 95, tag: 'Master', icon: 'CheckSquare' },
        { name: 'Điều Phối Agency, KOLs & Đơn Vị Sản Xuất Bên Ngoài', level: 97, tag: 'Elite', icon: 'Network' },
        { name: 'Tối Ưu Hóa Chi Phí Vận Hành (Cost Optimization)', level: 91, tag: 'Expert', icon: 'ShieldCheck' },
      ],
    },
  ],
  education: [
    {
      degree: 'Cử Nhân Quản Trị Kinh Doanh & Marketing',
      school: 'Chuyên Ngành Marketing & Tiếp Thị Thương Mại',
      year: '2012 — 2016',
      badge: 'Đại Học Chính Quy',
      description: 'Nền tảng vững chắc về kinh tế học, nghiên cứu hành vi người tiêu dùng, quản trị chiến lược và quản lý tài chính doanh nghiệp.',
      highlights: ['Tốt nghiệp chuyên ngành Tiếp Thị Thương Mại', 'Trưởng ban truyền thông các sự kiện học thuật'],
    },
    {
      degree: 'Chứng Chỉ CMO Executive Leadership',
      school: 'Chương Trình Đào Tạo Giám Đốc Marketing Chuyên Nghiệp',
      year: '2019',
      badge: 'Executive Certificate',
      description: 'Nâng cao năng lực lãnh đạo chiến lược, xây dựng mô hình tăng trưởng doanh số bền vững và quản trị trải nghiệm khách hàng.',
      highlights: ['Phân tích mô hình P&L cho nhãn hàng thời trang/làm đẹp', 'Hoạch định chiến lược truyền thông tích hợp (IMC)'],
    },
    {
      degree: 'Data-Driven & Performance Marketing Masterclass',
      school: 'Meta & Google Business Academy',
      year: '2021 — 2023',
      badge: 'Certified Specialist',
      description: 'Chuyên sâu về thuật toán phân phối quảng cáo, tối ưu hóa tỷ lệ chuyển đổi (CRO), tracking phễu người dùng và marketing tự động.',
      highlights: ['Master Meta Ads & TikTok Pixel tracking', 'Tối ưu hóa ROAS và LTV khách hàng'],
    },
    {
      degree: 'AI-Powered Marketing & Automation Certificate',
      school: 'AI Growth Frameworks & Generative Media',
      year: '2024 — 2026',
      badge: 'AI Pioneer',
      description: 'Tiên phong ứng dụng AI thế hệ mới (Midjourney, LLMs, Automation Pipelines) vào hoạt động sản xuất nội dung và điều phối tiếp thị.',
      highlights: ['Xây dựng pipeline sản xuất hình ảnh bằng Generative AI', 'Tự động hóa báo cáo và phân tích dữ liệu đa kênh'],
    },
  ],
  servicesList: [
    {
      number: '01',
      title: 'Fractional CMO & Hoạch Định Chiến Lược Tiếp Thị',
      shortDesc: 'Đồng hành cùng ban lãnh đạo thiết lập chiến lược tăng trưởng, định vị thương hiệu và quản trị ngân sách P&L.',
      fullDesc: 'Giải pháp toàn diện giúp doanh nghiệp xây dựng bộ máy tiếp thị bài bản, định hình rõ rệt định vị thị trường, xác định nhóm khách hàng sinh lời cao nhất và tối ưu hóa chi phí đầu tư.',
      deliverables: [
        'Kế hoạch Marketing & Branding chiến lược 12 - 24 tháng',
        'Tái cấu trúc và xây dựng đội ngũ tiếp thị nội bộ',
        'Mô hình dự báo doanh số, ngân sách P&L và chỉ số ROI',
        'Chiến lược sản phẩm và chính sách giá cạnh tranh',
      ],
      icon: 'Target',
    },
    {
      number: '02',
      title: 'Chiến Dịch Viral 500M+ Views & Celebrity / KOLs Booking',
      shortDesc: 'Thiết kế các chiến dịch truyền thông bùng nổ, kết nối nghệ sĩ hạng A và tạo làn sóng thảo luận triệu tương tác.',
      fullDesc: 'Kinh nghiệm thực chiến qua các siêu chiến dịch (như Guno x Ngọc Trinh, Quốc Trường) đạt hơn 500 triệu lượt xem, giúp thương hiệu tạo dựng tên tuổi ngay lập tức và gia tăng đột biến đơn hàng.',
      deliverables: [
        'Ý tưởng & kịch bản thông điệp viral đa nền tảng',
        'Lựa chọn & đàm phán hợp đồng với KOLs/Nghệ sĩ hạng A',
        'Sản xuất video clip, bộ ảnh lookbook chuẩn viral',
        'Chiến lược khuếch đại tiếp thị trên TikTok, Reels & Báo chí',
      ],
      icon: 'Flame',
    },
    {
      number: '03',
      title: 'Sản Xuất Fashion Show & Khai Trương Chuỗi Showroom',
      shortDesc: 'Tổ chức các sự kiện thời trang quy mô lớn và chương trình mở điểm bán lẻ bùng nổ khách hàng.',
      fullDesc: 'Trực tiếp chỉ đạo và thực thi từ khâu ý tưởng, sân khấu ánh sáng, casting người mẫu, kịch bản chương trình đến truyền thông trước - trong - sau sự kiện, điển hình như Fashion Show 5 Châu và chuỗi khai trương Đà Nẵng.',
      deliverables: [
        'Kịch bản tổng thể và concept sân khấu Runway / Grand Opening',
        'Truyền thông sự kiện thu hút hơn 20M - 50M lượt tiếp cận',
        'Điều phối khách mời VIP, báo giới và người có sức ảnh hưởng',
        'Kích hoạt doanh số bùng nổ ngay trong ngày khai trương',
      ],
      icon: 'Sparkles',
    },
    {
      number: '04',
      title: 'Tăng Trưởng Bán Lẻ & Omnichannel E-commerce (x3 Doanh Thu)',
      shortDesc: 'Xây dựng phễu bán hàng đa kênh liên hoàn giữa Showroom thực tế, TikTok Shop, Shopee và Website.',
      fullDesc: 'Kinh nghiệm chứng minh bằng kết quả tăng gấp 3 lần doanh thu cho nhãn hàng thời trang DEZUS năm 2025. Đồng bộ hóa trải nghiệm mua sắm từ trực tuyến đến điểm chạm thực tế.',
      deliverables: [
        'Thiết lập phễu bán lẻ đa kênh tích hợp (Online-to-Offline)',
        'Vận hành Livestream bán hàng & TikTok Shop GMV bùng nổ',
        'Chính sách kích hoạt tệp khách hàng thân thiết (Retention / CRM)',
        'Tối ưu hóa tỷ lệ chuyển đổi tại cửa hàng và trên gian hàng online',
      ],
      icon: 'TrendingUp',
    },
    {
      number: '05',
      title: 'Định Vị & Tiếp Thị Ngành Làm Đẹp (Beauty & Clinic High-End)',
      shortDesc: 'Tiếp cận và chuyển đổi phân khúc khách hàng thượng lưu cho Viện Thẩm Mỹ & Spa công nghệ cao.',
      fullDesc: 'Kinh nghiệm thực tiễn lãnh đạo marketing tại Shynh Premium - hệ thống thẩm mỹ viện công nghệ cao hàng đầu, thấu hiểu sâu sắc tâm lý khách hàng cao cấp và nghệ thuật bán gói dịch vụ giá trị lớn.',
      deliverables: [
        'Chiến lược định vị phân khúc dịch vụ làm đẹp cao cấp',
        'Content tiếp thị thẩm mỹ chuẩn y khoa & cuốn hút',
        'Phễu chuyển đổi khách hàng tiềm năng đến trực tiếp viện thẩm mỹ',
        'Chiến dịch trải nghiệm dịch vụ dành cho giới thượng lưu / KOLs',
      ],
      icon: 'ShieldCheck',
    },
    {
      number: '06',
      title: 'Ứng Dụng AI & Tự Động Hóa Quy Trình Tiếp Thị',
      shortDesc: 'Hiện đại hóa hoạt động marketing bằng Generative AI, giảm 70% thời gian sản xuất và tăng gấp đôi năng suất.',
      fullDesc: 'Triển khai công nghệ trí tuệ nhân tạo vào thực tế: từ tạo concept hình ảnh sản phẩm, viết nội dung quảng cáo hàng loạt, clone giọng nói video đến tự động hóa phân bổ khách hàng tiềm năng.',
      deliverables: [
        'Quy trình sản xuất hình ảnh / lookbook bằng AI Midjourney/ComfyUI',
        'Hệ thống sinh kịch bản & caption tự động theo văn phong thương hiệu',
        'Tự động hóa báo cáo chỉ số kinh doanh & cảnh báo chiến dịch',
        'Đào tạo đội ngũ nội bộ làm chủ các công cụ AI Marketing thế hệ mới',
      ],
      icon: 'Bot',
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      title: '500M+ Lượt Xem Toàn Mạng Xã Hội',
      metric: '500,000,000+',
      category: 'Viral Campaign Impact',
      date: '2026',
      description: 'Chỉ đạo và thực thi chiến dịch Guno x Ngọc Trinh - Quốc Trường, tạo làn sóng bùng nổ truyền thông trên TikTok, Facebook và báo chí.',
      verifiedBadge: 'Kỷ Lục Tiếp Cận',
      link: 'https://www.facebook.com/tranhai68.rell',
    },
    {
      id: 'ach-2',
      title: 'Tăng Trưởng Doanh Thu Gấp 3 Lần (x3 Revenue)',
      metric: 'x3 DOANH THU',
      category: 'Business Metric',
      date: '2025',
      description: 'Xây dựng và vận hành thành công hệ thống Kinh Doanh & Marketing cho DEZUS, bứt phá doanh số năm 2025 tăng gấp 300%.',
      verifiedBadge: 'Chứng Thực Số Liệu',
      link: 'https://docs.google.com/spreadsheets/d/1B4BnhDkmGx5Dzy7TMEacQdRUnAp2-K2dXuFYtXUNdL4/edit?gid=1020694091#gid=1020694091',
    },
    {
      id: 'ach-3',
      title: 'Fashion Show "5 Châu" Thu Hút 20M+ Views',
      metric: '20,000,000+',
      category: 'Show Production & Branding',
      date: '2025',
      description: 'Đạo diễn và tổ chức đại tiệc thời trang Runway 5 Châu quy mô lớn, quy tụ giới mộ điệu thời trang và phủ sóng truyền thông toàn quốc.',
      verifiedBadge: 'Sự Kiện Tiêu Biểu',
      link: 'https://drive.google.com/drive/folders/1cMkbjeJWIzwpQvrdGEGAGAY0iX-45Fdf?usp=sharing',
    },
    {
      id: 'ach-4',
      title: 'Khai Trương Showroom Đà Nẵng Đạt 50M+ Views',
      metric: '50,000,000+',
      category: 'Retail Grand Opening',
      date: '2024',
      description: 'Tổ chức sự kiện khai trương showroom thời trang tại Đà Nẵng với sự tham gia của 5 nghệ sĩ nổi tiếng, thu hút hàng ngàn khách tham quan.',
      verifiedBadge: 'Viral Điểm Bán',
      link: 'https://drive.google.com/drive/folders/1zPVbwKPe2Rhu7Y9yz0CyHuT3nDBKCJ6z?usp=sharing',
    },
    {
      id: 'ach-5',
      title: 'Đưa Thương Hiệu Phủ Sóng Báo Giới Chính Thống',
      metric: 'TOP COVERAGE',
      category: 'Press & Media Relations',
      date: '2024 — 2026',
      description: 'Hàng chục bài báo uy tín đưa tin trên Kênh14, VTV, Afamily, Dân Trí về các bộ sưu tập thời trang và chiến dịch tiếp thị mang dấu ấn.',
      verifiedBadge: 'Báo Chí Đưa Tin',
      link: 'https://kenh14cdn.com/203336854389633024/2025/6/4/photo-1-17490278404151445511525-1749027908061-17490279082361023750596-1749029969498-17490299696751601757879.jpg',
    },
    {
      id: 'ach-6',
      title: 'Xây Dựng & Đào Tạo Đội Ngũ 20+ Marketer Tinh Nhuệ',
      metric: '20+ MARKETERS',
      category: 'Leadership & Mentorship',
      date: '2020 — 2026',
      description: 'Trực tiếp tuyển dụng, đào tạo và phát triển hơn 20 chuyên viên marketing, hiện đang giữ các vị trí chủ chốt tại các doanh nghiệp thời trang & bán lẻ.',
      verifiedBadge: 'Lãnh Đạo Xuất Sắc',
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
      return {
        ...initialPortfolioData,
        ...parsed,
        hero: {
          ...initialPortfolioData.hero,
          ...(parsed.hero || {}),
          windowTasks: parsed.hero?.windowTasks || initialPortfolioData.hero.windowTasks,
          upcomingTasks: parsed.hero?.upcomingTasks || initialPortfolioData.hero.upcomingTasks,
        },
        overviewMetrics: {
          coreExp: { ...initialPortfolioData.overviewMetrics.coreExp, ...(parsed.overviewMetrics?.coreExp || {}) },
          reach: { ...initialPortfolioData.overviewMetrics.reach, ...(parsed.overviewMetrics?.reach || {}) },
          revenue: { ...initialPortfolioData.overviewMetrics.revenue, ...(parsed.overviewMetrics?.revenue || {}) },
          projectsCount: { ...initialPortfolioData.overviewMetrics.projectsCount, ...(parsed.overviewMetrics?.projectsCount || {}) },
          stream: { ...initialPortfolioData.overviewMetrics.stream, ...(parsed.overviewMetrics?.stream || {}) },
          operations: { ...initialPortfolioData.overviewMetrics.operations, ...(parsed.overviewMetrics?.operations || {}) },
        },
        competencyDonut: {
          ...initialPortfolioData.competencyDonut,
          ...(parsed.competencyDonut || {}),
          items: parsed.competencyDonut?.items || initialPortfolioData.competencyDonut.items,
        },
        channelEfficiency: {
          ...initialPortfolioData.channelEfficiency,
          ...(parsed.channelEfficiency || {}),
          channels: parsed.channelEfficiency?.channels || initialPortfolioData.channelEfficiency.channels,
        },
        executiveBanner: {
          ...initialPortfolioData.executiveBanner,
          ...(parsed.executiveBanner || {}),
        },
        systemInfo: {
          ...initialPortfolioData.systemInfo,
          ...(parsed.systemInfo || {}),
        },
        launchpadWidget: {
          ...initialPortfolioData.launchpadWidget,
          ...(parsed.launchpadWidget || {}),
        },
        about: {
          ...initialPortfolioData.about,
          ...(parsed.about || {}),
          stats: parsed.about?.stats || initialPortfolioData.about.stats,
          experiences: parsed.about?.experiences || initialPortfolioData.about.experiences,
        },
        marquee: {
          ...initialPortfolioData.marquee,
          ...(parsed.marquee || {}),
          row1: parsed.marquee?.row1 || initialPortfolioData.marquee.row1,
          row2: parsed.marquee?.row2 || initialPortfolioData.marquee.row2,
        },
        contact: {
          ...initialPortfolioData.contact,
          ...(parsed.contact || {}),
        },
      };
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
