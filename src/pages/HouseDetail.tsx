import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { houses } from '@/data/listings';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, Check, ArrowLeft, Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const HouseDetail = () => {
  const { id } = useParams();
  const house = houses.find((h) => h.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, isInCart } = useCart();
  const inCart = house ? isInCart(house.id) : false;

  const handleAddToCart = () => {
    if (house && !inCart) {
      addToCart(house);
      toast.success('Added to enquiry list!');
    }
  };

  if (!house) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Property Not Found</h1>
          <Button asChild variant="gold">
            <Link to="/houses">Back to Houses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <Link
            to="/houses"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Houses
          </Link>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={house.images[selectedImage]}
                  alt={house.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {house.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {house.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-gold' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${house.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
                  For Sale
                </span>
              </div>

              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {house.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <span>{house.location}</span>
              </div>

              <p className="text-gold font-bold text-3xl md:text-4xl mb-6">
                {house.price}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 p-4 bg-secondary rounded-xl mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{house.bedrooms}</p>
                    <p className="text-xs text-muted-foreground">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{house.bathrooms}</p>
                    <p className="text-xs text-muted-foreground">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{house.size}</p>
                    <p className="text-xs text-muted-foreground">Land Size</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{house.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold mb-4">Property Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {house.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col gap-4">
                <Button
                  onClick={handleAddToCart}
                  variant={inCart ? "secondary" : "gold"}
                  size="lg"
                  className="w-full"
                  disabled={inCart}
                >
                  {inCart ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added to Enquiry List
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      Add to Enquiry List
                    </>
                  )}
                </Button>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="gold-outline" size="lg" className="flex-1">
                    <Link to="/contact">
                      <Phone className="w-4 h-4" />
                      Contact Agent
                    </Link>
                  </Button>
                  <Button asChild variant="gold-outline" size="lg" className="flex-1">
                    <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HouseDetail;
