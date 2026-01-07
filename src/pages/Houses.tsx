import { Layout } from '@/components/layout/Layout';
import { HouseCard } from '@/components/listings/HouseCard';
import { houses } from '@/data/listings';
import { motion } from 'framer-motion';

const Houses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Premium Properties
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Houses for Sale
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Discover luxury homes, duplexes, and apartments in Nigeria's most prestigious locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{houses.length}</span> properties
            </p>
            <select className="px-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Houses;
