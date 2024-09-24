import MainLayout from '@/components/layouts/MainLayout';
import FAQSection from '@/containers/landing/FAQSection';
import HeroSection from '@/containers/landing/HeroSection';
import HowItWorks from '@/containers/landing/HowItWorks';
import StatSection from '@/containers/landing/StatSection';
import TestimonialCarousel from '@/containers/landing/TestimonialCarousel';

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HowItWorks />
      <StatSection />
      <TestimonialCarousel />
      <FAQSection />
    </MainLayout>
  );
};

export default Home;
