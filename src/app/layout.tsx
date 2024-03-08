import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hideaway Nutrition Calculator',
  description: 'Calculate the nutrition information for your Hideaway Pizza Meal',
};

const overpass = Overpass({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={overpass.className}>
      <body className='flex min-h-screen flex-col gap-6 items-center p-4 pt-10'>
        <Link href={'/'} className='font-bold text-2xl'>
          HIDEAWAY PIZZA NUTRITION CALCULATOR
        </Link>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
