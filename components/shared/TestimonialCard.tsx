import { testimonialType } from '@/types';
import Image from 'next/image';

const TestimonialCard = ({
  imgURL,
  quote,
  author,
  position,
}: testimonialType) => {
  return (
    <div className='bg-white rounded-lg'>
      <div className=' flex flex-col m-8'>
        <div className='flex items-start h-full  gap-4 mt-8'>
          <Image
            src={`/assets/${imgURL}.svg`}
            alt={imgURL}
            width={112}
            height={32}
            className=''
          />
        </div>
        <div className='flex gap-4 mt-8'>
          <Image
            src='/assets/smallQuote.svg'
            alt='quote'
            width={16}
            height={13}
            className='h-full'
          />
          <p className='text-neutral-900 leading-7 text-lg'> {quote} </p>
        </div>
        <div className='mt-6 ml-7'>
          <p className='text-lg font-bold leading-7'> {author} </p>
          <p className='mb-8 text-neutral-500 text-sm'> {position} </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
