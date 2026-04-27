import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg transition-all duration-200 hover:bg-teal-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="맨 위로 이동"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
