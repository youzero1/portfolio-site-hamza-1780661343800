import { Download, Code2, Coffee, Globe } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projects Completed', value: '50+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1,200+' },
  { icon: Globe, label: 'Happy Clients', value: '30+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who I am & what I do" />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Left — image placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-72 h-72 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)' }}
              >
                <div className="w-full h-full rounded-2xl bg-[#1a1a2e] m-1 flex items-center justify-center" style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)', margin: '2px' }}>
                  <span className="text-8xl">🧑‍💻</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-white">Available for hire</span>
              </div>
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2">
                <span className="text-sm font-medium text-[#6c63ff]">5+ years exp.</span>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Turning ideas into{' '}
              <span className="gradient-text">reality</span>
            </h3>
            <p className="text-[#a0a0b8] leading-relaxed mb-6">
              I'm a passionate full stack developer based in San Francisco, CA. I specialize in
              building scalable web applications and have a keen eye for clean, intuitive design.
            </p>
            <p className="text-[#a0a0b8] leading-relaxed mb-8">
              When I'm not coding, you'll find me contributing to open source, writing technical
              blog posts, or exploring the latest advancements in AI and machine learning.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-xl p-4 text-center">
                  <Icon size={22} className="text-[#6c63ff] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-[#a0a0b8] mt-1">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-[#6c63ff] font-semibold tracking-widest uppercase text-sm mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-bg" />
    </div>
  );
}
