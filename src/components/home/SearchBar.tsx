import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const categories = ['All', 'Houses', 'Lands', 'Cars'];
const locations = ['All Locations', 'Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano'];
const priceRanges = [
  'Any Price',
  '₦0 - ₦50M',
  '₦50M - ₦100M',
  '₦100M - ₦500M',
  '₦500M - ₦1B',
  '₦1B+',
];

export function SearchBar() {
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All Locations');
  const [priceRange, setPriceRange] = useState('Any Price');
  const navigate = useNavigate();

  const handleSearch = () => {
    const path = category === 'All' ? '/houses' : `/${category.toLowerCase()}`;
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-card rounded-2xl p-4 shadow-lg border border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Category */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Category
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Price Range
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg text-foreground text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {priceRanges.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button
            onClick={handleSearch}
            variant="gold"
            size="lg"
            className="w-full"
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
