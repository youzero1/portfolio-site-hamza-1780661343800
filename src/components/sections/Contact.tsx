import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-[#6c63ff] font-semibold tracking-widest uppercase text-sm mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-bg" />
    </div>
  );
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'alex@example.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
];

export default function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Contact me" />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's work <span className="gradient-text">together</span>
            </h3>
            <p className="text-[#a0a0b8] leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hi — my inbox is always open!
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 glass rounded-xl p-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(108, 99, 255, 0.2)' }}
                  >
                    <Icon size={18} className="text-[#6c63ff]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a0a0b8] uppercase tracking-wide">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass rounded-2xl p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <CheckCircle size={56} className="text-green-400" />
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-[#a0a0b8]">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#a0a0b8] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#a0a0b8]/50 focus:outline-none focus:border-[#6c63ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a0a0b8] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#a0a0b8]/50 focus:outline-none focus:border-[#6c63ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#a0a0b8] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#a0a0b8]/50 focus:outline-none focus:border-[#6c63ff] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-all disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
