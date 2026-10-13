import React, { useState } from 'react';
import {
  PortfolioData,
  getStoredPortfolioData,
  savePortfolioData,
  resetStoredPortfolioData,
  ProjectItem,
  ProjectTile,
  ExperienceItem,
  SkillCategory,
  ServiceDetail,
  AchievementItem,
} from '../data/portfolioData';
import {
  ArrowLeft,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Image as ImageIcon,
  CheckCircle2,
  Copy,
  Layers,
  Sparkles,
  ExternalLink,
  Cpu,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Wrench,
  Trophy,
  Phone,
  LayoutDashboard,
  User,
  TrendingUp,
  PieChart,
  HardDrive,
  Activity,
  Workflow,
  Download,
  Send,
  Monitor,
  Zap,
} from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [data, setData] = useState<PortfolioData>(() => getStoredPortfolioData());
  const [activeTab, setActiveTab] = useState<
    | 'hero'
    | 'overview'
    | 'about'
    | 'experience'
    | 'projects'
    | 'marquee'
    | 'skills'
    | 'services'
    | 'achievements'
    | 'contact'
  >('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSave = () => {
    savePortfolioData(data);
    showToast('Đã lưu tất cả thay đổi thành công! Dữ liệu đã cập nhật ngay trên trang web.');
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn khôi phục về dữ liệu ảnh và nội dung ban đầu?')) {
      resetStoredPortfolioData();
      setData(getStoredPortfolioData());
      showToast('Đã khôi phục dữ liệu ban đầu!');
    }
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(jsonStr);
    showToast('Đã sao chép cấu hình JSON vào bộ nhớ đệm (Clipboard)!');
  };

  // Helper for Hero Text & Hologram
  const updateHeroField = (field: string, val: any) => {
    setData({
      ...data,
      hero: {
        ...data.hero,
        [field]: val,
      },
    });
  };

  // Helper for Hero Tasks Array
  const updateHeroTask = (index: number, val: string) => {
    const newTasks = [...(data.hero.windowTasks || [])];
    newTasks[index] = val;
    setData({
      ...data,
      hero: {
        ...data.hero,
        windowTasks: newTasks,
      },
    });
  };

  const deleteHeroTask = (index: number) => {
    const newTasks = (data.hero.windowTasks || []).filter((_, i) => i !== index);
    setData({
      ...data,
      hero: {
        ...data.hero,
        windowTasks: newTasks,
      },
    });
  };

  const addHeroTask = () => {
    setData({
      ...data,
      hero: {
        ...data.hero,
        windowTasks: [...(data.hero.windowTasks || []), 'Mục tiêu chiến lược mới'],
      },
    });
  };

  // Helper for Hero Upcoming Array
  const updateHeroUpcoming = (index: number, val: string) => {
    const newUpcoming = [...(data.hero.upcomingTasks || [])];
    newUpcoming[index] = val;
    setData({
      ...data,
      hero: {
        ...data.hero,
        upcomingTasks: newUpcoming,
      },
    });
  };

  const deleteHeroUpcoming = (index: number) => {
    const newUpcoming = (data.hero.upcomingTasks || []).filter((_, i) => i !== index);
    setData({
      ...data,
      hero: {
        ...data.hero,
        upcomingTasks: newUpcoming,
      },
    });
  };

  const addHeroUpcoming = () => {
    setData({
      ...data,
      hero: {
        ...data.hero,
        upcomingTasks: [...(data.hero.upcomingTasks || []), 'Dự án sắp tới mới'],
      },
    });
  };

  // Helper for Overview Metrics
  const updateOverviewMetric = (key: string, field: string, val: any) => {
    setData({
      ...data,
      overviewMetrics: {
        ...data.overviewMetrics,
        [key]: {
          ...(data.overviewMetrics as any)[key],
          [field]: val,
        },
      },
    });
  };

  // Helper for Competency Donut
  const updateCompetencyField = (field: string, val: any) => {
    setData({
      ...data,
      competencyDonut: {
        ...data.competencyDonut,
        [field]: val,
      },
    });
  };

  const updateCompetencyItem = (index: number, field: string, val: any) => {
    const newItems = [...(data.competencyDonut?.items || [])];
    newItems[index] = { ...newItems[index], [field]: val };
    setData({
      ...data,
      competencyDonut: {
        ...data.competencyDonut,
        items: newItems,
      },
    });
  };

  // Helper for Channel Efficiency
  const updateChannelEfficiencyField = (field: string, val: any) => {
    setData({
      ...data,
      channelEfficiency: {
        ...data.channelEfficiency,
        [field]: val,
      },
    });
  };

  const updateChannelItem = (index: number, field: string, val: any) => {
    const newChannels = [...(data.channelEfficiency?.channels || [])];
    newChannels[index] = { ...newChannels[index], [field]: val };
    setData({
      ...data,
      channelEfficiency: {
        ...data.channelEfficiency,
        channels: newChannels,
      },
    });
  };

  // Helper for Executive Banner
  const updateExecutiveBannerField = (field: string, val: any) => {
    setData({
      ...data,
      executiveBanner: {
        ...data.executiveBanner,
        [field]: val,
      },
    });
  };

  // Helper for System Info
  const updateSystemInfoField = (field: string, val: any) => {
    setData({
      ...data,
      systemInfo: {
        ...data.systemInfo,
        [field]: val,
      },
    });
  };

  // Helper for Launchpad Widget
  const updateLaunchpadField = (field: string, val: string) => {
    setData({
      ...data,
      launchpadWidget: {
        ...data.launchpadWidget,
        [field]: val,
      },
    });
  };

  // Helper for About Field
  const updateAboutField = (field: string, val: any) => {
    setData({
      ...data,
      about: {
        ...data.about,
        [field]: val,
      },
    });
  };

  // Helper for Stats
  const updateStatItem = (index: number, field: 'value' | 'label', val: string) => {
    const newStats = [...data.about.stats];
    newStats[index] = { ...newStats[index], [field]: val };
    setData({
      ...data,
      about: {
        ...data.about,
        stats: newStats,
      },
    });
  };

  // Helper for Experience
  const updateExperienceItem = (index: number, field: keyof ExperienceItem, val: string) => {
    const newExp = [...data.about.experiences];
    newExp[index] = { ...newExp[index], [field]: val };
    setData({
      ...data,
      about: {
        ...data.about,
        experiences: newExp,
      },
    });
  };

  // Helper for Projects
  const updateProject = (index: number, field: keyof ProjectItem, val: string) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: val };
    setData({ ...data, projects: newProjects });
  };

  // Helper for Row 1 Marquee
  const updateRow1Item = (index: number, field: keyof ProjectTile, val: string) => {
    const newRow = [...data.marquee.row1];
    newRow[index] = { ...newRow[index], [field]: val };
    setData({
      ...data,
      marquee: { ...data.marquee, row1: newRow },
    });
  };

  const deleteRow1Item = (index: number) => {
    const newRow = data.marquee.row1.filter((_, i) => i !== index);
    setData({
      ...data,
      marquee: { ...data.marquee, row1: newRow },
    });
  };

  const addRow1Item = () => {
    setData({
      ...data,
      marquee: {
        ...data.marquee,
        row1: [
          ...data.marquee.row1,
          {
            src: './images/product-1.jpg',
            tag: 'New Showcase',
            title: 'Tiêu đề dự án mới',
          },
        ],
      },
    });
  };

  // Helper for Row 2 Marquee
  const updateRow2Item = (index: number, field: keyof ProjectTile, val: string) => {
    const newRow = [...data.marquee.row2];
    newRow[index] = { ...newRow[index], [field]: val };
    setData({
      ...data,
      marquee: { ...data.marquee, row2: newRow },
    });
  };

  const deleteRow2Item = (index: number) => {
    const newRow = data.marquee.row2.filter((_, i) => i !== index);
    setData({
      ...data,
      marquee: { ...data.marquee, row2: newRow },
    });
  };

  const addRow2Item = () => {
    setData({
      ...data,
      marquee: {
        ...data.marquee,
        row2: [
          ...data.marquee.row2,
          {
            src: './images/project-4.jpg',
            tag: 'New Campaign',
            title: 'Tiêu đề chiến dịch mới',
          },
        ],
      },
    });
  };

  // Helper for Skills
  const updateSkillLevel = (catId: string, skillIdx: number, newLevel: number) => {
    const newCats = data.skillsData.map((cat) => {
      if (cat.id !== catId) return cat;
      const newSkills = [...cat.skills];
      newSkills[skillIdx] = { ...newSkills[skillIdx], level: newLevel };
      return { ...cat, skills: newSkills };
    });
    setData({ ...data, skillsData: newCats });
  };

  // Helper for Services
  const updateServiceField = (index: number, field: keyof ServiceDetail, val: any) => {
    const newSvcs = [...data.servicesList];
    newSvcs[index] = { ...newSvcs[index], [field]: val };
    setData({ ...data, servicesList: newSvcs });
  };

  // Helper for Achievements
  const updateAchievementField = (index: number, field: keyof AchievementItem, val: string) => {
    const newAchs = [...data.achievements];
    newAchs[index] = { ...newAchs[index], [field]: val };
    setData({ ...data, achievements: newAchs });
  };

  // Helper for Contact
  const updateContactField = (field: string, val: string) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [field]: val,
      },
    });
  };

  const tabsConfig = [
    { id: 'hero', label: '1. Hero 3D & Hologram', icon: Sparkles },
    { id: 'overview', label: '2. Số Liệu Dashboard', icon: LayoutDashboard },
    { id: 'about', label: '3. Giới Thiệu & Bio', icon: User },
    { id: 'experience', label: '4. Kinh Nghiệm (4 Cty)', icon: Briefcase },
    { id: 'projects', label: '5. Dự Án Lớn (Ảnh & Link)', icon: FolderGit2 },
    { id: 'marquee', label: '6. Chiến Dịch Tiêu Biểu', icon: Layers },
    { id: 'skills', label: '7. Kỹ Năng & Level', icon: Cpu },
    { id: 'services', label: '8. Dịch Vụ Cung Cấp', icon: Wrench },
    { id: 'achievements', label: '9. Thành Tựu Xác Minh', icon: Trophy },
    { id: 'contact', label: '10. Thông Tin Liên Hệ', icon: Phone },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0B0F17] text-slate-100 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-teal-600 text-white shadow-2xl animate-fade-in border border-teal-400">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#131B26]/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-bold text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Portfolio</span>
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <span>Admin Management Center — Toàn Diện</span>
            </h1>
            <p className="text-xs text-slate-400">
              Chỉnh sửa toàn bộ nội dung, hình ảnh của trang Hero 3D và toàn bộ phân hệ Dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportJSON}
            title="Sao chép toàn bộ dữ liệu JSON"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-300 transition-all"
          >
            <Copy className="w-4 h-4 text-slate-400" />
            <span>Copy JSON</span>
          </button>
          <button
            onClick={handleReset}
            title="Khôi phục dữ liệu ban đầu"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800 text-rose-300 text-xs sm:text-sm font-semibold transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mặc định</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-lg shadow-teal-600/30 transition-all active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Lưu tất cả thay đổi</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs (10 Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-slate-800 scrollbar-none">
          {tabsConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                    : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= TAB 1: HERO 3D & HOLOGRAM ================= */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            {/* Group 1: 3D Scene & Identity */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span>1. Ảnh Nền Scene 3D & Thông Tin Nhận Diện Chính</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase">
                      Ảnh Nền Scene 3D (Background Image URL)
                    </label>
                    <button
                      type="button"
                      onClick={() => updateHeroField('bgImage', './images/future-3d-hero.jpg')}
                      className="text-[11px] font-semibold text-teal-400 hover:underline"
                    >
                      Dùng ảnh 3D mặc định
                    </button>
                  </div>
                  <input
                    type="text"
                    value={data.hero.bgImage}
                    onChange={(e) => updateHeroField('bgImage', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:border-teal-500 focus:outline-none"
                  />
                  <div className="mt-3 rounded-xl overflow-hidden border border-slate-800 h-44 bg-slate-950 flex items-center justify-center relative group">
                    <img
                      src={data.hero.bgImage}
                      alt="Hero 3D Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = './images/future-3d-hero.jpg';
                      }}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white">
                      Live Preview
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Họ và Tên (Tiêu đề chính Hero)
                    </label>
                    <input
                      type="text"
                      value={data.hero.heading}
                      onChange={(e) => updateHeroField('heading', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-bold focus:border-teal-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                        Lời chào (Prefix)
                      </label>
                      <input
                        type="text"
                        value={data.hero.greetingPrefix || "Hi, I'm"}
                        onChange={(e) => updateHeroField('greetingPrefix', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                        Huy hiệu Role Tag
                      </label>
                      <input
                        type="text"
                        value={data.hero.roleTag}
                        onChange={(e) => updateHeroField('roleTag', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Chữ Nền Mờ Khổng Lồ (Watermark Typography)
                    </label>
                    <input
                      type="text"
                      value={data.hero.watermarkText || 'MARKETING • GROWTH • BRANDING • AI'}
                      onChange={(e) => updateHeroField('watermarkText', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-mono focus:border-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Câu Giới Thiệu Phụ Dưới Tên (Hero Subtitle)
                    </label>
                    <textarea
                      rows={2}
                      value={data.hero.subtext}
                      onChange={(e) => updateHeroField('subtext', e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed focus:border-teal-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Group 2: Hologram Glass Window Content */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-teal-400" />
                <span>2. Nội Dung Màn Hình Kính Hologram (Floating Display Console)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Mã Phiên Bản Hệ Điều Hành (OS Version)
                  </label>
                  <input
                    type="text"
                    value={data.hero.systemVersion || 'TRANHAI-CORE // OS_v2.6'}
                    onChange={(e) => updateHeroField('systemVersion', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Tiêu Đề Màn Hình Kính
                  </label>
                  <input
                    type="text"
                    value={data.hero.windowTitle || 'Hello There, Visitor 👋'}
                    onChange={(e) => updateHeroField('windowTitle', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Mô Tả Chức Danh Trong Kính
                  </label>
                  <input
                    type="text"
                    value={data.hero.windowSub || 'Trưởng Phòng Marketing & CMO Thực Chiến'}
                    onChange={(e) => updateHeroField('windowSub', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-teal-500"
                  />
                </div>
              </div>

              {/* 2 Metric Badges Inside Window */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-teal-400 block uppercase">
                    Chỉ Số Nổi Bật 1
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block">Nhãn (Label)</label>
                      <input
                        type="text"
                        value={data.hero.metric1Label || 'TOTAL VIEWS'}
                        onChange={(e) => updateHeroField('metric1Label', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block">Số Liệu (Value)</label>
                      <input
                        type="text"
                        value={data.hero.metric1Value || '500M+ Views'}
                        onChange={(e) => updateHeroField('metric1Value', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-bold text-teal-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-indigo-400 block uppercase">
                    Chỉ Số Nổi Bật 2
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block">Nhãn (Label)</label>
                      <input
                        type="text"
                        value={data.hero.metric2Label || 'BENCHMARK'}
                        onChange={(e) => updateHeroField('metric2Label', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block">Số Liệu (Value)</label>
                      <input
                        type="text"
                        value={data.hero.metric2Value || 'x3 Revenue'}
                        onChange={(e) => updateHeroField('metric2Value', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-bold text-indigo-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-400 block uppercase">
                    Trạng Thái Sẵn Sàng (Status Badge)
                  </span>
                  <div>
                    <label className="text-[10px] text-slate-400 block">Dòng chữ trạng thái</label>
                    <input
                      type="text"
                      value={data.hero.statusBadgeText || 'Sẵn sàng cho vai trò Quản lý / CMO'}
                      onChange={(e) => updateHeroField('statusBadgeText', e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Tasks & Upcoming Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Window Tasks: TODAY */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div>
                      <label className="text-xs font-bold uppercase text-teal-400 block">
                        Danh Sách Trọng Tâm (Today Focus)
                      </label>
                      <input
                        type="text"
                        value={data.hero.tasksTitle || 'TODAY • TRỌNG TÂM'}
                        onChange={(e) => updateHeroField('tasksTitle', e.target.value)}
                        className="mt-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px] font-mono"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={addHeroTask}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-600/30 text-teal-300 hover:bg-teal-600 hover:text-white text-xs font-bold transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm dòng</span>
                    </button>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {(data.hero.windowTasks || []).map((task, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                        <input
                          type="text"
                          value={task}
                          onChange={(e) => updateHeroTask(tIdx, e.target.value)}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-teal-500"
                        />
                        <button
                          type="button"
                          onClick={() => deleteHeroTask(tIdx)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Xóa dòng này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Window Upcoming Projects */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div>
                      <label className="text-xs font-bold uppercase text-purple-400 block">
                        Danh Sách Dự Án Sắp Tới (Upcoming Projects)
                      </label>
                      <input
                        type="text"
                        value={data.hero.upcomingTitle || 'UPCOMING • DỰ ÁN'}
                        onChange={(e) => updateHeroField('upcomingTitle', e.target.value)}
                        className="mt-1 px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px] font-mono"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={addHeroUpcoming}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600/30 text-purple-300 hover:bg-purple-600 hover:text-white text-xs font-bold transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm dòng</span>
                    </button>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {(data.hero.upcomingTasks || []).map((item, uIdx) => (
                      <div key={uIdx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateHeroUpcoming(uIdx, e.target.value)}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-purple-500"
                        />
                        <button
                          type="button"
                          onClick={() => deleteHeroUpcoming(uIdx)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Xóa dòng này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Window Footer & Action */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Ghi Chú Địa Điểm & Tư Vấn (Chân Màn Hình Kính)
                  </label>
                  <input
                    type="text"
                    value={data.hero.locationText || '📍 TP. Hồ Chí Minh • Tư vấn chiến lược toàn quốc'}
                    onChange={(e) => updateHeroField('locationText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Nhãn Nút Kêu Gọi Trên Màn Hình Kính
                  </label>
                  <input
                    type="text"
                    value={data.hero.ctaButtonText || 'Xem Control Panel'}
                    onChange={(e) => updateHeroField('ctaButtonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Group 3: Hero Bottom Action Bar & CV Link */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Download className="w-5 h-5 text-teal-400" />
                <span>3. Thanh Trạng Thái & Nút Bấm Cuối Trang Hero</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Dòng Thông Báo Trạng Thái (Bottom Notice)
                  </label>
                  <input
                    type="text"
                    value={data.hero.bottomNotice || 'Hệ thống Dashboard điều khiển 10 mục quản trị sẵn sàng bên dưới'}
                    onChange={(e) => updateHeroField('bottomNotice', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Đường Dẫn Tải CV (PDF URL)
                  </label>
                  <input
                    type="text"
                    value={data.hero.cvUrl || 'https://drive.google.com/file/d/1Z_u10aD60H39eBvEGB8l0rV3Z57l87oT/view'}
                    onChange={(e) => updateHeroField('cvUrl', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Chữ Trên Nút Tải CV
                  </label>
                  <input
                    type="text"
                    value={data.hero.cvButtonText || 'Tải CV (PDF)'}
                    onChange={(e) => updateHeroField('cvButtonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Chữ Trên Nút Khám Phá Dashboard
                  </label>
                  <input
                    type="text"
                    value={data.hero.exploreButtonText || 'Khám Phá System Dashboard'}
                    onChange={(e) => updateHeroField('exploreButtonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Group 4: Floating Left Menu & Interactive Switch */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                <span>4. Menu Điều Hướng Nổi Bên Trái & Công Tắc Tương Tác (Hero Page)</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Nút Home</label>
                  <input
                    type="text"
                    value={data.hero.menuHomeText || 'Home'}
                    onChange={(e) => updateHeroField('menuHomeText', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Nút Works</label>
                  <input
                    type="text"
                    value={data.hero.menuWorksText || 'Works'}
                    onChange={(e) => updateHeroField('menuWorksText', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Nút About me</label>
                  <input
                    type="text"
                    value={data.hero.menuAboutText || 'About me'}
                    onChange={(e) => updateHeroField('menuAboutText', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Nút Resume</label>
                  <input
                    type="text"
                    value={data.hero.menuResumeText || 'Resume'}
                    onChange={(e) => updateHeroField('menuResumeText', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Interactive Mode</label>
                  <input
                    type="text"
                    value={data.hero.interactiveModeText || 'Interactive Mode'}
                    onChange={(e) => updateHeroField('interactiveModeText', e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-teal-400 text-xs font-bold"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: OVERVIEW & ENTIRE MAIN DASHBOARD ================= */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Section 1: 6 Telemetry Hardware Cards */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-teal-400" />
                    <span>1. Chỉnh Sửa 6 Thẻ Giám Sát Phần Cứng Telemetry (Trang Chính Dashboard)</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Cập nhật tiêu đề, số liệu chính, đơn vị, thông số phụ và tỉ lệ phần trăm chấm sáng cho từng thẻ
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Metric Card 1: Marketing Core (CPU) */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-blue-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Thẻ 1: CPU Core</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {data.overviewMetrics?.coreExp?.activePercent ?? 65}% Active
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tiêu đề thẻ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.coreExp?.title || 'Marketing Core'}
                      onChange={(e) => updateOverviewMetric('coreExp', 'title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Số lớn (Value)</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.value || '10+'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'value', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold text-blue-400"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Đơn vị (Unit)</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.unit || 'Năm KN'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'unit', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Nhãn Quản Lý</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.subLabel || 'Quản Lý / CMO'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'subLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Giá trị Quản Lý</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.sub || '06 Năm'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'sub', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Nhãn Hiệu Suất</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.peakLabel || 'Hiệu Suất'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'peakLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Giá trị Hiệu Suất</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.peak || '98% Peak'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'peak', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Nhãn Mảng Chính</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.domainLabel || 'Mảng Chính'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'domainLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Giá trị Mảng</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.coreExp?.domain || 'Fashion/Beauty'}
                        onChange={(e) => updateOverviewMetric('coreExp', 'domain', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ Lệ Chấm Sáng (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.overviewMetrics?.coreExp?.activePercent ?? 65}
                      onChange={(e) => updateOverviewMetric('coreExp', 'activePercent', Number(e.target.value))}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>

                {/* Metric Card 2: Campaign Reach (Memory) */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Thẻ 2: Campaign Reach</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {data.overviewMetrics?.reach?.activePercent ?? 75}% Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Tiêu đề thẻ</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.title || 'Campaign Reach'}
                        onChange={(e) => updateOverviewMetric('reach', 'title', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Huy hiệu trạng thái</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.badge || '✓ Normal'}
                        onChange={(e) => updateOverviewMetric('reach', 'badge', e.target.value)}
                        className="w-full px-2 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-emerald-400 text-xs font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Tổng Views</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.value || '500M+'}
                        onChange={(e) => updateOverviewMetric('reach', 'value', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-emerald-400 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Đơn vị</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.unit || 'Views'}
                        onChange={(e) => updateOverviewMetric('reach', 'unit', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Ghi chú nền tảng</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.reach?.sub || 'Toàn bộ nền tảng MXH'}
                      onChange={(e) => updateOverviewMetric('reach', 'sub', e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 1</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.videoLabel || 'Video Viral'}
                        onChange={(e) => updateOverviewMetric('reach', 'videoLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.video || '340M+'}
                        onChange={(e) => updateOverviewMetric('reach', 'video', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-emerald-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 2</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.pressLabel || 'Báo Chí PR'}
                        onChange={(e) => updateOverviewMetric('reach', 'pressLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.press || '90M+'}
                        onChange={(e) => updateOverviewMetric('reach', 'press', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-emerald-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 3</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.eventLabel || 'Khai Trương'}
                        onChange={(e) => updateOverviewMetric('reach', 'eventLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.reach?.event || '70M+'}
                        onChange={(e) => updateOverviewMetric('reach', 'event', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-emerald-400 font-bold text-[11px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ Lệ Chấm Sáng (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.overviewMetrics?.reach?.activePercent ?? 75}
                      onChange={(e) => updateOverviewMetric('reach', 'activePercent', Number(e.target.value))}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>

                {/* Metric Card 3: Revenue Benchmark (GPU) */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-rose-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Thẻ 3: Revenue Benchmark</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {data.overviewMetrics?.revenue?.activePercent ?? 82}% Active
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tiêu đề thẻ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.revenue?.title || 'Revenue Benchmark'}
                      onChange={(e) => updateOverviewMetric('revenue', 'title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Số tăng trưởng</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.value || 'x3'}
                        onChange={(e) => updateOverviewMetric('revenue', 'value', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-rose-400 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Đơn vị</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.unit || 'Doanh Thu 2025'}
                        onChange={(e) => updateOverviewMetric('revenue', 'unit', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Nhãn đại diện</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.subLabel || 'Thương hiệu'}
                        onChange={(e) => updateOverviewMetric('revenue', 'subLabel', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Thương hiệu đại diện</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.sub || 'DEZUS Fashion'}
                        onChange={(e) => updateOverviewMetric('revenue', 'sub', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 block">Nhãn ROAS</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.roasLabel || 'ROAS Peak'}
                        onChange={(e) => updateOverviewMetric('revenue', 'roasLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.roas || '6.8x'}
                        onChange={(e) => updateOverviewMetric('revenue', 'roas', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-rose-400 text-xs font-bold"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400 block">Nhãn Lợi Nhuận</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.profitLabel || 'Net Profit'}
                        onChange={(e) => updateOverviewMetric('revenue', 'profitLabel', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.revenue?.profit || '+180%'}
                        onChange={(e) => updateOverviewMetric('revenue', 'profit', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ Lệ Chấm Sáng (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.overviewMetrics?.revenue?.activePercent ?? 82}
                      onChange={(e) => updateOverviewMetric('revenue', 'activePercent', Number(e.target.value))}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>

                {/* Metric Card 4: Projects Executed (Disk) */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5" />
                      <span>Thẻ 4: Projects Executed</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {data.overviewMetrics?.projectsCount?.activePercent ?? 60}% Active
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tiêu đề thẻ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.projectsCount?.title || 'Projects Executed'}
                      onChange={(e) => updateOverviewMetric('projectsCount', 'title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Số dự án (Value)</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.value || '50+'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'value', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-amber-400 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Đơn vị</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.unit || 'Dự án lớn'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'unit', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Ghi chú phụ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.projectsCount?.sub || 'Đã bàn giao & vận hành'}
                      onChange={(e) => updateOverviewMetric('projectsCount', 'sub', e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 1</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.stat1Label || 'Thời Trang'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'stat1Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.stat1Val || '26 Dự án'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'stat1Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-amber-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 2</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.stat2Label || 'Beauty & Clinic'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'stat2Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.stat2Val || '14 Dự án'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'stat2Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-amber-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 3</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.stat3Label || 'Showroom'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'stat3Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.projectsCount?.stat3Val || '10 Điểm'}
                        onChange={(e) => updateOverviewMetric('projectsCount', 'stat3Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-amber-400 font-bold text-[11px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ Lệ Chấm Sáng (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.overviewMetrics?.projectsCount?.activePercent ?? 60}
                      onChange={(e) => updateOverviewMetric('projectsCount', 'activePercent', Number(e.target.value))}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>

                {/* Metric Card 5: Omnichannel Stream (Network) */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-teal-400 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Thẻ 5: Omnichannel Stream</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {data.overviewMetrics?.stream?.activePercent ?? 70}% Active
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tiêu đề thẻ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.stream?.title || 'Omnichannel Stream'}
                      onChange={(e) => updateOverviewMetric('stream', 'title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Lưu lượng/tháng</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.value || '24.3'}
                        onChange={(e) => updateOverviewMetric('stream', 'value', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-teal-400 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Đơn vị</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.unit || 'M/Tháng'}
                        onChange={(e) => updateOverviewMetric('stream', 'unit', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Kênh phân bổ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.stream?.sub || 'Lưu lượng đa kênh'}
                      onChange={(e) => updateOverviewMetric('stream', 'sub', e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 1</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.stat1Label || 'TikTok Shop'}
                        onChange={(e) => updateOverviewMetric('stream', 'stat1Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.stat1Val || '12.8M'}
                        onChange={(e) => updateOverviewMetric('stream', 'stat1Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-teal-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 2</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.stat2Label || 'Meta / Reels'}
                        onChange={(e) => updateOverviewMetric('stream', 'stat2Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.stat2Val || '7.2M'}
                        onChange={(e) => updateOverviewMetric('stream', 'stat2Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-teal-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 3</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.stat3Label || 'Showroom'}
                        onChange={(e) => updateOverviewMetric('stream', 'stat3Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.stream?.stat3Val || '4.3M'}
                        onChange={(e) => updateOverviewMetric('stream', 'stat3Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-teal-400 font-bold text-[11px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ Lệ Chấm Sáng (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.overviewMetrics?.stream?.activePercent ?? 70}
                      onChange={(e) => updateOverviewMetric('stream', 'activePercent', Number(e.target.value))}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>

                {/* Metric Card 6: Operations & Leadership (Processes) */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-indigo-400 flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5" />
                      <span>Thẻ 6: Vận Hành & Nhân Sự</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {data.overviewMetrics?.operations?.activePercent ?? 88}% Active
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tiêu đề thẻ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.operations?.title || 'Vận Hành & Nhân Sự'}
                      onChange={(e) => updateOverviewMetric('operations', 'title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Assets/tháng</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.value || '240+'}
                        onChange={(e) => updateOverviewMetric('operations', 'value', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-indigo-400 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Đơn vị</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.unit || 'Assets/Tháng'}
                        onChange={(e) => updateOverviewMetric('operations', 'unit', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Quy mô đội ngũ</label>
                    <input
                      type="text"
                      value={data.overviewMetrics?.operations?.sub || 'Nguồn lực sẵn sàng'}
                      onChange={(e) => updateOverviewMetric('operations', 'sub', e.target.value)}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 1</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.stat1Label || 'Nhân Sự Led'}
                        onChange={(e) => updateOverviewMetric('operations', 'stat1Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.stat1Val || '20+ Marketers'}
                        onChange={(e) => updateOverviewMetric('operations', 'stat1Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-indigo-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 2</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.stat2Label || 'Agency Đối Tác'}
                        onChange={(e) => updateOverviewMetric('operations', 'stat2Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.stat2Val || '50+ Đối tác'}
                        onChange={(e) => updateOverviewMetric('operations', 'stat2Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-indigo-400 font-bold text-[11px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 block">Nhãn 3</label>
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.stat3Label || 'Tự Động Hóa AI'}
                        onChange={(e) => updateOverviewMetric('operations', 'stat3Label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        value={data.overviewMetrics?.operations?.stat3Val || '70% Speed'}
                        onChange={(e) => updateOverviewMetric('operations', 'stat3Val', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-indigo-400 font-bold text-[11px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ Lệ Chấm Sáng (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={data.overviewMetrics?.operations?.activePercent ?? 88}
                      onChange={(e) => updateOverviewMetric('operations', 'activePercent', Number(e.target.value))}
                      className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Competency Donut Chart */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-teal-400" />
                <span>2. Biểu Đồ Tròn Phân Bổ Năng Lực Cốt Lõi (Donut Chart)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tiêu Đề Biểu Đồ</label>
                  <input
                    type="text"
                    value={data.competencyDonut?.title || 'Phân Bổ Năng Lực Cốt Lõi'}
                    onChange={(e) => updateCompetencyField('title', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Huy Hiệu Phụ Góc</label>
                  <input
                    type="text"
                    value={data.competencyDonut?.badge || '100% Balanced'}
                    onChange={(e) => updateCompetencyField('badge', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chữ Tâm Vòng 1</label>
                  <input
                    type="text"
                    value={data.competencyDonut?.centerTitle || 'CMO'}
                    onChange={(e) => updateCompetencyField('centerTitle', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chữ Tâm Vòng 2</label>
                  <input
                    type="text"
                    value={data.competencyDonut?.centerSub || 'Executive'}
                    onChange={(e) => updateCompetencyField('centerSub', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              </div>

              {/* 4 Competency Segments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {(data.competencyDonut?.items || [
                  { name: 'Brand Strategy', percent: 35, color: '#008080' },
                  { name: 'Growth & Ads', percent: 30, color: '#F59E0B' },
                  { name: 'Omnichannel', percent: 20, color: '#3B82F6' },
                  { name: 'Creative & Events', percent: 15, color: '#EC4899' },
                ]).map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs font-bold text-slate-300">Nhóm {idx + 1}</span>
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Tên năng lực</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateCompetencyItem(idx, 'name', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ lệ (%)</label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={item.percent}
                          onChange={(e) => updateCompetencyItem(idx, 'percent', Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Mã Màu Hex</label>
                        <input
                          type="text"
                          value={item.color}
                          onChange={(e) => updateCompetencyItem(idx, 'color', e.target.value)}
                          className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Channel Efficiency by ROI */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-400" />
                <span>3. Hiệu Suất Kênh Tiếp Thị (ROI Share Breakdown)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tiêu Đề Khối</label>
                  <input
                    type="text"
                    value={data.channelEfficiency?.title || 'Hiệu Suất Kênh Tiếp Thị (ROI)'}
                    onChange={(e) => updateChannelEfficiencyField('title', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Mốc Thời Gian / Benchmark</label>
                  <input
                    type="text"
                    value={data.channelEfficiency?.subtitle || 'Benchmark 2025-2026'}
                    onChange={(e) => updateChannelEfficiencyField('subtitle', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Mô Hình Đo Lường (Model Tag)</label>
                  <input
                    type="text"
                    value={data.channelEfficiency?.modelTag || 'Omnichannel Attribution'}
                    onChange={(e) => updateChannelEfficiencyField('modelTag', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-teal-400 text-xs font-bold"
                  />
                </div>
              </div>

              {/* 4 Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {(data.channelEfficiency?.channels || [
                  { name: 'TikTok Shop & Viral Short', percent: 42, color: 'teal' },
                  { name: 'Meta Ads & Retargeting Phễu', percent: 28, color: 'blue' },
                  { name: 'Fashion Show & Grand Opening', percent: 18, color: 'amber' },
                  { name: 'Kênh14, PR & Celebrity Influence', percent: 12, color: 'purple' },
                ]).map((ch, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                    <span className="text-xs font-bold text-slate-300 block">Kênh {idx + 1}</span>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-0.5">Tên kênh</label>
                      <input
                        type="text"
                        value={ch.name}
                        onChange={(e) => updateChannelItem(idx, 'name', e.target.value)}
                        className="w-full px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-semibold"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Tỉ lệ ROI (%)</label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={ch.percent}
                          onChange={(e) => updateChannelItem(idx, 'percent', Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Tông Màu</label>
                        <select
                          value={ch.color}
                          onChange={(e) => updateChannelItem(idx, 'color', e.target.value)}
                          className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-700 text-white text-xs"
                        >
                          <option value="teal">Teal (Ngọc)</option>
                          <option value="blue">Blue (Xanh dương)</option>
                          <option value="amber">Amber (Vàng hổ phách)</option>
                          <option value="purple">Purple (Tím)</option>
                          <option value="rose">Rose (Đỏ hồng)</option>
                          <option value="emerald">Emerald (Xanh lục)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Executive Action Banner */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Send className="w-5 h-5 text-teal-400" />
                <span>4. Banner Kêu Gọi Hành Động Executive (Cuối Trang Dashboard)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Huy Hiệu Thời Gian (Badge)</label>
                  <input
                    type="text"
                    value={data.executiveBanner?.badge || 'Sẵn Sàng Hợp Tác • Quý 4/2026'}
                    onChange={(e) => updateExecutiveBannerField('badge', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tiêu Đề Lớn Kêu Gọi Hợp Tác</label>
                  <input
                    type="text"
                    value={data.executiveBanner?.title || 'Bạn Đang Tìm Kiếm Giám Đốc Marketing (CMO) Hoặc Cố Vấn Tăng Trưởng?'}
                    onChange={(e) => updateExecutiveBannerField('title', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Đoạn Mô Tả Cam Kết Giá Trị</label>
                <textarea
                  rows={2}
                  value={data.executiveBanner?.description || 'Sẵn sàng mang đến những chiến dịch đột phá triệu view, tối ưu hóa ngân sách P&L và nhân bội doanh số bán lẻ thời trang & làm đẹp.'}
                  onChange={(e) => updateExecutiveBannerField('description', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Đường Dẫn Tải CV Bản Đầy Đủ</label>
                  <input
                    type="text"
                    value={data.executiveBanner?.cvUrl || data.hero.cvUrl || 'https://drive.google.com/file/d/1Z_u10aD60H39eBvEGB8l0rV3Z57l87oT/view'}
                    onChange={(e) => updateExecutiveBannerField('cvUrl', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chữ Nút Tải CV</label>
                  <input
                    type="text"
                    value={data.executiveBanner?.cvButtonText || 'Tải CV Bản Đầy Đủ'}
                    onChange={(e) => updateExecutiveBannerField('cvButtonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chữ Nút Liên Hệ</label>
                  <input
                    type="text"
                    value={data.executiveBanner?.contactButtonText || 'Liên Hệ Ngay'}
                    onChange={(e) => updateExecutiveBannerField('contactButtonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-teal-400 text-xs font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Featured Launchpad Widget */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>5. Khối Dự Án Tiêu Biểu Nhanh (Launchpad Widget)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tiêu Đề Khối</label>
                  <input
                    type="text"
                    value={data.launchpadWidget?.title || 'Dự Án Tiêu Biểu Nhanh'}
                    onChange={(e) => updateLaunchpadField('title', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chữ Nút Xem Tất Cả Dự Án</label>
                  <input
                    type="text"
                    value={data.launchpadWidget?.viewAllText || 'Xem tất cả'}
                    onChange={(e) => updateLaunchpadField('viewAllText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-teal-400 text-xs font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Ghi Chú Chân Khối</label>
                  <input
                    type="text"
                    value={data.launchpadWidget?.bottomNote || 'Xác thực số liệu minh bạch'}
                    onChange={(e) => updateLaunchpadField('bottomNote', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chữ Nút Chuyển Sang Thành Tựu</label>
                  <input
                    type="text"
                    value={data.launchpadWidget?.verifyButtonText || 'Thành tựu xác thực'}
                    onChange={(e) => updateLaunchpadField('verifyButtonText', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: System & Mini Profile Info */}
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-400" />
                <span>6. Thông Tin Nhận Diện Hệ Thống Dashboard (System & Mini Profile)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tên Máy Chủ (Host Name Header)</label>
                  <input
                    type="text"
                    value={data.systemInfo?.hostName || 'DESKTOP-TRANHAI-OS'}
                    onChange={(e) => updateSystemInfoField('hostName', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tên Hệ Điều Hành (OS Name Sidebar)</label>
                  <input
                    type="text"
                    value={data.systemInfo?.osName || 'Trần Hải OS'}
                    onChange={(e) => updateSystemInfoField('osName', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phiên Bản (OS Version Tag)</label>
                  <input
                    type="text"
                    value={data.systemInfo?.osVersion || 'CMO CONTROL v2.6'}
                    onChange={(e) => updateSystemInfoField('osVersion', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-teal-400 text-xs font-mono font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tên Thẻ Mini Profile Sidebar</label>
                  <input
                    type="text"
                    value={data.systemInfo?.profileName || data.hero?.heading || 'Trần Hải'}
                    onChange={(e) => updateSystemInfoField('profileName', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chức Danh Mini Profile Sidebar</label>
                  <input
                    type="text"
                    value={data.systemInfo?.profileTitle || data.hero?.roleTag || 'CMO / Marketing Director'}
                    onChange={(e) => updateSystemInfoField('profileTitle', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Ảnh Đại Diện Mini Profile</label>
                  <input
                    type="text"
                    value={data.systemInfo?.profilePhoto || data.about?.photo || './images/personal-photo.jpg'}
                    onChange={(e) => updateSystemInfoField('profilePhoto', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ABOUT ME & BIO ================= */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <User className="w-5 h-5 text-teal-400" />
                <span>Giới Thiệu Bản Thân & Ảnh Đại Diện</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                    Ảnh Chân Dung (Portrait Photo URL)
                  </label>
                  <input
                    type="text"
                    value={data.about.photo || './images/personal-photo.jpg'}
                    onChange={(e) => updateAboutField('photo', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:border-teal-500"
                  />
                  <div className="mt-3 w-32 h-32 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
                    <img
                      src={data.about.photo || './images/personal-photo.jpg'}
                      alt="Avatar Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = './images/profile.jpg';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                    Đoạn Văn Tiểu Sử (Bio Paragraph)
                  </label>
                  <textarea
                    rows={6}
                    value={data.about.bio}
                    onChange={(e) => updateAboutField('bio', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed focus:border-teal-500 resize-none"
                  />
                </div>
              </div>

              {/* 4 Stats */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  4 Chỉ Số Thống Kê Chính
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.about.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                      <div>
                        <label className="text-[10px] text-slate-400">Giá trị (VD: 10+)</label>
                        <input
                          type="text"
                          value={st.value}
                          onChange={(e) => updateStatItem(sIdx, 'value', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400">Nhãn mô tả</label>
                        <input
                          type="text"
                          value={st.label}
                          onChange={(e) => updateStatItem(sIdx, 'label', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: WORK EXPERIENCE ================= */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-teal-400" />
                <span>Kinh Nghiệm Làm Việc (4 Doanh Nghiệp Lớn)</span>
              </h2>

              <div className="space-y-6">
                {data.about.experiences.map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-400 border border-teal-800">
                        VỊ TRÍ #{idx + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Tên Công Ty</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateExperienceItem(idx, 'company', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Thương Hiệu</label>
                        <input
                          type="text"
                          value={exp.brand}
                          onChange={(e) => updateExperienceItem(idx, 'brand', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Chức Danh / Role</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => updateExperienceItem(idx, 'role', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Mô Tả Trách Nhiệm</label>
                      <textarea
                        rows={3}
                        value={exp.description}
                        onChange={(e) => updateExperienceItem(idx, 'description', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs leading-relaxed resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 5: PROJECTS (4 DỰ ÁN LỚN) ================= */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-teal-400" />
                <span>4 Dự Án Lớn — Hình Ảnh & Liên Kết</span>
              </h2>

              <div className="space-y-8">
                {data.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-black font-mono text-teal-400">
                          {proj.number}
                        </span>
                        <input
                          type="text"
                          value={proj.name}
                          onChange={(e) => updateProject(pIdx, 'name', e.target.value)}
                          className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-base font-bold w-64 sm:w-96"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Danh Mục & Huy Hiệu</label>
                        <input
                          type="text"
                          value={proj.category}
                          onChange={(e) => updateProject(pIdx, 'category', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Link Trực Tiếp (Drive / Web / Sheets)</label>
                        <input
                          type="text"
                          value={proj.link}
                          onChange={(e) => updateProject(pIdx, 'link', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Mô Tả Dự Án</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => updateProject(pIdx, 'description', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs resize-none"
                      />
                    </div>

                    {/* 3 Images */}
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-2">
                        3 Hình Ảnh Minh Họa (Cột 1 Ảnh 1, Cột 1 Ảnh 2, Cột 2 Ảnh Lớn)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Cột 1 - Ảnh 1 URL"
                            value={proj.col1Img1}
                            onChange={(e) => updateProject(pIdx, 'col1Img1', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono mb-2"
                          />
                          <div className="h-28 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                            <img src={proj.col1Img1} alt="" className="w-full h-full object-cover" />
                          </div>
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder="Cột 1 - Ảnh 2 URL"
                            value={proj.col1Img2}
                            onChange={(e) => updateProject(pIdx, 'col1Img2', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono mb-2"
                          />
                          <div className="h-28 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                            <img src={proj.col1Img2} alt="" className="w-full h-full object-cover" />
                          </div>
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder="Cột 2 - Ảnh Lớn URL"
                            value={proj.col2Img}
                            onChange={(e) => updateProject(pIdx, 'col2Img', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono mb-2"
                          />
                          <div className="h-28 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                            <img src={proj.col2Img} alt="" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 6: MARQUEE SHOWCASE ================= */}
        {activeTab === 'marquee' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                <span>Chiến Dịch & Sản Phẩm Tiêu Biểu (Marquee Rows 1 & 2)</span>
              </h2>

              {/* Row 1 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider">
                    Hàng 1 (Row 1 — {data.marquee.row1.length} ảnh)
                  </h3>
                  <button
                    onClick={addRow1Item}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm ảnh Hàng 1</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.marquee.row1.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2 relative group">
                      <button
                        onClick={() => deleteRow1Item(idx)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-rose-900/60 hover:bg-rose-700 text-white"
                        title="Xóa item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="h-32 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                        <img src={item.src} alt="" className="w-full h-full object-cover" />
                      </div>

                      <input
                        type="text"
                        placeholder="Link ảnh URL"
                        value={item.src}
                        onChange={(e) => updateRow1Item(idx, 'src', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                      />
                      <input
                        type="text"
                        placeholder="Tag (VD: DEZUS Fashion)"
                        value={item.tag}
                        onChange={(e) => updateRow1Item(idx, 'tag', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Tiêu đề (VD: Brand Strategy)"
                        value={item.title}
                        onChange={(e) => updateRow1Item(idx, 'title', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider">
                    Hàng 2 (Row 2 — {data.marquee.row2.length} ảnh)
                  </h3>
                  <button
                    onClick={addRow2Item}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm ảnh Hàng 2</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.marquee.row2.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2 relative group">
                      <button
                        onClick={() => deleteRow2Item(idx)}
                        className="absolute top-2 right-2 p-1.5 rounded-md bg-rose-900/60 hover:bg-rose-700 text-white"
                        title="Xóa item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="h-32 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                        <img src={item.src} alt="" className="w-full h-full object-cover" />
                      </div>

                      <input
                        type="text"
                        placeholder="Link ảnh URL"
                        value={item.src}
                        onChange={(e) => updateRow2Item(idx, 'src', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                      />
                      <input
                        type="text"
                        placeholder="Tag"
                        value={item.tag}
                        onChange={(e) => updateRow2Item(idx, 'tag', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Tiêu đề"
                        value={item.title}
                        onChange={(e) => updateRow2Item(idx, 'title', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 7: SKILLS & LEVEL ================= */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-400" />
                <span>Kỹ Năng & Mức Độ Thành Thạo (Level 0 - 100)</span>
              </h2>

              <div className="space-y-6">
                {data.skillsData.map((cat) => (
                  <div key={cat.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <h3 className="text-sm font-bold text-teal-400 uppercase">
                      {cat.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="font-bold text-slate-200">{skill.name}</span>
                            <span className="font-mono text-teal-400 font-bold">{skill.level}%</span>
                          </div>
                          <input
                            type="range"
                            min="50"
                            max="100"
                            value={skill.level}
                            onChange={(e) => updateSkillLevel(cat.id, sIdx, parseInt(e.target.value))}
                            className="w-full accent-teal-500 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 8: SERVICES ================= */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-teal-400" />
                <span>6 Gói Dịch Vụ & Năng Lực Cung Cấp</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.servicesList.map((svc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <span className="text-xs font-mono font-bold text-teal-400">
                      GÓI #{svc.number}
                    </span>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Tiêu Đề Dịch Vụ</label>
                      <input
                        type="text"
                        value={svc.title}
                        onChange={(e) => updateServiceField(idx, 'title', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Mô Tả Ngắn</label>
                      <textarea
                        rows={2}
                        value={svc.shortDesc}
                        onChange={(e) => updateServiceField(idx, 'shortDesc', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 9: ACHIEVEMENTS ================= */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-teal-400" />
                <span>Thành Tựu & Số Liệu Xác Minh</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.achievements.map((ach, idx) => (
                  <div key={ach.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Số Liệu (VD: 500M+)</label>
                        <input
                          type="text"
                          value={ach.metric}
                          onChange={(e) => updateAchievementField(idx, 'metric', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-teal-400 text-sm font-black"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Năm</label>
                        <input
                          type="text"
                          value={ach.date}
                          onChange={(e) => updateAchievementField(idx, 'date', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Tiêu Đề Thành Tựu</label>
                      <input
                        type="text"
                        value={ach.title}
                        onChange={(e) => updateAchievementField(idx, 'title', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Link Tài Liệu / Báo Chí</label>
                      <input
                        type="text"
                        value={ach.link || ''}
                        onChange={(e) => updateAchievementField(idx, 'link', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 10: CONTACT CHANNELS ================= */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div className="bg-[#131B26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 shadow-card">
              <h2 className="text-xl font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>Kênh Liên Hệ & Mạng Xã Hội</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={data.contact.email}
                    onChange={(e) => updateContactField('email', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Hotline / Điện thoại</label>
                  <input
                    type="text"
                    value={data.contact.phone}
                    onChange={(e) => updateContactField('phone', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Link Zalo Chat</label>
                  <input
                    type="text"
                    value={data.contact.zaloUrl}
                    onChange={(e) => updateContactField('zaloUrl', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Link Facebook</label>
                  <input
                    type="text"
                    value={data.contact.facebookUrl}
                    onChange={(e) => updateContactField('facebookUrl', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Link Instagram</label>
                  <input
                    type="text"
                    value={data.contact.instagramUrl}
                    onChange={(e) => updateContactField('instagramUrl', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Link Website / GitHub</label>
                  <input
                    type="text"
                    value={data.contact.githubUrl}
                    onChange={(e) => updateContactField('githubUrl', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
