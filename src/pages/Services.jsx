import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Play, 
  Video, 
  Edit3, 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Palette,
  BarChart3,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeService, setActiveService] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const mainServices = [
    {
      id: 1,
      title: "YouTube Content Creation",
      subtitle: "From Concept to Viral Success",
      description: "Complete YouTube content creation service that transforms your ideas into viral sensations. From scripting and filming to optimization and analytics.",
      icon: Play,
      color: "from-red-500 to-pink-500",
      features: [
        "Content Strategy & Planning",
        "Script Writing & Storyboarding",
        "Professional Video Production",
        "Thumbnail Design & Optimization",
        "SEO Optimization & Analytics",
        "Channel Growth Strategies"
      ],
      pricing: "Starting at $2,500/month",
      deliveryTime: "7-14 days per video"
    },
    {
      id: 2,
      title: "Professional Video Editing",
      subtitle: "Cinematic Quality, Every Time",
      description: "Transform raw footage into polished, professional content that captivates audiences and drives engagement across all platforms.",
      icon: Edit3,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Advanced Color Grading",
        "Motion Graphics & Animations",
        "Audio Enhancement & Mixing",
        "Multi-Platform Optimization",
        "Custom Transitions & Effects",
        "Unlimited Revisions"
      ],
      pricing: "Starting at $500/video",
      deliveryTime: "3-5 days"
    },
    {
      id: 3,
      title: "Digital Strategy Consulting",
      subtitle: "Data-Driven Growth Solutions",
      description: "Strategic consulting to build your digital empire. From brand positioning to content strategy, we create roadmaps for sustainable growth.",
      icon: Target,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Brand Positioning & Strategy",
        "Content Calendar Planning",
        "Audience Analysis & Targeting",
        "Competitor Research & Analysis",
        "Growth Hacking Strategies",
        "Performance Tracking & Optimization"
      ],
      pricing: "Starting at $1,500/month",
      deliveryTime: "Ongoing support"
    }
  ];

  const additionalServices = [
    {
      title: "Social Media Management",
      description: "Complete social media presence management across all platforms",
      icon: Users,
      price: "$800/month"
    },
    {
      title: "Brand Identity Design",
      description: "Logo, brand guidelines, and visual identity creation",
      icon: Palette,
      price: "$1,200 one-time"
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed performance analysis and growth recommendations",
      icon: BarChart3,
      price: "$300/month"
    },
    {
      title: "Content Workshops",
      description: "1-on-1 training sessions for content creation mastery",
      icon: Lightbulb,
      price: "$200/hour"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "YouTuber & Entrepreneur",
      content: "Maverick transformed my channel from 10K to 500K subscribers in just 8 months. His content strategy is pure genius!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Tech Startup Founder",
      content: "The video editing quality is unmatched. Every video feels like a Hollywood production. ROI has been incredible.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketing Agency",
      content: "Best investment we've made. Maverick's strategic insights helped us scale our content operation 10x.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your brand, audience, and goals to create a tailored content strategy.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Our team brings your vision to life with professional production and cutting-edge techniques.",
      icon: Video
    },
    {
      step: "03",
      title: "Optimization & Launch",
      description: "We optimize for maximum reach and engagement, then launch with strategic timing.",
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Analysis & Growth",
      description: "Continuous monitoring and optimization to ensure sustained growth and viral potential.",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-20 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 gradient-dark">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
              <Zap className="w-4 h-4 neon-blue" />
              <span className="text-sm font-medium">Premium Digital Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services That <span className="gradient-text">Build Empires</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From viral YouTube content to strategic digital consulting, I provide the complete toolkit 
              to transform your digital presence and build a lasting empire in the digital realm.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="glass-card px-6 py-3 flex items-center space-x-2">
              <Award className="w-5 h-5 neon-blue" />
              <span className="text-sm font-medium">Award-Winning Quality</span>
            </div>
            <div className="glass-card px-6 py-3 flex items-center space-x-2">
              <Clock className="w-5 h-5 neon-magenta" />
              <span className="text-sm font-medium">Fast Turnaround</span>
            </div>
            <div className="glass-card px-6 py-3 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 neon-blue" />
              <span className="text-sm font-medium">Proven Results</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
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
              Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your digital presence and drive real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="glass-card p-8 h-full hover:neon-glow-blue transition-all duration-300">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:animate-glow`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:neon-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <span className="text-xl font-bold gradient-text">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm text-muted-foreground">Delivery</span>
                      <span className="text-sm font-medium">{service.deliveryTime}</span>
                    </div>
                    <Button className="w-full gradient-primary text-white border-0 group-hover:scale-105 transition-transform">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
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
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures every project delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mx-auto mb-4 hover:neon-glow-blue transition-all duration-300">
                    <step.icon className="w-8 h-8 neon-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
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
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complementary services to complete your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex items-center space-x-4 hover:neon-glow-magenta transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                  <span className="text-primary font-medium">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-accent/5 to-primary/5"
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
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from real clients who trusted me to build their digital empires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 max-w-4xl mx-auto neon-glow-blue"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform Your Digital Presence</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom strategy that will take your content 
              to the next level and build your digital empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white border-0 neon-glow-magenta hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-primary/50 hover:border-primary text-primary hover:text-white hover:bg-primary/20 px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

