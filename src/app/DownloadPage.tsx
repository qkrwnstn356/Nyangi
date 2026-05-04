import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TrialRequestModal } from './components/TrialRequestModal';
import { GoTopButton } from './components/GoTopButton';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.Slack';
const SLACK_MARKETPLACE_URL = 'https://slack.com/apps';

export default function DownloadPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  useEffect(() => {
    if (!isTrialModalOpen) {
      return undefined;
    }

    const handleEscapeKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTrialModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [isTrialModalOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      <main className="pt-24 pb-16 px-4">
        <section className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-gradient-to-b from-teal-50 to-white px-6 py-12 text-center shadow-sm sm:px-10">
          <p className="text-sm font-semibold text-teal-700">신청 완료</p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">앱 다운로드를 시작하세요</h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            무료 체험 신청이 정상적으로 접수되었습니다.
            <br />
            사용 목적에 맞게 아래 버튼을 선택해 다음 단계를 진행해 주세요.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-56 items-center justify-center rounded-xl bg-teal-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700"
            >
              구글 플레이에서 다운로드
            </a>
            <a
              href={SLACK_MARKETPLACE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-56 items-center justify-center rounded-xl border border-teal-600 bg-white px-8 py-3 text-base font-semibold text-teal-700 transition-colors hover:bg-teal-50"
            >
              Slack App 설치하러 가기
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <GoTopButton />
      <TrialRequestModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </div>
  );
}
