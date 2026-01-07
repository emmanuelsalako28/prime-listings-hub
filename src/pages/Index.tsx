import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { CategoryCards } from '@/components/home/CategoryCards';
import { FeaturedListings } from '@/components/home/FeaturedListings';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategoryCards />
      <FeaturedListings />
      <WhyChooseUs />
    </Layout>
  );
};

export default Index;
