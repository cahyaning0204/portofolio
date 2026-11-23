'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  Layers,
  Smartphone,
  ScanSearch,
  Gamepad2,
  Code2,
  FolderGit2,
} from 'lucide-react';

interface ProjectItem {
  title: string;
  category: string;
  year: string;
  icon?: string;
  thumbnail?: string;
  detailImage?: string;
  summary: string;
  techStack?: string[];
  link?: string;
}

interface ProjectShowcaseProps {
  projects?: ProjectItem[];
}

export default function ProjectShowcase({ projects = [] }: ProjectShowcaseProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default item pertama terbuka

  const toggleCard = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  const renderCategoryIcon = (iconName?: string) => {
    switch (iconName) {
      case 'design':
        return <Layers className="w-4 h-4 text-[#E06D53]" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-[#E06D53]" />;
      case 'scan':
        return <ScanSearch className="w-4 h-4 text-[#E06D53]" />;
      case 'game':
        return <Gamepad2 className="w-4 h-4 text-[#E06D53]" />;
      case 'web':
        return <Code2 className="w-4 h-4 text-[#E06D53]" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-[#E06D53]" />;
    }
  };

  return (
    <div className="space-y-4">
      {(projects || []).map((project, idx) => {
        const indexNumber = String(idx + 1).padStart(2, '0');
        const isExpanded = expandedIndex === idx;
        const previewImg = project.detailImage || project.thumbnail;

        return (
          <div
            key={project.title || idx}
            className={`bg-[#F5EFE6] text-[#121212] border-2 border-[#121212] rounded-sm transition-all duration-300 ${
              isExpanded
                ? 'shadow-[6px_6px_0px_#F6B12D]'
                : 'hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#F6B12D]'
            }`}
          >
            {/* Header Bar (Klik untuk buka/tutup) */}
            <button
              type="button"
              onClick={() => toggleCard(idx)}
              aria-expanded={isExpanded}
              className="w-full text-left p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#354733] shrink-0">
                  {indexNumber}
                </span>

                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#E06D53] mb-1">
                    {renderCategoryIcon(project.icon)}
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pl-10 sm:pl-0">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#121212]/10 text-[#121212]">
                  {project.year}
                </span>

                <div
                  className={`w-9 h-9 rounded-full border border-[#121212] flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? 'bg-[#F6B12D] rotate-180'
                      : 'bg-white hover:bg-[#F6B12D]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-[#121212]" />
                </div>
              </div>
            </button>

            {/* Area Detail + Foto Inline (Tanpa Modal Pop-up) */}
            {isExpanded && (
              <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-[#121212]/15">
                <div className="sm:pl-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Kolom Teks & Link */}
                  <div className={`${previewImg ? 'md:col-span-7' : 'md:col-span-12'} space-y-4`}>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {project.summary}
                    </p>

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#354733] text-[#F5EFE6] text-[11px] font-medium px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.link && (
                      <div className="pt-1">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-[#F6B12D] text-[#121212] font-bold text-xs px-5 py-2.5 rounded-full border border-[#121212] hover:brightness-105 transition"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Kolom Foto Proyek (Tinggi otomatis mengikuti rasio asli gambar) */}
                  {previewImg && (
                    <div className="md:col-span-5">
                      <div className="border-2 border-[#121212] rounded-sm overflow-hidden bg-white shadow-[4px_4px_0px_#354733]">
                        <img
                          src={previewImg}
                          alt={project.title}
                          className="w-full h-auto block"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}