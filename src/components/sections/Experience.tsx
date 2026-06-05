import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/lib/data';

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-[#6c63ff] font-semibold tracking-widest uppercase text-sm mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-bg" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: '#1a1a2e' }}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Experience" subtitle="My career journey" />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline dot */}
                <div
                  className="absolute left-5 top-6 w-6 h-6 rounded-full gradient-bg flex items-center justify-center"
                >
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>

                <div
                  className={clsx(
                    'glass rounded-2xl p-6',
                    idx === 0 && 'border border-[#6c63ff]/40'
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-[#6c63ff]" />
                        <span className="text-[#6c63ff] font-semibold text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full">
                      <Calendar size={13} className="text-[#a0a0b8]" />
                      <span className="text-xs text-[#a0a0b8]">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#a0a0b8]">
                        <span className="text-[#6c63ff] mt-0.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function clsx(...args: any[]): string {
  return args.filter(Boolean).join(' ');
}
