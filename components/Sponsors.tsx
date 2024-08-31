import { partners } from '@/constants/partners';
import { partnersType } from '@/types';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-16 h-[20vh] my-4'>
      {partners.map((partner: partnersType) => (
        <Image
          src={partner.imgURL}
          alt={partner.name}
          key={partner.id}
          width={partner.width}
          height={partner.height}
        />
      ))}
    </div>
  );
};

export default Sponsors;
