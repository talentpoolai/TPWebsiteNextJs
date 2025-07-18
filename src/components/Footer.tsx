import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Shield, Award, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const complianceBadges = [
    {
      name: "",
      description: "Security & Availability",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      image: "/images/678a6d6fc5825e05c17510b8_678a6d497673e6547fd00d40_aicpa-soc-logo-PNG.png",
      verified: true
    },
    {
      name: "",
      description: "Data Protection",
      icon: <Lock className="w-6 h-6 text-green-600" />,
      image: "/images/logo-gdpr@2x.webp",
      verified: true
    },
    {
      name: "",
      description: "Payment Security",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      image: "/images/pci-dss-1.png",
      verified: true
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Section - Moved to Top */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise-Grade Security & Compliance</h3>
              <p className="text-gray-300 text-lg">Your data is protected by industry-leading security standards</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={badge.image} 
                      alt={badge.name}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    {badge.icon}
                    <h4 className="text-white font-bold ml-2">{badge.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{badge.description}</p>
                  {badge.verified && (
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Security Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-white">256-bit SSL</div>
                <div className="text-xs text-gray-400">Encryption</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">99.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400">Monitoring</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Annual</div>
                <div className="text-xs text-gray-400">Audits</div>
              </div>
            </div>
          </div>
        </div>

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