import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { TrialRequestModal } from './components/TrialRequestModal';
import { GoTopButton } from './components/GoTopButton';
import { Notice } from './components/Notice';
import { Contact } from './components/Contact';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const revealItems = gsap.utils.toArray<HTMLElement>('.reveal-item');
        gsap.set(revealItems, { autoAlpha: 0, y: 18 });

        revealItems.forEach((item) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              ease: 'power2.out',
              overwrite: 'auto',
              scrollTrigger: {
                trigger: item,
                start: 'top 88%',
                end: 'top 60%',
                scrub: 0.55,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        gsap.to('.hero-visual', {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-visual',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

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
        <Hero onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <Features />
        <Comparison onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        <Pricing />
      </main>
      <Footer />
      <GoTopButton />
      <TrialRequestModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </div>
  );
}