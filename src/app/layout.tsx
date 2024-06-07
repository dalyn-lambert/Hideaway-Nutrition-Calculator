import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hideaway Nutrition Calculator',
  description: 'Calculate the nutrition information for your Hideaway Pizza meal',
};

const overpass = Overpass({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={overpass.className}>
      <body className='flex min-h-screen flex-col gap-6 items-center p-4 py-10'>
        <Link href={'/'} className='font-bold text-2xl'>
          HIDEAWAY PIZZA NUTRITION CALCULATOR
        </Link>
        <Navigation />
        <div className='flex flex-col items-center gap-6'>{children}</div>
      </body>
    </html>
  );
}
