import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Shield, Award, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const complianceBadges = [
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      image: "../../public/images/uploads/678a6d6fc5825e05c17510b8_678a6d497673e6547fd00d40_aicpa-soc-logo-PNG.png",
      verified: true
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection",
      icon: <Lock className="w-6 h-6 text-green-600" />,
      image: "../../public/images/uploads/logo-gdpr@2x.webp",
      verified: true
    },
    {
      name: "PCI DSS",
      description: "Payment Security",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      image: "../../public/images/uploads/pci-dss-1.png",
      verified: true
    }
  ];

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

        {/* Compliance Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold mb-8">Enterprise-Grade Security & Compliance</h3>
            <div className="flex items-center justify-center space-x-12">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <img 
                    src={badge.image} 
                    alt={badge.name}
                    className="w-24 h-24 object-contain mb-4 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  />
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Talentpool. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Compliance</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Trust Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;