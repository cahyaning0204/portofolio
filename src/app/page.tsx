import { getPortofolioData } from '@/lib/getPortofolio';
import Navbar from '@/components/Navbar';
import ProjectShowcase from '@/components/ProjectShowcase';
import Reveal from '@/components/Reveal';
import ReactMarkdown from 'react-markdown';
import {
  Sparkles,
  Search,
  FileText,
  MapPin,
  Mail,
  Trophy,
} from 'lucide-react';

const toolIcons: Record<string, string> = {
  Ps: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg',
  Ai: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg',
  Fg: 'https://cdn.simpleicons.org/figma/121212',
  Xd: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg',
  Ae: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg',
  Uh: 'https://cdn.simpleicons.org/unity/121212',
};

export default function Home() {
  const { data, content } = getPortofolioData();
  const {
    profile = {},
    navigation = [],
    socials = {},
    contact = {},
    education = [],
    projectExperience = [],
    softSkills = [],
    technicalSkills = {
      softwareTools: [],
      webDevelopment: [],
      coreCompetencies: [],
    },
    languages = [],
    activities = [],
    achievements = [],
    projects = [],
  } = data || {};

  return (
    <main className="min-h-screen overflow-x-clip selection:bg-[#F6B12D] selection:text-[#121212]">
      {/* =========================================================
0. STICKY FULL-WIDTH NAVBAR (Responsif HP & Desktop)
         ========================================================= */}
      <Navbar
        brandName={profile.fullName || 'Cahyaning Sessa Lestari'}
        navigation={navigation}
      />

      {/* =========================================================
1. HERO SECTION (Background Hijau Gelap #354733)
         ========================================================= */}
      <section className="bg-[#354733] text-[#F5EFE6] px-5 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-24 sm:pb-28 relative">
        <div className="max-w-5xl mx-auto relative text-center">
          {/* Badge Role / Tagline */}
          {profile.tagline && (
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F6B12D]/40 bg-[#F6B12D]/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-[#F6B12D] mb-4 sm:mb-5 max-w-full">
                <Sparkles className="w-3.5 h-3.5 fill-[#F6B12D] shrink-0" />
                <span className="truncate">{profile.tagline}</span>
              </div>
            </Reveal>
          )}

          <Reveal delay={120}>
            <h1 className="font-serif text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold tracking-wide sm:tracking-wider uppercase wrap-break-word">
              PORTFOLIO
            </h1>
          </Reveal>

          {/* Layout 2 Kolom Seimbang */}
          <Reveal delay={240}>
            <div className="max-w-4xl mx-auto mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#F5EFE6]/15 grid md:grid-cols-12 items-center gap-6 sm:gap-8">
              {/* Quote Kiri */}
              <div className="md:col-span-7 text-left">
                <p className="text-xs sm:text-sm leading-relaxed text-[#F5EFE6]/90 border-l-2 border-[#F6B12D] pl-3.5 sm:pl-4">
                  {profile.heroQuote}
                </p>
              </div>

              {/* Teks Outline + Sosial Media Kanan */}
              <div className="md:col-span-5 text-left md:text-right flex flex-col md:items-end">
                <div className="font-serif text-3xl sm:text-5xl font-bold leading-none select-none mb-3 sm:mb-4">
                  <p className="text-stroke-cream">FOLIO</p>
                  <p className="text-stroke-cream">FOLIO</p>
                </div>
                <div className="text-xs sm:text-sm space-y-1 font-medium text-[#F5EFE6] break-all sm:break-normal">
                  {socials.instagram && <p>IG: {socials.instagram}</p>}
                  {socials.linkedin && <p>LI: {socials.linkedin}</p>}
                  {socials.github && <p>GH: {socials.github}</p>}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tombol Bulat "Scroll down" di Perbatasan Section */}
        <a
          href="#about"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F6B12D] text-[#121212] font-serif font-bold text-xs sm:text-sm flex items-center justify-center text-center leading-tight shadow-lg absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 hover:scale-105 transition"
        >
          Scroll
          <br />
          down
        </a>
      </section>

      {/* =========================================================
2. ABOUT ME & RESUME SECTION (Background Cream #F5EFE6)
         ========================================================= */}
      <section id="about" className="max-w-5xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* ---------------- KOLOM KIRI ---------------- */}
          <div className="md:col-span-6 space-y-10 sm:space-y-12">
            {/* Paragraf Perkenalan + Pill Action */}
            <Reveal delay={0}>
              <div className="space-y-6">
                <div className="prose prose-neutral max-w-none [&>h2]:font-serif [&>h2]:text-4xl [&>h2]:sm:text-6xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:mb-5 [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-neutral-700">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {socials.linkedin && (
                    <a
                      href={`https://${socials.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#E06D53] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition shadow-sm"
                    >
                      <Search className="w-4 h-4 shrink-0" />
                      <span className="truncate">{socials.linkedin}</span>
                    </a>
                  )}

                  {profile.cvUrl && (
                    <a
                      href={profile.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#354733] text-[#F5EFE6] text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#121212] transition shadow-sm"
                    >
                      <FileText className="w-4 h-4 text-[#F6B12D] shrink-0" />
                      <span>View CV</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>

            {/* EDUCATION */}
            <Reveal delay={100}>
              <div id="resume">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#354733] mb-5 sm:mb-6">
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu: any, idx: number) => (
                    <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                      <Sparkles className="w-4 h-4 text-[#E06D53] fill-[#E06D53] mt-1 shrink-0" />
                      <span className="font-serif font-bold text-xs sm:text-sm whitespace-nowrap">
                        {edu.period}
                      </span>
                      <div>
                        <p className="font-bold text-sm">{edu.institution}</p>
                        <p className="text-xs text-neutral-600">{edu.major}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* PROJECTS BOX (Kuning Mustard #F6B12D) */}
            <Reveal delay={150}>
              <div className="bg-[#F6B12D] p-6 sm:p-8 rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
                  Projects
                </h3>
                <div className="space-y-5 mb-8">
                  {projectExperience.map((proj: any, idx: number) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Sparkles className="w-4 h-4 text-white fill-white mt-1 shrink-0" />
                      <span className="font-serif font-bold text-xs sm:text-sm shrink-0">
                        {proj.year}
                      </span>
                      <div>
                        <p className="font-bold text-sm">
                          {proj.title} — <span className="font-semibold">{proj.role}</span>
                        </p>
                        <p className="text-xs text-[#121212]/80 mt-0.5">{proj.description}</p>
                        <p className="text-xs font-semibold mt-0.5">{proj.type}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Soft Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-[#121212] text-white text-xs px-3.5 sm:px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ACTIVITIES */}
            <Reveal delay={100}>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
                  Activities
                </h3>
                <div className="space-y-4">
                  {activities.map((act: any, idx: number) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Sparkles className="w-4 h-4 text-[#E06D53] fill-[#E06D53] mt-1 shrink-0" />
                      <span className="font-serif font-bold text-xs sm:text-sm shrink-0">
                        {act.year}
                      </span>
                      <div>
                        <p className="font-bold text-sm">{act.title}</p>
                        <p className="text-xs text-neutral-600">{act.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------------- KOLOM KANAN ---------------- */}
          <div className="md:col-span-6 space-y-8 sm:space-y-10">
            {/* Editorial Identity Card */}
            <Reveal delay={150}>
              <div className="bg-[#354733] text-[#F5EFE6] p-6 sm:p-8 rounded-sm border-2 border-[#121212] shadow-md relative overflow-hidden">
                <div className="font-serif text-5xl sm:text-6xl font-bold leading-none select-none opacity-15 absolute -right-3 -bottom-3 pointer-events-none">
                  <p className="text-stroke-cream">PROFILE</p>
                </div>

                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-[#F6B12D] text-[#121212] text-xs font-bold px-3.5 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 fill-[#121212]" />
                    <span>{profile.nationality || 'Indonesia'}</span>
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F5EFE6]/70">
                    {profile.nickname || 'Sessa'}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6] leading-snug mb-2">
                  {profile.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#F6B12D] font-medium mb-6">
                  {profile.tagline}
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 pt-5 border-t border-[#F5EFE6]/15 text-xs">
                  <div>
                    <p className="text-[#F5EFE6]/60 uppercase tracking-wider text-[10px] mb-1">
                      Current Focus
                    </p>
                    <p className="font-semibold">Backend Developer, Frontend Developer, UI/UX Designer</p>
                  </div>
                  <div>
                    <p className="text-[#F5EFE6]/60 uppercase tracking-wider text-[10px] mb-1">
                      Status
                    </p>
                    <p className="font-semibold text-[#F6B12D]">Open for Opportunities</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CONTACT BOX (Hitam #121212) */}
            <Reveal delay={200}>
              <div id="contact" className="bg-[#121212] text-white p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#F6B12D] shrink-0" />
                    <span>{contact.location}</span>
                  </li>
                  <li className="flex items-center gap-3 break-all">
                    <Mail className="w-4 h-4 text-[#F6B12D] shrink-0" />
                    <span>{contact.email}</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* TECHNICAL SKILLS BOX */}
            <Reveal delay={150}>
              <div className="bg-[#354733] text-white p-6 sm:p-8 relative overflow-hidden">
                <div className="font-serif text-4xl sm:text-5xl font-bold leading-none select-none opacity-25 mb-2">
                  <p className="text-stroke-cream">RESUME</p>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F6B12D] mb-6">
                  Technical skills
                </h3>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="font-serif text-sm mb-3">Software tools</p>
                    <div className="flex flex-wrap gap-2.5">
                      {technicalSkills.softwareTools?.map((tool: any) => {
                        const iconUrl = toolIcons[tool.code];
                        return (
                          <span
                            key={tool.code}
                            title={tool.name}
                            className="bg-white text-[#121212] font-bold text-xs w-9 h-9 flex items-center justify-center rounded shadow-xs hover:scale-105 transition"
                          >
                            {iconUrl ? (
                              <img
                                src={iconUrl}
                                alt={tool.name}
                                className="w-5 h-5 object-contain grayscale contrast-200 brightness-50"
                              />
                            ) : (
                              tool.code
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="font-serif text-sm mb-2">Programming &amp; Tech Stack</p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {technicalSkills.webDevelopment?.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technicalSkills.coreCompetencies?.map((skill: string) => (
                    <span
                      key={skill}
                      className="bg-[#121212] text-white text-xs px-3.5 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* LANGUAGE */}
            <Reveal delay={100}>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-5">Language</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {languages.map((lang: any) => (
                    <div key={lang.name}>
                      <p className="font-serif font-bold text-base">{lang.name}</p>
                      <p className="text-xs text-neutral-600">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ACHIEVEMENTS */}
            <Reveal delay={150}>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#354733] mb-5">
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((item: any, idx: number) => (
                    <Reveal key={idx} delay={idx * 100}>
                      <div className="flex items-start gap-3.5 bg-white/60 border border-[#121212]/15 p-4 rounded-sm">
                        <div className="w-10 h-10 rounded-full bg-[#F6B12D] flex items-center justify-center shrink-0 mt-0.5">
                          <Trophy className="w-5 h-5 text-[#121212]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-serif font-bold text-xs text-[#E06D53]">
                              {item.year}
                            </span>
                            <span className="text-neutral-400">•</span>
                            <p className="font-bold text-sm text-[#121212]">
                              {item.title}
                            </p>
                          </div>
                          <p className="text-xs font-medium text-neutral-700">
                            {item.award}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
3. SELECTED WORK SECTION (Menu "Work" - Editorial Index Accordion)
         ========================================================= */}
      <section id="work" className="bg-[#354733] text-[#F5EFE6] py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#F6B12D] mb-2">
                  Portfolio Showcase
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold">
                  Selected Work
                </h2>
              </div>
              <p className="text-xs text-[#F5EFE6]/80 max-w-xs">
                Selected projects across interface design, cross-platform development, and research. Select any item to inspect details.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ProjectShowcase projects={projects} />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#121212] text-[#F5EFE6]/70 text-center py-6 px-4 text-xs">
        © {new Date().getFullYear()} {profile.fullName}.
      </footer>
    </main>
  );
}