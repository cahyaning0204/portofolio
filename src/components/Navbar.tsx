'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

interface NavbarProps {
  brandName: string;
  navigation: NavItem[];
}

export default function Navbar({ brandName, navigation }: NavbarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = navigation
      .map((item) => item.href.replace('#', ''))
      .filter(Boolean);

    const handleScroll = () => {
      if (window.scrollY < 250) {
        setActiveId('');
        return;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40;

      if (isAtBottom) {
        const workSection = document.getElementById('work');
        if (workSection) {
          setActiveId('work');
          return;
        }
      }

      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id, top };
        })
        .filter((item): item is { id: string; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);

      const scrollPosition = window.scrollY + 220;

      let currentActive = '';
      for (const section of sections) {
        if (scrollPosition >= section.top) {
          currentActive = section.id;
        }
      }

      setActiveId(currentActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [navigation]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#354733]/95 text-[#F5EFE6] backdrop-blur-md border-b border-[#F5EFE6]/15 transition-all">
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 md:px-16 h-16 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 font-serif font-bold text-base sm:text-lg tracking-tight truncate pr-2"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6B12D] fill-[#F6B12D] shrink-0" />
          <span className="truncate">{brandName}</span>
        </a>

        {/* Menu Desktop (Hidden di HP) */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navigation.map((nav) => {
            const targetId = nav.href.replace('#', '');
            const isActive = activeId === targetId;

            if (nav.isCta) {
              return (
                <a
                  key={nav.label}
                  href={nav.href}
                  className={`font-semibold px-4 py-1.5 rounded-full transition ${
                    isActive
                      ? 'bg-[#E06D53] text-white ring-2 ring-[#F6B12D]'
                      : 'bg-[#F6B12D] text-[#121212] hover:brightness-105'
                  }`}
                >
                  {nav.label}
                </a>
              );
            }

            return (
              <a
                key={nav.label}
                href={nav.href}
                className={`relative py-1 transition ${
                  isActive
                    ? 'text-[#F6B12D] font-bold'
                    : 'text-[#F5EFE6]/80 hover:text-[#F6B12D]'
                }`}
              >
                {nav.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#F6B12D] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Tombol Hamburger Khusus Layar HP */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-[#F5EFE6] hover:bg-[#F5EFE6]/10 transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Dropdown Menu Layar HP */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2b3a29] border-t border-[#F5EFE6]/15 px-6 py-5 space-y-3 shadow-xl">
          {navigation.map((nav) => {
            const targetId = nav.href.replace('#', '');
            const isActive = activeId === targetId;

            if (nav.isCta) {
              return (
                <a
                  key={nav.label}
                  href={nav.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#F6B12D] text-[#121212] font-semibold py-2.5 rounded-full mt-2"
                >
                  {nav.label}
                </a>
              );
            }

            return (
              <a
                key={nav.label}
                href={nav.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm border-b border-[#F5EFE6]/10 ${
                  isActive ? 'text-[#F6B12D] font-bold' : 'text-[#F5EFE6]/90'
                }`}
              >
                {nav.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}