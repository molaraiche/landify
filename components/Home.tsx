import Image from 'next/image';
import { Button } from './ui/button';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const Home = () => {
  return (
    <section className='flex items-center justify-center lg:flex-row md:flex-col sm:flex-col xsm:flex-col  lg:gap-8 lg:h-[90vh] '>
      <div className='flex flex-col items-center justify-center md:w-full sm:w-full xsm:w-full lg:w-[800px] lg:mb-60 lg:mt-0 md:mb-10 md:mt-20 sm:mb-10 sm:mt-20 xsm:mb-10 xsm:mt20  lg:ml-0 md:mx-10'>
        <h1 className='font-bold leading-[72px] text-neutral-900 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl lg:w-[648px]  md:w-full'>
          The easiest way to manage projects
        </h1>
        <p className='text-neutral-700 font-normal text-lg mt-4 lg:w-[648px] md:w-full'>
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </p>
        <div className='lg:w-[648px] md:w-full md:justify-start sm:w-full sm:justify-start xsm:w-full xsm:justify-start flex mt-8 gap-4'>
          <Button className='bg-[#7C3AED] py-4 px-6 text-white font-semibold'>
            Get Started
          </Button>
          <Button className='  text-[#7C3AED] font-semibold rounded-[8px] py-4 px-6 flex items-center justify-center gap-1'>
            <AiOutlinePlayCircle />
            Watch Video
          </Button>
        </div>
      </div>
      <div className='lg:w-[480px] md:w-full sm:w-full xsm:w-full flex items-center justify-center '>
        <Image
          src='/assets/Phone_Mockup.png'
          alt='phone mockup'
          width={480}
          height={960}
          className='max-w-[480px] w-full h-auto'
        />
      </div>
    </section>
  );
};

export default Home;
