'use client';

import { NavTileProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavTile = ({ link }: NavTileProps) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname == link.route) {
    isActive = true;
  }

  return (
    <Link
      href={link.route}
      className={clsx(
        'text-black text-lg bg-hideaway-red min-w-32 p-4 rounded text-center',
        !link.implemented && 'text-sm',
        link.implemented && 'hover:underline hover:underline-offset-8 hover:decoration-black  hover:decoration-double',
        isActive && 'font-bold underline underline-offset-8 decoration-black  decoration-double'
      )}
    >
      <div className='flex flex-col'>
        {!link.implemented && <span className='text-sm italic'>Coming Soon</span>}
        {link.label}
      </div>
    </Link>
  );
};

export default NavTile;
