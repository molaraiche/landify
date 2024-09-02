import { metrics } from '@/constants/metrics';
import { metricsType } from '@/types';
import Image from 'next/image';

const Metrics = () => {
  return (
    <section className='flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center justify-center gap-8 min-h-[40vh] lg:my-0 md:my-20 sm:my-20 xsm:my-20 '>
      <div className='lg:w-[592px]'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-bold leading-[60px] text-neutral-900'>
          Our 18 years of achievements
        </h1>
        <p className='text-lg text-neutral-900 leading-7 '>
          With our super powers we have reached this
        </p>
      </div>
      <div className='lg:w-[592px] flex items-center justify-center gap-8 flex-wrap'>
        {metrics.map((metric: metricsType) => (
          <div key={metric.id} className='flex w-[280px] h-[69px] '>
            <div className='w-[48px] h-[48px] flex items-center justify-center  '>
              <Image
                src={`/assets/${metric.icon}.svg`}
                alt={metric.description}
                width={32}
                height={32}
              />
            </div>
            <div className='flex flex-col'>
              <p className='lg:text-4xl md:text-3xl sm:text-2xl text-neutral-900 font-bold leading-[45px]'>
                {metric.stats}
              </p>
              <p className='text-neutral-900 leading-6'>{metric.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
