import { createContext, useContext, useState, ReactNode } from 'react';
import { House, Land, Car } from '@/data/listings';

type CartItem = (House | Land | Car) & { quantity: number };

interface CartContextType {
  items: CartItem[];
  addToCart: (item: House | Land | Car) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  itemCount: number;
  generateWhatsAppMessage: () => string;
  checkoutUrl: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: House | Land | Car) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const isInCart = (id: string) => {
    return items.some((item) => item.id === id);
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = `Hello Go Online Estates! I'm interested in the following:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   Price: ${item.price}\n`;
      
      if (item.type === 'house') {
        const house = item as House;
        message += `   Location: ${house.location}\n`;
        message += `   Bedrooms: ${house.bedrooms} | Size: ${house.size}\n`;
      } else if (item.type === 'land') {
        const land = item as Land;
        message += `   Location: ${land.location}\n`;
        message += `   Size: ${land.size} | Docs: ${land.documentation}\n`;
      } else if (item.type === 'car') {
        const car = item as Car;
        message += `   Year: ${car.year} | Condition: ${car.condition}\n`;
        message += `   Mileage: ${car.mileage}\n`;
      }
      message += '\n';
    });

    message += `Please provide more information and availability. Thank you!`;

    return encodeURIComponent(message);
  };

  const checkoutUrl = `https://wa.me/2348035826698?text=${generateWhatsAppMessage()}`;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        itemCount: items.length,
        generateWhatsAppMessage,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
