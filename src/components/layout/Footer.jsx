import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Youtube, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Heart,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: '#', 
      color: 'hover:text-red-500' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: '#', 
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: '#', 
      color: 'hover:text-pink-500' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: '#', 
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:hello@maverickmahbub.com', 
      color: 'hover:text-primary' 
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Content Hub', path: '/content' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'YouTube Content Creation',
    'Video Editing',
    'Digital Consulting',
    'Brand Strategy',
    'Social Media Management',
  ];

  return (
    <footer className="relative bg-gradient-dark border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Maverick Mahbub</h3>
                <p className="text-sm text-muted-foreground">Rebuilding the Digital Future</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Digital Content Architect specializing in YouTube content creation, video editing, 
              and digital consulting. Helping creators and businesses build their digital presence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 glass-card transition-colors duration-200 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 neon-blue">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 neon-magenta">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass-card p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 gradient-text">
              Stay Updated
            </h4>
            <p className="text-muted-foreground mb-6">
              Get the latest insights on digital content creation and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-primary text-white border-0 neon-glow-blue">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Maverick Mahbub. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2 glass-card hover:neon-glow-blue transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }} />
    </footer>
  );
}

