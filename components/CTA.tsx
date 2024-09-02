import Image from 'next/image';

const CTA = () => {
  return (
    <section className='bg-primary-600'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center justify-between gap-8 '>
        <div className='flex justify-center flex-col gap-12 '>
          <div className='lg:w-[592px] sm:w-[353px]  flex flex-col items-center '>
            <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-neutral-900 font-bold leading-[60px] mt-9'>
              Manage all projects from your mobile
            </h1>
            <p className='lg:text-lg md:text-lg sm:text-base xsm:text-base text-neutral-900'>
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-lg text-neutral-900 leading-7'>Get the App</p>
            <div className='flex gap-3 '>
              <Image
                src='./assets/google_store.svg'
                alt='google store'
                width={135}
                height={40}
              />
              <Image
                src='./assets/apple_store.svg'
                alt='Apple store'
                width={135}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col xsm:flex-col '>
          <Image
            src='./assets/phone-mockup-1.svg'
            alt=''
            width={232}
            height={464}
          />
          <Image
            src='./assets/phone-mockup-2.svg'
            alt=''
            width={232}
            height={464}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
