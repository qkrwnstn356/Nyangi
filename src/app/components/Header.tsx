import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

type HeaderProps = {
  onOpenTrialModal: () => void;
};

export function Header({ onOpenTrialModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navItems = [
    {
      label: '기능',
      href: '#features',
      menuTitle: '핵심 기능',
      menuDescription: '팀 운영에 필요한 자동화를 한곳에서 관리합니다.',
      featured: 'Slack 네이티브로 기존 협업 흐름을 그대로 유지합니다.',
      subItems: [
        { label: 'Slack 자동화', href: '#features' },
        { label: '팀 헬스 체크', href: '#features' },
        { label: '컬처 자동화', href: '#features' },
      ],
    },
    {
      label: '비교',
      href: '#comparison',
      menuTitle: '도입 비교',
      menuDescription: '기존 방식 대비 어떤 점이 달라지는지 확인하세요.',
      featured: '도입 효과를 정량 데이터로 빠르게 확인할 수 있습니다.',
      subItems: [
        { label: '기능 비교표', href: '#comparison' },
        { label: '도입 효과', href: '#comparison' },
        { label: '활용 시나리오', href: '#comparison' },
      ],
    },
    {
      label: '요금제',
      href: '#pricing',
      menuTitle: '플랜 안내',
      menuDescription: '팀 규모와 운영 방식에 맞는 플랜을 선택하세요.',
      featured: '14일 무료 체험으로 부담 없이 바로 시작할 수 있습니다.',
      subItems: [
        { label: 'Starter', href: '#pricing' },
        { label: 'Professional', href: '#pricing' },
        { label: 'Enterprise', href: '#pricing' },
      ],
    },
    {
      label: '회사소개',
      href: '#company',
      menuTitle: 'Nyangi 소개',
      menuDescription: '제품 철학과 팀 문화를 소개합니다.',
      featured: '성장하는 팀의 일하는 방식을 제품에 담고 있습니다.',
      subItems: [
        { label: '회사 소개', href: '#company' },
        { label: '고객 사례', href: '#company' },
        { label: '파트너십', href: '#company' },
      ],
    },
    {
      label: '고객지원',
      href: '#support',
      menuTitle: '지원 채널',
      menuDescription: '도입부터 운영까지 전 과정을 지원합니다.',
      featured: '실시간 채널과 전담 지원으로 운영 리스크를 줄입니다.',
      subItems: [
        { label: '도움말 센터', href: '#support' },
        { label: '라이브 챗', href: '#support' },
        { label: '문의하기', href: '#support' },
      ],
    },
  ];
  const activeMenuData = navItems.find((item) => item.label === activeMenu) ?? null;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg"></div>
              <span className="font-bold text-xl text-gray-900">Nyangi</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-7 relative"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <a
                  href={item.href}
                  className={`h-16 inline-flex items-center gap-1 transition-colors ${
                    activeMenu === item.label ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onFocus={() => setActiveMenu(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-colors ${
                      activeMenu === item.label ? 'text-teal-600' : 'text-gray-400'
                    }`}
                  />
                </a>
              </div>
            ))}

            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 w-[min(92vw,980px)] pt-0 transition-all duration-150 ${
                activeMenuData ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => activeMenuData && setActiveMenu(activeMenuData.label)}
            >
              <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                <div className="grid grid-cols-12">
                  <div className="col-span-4 bg-gray-50 p-7 border-r border-gray-200">
                    <p className="text-xs uppercase tracking-[0.12em] text-teal-600 font-semibold mb-3">
                      {activeMenuData?.menuTitle}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-2">{activeMenuData?.label}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{activeMenuData?.menuDescription}</p>
                    <div className="rounded-xl bg-white border border-gray-200 p-4">
                      <p className="text-xs font-semibold text-teal-700 mb-1">한 줄 요약</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{activeMenuData?.featured}</p>
                    </div>
                  </div>

                  <div className="col-span-8 p-7">
                    <p className="text-xs uppercase tracking-[0.12em] text-gray-500 font-semibold mb-3">빠른 이동</p>
                    <div className="grid grid-cols-2 gap-3">
                      {activeMenuData?.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="rounded-xl border border-gray-200 px-4 py-3 hover:border-teal-200 hover:bg-teal-50/60 transition-colors"
                        >
                          <p className="text-sm font-semibold text-gray-900">{subItem.label}</p>
                          <p className="text-xs text-gray-500 mt-1">해당 섹션으로 바로 이동</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              로그인
            </button>
            <button
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              onClick={onOpenTrialModal}
            >
              무료 체험
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                  로그인
                </button>
                <button
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  onClick={onOpenTrialModal}
                >
                  무료 체험
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
