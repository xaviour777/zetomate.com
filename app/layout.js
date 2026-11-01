import { Bricolage_Grotesque, DM_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import UtmCapture from '@/components/UtmCapture';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--display' });
const sans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--sans' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--serif' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: '500', variable: '--mono' });

export const metadata = {
  metadataBase: new URL('https://zetomate.com'),
  title: 'ZetoMate — From A to Z. You\'ve got a mate.',
  description: 'One connected system to create, distribute, monetize and grow. Idea to income. Start building — free.',
  alternates: { canonical: '/', languages: { en: '/', 'x-default': '/' } },
  icons: {
    icon: [{ url: '/brand/logo/favicon.svg', type: 'image/svg+xml' }, { url: '/brand/logo/png/favicon-32.png', sizes: '32x32' }],
    apple: '/brand/logo/png/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body><UtmCapture />{children}</body>
    </html>
  );
}
