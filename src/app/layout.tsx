import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hideaway Nutrition Calculator',
  description: 'Calculate the nutrition information for your Hideaway Pizza Meal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col gap-6 items-center p-4'>
        <div>Hideaway Nutrition Calculator</div>
        {children}
      </body>
    </html>
  );
}
