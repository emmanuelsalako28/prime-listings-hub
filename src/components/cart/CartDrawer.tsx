import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, MessageCircle, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
  const { items, removeFromCart, clearCart, itemCount, checkoutUrl } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 text-foreground hover:text-gold transition-colors">
          <ShoppingCart className="w-5 h-5" />
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-primary text-xs font-bold rounded-full flex items-center justify-center"
            >
              {itemCount}
            </motion.span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Your Enquiry List</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">Your enquiry list is empty</p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Add properties or cars to enquire about them
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-3 p-3 bg-secondary rounded-xl"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm line-clamp-2">{item.title}</p>
                        <p className="text-gold font-bold text-sm mt-1">{item.price}</p>
                        <p className="text-xs text-muted-foreground capitalize mt-1">
                          {item.type}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Items in list:</span>
                  <span className="font-semibold">{itemCount}</span>
                </div>
                
                <Button
                  asChild
                  variant="gold"
                  size="lg"
                  className="w-full"
                >
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={clearCart}
                >
                  <Trash2 className="w-4 h-4" />
                  Clear List
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
