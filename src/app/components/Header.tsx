import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

type HeaderProps = {
  onOpenTrialModal: () => void;
};

type MenuLink = {
  label: string;
  href: string;
  description?: string;
};

type MenuGroup = {
  title: string;
  links: MenuLink[];
};

type NavItem = {
  label: string;
  href: string;
  menuTitle: string;
  menuDescription: string;
  featured: string;
  groups: MenuGroup[];
};

export function Header({ onOpenTrialModal }: HeaderProps) {
  const nyangiLogo = new URL('../../assets/nyangi-logo-transparent.png', import.meta.url).href;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const navItems: NavItem[] = [
    {
      label: '서비스',
      href: '/#features',
      menuTitle: '서비스',
      menuDescription: '양이닷컴의 핵심 서비스를 중심으로 팀 운영 흐름을 연결합니다.',
      featured: '팀 운영에 필요한 핵심 Slack App 기능을 빠르게 시작할 수 있습니다.',
      groups: [
        {
          title: 'Slack App',
          links: [
            { label: '조직도', href: '/#features', description: '팀 구조와 역할을 한눈에 확인' },
            { label: '온보딩', href: '/#features', description: '입사자 적응 과정을 자동화' },
            { label: '커뮤니티', href: '/#features', description: '사내 소통 채널과 활동 운영' },
            { label: 'HR 관리', href: '/#features', description: '인사 관련 업무를 간편하게 처리' },
            { label: '예약 관리', href: '/#features', description: '회의실과 자원을 효율적으로 예약' },
          ],
        },
      ],
    },
    {
      label: '요금제',
      href: '/#pricing',
      menuTitle: '플랜 안내',
      menuDescription: '팀 규모와 운영 방식에 맞는 플랜을 선택하세요.',
      featured: '14일 무료 체험으로 부담 없이 바로 시작할 수 있습니다.',
      groups: [
        {
          title: '요금제',
          links: [
            { label: 'Starter', href: '/#pricing', description: '소규모 팀 시작 플랜' },
            { label: 'Professional', href: '/#pricing', description: '성장 팀 추천 플랜' },
            { label: 'Enterprise', href: '/#pricing', description: '대규모 조직 맞춤 플랜' },
          ],
        },
      ],
    },
    {
      label: '리소스',
      href: '/#resources',
      menuTitle: '리소스',
      menuDescription: '제품 활용 정보와 소식을 모아 필요한 자료를 빠르게 찾을 수 있습니다.',
      featured: '업데이트 소식부터 문의까지 리소스 허브에서 한 번에 확인하세요.',
      groups: [
        {
          title: '리소스',
          links: [
            { label: '블로그', href: '/#resources', description: '운영 노하우와 제품 인사이트 콘텐츠' },
            { label: '공지사항', href: '/notice', description: '업데이트 및 서비스 변경 소식' },
            { label: '문의하기', href: '/contact', description: '도입 상담과 기술 지원 요청' },
          ],
        },
      ],
    },
  ];
  const activeMenuData = navItems.find((item) => item.label === activeMenu) ?? null;
  const activeMobileMenuData = navItems.find((item) => item.label === activeMobileMenu) ?? null;

  const handleToggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setActiveMobileMenu(null);
      return;
    }
    setMobileMenuOpen(true);
    setActiveMobileMenu(navItems[0]?.label ?? null);
  };

  const handleMobileCategoryClick = (item: NavItem) => {
    if (activeMobileMenu === item.label) {
      setMobileMenuOpen(false);
      setActiveMobileMenu(null);
      window.location.href = item.href;
      return;
    }
    setActiveMobileMenu(item.label);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <img src={nyangiLogo} alt="Nyangi logo" className="block w-[50px] h-8 object-contain object-center" />
              <span className="font-bold text-xl text-gray-900">Slack Nyangi</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
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
                      className={`w-4 h-4 transition-all ${
                        activeMenu === item.label ? 'text-teal-600 rotate-180' : 'text-gray-400'
                      }`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 ml-auto">
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
            onClick={handleToggleMobileMenu}
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
          <div className="md:hidden mt-3 rounded-2xl border border-gray-200 bg-white/98 backdrop-blur-sm p-4 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 border-r border-gray-200 pr-3">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleMobileCategoryClick(item)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      activeMobileMenu === item.label
                        ? 'bg-teal-50 text-teal-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="min-h-32">
                {activeMobileMenuData ? (
                  <div className="space-y-3">
                    {activeMobileMenuData.groups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2">{group.title}</p>
                        <div className="space-y-1">
                          {group.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveMobileMenu(null);
                              }}
                              className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 px-2 py-2">대분류를 눌러 서브메뉴를 확인하세요.</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-gray-200">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                로그인
              </button>
              <button
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                onClick={() => {
                  onOpenTrialModal();
                  setMobileMenuOpen(false);
                  setActiveMobileMenu(null);
                }}
              >
                무료 체험
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Full-width Mega Menu */}
      {activeMenuData && (
        <div className="hidden md:block absolute left-0 right-0 top-full border-t border-gray-200 bg-white shadow-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-teal-600 font-semibold mb-3">
                  {activeMenuData.menuTitle}
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-2">{activeMenuData.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{activeMenuData.menuDescription}</p>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-teal-700 mb-1">한 줄 요약</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{activeMenuData.featured}</p>
                </div>
              </div>

              <div className="col-span-9">
                <div
                  className={`grid gap-4 ${
                    activeMenuData.groups.length === 1
                      ? 'md:grid-cols-1'
                      : activeMenuData.groups.length === 2
                        ? 'md:grid-cols-2'
                        : 'md:grid-cols-3'
                  }`}
                >
                  {activeMenuData.groups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl p-4"
                    >
                      <p className="text-sm font-semibold text-gray-900 mb-3">{group.title}</p>
                      <div className="space-y-2">
                        {group.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="group block rounded-lg px-2 py-2 transition-colors hover:bg-teal-50/60"
                          >
                            <p className="text-sm font-medium text-gray-800 transition-colors group-hover:text-[var(--color-teal-600)]">
                              {link.label}
                            </p>
                            {link.description && (
                              <p className="text-xs text-gray-500 mt-1 transition-colors group-hover:text-[var(--color-teal-600)]">
                                {link.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
