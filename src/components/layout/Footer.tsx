import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: '#0a0a14' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#a0a0b8] text-sm">
            Built with{' '}
            <Heart size={14} className="inline text-[#ff6584] fill-[#ff6584]" />{' '}
            by <span className="text-white font-semibold">Alex Johnson</span>
          </div>

          <div className="flex gap-5">
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
                className="text-[#a0a0b8] hover:text-[#6c63ff] transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-[#a0a0b8] text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
