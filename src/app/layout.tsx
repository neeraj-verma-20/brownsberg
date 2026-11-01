import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#08090C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'BROWNSBERG | AI-Powered Creative Content & Learning Solutions',
  description:
    'Brownsberg creates cinematic AI-powered videos, high-impact creative ad campaigns, and enterprise digital learning and training solutions.',
  keywords: [
    'AI video production',
    'AI storytelling',
    'AI commercials',
    'Instructional Design',
    'Content Digitization',
    'Corporate Training Courses',
    'Brownsberg',
    'AI Learning Solutions',
  ],
  authors: [{ name: 'BROWNSBERG' }],
  creator: 'BROWNSBERG',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brownsberg.com',
    title: 'BROWNSBERG | AI Creative Content & Learning Solutions',
    description:
      'Cinematic AI video production, high-impact advertising, and scalable instructional design and training courses.',
    siteName: 'BROWNSBERG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BROWNSBERG | AI Creative Content & Learning Solutions',
    description:
      'Cinematic AI video production, high-impact advertising, and scalable instructional design and training courses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#08090C] text-[#F8FAFC] antialiased selection:bg-amber-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

