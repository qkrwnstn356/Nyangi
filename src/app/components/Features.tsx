import { Bot, Heart, Zap, MessageSquare, Calendar, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Bot,
      title: 'Slack 자동화',
      description: 'Slack에서 바로 사용하는 스마트 봇으로 반복 업무를 자동화하세요. 팀원들의 상태를 실시간으로 체크하고 필요한 액션을 자동으로 수행합니다.',
      items: [
        '자동 메시지 발송',
        '스케줄 기반 리마인더',
        '워크플로우 자동화'
      ],
      tone: 'teal',
      iconBg: 'bg-teal-600',
      hoverBg: 'bg-teal-50',
      dotBg: 'bg-teal-600'
    },
    {
      icon: Heart,
      title: '팀 헬스 체크',
      description: '팀원들의 심리적 안전감과 만족도를 주기적으로 측정하고 분석합니다. 익명 설문을 통해 솔직한 피드백을 수집하고 조직 건강도를 시각화합니다.',
      items: [
        '주간/월간 설문 자동화',
        '익명 피드백 수집',
        '실시간 분석 대시보드'
      ],
      tone: 'emerald',
      iconBg: 'bg-emerald-600',
      hoverBg: 'bg-emerald-50',
      dotBg: 'bg-emerald-600'
    },
    {
      icon: Zap,
      title: '컬처 자동화',
      description: '온보딩, 1:1 미팅, 팀 빌딩 이벤트 등 조직문화 활동을 자동으로 관리합니다. 신입사원부터 리더까지 모두가 참여하는 건강한 문화를 만드세요.',
      items: [
        '자동 온보딩 프로그램',
        '1:1 미팅 스케줄링',
        '팀 빌딩 이벤트 관리'
      ],
      tone: 'slate',
      iconBg: 'bg-slate-700',
      hoverBg: 'bg-slate-50',
      dotBg: 'bg-slate-700'
    }
  ];

  const additionalFeatures = [
    {
      icon: MessageSquare,
      title: '실시간 커뮤니케이션',
      description: 'Slack 채널에서 바로 소통하고 피드백을 주고받으세요.'
    },
    {
      icon: Calendar,
      title: '스마트 스케줄링',
      description: '팀원들의 일정을 자동으로 분석하여 최적의 미팅 시간을 제안합니다.'
    },
    {
      icon: Users,
      title: '팀 인사이트',
      description: '데이터 기반으로 팀의 협업 패턴과 문화를 분석합니다.'
    }
  ];

  return (
    <section id="features" className="reveal-section py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-item text-center mb-16">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            핵심 기능
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Slack에서 시작하는
            <br />
            스마트한 조직문화 관리
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            복잡한 설정 없이 Slack에 추가하는 것만으로 시작할 수 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="reveal-item group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 ${feature.hoverBg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${feature.dotBg}`}></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="reveal-item flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
