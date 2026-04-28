import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

export function Notice() {
  const notices = [
    {
      id: 1,
      title: 'Nyangi v2.0 업데이트 안내',
      date: '2026-04-20',
      category: '업데이트',
      summary: 'AI 기반 팀 인사이트 기능이 새롭게 추가되었습니다. 팀의 협업 패턴을 자동으로 분석하고 개선 방안을 제안합니다.',
      isNew: true
    },
    {
      id: 2,
      title: '서비스 점검 안내 (완료)',
      date: '2026-04-15',
      category: '점검',
      summary: '4월 16일 새벽 2시~4시 서버 업그레이드 작업이 진행됩니다. 서비스 이용에 불편을 드려 죄송합니다.',
      isNew: false
    },
    {
      id: 3,
      title: '새로운 요금제 출시',
      date: '2026-04-10',
      category: '서비스',
      summary: 'Enterprise 요금제가 새롭게 출시되었습니다. 대규모 조직을 위한 맞춤형 기능을 제공합니다.',
      isNew: false
    },
    {
      id: 4,
      title: '봄맞이 이벤트 진행 중',
      date: '2026-04-01',
      category: '이벤트',
      summary: '4월 한 달간 신규 가입 고객 대상 첫 달 50% 할인 이벤트를 진행합니다.',
      isNew: false
    },
    {
      id: 5,
      title: '개인정보처리방침 변경 안내',
      date: '2026-03-25',
      category: '정책',
      summary: '개인정보처리방침이 일부 변경되었습니다. 자세한 내용은 공지사항을 확인해주세요.',
      isNew: false
    },
    {
      id: 6,
      title: 'Slack 워크플로우 빌더 통합',
      date: '2026-03-15',
      category: '업데이트',
      summary: 'Slack의 워크플로우 빌더와 완벽하게 통합되어 더욱 강력한 자동화를 구현할 수 있습니다.',
      isNew: false
    }
  ];

  const categories = ['전체', '업데이트', '점검', '서비스', '이벤트', '정책'];

  return (
    <section id="notice" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">공지사항</h1>
          <p className="text-lg text-gray-600">
            Nyangi의 최신 소식과 업데이트를 확인하세요
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                category === '전체'
                  ? 'bg-[oklch(51.1%_.096_186.391)] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Notice list */}
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border border-gray-200 hover:border-[oklch(51.1%_.096_186.391)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {notice.isNew && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                        NEW
                      </span>
                    )}
                    <span className="px-3 py-1 bg-[oklch(51.1%_.096_186.391)]/10 text-[oklch(51.1%_.096_186.391)] text-sm font-medium rounded">
                      {notice.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{notice.summary}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{notice.date}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            이전
          </button>
          <button className="px-4 py-2 bg-[oklch(51.1%_.096_186.391)] text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            다음
          </button>
        </div>
      </div>
    </section>
  );
}
