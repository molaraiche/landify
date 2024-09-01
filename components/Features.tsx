import { features } from '@/constants/features';
import { featuresType } from '@/types';
import Image from 'next/image';

const Features = () => {
  return (
    <section id='features' className='flex flex-col gap-16 h-auto my-[5rem]'>
      <div className='flex items-center justify-center flex-col gap-2 h-[10vh] lg:mb-[0rem] md:mb-[2rem] sm:mb-[4rem] xsm:mb-[6rem] '>
        <h1 className='font-bold lg:text-5xl md: text-4xl text-neutral-900 leading-[60px] text-center'>
          Tailor-made features
        </h1>
        <p className='text-lg text-neutral-900 leading-7 text-center mt-2'>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className='flex items-center justify-center gap-16 flex-wrap '>
        {features.map((feature: featuresType) => (
          <div className=' w-[384px] h-[152px] ' key={feature.id}>
            <div className='flex flex-col items-center justify-center '>
              <Image
                src={`/assets/${feature.icon}.svg`}
                width={32}
                height={32}
                alt={feature.title}
              />
              <h2 className='text-center text-3xl font-bold leading-10 mt-6'>
                {feature.title}
              </h2>
              <p className='text-center leading-6 text-neutral-700 mt-2'>
                {feature.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
