'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number; // Jeda animasi dalam milidetik (untuk efek berurutan/stagger)
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Jalankan animasi sekali saja agar tidak berkedip saat scroll naik-turun
        }
      },
      {
        threshold: 0.12, // Muncul saat 12% bagian elemen masuk ke layar
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}