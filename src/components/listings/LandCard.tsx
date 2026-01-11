import { Link } from 'react-router-dom';
import { MapPin, Maximize, FileText, ShoppingCart, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Land } from '@/data/listings';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { MediaDisplay } from '@/components/ui/media-display';
import { toast } from 'sonner';

interface LandCardProps {
  land: Land;
}

export function LandCard({ land }: LandCardProps) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(land.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addToCart(land);
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
        to={`/lands/${land.id}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-md hover-lift"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <MediaDisplay
            src={land.images[0]}
            alt={land.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
              {land.status.split(',')[0]}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-gold font-bold text-xl mb-2">{land.price}</p>
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
            {land.title}
          </h3>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{land.location}</span>
          </div>
          
          <div className="flex items-center gap-4 pb-4 border-b border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Maximize className="w-4 h-4" />
              <span>{land.size}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <FileText className="w-4 h-4" />
              <span>{land.documentation}</span>
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