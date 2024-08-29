'use client';

import { useState } from 'react';
import { navLinks } from '@/constants/navLinks';
import { navLinksType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu2Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => setMenu(!menu);
  return (
    <header className='flex items-center h-[10vh] justify-between'>
      <div className='flex items-center gap-8'>
        <Link onClick={() => setMenu(false)} href='/'>
          <Image
            src='./assets/Logo.svg'
            alt='Landify logo'
            width={128}
            height={32}
          />
        </Link>
        <nav
          className={`navSet lg:translate-y-[0%] ${
            menu
              ? 'md:translate-y-[0%] '
              : 'md:translate-y-[-200%] sm:translate-y-[-200%] xsm:translate-y-[-200%] '
          }`}>
          {navLinks.map((link: navLinksType) => (
            <Link
              onClick={() => setMenu(false)}
              href={link.path}
              key={link.id}
              className='font-bold lg:text-neutral-900 md:text-white sm:text-white xsm:text-white leading-5 text-sm'>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={`navIcons lg:translate-y-[0%] ${
          menu
            ? 'translate-y-[0%] '
            : 'md:translate-y-[-2000%] sm:translate-y-[-2000%] xsm:translate-y-[-2000%] '
        }`}>
        <Link href={'#play-store'} onClick={() => setMenu(false)}>
          <Image
            src={'./assets/google_store.svg'}
            alt='Google store icon'
            width={135}
            height={40}
          />
        </Link>
        <Link href={'#app-store'} onClick={() => setMenu(false)}>
          <Image
            src={'./assets/apple_store.svg'}
            alt='Apple store icon'
            width={135}
            height={40}
          />
        </Link>
      </div>
      <div className='lg:hidden md:flex '>
        {menu ? (
          <IoMdClose className='w-[32px] h-[32px]' onClick={menuHandler} />
        ) : (
          <RiMenu2Line className='w-[32px] h-[32px]' onClick={menuHandler} />
        )}
      </div>
    </header>
  );
};

export default NavBar;
