'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 text-large'>
      <Link href={'/starters'}>STARTERS</Link>
      <Link href={'/salads'}>SAlADS</Link>
      <Link href={'/build-your-own-pizza'}>BUILD YOUR OWN PIZZA</Link>
      <Link href={'/specialty-pizzas'}>SPECIALTY PIZZAS</Link>
      <Link href={'/sandwiches'}>SANDWICHES</Link>
      <Link href={'/pasta'}>PASTA</Link>
      <Link href={'/desserts'}>DESSERTS</Link>
      <Link href={'/drinks'}>DRINKS</Link>
      <Link href={'/kid-menu'}>KID MENU</Link>
    </div>
  );
}
