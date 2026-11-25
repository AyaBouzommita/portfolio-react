import React from 'react';
import { ArrowRight, Brain, Cpu, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Ingénierie Génie Logiciel & Systèmes d'Information</span>
            <span className="text-slate-500">|</span>
            <span className="text-purple-300 font-semibold flex items-center gap-1">
              <Brain className="w-3.5 h-3.5 inline" /> Orientée IA
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Travaux Pratiques <span className="gradient-text">React & Fullstack</span>
          </h1>

          {/* Subtitle with Engineering Context */}
          <p className="text-lg sm:text-xl text-slate-300/90 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Future ingénieure en <strong className="text-white">Génie Logiciel & Systèmes d'Information</strong>, spécialisée en <strong className="text-purple-300">Intelligence Artificielle</strong>.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            Ce portfolio rassemble les <span className="text-cyan-400 font-semibold">8 Travaux Pratiques (TPs)</span> réalisés dans le cadre de mon cursus académique pour maîtriser l'architecture applicative moderne, les interfaces React et l'intégration d'APIs REST.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>Explorer les 8 TPs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Mon Profil & Parcours</span>
            </a>
          </div>

          {/* Highlights Row */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">8</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">TPs Académiques</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">GL & SI</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Génie Logiciel</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-bold text-purple-400 font-mono">IA</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Orientation Principale</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono">100%</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Vercel & GitHub</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
