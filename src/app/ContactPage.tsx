import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TrialRequestModal } from './components/TrialRequestModal';
import { GoTopButton } from './components/GoTopButton';
import { Contact } from './components/Contact';

export default function ContactPage() {
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
      <main>
        <Contact />
      </main>
      <Footer />
      <GoTopButton />
      <TrialRequestModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </div>
  );
}
