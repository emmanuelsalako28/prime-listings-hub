import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Nigeria's Trusted Property Partner
            </h1>
            <p className="text-primary-foreground/70">
              For over a decade, Go Online Estates has been at the forefront of Nigeria's real estate market, 
              connecting buyers with premium properties and vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="Go Online Estates Office"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Dreams Since 2010
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Go Online Estates was founded with a simple mission: to make property ownership accessible 
                and transparent for all Nigerians. What started as a small team of passionate real estate 
                professionals has grown into Nigeria's premier property marketplace.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, we serve thousands of clients across Nigeria, from first-time homebuyers to 
                seasoned investors. Our commitment to integrity, transparency, and exceptional service 
                remains at the heart of everything we do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have expanded our offerings to include premium automobiles, making us your one-stop 
                destination for both property and vehicle acquisitions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                description: 'We operate with complete transparency in all our dealings.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every property we list.',
              },
              {
                icon: Users,
                title: 'Client Focus',
                description: 'Your satisfaction is our ultimate measure of success.',
              },
              {
                icon: Target,
                title: 'Results',
                description: 'We are committed to delivering results that matter.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Properties Listed' },
              { value: '1000+', label: 'Happy Clients' },
              { value: '₦50B+', label: 'Total Sales' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
