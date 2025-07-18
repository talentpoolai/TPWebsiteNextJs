import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Features from './pages/Features';
import Benefits from './pages/Benefits';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import BlogPost from './pages/BlogPost';
import StartFree from './pages/StartFree';
import ThankYou from './pages/ThankYou';

function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/start-free" element={<StartFree />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;