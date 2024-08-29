import { navLinks } from '@/constants/navLinks';
import { navLinksType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import toggleMenu from './toggleMenu';
const NavBar = () => {
  return (
    <header className='flex items-center h-[10vh] justify-between'>
      <div className='flex items-center gap-8'>
        <Link href='/'>
          <Image
            src='./assets/Logo.svg'
            alt='Landify logo'
            width={128}
            height={32}
          />
        </Link>
        <nav className='flex lg:gap-2 lg:static md:absolute sm:absolute xsm:absolute top-[10vh] right-0 lg:flex-row md:flex-col sm:flex-col xsm:flex-col lg:w-fit  md:w-full sm:w-full xsm:w-full lg:bg-white md:bg-neutral-700 sm:bg-neutral-700 xsm:bg-neutral-700 items-center lg:h-fit md:h-[80vh] sm:h-[80vh] xsm:h-[80vh] md:gap-10 sm:gap-10 xsm:gap-10 justify-around'>
          {navLinks.map((link: navLinksType) => (
            <Link
              href={link.path}
              key={link.id}
              className='font-bold lg:text-neutral-900 md:text-white sm:text-white xsm:text-white leading-5 text-sm'>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className='flex gap-3 lg:static lg:w-fit md:absolute md:top-[90vh] md:h-[10vh] md:items-center md:justify-center md:w-full md:right-0 sm:absolute sm:top-[90vh] sm:h-[10vh] sm:items-center sm:justify-center sm:w-full sm:right-0  xsm:absolute xsm:top-[90vh] xsm:h-[10vh] xsm:items-center xsm:justify-center xsm:w-full xsm:right-0'>
        <Link href={'#play-store'}>
          <Image
            src={'./assets/google_store.svg'}
            alt='Google store icon'
            width={135}
            height={40}
          />
        </Link>
        <Link href={'#app-store'}>
          <Image
            src={'./assets/apple_store.svg'}
            alt='Apple store icon'
            width={135}
            height={40}
          />
        </Link>
      </div>
      <div className='lg:hidden md:flex'></div>
    </header>
  );
};

export default NavBar;
