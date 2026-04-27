import { Check, X } from 'lucide-react';

export function Comparison() {
  const features = [
    {
      category: '핵심 기능',
      items: [
        { name: 'Slack 네이티브 통합', nyangi: true, competitor: false },
        { name: '팀 헬스 체크 자동화', nyangi: true, competitor: true },
        { name: '1:1 미팅 스케줄링', nyangi: true, competitor: true },
        { name: '온보딩 자동화', nyangi: true, competitor: false },
        { name: '실시간 분석 대시보드', nyangi: true, competitor: true }
      ]
    },
    {
      category: '사용성',
      items: [
        { name: '설치 시간 (5분 이내)', nyangi: true, competitor: false },
        { name: '별도 앱 설치 불필요', nyangi: true, competitor: false },
        { name: '한국어 완벽 지원', nyangi: true, competitor: false },
        { name: '모바일 최적화', nyangi: true, competitor: true }
      ]
    },
    {
      category: '고급 기능',
      items: [
        { name: '커스텀 워크플로우', nyangi: true, competitor: true },
        { name: 'AI 기반 인사이트', nyangi: true, competitor: false },
        { name: '익명 피드백 시스템', nyangi: true, competitor: true },
        { name: 'API 연동', nyangi: true, competitor: true }
      ]
    },
    {
      category: '지원',
      items: [
        { name: '24/7 고객 지원', nyangi: true, competitor: false },
        { name: '전담 성공 매니저', nyangi: true, competitor: false },
        { name: '무료 온보딩 세션', nyangi: true, competitor: false },
        { name: '한국어 문서', nyangi: true, competitor: false }
      ]
    }
  ];

  return (
    <section id="comparison" className="reveal-section py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-item text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            비교 분석
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            왜 Nyangi를 선택해야 할까요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            기존 솔루션과 비교해보세요. Nyangi는 Slack 중심의 팀을 위해 특별히 설계되었습니다.
          </p>
        </div>

        <div className="reveal-item bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-3 bg-teal-700 text-white">
            <div className="p-6">
              <h3 className="font-semibold text-lg">기능</h3>
            </div>
            <div className="p-6 text-center border-l border-white/20">
              <h3 className="font-bold text-xl">Nyangi</h3>
              <p className="text-sm text-teal-100 mt-1">Slack 네이티브</p>
            </div>
            <div className="p-6 text-center border-l border-white/20">
              <h3 className="font-semibold text-lg">타 서비스</h3>
              <p className="text-sm text-teal-100 mt-1">범용 솔루션</p>
            </div>
          </div>

          {/* Comparison rows */}
          {features.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <div className="bg-gray-100 px-6 py-3 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900">{section.category}</h4>
              </div>
              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="grid grid-cols-3 border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="p-4 sm:p-6">
                    <span className="text-gray-700 text-sm sm:text-base">{item.name}</span>
                  </div>
                  <div className="p-4 sm:p-6 flex items-center justify-center border-l border-gray-200">
                    {item.nyangi ? (
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6 flex items-center justify-center border-l border-gray-200">
                    {item.competitor ? (
                      <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-gray-600" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="reveal-item mt-12 text-center">
          <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            무료로 시작하기
          </button>
          <p className="text-sm text-gray-600 mt-4">신용카드 등록 없이 바로 사용 가능합니다</p>
        </div>
      </div>
    </section>
  );
}
