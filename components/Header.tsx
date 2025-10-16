import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden>🍪</span>
          <span className="logo-text">Crumbl Rewards</span>
        </Link>
        <nav className="nav">
          <Link href="#get-started" className="nav-cta">Get Started</Link>
        </nav>
      </div>
    </header>
  );
}
