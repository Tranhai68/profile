import React, { useState } from 'react';
import {
  PortfolioData,
  getStoredPortfolioData,
  savePortfolioData,
  resetStoredPortfolioData,
  ProjectItem,
  ProjectTile,
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
} from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [data, setData] = useState<PortfolioData>(() => getStoredPortfolioData());
  const [activeTab, setActiveTab] = useState<'hero' | 'marquee' | 'projects' | 'about'>('hero');
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

  // Helper for Projects
  const updateProject = (index: number, field: keyof ProjectItem, val: string) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: val };
    setData({ ...data, projects: newProjects });
  };

  return (
    <div className="min-h-screen w-full bg-[#0E0E10] text-[#D7E2EA] font-kanit">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow-2xl animate-fade-in border border-emerald-400">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#141418]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Portfolio</span>
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Admin Management Panel</span>
            </h1>
            <p className="text-xs text-neutral-400">
              Quản trị hình ảnh &amp; nội dung trang Portfolio của Trần Hải
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportJSON}
            title="Sao chép toàn bộ dữ liệu JSON"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm transition-all"
          >
            <Copy className="w-4 h-4 text-neutral-400" />
            <span>Copy JSON</span>
          </button>
          <button
            onClick={handleReset}
            title="Khôi phục dữ liệu ban đầu"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs sm:text-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mặc định</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Lưu tất cả thay đổi</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-8">
          {[
            { id: 'hero', label: '1. Ảnh nền Hero Page' },
            { id: 'marquee', label: '2. Dải ảnh Marquee (Dự án & Sản phẩm)' },
            { id: 'projects', label: '3. Danh sách Dự án (Projects)' },
            { id: 'about', label: '4. Giới thiệu & Kinh nghiệm' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                  : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: HERO SECTION */}
        {activeTab === 'hero' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-purple-400" />
                <span>Ảnh nền Hero Section</span>
              </h2>
              <p className="text-xs text-neutral-400 mb-6">
                Ảnh này hiển thị tràn toàn màn hình phía sau chữ &quot;HI, I&apos;M HẢI&quot; và di chuyển nhẹ theo chuột.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1.5">
                      Đường dẫn ảnh nền (URL hoặc file nội bộ)
                    </label>
                    <input
                      type="text"
                      value={data.hero.bgImage}
                      onChange={(e) =>
                        setData({ ...data, hero: { ...data.hero, bgImage: e.target.value } })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  {/* Preset Quick Selectors */}
                  <div>
                    <span className="text-xs text-neutral-400 block mb-2">Chọn nhanh từ các ảnh có sẵn trong repo:</span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'hero-banner.png (Góc rộng - Khuyên dùng)', path: './images/hero-banner.png' },
                        { label: 'profile.jpg (Ảnh Vest chân dung)', path: './images/profile.jpg' },
                        { label: 'personal-photo.jpg (Ảnh đời thường)', path: './images/personal-photo.jpg' },
                      ].map((preset) => (
                        <button
                          key={preset.path}
                          onClick={() =>
                            setData({ ...data, hero: { ...data.hero, bgImage: preset.path } })
                          }
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500 text-xs text-neutral-300"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1.5">
                        Role Tag
                      </label>
                      <input
                        type="text"
                        value={data.hero.roleTag}
                        onChange={(e) =>
                          setData({ ...data, hero: { ...data.hero, roleTag: e.target.value } })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1.5">
                        Tiêu đề Hero
                      </label>
                      <input
                        type="text"
                        value={data.hero.heading}
                        onChange={(e) =>
                          setData({ ...data, hero: { ...data.hero, heading: e.target.value } })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1.5">
                      Subtext góc trái dưới
                    </label>
                    <textarea
                      rows={2}
                      value={data.hero.subtext}
                      onChange={(e) =>
                        setData({ ...data, hero: { ...data.hero, subtext: e.target.value } })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 resize-none"
                    />
                  </div>
                </div>

                {/* Preview Box */}
                <div className="lg:col-span-5">
                  <span className="text-xs uppercase font-semibold text-neutral-400 block mb-1.5">
                    Xem trước ảnh nền:
                  </span>
                  <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner">
                    <img
                      src={data.hero.bgImage}
                      alt="Hero Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = './images/hero-banner.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <span className="text-xs text-white font-semibold">
                        Preview: {data.hero.heading}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARQUEE IMAGES */}
        {activeTab === 'marquee' && (
          <div className="space-y-8 animate-fade-in">
            {/* Row 1 Section */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <span>Hàng 1: Dải ảnh cuộn sang PHẢI ({data.marquee.row1.length} ảnh)</span>
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Bạn có thể sửa link ảnh, nhãn phân loại (Tag) và tiêu đề của từng thẻ.
                  </p>
                </div>
                <button
                  onClick={addRow1Item}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 border border-purple-500/50 text-white text-xs font-semibold transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Thêm ảnh mới</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.marquee.row1.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-4 items-center"
                  >
                    {/* Thumbnail Preview */}
                    <div className="w-24 h-20 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = './images/hero-banner.png';
                        }}
                      />
                    </div>

                    {/* Inputs */}
                    <div className="flex-grow space-y-2 text-xs">
                      <div>
                        <input
                          type="text"
                          placeholder="Đường dẫn ảnh src..."
                          value={item.src}
                          onChange={(e) => updateRow1Item(index, 'src', e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Tag..."
                          value={item.tag}
                          onChange={(e) => updateRow1Item(index, 'tag', e.target.value)}
                          className="w-1/3 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-300 font-medium focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Tiêu đề ảnh..."
                          value={item.title}
                          onChange={(e) => updateRow1Item(index, 'title', e.target.value)}
                          className="w-2/3 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => deleteRow1Item(index)}
                      className="p-2 text-neutral-400 hover:text-red-400 transition-colors"
                      title="Xóa ảnh này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 Section */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-400" />
                    <span>Hàng 2: Dải ảnh cuộn sang TRÁI ({data.marquee.row2.length} ảnh)</span>
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Sửa hình ảnh các sự kiện, lookbook và sản phẩm nổi bật.
                  </p>
                </div>
                <button
                  onClick={addRow2Item}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600 border border-blue-500/50 text-white text-xs font-semibold transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Thêm ảnh mới</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.marquee.row2.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-4 items-center"
                  >
                    {/* Thumbnail Preview */}
                    <div className="w-24 h-20 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = './images/profile.jpg';
                        }}
                      />
                    </div>

                    {/* Inputs */}
                    <div className="flex-grow space-y-2 text-xs">
                      <div>
                        <input
                          type="text"
                          placeholder="Đường dẫn ảnh src..."
                          value={item.src}
                          onChange={(e) => updateRow2Item(index, 'src', e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Tag..."
                          value={item.tag}
                          onChange={(e) => updateRow2Item(index, 'tag', e.target.value)}
                          className="w-1/3 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-blue-300 font-medium focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Tiêu đề ảnh..."
                          value={item.title}
                          onChange={(e) => updateRow2Item(index, 'title', e.target.value)}
                          className="w-2/3 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => deleteRow2Item(index)}
                      className="p-2 text-neutral-400 hover:text-red-400 transition-colors"
                      title="Xóa ảnh này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS SHOWCASE */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            {data.projects.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-purple-400">{proj.number}</span>
                    <h3 className="text-lg font-bold text-white">{proj.name}</h3>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">Project #{pIdx + 1}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1">
                      Tên dự án
                    </label>
                    <input
                      type="text"
                      value={proj.name}
                      onChange={(e) => updateProject(pIdx, 'name', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1">
                      Category &amp; Views Tag
                    </label>
                    <input
                      type="text"
                      value={proj.category}
                      onChange={(e) => updateProject(pIdx, 'category', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1">
                    Mô tả dự án
                  </label>
                  <textarea
                    rows={2}
                    value={proj.description}
                    onChange={(e) => updateProject(pIdx, 'description', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold text-neutral-300 block mb-1">
                    Link Dự án (Google Sheet / Drive / Facebook...)
                  </label>
                  <input
                    type="text"
                    value={proj.link}
                    onChange={(e) => updateProject(pIdx, 'link', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none font-mono"
                  />
                </div>

                {/* 3 Images configuration */}
                <div className="pt-2">
                  <span className="text-xs uppercase font-semibold text-neutral-400 block mb-2">
                    3 Hình ảnh minh họa dự án:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Col1 Img1 */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <div className="h-24 rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                        <img
                          src={proj.col1Img1}
                          alt="preview 1"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/product-1.jpg';
                          }}
                        />
                      </div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block">
                        Cột 1 - Ảnh trên
                      </label>
                      <input
                        type="text"
                        value={proj.col1Img1}
                        onChange={(e) => updateProject(pIdx, 'col1Img1', e.target.value)}
                        className="w-full px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-white"
                      />
                    </div>

                    {/* Col1 Img2 */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <div className="h-24 rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                        <img
                          src={proj.col1Img2}
                          alt="preview 2"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/product-2.jpg';
                          }}
                        />
                      </div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block">
                        Cột 1 - Ảnh dưới
                      </label>
                      <input
                        type="text"
                        value={proj.col1Img2}
                        onChange={(e) => updateProject(pIdx, 'col1Img2', e.target.value)}
                        className="w-full px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-white"
                      />
                    </div>

                    {/* Col2 Img */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <div className="h-24 rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                        <img
                          src={proj.col2Img}
                          alt="preview 3"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = './images/hero-banner.png';
                          }}
                        />
                      </div>
                      <label className="text-[10px] uppercase font-semibold text-neutral-400 block">
                        Cột 2 - Ảnh lớn bên phải
                      </label>
                      <input
                        type="text"
                        value={proj.col2Img}
                        onChange={(e) => updateProject(pIdx, 'col2Img', e.target.value)}
                        className="w-full px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: ABOUT & EXPERIENCES */}
        {activeTab === 'about' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Giới thiệu bản thân (Bio)</h3>
              <textarea
                rows={4}
                value={data.about.bio}
                onChange={(e) =>
                  setData({
                    ...data,
                    about: { ...data.about, bio: e.target.value },
                  })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none resize-none"
              />
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Kinh nghiệm quản lý &amp; thực chiến</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.about.experiences.map((exp, eIdx) => (
                  <div key={eIdx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <span className="text-xs font-semibold text-purple-400 block">{exp.badge}</span>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => {
                        const newExps = [...data.about.experiences];
                        newExps[eIdx].company = e.target.value;
                        setData({ ...data, about: { ...data.about, experiences: newExps } });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-sm"
                    />
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => {
                        const newExps = [...data.about.experiences];
                        newExps[eIdx].role = e.target.value;
                        setData({ ...data, about: { ...data.about, experiences: newExps } });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-purple-300 text-xs"
                    />
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => {
                        const newExps = [...data.about.experiences];
                        newExps[eIdx].description = e.target.value;
                        setData({ ...data, about: { ...data.about, experiences: newExps } });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 text-xs resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
