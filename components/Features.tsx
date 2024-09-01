import { features } from '@/constants/features';
import { featuresType } from '@/types';
import Image from 'next/image';

const Features = () => {
  return (
    <section id='#features' className='flex flex-col gap-16 h-[100vh]'>
      <div className='flex items-center justify-center flex-col gap-2 h-[10vh]'>
        <h1 className='font-bold lg:text-5xl md: text-4xl text-neutral-900 leading-[60px] text-center'>
          Tailor-made features
        </h1>
        <p className='text-lg text-neutral-900 leading-7 text-center'>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div className='flex items-center justify-center gap-[30px] flex-wrap'>
        {features.map((feature: featuresType) => (
          <div className=' w-[384px] h-[152px] ' key={feature.id}>
            <div className='flex flex-col items-center justify-center gap-6'>
              <div className=''>
                <Image
                  src={`/assets/${feature.icon}.svg`}
                  width={32}
                  height={32}
                  alt={feature.title}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-center text-3xl font-bold leading-10 '>
                  {feature.title}
                </h2>
                <p className='text-center leading-6 text-neutral-700 '>
                  {feature.context}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
