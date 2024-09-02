import Image from 'next/image';
import TestimonialCard from './shared/TestimonialCard';

const Testimonials = () => {
  return (
    <section className='bg-[#D5FAFC] min-h-screen h-auto w-full'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <div className='flex'>
          <div className='flex mt-10 '>
            <Image
              src={'/assets/quote_mark.svg'}
              alt='quote mark'
              width={142}
              className='absolute'
              height={116}
            />
            <div className=' ml-24 mt-14'>
              <h1 className='lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-bold leading-[60px] text-neutral-900 lg:w-[600px]'>
                Real Stories from Real Customers
              </h1>
              <p className='text-lg text-neutral-900 leading-7 mt-2'>
                Get inspired by these stories
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center justify-center lg:gap-8 md:gap-6 sm:gap-6 xsm:gap-6 mt-10 '>
        <div className='lg:w-[384px] md:w-[90%] sm:w-[90%] xsm:w-[90%]'>
          <TestimonialCard
            imgURL='hubspot'
            quote='To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.'
            author='Floyd Miles'
            position='Vice President, GoPro'
          />
        </div>
        <div className='lg:block md:flex md:flex-col sm:flex sm:flex-col xsm:flex xsm:flex-col   sm:gap-6 xsm:gap-6 lg:w-[384px] md:w-[90%] sm:w-[90%] xsm:w-[90%]'>
          <div className=''>
            <TestimonialCard
              imgURL='airbnb'
              quote='I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.'
              author='Jane Cooper'
              position='CEO, Airbnb'
            />
          </div>
          <div className=''>
            <TestimonialCard
              imgURL='starpi'
              quote='Landify saved our time in designing my company page.'
              author='Kristin Watson'
              position='Co-Founder, Strapi'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
