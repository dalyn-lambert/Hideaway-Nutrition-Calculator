import { LinkData } from '@/lib/types';
import NavTile from './NavTile';

const links: LinkData[] = [
  { label: 'STARTERS', route: '', implemented: false },
  { label: 'SALADS', route: '', implemented: false },
  { label: 'SPECIALTY PIZZAS', route: '', implemented: false },
  { label: 'BYO PIZZA', route: '/', implemented: true },
  { label: 'SANDWICHES', route: '/sandwiches', implemented: true },
  { label: 'PASTA', route: '/pasta', implemented: true },
  { label: 'DESSERTS', route: '/desserts', implemented: true },
  { label: 'DRINKS', route: '/drinks', implemented: true },
  { label: 'KID MENU', route: '/kid-menu', implemented: true },
];

const Navigation = async () => {
  return (
    <div className='flex flex-row flex-wrap gap-1'>
      {links.map((link) => (
        <NavTile key={link.label} link={link} />
      ))}
    </div>
  );
};

export default Navigation;
