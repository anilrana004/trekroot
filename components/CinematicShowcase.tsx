'use client';

import React, { useEffect, useState, useRef } from 'react';

const SLIDE_INTERVAL_MS = 5000;

const videos = [
  {
    src: '/videos/home.png.mp4',
    title: 'Begin Your Yatra',
    subtitle: 'Rooted in devotion. Driven by the mountains.',
    buttonLabel: 'Explore Journeys',
  },
  {
    src: '/videos/kedarkantha.png.mp4',
    title: 'Kedarkantha Trek',
    subtitle: 'Snow trails. Himalayan silence.',
    buttonLabel: 'Explore Kedarkantha',
  },
  {
    src: '/videos/harkidun.png.mp4',
    title: 'Har Ki Dun Valley',
    subtitle: 'Where legends meet landscapes.',
    buttonLabel: 'Explore Har Ki Dun',
  },
  {
    src: '/videos/himachal.png.mp4',
    title: 'Himachal Adventures',
    subtitle: 'High passes. Pure adrenaline.',
    buttonLabel: 'Explore Himachal',
  },
  {
    src: '/videos/chopata.png.mp4',
    title: 'Chopta – Mini Switzerland',
    subtitle: 'Peace above the clouds.',
    buttonLabel: 'Explore Chopta',
  },
] as const;

export default function CinematicShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Auto-slide
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const touch = event.touches[0];
    touchEndXRef.current = touch.clientX;
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (touchStartXRef.current == null || touchEndXRef.current == null) return;

    const distance = touchStartXRef.current - touchEndXRef.current;
    const swipeThreshold = 50; // px

    if (Math.abs(distance) < swipeThreshold) return;

    if (distance > 0) {
      goToNext();
    } else {
      goToPrev();
    }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91]">
          Experience the Himalayas in Motion
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-[60vh] md:h-[80vh] transition-all duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <div
              key={video.src}
              className="relative min-w-full h-full flex-shrink-0 px-4 sm:px-6 lg:px-8"
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
                <video
                  src={video.src}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                  <div className="px-6 md:px-16 max-w-xl space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-4xl font-bold text-white">
                      {video.title}
                    </h3>
                    <p className="text-sm md:text-lg text-slate-100/90">
                      {video.subtitle}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-full bg-white text-blue-900 px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:bg-blue-900 hover:text-white transition-colors duration-300"
                    >
                      {video.buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((video, index) => (
            <button
              key={video.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

