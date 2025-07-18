import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Press
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/benefits" className="block text-gray-400 hover:text-white transition-colors">
                Benefits
              </Link>
              <Link to="/pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/resources" className="block text-gray-400 hover:text-white transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Compliance</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                GDPR-ready
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                EEOC Compliant
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                SOC2 Type II
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <Link 
              to="/start-free"
              className="block w-full bg-talentpool-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-talentpool-medium transition-colors mb-4 text-center"
            >
              Start Free
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Talentpool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;