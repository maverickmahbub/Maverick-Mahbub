import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Sparkles, 
  Target, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  Calendar,
  MapPin,
  Code,
  Video,
  Lightbulb
} from 'lucide-react';

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  const stats = [
    { number: "500K+", label: "Video Views", icon: Video },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "100+", label: "Projects Completed", icon: Award },
    { number: "5+", label: "Years Experience", icon: TrendingUp },
  ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Started my journey in digital content creation with a passion for storytelling and visual arts.",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020",
      title: "First Viral Video",
      description: "Created my first viral video that reached over 100K views, marking the start of my digital empire.",
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2021",
      title: "Professional Pivot",
      description: "Transitioned to full-time content creation and started offering professional video editing services.",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2022",
      title: "Agency Launch",
      description: "Founded my digital content agency, helping brands and creators build their online presence.",
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Recognized as a leading digital content architect, speaking at conferences and mentoring creators.",
      icon: Award,
      color: "from-indigo-500 to-purple-500"
    },
    {
      year: "2024",
      title: "Rebuilding the Future",
      description: "Launched my personal brand with the mission to rebuild the digital future, one creator at a time.",
      icon: Sparkles,
      color: "from-cyan-500 to-blue-500"
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Always pushing the boundaries of what's possible in digital content creation.",
      icon: Lightbulb,
    },
    {
      title: "Quality Over Quantity",
      description: "Every piece of content is crafted with meticulous attention to detail and purpose.",
      icon: Award,
    },
    {
      title: "Community Driven",
      description: "Building a community of creators who support and elevate each other.",
      icon: Users,
    },
    {
      title: "Future Focused",
      description: "Staying ahead of trends and technologies to deliver cutting-edge solutions.",
      icon: Rocket,
    },
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
          className="relative z-10 container mx-auto px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
                  <MapPin className="w-4 h-4 neon-blue" />
                  <span className="text-sm font-medium">Based in the Digital Realm</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Meet <span className="gradient-text">Maverick</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A visionary digital content architect on a mission to rebuild the digital future. 
                  Transforming ideas into viral sensations and helping creators build digital empires.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 text-center"
                  >
                    <stat.icon className="w-6 h-6 neon-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Profile Image Placeholder */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="aspect-square rounded-2xl glass-card p-8 neon-glow-blue">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">M</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Maverick Mahbub</h3>
                      <p className="text-muted-foreground">Digital Content Architect</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements around profile */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Story Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="gradient-text">Story</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                It all started with a simple belief: <strong className="text-primary">digital content has the power to change the world</strong>. 
                In 2019, I embarked on a journey that would transform not only my life but the lives of countless creators and businesses.
              </p>
              <p>
                What began as a passion project quickly evolved into something much bigger. I discovered that behind every viral video, 
                every successful brand, and every digital empire, there's a story waiting to be told. My mission became clear: 
                <strong className="text-accent"> help others tell their stories in the most compelling way possible</strong>.
              </p>
              <p>
                Today, I'm not just creating content—I'm <strong className="gradient-text">rebuilding the digital future</strong>. 
                Through innovative strategies, cutting-edge technology, and a deep understanding of what makes content truly resonate, 
                I help creators and businesses build their digital empires from the ground up.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
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
              The <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From humble beginnings to digital empire builder—here's how it all unfolded
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-card p-6 hover:neon-glow-blue transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-4 h-4 neon-blue mr-2" />
                      <span className="text-sm font-medium neon-blue">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center animate-glow`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Vision & Values Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vision & <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The principles that guide everything I do and the future I'm working to create
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-16 text-center max-w-4xl mx-auto neon-glow-magenta"
          >
            <Rocket className="w-12 h-12 neon-magenta mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To rebuild the digital future by empowering creators and businesses with the tools, strategies, 
              and content they need to build lasting digital empires. I envision a world where every story 
              has the power to inspire, connect, and transform lives through the magic of digital content."
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 hover:neon-glow-blue transition-all duration-300"
              >
                <value.icon className="w-8 h-8 neon-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
        className="py-20 bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Build Your Empire</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to transform your vision into viral content and build your digital empire from the ground up.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg neon-glow-blue hover:neon-glow-magenta transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

