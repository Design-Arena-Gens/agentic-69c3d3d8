"use client";

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function LeadForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [is18Plus, setIs18Plus] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const utm = useMemo(() => ({
    utmSource: searchParams.get('utm_source') ?? '',
    utmMedium: searchParams.get('utm_medium') ?? '',
    utmCampaign: searchParams.get('utm_campaign') ?? ''
  }), [searchParams]);

  useEffect(() => {
    setMessage(null);
    setError(null);
  }, [name, email, is18Plus, agreed]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, is18Plus, agreed, ...utm })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      setMessage('Success! Check your email for the next steps.');
      setName('');
      setEmail('');
      setIs18Plus(false);
      setAgreed(false);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
      </label>

      <label className="checkbox">
        <input type="checkbox" checked={is18Plus} onChange={(e) => setIs18Plus(e.target.checked)} />
        <span>I confirm I am 18 or older</span>
      </label>
      <label className="checkbox">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>I agree to the Terms and Privacy Policy</span>
      </label>

      <button type="submit" className="cta full" disabled={loading}>
        {loading ? 'Submitting…' : 'Continue'}
      </button>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
}
