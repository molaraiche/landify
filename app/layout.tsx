import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Landify | molaraiche',
  description:
    'Landify is a phone landing page created by Mohamed laraiche (molaraiche.com), working with next js,typescript tailwind to present and show skills in using those awesome technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
