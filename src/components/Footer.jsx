import React from 'react';
import { Code2, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-base">Aya Bouzommita</span>
              <p className="text-xs text-slate-500">Portfolio React & TP Showcase</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Accueil</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projets TPs</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Compétences</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">À propos</a>
            <a href="https://github.com/AyaBouzommita" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Aya Bouzommita. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu avec <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> sous React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
