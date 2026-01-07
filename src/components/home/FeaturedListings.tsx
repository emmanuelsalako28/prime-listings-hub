import { motion } from 'framer-motion';
import { HouseCard } from '@/components/listings/HouseCard';
import { houses } from '@/data/listings';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeaturedListings() {
  const featuredHouses = houses.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Featured Properties
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Luxury Homes for Sale
            </h2>
          </div>
          <Button asChild variant="gold-outline" className="mt-4 md:mt-0">
            <Link to="/houses">
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}
