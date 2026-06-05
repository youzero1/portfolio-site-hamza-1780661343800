import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ff6584, transparent)', animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-full p-1 animate-float"
              style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)' }}
            >
              <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0f0f1a]" />
          </div>
        </div>

        {/* Text */}
        <div className="animate-fade-in-up">
          <p className="text-[#6c63ff] font-semibold tracking-widest uppercase text-sm mb-3">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-[#a0a0b8] mb-6">
            Full Stack Developer
          </h2>
          <p className="text-[#a0a0b8] max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            I craft beautiful, performant web applications with modern technologies.
            Passionate about clean code, great UX, and solving hard problems.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full gradient-bg text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#6c63ff]/30"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 border border-white/20"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-[#a0a0b8] hover:text-[#6c63ff] hover:border-[#6c63ff]/50 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-[#a0a0b8] hover:text-[#6c63ff] transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
