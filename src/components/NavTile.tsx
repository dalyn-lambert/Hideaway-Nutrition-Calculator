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
        'text-black font-bold text-lg bg-hideaway-red min-w-32 p-4 rounded text-center hover:underline hover:underline-offset-8 hover:decoration-black  hover:decoration-double',
        isActive && 'underline underline-offset-8 decoration-black  decoration-double'
      )}
    >
      {link.label}
    </Link>
  );
};

export default NavTile;
