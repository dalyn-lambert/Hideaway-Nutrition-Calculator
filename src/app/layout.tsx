import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hideaway Nutrition Calculator',
  description: 'Calculate the nutrition information for your Hideaway Pizza Meal',
};

const arimo = Arimo({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <main className={arimo.className}>
        <body className='flex min-h-screen flex-col gap-6 items-center p-4 pt-10'>
          <Link href={'/'} className='text-2xl font-bold'>
            HIDEAWAY PIZZA NUTRITION CALCULATOR
          </Link>
          <Navigation />
          {children}
        </body>
      </main>
    </html>
  );
}
