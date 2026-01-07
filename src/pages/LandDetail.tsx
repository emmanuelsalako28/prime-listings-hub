import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { lands } from '@/data/listings';
import { motion } from 'framer-motion';
import { MapPin, Maximize, FileText, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandDetail = () => {
  const { id } = useParams();
  const land = lands.find((l) => l.id === id);

  if (!land) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Land Not Found</h1>
          <Button asChild variant="gold">
            <Link to="/lands">Back to Lands</Link>
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
            to="/lands"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lands
          </Link>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={land.images[0]}
                  alt={land.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
                    {land.status.split(',')[0]}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {land.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <span>{land.location}</span>
              </div>

              <p className="text-gold font-bold text-3xl md:text-4xl mb-6">
                {land.price}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 p-4 bg-secondary rounded-xl mb-6">
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{land.size}</p>
                    <p className="text-xs text-muted-foreground">Land Size</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-lg font-semibold">{land.documentation}</p>
                    <p className="text-xs text-muted-foreground">Documentation</p>
                  </div>
                </div>
              </div>

              {/* Land Status */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-3">Land Status</h3>
                <p className="text-muted-foreground">{land.status}</p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{land.description}</p>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="gold" size="lg" className="flex-1">
                  <Link to="/contact">
                    <Phone className="w-4 h-4" />
                    Contact Agent
                  </Link>
                </Button>
                <Button asChild variant="gold-outline" size="lg" className="flex-1">
                  <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer">
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

export default LandDetail;
