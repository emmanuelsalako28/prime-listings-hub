import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'Every property and vehicle is verified by our expert team for authenticity.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We curate only the finest properties and vehicles for our clients.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Get quick responses from our dedicated team within 24 hours.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our experienced agents guide you through every step of the process.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
            Why NaijaEstates
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Property Partner
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            With years of experience in the Nigerian real estate market, we've built a reputation for excellence and trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
