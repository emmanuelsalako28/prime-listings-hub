import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { cars } from '@/data/listings';
import { motion } from 'framer-motion';
import { Calendar, Gauge, Settings, Check, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!car) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <Button asChild variant="gold">
            <Link to="/cars">Back to Cars</Link>
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
            to="/cars"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cars
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
                  src={car.images[selectedImage]}
                  alt={car.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
                    {car.condition}
                  </span>
                </div>
              </div>
              {car.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-gold' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Vehicle Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {car.title}
              </h1>

              <p className="text-muted-foreground mb-4">
                {car.brand} • {car.model} • {car.year}
              </p>

              <p className="text-gold font-bold text-3xl md:text-4xl mb-6">
                {car.price}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 p-4 bg-secondary rounded-xl mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{car.year}</p>
                    <p className="text-xs text-muted-foreground">Year</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{car.mileage}</p>
                    <p className="text-xs text-muted-foreground">Mileage</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{car.condition}</p>
                    <p className="text-xs text-muted-foreground">Condition</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {car.specifications.map((spec) => (
                    <div key={spec} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-sm text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="gold" size="lg" className="flex-1">
                  <Link to="/contact">
                    <Phone className="w-4 h-4" />
                    Contact Dealer
                  </Link>
                </Button>
                <Button asChild variant="gold-outline" size="lg" className="flex-1">
                  <a href="https://wa.me/2347081150770" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetail;
