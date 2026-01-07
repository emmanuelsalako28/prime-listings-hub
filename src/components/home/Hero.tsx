import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SearchBar } from './SearchBar';
import heroImage from '@/assets/hero-house.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Nigerian property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Nigeria's Premier Real Estate Marketplace
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Find Your Dream{' '}
              <span className="text-gradient-gold">Property</span> or{' '}
              <span className="text-gradient-gold">Vehicle</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Discover luxury homes, prime lands, and premium cars across Nigeria. 
              Your trusted partner in making property dreams a reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/houses">Browse Properties</Link>
            </Button>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {[
              { value: '500+', label: 'Properties Listed' },
              { value: '₦50B+', label: 'Total Value' },
              { value: '1000+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Search Bar */}
        <div className="mt-12 max-w-4xl">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
