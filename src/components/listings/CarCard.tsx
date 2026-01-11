import { Link } from 'react-router-dom';
import { Calendar, Gauge, Settings, ShoppingCart, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Car } from '@/data/listings';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { MediaDisplay } from '@/components/ui/media-display';
import { toast } from 'sonner';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(car.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addToCart(car);
      toast.success('Added to enquiry list!');
    }
  };

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
          <MediaDisplay
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
          
          <div className="flex items-center gap-4 pb-4 border-b border-border">
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

          <div className="pt-4">
            <Button
              onClick={handleAddToCart}
              variant={inCart ? "secondary" : "gold"}
              size="sm"
              className="w-full"
              disabled={inCart}
            >
              {inCart ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to List
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Add to Enquiry
                </>
              )}
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}