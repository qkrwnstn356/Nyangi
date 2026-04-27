import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: '소규모 팀을 위한 시작',
      monthlyPrice: 29000,
      annualPrice: 290000,
      savings: '2개월 무료',
      features: [
        '팀원 최대 20명',
        '기본 Slack 자동화',
        '월 1회 팀 헬스 체크',
        '기본 분석 리포트',
        '이메일 지원',
        '7일 데이터 보관'
      ],
      cta: '무료 체험 시작',
      popular: false
    },
    {
      name: 'Professional',
      description: '성장하는 팀을 위한 최적',
      monthlyPrice: 79000,
      annualPrice: 790000,
      savings: '2개월 무료',
      features: [
        '팀원 최대 100명',
        '고급 Slack 자동화',
        '주간 팀 헬스 체크',
        '실시간 분석 대시보드',
        'AI 기반 인사이트',
        '1:1 미팅 자동 스케줄링',
        '온보딩 자동화',
        '우선 지원',
        '90일 데이터 보관'
      ],
      cta: '14일 무료 체험',
      popular: true
    },
    {
      name: 'Enterprise',
      description: '대규모 조직을 위한 맞춤',
      monthlyPrice: null,
      annualPrice: null,
      customPrice: true,
      features: [
        '무제한 팀원',
        '커스텀 워크플로우',
        '무제한 팀 헬스 체크',
        '고급 분석 & 리포팅',
        'API 연동',
        '전담 성공 매니저',
        '온보딩 교육 세션',
        'SLA 보장',
        '24/7 전화 지원',
        '무제한 데이터 보관',
        'SSO 연동'
      ],
      cta: '영업팀 문의',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="reveal-section py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-item text-center mb-12">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            투명한 요금제
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            팀 규모에 맞는
            <br />
            합리적인 가격
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            모든 요금제는 14일 무료 체험이 가능하며, 언제든 변경 가능합니다
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              월간 결제
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              연간 결제
              <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full font-semibold">
                2개월 무료
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal-item relative bg-white rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-teal-500 shadow-2xl scale-105'
                  : 'border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-teal-600 text-white text-sm font-semibold rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    가장 인기있는 플랜
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.customPrice ? (
                    <div>
                      <div className="text-4xl font-bold text-gray-900">맞춤 견적</div>
                      <p className="text-sm text-gray-600 mt-2">조직 규모에 따라 산정</p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gray-900">
                          {(billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.annualPrice! / 12))?.toLocaleString()}
                        </span>
                        <span className="text-gray-600">원/월</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-teal-600 mt-2 font-medium">
                          연 {plan.annualPrice?.toLocaleString()}원 · {plan.savings}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  <div className="font-semibold text-gray-900 mb-3">포함된 기능:</div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-teal-600' : 'bg-gray-300'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-16 text-center">
          <p className="text-gray-600 mb-4">
            팀 규모가 100명 이상이거나 특별한 요구사항이 있으신가요?
          </p>
          <a href="#contact" className="text-teal-700 hover:text-teal-800 font-semibold underline">
            맞춤 견적 받기 →
          </a>
        </div>
      </div>
    </section>
  );
}
