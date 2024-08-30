import Image from 'next/image';
import { Button } from './ui/button';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const Home = () => {
  return (
    <section className='flex items-center lg:flex-row md:flex-col  gap-8 lg:h-[90vh]'>
      <div className='w-[900px] lg:mb-60 lg:mt-0 md:mb-0 md:mt-20'>
        <h1 className='font-bold leading-[72px] text-neutral-900 text-6xl lg:w-[648px]  md:w-full'>
          The easiest way to manage projects
        </h1>
        <p className='text-neutral-700 font-normal text-lg mt-4 lg:w-[648px] md:w-full'>
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </p>
        <div className='w-[648px] flex mt-8 gap-4'>
          <Button className='bg-[#7C3AED] py-4 px-6 text-white font-semibold'>
            Get Started
          </Button>
          <Button className='  text-[#7C3AED] font-semibold rounded-[8px] py-4 px-6 flex items-center justify-center gap-1'>
            <AiOutlinePlayCircle />
            Watch Video
          </Button>
        </div>
      </div>
      <div className='w-[480px] flex items-center justify-center '>
        <Image
          src='/assets/Phone_Mockup.png'
          alt='phone mockup'
          width={480}
          height={960}
        />
      </div>
    </section>
  );
};

export default Home;
