import React, { FormEvent, useEffect, useState } from 'react';
import { X } from 'lucide-react';

type TrialRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PHONE_REGEX = /^01[0-9]-?\d{3,4}-?\d{4}$/;

export function TrialRequestModal({ isOpen, onClose }: TrialRequestModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setPhone('');
      setEmail('');
      setPhoneError('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!PHONE_REGEX.test(phone.trim())) {
      setPhoneError('핸드폰 번호 형식이 올바르지 않습니다. (예: 010-1234-5678)');
      return;
    }

    setPhoneError('');
    window.alert('무료 체험 신청이 완료되었습니다.');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-gray-900/50 px-4 py-8 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-request-title"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-teal-700">무료 체험 신청</p>
            <h2 id="trial-request-title" className="mt-1 text-2xl font-bold text-gray-900">
              1분 만에 시작하세요
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            aria-label="모달 닫기"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="trial-name" className="mb-1 block text-sm font-medium text-gray-700">
              사용자 이름
            </label>
            <input
              id="trial-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              placeholder="홍길동"
              required
            />
          </div>

          <div>
            <label htmlFor="trial-phone" className="mb-1 block text-sm font-medium text-gray-700">
              핸드폰 번호
            </label>
            <input
              id="trial-phone"
              type="tel"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                if (phoneError) {
                  setPhoneError('');
                }
              }}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              placeholder="010-1234-5678"
              required
            />
            {phoneError && <p className="mt-1 text-sm text-red-600">{phoneError}</p>}
          </div>

          <div>
            <label htmlFor="trial-email" className="mb-1 block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              id="trial-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              placeholder="name@company.com"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-teal-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
          >
            제출하기
          </button>
        </form>
      </div>
    </div>
  );
}
