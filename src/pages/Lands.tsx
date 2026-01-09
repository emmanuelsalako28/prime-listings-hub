import { Layout } from '@/components/layout/Layout';
import { LandCard } from '@/components/listings/LandCard';
import { useLands } from '@/hooks/useListings';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Lands = () => {
  const { lands, loading, error } = useLands();

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
              Prime Locations
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Lands for Sale
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Invest in premium land plots across Nigeria. From beachfront to commercial plots.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{lands.length}</span> land plots
            </p>
            <select className="px-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Size: Largest First</option>
            </select>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-gold" />
              <span className="ml-2 text-muted-foreground">Loading land plots...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive">{error}</p>
            </div>
          ) : lands.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No land plots available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lands.map((land) => (
                <LandCard key={land.id} land={land} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Lands;
