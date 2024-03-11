import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <nav className="p-4">
          <ul className="flex justify-center gap-10">
            <li className="px-4 border border-indigo-600 rounded-lg">
              <Link href="/">HOME</Link>
            </li>
            <li className="px-4 border border-indigo-600 rounded-lg">
              <Link href="/ssg">SSG</Link>
            </li>
            <li className="px-4 border border-indigo-600 rounded-lg">
              <Link href="/isr">ISR</Link>
            </li>
            <li className="px-4 border border-indigo-600 rounded-lg">
              <Link href="/ssr">SSR</Link>
            </li>
            <li className="px-4 border border-indigo-600 rounded-lg">
              <Link href="/csr">CSR</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center text-center">{children}</div>
      </body>
    </html>
  );
}
