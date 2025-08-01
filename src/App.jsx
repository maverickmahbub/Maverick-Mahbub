import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContentHub from './pages/ContentHub';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <Header />
        
        <main className="relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/content" element={<ContentHub />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Floating Elements */}
        <div className="fixed top-1/4 left-4 w-1 h-1 bg-primary rounded-full animate-float opacity-60 pointer-events-none" />
        <div className="fixed top-3/4 right-8 w-2 h-2 bg-accent rounded-full animate-float opacity-40 pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="fixed bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-80 pointer-events-none" style={{ animationDelay: '1.5s' }} />
      </div>
    </Router>
  );
}

export default App;
