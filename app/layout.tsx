import type { Metadata } from 'next';
import { Montserrat, Lato } from 'next/font/google';
import './globals.css';

const heading = Montserrat({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-heading' });
const body = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-69c3d3d8.vercel.app'),
  title: 'Get a $100 Crumbl Gift Card | Limited Offer',
  description:
    'Claim a chance to receive a $100 Crumbl gift card by completing a quick survey and a few sponsored offers. Limited-time opportunity for cookie fans!',
  openGraph: {
    title: 'Get a $100 Crumbl Gift Card | Limited Offer',
    description:
      'Claim a chance to receive a $100 Crumbl gift card by completing a quick survey and a few sponsored offers.',
    url: 'https://agentic-69c3d3d8.vercel.app',
    siteName: 'Crumbl Rewards',
    images: [],
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Get a $100 Crumbl Gift Card',
    description:
      'Complete a short survey and a few offers to qualify for a $100 Crumbl gift card.',
  },
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${heading.variable}`}>
        {children}
      </body>
    </html>
  );
}
