import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

type HeroProps = {
  onOpenTrialModal: () => void;
};

export function Hero({ onOpenTrialModal }: HeroProps) {
  return (
    <section className="reveal-section pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Slack 기반 조직문화 자동화 플랫폼
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              팀의 문화와 협업,
              <br />
              <span className="text-teal-700">
                자동으로 관리하세요
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              매일 반복되는 팀 관리 업무에 지치셨나요?<br />
              Nyangi로 Slack에서 바로 팀 헬스체크, 1:1 미팅, 온보딩을 자동화하고<br />
              건강한 조직문화를 만들어보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                onClick={onOpenTrialModal}
              >
                1분 만에 체험하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                데모 영상 보기
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">활성 팀</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-900">98%</div>
                <div className="text-sm text-gray-600">만족도</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">자동화</div>
              </div>
            </div>
          </div>

          <div className="hero-visual relative">
            <div className="aspect-[4/3] rounded-2xl bg-teal-100 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
