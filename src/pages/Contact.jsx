import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Zap,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@maverickmahbub.com",
      description: "Drop me a line anytime",
      color: "neon-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Let's talk about your project",
      color: "neon-magenta"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Digital Realm",
      description: "Working globally, thinking locally",
      color: "neon-blue"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "Quick turnaround guaranteed",
      color: "neon-magenta"
    }
  ];

  const socialLinks = [
    {
      icon: Youtube,
      label: "YouTube",
      handle: "@MaverickMahbub",
      followers: "500K+",
      color: "bg-red-500",
      url: "https://youtube.com/@maverickmahbub"
    },
    {
      icon: Twitter,
      label: "Twitter",
      handle: "@MaverickMahbub",
      followers: "125K+",
      color: "bg-blue-500",
      url: "https://twitter.com/maverickmahbub"
    },
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@maverick.mahbub",
      followers: "200K+",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://instagram.com/maverick.mahbub"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "Maverick Mahbub",
      followers: "50K+",
      color: "bg-blue-600",
      url: "https://linkedin.com/in/maverickmahbub"
    }
  ];

  const services = [
    "YouTube Content Creation",
    "Video Editing",
    "Digital Strategy Consulting",
    "Social Media Management",
    "Brand Identity Design",
    "Content Workshops",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Let's discuss"
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Response Rate", value: "100%", icon: CheckCircle },
    { label: "Avg. Response Time", value: "< 12h", icon: Clock }
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
              <span className="text-sm font-medium">Let's Build Your Empire</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and create 
              a strategy that will take your content to the next level and build your digital empire.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <stat.icon className="w-6 h-6 neon-blue mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 neon-glow-blue">
                <h2 className="text-3xl font-bold mb-6">
                  Start Your <span className="gradient-text">Project</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and I'll get back to you within 24 hours with a custom proposal.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-green-400">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        placeholder="Your company name (optional)"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        >
                          <option value="">Select service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-white border-0 py-4 text-lg font-semibold neon-glow-magenta hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Prefer to reach out directly? Here are all the ways you can connect with me.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 hover:neon-glow-blue transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{info.label}</h3>
                        <p className={`text-lg font-medium ${info.color} mb-1`}>{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="glass-card p-6 neon-glow-magenta">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/50 text-primary hover:bg-primary/20"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-accent/50 text-accent hover:bg-accent/20"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Join My Discord Community
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    View My Portfolio
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
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
              Follow My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with my latest content, behind-the-scenes insights, and digital empire building tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center hover:neon-glow-blue transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center mx-auto mb-4 group-hover:animate-glow`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{social.label}</h3>
                <p className="text-sm text-muted-foreground mb-2">{social.handle}</p>
                <p className="text-sm font-medium gradient-text">{social.followers} followers</p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick answers to common questions about working with me
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's your typical response time?",
                answer: "I respond to all inquiries within 24 hours, usually much faster. For urgent projects, I'm available for same-day consultations."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! I work with creators and businesses of all sizes, from individual content creators to Fortune 500 companies. Every project gets the same level of attention and quality."
              },
              {
                question: "What's included in your video editing service?",
                answer: "My video editing includes advanced color grading, motion graphics, audio enhancement, custom transitions, and unlimited revisions until you're 100% satisfied."
              },
              {
                question: "Can you help with content strategy?",
                answer: "Yes! I provide comprehensive content strategy including audience analysis, content calendar planning, SEO optimization, and growth hacking strategies tailored to your niche."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, I offer flexible payment plans for larger projects. We can discuss terms that work for your budget during our initial consultation."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:neon-glow-blue transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-accent/10 to-primary/10"
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
              Ready to <span className="gradient-text">Build Your Empire</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let your content dreams stay dreams. Let's turn your vision into viral reality 
              and build a digital empire that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-white border-0 neon-glow-magenta hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                Start Your Project Today
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-primary/50 hover:border-primary text-primary hover:text-white hover:bg-primary/20 px-8 py-4"
              >
                Schedule Free Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

