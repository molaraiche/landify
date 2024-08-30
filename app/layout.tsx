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
          <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
            <NavBar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
