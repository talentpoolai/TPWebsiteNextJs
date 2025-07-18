import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Users, Target, TrendingUp, Shield, Zap, Clock, DollarSign, BookOpen, FileText, Award, ArrowRight, PenTool } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navigation = [
    { 
      name: 'Features', 
      href: '/features'
    },
    { 
      name: 'Benefits', 
      href: '/benefits'
    },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'Resources', 
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Blog",
          description: "Expert insights and practical advice for modern recruiting",
          icon: <PenTool className="w-6 h-6 text-blue-600" />,
          href: "/blog",
          badge: "Latest"
        },
        {
          title: "Case Studies", 
          description: "Real success stories from companies using Talentpool",
          icon: <Award className="w-6 h-6 text-purple-600" />,
          href: "/case-studies",
          badge: "New"
        }
      ]
    },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (itemName: string) => {
    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    
    const item = navigation.find(nav => nav.name === itemName);
    if (item?.hasDropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow cursor movement to dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when mouse enters dropdown
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when mouse leaves dropdown area
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <img 
                src="https://www.thetalentpool.ai/wp-content/uploads/2024/09/talentpool-logo_color.png" 
                alt="Talentpool" 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-talentpool-dark flex items-center whitespace-nowrap ${
                      isActive(item.href) ? 'text-talentpool-dark' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[100]"
                    >
                      {item.name === 'Resources' ? (
                        <div className="w-[520px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                          {/* Header with Stats */}
                          <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 border-b border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-bold text-gray-900">Knowledge Hub</h3>
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-500 font-medium">Live Updates</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Your complete guide to modern recruiting</p>
                            
                            {/* Quick Stats */}
                            <div className="flex items-center space-x-6 text-xs">
                              <div className="flex items-center space-x-1">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600">50+ Articles</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600">12 Whitepapers</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600">8 Case Studies</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Resource Cards */}
                          <div className="relative p-6">
                            <div className="grid grid-cols-1 gap-4">
                              {item.dropdownItems?.map((dropdownItem, index) => (
                                <div
                                  key={index}
                                  className="group"
                                >
                                  <Link to={index === 0 ? '/blog' : '/case-studies'} className="block">
                                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform group-hover:scale-[1.02] ${
                                      index === 0 
                                        ? 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 shadow-lg' 
                                        : 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200'
                                    }`}>
                                      {/* Card Content */}
                                      <div className="flex items-center p-5">
                                        <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                                          index === 0 
                                            ? 'bg-blue-100 group-hover:bg-blue-200' 
                                            : 'bg-orange-100 group-hover:bg-orange-200'
                                        }`}>
                                          <div className={`${
                                            index === 0 ? 'text-blue-600' : 'text-orange-600'
                                          }`}>
                                            {dropdownItem.icon}
                                          </div>
                                        </div>
                                        
                                        <div className="flex-1 ml-4">
                                          <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                              {dropdownItem.title}
                                            </h4>
                                            {dropdownItem.badge && (
                                              <span className={`text-xs px-3 py-1 rounded-full font-semibold transition-all duration-300 ${
                                                index === 0 
                                                  ? 'bg-blue-600 text-white group-hover:bg-blue-700' 
                                                  : 'bg-orange-600 text-white group-hover:bg-orange-700'
                                              }`}>
                                                {dropdownItem.badge}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                            {dropdownItem.description}
                                          </p>
                                          
                                          {/* Mini Preview */}
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                                              {index === 0 && (
                                                <>
                                                  <span>• Latest: "AI in Recruiting 2024"</span>
                                                  <span>• 5 min read</span>
                                                </>
                                              )}
                                              {index === 1 && (
                                                <>
                                                  <span>• Featured: "TechCorp Success"</span>
                                                  <span>• 40% faster hiring</span>
                                                </>
                                              )}
                                            </div>
                                            <ArrowRight className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1 ${
                                              index === 0 ? 'text-blue-500' : 'text-orange-500'
                                            }`} />
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* Hover Effect Overlay */}
                                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                                        index === 0 
                                          ? 'bg-blue-600' 
                                          : 'bg-orange-600'
                                      }`}>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Enhanced Footer */}
                          <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-talentpool-dark rounded-lg flex items-center justify-center">
                                  <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">Explore Everything</p>
                                  <p className="text-xs text-gray-600">Browse our complete resource library</p>
                                </div>
                              </div>
                              <Link 
                                to="/resources"
                                className="flex items-center space-x-2 bg-talentpool-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-talentpool-medium transition-all duration-300 group"
                              >
                                <span>View All</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-[600px] bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                          <div className="grid grid-cols-2 gap-6">
                            {item.dropdownItems?.map((dropdownItem, index) => (
                              <div 
                                key={index}
                                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                              >
                                <div className="flex-shrink-0 p-3 bg-talentpool-light rounded-xl group-hover:bg-talentpool-medium transition-colors">
                                  {dropdownItem.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-base font-semibold text-gray-900 group-hover:text-talentpool-dark transition-colors mb-1">
                                    {dropdownItem.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* View All Link */}
                            <Link to={item.href}>
                              <div className="flex items-center space-x-2 bg-talentpool-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-talentpool-medium transition-all duration-300 group">
                                <span>View All</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </Link>
                          </div>
                        
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons - Responsive */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              <button 
                onClick={() => {
                  const formSection = document.querySelector('.pipedrive-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-sm font-medium text-gray-700 hover:text-talentpool-dark transition-colors whitespace-nowrap"
              >
                Talk to Us
              </button>
              <Link 
                to="/start-free"
                className="bg-talentpool-dark text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-talentpool-medium transition-colors text-sm whitespace-nowrap"
              >
                Start Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 z-50 relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 bg-white/90 backdrop-blur-md rounded-b-2xl">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block text-sm font-medium transition-colors hover:text-talentpool-dark px-2 py-1 ${
                        isActive(item.href) ? 'text-talentpool-dark' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Dropdown Items */}
                    {item.hasDropdown && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.dropdownItems?.slice(0, 4).map((dropdownItem, index) => (
                          <div key={index} className="flex items-center space-x-2 text-xs text-gray-600 py-1">
                            {dropdownItem.icon}
                            <span>{dropdownItem.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                  <button className="block w-full text-left text-sm font-medium text-gray-700 px-2 py-1">
                    Talk to Us
                  </button>
                  <Link 
                    to="/start-free"
                    className="block w-full bg-talentpool-dark text-white px-6 py-3 rounded-lg font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Free
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;