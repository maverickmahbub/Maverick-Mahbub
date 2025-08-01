import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Play, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: Play,
      title: "Content Creation",
      description: "YouTube videos that captivate and convert"
    },
    {
      icon: Zap,
      title: "Video Editing",
      description: "Professional editing that tells your story"
    },
    {
      icon: Target,
      title: "Digital Strategy",
      description: "Data-driven approaches to grow your brand"
    }
  ];

  return (
    <div className="min-h-screen scroll-snap-container">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y, opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 gradient-dark">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)`
            }}
          />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-4 text-center"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6"
            >
              <Sparkles className="w-5 h-5 neon-blue" />
              <span className="text-sm font-medium neon-blue">Digital Content Architect</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">I'm </span>
              <span className="gradient-text block mb-2">Maverick Mahbub</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
                Your Digital Content Architect
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transforming ideas into viral content. Building digital empires one video at a time. 
            Let's rebuild the digital future together with cutting-edge content strategies and 
            jaw-dropping visuals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              className="group gradient-primary text-white border-0 neon-glow-blue hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Now
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group glass-card border-primary/50 hover:border-primary text-primary hover:text-white hover:bg-primary/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Link to="/contact">
                Hire Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* YouTube Video Embed */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="glass-card p-2 rounded-2xl neon-glow-blue">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-4 mx-auto animate-glow">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Latest Video</h3>
                    <p className="text-muted-foreground">
                      Click "Watch Now" to see my latest content creation masterpiece
                    </p>
                  </div>
                </div>
                {/* Placeholder for actual YouTube embed - will be replaced with real video */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50" />
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-60 right-40 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </motion.section>

      {/* Services Preview Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 scroll-snap-section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Bring to the Table</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to viral success, I handle every aspect of your digital content journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="glass-card p-8 text-center h-full hover:neon-glow-blue transition-all duration-300">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:neon-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white border-0 neon-glow-magenta hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 scroll-snap-section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Content</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Check out some of my latest work and see how I'm rebuilding the digital future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="glass-card overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:neon-blue transition-colors">
                      Featured Video #{item}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      An example of cutting-edge content creation and digital storytelling
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-card border-accent/50 hover:border-accent text-accent hover:text-white hover:bg-accent/20"
            >
              <Link to="/content">
                View All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

