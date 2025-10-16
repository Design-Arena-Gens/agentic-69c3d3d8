import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="fineprint">This promotion is independent and not affiliated with Crumbl HQ.</p>
        <div className="links">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
