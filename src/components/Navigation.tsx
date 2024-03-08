import { LinkData } from '@/lib/types';
import NavTile from './NavTile';

const links: LinkData[] = [
  { label: 'STARTERS', route: '/starters' },
  { label: 'SALADS', route: '/salads' },
  { label: 'BUILD YOUR OWN PIZZA', route: '/build-your-own-pizza' },
  { label: 'SPECIALTY PIZZAS', route: '/specialty-pizzas' },
  { label: 'SANDWICHES', route: '/sandwiches' },
  { label: 'PASTA', route: '/pasta' },
  { label: 'DESSERTS', route: '/desserts' },
  { label: 'DRINKS', route: '/drinks' },
  { label: 'KID MENU', route: '/kid-menu' },
];

const Navigation = async () => {
  return (
    <div className='flex flex-row gap-1'>
      {links.map((link) => (
        <NavTile key={link.label} link={link} />
      ))}
    </div>
  );
};

export default Navigation;
