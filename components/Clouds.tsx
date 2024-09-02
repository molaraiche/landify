import Image from 'next/image';

const Clouds = () => {
  return (
    <div className='lg:w-[688] md:w-full sm:w-full xsm:w-full '>
      <div className='flex items-center justify-between min-h-[40vh] gap-20 lg:flex-row md:flex-col sm:flex-col xsm:flex-col'>
        <div className='lg:w-[500px] md:w-full sm:w-full xsm:w-full'>
          <h1 className='lg:text-6xl md:text-4xl sm:text-4xl xsm:text-4xl leading-[60px] text-neutral-900 font-bold'>
            Easy intergrations with 170+ tools
          </h1>
          <p className='lg:text-lg  leading-7 text-neutral-900 mt-2'>
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div className='lg:my-0 md:my-4 sm:my-4 xsm:my-4'>
          <Image
            src='./assets/Logos.svg'
            alt='companies using our cloud'
            width={500}
            height={304}
          />
        </div>
      </div>
    </div>
  );
};

export default Clouds;
