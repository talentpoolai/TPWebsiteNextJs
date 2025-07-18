import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Shield, Award, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const complianceBadges = [
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      image: "/images/678a6d6fc5825e05c17510b8_678a6d497673e6547fd00d40_aicpa-soc-logo-PNG.png",
      verified: true
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection",
      icon: <Lock className="w-6 h-6 text-green-600" />,
      image: "/images/Filecamp-gdpr.png",
      verified: true
    },
    {
      name: "PCI DSS",
      description: "Payment Security",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      image: "/images/pci-dss-1.png",
      verified: true
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Compliance Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Enterprise-Grade Security & Compliance
            </h3>
            <p className="text-gray-400 text-sm">
              Your data is protected by industry-leading security standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {complianceBadges.map((badge, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                {/* Verified Badge */}
                {badge.verified && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  {/* Badge Image */}
                  <img 
                    src="/images/uploads/678a6d6fc5825e05c17510b8_678a6d497673e6547fd00d40_aicpa-soc-logo-PNG.png" 
                    alt="SOC 2 Type II"
                    className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
                  />
                  <h4 className="text-lg font-semibold text-white mt-4 mb-2">
                    {badge.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Security Information */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
              <div className="flex flex-col items-center">
                <Lock className="w-6 h-6 text-blue-400 mb-2" />
                <div className="text-white font-bold text-lg">256-bit</div>
                <div className="text-gray-400 text-xs">SSL Encryption</div>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-6 h-6 text-green-400 mb-2" />
                <div className="text-white font-bold text-lg">99.9%</div>
                <div className="text-gray-400 text-xs">Uptime SLA</div>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-white font-bold text-lg">24/7</div>
                <div className="text-gray-400 text-xs">Security Monitoring</div>
              </div>
              <div className="flex flex-col items-center">
                <Lock className="w-6 h-6 text-orange-400 mb-2" />
                <div className="text-white font-bold text-lg">Annual</div>
                <div className="text-gray-400 text-xs">Security Audits</div>
              </div>
            </div>
            
            {/* Additional Security Features */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-400" />
                <span>End-to-End Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-purple-400" />
                <span>ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-orange-400" />
                <span>Regular Penetration Testing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-red-400" />
                <span>Zero Trust Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>Multi-Factor Authentication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
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