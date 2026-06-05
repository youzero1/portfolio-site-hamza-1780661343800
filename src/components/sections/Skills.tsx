import { useState } from 'react';
import clsx from 'clsx';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';

type Category = 'all' | 'frontend' | 'backend' | 'tools';

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Tools', value: 'tools' },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-[#6c63ff] font-semibold tracking-widest uppercase text-sm mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-bg" />
    </div>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-white text-sm">{skill.name}</span>
        <span className="text-[#6c63ff] font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%`, background: 'linear-gradient(90deg, #6c63ff, #ff6584)' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 px-6" style={{ background: '#1a1a2e' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="My Skills" subtitle="What I work with" />

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mt-10 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                active === cat.value
                  ? 'gradient-bg text-white shadow-lg shadow-[#6c63ff]/30'
                  : 'glass text-[#a0a0b8] hover:text-white'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
