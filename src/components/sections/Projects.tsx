import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import clsx from 'clsx';
import { projects } from '@/lib/data';

type Filter = 'all' | 'featured';

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-[#6c63ff] font-semibold tracking-widest uppercase text-sm mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-bg" />
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="My Projects" subtitle="What I've built" />

        <div className="flex justify-center gap-3 mt-10 mb-12">
          {(['all', 'featured'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200',
                filter === f
                  ? 'gradient-bg text-white shadow-lg shadow-[#6c63ff]/30'
                  : 'glass text-[#a0a0b8] hover:text-white'
              )}
            >
              {f === 'featured' ? '⭐ Featured' : 'All Projects'}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article key={project.id} className="glass rounded-2xl overflow-hidden card-hover flex flex-col">
              {/* Project color bar */}
              <div className="h-2 gradient-bg" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white text-lg leading-snug">{project.title}</h3>
                  {project.featured && (
                    <Star size={16} className="text-yellow-400 fill-yellow-400 flex-shrink-0 mt-1" />
                  )}
                </div>

                <p className="text-[#a0a0b8] text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-[#6c63ff]/20 text-[#6c63ff]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a0a0b8] hover:text-white transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a0a0b8] hover:text-[#6c63ff] transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
