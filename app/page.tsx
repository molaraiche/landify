import Clouds from '@/components/Clouds';
import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Metrics from '@/components/Metrics';
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

      <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <Metrics />
      </section>
      <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <Clouds />
      </section>
      <CTA />
      <Footer />
    </>
  );
};

export default page;
