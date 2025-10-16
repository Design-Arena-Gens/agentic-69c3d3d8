import Link from 'next/link';
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';

export default function HomePage() {
  return (
    <div className="page">
      <Header />

      <main className="container">
        {/* Hero */}
        <section className="section hero">
          <div className="hero-badge">Limited Time</div>
          <h1 className="hero-title">Win a $100 Crumbl Gift Card</h1>
          <p className="hero-subtitle">
            Complete a quick survey and a few sponsored offers to qualify. Perfect for cookie lovers and deal hunters.
          </p>
          <a href="#get-started" className="cta">Get Started</a>
          <p className="legal-note">No purchase necessary. Eligibility and terms apply.</p>
        </section>

        {/* Steps */}
        <section className="section steps">
          <ol className="steps-list">
            <li>
              <span className="step-number">1</span>
              <div>
                <h3>Sign up</h3>
                <p>Enter your details below to join the waitlist.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div>
                <h3>Complete survey</h3>
                <p>Answer a short, 60-second survey so we can match offers.</p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div>
                <h3>Finish offers</h3>
                <p>Complete several sponsored offers to qualify for the $100 gift card.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Form */}
        <section id="get-started" className="section form-section">
          <div className="card">
            <h2 className="card-title">Claim your spot</h2>
            <p className="card-subtitle">Join the list and well email next steps.</p>
            <Suspense fallback={<div className="skeleton" style={{height: 140}} />}> 
              <LeadForm />
            </Suspense>
            <p className="disclaimer">
              By continuing, you agree to the{' '}
              <Link href="/terms">Terms</Link> and{' '}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </section>

        {/* Social proof */}
        <section className="section social-proof">
          <p className="proof">Seen on TikTok, loved by cookie fans everywhere.</p>
          <div className="avatars">
            <span className="avatar" aria-hidden="true">🍪</span>
            <span className="avatar" aria-hidden="true">💖</span>
            <span className="avatar" aria-hidden="true">🎉</span>
            <span className="avatar" aria-hidden="true">✨</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
