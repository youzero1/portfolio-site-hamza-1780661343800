import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { navItems } from '@/lib/data';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(['home', 'about', 'skills', 'projects', 'experience', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('#home')}
          className="text-xl font-bold gradient-text"
        >
          &lt;Alex.dev /&gt;
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    'text-sm font-medium transition-colors duration-200 hover:text-[#6c63ff]',
                    activeId === id ? 'text-[#6c63ff]' : 'text-[#a0a0b8]'
                  )}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden md:block px-5 py-2 rounded-full gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#a0a0b8] hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={clsx(
                      'text-sm font-medium w-full text-left transition-colors duration-200',
                      activeId === id ? 'text-[#6c63ff]' : 'text-[#a0a0b8] hover:text-white'
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
