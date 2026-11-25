import React from 'react';
import { skills } from '../data/projects';
import { Cpu, CheckCircle } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-900/30 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono font-medium mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMPÉTENCES TECHNIQUES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Stack Technologique & <span className="gradient-text">Outils</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Les compétences acquises et appliquées à travers le développement de ces 8 projets React et architectures web modernes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800 group-hover:text-cyan-400 transition-colors">
                {group.category}
              </h3>
              
              <ul className="space-y-3.5">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
