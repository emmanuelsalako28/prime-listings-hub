import { Link } from 'react-router-dom';
import { ArrowRight, Home, LandPlot, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Houses',
    description: 'Discover luxury homes, duplexes, and apartments across Nigeria. From Lekki to Banana Island.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
    path: '/houses',
    count: '150+ Properties',
  },
  {
    title: 'Lands',
    description: 'Prime land plots in strategic locations. Perfect for investment or building your dream home.',
    icon: LandPlot,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600',
    path: '/lands',
    count: '80+ Plots',
  },
  {
    title: 'Cars',
    description: 'Premium vehicles from trusted dealers. New and foreign-used cars at competitive prices.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600',
    path: '/cars',
    count: '200+ Vehicles',
  },
];

export function CategoryCards() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for. Whether it's a luxury home, prime land, or premium vehicle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={category.path}
                className="group block bg-card rounded-2xl overflow-hidden shadow-md hover-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-primary-foreground">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{category.title}</h3>
                        <p className="text-sm text-primary-foreground/80">{category.count}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                    View Listings
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
