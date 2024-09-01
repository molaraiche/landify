import Features from '@/components/Features';
import Home from '@/components/Home';
import Sponsors from '@/components/Sponsors';
import Testimonials from '@/components/Testimonials';

const page = () => {
  return (
    <>
      <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <Home />
        <Sponsors />
        <Features />
      </section>
      <Testimonials />
    </>
  );
};

export default page;
