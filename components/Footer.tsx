import { footLinks } from '@/constants/navLinks';
import { navLinksType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='bg-black text-white py-8'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex lg:flex-row md:flex-row sm:flex-col xsm:flex-col lg:items-center md:items-center justify-between lg:h-[25vh]  md:gap-0 sm:gap-8 xsm:gap-8 '>
        <div className='flex flex-col gap-6'>
          <div className=''>
            <Image
              src='./assets/short_logo.svg'
              alt='landify small logo'
              width={32}
              height={32}
            />
          </div>
          <div className='flex gap-6'>
            <a href='#' className='leading-6'>
              Download Now
            </a>
            <Link href='#' className='leading-6'>
              {' '}
              License{' '}
            </Link>
          </div>
          <div className='flex lg:flex-nowrap flex-wrap gap-6'>
            {footLinks.map((footLink: navLinksType) => (
              <Link
                key={footLink.id}
                href={footLink.path}
                className='leading-6'>
                {footLink.label}
              </Link>
            ))}
          </div>
          <div className=''>
            <p className='text-sm text-neutral-300'>
              © 2021 Landify UI Kit. All rights reserved
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p>Get the App</p>
          <div className='flex flex-col gap-4'>
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
