import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import type { House } from '@/data/listings';

interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/houses/${house.id}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-md hover-lift"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={house.images[0]}
            alt={house.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
              For Sale
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-gold font-bold text-xl mb-2">{house.price}</p>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
            {house.title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{house.location}</span>
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Bed className="w-4 h-4" />
              <span>{house.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Bath className="w-4 h-4" />
              <span>{house.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Maximize className="w-4 h-4" />
              <span>{house.size}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
