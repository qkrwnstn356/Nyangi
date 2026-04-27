import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}