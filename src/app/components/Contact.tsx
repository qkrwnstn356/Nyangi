import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">문의하기</h1>
          <p className="text-lg text-gray-600">
            궁금한 점이 있으신가요? 언제든지 문의해주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact info cards */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[oklch(51.1%_.096_186.391)] rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">이메일</h3>
            <p className="text-gray-600 text-sm mb-2">언제든지 이메일을 보내주세요</p>
            <a href="mailto:support@nyangi.com" className="text-[oklch(51.1%_.096_186.391)] hover:underline">
              support@nyangi.com
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[oklch(51.1%_.096_186.391)] rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">전화</h3>
            <p className="text-gray-600 text-sm mb-2">평일 09:00 - 18:00</p>
            <a href="tel:02-1234-5678" className="text-[oklch(51.1%_.096_186.391)] hover:underline">
              02-1234-5678
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[oklch(51.1%_.096_186.391)] rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">라이브 챗</h3>
            <p className="text-gray-600 text-sm mb-2">실시간 상담 가능</p>
            <button className="text-[oklch(51.1%_.096_186.391)] hover:underline">
              채팅 시작하기
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">문의 양식</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[oklch(51.1%_.096_186.391)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">문의가 접수되었습니다</h3>
                <p className="text-gray-600">
                  영업일 기준 1-2일 내에 답변드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[oklch(51.1%_.096_186.391)] focus:border-transparent outline-none"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[oklch(51.1%_.096_186.391)] focus:border-transparent outline-none"
                      placeholder="회사명"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[oklch(51.1%_.096_186.391)] focus:border-transparent outline-none"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[oklch(51.1%_.096_186.391)] focus:border-transparent outline-none"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[oklch(51.1%_.096_186.391)] focus:border-transparent outline-none"
                    placeholder="문의 제목을 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[oklch(51.1%_.096_186.391)] focus:border-transparent outline-none resize-none"
                    placeholder="궁금한 내용을 자세히 입력해주세요"
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full py-4 bg-[oklch(51.1%_.096_186.391)] text-white rounded-lg font-semibold hover:bg-[oklch(45%_.096_186.391)] transition-all"
                >
                  문의하기
                </button>
              </form>
            )}
          </div>

          {/* Additional info */}
          <div className="space-y-8">
            <div className="bg-[oklch(51.1%_.096_186.391)]/5 rounded-2xl p-8 border border-[oklch(51.1%_.096_186.391)]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">자주 묻는 질문</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Q. 무료 체험 기간은 얼마나 되나요?</h4>
                  <p className="text-gray-600 text-sm">A. 14일간 무료로 모든 기능을 체험하실 수 있습니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Q. 별도 설치가 필요한가요?</h4>
                  <p className="text-gray-600 text-sm">A. Slack 워크스페이스에 앱만 추가하면 바로 사용 가능합니다.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Q. 요금제 변경이 가능한가요?</h4>
                  <p className="text-gray-600 text-sm">A. 언제든지 요금제 변경이 가능하며, 일할 계산됩니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-[oklch(51.1%_.096_186.391)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">운영 시간</h3>
                  <p className="text-gray-600 text-sm">
                    평일: 09:00 - 18:00<br />
                    점심시간: 12:00 - 13:00<br />
                    주말 및 공휴일 휴무
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[oklch(51.1%_.096_186.391)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">주소</h3>
                  <p className="text-gray-600 text-sm">
                    서울특별시 강남구 봉은사로 434<br />
                    석수빌딩 1층
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
