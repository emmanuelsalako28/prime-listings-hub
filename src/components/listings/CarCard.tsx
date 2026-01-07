import { Link } from 'react-router-dom';
import { Calendar, Gauge, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Car } from '@/data/listings';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/cars/${car.id}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-md hover-lift"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={car.images[0]}
            alt={car.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
              {car.condition}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-gold font-bold text-xl mb-2">{car.price}</p>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
            {car.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4">
            {car.brand} • {car.model}
          </p>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Gauge className="w-4 h-4" />
              <span>{car.mileage}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Settings className="w-4 h-4" />
              <span>{car.condition}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
