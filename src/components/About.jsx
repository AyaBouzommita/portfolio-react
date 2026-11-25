import React from 'react';
import { User, Brain, GraduationCap, Code, Compass, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column / Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background gradient blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              
              {/* Main Profile Box */}
              <div className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-cyan-500/20">
                    AB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Aya Bouzommita</h3>
                    <p className="text-sm text-purple-300 font-mono flex items-center gap-1.5 mt-0.5">
                      <Brain className="w-3.5 h-3.5" /> Ingénieur GL & SI · IA
                    </p>
                    <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                      ● Cursus Ingénieur
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Domaine</span>
                    <span className="font-semibold text-white">Génie Logiciel & SI</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Orientation</span>
                    <span className="font-semibold text-purple-300">Intelligence Artificielle</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Cadre des projets</span>
                    <span className="font-semibold text-cyan-400 font-mono">Travaux Pratiques (TPs)</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Compétences visées</span>
                    <span className="font-semibold text-indigo-400">Polyvalence Web & Backend</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://github.com/AyaBouzommita"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
                  >
                    Profil GitHub @AyaBouzommita
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-xs font-mono font-medium">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>PROFIL INGÉNIEUR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ingénierie Logicielle, <span className="gradient-text">Intelligence Artificielle</span> & Développement Web.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Actuellement étudiante en <strong className="text-white font-semibold">Génie Logiciel et Systèmes d'Information</strong>, je suis principalement orientée vers l'<strong className="text-purple-300 font-semibold">Intelligence Artificielle</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Dans le cadre de ma formation d'ingénieur, j'accorde une importance capitale à la <strong className="text-white">polyvalence technique</strong> et à la capacité de concevoir des systèmes complets de bout en bout (End-to-End). C'est au sein de mes <strong className="text-cyan-400">Travaux Pratiques (TPs)</strong> que j'ai développé ces 8 projets, démontrant une solide maîtrise des concepts frontend (React), backend (Node/Express) et du déploiement cloud.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <Brain className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Orientation IA & Systèmes</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Modélisation, data, logique algorithmique et systèmes d'information.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Rigueur & Clean Code</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Applications modulaires, structurées et validées en conditions réelles.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
