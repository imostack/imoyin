'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

const contactReasons = [
  'Speaking Engagement',
  'Podcast / Interview',
  'Startup Advisory',
  'Strategic Partnership',
  'Music Booking',
  'Founder Conversation',
  'General Inquiry',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _trap: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 border border-amber/40 flex items-center justify-center mb-8">
          <Send size={24} className="text-amber" />
        </div>
        <h2 className="font-display font-light text-fog text-4xl mb-4">
          Message sent.
        </h2>
        <p className="text-smoke text-sm max-w-xs">
          Thank you for reaching out. I'll get back to you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
      <input
        type="text"
        name="_trap"
        value={formData._trap}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-code text-[11px] text-smoke mb-2 tracking-wide uppercase">
            Your Name <span className="text-amber">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full bg-transparent border border-rim px-4 py-3 text-sm text-fog placeholder:text-faint focus:outline-none focus:border-smoke/50 transition-colors"
          />
        </div>
        <div>
          <label className="block font-code text-[11px] text-smoke mb-2 tracking-wide uppercase">
            Email Address <span className="text-amber">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full bg-transparent border border-rim px-4 py-3 text-sm text-fog placeholder:text-faint focus:outline-none focus:border-smoke/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-code text-[11px] text-smoke mb-2 tracking-wide uppercase">
          Reason for Inquiry <span className="text-amber">*</span>
        </label>
        <select
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          style={{ background: 'var(--bg)' }}
          className="w-full border border-rim px-4 py-3 text-sm text-fog focus:outline-none focus:border-smoke/50 transition-colors"
        >
          <option value="">Select a topic</option>
          {contactReasons.map(reason => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-code text-[11px] text-smoke mb-2 tracking-wide uppercase">
          Message <span className="text-amber">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={8}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me what you're working on..."
          className="w-full bg-transparent border border-rim px-4 py-3 text-sm text-fog placeholder:text-faint focus:outline-none focus:border-smoke/50 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="font-code text-[11px] text-red-400">{errorMsg}</p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="font-code text-[11px] text-faint">
          Your information is kept private and never shared.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-3 bg-amber text-canvas text-sm font-medium px-8 py-4 hover:opacity-90 transition-opacity group flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
          <Send
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </form>
  );
}
