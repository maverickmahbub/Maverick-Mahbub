import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Play, 
  Calendar, 
  Eye, 
  ThumbsUp, 
  Share2, 
  Filter,
  Search,
  Grid3X3,
  List,
  Youtube,
  BookOpen,
  TrendingUp,
  Clock,
  Tag,
  ExternalLink,
  ChevronRight,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContentHub() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const filters = [
    { id: 'all', label: 'All Content', count: 24 },
    { id: 'youtube', label: 'YouTube Videos', count: 15 },
    { id: 'tutorials', label: 'Tutorials', count: 8 },
    { id: 'case-studies', label: 'Case Studies', count: 6 },
    { id: 'insights', label: 'Industry Insights', count: 5 }
  ];

  const youtubeVideos = [
    {
      id: 1,
      title: "How I Grew My YouTube Channel to 500K Subscribers in 8 Months",
      description: "The complete strategy and tactics I used to achieve explosive growth on YouTube, including content planning, optimization, and audience engagement.",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/00d4ff?text=YouTube+Video",
      duration: "12:34",
      views: "125K",
      likes: "8.2K",
      publishDate: "2024-01-15",
      category: "youtube",
      tags: ["Growth", "Strategy", "YouTube"]
    },
    {
      id: 2,
      title: "The Ultimate Video Editing Workflow for Content Creators",
      description: "Step-by-step guide to my professional video editing process that saves hours and creates cinematic quality content every time.",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ff0080?text=Editing+Tutorial",
      duration: "18:45",
      views: "89K",
      likes: "6.1K",
      publishDate: "2024-01-08",
      category: "tutorials",
      tags: ["Editing", "Workflow", "Tutorial"]
    },
    {
      id: 3,
      title: "Case Study: How I Made a Video Go Viral (2M+ Views)",
      description: "Breaking down the exact elements that made this video explode, from thumbnail design to content structure and promotion strategy.",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/8b5cf6?text=Viral+Case+Study",
      duration: "15:22",
      views: "156K",
      likes: "12.3K",
      publishDate: "2024-01-01",
      category: "case-studies",
      tags: ["Viral", "Case Study", "Analysis"]
    },
    {
      id: 4,
      title: "Future of Digital Content: AI and Creator Economy Trends",
      description: "My predictions and insights on where digital content creation is heading, including AI tools, monetization, and platform changes.",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/10b981?text=Future+Trends",
      duration: "22:18",
      views: "67K",
      likes: "4.8K",
      publishDate: "2023-12-25",
      category: "insights",
      tags: ["AI", "Trends", "Future"]
    },
    {
      id: 5,
      title: "Building Your Personal Brand: From Zero to Authority",
      description: "The complete roadmap to establishing yourself as an authority in your niche, including content strategy and audience building.",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/f59e0b?text=Personal+Brand",
      duration: "16:55",
      views: "94K",
      likes: "7.2K",
      publishDate: "2023-12-18",
      category: "youtube",
      tags: ["Branding", "Authority", "Growth"]
    },
    {
      id: 6,
      title: "Advanced Color Grading Techniques for Cinematic Look",
      description: "Professional color grading secrets that will transform your videos from amateur to cinematic quality in minutes.",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ef4444?text=Color+Grading",
      duration: "14:33",
      views: "78K",
      likes: "5.9K",
      publishDate: "2023-12-11",
      category: "tutorials",
      tags: ["Color Grading", "Cinematic", "Advanced"]
    }
  ];

  const blogPosts = [
    {
      id: 7,
      title: "The Psychology Behind Viral Content: What Makes People Share",
      description: "Deep dive into the psychological triggers that make content irresistible to share, backed by research and real examples.",
      readTime: "8 min read",
      publishDate: "2024-01-20",
      category: "insights",
      tags: ["Psychology", "Viral", "Content Strategy"],
      type: "blog"
    },
    {
      id: 8,
      title: "Complete Guide to YouTube Analytics: Metrics That Matter",
      description: "Understanding which YouTube metrics actually drive growth and how to use analytics to optimize your content strategy.",
      readTime: "12 min read",
      publishDate: "2024-01-12",
      category: "tutorials",
      tags: ["Analytics", "YouTube", "Data"],
      type: "blog"
    }
  ];

  const allContent = [...youtubeVideos, ...blogPosts];

  const filteredContent = allContent.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { label: "Total Views", value: "2.5M+", icon: Eye },
    { label: "Subscribers", value: "500K+", icon: Youtube },
    { label: "Published Videos", value: "150+", icon: Play },
    { label: "Blog Articles", value: "50+", icon: BookOpen }
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
              <TrendingUp className="w-4 h-4 neon-blue" />
              <span className="text-sm font-medium">Content That Builds Empires</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Content Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my latest YouTube videos, tutorials, case studies, and industry insights. 
              Everything you need to build your digital empire, all in one place.
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

      {/* Filters and Search */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'gradient-primary text-white neon-glow-blue'
                      : 'glass-card hover:neon-glow-magenta'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 glass-card p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          {filteredContent.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No content found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: viewMode === 'grid' ? 1.05 : 1.02, y: -5 }}
                  className={`group cursor-pointer ${
                    viewMode === 'list' ? 'flex gap-6 items-center' : ''
                  }`}
                >
                  <div className={`glass-card overflow-hidden hover:neon-glow-blue transition-all duration-300 ${
                    viewMode === 'list' ? 'flex-1 p-6' : 'h-full'
                  }`}>
                    {/* Video Thumbnail or Blog Icon */}
                    {item.type !== 'blog' ? (
                      <div className={`relative ${viewMode === 'list' ? 'w-48 h-28 flex-shrink-0' : 'aspect-video'} mb-4`}>
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/40 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      </div>
                    ) : (
                      <div className={`${viewMode === 'list' ? 'w-48 h-28 flex-shrink-0' : 'aspect-video'} mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center`}>
                        <BookOpen className="w-12 h-12 neon-blue" />
                      </div>
                    )}

                    {/* Content Info */}
                    <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.category === 'youtube' ? 'bg-red-500/20 text-red-400' :
                          item.category === 'tutorials' ? 'bg-blue-500/20 text-blue-400' :
                          item.category === 'case-studies' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {filters.find(f => f.id === item.category)?.label || item.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(item.publishDate).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:neon-blue transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs px-2 py-1 glass-card text-primary">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          {item.views && (
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {item.views}
                            </span>
                          )}
                          {item.likes && (
                            <span className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {item.likes}
                            </span>
                          )}
                          {item.readTime && (
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {item.readTime}
                            </span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-white hover:bg-primary/20 group-hover:scale-105 transition-all"
                        >
                          {item.type === 'blog' ? 'Read More' : 'Watch Now'}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Featured Content */}
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
              Featured <span className="gradient-text">Content</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hand-picked content that showcases the best strategies and insights for building your digital empire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 neon-glow-blue"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-yellow-400">Featured Video</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Most Popular This Month</h3>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">How I Grew My YouTube Channel to 500K Subscribers</h4>
              <p className="text-muted-foreground text-sm mb-4">
                The complete strategy that took my channel from zero to half a million subscribers in record time.
              </p>
              <Button className="gradient-primary text-white border-0">
                Watch Now
                <Play className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Latest Blog Post */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 neon-glow-magenta"
            >
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5 neon-magenta" />
                <span className="text-sm font-medium neon-magenta">Latest Article</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fresh Insights</h3>
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-12 h-12 neon-magenta" />
              </div>
              <h4 className="text-lg font-semibold mb-2">The Psychology Behind Viral Content</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Understanding the psychological triggers that make content irresistible to share and engage with.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/20">
                Read Article
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter CTA */}
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
              Never Miss <span className="gradient-text">New Content</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get notified when I publish new videos, tutorials, and insights. 
              Join 50,000+ creators building their digital empires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none"
              />
              <Button className="gradient-primary text-white border-0 neon-glow-magenta hover:scale-105 transition-all duration-300 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

