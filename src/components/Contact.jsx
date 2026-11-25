import React, { useState } from 'react';
import { Mail, Github, Send, MessageSquare, Check, Sparkles } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>PRENDRE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Envie de collaborer ou d'échanger ?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            N'hésitez pas à m'envoyer un message pour toute opportunité, retour sur mes projets React ou proposition technique.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Quick Info Box */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Canaux Directs</h3>
              <p className="text-sm text-slate-400">
                Vous pouvez me joindre directement via GitHub ou par formulaire.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://github.com/AyaBouzommita"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors border border-slate-700/60"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-cyan-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">GitHub</div>
                  <div className="text-sm font-semibold">@AyaBouzommita</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 text-slate-200 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-indigo-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Disponibilité</div>
                  <div className="text-sm font-semibold text-emerald-400">Ouverte aux projets</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono pt-4 border-t border-slate-800">
              Réponse rapide sous 24 à 48 heures.
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message envoyé avec succès !</h4>
                <p className="text-sm text-slate-400">Merci de votre message, je reviendrai vers vous au plus vite.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ex: Sarah Martin"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Votre Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Bonjour Aya, j'ai vu vos projets React..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
